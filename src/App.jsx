import { BrowserRouter,} from 'react-router-dom'
import './assets//css/index.css'
import './assets/css/dark-theme.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import FAQ from './components/FAQ'
import Logos from './components/Logos'
import Features from './components/Features'
import Carousel from './components/Carousel'
import BulletPoints from './components/BulletPoints'
import Newsletter from './components/Newsletter'
import ClientTestimonials from './components/ClientTestimonials'


function App() {  

  return (
  <>    
    <BrowserRouter />
    <Header />
    <main>
      <Hero />
      <Logos />
      <Features />
      <Carousel />
    <BulletPoints />    
    <ClientTestimonials />
    <FAQ />    
    <Newsletter />
    <Footer />         
    </main>
  </>
  )
}

export default App
