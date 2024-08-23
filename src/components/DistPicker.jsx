import '../styles/DistPicker.css'

//Will be either removed or just a simple toggle
//will not include options to select from
export default function DefaultPicker({onClick})
{
    return (
        <div className="dropdown">
            <button className="dropbtn">Distance</button>
            <div className="dropdown-content">
                <button value="1" onClick={(e) => onClick(e.target.value)}>1 mi</button>
                <button value="3" onClick={(e) => onClick(e.target.value)}>3 mi</button>
                <button value="5" onClick={(e) => onClick(e.target.value)}>5 mi</button>
                <button value="8" onClick={(e) => onClick(e.target.value)}>8 mi</button>
                <button value="15" onClick={(e) => onClick(e.target.value)}>15 mi</button>
            </div>
        </div>
    );
}