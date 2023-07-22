import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div className='max-w-[1366px] min-h-screen my-0 mx-auto px-16 flex flex-col justify-between'>
					<Navbar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	)
}
