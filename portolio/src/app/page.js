import Image from 'next/image'
import Ipage from './pages/page1'
import Page2 from './pages/page2'
import Lpage from './pages/lpage'
import Pag2i from './pages/2page'
import App   from './pages/hoppy'
import { Metadata } from 'next'

export const metadata= {
  title: 'ENAGY',
  description: 'enagy portfolio',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1', // <-- now here
}

export default function Home() {
 
  return (
   <>
   
   <Ipage/>
   <Pag2i/>
   <Page2/>
   <Lpage/>
   </>
  )
}
