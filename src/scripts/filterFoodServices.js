export default function filterFoodServices(
    foodServices,
    boroughs,
    dist,
    availabilities,
    setFoodServices)
{
    let filteredFoodServices = foodServices;
    if (boroughs)
    {
        filteredFoodServices = filteredFoodServices.filter(
            (foodService) => boroughs.includes(foodService.borough));
    }
    if (dist)
    {
        
    }
    if (availabilities)
    {
        filteredFoodServices = filteredFoodServices.filter(
            (foodService) => filterAvailabilities(availabilities, foodService));
    }

    setFoodServices(filteredFoodServices);
}

function filterAvailabilities(availabilities, foodService) {
    for (const availability of foodService.availabilities)
    {
        if (availabilities.includes(availability))
        {
            return true;
        }
    }
    return false;
}