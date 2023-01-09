type MapboxFeatureCollection = {
  type: 'FeatureCollection';
  crs: {
    type: 'name';
    properties: {
      name: 'EPSG:4258';
    };
  };
  features: MapboxFeature[];
};

type MapboxFeature = {
  type: 'Feature';
  geometry: {
    type: 'LineString' | 'Polygon';
    coordinates: number[];
  };
  properties: object;
};

const createNewFeature = (coords: number[], data: object) => {
  const feature: MapboxFeature = {
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates: coords
    },
    properties: data
  };

  return feature;
};

const createNewCollection = (listOfFeatures: MapboxFeature[]) => {
  const collection: MapboxFeatureCollection = {
    type: 'FeatureCollection',
    crs: {
      type: 'name',
      properties: {
        name: 'EPSG:4258'
      }
    },
    features: listOfFeatures
  };

  return collection;
};
