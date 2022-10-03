import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { CustomLink } from '../CustomLink';
import TEIcon from '../icons/TEIcon';
import Link from 'next/link';
import linkResolver from 'util/linkResolver';

const Navbar = ({ menuData = {} }) => {
  const [isMenuOpen, setOpen] = useState(false);
  const { menuLinks = [] } = menuData;
  const router = useRouter();
  const currentRoute = router.asPath;

  const handleRouteChange = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events, handleRouteChange]);

  return (
    <nav className="bg-peach20 container flex flex-col mx-auto px-4 md:px-20 py-2">
      <div className="flex flex-row flex-wrap md:flex-nowrap items-center justify-between">
        <Link href="/">
          <a>
            <div className="inline-flex items-center p-2">
              <span className="sr-only">Forside</span> {/* Purpose ?? */}
              <TEIcon />
            </div>
          </a>
        </Link>

        <div
          className="md:hidden p-2 flex flex-col align-middle items-center"
          onClick={() => setOpen(!isMenuOpen)}>
          <div
            className={
              (isMenuOpen ? 'justify-center ' : 'justify-evenly ') +
              'w-8 h-8 flex flex-col align-middle relative'
            }>
            <div
              className={
                (isMenuOpen ? 'rotate-45 absolute ' : 'rotate-0 ') +
                'w-full h-0.5 bg-gray-600 transition ease-in-out transform duration-300'
              }></div>

            <div
              className={
                (isMenuOpen ? '-rotate-45 absolute ' : 'rotate-0 ') +
                'w-full h-0.5 bg-gray-600 transition ease-in-out transform duration-300'
              }></div>

            <div
              className={
                (isMenuOpen ? 'invisible ' : 'show ') +
                'w-full h-0.5 bg-gray-600 transition ease-in-out transform duration-300'
              }></div>
          </div>

          <p className="text-center relative"> Meny</p>
        </div>

        <div
          className={
            (isMenuOpen ? 'display: flex ' : 'hidden ') +
            'flex-col md:flex-row md:flex w-full md:w-fit md:items-center h-max'
          }>
          {menuLinks &&
            menuLinks.length > 0 &&
            menuLinks.map((menuLink) => (
              <CustomLink to={menuLink} key={menuLink._key}>
                <a
                  className={`text-lg lg:inline-flex lg:w-auto w-full px-3 py-2 text-black ${
                    currentRoute == linkResolver(menuLink) ? 'font-bold' : 'font-medium'
                  } items-center justify-center hover:text-heroblue md:flex-col`}>
                  {menuLink.label}
                </a>
              </CustomLink>
            ))}
        </div>
      </div>

      <div className="mt-3 h-0.5 bg-heroblue w-full"></div>
    </nav>
  );
};

export default Navbar;
