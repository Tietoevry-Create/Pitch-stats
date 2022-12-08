import { useEffect, useState, useRef } from 'react';

import Link from 'next/link';
import { Sidebar } from 'components/Sidebar';
import { MapArea } from 'components/MapArea';

export default function Home({}) {
  return (
    <>
      <MapArea />
      <Sidebar headerTitle={'Utforsker'} headerButton={<Link href={'/'}>{'<--'}</Link>}></Sidebar>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  return {
    props: {}
  };
}
