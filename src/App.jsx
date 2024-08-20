import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [cards, setCards] = useState([]);

  let services = [
    {
      title: "Food Pantry Hunter College",
      desc: "...",
      links: [{
        url: "something.com",
        title: "Something"
      }],
      service_type: "food",
      school: "Hunter",
    }
  ]
  
  const onClick = (e) => {
    e.preventDefault();
    let service_type = document.getElementById('search').value;
    let new_cards = services.filter((service) => service.service_type === service_type);
    setCards(new_cards);
  }

  return (
    <>
      <div>
        {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                desc={card.desc}
                links={card.links}
                service_type={card.service_type}
                school={card.school}
              />
        ))}
          <input
            type="text"
            id="search" 
            name="search"
          />
          <input type="submit" value="Search" onClick={onClick}/>
      </div>
    
    </>
  )
}

export default App
