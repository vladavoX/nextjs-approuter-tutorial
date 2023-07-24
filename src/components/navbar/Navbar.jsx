'use client'
import Link from 'next/link'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'

const links = [
	{
		id: 1,
		title: 'Home',
		url: '/'
	},
	{
		id: 2,
		title: 'Portfolio',
		url: '/portfolio'
	},
	{
		id: 3,
		title: 'Blog',
		url: '/blog'
	},
	{
		id: 4,
		title: 'About',
		url: '/about'
	},
	{
		id: 5,
		title: 'Contact',
		url: '/contact'
	},
	{
		id: 6,
		title: 'Dashboard',
		url: '/dashboard'
	}
]

const Navbar = () => {
	return (
		<nav className='h-24 flex justify-between items-center'>
			<Link
				href='/'
				className='font-bold text-xl'
			>
				lamamia
			</Link>
			<div className='flex items-center gap-5'>
				<DarkModeToggle />
				{links.map(link => (
					<Link
						key={link.id}
						href={link.url}
					>
						{link.title}
					</Link>
				))}
				<button
					onClick={() => console.log('logged out')}
					className='p-1 bg-lightGreen text-white cursor-pointer rounded-sm border-none'
				>
					Logout
				</button>
			</div>
		</nav>
	)
}

export default Navbar
