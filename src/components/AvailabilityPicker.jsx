import '../styles/AvailabilityPicker.css'

export default function AvailabilityPicker({onClick}) {
    return (
        <div className="dropdown">
            <button className="dropbtn">Days</button>
            <div className="dropdown-content">
                <button value="m" onClick={(e) => onClick(e.target.value)}>Monday</button>
                <button value="tu" onClick={(e) => onClick(e.target.value)}>Tuesday</button>
                <button value="w" onClick={(e) => onClick(e.target.value)}>Wednesday</button>
                <button value="th" onClick={(e) => onClick(e.target.value)}>Thursday</button>
                <button value="f" onClick={(e) => onClick(e.target.value)}>Friday</button>
                <button value="sa" onClick={(e) => onClick(e.target.value)}>Saturday</button>
                <button value="su" onClick={(e) => onClick(e.target.value)}>Sunday</button>
            </div>
        </div>
    )
}