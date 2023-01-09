import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Sidebar } from 'components/Sidebar';
import { MapArea } from 'components/MapArea';
import Gradient from 'javascript-color-gradient';

export default function Home({ data }) {
  return (
    <>
      <MapArea data={data} />
      <Sidebar headerTitle={'Utforsker'} headerButton={<Link href={'/'}>{'<--'}</Link>}></Sidebar>
    </>
  );
}

export async function getStaticProps() {
  const data = assembleMapData();

  return { props: { data } };
}

// Create the list of dataobjects that will be added to the map.. incl, polygon color
const assembleMapData = () => {
  // REPLACE: LOAD DATA AND COORDINATES FROM DB INSTEAD.
  const datasetPostomrader = require('model/Postnummeromrader.json');
  const datasetKommuner = require('model/Kommuner.json');
  const datasetFylker = require('model/Fylker.json');

  // REPLACE: CREATE DATAOBJECT FROM DATA AND COORDINATES BASED ON TS TYPE: MAPBOXCOLLECTION + MAPBOXFEATURE
  const borderFylker = datasetFylker['administrative_enheter.fylkesgrense'];
  const polygonFylker = datasetFylker['administrative_enheter.fylke'];
  const borderKommuner = datasetKommuner['administrative_enheter.kommunegrense'];
  const polygonKommuner = datasetKommuner['administrative_enheter.kommune'];
  const borderPostomraader = datasetPostomrader['postnummeromrader.postnummeromradegrense'];
  const polygonPostomraader = datasetPostomrader['postnummeromrader.postnummeromrade'];

  const data = {
    fylker: {
      border: borderFylker,
      polygon: polygonFylker
    },
    kommuner: {
      border: borderKommuner,
      polygon: polygonKommuner
    },
    postomrader: {
      border: borderPostomraader,
      polygon: polygonPostomraader
    }
  };

  // ADD COLORS :::
  const formulaGetRandomValue = (max) => Math.floor(Math.random() * max);
  const formulaGetPercentOfValueInRange = (min, max, value) => (value / max) * 100; // Returns percentage of value from range.
  const formulaGetIndexInArrayFromPercentValue = (min, max, percent) =>
    Math.round((percent / 100) * max); // Returns an Index in array from percentage..

  const minValue = 0; // REPLACE WITH VALUE FROM DB.
  const maxValue = 300; // REPLACE WITH VALUE FROM DB.
  const countValueGroups = 0; // Should contain count of unique number of employeees ???

  const arrayOfColors = new Gradient()
    .setColorGradient('#FFFFFF', '#BB0000')
    .setMidpoint(maxValue) // countValueGroups..
    .getColors();

  Object.keys(data).forEach((key) => {
    const areaPolygons = data[key]['polygon'];
    Object.entries(areaPolygons['features']).forEach((area) => {
      const value = formulaGetRandomValue(maxValue); // Replace with feks: numberOfEmployees;
      const percentage = formulaGetPercentOfValueInRange(minValue, maxValue, value);
      const index = formulaGetIndexInArrayFromPercentValue(0, arrayOfColors.length - 1, percentage);

      area[1]['properties']['color'] = arrayOfColors[index];
    });
  });

  return data;
};
