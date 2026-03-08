"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";

const SLIDES = [
	{
		image:
			"https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
		title: "Navigating African Markets",
		description:
			"Expert insights into emerging trends and investment opportunities across the continent.",
	},
	{
		image:
			"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop",
		title: "The Future of Fintech",
		description:
			"How digital innovation is reshaping financial services in Sub-Saharan Africa.",
	},
	{
		image:
			"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
		title: "Sustainable Business Growth",
		description:
			"Strategies for building resilient and impactful enterprises in high-growth economies.",
	},
];

export function HeroCarousel() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
		Autoplay({ delay: 5000 }),
	]);
	const [selectedIndex, setSelectedIndex] = useState(0);

	useEffect(() => {
		if (!emblaApi) return;

		emblaApi.on("select", () => {
			setSelectedIndex(emblaApi.selectedScrollSnap());
		});
	}, [emblaApi]);

	return (
		<div
			className='relative w-full h-[80vh] bg-black overflow-hidden'
			ref={emblaRef}
		>
			<div className='flex w-full h-full'>
				{SLIDES.map((slide, index) => (
					<div
						key={index}
						className='flex-[0_0_100%] min-w-0 relative w-full h-full'
					>
						<div
							className='absolute inset-0 bg-cover bg-center transition-transform duration-10000'
							style={{ backgroundImage: `url(${slide.image})` }}
						/>
						<div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent' />

						<div className='absolute inset-0 flex items-center justify-center p-6 md:p-12'>
							<div className='max-w-4xl w-full mx-auto text-white text-center md:text-left mt-20 md:mt-0'>
								<h1 className='text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight'>
									{slide.title}
								</h1>
								<p className='text-lg md:text-2xl text-gray-300 max-w-2xl font-light mb-8'>
									{slide.description}
								</p>
								<div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
									<button className='bg-white text-black px-8 py-4 font-bold rounded hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group'>
										Read Story
										<ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
									</button>
									<button className='border border-white/30 text-white px-8 py-4 font-bold rounded hover:bg-white/10 transition-colors'>
										Subscribe Now
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className='absolute bottom-8 left-0 right-0 flex justify-center gap-2'>
				{SLIDES.map((_, index) => (
					<button
						key={index}
						className={`w-3 h-3 rounded-full transition-all ${
							index === selectedIndex
								? "bg-white scale-110"
								: "bg-white/30 hover:bg-white/50"
						}`}
						onClick={() => emblaApi?.scrollTo(index)}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
}
