import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Définir les types pour les props du composant Model
interface ModelProps {
  modelPath: string;
}

// Composant pour le modèle 3D
const Model = ({ modelPath }: ModelProps) => {
  const { scene } = useGLTF(modelPath); // Charge le modèle GLTF
  const modelRef = useRef<THREE.Object3D>(); // Typage pour useRef

  // Centrer le modèle en calculant sa boîte englobante
  useEffect(() => {
    if (modelRef.current) {
      const box = new THREE.Box3().setFromObject(modelRef.current);
      const center = box.getCenter(new THREE.Vector3());
      modelRef.current.position.sub(center); // Déplacer le modèle pour centrer son centre géométrique
    }
  }, []);

  return <primitive object={scene} ref={modelRef} scale={[4, 4, 4]} position={[0, 0, 0]} />; // Échelle augmentée
};

// Composant principal de la scène
const ThreeScene = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(); // Typage pour la caméra

  // Gérer le mouvement de la souris
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (cameraRef.current) {
        // Normaliser les coordonnées de la souris (-1 à 1)
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

        // Ajuster l'orientation de la caméra (très légèrement)
        const targetX = mouseX * 0.5; // Réduire l'amplitude
        const targetY = mouseY * 0.5; // Réduire l'amplitude
        cameraRef.current.position.x = 90 + targetX; // Décalage depuis x = 90
        cameraRef.current.position.y = targetY;
        cameraRef.current.position.z = 0.3; // Caméra extrêmement rapprochée
        cameraRef.current.lookAt(0, 0, 0); // Focus sur le centre du modèle
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ height: '80vh', width: '50vw', position: 'absolute', left: 0, top: '10vh' }}>
      <Canvas
        camera={{ position: [90, 0, 0.3], fov: 25 }} // Position très rapprochée, FOV réduit
        style={{ background: 'transparent' }}
        gl={{ alpha: true }} // Activer la transparence
      >
        {/* Éclairage */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />

        {/* Modèle 3D */}
        <Model modelPath="/models/flighttracker.glb" />

        {/* Contrôle de la caméra */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false} // Désactiver la rotation manuelle
        />
      </Canvas>
    </div>
  );
};

export default ThreeScene;