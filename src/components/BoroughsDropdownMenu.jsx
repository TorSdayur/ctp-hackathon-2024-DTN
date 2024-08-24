import '../styles/BoroughsDropdownMenu.css'

//multiple boroughs may be selected
export default function BoroughsDrowdownMenu({onClick})
{
    return (
        <div className="dropdown">
            <button className="dropbtn">Boroughs</button>
            <div className="dropdown-content">
                <button value="manhattan" onClick={(e) => onClick(e.target.value)}>Manhattan</button>
                <button value="brooklyn" onClick={(e) => onClick(e.target.value)}>Brooklyn</button>
                <button value="queens" onClick={(e) => onClick(e.target.value)}>Queens</button>
                <button value="the bronx" onClick={(e) => onClick(e.target.value)}>Bronx</button>
                <button value="staten island" onClick={(e) => onClick(e.target.value)}>Staten Island</button>
            </div>
        </div>
    );
}