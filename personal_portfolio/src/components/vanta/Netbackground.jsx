import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Netbackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer;
    let particles;
    let mouseX = 0, mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    const parameters = [
      [[1, 1, 0.5], 5],
      [[0.95, 1, 0.5], 4],
      [[0.90, 1, 0.5], 3],
      [[0.85, 1, 0.5], 2],
      [[0.80, 1, 0.5], 1],
    ];

    const init = () => {
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 3000);
      camera.position.z = 1000;

      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x000000, 0.0007);

      const positions = [];
      const particleCount = 1000;

      for (let i = 0; i < particleCount; i++) {
        positions.push(Math.random() * 2000 - 1000); // x
        positions.push(Math.random() * 2000 - 1000); // y
        positions.push(Math.random() * 2000 - 1000); // z
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

      const materials = [];

      parameters.forEach(([color, size], i) => {
        const material = new THREE.PointsMaterial({ size });
        material.color.setHSL(...color);

        const points = new THREE.Points(geometry, material);
        points.rotation.x = Math.random() * 6;
        points.rotation.y = Math.random() * 6;
        points.rotation.z = Math.random() * 6;
        scene.add(points);
        materials.push(material);
      });

      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      const onMouseMove = (event) => {
        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
      };

      const onResize = () => {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      document.addEventListener("mousemove", onMouseMove);
      window.addEventListener("resize", onResize);

      const animate = () => {
        requestAnimationFrame(animate);
        render();
      };

      const render = () => {
        const time = Date.now() * 0.00005;

        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.position.y += (-mouseY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        scene.children.forEach((obj, i) => {
          if (obj instanceof THREE.Points) {
            obj.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
          }
        });

        materials.forEach((mat, i) => {
          const [h, s, l] = parameters[i][0];
          const hue = (360 * (h + time) % 360) / 360;
          mat.color.setHSL(hue, s, l);
        });

        renderer.render(scene, camera);
      };

      animate();
    };

    init();

    return () => {
      while (containerRef.current?.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
};

export default Netbackground;
