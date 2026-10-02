import * as React from "react"
import Matter from "matter-js"
import { useInView } from "framer-motion"

export default function PhysicsStickerWall({
    images = [
        { src: "/images/star.png", alt: "Kawaii star" },
        { src: "/images/girl.png", alt: "Curly hair girl" },
        { src: "/images/ghost.png", alt: "Kawaii ghost" },
        { src: "/images/postcard.png", alt: "Travel postcard" },
        { src: "/images/journal.png", alt: "Heart journal" },
        { src: "/images/supra.png", alt: "Toyota Supra" },
        { src: "/images/reactIcon.png", alt: "React logo" },
        { src: "/images/jsIcon.png", alt: "JavaScript logo" },
        { src: "/images/cat.png", alt: "Cat face" },
        { src: "/images/f1.png", alt: "F1 race car" },

    ],
    background = "#FFFFFF",
    stickerCount = 12,
    stickerSize = 120,
    sizeRandomness = 0.3,
    gravityStrength = 1,
    restitution = 0.5,
    friction = 0.25,
    throwPower = 1,
    borderRadius = 14,
    style,
}) {
    const rootRef = React.useRef(null)
    const canvasRef = React.useRef(null)
    const engineRef = React.useRef(null)
    const runnerRef = React.useRef(null)
    const rafRef = React.useRef(null)
    const resizeObserverRef = React.useRef(null)
    const boundariesRef = React.useRef([])
    const stickersRef = React.useRef([])
    const loadedImagesRef = React.useRef([])
    const dragRef = React.useRef({ body: null, points: [] })
    const sizeRef = React.useRef({ width: 300, height: 300, dpr: 1 })

    const isInView = useInView(rootRef, { amount: 0.01 })

    const activeImageSources = React.useMemo(() => {
        const valid = (images || []).filter((img) => img?.src)
        return valid.length > 0
            ? valid
            : [
                {
                    src: "https://framerusercontent.com/images/GfGkADagM4KEibNcIiRUWlfrR0.jpg",
                    alt: "Gradient 1 - Blue",
                },
            ]
    }, [images])

    const randomInRange = React.useCallback((min, max) => {
        return min + Math.random() * (max - min)
    }, [])

    const drawRoundedImage = React.useCallback(
        (ctx, image, x, y, w, h, angle, radius) => {
            const r = Math.max(0, Math.min(radius, Math.min(w, h) / 2))
            ctx.save()
            ctx.translate(x, y)
            ctx.rotate(angle)
            ctx.beginPath()
            ctx.moveTo(-w / 2 + r, -h / 2)
            ctx.lineTo(w / 2 - r, -h / 2)
            ctx.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r)
            ctx.lineTo(w / 2, h / 2 - r)
            ctx.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2)
            ctx.lineTo(-w / 2 + r, h / 2)
            ctx.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r)
            ctx.lineTo(-w / 2, -h / 2 + r)
            ctx.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2)
            ctx.closePath()
            ctx.clip()
            ctx.drawImage(image, -w / 2, -h / 2, w, h)
            ctx.restore()
        },
        []
    )

    React.useEffect(() => {
        if (!isInView) return
        if (typeof window === "undefined") return
        if (!rootRef.current || !canvasRef.current) return

        const {
            Engine,
            Runner,
            Bodies,
            Composite,
            Body,
            Query,
            Sleeping,
            Events,
        } = Matter

        const root = rootRef.current
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let isDisposed = false

        const engine = Engine.create({
            enableSleeping: true,
            positionIterations: 11,
            velocityIterations: 9,
            constraintIterations: 2,
        })
        engine.gravity.x = 0
        engine.gravity.y = gravityStrength
        engineRef.current = engine

        const runner = Runner.create()
        runnerRef.current = runner

        const setCanvasSize = () => {
            const rect = root.getBoundingClientRect()
            const width = Math.max(1, rect.width)
            const height = Math.max(1, rect.height)
            const dpr = Math.max(1, window.devicePixelRatio || 1)
            canvas.width = Math.floor(width * dpr)
            canvas.height = Math.floor(height * dpr)
            canvas.style.width = `${width}px`
            canvas.style.height = `${height}px`
            sizeRef.current = { width, height, dpr }
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
        }

        const rebuildBoundaries = () => {
            const { width, height } = sizeRef.current
            if (boundariesRef.current.length > 0) {
                Composite.remove(engine.world, boundariesRef.current)
                boundariesRef.current = []
            }
            const wallThickness = 160
            const floor = Bodies.rectangle(
                width / 2,
                height + wallThickness / 2,
                width + wallThickness * 2,
                wallThickness,
                { isStatic: true, restitution: 0.05, friction: 0.9 }
            )
            const leftWall = Bodies.rectangle(
                -wallThickness / 2,
                height / 2,
                wallThickness,
                height * 3,
                { isStatic: true, restitution: 0.05, friction: 0.9 }
            )
            const rightWall = Bodies.rectangle(
                width + wallThickness / 2,
                height / 2,
                wallThickness,
                height * 3,
                { isStatic: true, restitution: 0.05, friction: 0.9 }
            )
            boundariesRef.current = [floor, leftWall, rightWall]
            Composite.add(engine.world, boundariesRef.current)
        }

        const loadImages = async () => {
            const requests = activeImageSources.map((img) => {
                return new Promise((resolve) => {
                    if (!img?.src) {
                        resolve(null)
                        return
                    }
                    const el = new Image()
                    el.crossOrigin = "anonymous"
                    el.decoding = "async"
                    el.onload = () => resolve(el)
                    el.onerror = () => resolve(null)
                    el.src = img.src
                })
            })
            const results = await Promise.all(requests)
            loadedImagesRef.current = results.filter((x) => x !== null)
        }

        const spawnStickers = () => {
            const { width } = sizeRef.current
            const safeCount = Math.max(1, Math.floor(stickerCount))
            const bodies = []
            const imageCount = Math.max(1, loadedImagesRef.current.length)

            for (let i = 0; i < safeCount; i++) {
                const randomScale =
                    1 + randomInRange(-sizeRandomness, sizeRandomness)
                const s = Math.max(20, stickerSize * randomScale)
                const aspect = randomInRange(0.8, 1.25)
                const w = s
                const h = s / aspect
                const baseX = ((i + 0.5) / safeCount) * width
                const x = baseX + randomInRange(-width * 0.1, width * 0.1)
                const y = -i * (h * 0.7) - randomInRange(20, 180)
                const angle = randomInRange(-0.45, 0.45)

                const body = Bodies.rectangle(x, y, w, h, {
                    restitution,
                    friction,
                    frictionStatic: Math.min(1, friction + 0.3),
                    frictionAir: 0.01 + friction * 0.03,
                    slop: 0.05,
                    sleepThreshold: 28,
                })
                Body.setAngle(body, angle)
                Sleeping.set(body, false)

                bodies.push({
                    body,
                    imageIndex: i % imageCount,
                    width: w,
                    height: h,
                })
            }
            stickersRef.current = bodies
            Composite.add(
                engine.world,
                bodies.map((s) => s.body)
            )
        }

        const getPointerWorld = (event) => {
            const rect = canvas.getBoundingClientRect()
            return {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top,
            }
        }

        const onPointerDown = (event) => {
            const pos = getPointerWorld(event)
            const hit = Query.point(
                stickersRef.current.map((s) => s.body),
                pos
            )
            if (hit.length > 0) {
                const body = hit[hit.length - 1]
                dragRef.current.body = body
                dragRef.current.points = [{ ...pos, t: performance.now() }]
                Sleeping.set(body, false)
                canvas.setPointerCapture(event.pointerId)
            }
        }

        const onPointerMove = (event) => {
            const dragBody = dragRef.current.body
            if (!dragBody) return
            const pos = getPointerWorld(event)
            const now = performance.now()
            dragRef.current.points.push({ ...pos, t: now })
            if (dragRef.current.points.length > 8) {
                dragRef.current.points.shift()
            }
            const stiffness = 0.22
            const dx = pos.x - dragBody.position.x
            const dy = pos.y - dragBody.position.y
            Body.setVelocity(dragBody, {
                x: dx * stiffness,
                y: dy * stiffness,
            })
            Body.setAngularVelocity(dragBody, 0)
        }

        const onPointerUp = (event) => {
            const dragBody = dragRef.current.body
            if (!dragBody) return
            const points = dragRef.current.points
            const first = points[0]
            const last = points[points.length - 1]
            if (first && last && last.t > first.t) {
                const dt = last.t - first.t
                const vx = ((last.x - first.x) / dt) * 16.67 * throwPower
                const vy = ((last.y - first.y) / dt) * 16.67 * throwPower
                Body.setVelocity(dragBody, { x: vx, y: vy })
            }
            dragRef.current.body = null
            dragRef.current.points = []
            if (canvas.hasPointerCapture(event.pointerId)) {
                canvas.releasePointerCapture(event.pointerId)
            }
        }

        const render = () => {
            if (isDisposed) return
            const { width, height } = sizeRef.current
            ctx.clearRect(0, 0, width, height)
            ctx.fillStyle = background
            ctx.fillRect(0, 0, width, height)

            const imgs = loadedImagesRef.current
            stickersRef.current.forEach((sticker, index) => {
                const { body } = sticker
                const image =
                    imgs[sticker.imageIndex % Math.max(1, imgs.length)] ||
                    null
                if (image) {
                    drawRoundedImage(
                        ctx,
                        image,
                        body.position.x,
                        body.position.y,
                        sticker.width,
                        sticker.height,
                        body.angle,
                        borderRadius
                    )
                } else {
                    ctx.save()
                    ctx.translate(body.position.x, body.position.y)
                    ctx.rotate(body.angle)
                    ctx.fillStyle = index % 2 === 0 ? "#EEEEEE" : "#CCCCCC"
                    ctx.fillRect(
                        -sticker.width / 2,
                        -sticker.height / 2,
                        sticker.width,
                        sticker.height
                    )
                    ctx.restore()
                }
            })
            rafRef.current = window.requestAnimationFrame(render)
        }

        const onBeforeUpdate = () => {
            if (dragRef.current.body) {
                Sleeping.set(dragRef.current.body, false)
            }
        }

        const setup = async () => {
            setCanvasSize()
            rebuildBoundaries()
            await loadImages()
            if (isDisposed) return
            spawnStickers()
            Events.on(engine, "beforeUpdate", onBeforeUpdate)
            Runner.run(runner, engine)
            rafRef.current = window.requestAnimationFrame(render)
        }

        setup()

        resizeObserverRef.current = new ResizeObserver(() => {
            setCanvasSize()
            rebuildBoundaries()
        })
        resizeObserverRef.current.observe(root)

        canvas.addEventListener("pointerdown", onPointerDown)
        canvas.addEventListener("pointermove", onPointerMove)
        canvas.addEventListener("pointerup", onPointerUp)
        canvas.addEventListener("pointercancel", onPointerUp)
        canvas.addEventListener("pointerleave", onPointerUp)

        return () => {
            isDisposed = true
            canvas.removeEventListener("pointerdown", onPointerDown)
            canvas.removeEventListener("pointermove", onPointerMove)
            canvas.removeEventListener("pointerup", onPointerUp)
            canvas.removeEventListener("pointercancel", onPointerUp)
            canvas.removeEventListener("pointerleave", onPointerUp)

            if (resizeObserverRef.current) {
                resizeObserverRef.current.disconnect()
                resizeObserverRef.current = null
            }

            if (rafRef.current !== null) {
                window.cancelAnimationFrame(rafRef.current)
                rafRef.current = null
            }

            Events.off(engine, "beforeUpdate", onBeforeUpdate)
            Runner.stop(runner)
            Composite.clear(engine.world, false)
            Engine.clear(engine)

            boundariesRef.current = []
            stickersRef.current = []
            loadedImagesRef.current = []
            dragRef.current = { body: null, points: [] }
            engineRef.current = null
            runnerRef.current = null
        }
    }, [
        activeImageSources,
        background,
        borderRadius,
        friction,
        gravityStrength,
        isInView,
        randomInRange,
        restitution,
        sizeRandomness,
        stickerCount,
        stickerSize,
        throwPower,
        drawRoundedImage,
    ])

    return (
        <div
            ref={rootRef}
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                background,
                ...style,
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    display: "block",
                    touchAction: "none",
                    cursor: "grab",
                }}
                role="application"
                aria-label="Physics Sticker Wall"
            />
        </div>
    )
}