import GUI from "lil-gui";
import React, { useEffect } from "react";
import * as THREE from "three";



export const useGUI = (
    cylinderRef: React.RefObject<THREE.Mesh | null>,
    boxRef: React.RefObject<THREE.Mesh | null>,
    camera: THREE.Camera
) => {
    // useEffect(() => {
    //     if (!cylinderRef.current) return;
        
    //     const gui = new GUI();

    //     const cylinderFolder = gui.addFolder("Cylinder");
    //     cylinderFolder.add(cylinderRef.current!.position, "x", -5, 5, 0.1);
    //     cylinderFolder.add(cylinderRef.current!.position, "y", -5, 5, 0.1);
    //     cylinderFolder.add(cylinderRef.current!.position, "z", -5, 5, 0.1);
    //     cylinderFolder.add(cylinderRef.current!.rotation, "x", 0, Math.PI * 2, 0.1);
    //     cylinderFolder.add(cylinderRef.current!.rotation, "y", 0, Math.PI * 2, 0.1);
    //     cylinderFolder.add(cylinderRef.current!.rotation, "z", 0, Math.PI * 2, 0.1);
    //     // cylinder height
    //     cylinderFolder.add(cylinderRef.current!.scale, "y", 0.1, 5, 0.1);
    //     // cylinder radiusTop
    //     cylinderFolder.add(cylinderRef.current!.scale, "x", 0.1, 5, 0.1);
    //     // cylinder radiusBottom
    //     cylinderFolder.add(cylinderRef.current!.scale, "z", 0.1, 5, 0.1);
    //     // cylinder color
    //     cylinderFolder.addColor({ color: "#ff0000" }, "color").onChange((value: string) => {
    //         (cylinderRef.current!.material as THREE.MeshStandardMaterial).color = new THREE.Color(value);
    //     });

    //     if (!boxRef.current) return;

    //     const boxFolder = gui.addFolder("Box");
    //     boxFolder.add(boxRef.current.position, "x", -5, 5, 0.1);
    //     boxFolder.add(boxRef.current.position, "y", -5, 5, 0.1);
    //     boxFolder.add(boxRef.current.position, "z", -50, 5, 0.1);
    //     boxFolder.add(boxRef.current.rotation, "x", 0, Math.PI * 2, 0.1);
    //     boxFolder.add(boxRef.current.rotation, "y", 0, Math.PI * 2, 0.1);
    //     boxFolder.add(boxRef.current.rotation, "z", 0, Math.PI * 2, 0.1);

    //     // Camera Controls
    //     const cameraFolder = gui.addFolder("Camera");
    //     cameraFolder.add(camera.position, "x", -20, 20, 0.1);
    //     cameraFolder.add(camera.position, "y", -20, 20, 0.1);
    //     cameraFolder.add(camera.position, "z", -20, 20, 0.1);
    //     // camera fov
    //     const perspectiveCamera = camera as THREE.PerspectiveCamera;
    //     cameraFolder.add(perspectiveCamera, "fov", 10, 120, 1).onChange(() => {
    //         perspectiveCamera.updateProjectionMatrix(); // ✅ Apply FOV changes
    //         });
    //     return () => gui.destroy(); // Cleanup on unmount
    // }, [cylinderRef, camera]);
};
