import '../styles/CardsNav.css'

export default function CardsNav({cardsSize, cardLimit, page, setPage})
{
    const onClick = (e) => {
        updatePage(e.target.value, page, setPage);
    }

    function updatePage(buttonClicked, page, setPage) {
        if (buttonClicked === "prev-page") {
            setPage(page - 1);
        }
        else
        {
            setPage(page + 1);
        }
    }

    if (page === 0)
    {
        return (
            <nav className="page-nav">
                <button disabled={true} onClick={onClick} value="prev-page"></button>
                <button onClick={onClick} value="next-page"></button>
            </nav>
        );  
    }
    else if ((page + 1) * cardLimit > cardsSize)
    {
        return (
            <nav className="page-nav">
                <button onClick={onClick} value="prev-page"></button>
                <button disabled={true} onClick={onClick} value="next-page"></button>
            </nav>
        ); 
    }
    else {
        return (
            <nav className="page-nav">
                <button onClick={onClick} value="prev-page"></button>
                <button onClick={onClick} value="next-page"></button>
            </nav>
        );  
    }
}