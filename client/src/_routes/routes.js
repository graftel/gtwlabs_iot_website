import { RootLayout } from '../Root/RootLayout'
import { HomePage } from '../HomePage/HomePage'
import { LoginMain } from '../UserManagement/LoginMain'
import NotFound from '../ErrorPage/notfound'
import { AssetPage } from '../AssetPage/AssetPage'

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
  { path: '/login',
    component: LoginMain
  },
  {
    path: '/activate*',
    component: LoginMain
  },
  {
    path: '/forgotpassword',
    component: LoginMain
  },
  {
    path: '/reset-password*',
    component: LoginMain
  },
  { component: RootLayout,
    routes: [
      { path: '/',
        exact: true,
        component: HomePage
      },
      {
        path: '/asset/:assetID',
        component: AssetPage
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];

export default routes;