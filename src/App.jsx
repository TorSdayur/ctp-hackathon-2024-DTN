import { useState } from 'react'
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
      school: "hunter",
    }
  ]
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter')
    {
      let query = document.getElementById('search');
      let service_type = query.value;
      let new_cards = services.filter((service) => service.service_type === service_type);
      setCards(new_cards);
      query.value = '';
    }
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
            placeholder="Search services..."
            list="services"
            autoComplete="off"
            onKeyDown={handleKeyDown}
          />
          <datalist id="services">
            <option value="food"/>
            <option value="dental"/>
          </datalist>
      </div>
    </>
  )
}

export default App
