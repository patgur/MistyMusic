import React from "react"

import MenuList from './MenuList.js'
import ChangeLessonButton from './ChangeLessonButton.js'

import "../style/Tutorial/tutorial_lessons/lesson_01.css"
import '../style/Tutorial/Tutorial_Main.css'
import "../style/Tutorial/tutorial_lessons/Marks.css"

import gitaraLesson1 from '../../img/guitarLesson1.png'

function lesson(){
    return(
        <div className="lesson">
            <aside className="menu">
                <MenuList />
            </aside>
            <main>
                <p>
                    Gitara to instrument strunowy szarpany.
                    Ma 6 strun, które kolejno licząc od dołu w standardowej częstotliwości referencyjnej <mark id="i">440 Hz</mark>,
                    mają dźwięki <mark id="i">E4, B3, G3, D3, A2, E2</mark>. Na razie tymi nazwami nie trzeba się zbytnio przejmować. Dokładniej zostaną opisane w późniejszych lekcjach.
                </p>

                <div className="lesson1_text">
                    Gitara składa się z pudła rezonansowego które posiada: <br />
                    <ul>
                        <li><mark id="red">mostek</mark></li>
                        <li><mark id="white">podstrunnik</mark></li>
                        <li><mark id="black">łezkę</mark></li>
                        <li><mark id="blue">otwór rezonansowy</mark></li>
                    </ul>
                    <br /><br />
                    oraz gryfu, zawierającego:
                    <ul>
                        <li><mark id="green">struny</mark></li>
                        <li><mark id="yellow">progi</mark></li>
                        <li><mark id="cyan">siodełko</mark></li>
                    </ul>
                    <br />
                    <br />
                    Gryf połączony jest z głowką, na której znajdują się <mark id="pink">klucze</mark>.
                </div>
                
                <div className="lesson1_pic">
                    <img src={gitaraLesson1} className="lesson1_guitar_picture" alt="gitara" />
                </div>

                <ChangeLessonButton />
            </main>
        </div>
    )
}

export default lesson