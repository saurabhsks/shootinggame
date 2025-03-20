// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { useThree } from "@react-three/fiber";

// export const useMouseFollow = (cylinderRef: React.RefObject<THREE.Mesh | null>, camera: THREE.Camera) => {
//     const { viewport } = useThree();
//     const previousRotation = useRef<THREE.Euler>(new THREE.Euler());

//     useEffect(() => {
//         const handleMouseMove = (event: MouseEvent) => {
//             if (!cylinderRef.current) return;

//             // Normalize mouse coordinates (-1 to 1)
//             const x = (event.clientX / window.innerWidth) * 2 - 1;
//             const y = -(event.clientY / window.innerHeight) * 2 + 1;

//             // Create a plane at z=0 to intersect with
//             const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
//             const raycaster = new THREE.Raycaster();

//             // Set up the raycaster
//             raycaster.setFromCamera(new THREE.Vector2(x, y), camera);

//             // Find intersection with the plane
//             const intersection = new THREE.Vector3();
//             raycaster.ray.intersectPlane(plane, intersection);

//             // Calculate direction from cylinder to intersection point
//             const cylinderPosition = cylinderRef.current.position;
//             const direction = intersection.sub(cylinderPosition).normalize();

//             // Calculate the rotation to point at the target
//             const targetRotation = new THREE.Euler();
//             targetRotation.x = Math.atan2(direction.y, direction.z);
//             targetRotation.y = Math.atan2(direction.x, direction.z);
//             targetRotation.z = Math.atan2(direction.y, direction.x);

//             // Apply base rotation to align with the game's coordinate system
//             targetRotation.x += Math.PI / 2;

//             // Smooth rotation interpolation
//             const smoothFactor = 0.15; // Slightly increased for better responsiveness

//             const currentRotation = cylinderRef.current.rotation;
//             currentRotation.x += (targetRotation.x - currentRotation.x) * smoothFactor;
//             currentRotation.y += (targetRotation.y - currentRotation.y) * smoothFactor;
//             currentRotation.z += (targetRotation.z - currentRotation.z) * smoothFactor;

//             // Store current rotation for next frame
//             previousRotation.current.copy(currentRotation);
//         };

//         window.addEventListener("mousemove", handleMouseMove);
//         return () => window.removeEventListener("mousemove", handleMouseMove);
//     }, [cylinderRef, camera]);
// };


import { useEffect } from "react";
import * as THREE from "three";

export const useMouseFollow = (
  cylinderRef: React.RefObject<THREE.Mesh | null>,
  camera: THREE.Camera
) => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!cylinderRef.current) return;
      
     
      const gunBasePosition = cylinderRef.current.position.clone();
      
      
      const x = ((event.clientX / window.innerWidth) * 2 - 1) * 2;
      const y = (-(event.clientY / window.innerHeight) * 2 + 1) * 2;
      
     
      const targetPosition = new THREE.Vector3(
        gunBasePosition.x + x * 10, 
        gunBasePosition.y + y * 10, 
        gunBasePosition.z - 5 
      );
      
     
      const lookAtTarget = new THREE.Vector3(
        gunBasePosition.x - (targetPosition.x - gunBasePosition.x) * 2, 
        gunBasePosition.y - (targetPosition.y - gunBasePosition.y) * 2, 
        gunBasePosition.z + 5
      );
      
     
      cylinderRef.current.lookAt(lookAtTarget);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cylinderRef, camera]);
};
