export default function filterFoodServices(
    foodServices,
    boroughs,
    dist,
    availability,
    setFoodServices)
{
    let filteredFoodServices = foodServices;
    if (boroughs)
    {
        filteredFoodServices = filterFoodServices.filter(
            (foodService) => boroughs.includes(foodService.borough));
    }
    if (dist)
    {
        
    }
    if (availability)
    {
        
    }

    setFoodServices(filteredFoodServices);
}