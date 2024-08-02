import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { NavLink } from "react-router-dom"
import logo from '../assets/react.svg'
import { routes } from '../routes/routes'

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" width={200} height={200} />
                    <ul>
                        {
                            routes.map(route => (
                                <li key={route.to}>
                                    <NavLink to={route.to} className={({isActive}) => isActive ? 'nav-active' : ''} >{route.name}</NavLink>
                                </li>

                            ))
                        }
                    </ul>
                </nav>
                
                <Routes>
                    {
                        routes.map(route => (
                            <Route key={route.to} path={route.path} element={<route.Component/>} />
                        ))
                    }
                    <Route path="/*" element={<Navigate to={routes[0].to} replace/>} />
                </Routes>
            </div>
        </BrowserRouter>
    </Suspense>
  )
}
