import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function SwitchThem() {
    const theme = useSelector(state => state);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const mainСontainer = document.getElementById('infinity');

        const siteTheme = theme === 'темную' ? 'light-theme' : 'dark-theme'

        mainСontainer.dataset.theme = siteTheme;

    }, [theme]);

    const changeTheme = () => {
        dispatch({ type: "TOGGLE_THEME" })


    }


    return (
        <div className={theme === 'темную' ? 'light-theme' : 'dark-theme'}>
            <button className="theme-button" onClick={changeTheme}>Сменить тему на {theme}</button>
        </div>
    );
}

export default SwitchThem;