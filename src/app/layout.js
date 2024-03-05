import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Center for System Design',
	description:
		'Center for System Design at National Institute of Technology, Karnataka, Suratkhal'
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
                <Header />
                {children}
            </body>
		</html>
	)
}
