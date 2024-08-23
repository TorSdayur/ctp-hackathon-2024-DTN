import '../styles/DistPicker.css'

export default function DefaultPicker({onClick})
{
    return (
        <div class="dropdown">
            <button class="dropbtn">Distance</button>
            <div class="dropdown-content">
                <button value="1" onClick={(e) => onClick(e.target.value)}>1 mi</button>
                <button value="3" onClick={(e) => onClick(e.target.value)}>3 mi</button>
                <button value="5" onClick={(e) => onClick(e.target.value)}>5 mi</button>
                <button value="8" onClick={(e) => onClick(e.target.value)}>8 mi</button>
                <button value="15" onClick={(e) => onClick(e.target.value)}>15 mi</button>
            </div>
        </div>
    );
}