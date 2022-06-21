import { NavLink } from "react-router-dom";
import './navbar.css'

export const NavLinkComp = ({ to, children, ...props}) => {
    
    return (
        <NavLink {...props} to={to}
            className={({ isActive }) => { return isActive ? 'is-active' : undefined}}>
            {children}
        </NavLink>
    )
}