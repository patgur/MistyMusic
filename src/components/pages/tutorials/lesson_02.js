import React from "react"

import MenuList from './MenuList.js'
import ChangeLessonButton from './ChangeLessonButton.js'

import "../style/Tutorial/tutorial_lessons/Marks.css"
import "../style/Tutorial/tutorial_lessons/lesson_02.css"

import guitarLesson1 from '../../img/guitarLesson1.png'

function lesson(){
    return(
        <div className="lesson">
            <aside className="menu">
                <MenuList />
            </aside>
            <main>
                <div className="lesson2_lecture">
                    <p>
                        Gitara wydaje dźwięki poprzez pociągane struny, które to drgają i swoim ruchem wywołują zagęszczanie i rozrzedzanie powietrza, które nazywamy falami dźwiękowymi.
                    </p>
                    <p>
                        W pudle rezonansowym jest powietrze, które pobudzone ów falami dźwiękowymi również zaczyna drgać. Jako, że struna drga przez jakiś czas, to pudło z czasem otrzymuje kolejne to bodźce, co powoduje zjawisko rezonansu, tym samym znacząco zwiększając głośność wydawanego dźwięku.
                    </p>
                
                    <p>
                        <mark className="blue">Pudło rezonansowe</mark> odpowiada za wzmacnianie fal dźwiękowych o różnej częstotliwości.
                    </p>
                    <p>
                        <mark className="red">Mostek</mark>, <mark className="white">podstrunnik</mark>, kołki i <mark className="cyan">siodełko</mark> są wykorzystywane w taki sposób, żeby móc utrzymać strunę w takim położeniu, żeby wytworzyła określony dźwięk.
                    </p>
                
                    <p>
                        <mark className="i">Progi</mark> są na <mark className="i">gryfie</mark> ułożone tak, żeby pomóc osobie grającej zinterpretować w którym miejscu przytrzymać strunę, żeby zagrać określony dźwięk.
                    </p>
                    <p>
                        <mark className="black">Łezka</mark> jest częścią ochronną. Podczas grania na gitarze z wykorzystaniem tzw. kostki, często uderza się w pudło rezonansowe. Ten element jest specjalnie wzmacniany tak, żeby nie poniszczyć instrumentu podczas grania.
                    </p>
                    <p>
                        <mark className='pink'>Klucze</mark> znajdujące się na główce gitary odpowiadają za moc naciągnięcia strun. Zakładając struny, nawija się je na uchwyty, które manipulowane przez kręcenie kluczem nawijają strunę. W ten sposób stroi się daną strunę.
                    </p>
                </div>
                <picture className="lesson2_pic">
                    <img src={guitarLesson1} className="lesson2_guitar_picture" alt="gitara"/>
                </picture>

                <ChangeLessonButton />
            </main>
        </div>
    )
}

export default lesson