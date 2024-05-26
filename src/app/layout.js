import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const monsterrat = Montserrat({ subsets: ['latin'], weight: ['400', '700', '900'] })

export const metadata = {
	title: 'Center for System Design',
	description:
		'Center for System Design at National Institute of Technology, Karnataka, Suratkhal'
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${monsterrat.className} text-slate-700`}>
                <Header />
                {children}
				<Footer />
            </body>
		</html>
	)
}
