import React from "react";

const Navbar = () => (
	<nav className="flex items-center flex-wrap bg-yellow-50">
		<div className="mx-auto container px-10 py-3 md:px-52 w-full">
			<span className='inline-flex items-center p-2 mr-4'>
				<svg
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
					className='fill-current text-black h-8 w-8 mr-2'
				>
					<path d='M3 10v11h6v-7h6v7h6v-11L12,3z'/>
				</svg>
				<span className='text-xl text-black font-bold tracking-wide'>
						photo
					</span>
			</span>

			{/*		Can maybe use later
			<button className=' inline-flex p-3 hover:bg-purple-800 rounded lg:hidden text-black ml-auto hover:text-pink-100 outline-none'>
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

			<div className='lg:inline-flex lg:flex-row lg:w-auto lg:items-center lg:h-auto'>
				<span  className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-purple-800 hover:text-white'>
					Features
				</span>
				<span className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-purple-800 hover:text-white'>
					Sites
				</span>
				<span className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-purple-800 hover:text-white'>
					About
				</span>
				<span className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-purple-800 hover:text-white'>
					 Tietoevry
				</span>
			</div>
			<div className="mx-3 mt-3 h-0.5 bg-purple-800 w-full"></div>
		</div>
	</nav>
);

export default Navbar;
