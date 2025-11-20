// export default function Price() {
// 	return (
// 		<div className='py-16 px-6 max-w-5xl mx-auto w-full'>
// 			<h2 className='text-3xl font-bold mb-8 text-center'>Ціна</h2>
//
// 			<div className='grid md:grid-cols-2 gap-8'>
// 				{/* Базовый вариант */}
// 				<div className='bg-gray p-8 rounded-lg shadow-md border border-gray-200 flex flex-col justify-between'>
// 					<div>
// 						<h3 className='text-2xl font-semibold mb-4'>Базовий</h3>
// 						<p className='text-4xl font-bold mb-4'>2000 грн</p>
// 						<ul className='space-y-2'>
// 							<li className='flex items-center'>
// 								<svg
// 									className='w-5 h-5 mr-2 text-gray-500'
// 									fill='none'
// 									stroke='currentColor'
// 									viewBox='0 0 24 24'
// 									xmlns='http://www.w3.org/2000/svg'
// 								>
// 									<path
// 										strokeLinecap='round'
// 										strokeLinejoin='round'
// 										strokeWidth='2'
// 										d='M5 13l4 4L19 7'
// 									></path>
// 								</svg>
// 								Без зворотнього зв&apos;язку
// 							</li>
// 							<li className='flex items-center'>
// 								<svg
// 									className='w-5 h-5 mr-2 text-gray-500'
// 									fill='none'
// 									stroke='currentColor'
// 									viewBox='0 0 24 24'
// 									xmlns='http://www.w3.org/2000/svg'
// 								>
// 									<path
// 										strokeLinecap='round'
// 										strokeLinejoin='round'
// 										strokeWidth='2'
// 										d='M5 13l4 4L19 7'
// 									></path>
// 								</svg>
// 								Без сертифікату
// 							</li>
// 						</ul>
// 					</div>
// 					<a href='https://t.me/yana_vocalcoach'>
// 						<button className='mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded transition cursor-pointer'>
// 							<a href='https://t.me/yana_vocalcoach'>Обрати</a>
// 						</button>
// 					</a>
// 				</div>
//
// 				{/* Премиум вариант с "огненным" стилем */}
// 				<div className='relative p-8 rounded-lg shadow-md bg-gradient-to-br from-orange-500 to-red-600 text-white transform hover:scale-105 transition duration-300'>
// 					{/* Декоративный элемент "популярно" */}
// 					<div className='absolute top-0 right-0 bg-yellow-400 text-red-800 font-bold px-4 py-1 rounded-bl-lg rounded-tr-lg transform rotate-12 translate-x-2 -translate-y-2'>
// 						Рекомендовано
// 					</div>
// 					<h3 className='text-2xl font-semibold mb-4'>Преміум</h3>
// 					<p className='text-4xl font-bold mb-4'>3000 грн</p>
// 					<ul className='space-y-2'>
// 						<li className='flex items-center'>
// 							<svg
// 								className='w-5 h-5 mr-2 text-yellow-300 flex-shrink-0'
// 								fill='none'
// 								stroke='currentColor'
// 								viewBox='0 0 24 24'
// 								xmlns='http://www.w3.org/2000/svg'
// 							>
// 								<path
// 									strokeLinecap='round'
// 									strokeLinejoin='round'
// 									strokeWidth='2'
// 									d='M5 13l4 4L19 7'
// 								></path>
// 							</svg>
// 							З зворотнім зв&apos;язком на 7 днів з моменту покупки
// 						</li>
// 						<li className='flex items-center'>
// 							<svg
// 								className='w-5 h-5 mr-2 text-yellow-300 flex-shrink-0'
// 								fill='none'
// 								stroke='currentColor'
// 								viewBox='0 0 24 24'
// 								xmlns='http://www.w3.org/2000/svg'
// 							>
// 								<path
// 									strokeLinecap='round'
// 									strokeLinejoin='round'
// 									strokeWidth='2'
// 									d='M5 13l4 4L19 7'
// 								></path>
// 							</svg>
// 							Пріоритетна підтримка
// 						</li>
// 						<li className='flex items-center'>
// 							<svg
// 								className='w-5 h-5 mr-2 text-yellow-300 flex-shrink-0'
// 								fill='none'
// 								stroke='currentColor'
// 								viewBox='0 0 24 24'
// 								xmlns='http://www.w3.org/2000/svg'
// 							>
// 								<path
// 									strokeLinecap='round'
// 									strokeLinejoin='round'
// 									strokeWidth='2'
// 									d='M5 13l4 4L19 7'
// 								></path>
// 							</svg>
// 							Сертифікат про проходження марафону
// 						</li>
// 					</ul>
// 					<a href='https://t.me/yana_vocalcoach'>
// 						<button className='mt-6 w-full bg-yellow-400 hover:bg-yellow-300 text-red-800 font-bold py-2 px-4 rounded transition shadow-lg hover:shadow-xl cursor-pointer'>
// 							Обрати
// 						</button>
// 					</a>
// 				</div>
// 			</div>
//
// 			<p className='text-center mt-8'>Доступ до матеріалів в каналі назавжди</p>
// 		</div>
// 	)
// }

