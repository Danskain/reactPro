import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { LazyPageOne, LazyPageThree, LazyPageTwo } from '../pages';
export const LazyLayout = () => {
  return (
    <div>
        <h1>LazyLayout Page</h1>
        <ul>
            <li>
                <NavLink to='home'>Home</NavLink>
            </li>
            <li>
                <NavLink to='about'>About</NavLink>
            </li>
            <li>
                <NavLink to='users'>Users</NavLink>
            </li>
        </ul>
        <Routes>
            <Route path='home' element={<LazyPageOne />} />
            <Route path='about' element={<LazyPageTwo />} />
            <Route path='users' element={<LazyPageThree />} />

            {/* <Route path="*" element={<div>Not Found</div>} /> */}
            <Route path="*" element={<Navigate to='home' replace/>} />
        </Routes>
    </div>
  )
}

export default LazyLayout