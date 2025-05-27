import { Lexend_Deca, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/header'
import Footer from '@/components/footer'
import { Providers } from './providers'

const inter = Lexend_Deca({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']})

export const metadata = {
	title: 'Centre for System Design',
	description:
		'Centre for System Design at National Institute of Technology, Karnataka, Suratkhal'
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<meta name="viewport" content="width=device-width, initial-scale = 1.0,maximum-scale=1.0" /> 
			<body className={`${inter.className} bg-sky-50`}>
                <Providers>
					<Header />
					{children}
					<Footer />
				</Providers>
            </body>
		</html>
	)
}
