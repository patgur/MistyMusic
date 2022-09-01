import React from "react"

import MenuList from './MenuList.js'
import ChangeLessonButton from './ChangeLessonButton.js'

import "../style/Tutorial/tutorial_lessons/lesson_04.css"
import "../style/Tutorial/tutorial_lessons/Marks.css"

import chordPic from '../../img/chords/20.png'
import guitarPic from '../../img/guitar_new.png'

function lesson(){
    return(
        <div className="lesson">
            <aside className="menu">
                <MenuList />
            </aside>
            <main>
                <div>
                    <p>Żeby dokładnie zobrazować, jak będziemy nazywać struny, rozpiszę to względem obrazka po prawej stronie.</p><br/>
                    <p className="stringCount">
                        E → "Pierwsza struna"<br/>
                        B → "Druga struna"<br/>
                        G → "Trzecia struna"<br/>
                        D → "Czwarta struna"<br/>
                        A → "Piąta struna"<br/>
                        E → "Szósta struna"<br/>
                    </p>
                    <br/><br/>
                    Pierwsza struna, jest najcieńsza i wydaje wyższy dźwięk, niż pozostałe. Każda kolejna struna wydaje niższy dźwięk i zazwyczaj jest grubsza.
                </div>
                <div className="lesson4_fingfersPic">
                    <img src={chordPic} className="lesson4_chord" alt="akord" />
                </div>
                
                
                <div className="lesson4_guitarPic">
                    <img src={guitarPic} className="lesson4_giutar" alt="gitara" />
                </div>
                <div>
                    <p>
                        Struny w gitarze dzielimy na wiolinowe i basowe. Pomimo, że zazwyczaj wszystkie struny różnią się od siebie grubością, to zauważalna różnica występuje między 3 prawymi, a 3 lewymi strunami. Basowe struny, czyli 3 struny od lewej strony są grubsze, ze względu na owijkę. Klasyfikacja tych rodzajów strun przyda się podczas grania fingerstyle'em, czyli tak zwanej palcówki.
                    </p>
                    <br/>
                    <p>
                        Struny <mark id='i'>wiolinowe</mark> są cieńsze:<br />
                        <mark id='i'>
                            E4 → "Pierwsza struna"<br/>
                            B3 → "Druga struna"<br/>
                            G3 → "Trzecia struna"<br/>
                        </mark>
                    </p>
                    <br />
                    <p>
                        Struny <mark id='i'>basowe</mark> są grubsze:<br />
                        <mark id='i'>
                            D3 → "Czwarta struna"<br/>
                            A2 → "Piąta struna"<br/>
                            E2 → "Szósta struna"<br/>
                        </mark>
                    </p>
                </div>

                <ChangeLessonButton />
            </main>
        </div>
    )
}

export default lesson