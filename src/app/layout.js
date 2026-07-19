import { Lexend_Deca } from 'next/font/google'
import './globals.css'

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
				{children}
            </body>
		</html>
	)
}
