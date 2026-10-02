// import * as React from "react"
// import { Canvas, useFrame, useThree } from "@react-three/fiber"
// import * as THREE from "three"

// function PetBody({
//     color,
//     eyeColor,
//     scale,
//     followSpeed,
//     wobbleIntensity,
//     idleTimeout,
//     onSleepChange,
//     bubbleRef,
//     chatOffset,
// }) {
//     const groupRef = React.useRef(null)
//     const eyeLeftRef = React.useRef(null)
//     const eyeRightRef = React.useRef(null)

//     const targetRef = React.useRef(new THREE.Vector3(0, 0, 0))
//     const currentRef = React.useRef(new THREE.Vector3(0, 0, 0))
//     const prevPosRef = React.useRef(new THREE.Vector3(0, 0, 0))
//     const lastPointerRef = React.useRef(new THREE.Vector2(0, 0))
//     const lastMoveTimeRef = React.useRef(0)
//     const isSleepingRef = React.useRef(false)

//     const nextBlinkRef = React.useRef(2 + Math.random() * 2)
//     const blinkProgressRef = React.useRef(0)
//     const isBlinkingRef = React.useRef(false)

//     const { camera, size } = useThree()

//     useFrame((state, delta) => {
//         const t = state.clock.elapsedTime
//         const pointer = state.pointer

//         // detect idle vs active pointer
//         if (
//             Math.abs(pointer.x - lastPointerRef.current.x) > 0.001 ||
//             Math.abs(pointer.y - lastPointerRef.current.y) > 0.001
//         ) {
//             lastMoveTimeRef.current = t
//             lastPointerRef.current.set(pointer.x, pointer.y)
//         }
//         const idleFor = t - lastMoveTimeRef.current
//         const sleeping = idleFor * 1000 > idleTimeout
//         if (sleeping !== isSleepingRef.current) {
//             isSleepingRef.current = sleeping
//             onSleepChange?.(sleeping)
//         }

//         // target position in world space at z = 0
//         const vp = state.viewport
//         if (!sleeping) {
//             targetRef.current.set(
//                 (pointer.x * vp.width) / 2,
//                 (pointer.y * vp.height) / 2,
//                 0
//             )
//         } else {
//             // gentle drift near center while asleep
//             targetRef.current.set(
//                 Math.sin(t * 0.3) * 0.3,
//                 Math.sin(t * 0.6) * 0.15 - 0.2,
//                 0
//             )
//         }

//         // spring toward target
//         prevPosRef.current.copy(currentRef.current)
//         currentRef.current.lerp(targetRef.current, followSpeed)

//         const group = groupRef.current
//         if (group) {
//             group.position.copy(currentRef.current)

//             // squash/stretch based on speed
//             const velocity =
//                 currentRef.current.distanceTo(prevPosRef.current) / Math.max(delta, 0.001)
//             const speedFactor = THREE.MathUtils.clamp(velocity * wobbleIntensity, 0, 0.35)
//             const breathe = sleeping
//                 ? Math.sin(t * 1.2) * 0.02
//                 : Math.sin(t * 3) * 0.015
//             group.scale.set(
//                 scale * (1 - speedFactor + breathe),
//                 scale * (1 + speedFactor * 1.4 + breathe),
//                 scale * (1 - speedFactor + breathe)
//             )

//             // lean slightly in movement direction
//             const dx = currentRef.current.x - prevPosRef.current.x
//             group.rotation.z = THREE.MathUtils.lerp(
//                 group.rotation.z,
//                 THREE.MathUtils.clamp(-dx * 6, -0.4, 0.4),
//                 0.15
//             )
//         }

