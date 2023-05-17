import { Inter } from 'next/font/google'
import ConverterForm from '@/components/features/ConverterForm'
import { WalletDetail } from '@/components/features/WalletDetail'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex items-center justify-center h-screen ${inter.className}`}>
      <div className="bg-white rounded-xl flex sitems-center flex-col justify-center px-4 md:px-14 py-4 md:py-14">
        <ConverterForm />
        <WalletDetail /> 
      </div>
     </main>
  )
}
