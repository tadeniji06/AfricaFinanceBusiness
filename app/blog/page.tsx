"use client";

import { Feather } from "lucide-react";
import { motion } from "framer-motion";

export default function Blog() {
	return (
		<div className='w-full flex-grow flex items-center justify-center bg-gray-50 pt-32 pb-40'>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className='max-w-2xl mx-auto px-4 text-center'
			>
				<div className='bg-white p-12 md:p-16 rounded shadow-sm border border-gray-100 flex flex-col items-center'>
					<div className='w-24 h-24 mb-8 bg-black/5 rounded-full flex items-center justify-center'>
						<Feather className='w-10 h-10 text-black/40' />
					</div>
					<h1 className='text-4xl md:text-5xl font-black mb-6 tracking-tight'>
						The Ledger is Empty.
					</h1>
					<p className='text-lg md:text-xl text-gray-500 font-light mb-10 leading-relaxed'>
						Our expert journalists are meticulously crafting the
						latest insights and analysis on the African markets. New
						stories will be published very soon.
					</p>
					<div className='flex gap-4'>
						<button className='bg-black text-white px-8 py-4 font-bold rounded hover:bg-gray-800 transition-colors uppercase tracking-widest text-sm'>
							Notify Me
						</button>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
