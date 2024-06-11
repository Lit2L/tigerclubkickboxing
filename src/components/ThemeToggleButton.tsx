'use client'

import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion'
import { GiStripedSun } from 'react-icons/gi'
import { GiEvilMoon } from 'react-icons/gi'

import * as React from 'react'

import { useTheme } from '@/hooks/use-theme'
import { Button } from '@/components/ui/button'
import { useMounted } from '@/hooks/use-mounted'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'

type IconButtonProps = HTMLMotionProps<'button'> & React.ComponentPropsWithRef<'button'>

const IconButton: React.FC<IconButtonProps> = ({ children, ...props }) => (
	<motion.button
		{...props}
		initial={{ opacity: 0, rotate: -65, originY: '150%', originX: 0.5 }}
		animate={{ opacity: 1, rotate: 0 }}
		transition={{ duration: 0.4, ease: 'backOut' }}
	>
		{children}
	</motion.button>
)
IconButton.displayName = 'IconButton'

export const ThemeToggleButton: React.FC = () => {
	const { theme, toggleTheme } = useTheme()
	const mounted = useMounted()

	const isDarkMode = theme === 'dark'

	if (!mounted) return null

	return (
		<AnimatePresence mode='wait'>
			{isDarkMode ? (
				<IconButton
					key='light-mode'
					className='hover:text-yellow-500 overflow-hidden text-orange-600  dark:text-gray-300 dark:hover:text-[#eaf27c] transition-all duration-200 ease-linear '
					onClick={toggleTheme}
				>
					<MdOutlineLightMode title='Light mode' size={24} />
				</IconButton>
			) : (
				<IconButton
					key='dark-mode'
					className=' overflow-hidden text-orange-100/50 bg-transparent rounded-full hover:text-[#2e7796] dark:text-dark-300 dark:hover:text-dark-200 ease-in-out'
					onClick={toggleTheme}
				>
					<MdOutlineDarkMode title='Dark mode' size={24} />
				</IconButton>
			)}
		</AnimatePresence>
	)
}
