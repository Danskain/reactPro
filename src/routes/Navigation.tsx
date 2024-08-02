import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { NavLink } from "react-router-dom"
import logo from '../assets/react.svg'
import { LazyPageOne, LazyPageThree, LazyPageTwo } from '../lazyloadone/pages'

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="React Logo" width={200} height={200} />
                <ul>
                    <li>
                        <NavLink to="/home" className={({isActive}) => isActive ? 'nav-active' : ''} >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive}) => isActive ? 'nav-active' : ''} >About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users" className={({isActive}) => isActive ? 'nav-active' : ''}>Users</NavLink>
                    </li>
                </ul>
            </nav>
            
            <Routes>
                <Route path="about" element={<LazyPageTwo />} />
                <Route path="users" element={<LazyPageThree />} />
                <Route path="home"  element={<LazyPageOne />} />
                <Route path="/*" element={<Navigate to="/home" replace/>} />
            </Routes>
        </div>
    </BrowserRouter>
  )
}
