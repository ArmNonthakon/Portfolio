import { useState } from "react"
import "./navbar.css"

function Navbar() {
    const [stateList, SetStateList] = useState(false)
    const showList = () => {
        if (stateList == false) {
            document.getElementById('listRo').style.transform = "rotate(90deg)"
            document.getElementById('showListMobile').style.display = "flex"
            SetStateList(true)
        }
        else {
            document.getElementById('listRo').style.transform = "rotate(0)"
            document.getElementById('showListMobile').style.display = "none"
            SetStateList(false)
        }

    }
    return (
        <>
            <nav>
                <div className="mobile">
                    <div className="pic-block">
                    </div>
                    <img src="/list.png" width="35px" height="35px" id="listRo" onClick={showList} alt="" />
                </div>
                <div className="desktop">
                    <div className="pic-block">
                    </div>
                </div>
                <div id="showListMobile" className="mobileItem">
                    <a href="/">ABOUT ME</a>
                    <a href="/skill">SKILL</a>
                    <a href="/project">PROJECT</a>
                    <a href="/contact">CONTACT ME</a>
                </div>
                <a className="desktopItem" href="/">ABOUT ME</a>
                <a className="desktopItem" href="/skill">SKILL</a>
                <a className="desktopItem" href="/project">PROJECT</a>
                <a className="desktopItem" href="/contact">CONTACT ME</a>

            </nav>
        </>)
}

export default Navbar