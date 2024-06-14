
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import LineCharts from './components/Linechart/LineCharts'
import Navbar from './components/NavBar/Navbar'
import Phones from './components/Phones/Phones'



function App() {
  

  return (
    <>
    

    <Navbar></Navbar>
    <DaisyNav></DaisyNav>
    <h1 className='text-5xl bg-rose-600'>Vite + React</h1>
    <LineCharts></LineCharts>
    <Phones></Phones>

      
      
     
      
      
    </>
  )
}

export default App
