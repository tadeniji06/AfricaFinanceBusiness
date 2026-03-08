"use client";

import Link from "next/link";
import {
	ArrowUpRight,
	Github,
	Twitter,
	Linkedin,
} from "lucide-react";

export function Footer() {
	return (
		<footer className='bg-black text-white pt-20 pb-10 border-t border-gray-800'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-16'>
					<div className='col-span-1 md:col-span-2'>
						<Link
							href='/'
							className='text-3xl font-black tracking-tighter uppercase mb-6 block'
						>
							Africa Finance Business.
						</Link>
						<p className='text-gray-400 max-w-sm text-sm leading-relaxed'>
							Delivering professional and exquisite news, insights,
							and analysis from the world of African finance and
							business.
						</p>
					</div>

					<div>
						<h3 className='text-lg font-bold mb-6'>Navigation</h3>
						<ul className='space-y-4 text-gray-400'>
							<li>
								<Link
									href='/'
									className='hover:text-white transition-colors flex items-center group'
								>
									Home{" "}
									<ArrowUpRight className='invisible group-hover:visible ml-1 w-4 h-4' />
								</Link>
							</li>
							<li>
								<Link
									href='/about'
									className='hover:text-white transition-colors flex items-center group'
								>
									About{" "}
									<ArrowUpRight className='invisible group-hover:visible ml-1 w-4 h-4' />
								</Link>
							</li>
							<li>
								<Link
									href='/blog'
									className='hover:text-white transition-colors flex items-center group'
								>
									Blog{" "}
									<ArrowUpRight className='invisible group-hover:visible ml-1 w-4 h-4' />
								</Link>
							</li>
							<li>
								<Link
									href='/contact'
									className='hover:text-white transition-colors flex items-center group'
								>
									Contact{" "}
									<ArrowUpRight className='invisible group-hover:visible ml-1 w-4 h-4' />
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className='text-lg font-bold mb-6'>Socials</h3>
						<div className='flex space-x-4'>
							<a
								href='#'
								className='p-2 bg-white/5 rounded-full hover:bg-white/10 transition'
							>
								<Twitter className='w-5 h-5 text-white' />
							</a>
							<a
								href='#'
								className='p-2 bg-white/5 rounded-full hover:bg-white/10 transition'
							>
								<Linkedin className='w-5 h-5 text-white' />
							</a>
							<a
								href='#'
								className='p-2 bg-white/5 rounded-full hover:bg-white/10 transition'
							>
								<Github className='w-5 h-5 text-white' />
							</a>
						</div>
					</div>
				</div>

				<div className='border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm'>
					<p>
						&copy; {new Date().getFullYear()} Africa Finance Business.
						All rights reserved.
					</p>
					<div className='mt-4 md:mt-0 space-x-6'>
						<Link href='#' className='hover:text-white transition'>
							Privacy Policy
						</Link>
						<Link href='#' className='hover:text-white transition'>
							Terms of Service
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
