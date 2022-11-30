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

    map.on('load', async function () {
      const featureCollectionBorder = mapData['postnummeromrader.postnummeromradegrense']; // Draw border. https://maplibre.org/maplibre-gl-js-docs/example/geojson-line/
      const featureCollectionFill = mapData['postnummeromrader.postnummeromrade']; // Fill area. https://maplibre.org/maplibre-gl-js-docs/example/geojson-polygon/

      const sourceDataBorder = {
        type: 'geojson',
        data: featureCollectionBorder
      };

      const sourceDataFill = {
        type: 'geojson',
        data: featureCollectionFill
      };

      const mapBorders = {
        id: `outline`,
        type: 'line',
        source: `route2`,
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#888',
          'line-width': 1
        }
      };

      const mapFill = {
        id: `polygons`,
        type: 'fill',
        source: `route1`,
        layout: {},
        paint: {
          'fill-color': '#088',
          'fill-opacity': 0.2
        }
      };

      map.addSource(`route2`, sourceDataBorder);
      map.addSource(`route1`, sourceDataFill);

      map.addLayer(mapBorders);
      map.addLayer(mapFill);

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
