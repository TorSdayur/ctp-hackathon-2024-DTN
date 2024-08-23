import { useState } from "react";
import FilterMenu from "./FilterMenu"

export default function Container()
{
    //for filtering cards
    const [boroughs, setBoroughs] = useState([]);
    const [dist, setDist] = useState('');
    const [availabilities, setAvailabilities] = useState([]);

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

    const onClickAvailabilities = (selectedAvailability) => {
        setAvailabilities(selectedAvailability);
        if (availabilities.includes(selectedAvailability))
            {
                setAvailabilities(
                    availabilities.filter((a) => a != availabilities)
                );
            }
            else
            {
                setAvailabilities([
                    ...availabilities,
                    selectedAvailability
                ])
            }
    }
    
    return (
        <div className="container">
            <FilterMenu 
                onClickBoroughs={onClickBoroughs}
                onClickAvailabilty={onClickAvailabilities}
                onClickDist={onClickDist}
            />
        </div>
    );
    
}