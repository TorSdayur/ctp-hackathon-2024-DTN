import { useEffect, useState } from 'react'
import Container from './components/Container'

import supabase from './utils/supabase'

import './App.css'

function App() {
  const [foodServices, setFoodServices] = useState([])

  useEffect(() => {
    async function getFoodServices() {
      const {data: foodServices} = await supabase.from('food').select();

      if (foodServices.length > 1)
      {
        setFoodServices(foodServices);
      }
    }

    getFoodServices();
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
