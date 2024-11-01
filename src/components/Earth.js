import * as THREE from "three";
import {
  earthTexture,
  earthTextureClouds,
  earthTextureNight,
} from "./textures";
let earthMesh, lightsMesh, cloudMesh;

export function Earth(loader) {
  const earthGroup = new THREE.Group();
  earthGroup.rotation.z = (-23.4 * Math.PI) / 180;

  const earthGeometry = new THREE.IcosahedronGeometry(1, 15);
  const earthMaterial = new THREE.MeshPhongMaterial({
    map: loader.load(earthTexture),
  });
  earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
  earthGroup.add(earthMesh);

  const lightsMaterial = new THREE.MeshBasicMaterial({
    map: loader.load(earthTextureNight),
    blending: THREE.AdditiveBlending,
  });
  lightsMesh = new THREE.Mesh(earthGeometry, lightsMaterial);
  earthGroup.add(lightsMesh);

  const cloudMaterial = new THREE.MeshBasicMaterial({
    map: loader.load(earthTextureClouds),
    blending: THREE.AdditiveBlending,
    opacity: 0.4,
    transparent: true,
  });
  cloudMesh = new THREE.Mesh(earthGeometry, cloudMaterial);
  cloudMesh.scale.setScalar(1.003);
  earthGroup.add(cloudMesh);

  return { earthMesh, lightsMesh, cloudMesh, earthGroup };
}
