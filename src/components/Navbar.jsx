import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const {toggleTheme} = useContext(ThemeContext);
    const {isAuth, toggleAuth} = useContext(AuthContext);

    return <div>
        <button onClick={toggleTheme}>Toggle theme</button>
        <button onClick={toggleAuth}>
            {isAuth ? `logout` : 'login'}
        </button>
    </div>
}

export default Navbar;