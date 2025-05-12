import { Outlet } from "react-router-dom";

const Hooks = () => {
    return (<>
        <div className="padding1rem">
            <div className="site-subtitle">
                Hooks in React are functions that let you use React features (like state and lifecycle methods) inside functional components, which previously only worked in class components.
            </div>
            <div className="container">

                <Outlet />
            </div>
        </div>
    </>)
}

export default Hooks;