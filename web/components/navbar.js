import React from 'react';

const Navbar = () => (
  <nav className="flex items-center flex-wrap bg-yellow-50">
    <div className="mx-auto container px-4 md:px-20 py-3 w-full">
      <span className="inline-flex items-center p-2 mr-4">
        <svg
          viewBox="0 0 1328 224"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current text-black h-6 w-32 mr-2">
          <path fill="#280071" d="M561,49.084c-33.689,0-63,29.311-63,63c0,33.689,26.311,61,60,61h51v-26h-82v-24h97v-11
	C624,78.395,594.689,49.084,561,49.084z M595,101.084h-68v-24h68V101.084z M429,25.084c0-9.389,7.611-17,17-17s17,7.611,17,17
	s-7.611,17-17,17S429,34.473,429,25.084z M472,147.084h24v26h-74v-26h24v-70h-36v-26c36,0,62,28,62,62V147.084z M356,147.084h44v26
	h-8c-38,0-62-26-62-62v-34h-26v-26h26v-51h26v51h32v26h-32V147.084z M1154,147.084h44v26h-88v-26h18v-36c0-34,26-60,62-60v26h-36
	V147.084z M677,147.084h50v26h-14c-36,0-62-26-62-62v-34h-26v-26h26v-51h26v51h38v26h-38V147.084z M1118,53.084c0,0-20,78-24,94
	s-16,28-36,28s-32-12-36-28s-24-94-24-94h28l20,94h24l20-94H1118z M1328,53.084c0,0-25,99-32,126s-31.778,45-62,45h-6v-25h46v-24
	h-12c-17.814,0-28-13-32-28s-24-94-24-94h28l18,94h30l18-94H1328z M932,49.084c-33.689,0-63,29.311-63,63c0,33.689,26.311,61,60,61
	h51v-26h-82v-24h97v-11C995,78.395,965.689,49.084,932,49.084z M966,101.084h-68v-24h68V101.084z M795,49.084
	c-34.794,0-63,28.206-63,63s28.206,63,63,63s63-28.206,63-63S829.794,49.084,795,49.084z M830,147.084h-70v-70h70V147.084z M64,64
	v64H0V64h32V32h32V0h64v64H64z M190,176c0,7.732-6.268,14-14,14s-14-6.268-14-14s6.268-14,14-14S190,168.268,190,176z M156,208
	c0,6.627-5.373,12-12,12c-6.627,0-12-5.373-12-12s5.373-12,12-12C150.627,196,156,201.373,156,208z M126,208c0,7.732-6.268,14-14,14
	s-14-6.268-14-14s6.268-14,14-14S126,200.268,126,208z M160,176c0,8.837-7.163,16-16,16s-16-7.163-16-16s7.163-16,16-16
	S160,167.163,160,176z M128,176c0,8.837-7.163,16-16,16s-16-7.163-16-16s7.163-16,16-16S128,167.163,128,176z M220,144
	c0,6.627-5.373,12-12,12c-6.627,0-12-5.373-12-12s5.373-12,12-12C214.627,132,220,137.373,220,144z M176,128c8.837,0,16,7.163,16,16
	s-7.163,16-16,16s-16-7.163-16-16S167.163,128,176,128z M222,112c0,7.732-6.268,14-14,14s-14-6.268-14-14s6.268-14,14-14
	S222,104.268,222,112z M176,128c-8.837,0-16-7.163-16-16s7.163-16,16-16s16,7.163,16,16S184.837,128,176,128z"/>
        </svg>
      </span>

      {/*		Can maybe use later
			<button className=' inline-flex p-3 hover:bg-tepurple rounded lg:hidden text-black ml-auto hover:text-pink-100 outline-none'>
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
        <span className="text-lg lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-tepurple hover:text-white">
          Features
        </span>
        <span className="text-lg lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-tepurple hover:text-white">
          Sites
        </span>
        <span className="text-lg lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-tepurple hover:text-white">
          About
        </span>
        <span className="text-lg lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-tepurple hover:text-white">
          Tietoevry
        </span>
      </div>
      <div className="mx-3 mt-3 h-0.5 bg-tepurple w-full"></div>
    </div>
  </nav>
);

export default Navbar;