import React, { useState } from 'react';
import { CustomLink } from '../CustomLink';
import TEIcon from '../icons/TEIcon';
import Link from 'next/link';
const Navbar = ({ menuData = {} }) => {
  const [visible, setVisible] = useState(false);
  const { menuLinks = [] } = menuData;
  return (
    <nav className="bg-peach20 mx-auto container flex flex-wrap items-center px-4 md:px-20 py-3 w-full flex-col md:flex-row">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full flex content-center align-baseline md:flex-row">
          <Link href="/">
            <a>
              <div className="inline-flex items-center p-2 mr-4">
                <span className="sr-only">Forside</span>
                <TEIcon />
              </div>
            </a>
          </Link>

          <div
            className="space-y-2 md:hidden ml-auto w-max pr-2"
            onClick={() => setVisible((s) => !s)}>
            <div
              className={
                (visible ? 'rotate-45 absolute right-3 top-5 w-10 ' : 'rotate-0 ') +
                'w-8 h-0.5 bg-gray-600 '
              }></div>
            <div
              className={
                (visible ? '-rotate-45 absolute right-3 w-10 ' : 'rotate-0 ') +
                'w-8 h-0.5 bg-gray-600 '
              }></div>
            <div className={(visible ? 'invisible ' : 'show ') + 'w-8 h-0.5 bg-gray-600 '}></div>
            <div className=" h-0.4 align-auto">
              <p className={visible ? 'pt-3 ' : 'pt-0 '}> Meny</p>
            </div>
          </div>
        </div>

        <div
          className={
            (visible ? 'display: flex ' : 'hidden ') +
            'flex-col md:flex-row md:flex w-max md:items-center h-max'
          }>
          {menuLinks &&
            menuLinks.length > 0 &&
            menuLinks.map((menuLink) => (
              <CustomLink to={menuLink} key={menuLink._key}>
                <a className="text-lg lg:inline-flex lg:w-auto w-full px-3 py-2 text-black items-center justify-center font-medium hover:underline hover:text-heroblue md:flex-col">
                  {menuLink.label}
                </a>
              </CustomLink>
            ))}
        </div>
      </div>

      <div className="mx-3 mt-3 h-0.5 bg-heroblue w-full"></div>
    </nav>
  );
};

export default Navbar;
