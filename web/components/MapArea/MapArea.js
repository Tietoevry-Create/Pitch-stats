import { useEffect, useState, useRef } from 'react';

import maplibregl, { Map } from 'maplibre-gl';

const MapArea = ({ mapStyle, polygonLayer, borderLayer }) => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const mapContainer = useRef(null);

  useEffect(() => {
    if (isMapLoaded) return;
    setIsMapLoaded(true);

    const initialState = {
      lng: 10,
      lat: 65,
      zoom: 0
    };

    const map = new Map({
      container: mapContainer.current,
      style: mapStyle,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });

    map.on('load', async () => {
      map.addLayer(polygonLayer); // add polygons.
      map.addLayer(borderLayer); // add borders.
    });

    map.on('click', 'polygons', (e) => {
      const html = String.raw;
      new maplibregl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(
          html`<h3>Valgt område:</h3>
            <p>Postnummer: ${e.features[0].properties['postnummer']}</p>
            <p>Poststed: ${e.features[0].properties['poststed']}</p>
            <p>Kommune: ${e.features[0].properties['kommune']}</p>`
        )
        .setMaxWidth('300px')
        .addTo(map);
    });
  }, []);

  return <div ref={mapContainer} className="absolute top-0 right-0 bottom-0 left-0" />;
};

export default MapArea;
