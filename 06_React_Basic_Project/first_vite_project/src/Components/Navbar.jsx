import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
    return (<>

        <nav className="nav">
            <Link to="/" className="site-title">HOME</Link>
            <ul>
                <CustomLink to='/Hooks'>Hooks</CustomLink>
                <CustomLink to='/route'>Routes</CustomLink>
                <CustomLink to='/redux'>Redux</CustomLink>
                <CustomLink to='/javascript'>JavaScript</CustomLink>
            </ul>
        </nav>

    </>)
}

const CustomLink = (props) => {
    const { to, children, ...reset } = props
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: false })
    return (<>
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...reset}>{children}</Link>
        </li>
    </>)
}

export default Navbar;