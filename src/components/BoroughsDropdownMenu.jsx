import '../styles/BoroughsDrowdownMenu.css'

export default function BoroughsDrowdownMenu({onClick})
{
    return (
        <div class="dropdown">
            <button class="dropbtn">Boroughs</button>
            <div class="dropdown-content">
                <button value="manhattan" onClick={(e) => onClick(e.target.value)}>Manhattan</button>
                <button value="brooklyn" onClick={(e) => onClick(e.target.value)}>Brooklyn</button>
                <button value="queens" onClick={(e) => onClick(e.target.value)}>Queens</button>
                <button value="bronx" onClick={(e) => onClick(e.target.value)}>Bronx</button>
                <button value="staten_island" onClick={(e) => onClick(e.target.value)}>Staten Island</button>
            </div>
        </div>
    );
}