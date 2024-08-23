export default function filterFoodServices(
    foodServices,
    boroughs,
    dist,
    availabilities,
    setFilteredServices)
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

    setFilteredServices(filteredFoodServices);
}

//hour from food_table can be formatted as such:
//w;0030-0900 or w;0030-0900&1200-1500
//hour from selected availability can only be formatted as the following:
//w;0030-0900
function filterAvailabilities(availabilities, foodService) {
    for (const food_availability of foodService.availabilities)
    {
        //f_ prefix refers to datas from food_table
        //f_hours refers to all hours i.e. 0030-0900&1200-1500
        //f_opening are split f_hours i.e. only one time slot or [0030-0900, 1200-1500]
        let f_day, f_hours, f_openings;
        [f_day, f_hours] = food_availability.split(';');
        f_openings = f_hours.split('&');
        if (f_hours)
        {
            for (const f_opening of f_openings)
            {
                //in case there is no second opening
                if (f_opening)
                {
                    let f_start, f_end;
                    [f_start, f_end] = f_opening.split('-')
                    //selected availabilities
                    for (const availability of availabilities)
                    {
                        let day, hours, start, end;
                        [day, hours] = availability.split(';');
                        [start, end] = hours.split('-');
                        //days match and selected hours are within range of hours from food table
                        return f_day === day && f_start <= start && f_end >= end;
                    }
                }
            }
        }
    }
    return false;
}