//         // blinking
//         if (sleeping) {
//             blinkProgressRef.current = 1
//         } else {
//             if (!isBlinkingRef.current) {
//                 nextBlinkRef.current -= delta
//                 if (nextBlinkRef.current <= 0) {
//                     isBlinkingRef.current = true
//                     blinkProgressRef.current = 0
//                 }
//             } else {
//                 blinkProgressRef.current += delta * 8
//                 if (blinkProgressRef.current >= 1) {
//                     if (blinkProgressRef.current >= 1.5) {
//                         isBlinkingRef.current = false
//                         nextBlinkRef.current = 2 + Math.random() * 3
//                         blinkProgressRef.current = 0
//                     }
//                 }
//             }
//         }
//         const closedAmount = sleeping
//             ? 0.92
//             : Math.sin(Math.min(blinkProgressRef.current, 1) * Math.PI) * 0.92
//         const eyeScaleY = 1 - closedAmount
//         if (eyeLeftRef.current) eyeLeftRef.current.scale.y = eyeScaleY
//         if (eyeRightRef.current) eyeRightRef.current.scale.y = eyeScaleY

//         // sync HTML chat bubble to projected screen position
//         if (bubbleRef?.current && group) {
//             const worldPos = new THREE.Vector3()
//             group.getWorldPosition(worldPos)
//             worldPos.y += 1.1 * scale + chatOffset.y
//             worldPos.x += chatOffset.x
//             worldPos.project(camera)
//             const x = (worldPos.x * 0.5 + 0.5) * size.width
//             const y = (-worldPos.y * 0.5 + 0.5) * size.height
//             bubbleRef.current.style.transform = `translate(-50%, -100%) translate(${x}px, ${y}px)`
//         }
//     })

//     return (
//         <group ref={groupRef}>
//             {/* body */}
//             <mesh castShadow>
//                 <sphereGeometry args={[1, 32, 32]} />
//                 <meshStandardMaterial color={color} roughness={0.4} metalness={0.05} />
//             </mesh>
//             {/* eyes */}
//             <mesh ref={eyeLeftRef} position={[-0.35, 0.2, 0.85]}>
//                 <sphereGeometry args={[0.14, 16, 16]} />
//                 <meshStandardMaterial color={eyeColor} />
//             </mesh>
//             <mesh ref={eyeRightRef} position={[0.35, 0.2, 0.85]}>
//                 <sphereGeometry args={[0.14, 16, 16]} />
//                 <meshStandardMaterial color={eyeColor} />
//             </mesh>
//         </group>
//     )
// }

// export default function InteractivePet({
//     color = "#7c9cff",
//     eyeColor = "#111111",
//     scale = 1,
//     followSpeed = 0.12,
//     wobbleIntensity = 1,
//     idleTimeout = 4000,
//     chatActiveText = "Hi! 👋",
//     chatIdleText = "zzz...",
//     chatBubbleColor = "#ffffff",
//     chatTextColor = "#111111",
//     chatOffset = { x: 0, y: 0 },
//     style,
// }) {
//     const bubbleRef = React.useRef(null)
//     const [sleeping, setSleeping] = React.useState(false)

//     return (
//         <div
//             style={{
//                 position: "relative",
//                 width: "100%",
//                 height: "100%",
//                 ...style,
//             }}
//         >
//             <Canvas
//                 camera={{ position: [0, 0, 6], fov: 40 }}
//                 style={{ position: "absolute", inset: 0 }}
//             >
//                 <ambientLight intensity={0.7} />
//                 <directionalLight position={[3, 4, 5]} intensity={1.1} />
//                 <PetBody
//                     color={color}
//                     eyeColor={eyeColor}
//                     scale={scale}
//                     followSpeed={followSpeed}
//                     wobbleIntensity={wobbleIntensity}
//                     idleTimeout={idleTimeout}
//                     onSleepChange={setSleeping}
//                     bubbleRef={bubbleRef}
//                     chatOffset={chatOffset}
//                 />
//             </Canvas>
//             <div
//                 ref={bubbleRef}
//                 style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     pointerEvents: "none",
//                     background: chatBubbleColor,
//                     color: chatTextColor,
//                     padding: "6px 12px",
//                     borderRadius: 12,
//                     fontSize: 13,
//                     fontWeight: 500,
//                     whiteSpace: "nowrap",
//                     boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
//                     transition: "opacity 0.2s ease",
//                 }}
//             >
//                 {sleeping ? chatIdleText : chatActiveText}
//             </div>
//         </div>
//     )
// }