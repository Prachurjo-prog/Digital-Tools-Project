
import './App.css'
import Footer from './Components/Footer/Footer'
import GetStarted from './Components/GetStarted/GetStarted'
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
      <GetStarted/>
      <Footer/>
    </div>
     
    </>
  )
}

export default App
