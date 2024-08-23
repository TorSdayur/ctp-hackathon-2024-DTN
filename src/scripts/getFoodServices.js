//reads food providers from food table
export function getFoodServices(food_providers, setFoodServices) {
    let new_services = [];
    for (const fp of food_providers)
    {
      new_services.push(
        {
          serviceID: fp['ID'],
          title: fp['PROGRAM'],
          phone: fp['ORG PHONE'],
          address: fp['FULL ADDRESS'],
          borough: fp['BOROUGH'],
          availabilities: getAvailabilies(
            fp['HOURS'],
            [
              fp['mon'],
              fp['tue'],
              fp['wed'],
              fp['thur'],
              fp['fri'],
              fp['sat'],
              fp['sun']
            ]
          )
        }
      )
    }
    setFoodServices(new_services);
}

//currently doesn't handle hours
function getAvailabilies(hours, days_available)
{
  let availabilities = [];
  days = ['m','tu', 'w', 'th', 'f', 'sa', 'su'];
  for (const index in days_available)
  {
    if (days_available[index])
    {
      availabilities.push[days[index]];
    }
  }
  return availabilities;
}