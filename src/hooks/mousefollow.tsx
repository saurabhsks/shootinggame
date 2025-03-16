import { useEffect } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

export const useMouseFollow = (cylinderRef: React.RefObject<THREE.Mesh | null>, camera: THREE.Camera) => {
    const { viewport } = useThree(); // Get viewport size in scene units

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (!cylinderRef.current) return;

            // Normalize mouse coordinates (-1 to 1)
            const x = (event.clientX / window.innerWidth) * 2 - 1;
            const y = -(event.clientY / window.innerHeight) * 2 + 1;

            // Convert normalized coordinates to world position
            const vector = new THREE.Vector3(x, y, 0.5);
            vector.unproject(camera); // Convert screen coordinates to world

            const dir = vector.sub(camera.position).normalize();
            const distance = -camera.position.z / dir.z;
            const position = camera.position.clone().add(dir.multiplyScalar(distance));

            // Update cylinder position
            cylinderRef.current.position.x = position.x;
            cylinderRef.current.position.y = position.y;
            cylinderRef.current.position.z = position.z + 2.5;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [cylinderRef, camera]);
};