export default function Price() {
  return (
    <div className='py-16 px-6 max-w-5xl mx-auto w-full'>
      {/* Заголовок с акционным баннером */}
      <div className='text-center mb-12'>
        <div className='bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold py-2 px-4 rounded-full inline-block mb-4 animate-pulse'>
          ЧОРНА П&#39;ЯТНИЦЯ - Обмежена пропозиція!
        </div>
        <h2 className='text-4xl font-bold mb-4'>Акційні Ціни</h2>
        <p className='text-gray-600'>Знижки діють лише до 28 листопада</p>
      </div>
      
      <div className='grid md:grid-cols-2 gap-8'>
        {/* Базовый вариант с акционной ценой */}
        <div className='p-8 rounded-2xl shadow-lg border-2 border-gray-100 flex flex-col justify-between relative'>
          {/* Акционный стикер */}
          <div className='absolute -top-3 -left-3 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold'>
            -50%
          </div>
          
          <div>
            <h3 className='text-2xl font-semibold mb-4'>Базовий</h3>
            
            {/* Старая цена зачеркнута */}
            <div className='mb-2'>
              <span className='text-gray-400 line-through text-lg'>2000 грн</span>
            </div>
            
            {/* Новая акционная цена */}
            <p className='text-4xl font-bold mb-4 text-green-600'>1000 грн</p>
            
            <ul className='space-y-3'>
              <li className='flex items-center'>
                <svg className='w-5 h-5 mr-3 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path>
                </svg>
                Без зворотнього зв&#39;язку
              </li>
              <li className='flex items-center'>
                <svg className='w-5 h-5 mr-3 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path>
                </svg>
                Без сертифікату
              </li>
            </ul>
          </div>
          <a href='https://t.me/yana_vocalcoach'>
          <button className='mt-6 w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 cursor-pointer hover:scale-105'>
            Обрати за акційною ціною
          </button>
          </a>
        </div>
        
        {/* Премиум вариант с максимальной скидкой */}
        <div className='relative p-8 rounded-2xl shadow-2xl bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white transform hover:scale-105 transition duration-300'>
          {/* Верхний стикер "Топ предложение" */}
          <div className='absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-red-800 font-bold px-8 py-2 rounded-full text-sm animate-bounce whitespace-nowrap'>
            🔥 НАЙПОПУЛЯРНІШЕ
          </div>
          
          {/* Стикер скидки */}
          <div className='absolute top-4 right-4 bg-black  text-red-600 font-bold px-3 py-1 rounded-full text-sm'>
            -50%
          </div>
          
          <h3 className='text-2xl font-semibold mb-4'>Преміум</h3>
          
          {/* Старая цена */}
          <div className='mb-2'>
            <span className='text-yellow-200 line-through text-lg'>3000 грн</span>
          </div>
          
          {/* Новая цена */}
          <p className='text-5xl font-bold mb-4 text-yellow-300'>1500 грн</p>
          
          {/* Экономия */}
          <div className='bg-black bg-opacity-30 rounded-lg p-3 mb-4'>
            <p className='text-yellow-300 font-semibold'>✅ Ви економите: 1500 грн</p>
          </div>
          
          <ul className='space-y-3'>
            <li className='flex items-center'>
              <svg className='w-5 h-5 mr-3 text-yellow-300 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path>
              </svg>
              З зворотнім зв&#39;язком протягом двух тижнів
            </li>
            <li className='flex items-center'>
              <svg className='w-5 h-5 mr-3 text-yellow-300 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path>
              </svg>
              Пріоритетна підтримка
            </li>
            <li className='flex items-center'>
              <svg className='w-5 h-5 mr-3 text-yellow-300 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path>
              </svg>
              Сертифікат про проходження
            </li>
          </ul>
          
          <a href='https://t.me/yana_vocalcoach'>
          <button className='flex items-center gap-2 mt-6 w-full bg-yellow-400 hover:bg-yellow-300 text-red-800 text-nowrap font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl cursor-pointer hover:scale-105 transform'>
            ⭐ Отримати максимальну вигоду
          </button>
          </a>
        </div>
      </div>
      
      <p className='text-center mt-8 text-4xl text-yellow-300'>СТАРТ 1 ГРУДНЯ</p>
      
      <p className='text-center mt-8 text-gray-600 font-semibold'>Доступ до матеріалів в каналі до 1 лютого 2026 року</p>
    </div>
  )
}