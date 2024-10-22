
import { lazy, Suspense } from 'react'

import './App.css'
import { Router } from './Router.jsx'
import { Route } from './Route.jsx'

import Page404 from './pages/404.jsx'
import SearchPage from './pages/SearchPage.jsx'


//import dinámico
//Esto provoca que carge de forma perezosa el componente
//tiene que hacer una petición JS y luego lo muestra
const LazyHomePage = lazy(() => import('./pages/Home.jsx'))
const LazyAboutPage = lazy(() => import('./pages/ABOUT.JSX'))

//Extrayendo las rutas con un array de objetos
const appRoutes = [
  //Acá se muestra una ruta con parámetro dinámico
  //o sea que de forma estática no se conoce su valor
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {

  return (
    <main>
      {/*Componente del estado suspendido para partes de la UI
      que aún no se pueden renderizar*/} 
      <Suspense fallback={null}>
        <Router routes={appRoutes} defaultComponet={Page404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
