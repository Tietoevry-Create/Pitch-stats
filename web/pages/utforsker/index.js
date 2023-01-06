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
  // ADD DATA FROM LOCAL DATASET -> SHOULD BE RETREIVED FROM DB TOGETHER WITH DATA.
  const datasetPostomrader = require('model/Postnummeromrader.json');
  const datasetKommuner = require('model/Kommuner.json');
  const datasetFylker = require('model/Fylker.json');

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

  // ADD TEMPORARY RANDOM COLORS -> SHOULD BE BASED ON AVERAGE VALUES.
  const formulaGetRandomValue = (max) => Math.floor(Math.random() * max);
  const formulaGetPercentOfValueInRange = (min, max, value) => (value / max - min) * 100; // Returns percentage of value from range.
  const formulaGetIndexInArrayFromPercentValue = (min, max, percent) =>
    Math.round(min + (percent / 100) * (max - min)); // Returns an Index in array from percentage..

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

  return { props: { data } };
}
