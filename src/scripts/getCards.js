export default function getCards(filteredFoodServices, page, cardLimit, setCards)
{
    let cards = [];
    let startPosition = page * cardLimit
    let endPosition = startPosition + cardLimit;

    //in the case we are at the final page
    if (endPosition > filteredFoodServices.length)
    {
        endPosition = filteredFoodServices.length;
    }

    for (let i = startPosition; i < endPosition; ++i)
    {
        cards.push(filteredFoodServices[i]);
    }
    setCards(cards);
}