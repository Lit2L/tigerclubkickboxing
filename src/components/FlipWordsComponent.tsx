import React from 'react'
import { FlipWords } from './ui/flip-words'

export function FlipWordsComponent() {
	const words = ['cool', 'new', 'now', 'You']

	return (
		<div className='h-[10rem] flex-col  flex justify-center items-center px-4'>
			{/* <p className='text-left mx-auto text-4xl -translate-x-6 font-normal text-[#e6b63e] dark:text-[#ffcb47]'></p> */}
			<div className='text-4xl mx-auto font-normal text-[#e6b63e] dark:text-[#ffcb47]'>
				Be
				<FlipWords words={words} /> <br />
				simplicity
			</div>
		</div>
	)
}
