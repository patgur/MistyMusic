import React from "react"

import MenuList from './MenuList.js'
import ChangeLessonButton from './ChangeLessonButton.js'

import '../style/Tutorial/Tutorial_Main.css'

function lesson(){
    return(
        <div className="lesson">
            <aside className="menu">
                    <MenuList />
            </aside>
            <main>
                <div>
                    W tej części nauczysz się krok po kroku jak grać na gitarze, a także jak jest ona skontruowana. <br />
                    Poznasz jak zbudowane są podstawowe akordy i jak móc je odpowiednio zagrać na gitarze.
                </div>
                <div></div>

                <ChangeLessonButton />
            </main>
        </div>
    )
}

export default lesson