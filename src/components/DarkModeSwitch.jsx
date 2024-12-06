import React, { useEffect, useState } from 'react'


const DarkModeSwitch = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode)

        if (newMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');        
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light')
            localStorage.setItem('theme', 'light');
        }
}
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')

        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            setIsDarkMode(true)       
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light')
            setIsDarkMode(false)
        }

    }, []) 

    return (
    <div className="darkModeSwitch">
        <label className="toggle">
        <input type="checkbox" aria-label="darkmode toggle" checked={isDarkMode} onChange={toggleDarkMode} />
        <span className="slider"></span>
        </label>                   
    </div> 
    )
}

export default DarkModeSwitch