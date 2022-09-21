import React from 'react';
import CustomLink from 'components/CustomLink/customLink';
import TEIcon from 'components/icons/TEIcon';
import Link from 'next/link';
const Navbar = ({ menuData = {} }) => {
  const { menuLinks = [] } = menuData;
  return (
    <nav className="bg-peach20">
      <div className="mx-auto container flex flex-wrap items-center px-4 md:px-20 py-3 w-full">
        <Link href="/">
          <a>
            <div className="inline-flex items-center p-2 mr-4">
              <span className="sr-only">Forside </span>
              <TEIcon />
            </div>
          </a>
        </Link>

        {/*		Can maybe use later
    <button className=' inline-flex p-3 hover:bg-heroblue rounded lg:hidden text-black ml-auto hover:text-pink-100 outline-none'>
      <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M4 6h16M4 12h16M4 18h16'
        />
      </svg>
    </button>
    */}

        <div className="lg:inline-flex lg:flex-row lg:w-auto lg:items-center lg:h-auto">
          {menuLinks &&
            menuLinks.length > 0 &&
            menuLinks.map((menuLink) => (
              <CustomLink to={menuLink} key={menuLink._key}>
                <a className="text-lg lg:inline-flex lg:w-auto w-full px-3 py-2 text-black font-bold items-center justify-center hover:underline">
                  {menuLink.label}
                </a>
              </CustomLink>
            ))}
        </div>
        <div className="mx-3 mt-3 h-0.5 bg-heroblue w-full"></div>
      </div>
    </nav>
  );
};

export default Navbar;
