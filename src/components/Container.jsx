import { useState } from "react";
import FilterMenu from "./FilterMenu"

export default function Container()
{
    //for filtering cards
    const [boroughs, setBoroughs] = useState([]);
    const [dist, setDist] = useState('');
    const [availability, setAvailability] = useState('');

    const onClickBoroughs = (selectedBorough) => {
        if (boroughs.includes(selectedBorough))
        {
            setBoroughs(
                boroughs.filter((b) => b != selectedBorough)
            );
        }
        else
        {
            setBoroughs([
                ...boroughs,
                selectedBorough
            ])
        }
    };

    const onClickDist = (selectedDist) => {
        setDist(selectedDist);
    };

    const onClickAvailability = (selectedAvailability) => {
        setAvailability(selectedAvailability);
    }
    
    return (
        <div className="container">
            <FilterMenu 
                onClickBoroughs={onClickBoroughs}
                onClickAvailabilty={onClickAvailability}
                onClickDist={onClickDist}
            />
        </div>
    );
    
}