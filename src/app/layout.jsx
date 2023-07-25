import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import AuthProvider from '@/components/AuthProvider/AuthProvider'

import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Lama dev',
	description: 'This is the description of the website'
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ThemeProvider>
					<AuthProvider>
						<div className='max-w-[1366px] min-h-screen my-0 mx-auto px-16 flex flex-col justify-between'>
							<Navbar />
							{children}
							<Footer />
						</div>
					</AuthProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
