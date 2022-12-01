import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import maplibregl, { Map } from 'maplibre-gl';
import { Sidebar } from 'components/Sidebar';

export default function Home({}) {
  var mapData = require('../../model/mapData.json'); // SHOULD BE MOVED TO CLOUD.

  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const mapContainer = useRef(null);

  useEffect(() => {
    if (isMapLoaded) return;
    setIsMapLoaded(true);

    const mapStyle =
      'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL';

    const initialState = {
      lng: 10,
      lat: 65,
      zoom: 4
    };

    const map = new Map({
      container: mapContainer.current,
      style: mapStyle,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });

    map.on('load', async () => {
      const featureCollectionBorder = mapData['postnummeromrader.postnummeromradegrense']; // Draw border. https://maplibre.org/maplibre-gl-js-docs/example/geojson-line/

      const featureCollectionFill = mapData['postnummeromrader.postnummeromrade']; // Fill area. https://maplibre.org/maplibre-gl-js-docs/example/geojson-polygon/

      function generateRandomColor() {
        const randomFillColors = [
          '#BA4D35',
          '#35BA63',
          '#3588BA',
          '#AABA35',
          '#BA35B8',
          '#35BAAC',
          '#EADA17',
          '#EEB4FF',
          '#8A24A8',
          '#F1C40F',
          '#1A5276'
        ];
        const randomNumber = Math.floor(Math.random() * randomFillColors.length);

        const randomColor = randomFillColors[randomNumber];
        return randomColor;
      }

      Object.entries(featureCollectionFill.features).forEach((item) => {
        item[1]['properties']['color'] = generateRandomColor();
      });

      // ADD POLYGONS
      map.addLayer({
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
      });

      // ADD BORDER
      map.addLayer({
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
      });
    });

    map.on('click', 'polygons', (e) => {
      new maplibregl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(
          '<h3>' +
            'Valgt område: ' +
            '</h3>' +
            '<p>' +
            'Postnummer: ' +
            e.features[0].properties['postnummer'] +
            '</p>' +
            '<p>' +
            'Poststed: ' +
            e.features[0].properties['poststed'] +
            '</p>' +
            '<p>' +
            'Kommune: ' +
            e.features[0].properties['kommune'] +
            '</p>'
        )
        .setMaxWidth('300px')
        .addTo(map);
    });
  }, []);

  return (
    <>
      <div ref={mapContainer} className="absolute top-0 right-0 bottom-0 left-0" />
      <Sidebar headerTitle={'Utforsker'} headerButton={<Link href={'/'}>{'<--'}</Link>}></Sidebar>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  return {
    props: {}
  };
}
