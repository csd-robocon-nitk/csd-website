import { Familjen_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Familjen_Grotesk({ subsets: ['latin'], weight: ['variable']})

export const metadata = {
	title: 'Center for System Design',
	description:
		'Center for System Design at National Institute of Technology, Karnataka, Suratkhal'
}

export default function RootLayout({ children }) {
	return (
		
		<html lang="en">
			<meta name="viewport" content="width=device-width, initial-scale = 1.0,maximum-scale=1.0" /> 
			<body className={`${inter.className} text-shark-950 bg-white`}>
                <Header />
                {children}
				<Footer />
            </body>
		</html>
	)
}
