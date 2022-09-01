import React from "react"

import MenuList from './MenuList.js'
import ChangeLessonButton from './ChangeLessonButton.js'

import "../style/Tutorial/tutorial_lessons/lesson_13.css"
import "../style/Tutorial/tutorial_lessons/Marks.css"

import a_moll from "../../img/chords/13.png"
import C_dur from "../../img/chords/04.png"

function lesson(){
    return(
        <div className="lesson">
            <aside className="menu">
                <MenuList />
            </aside>
            <main>
                <p>
                    Okej, najbliższe lekcje będą się skupiać na poznawaniu najprostszych akordów, tak żeby załapać jakąś podstawę do grania. Następnie, jak już będziemy znać akordy pogramy kilka utworów z różnym biciem, może spóbujemy jakiś fingerstyle'i i to będzie koniec naszego samouczka. Później będziecie mogli się cieszyć podstawową umiejętnością grania na gitarze i szukać utworów, których sami chcecie się nauczyć.
                </p>
                
                <div className="lesson13_tables">
                    No dobrze, to teraz weźmiemy się za kolejny akord mollowy, a dokładniej za a-moll. Swoją drogą, pamiętajcie, żeby zapisywać akordy mollowe z małych liter, a durowe z dużych!<br />
                    No dobra, do rzeczy... Akord z lewej strony gra się następująco:
                    <br /><br />
                    <table className="lesson13_table">
                        <tr>
                            <td>Palec</td><td>Struna</td><td>Próg</td>
                        </tr>
                        <tr>
                            <th>1.</th><th><mark id='pink'>druga</mark></th><th><mark id='cyan'>pierwszy</mark></th>
                        </tr>
                        <tr>
                            <th>2.</th><th><mark id='blue'>czwarta</mark></th><th><mark id='pink'>drugi</mark></th>
                        </tr>
                        <tr>
                            <th>3.</th><th><mark id='yellow'>trzecia</mark></th><th><mark id='pink'>drugi</mark></th>
                        </tr>
                    </table>
                </div>
                <div>
                    <img src={a_moll} className='lesson13_chord' alt="a-moll" />
                </div>
                <div>
                    <img src={C_dur} className='lesson13_chord' alt="C-dur" />
                </div>
                <div className="lesson13_tables">
                    Jeśli już potrafimy czysto zagrać akord a-moll, to teraz chcemy przenieść trzeci palec na piątą strunę na trzecim progu. Dzięki tej małej zmianie mamy akord C-dur. Co jest bardzo pocieszające, niejednokrotnie spotkałem się z tym, żeby te akordy były obok siebie w piosenkach. Po prostu do siebie pasują, co ułatwia bardzo granie wybranej piosenki! Poniżej oczywiście zostawiam zestawienie układanych palców.
                    <br /><br />
                    <table className="lesson13_table">
                        <tr>
                            <td>Palec</td><td>Struna</td><td>Próg</td>
                        </tr>
                        <tr>
                            <th>1.</th><th><mark id='pink'>druga</mark></th><th><mark id='cyan'>pierwszy</mark></th>
                        </tr>
                        <tr>
                            <th>2.</th><th><mark id='blue'>czwarta</mark></th><th><mark id='pink'>drugi</mark></th>
                        </tr>
                        <tr>
                            <th>3.</th><th><mark id='green'>piąta</mark></th><th><mark id='yellow'>trzeci</mark></th>
                        </tr>
                    </table>
                </div>

                <ChangeLessonButton />
            </main>
        </div>
    )
}

export default lesson
