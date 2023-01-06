import { useEffect, useState, useRef } from 'react';
import maplibregl, { Map } from 'maplibre-gl';

const MapArea = ({ data }) => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const mapContainer = useRef(null);

  useEffect(() => {
    if (isMapLoaded) return;
    setIsMapLoaded(true);

    const map = new Map({
      container: mapContainer.current,
      style:
        'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL', // temporary map api service.
      center: [10, 65], // Center of Norway.
      zoom: 4 // Zoom degree.
    });

    const layerIDs = [];

    map.on('load', async () => {
      Object.entries(data).forEach((item) => {
        const polygons = item[1].polygon;
        const borders = item[1].border;

        const polygonLayerID = item[0] + 'PolygonLayer';
        const borderLayerID = item[0] + 'BorderLayer';

        layerIDs.push(polygonLayerID);
        layerIDs.push(borderLayerID);

        map.addLayer({
          id: polygonLayerID,
          type: 'fill',
          source: {
            type: 'geojson',
            data: polygons
          },
          layout: {
            visibility: 'none'
          },
          paint: {
            'fill-color': ['get', 'color'],
            'fill-opacity': 0.8
          }
        });

        map.addLayer({
          id: borderLayerID,
          type: 'line',
          source: {
            type: 'geojson',
            data: borders
          },
          layout: {
            visibility: 'none'
          },
          paint: {
            'line-color': '#888',
            'line-width': 1
          }
        });
      });

      // SET DEFAULT LAYERS:
      map.setLayoutProperty('fylkerBorderLayer', 'visibility', 'visible');
      map.setLayoutProperty('fylkerPolygonLayer', 'visibility', 'visible');
    });

    map.on('zoomend', async () => {
      // HIDE ALL LAYERS
      layerIDs.forEach((id) => {
        map.setLayoutProperty(id, 'visibility', 'none');
      });

      // SHOW DIFFERENT LAYERS ON ZOOM LEVELS.
      const currentZoom = map.getZoom();
      const zoomLevelCountry = currentZoom <= 4; // Land.
      const zoomLevelState = currentZoom > 4 && currentZoom <= 5; // Fylker.
      const zoomLevelMunicipality = currentZoom > 5 && currentZoom <= 7; // Kommuner.
      const zoomLevelZipAreas = currentZoom > 7; // Postområder.

      if (zoomLevelCountry) {
        map.setLayoutProperty('fylkerBorderLayer', 'visibility', 'visible');
        map.setLayoutProperty('fylkerPolygonLayer', 'visibility', 'visible');
      }

      if (zoomLevelState) {
        map.setLayoutProperty('fylkerBorderLayer', 'visibility', 'visible');
        map.setLayoutProperty('fylkerPolygonLayer', 'visibility', 'visible');
      }

      if (zoomLevelMunicipality) {
        map.setLayoutProperty('kommunerBorderLayer', 'visibility', 'visible');
        map.setLayoutProperty('kommunerPolygonLayer', 'visibility', 'visible');
      }

      if (zoomLevelZipAreas) {
        map.setLayoutProperty('postomraderBorderLayer', 'visibility', 'visible');
        map.setLayoutProperty('postomraderPolygonLayer', 'visibility', 'visible');
      }
    });

    map.on('click', 'fylkerPolygonLayer', (e) => {
      // Replace click event wth hoover. replace id with any in list..

      const clickPosition = e.lngLat;
      const polygonData = e.features[0].properties; // Will be modified with custom entries when data is loaded from db.

      // Replace html with react component as string ->
      const html = String.raw;
      new maplibregl.Popup()
        .setLngLat(clickPosition)
        .setHTML(
          html`<h3>Valgt område:</h3>
            <p>Postnummer: ${polygonData['postnummer']}</p>
            <p>Poststed: ${polygonData['poststed']}</p>
            <p>Kommune: ${polygonData['kommune']}</p>`
        )
        .setMaxWidth('300px')
        .addTo(map);
    });
  }, []);

  return <div ref={mapContainer} className="absolute top-0 right-0 bottom-0 left-0" />;
};

export default MapArea;
