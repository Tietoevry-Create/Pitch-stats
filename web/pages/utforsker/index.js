import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Sidebar } from 'components/Sidebar';
import { MapArea } from 'components/MapArea';
import Gradient from 'javascript-color-gradient';

export default function Home({}) {
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
  Object.keys(data).forEach((key) => {
    const areaPolygons = data[key]['polygon'];

    Object.entries(areaPolygons['features']).forEach((area) => {
      const randomFillColors = new Gradient().setColorGradient('#FFFFFF', '#BB0000').getColors();

      const randomNumber = Math.floor(Math.random() * randomFillColors.length);

      area[1]['properties']['color'] = randomFillColors[randomNumber];
    });
  });

  return (
    <>
      <MapArea data={data} />
      <Sidebar headerTitle={'Utforsker'} headerButton={<Link href={'/'}>{'<--'}</Link>}></Sidebar>
    </>
  );
}
/*
export async function getStaticProps() {


  return { props: { data } };
}
*/
