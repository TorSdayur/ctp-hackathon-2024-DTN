//reads food providers from food table
export function getFoodServices(food_providers) {
    let new_services = [];
    for (const fp of food_providers)
    {
      new_services.push(
        {
          serviceID: fp['ID'],
          title: fp['PROGRAM'],
          phone: fp['PHONE'],
          address: fp['FULL_ADDRESS'],
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
    return new_services;
}

//currently doesn't handle hours
function getDays(days_available)
{
  let a = [];
  let days = ['m','tu', 'w', 'th', 'f', 'sa', 'su'];
  for (const index in days_available)
  {
    if (days_available[index])
    {
      a.push(days[index]);
    }
    else
    {
      a.push('');
    }
  }
  return a;
}