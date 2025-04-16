import { FC } from 'react'
import Head from 'next/head'
import ForWhomSection from '@/components/ForWhomSection '
import HeroSection from '@/components/HeroSection'
import PathSection from '@/components/PathSection'
import WhatIncludedSection from '@/components/WhatIncludedSection'
import ExamplesSection from '@/components/ExamplesSection'
import AboutAuthor from '@/components/AboutAuthor'
import Price from '@/components/Price'
import FAQ from '@/components/FAQ'
import Overview from '@/components/Overview'
import Carousel from '@/components/Carousel'
import StudentCase from '@/components/StudenCase'
import Button from '@/components/Button'

const Home: FC = () => {
	return (
		<>
			<Head>
				<title>Fire Up Your Drive — Вокальний Марафон</title>
				<meta
					name='description'
					content='Освой драйв — потужну екстрим-техніку вокалу, яка зробить твій голос роковим, хрипким і впевненим!'
				/>
			</Head>
			<main className='flex flex-col items-center w-full overflow-x-hidden tracking-wider'>
				<HeroSection />
				<ExamplesSection />
				<ForWhomSection />
				<WhatIncludedSection />
				<PathSection />
				<Overview />
				<StudentCase />
				<Carousel />
				<AboutAuthor />
				<Price />
				<FAQ />

				<Button />
			</main>
		</>
	)
}

export default Home
