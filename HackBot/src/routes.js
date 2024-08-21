// export const routes = []
import Welcome from './actions/welcome.js'
import HealthResources from './actions/health-resources.js'
import FoodResources from './actions/food-resources.js'
import HousingResources from './actions/housing-resources.js'

export const routes = [
    {
      path: 'welcome',
      text: /./,
      action: Welcome,
      childRoutes: [
        {
            // name of the path, not related to other components
          path: 'health-resources',
          payload: 'health-resources',
          action: HealthResources,
        },
        {

          path: 'food-resources',
        //   taken from the parent file
          payload: 'food-resources',

          action: FoodResources,
        },
        {

            path: 'housing-resources',
          //   taken from the parent file
            payload: 'housing-resources',
  
            action: HousingResources,
          },
      ],
    },
  ]