'use client'

import { useState } from 'react'

export default function FAQ() {
	// Состояние для отслеживания открытых вопросов
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	// Функция для переключения состояния вопроса
	const toggleQuestion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<section className='bg-[url("../assets/faq_fire.jpg")] bg-cover bg-center py-12'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold mb-8 text-center'>ЧАСТІ ЗАПИТАННЯ</h2>
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
										? 'max-h-96 opacity-100'
										: 'max-h-0 opacity-0'
								}`}
							>
								<div className='px-4 py-4 text-gray-200 bg-black/70'>
									{item.answer}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

// Данные для вопросов и ответов
const faqData = [
	{
		question: '❓ Чи можу я взяти участь, якщо я початківець?',
		answer:
			'Марафон розрахований на середній та просунутий рівень. Якщо ти тільки починаєш, то може бути складно проходити цей марафон. Тому раджу спочатку пройти мої марафони по базовим темам.',
	},
	{
		question: '❓ Чи безпечний драйв для голосу?',
		answer:
			'Так, якщо виконувати його правильно! Я навчу тебе цій техніці без шкоди для голосу.',
	},
	{
		question: '❓ Що входить у програму марафону?',
		answer:
			'Шість відеоуроків, PDF-конспекти, авторські рок-вправи. ' +
			'Тариф "Преміум" має ще тижневий зворотній зв\'язок та сертифікат про проходження марафону',
	},
	{
		question: "❓ Як відбувається зворотній зв'язок?",
		answer:
			'Ти можеш надсилати свої записи виконання вправ або пісень в Telegram, і я надаватиму персоналізовані рекомендації щодо техніки, звучання та помилок.',
	},
	{
		question: '❓Чи потрібне спеціальне обладнання для участі?',
		answer:
			'Достатньо будь-якого пристрою з доступом до інтернету та можливістю запису відео (навіть смартфона). ',
	},
	{
		question: '❓Чи можна отримати сертифікат?',
		answer:
			'Так, якщо ти обрав тариф "Преміум"! Після успішного завершення марафону ти отримаєш сертифікат, який підтвердить нові навички та знання.',
	},
]
