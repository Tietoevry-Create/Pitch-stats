import { useEffect, useState, useRef } from 'react';

import Link from 'next/link';
import { Sidebar } from 'components/Sidebar';
import { MapArea } from 'components/MapArea';
import Gradient from 'javascript-color-gradient';

export default function Home({}) {
  const mapStyle =
    'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL';
  const mapData = require('model/mapData.json');
  const featureCollectionBorder = mapData['postnummeromrader.postnummeromradegrense']; // Draw border. https://maplibre.org/maplibre-gl-js-docs/example/geojson-line/
  const featureCollectionFill = mapData['postnummeromrader.postnummeromrade']; // Fill area. https://maplibre.org/maplibre-gl-js-docs/example/geojson-polygon/

  // ADD COLORS TO POLYGON.. REPLACE WITH: ->       https://maplibre.org/maplibre-gl-js-docs/example/heatmap-layer/
  Object.entries(featureCollectionFill.features).forEach((item) => {
    const randomFillColors = new Gradient().setColorGradient('#FFFFFF', '#BB0000').getColors();

    const randomNumber = Math.floor(Math.random() * randomFillColors.length);

    item[1]['properties']['color'] = randomFillColors[randomNumber];
  });

  const polygonLayer = {
    id: 'polygons',
    type: 'fill',
    source: {
      type: 'geojson',
      data: featureCollectionFill
    },
    layout: {},
    paint: {
      'fill-color': ['get', 'color'],
      'fill-opacity': 0.8
    }
  };

  const borderLayer = {
    id: 'outline',
    type: 'line',
    source: {
      type: 'geojson',
      data: featureCollectionBorder
    },
    layout: {},
    paint: {
      'line-color': '#888',
      'line-width': 1
    }
  };

  return (
    <>
      <MapArea mapStyle={mapStyle} polygonLayer={polygonLayer} borderLayer={borderLayer} />
      <Sidebar headerTitle={'Utforsker'} headerButton={<Link href={'/'}>{'<--'}</Link>}></Sidebar>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  return {
    props: {}
  };
}
