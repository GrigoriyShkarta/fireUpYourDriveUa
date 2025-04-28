'use client'

import { useState } from 'react'
import Image from 'next/image'

import bonus from '@/assets/bonus.jpg'
import lesson1 from '@/assets/lesson1.jpg'
import lesson2 from '@/assets/lesson2.jpg'
import lesson3 from '@/assets/lesson3.jpg'
import lesson4 from '@/assets/lesson4.jpg'
import lesson5 from '@/assets/lesson5.jpg'

export default function Overview() {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const toggleQuestion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<section className='bg-[url("../assets/faq_fire.jpg")] bg-cover py-12 w-full'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold mb-8 text-center'>ЗМІСТ</h2>
				<div className='space-y-4'>
					{faqData.map((item, index) => (
						<div key={index} className='rounded-lg overflow-hidden'>
							<button
								onClick={() => toggleQuestion(index)}
								className='flex justify-between items-center w-full p-4 text-left text-xl font-semibold focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50 bg-black/80 hover:bg-black/90 transition-colors duration-200 cursor-pointer'
							>
								<span className='text-white'>{item.question}</span>
								<svg
									className={`w-6 h-6 text-white transition-transform duration-200 ${
										openIndex === index ? 'transform rotate-180' : ''
									}`}
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M19 9l-7 7-7-7'
									/>
								</svg>
							</button>
							<div
								className={`transition-all duration-300 ease-in-out overflow-hidden ${
									openIndex === index
										? 'max-h-96 opacity-100 md:max-h-full'
										: 'max-h-0 opacity-0'
								}`}
							>
								<div className='px-4 pb-4 text-gray-200 bg-black/70 flex flex-col gap-2 p-2'>
									<Image src={item.img} alt={'lesson'} />
									<p>{item.answer}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

const faqData = [
	{
		question: '🔬 Бонусний урок "Механіка екстриму"',
		img: bonus,
		answer:
			'Зрозумієш, як працює екстрим з точки зору анатомії та фізіології. Цей урок розкриває, що насправді відбувається в тілі під час екстремального вокалу. Обов’язково до перегляду для усвідомленого співу!',
	},
	{
		question: '🎥 Урок 1 "Надскладкові структури"',
		img: lesson1,
		answer:
			'Практичне відео з вправою, яка допоможе відчути та правильно задіяти роботу надскладкових структур. Ідеально для розвитку контролю та усвідомлення звучання!',
	},
	{
		question: '🎯 Урок 2 "Драйв: знаходження"',
		img: lesson2,
		answer:
			'Розкриєш потужну вокальну техніку "драйв" — дізнаєшся, як робиться ця техніка та отримаєш цілих сім ефективних способів, як її знайти.',
	},
	{
		question: '🔥 Урок 3 "Драйв: закріплення"',
		img: lesson3,
		answer:
			'Навчишся застосовувати техніку на голосних, приголосних та складах. Багато практики для глибокого засвоєння.',
	},
	{
		question: '🎼 Урок 4 "Драйв: стабілізація"',
		img: lesson4,
		answer:
			'Навчишся контролювати драйв у вокальних фразах українською та англійською під стилізовані рок-вправи. Твоя техніка стане впевненою, стабільною і музичною.',
	},
	{
		question: '🎤 Урок 5 "Драйв: практика на піснях"',
		img: lesson5,
		answer:
			'Переходимо до головного — використовуємо техніку драйв у піснях. Відчуєш, як твій вокал заграє новими фарбами!',
	},
]
