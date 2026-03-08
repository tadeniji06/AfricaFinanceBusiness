"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const links = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
		{ href: "/blog", label: "Blog" },
		{ href: "/contact", label: "Contact" },
	];

	return (
		<nav className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-20'>
					<div className='flex_shrink-0'>
						<Link
							href='/'
							className='flex items-center text-2xl font-black tracking-tighter text-black uppercase'
						>
							Africa Finance Business.
						</Link>
					</div>

					<div className='hidden md:flex space-x-8'>
						{links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className='text-gray-900 hover:text-gray-500 font-medium transition-colors'
							>
								{link.label}
							</Link>
						))}
					</div>

					<div className='md:hidden'>
						<button
							onClick={() => setIsOpen(!isOpen)}
							className='text-gray-900 hover:text-gray-500 p-2'
						>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className='md:hidden bg-white border-b border-gray-200'
					>
						<div className='px-4 pt-2 pb-6 space-y-2'>
							{links.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className='block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md'
									onClick={() => setIsOpen(false)}
								>
									{link.label}
								</Link>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
