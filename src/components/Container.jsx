import { useState, useEffect } from "react";
import FilterMenu from "./FilterMenu"
import CardsContainer from "./CardsContainer"
import Map from "./Map"

import {getFoodServices} from '../scripts/getFoodServices'

import '../styles/Container.css'

export default function Container({foodTable})
{
    //for filtering cards
    const [boroughs, setBoroughs] = useState([]);
    const [dist, setDist] = useState('');
    const [availabilities, setAvailabilities] = useState([]);
    const foodServices = getFoodServices(foodTable)
    
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
                    availabilities.filter((a) => a != selectedAvailability)
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
            <div className="content-container">
                <Map />
                <CardsContainer
                    foodServices={foodServices}
                    boroughs={boroughs}
                    dist={dist}
                    availabilities={availabilities}
                />
            </div>
            <FilterMenu 
                onClickBoroughs={onClickBoroughs}
                onClickAvailabilities={onClickAvailabilities}
                onClickDist={onClickDist}
            />
        </div>
    );
}