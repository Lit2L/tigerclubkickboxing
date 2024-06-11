'use client'

import { cn } from '@/lib/utils'
import AnimatedShinyText from '@/components/ui/animated-shiny-text'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export async function AnimatedShinyTextButton() {
	return (
		<div className='z-10 flex min-h-[16rem] items-center justify-center'>
			<Link
				href='/'
				className={cn(
					'group rounded-xl border border-black/5 bg-[#6e0e0a] text-white transition-all ease-in hover:cursor-pointer hover:border-double hover:border-white hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'
				)}
			>
				<AnimatedShinyText className='flex items-center justify-center  transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 h-12 w-56 border-gray-400 hover:border-red-800 border-2 rounded-xl '>
					<span className='mr-3 size-4 transition-transform duration-200 ease-in-out group-hover:translate-x-3 scale-x-[-1] -translate-y-[2.3px]'>
						🥊
					</span>
					<span>Join Today</span>
					{/* <ArrowRightIcon className='ml-1 size-3 transition-transform duration-200 ease-in-out group-hover:translate-x-1' /> */}
					<span className='ml-3 size-4 transition-transform duration-200 ease-in-out -translate-y-[2px] group-hover:-translate-x-3'>
						🥊
					</span>
				</AnimatedShinyText>
			</Link>
		</div>
	)
}
