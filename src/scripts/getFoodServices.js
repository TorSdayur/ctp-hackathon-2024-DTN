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
          borough: fp['BOROUGH'].toLowerCase(),
          hours: fp['HOURS'],
          days: getDays(
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
function getDays(days_available)
{
  let a = [];
  days = ['m','tu', 'w', 'th', 'f', 'sa', 'su'];
  for (const index in days_available)
  {
    if (days_available[index])
    {
      a.push(days[index]);
    }
  }
  return a;
}