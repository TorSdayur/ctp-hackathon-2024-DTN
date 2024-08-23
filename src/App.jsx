import { useEffect, useState } from 'react'
import Container from './components/Container'
import './App.css'

function App() {
  const [foodServices, setFoodServices] = useState([])

  useEffect(() => {
    //fetch data from db
    //getFood(setFoodServices);
  }, []);

  return (
    <>
      <div>
        <header>
          <div className="logo"></div>
          <div className="mission-statement"></div>
        </header>
        <Container foodServices={foodServices}/>
      </div>
    </>
  )
}

export default App
