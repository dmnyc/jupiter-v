import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

const JUPITER_TEXTURE = `${import.meta.env.BASE_URL}textures/jupiter_8k.jpg`;
const STAR_BACKGROUND =
  '//unpkg.com/three-globe/example/img/night-sky.png';

export default function App() {
  const globeRef = useRef();
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight });

  useEffect(() => {
    const onResize = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!globeRef.current) return;
    const controls = globeRef.current.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;
    controls.enableZoom = true;
    globeRef.current.pointOfView({ altitude: 2.2 }, 0);
  }, []);

  return (
    <Globe
      ref={globeRef}
      width={size.w}
      height={size.h}
      backgroundColor="#000000"
      backgroundImageUrl={STAR_BACKGROUND}
      globeImageUrl={JUPITER_TEXTURE}
      showAtmosphere={true}
      atmosphereColor="#e8b27a"
      atmosphereAltitude={0.18}
    />
  );
}
