import "./index.css"

import logo from "./WordForge.png"
import settingsIcon from "./SettingsIcon.png"

const Header = () => {
    return (
        <header className={'header'}>
            <img
                className={'logo'}
                src={logo}
                alt={'WordForge'}
            />
            <img
                className={'settings-icon'}
                src={settingsIcon}
                alt={"Settings"}
            />
        </header>
    )
}

export default Header