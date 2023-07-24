import { useContext } from 'react'

import { ThemeContext } from '@/context/ThemeContext'

const DarkModeToggle = () => {
	const { toggle, mode } = useContext(ThemeContext)
	return (
		<div className='w-12 h-6 border-2 border-darkGreen rounded-xl flex justify-between items-center p-1 relative'>
			<div className='text-sm'>🌙</div>
			<div className='text-sm'>☀️</div>
			<div
				className={`h-4 w-4 bg-lightGreen rounded-full absolute cursor-pointer ${
					mode === 'light' ? 'left-1' : 'right-1'
				}`}
				onClick={toggle}
			/>
		</div>
	)
}

export default DarkModeToggle
