import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <CustomLink to="/Hooks/useState">UseState</CustomLink>
            <CustomLink to="/Hooks/useEffect">UseEffect</CustomLink>
            <CustomLink to="/Hooks/useContext">UseContext</CustomLink>
            <CustomLink to="/Hooks/useMemo">UseMemo</CustomLink>
            <CustomLink to="/Hooks/useCallback">UseCallback</CustomLink>

        </>
    )
}

const CustomLink = (props) => {
    const { to, children } = props
    return (
        <>
            <NavLink to={to} className={({ isActive }) => (isActive ? 'active' : "")}>{children}</NavLink>
        </>
    )
}

export default Sidebar;