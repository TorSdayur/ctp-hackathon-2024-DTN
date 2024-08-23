import { useState } from "react";
import FilterMenu from "./FilterMenu"

export default function Container()
{
    //for filtering cards
    const [borough, setBorough] = useState('');
    const [dist, setDist] = useState('');
    const [availability, setAvailability] = useState('');

    const onClickBorough = (selectedBorough) => {
        setBorough(selectedBorough);
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
                onClickBorough={onClickBorough}
                onClickAvailabilty={onClickAvailability}
                onClickDist={onClickDist}
            />
        </div>
    );
    
}