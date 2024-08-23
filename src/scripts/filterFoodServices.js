import haversine from 'haversine-distance'

export default function filterFoodServices(
    foodServices,
    boroughs,
    latLong,
    availabilities,
    setFilteredServices)
{
    //foodServices represents all available food services from db
    let filteredFoodServices = foodServices;

    //boroughs currently selected are filtered for
    if (boroughs)
    {
        filteredFoodServices = filteredFoodServices.filter(
            (foodService) => boroughs.includes(foodService.borough));
    }
    //filters distance from least to greatest distance
    if (latLong)
    {
        const user_loc = latLong;
        filteredFoodServices.sort((a,b) => {
            if (haversine(user_loc, a) < haversine(user_loc, b)) {
                return 1;
            }
            if (haversine(user_loc, a) > haversine(user_loc, b)) {
                return -1;
            }
            return 0;
        })
    }
    if (availabilities)
    {
        filteredFoodServices = filteredFoodServices.filter(
            (foodService) => filterAvailabilities(availabilities, foodService));
    }

    //update state
    setFilteredServices(filteredFoodServices);
}
function filterAvailabilities(availabilities, foodService) {
    for (const foodDay of foodService.days)
    {
        for (const availability of availabilities)
        {
            if (availability === foodDay)
            {
                return true;
            }
        }
    }
    return false;
}