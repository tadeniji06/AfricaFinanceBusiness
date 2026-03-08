import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Us",
	description:
		"Discover the mission and team behind Africa Finance Business, democratizing financial intelligence across the African continent.",
};

export default function About() {
	return (
		<div className='w-full'>
			<section className='bg-black text-white pt-24 pb-32'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h1 className='text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight'>
						Our Mission
					</h1>
					<p className='text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto'>
						Democratizing financial intelligence across the African
						continent and empowering business leaders with
						unparalleled insights.
					</p>
				</div>
			</section>

			<section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
					<div className='space-y-8'>
						<h2 className='text-4xl font-bold uppercase tracking-tight'>
							Who We Are
						</h2>
						<p className='text-gray-600 text-lg leading-relaxed'>
							Founded on the belief that accurate, timely information
							is the bedrock of robust economies, Africa Finance
							Business is the premier destination for financial
							professionals, investors, and policymakers.
						</p>
						<p className='text-gray-600 text-lg leading-relaxed'>
							Our team of journalists, market analysts, and economic
							commentators provide comprehensive coverage of
							sub-Saharan Africa's dynamic business landscape. We look
							beyond the headlines to uncover the forces driving
							growth, innovation, and transformation.
						</p>
					</div>
					<div className='relative h-[400px] w-full bg-gray-100 rounded overflow-hidden'>
						<img
							src='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop'
							alt='Team meeting'
							className='w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500'
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
