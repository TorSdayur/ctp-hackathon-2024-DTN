import { useState } from "react";

import Card from "./Card";

import filterFoodServices from "../scripts/filterFoodServices";
import getCards from "../scripts/getCards";

export default function CardsContainer({
    foodServices,
    boroughs,
    dist,
    availabilities,
    page
})
{
    const CARD_LIMIT = 6;
    const [cards, setCards] = useState([]);

    let filteredFoodServices = filterFoodServices(foodServices, boroughs, dist, availabilities);
    getCards(filteredFoodServices, page, CARD_LIMIT, setCards);

    return (
        <div className="cards-container">
            {cards.map((card, index) => {
                <Card
                    id={index}
                    title={card.title}
                    phone={card.phone}
                    address={card.address}
                />
            })}
        </div>
    );
}