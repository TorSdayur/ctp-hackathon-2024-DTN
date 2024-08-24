import { useState, useEffect } from "react";

import Card from "./Card";
import CardsNav from "./CardsNav";

import filterFoodServices from "../scripts/filterFoodServices";
import getCards from "../scripts/getCards";

import '../styles/CardsContainer.css'

export default function CardsContainer({
    foodServices,
    boroughs,
    dist,
    availabilities,
})
{
    const CARD_LIMIT = 6;
    
    const [page, setPage] = useState(0);
    const [cards, setCards] = useState([]);
    const filteredServices = filterFoodServices(foodServices, boroughs, dist, availabilities);

    useEffect(() => {
        const gCards = async () => {
            const crds = await getCards(filteredServices, page, CARD_LIMIT);
            setCards(crds);
        }
        gCards();
        
    }, [boroughs, dist, availabilities, page]);

    return (
        <div className="cards-container">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    id={index}
                    title={card.title}
                    phone={card.phone}
                    address={card.address}
                    days={card.days}
                    hours={card.hours}
                />
            ))}
            <CardsNav
            cardsSize={filteredServices.length}
            cardLimit={CARD_LIMIT}
            page={page}
            setPage={setPage}
            />
        </div>
    );
}