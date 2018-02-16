import AppRoot from '../Root/app-root'
import Home from '../HomePage/HomePage'
import LoginMain from '../UserManagement/LoginMain'
import NotFound from '../ErrorPage/notfound'

// const routes = [
//   { component: AppRoot,
//     routes: [
//       { path: '/',
//         exact: true,
//         component: Home
//       },
//       { path: '/home',
//         component: Home
//       },
//       { path: '/login',
//         component: LoginMain
//       },
//       {
//         path: '*',
//         component: NotFound
//       }
//     ]
//   }
// ];

const routes = [
  { component: AppRoot,
    routes: [
      { path: '/',
        exact: true,
        component: Home
      },
      { path: '/home',
        component: Home
      },
      { path: '/login',
        component: LoginMain
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];

export default routes;