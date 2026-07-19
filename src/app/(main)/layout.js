import Header from '@/components/header/header'
import Footer from '@/components/footer'
import { Providers } from '../providers'
import { Suspense } from 'react'

export default function RootLayout({ children }) {
	return (
		<Providers>
			<Suspense>
				<Header />
			</Suspense>
			{children}
			<Footer />
		</Providers>
	)
}
