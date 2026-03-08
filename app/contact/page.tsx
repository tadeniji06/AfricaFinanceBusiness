import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
	return (
		<div className='w-full pt-20'>
			<section className='bg-black text-white py-24 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-7xl mx-auto text-center'>
					<h1 className='text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight'>
						Get in touch
					</h1>
					<p className='text-xl text-gray-400 font-light max-w-2xl mx-auto'>
						Whether you have a tip, an inquiry for our editorial team,
						or want to explore partnership opportunities.
					</p>
				</div>
			</section>

			<section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
					<div className='space-y-12'>
						<div>
							<h2 className='text-3xl font-bold mb-8 uppercase tracking-tight'>
								Contact Information
							</h2>
							<p className='text-gray-500 mb-8'>
								Reach out to our teams around the clock. We pride
								ourselves on timely and accurate responses to all
								professional inquiries.
							</p>
						</div>

						<div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
							<div className='flex gap-4'>
								<MapPin className='w-6 h-6 text-black mt-1' />
								<div>
									<h3 className='font-bold mb-2'>Headquarters</h3>
									<p className='text-gray-600'>
										Level 8, The Exchange
										<br />
										Victoria Island, Lagos
										<br />
										Nigeria
									</p>
								</div>
							</div>

							<div className='flex gap-4'>
								<Phone className='w-6 h-6 text-black mt-1' />
								<div>
									<h3 className='font-bold mb-2'>Phone</h3>
									<p className='text-gray-600'>
										+234 (0) 1 234 5678
										<br />
										+234 (0) 1 876 5432
									</p>
								</div>
							</div>

							<div className='flex gap-4'>
								<Mail className='w-6 h-6 text-black mt-1' />
								<div>
									<h3 className='font-bold mb-2'>Email</h3>
									<p className='text-gray-600'>
										editor@africafinance.biz
										<br />
										press@africafinance.biz
									</p>
								</div>
							</div>

							<div className='flex gap-4'>
								<Clock className='w-6 h-6 text-black mt-1' />
								<div>
									<h3 className='font-bold mb-2'>Business Hours</h3>
									<p className='text-gray-600'>
										Mon - Fri: 8:00 - 18:00 WAT
										<br />
										Sat - Sun: Closed
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='bg-gray-50 p-8 sm:p-12 rounded'>
						<h2 className='text-2xl font-bold mb-8 uppercase tracking-tight'>
							Send a Message
						</h2>
						<form className='space-y-6'>
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
								<div>
									<label className='block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide'>
										First Name
									</label>
									<input
										type='text'
										className='w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition'
									/>
								</div>
								<div>
									<label className='block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide'>
										Last Name
									</label>
									<input
										type='text'
										className='w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition'
									/>
								</div>
							</div>

							<div>
								<label className='block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide'>
									Email
								</label>
								<input
									type='email'
									className='w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition'
								/>
							</div>

							<div>
								<label className='block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide'>
									Subject
								</label>
								<select className='w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition bg-white'>
									<option>Editorial Inquiry</option>
									<option>Press Release</option>
									<option>Partnership</option>
									<option>Other</option>
								</select>
							</div>

							<div>
								<label className='block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide'>
									Message
								</label>
								<textarea
									rows={5}
									className='w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition resize-none'
								></textarea>
							</div>

							<button
								type='button'
								className='w-full bg-black text-white px-8 py-4 font-bold rounded hover:bg-gray-800 transition-colors uppercase tracking-widest text-sm'
							>
								Submit Request
							</button>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
}
