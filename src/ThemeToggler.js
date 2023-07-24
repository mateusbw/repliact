import React from "../lib/react"
import { ThemeContext } from "./main"

export function ThemeToggler(){
    const [theme, setTheme] = React.useContext(ThemeContext)
    const themeSwitch = (theme) => theme === 'light' ? 'dark' : 'light'

    return <button onClick={() => setTheme(v => themeSwitch(v))}>{themeSwitch(theme)}</button>
}  