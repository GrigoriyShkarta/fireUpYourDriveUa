export default function Price() {
	return (
		<div className='py-16 px-6 max-w-5xl mx-auto w-full'>
			<h2 className='text-3xl font-bold mb-8 text-center'>Ціна</h2>

			<div className='grid md:grid-cols-2 gap-8'>
				{/* Базовый вариант */}
				<div className='bg-gray p-8 rounded-lg shadow-md border border-gray-200 flex flex-col justify-between'>
					<div>
						<h3 className='text-2xl font-semibold mb-4'>Базовий</h3>
						<p className='text-4xl font-bold mb-4'>2000 грн</p>
						<ul className='space-y-2'>
							<li className='flex items-center'>
								<svg
									className='w-5 h-5 mr-2 text-gray-500'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M5 13l4 4L19 7'
									></path>
								</svg>
								Без зворотнього зв&apos;язку
							</li>
							<li className='flex items-center'>
								<svg
									className='w-5 h-5 mr-2 text-gray-500'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M5 13l4 4L19 7'
									></path>
								</svg>
								Без сертифікату
							</li>
						</ul>
					</div>
					<a href='https://t.me/yana_vocalcoach'>
						<button className='mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded transition cursor-pointer'>
							<a href='https://t.me/yana_vocalcoach'>Обрати</a>
						</button>
					</a>
				</div>

				{/* Премиум вариант с "огненным" стилем */}
				<div className='relative p-8 rounded-lg shadow-md bg-gradient-to-br from-orange-500 to-red-600 text-white transform hover:scale-105 transition duration-300'>
					{/* Декоративный элемент "популярно" */}
					<div className='absolute top-0 right-0 bg-yellow-400 text-red-800 font-bold px-4 py-1 rounded-bl-lg rounded-tr-lg transform rotate-12 translate-x-2 -translate-y-2'>
						Рекомендовано
					</div>
					<h3 className='text-2xl font-semibold mb-4'>Преміум</h3>
					<p className='text-4xl font-bold mb-4'>3000 грн</p>
					<ul className='space-y-2'>
						<li className='flex items-center'>
							<svg
								className='w-5 h-5 mr-2 text-yellow-300 flex-shrink-0'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M5 13l4 4L19 7'
								></path>
							</svg>
							З зворотнім зв&apos;язком на 7 днів з моменту покупки
						</li>
						<li className='flex items-center'>
							<svg
								className='w-5 h-5 mr-2 text-yellow-300 flex-shrink-0'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M5 13l4 4L19 7'
								></path>
							</svg>
							Пріоритетна підтримка
						</li>
						<li className='flex items-center'>
							<svg
								className='w-5 h-5 mr-2 text-yellow-300 flex-shrink-0'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M5 13l4 4L19 7'
								></path>
							</svg>
							Сертифікат про проходження марафону
						</li>
					</ul>
					<a href='https://t.me/yana_vocalcoach'>
						<button className='mt-6 w-full bg-yellow-400 hover:bg-yellow-300 text-red-800 font-bold py-2 px-4 rounded transition shadow-lg hover:shadow-xl cursor-pointer'>
							Обрати
						</button>
					</a>
				</div>
			</div>

			<p className='text-center mt-8'>Доступ до матеріалів в каналі назавжди</p>
		</div>
	)
}
