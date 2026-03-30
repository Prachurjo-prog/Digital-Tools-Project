
import './App.css'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import NavBar from './Components/NavBar/NavBar'
import Popularity from './Components/Popularity/Popularity'

function App() {

  return (
    <>
    <div className='manrope  mx-auto'>
      <NavBar />
      <Hero/>
      <Popularity/>
      <Footer/>
    </div>
     
    </>
  )
}

export default App
