import * as THREE from "three";

export function createStars(scene) {
  const starGeometry = new THREE.BufferGeometry();
  const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.03,
  });

  const starCount = 800;
  const positions = new Float32Array(starCount * 3);

  for (let i = 0; i < starCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 50;
  }

  starGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );
  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);

  return stars;
}
