import { HeroCarousel } from "@/components/HeroCarousel";
import {
	ArrowRight,
	TrendingUp,
	Globe,
	FileText,
	ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LATEST_NEWS = [
	{
		category: "Markets",
		title:
			"Central Banks Signal Policy Shifts Amid Inflation Concerns",
		excerpt:
			"New economic data suggests a cautious approach from leading African banks for the upcoming quarter.",
		date: "Mar 15, 2026",
		readTime: "5 min read",
		image:
			"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
	},
	{
		category: "Technology",
		title:
			"Tech Giants Announce Major Digital Infrastructure Investments",
		excerpt:
			"A consortium of tech companies pledge billions to enhance connectivity across rural areas.",
		date: "Mar 14, 2026",
		readTime: "4 min read",
		image:
			"https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
	},
	{
		category: "Startups",
		title: "Agritech Platforms See Record Funding in Q1",
		excerpt:
			"Investors continue to bet heavily on innovative solutions targeting agricultural efficiency and supply chains.",
		date: "Mar 12, 2026",
		readTime: "6 min read",
		image:
			"https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
	},
];

export default function Home() {
	return (
		<div className='w-full'>
			<HeroCarousel />

			<section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
				<div className='flex justify-between items-end mb-12'>
					<div>
						<h2 className='text-3xl font-black uppercase tracking-tight mb-2'>
							Latest Insights
						</h2>
						<p className='text-gray-500'>
							Stay ahead with our breaking news and deep analyses.
						</p>
					</div>
					<Link
						href='/blog'
						className='hidden md:flex items-center gap-1 font-bold hover:text-gray-600 transition-colors'
					>
						View All <ArrowRight className='w-4 h-4' />
					</Link>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{LATEST_NEWS.map((news, i) => (
						<article key={i} className='group cursor-pointer'>
							<div className='relative h-64 w-full mb-6 overflow-hidden rounded bg-gray-100'>
								<img
									src={news.image}
									alt={news.title}
									className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
								/>
							</div>
							<div className='flex items-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-wider mb-3'>
								<span className='text-black'>{news.category}</span>
								<span>{news.date}</span>
							</div>
							<h3 className='text-xl font-bold mb-3 group-hover:underline underline-offset-4 decoration-2'>
								{news.title}
							</h3>
							<p className='text-gray-600 mb-4 line-clamp-2'>
								{news.excerpt}
							</p>
							<div className='flex items-center text-sm font-medium'>
								{news.readTime}
							</div>
						</article>
					))}
				</div>
				<div className='mt-10 md:hidden flex justify-center'>
					<Link
						href='/blog'
						className='flex items-center gap-2 font-bold px-6 py-3 border border-black rounded hover:bg-black hover:text-white transition-colors w-full justify-center'
					>
						View All News <ArrowRight className='w-4 h-4' />
					</Link>
				</div>
			</section>

			<section className='bg-black text-white py-24'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
						<div>
							<h2 className='text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight'>
								The pulse of <br />
								African Markets.
							</h2>
							<p className='text-gray-400 text-lg mb-8 leading-relaxed'>
								Join thousands of industry leaders, investors, and
								entrepreneurs who rely on Africa Finance Business for
								their daily market intelligence and strategic
								insights.
							</p>
							<ul className='space-y-4 mb-10'>
								{[
									{
										icon: TrendingUp,
										text: "Unrivaled market data and analytics",
									},
									{
										icon: Globe,
										text: "Pan-African economic coverage",
									},
									{
										icon: FileText,
										text: "Exclusive interviews and reports",
									},
								].map((item, i) => (
									<li key={i} className='flex items-center gap-4'>
										<div className='bg-white/10 p-2 rounded-full'>
											<item.icon className='w-5 h-5 text-white' />
										</div>
										<span className='font-medium text-gray-200'>
											{item.text}
										</span>
									</li>
								))}
							</ul>
							<Link
								href='/about'
								className='inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-bold rounded hover:bg-gray-200 transition-colors'
							>
								Learn About Us <ChevronRight className='w-5 h-5' />
							</Link>
						</div>
						<div className='relative h-[500px] w-full bg-zinc-900 rounded overflow-hidden'>
							<img
								src='https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop'
								alt='Business professionals'
								className='w-full h-full object-cover opacity-80 mix-blend-luminosity'
							/>
							<div className='absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent' />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
