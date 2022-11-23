import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import mapboxgl from 'mapbox-gl';

import { Sidebar } from 'components/Sidebar';

export default function Home({}) {
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    const map = new mapboxgl.Map({
      accessToken:
        'pk.eyJ1IjoibWFydGluYnJ1bGFuZCIsImEiOiJjbGFzMWszYzUxeGxhM3lvYnNoa3VvaDhwIn0.B51CuZmflun0olqPU9KvTA',
      style: 'mapbox://styles/mapbox/streets-v12',
      container: 'map', // container ID
      center: [10, 64],
      zoom: 4.3
      //maxBounds: [[-20, 57], [35, 80]] // N.W, S.E Coordinates. === Norway.
    });
  }, []);

  return (
    <>
      <div id="map" className="absolute w-full h-full" />

      <Sidebar headerTitle={'Utforsker'} headerButton={<Link href={'/'}>{'<--'}</Link>}></Sidebar>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  return {
    props: {}
  };
}
