export default function HeroSection() {
	return (
		<section className="relative w-full bg-[url('../assets/header_bg.jpeg')] bg-cover bg-center text-white py-16 px-4 text-center">
			{/* Затемняющий слой */}
			<div className='absolute inset-0 bg-black/60 z-0' />

			{/* Контент поверх фона */}
			<div className='relative z-10'>
				<h1 className='text-3xl font-bold mb-8'>Вокальний марафон</h1>
				<h1 className='text-4xl md:text-6xl font-bold mb-6 title text-[#0CC0DF]'>
					Fire Up Your Drive
				</h1>
				<p className='text-lg md:text-xl max-w-3xl mx-auto mb-6'>
					Хочеш додати своєму голосу справжньої рокової хрипотци та звучати
					потужно й впевнено?
				</p>
			</div>
		</section>
	)
}
