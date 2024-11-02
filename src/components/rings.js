import * as THREE from "three";

export function createRings(outer, scene) {
  const spaceRingGeometry = new THREE.RingGeometry(outer - 0.1, outer, 60);
  const spaceRingMaterial = new THREE.MeshBasicMaterial({
    color: 0x999999,
    side: THREE.DoubleSide,
  });
  const spaceRingMesh = new THREE.Mesh(spaceRingGeometry, spaceRingMaterial);

  spaceRingMesh.rotation.x = Math.PI * -0.5;

  scene.add(spaceRingMesh);
}
