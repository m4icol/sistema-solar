import * as THREE from "three";

export function createPlanet(size, texture, position, ring, loader, scene) {
  const planetGeometry = new THREE.IcosahedronGeometry(size, 15);
  const planetMaterial = new THREE.MeshPhongMaterial({
    map: loader.load(texture),
  });
  const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
  const planetGroup = new THREE.Group();
  planetGroup.add(planetMesh);

  if (ring) {
    const ringGeometry = new THREE.RingGeometry(
      ring.innerRadius,
      ring.outerRadius,
      32
    );
    const ringMaterial = new THREE.MeshBasicMaterial({
      map: loader.load(ring.texture),
      side: THREE.DoubleSide,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.position.x = position;
    ringMesh.rotation.x = Math.PI * -0.5;

    planetGroup.add(ringMesh);
  }

  scene.add(planetGroup);
  planetMesh.position.x = position;

  return { planetMesh, planetGroup };
}
