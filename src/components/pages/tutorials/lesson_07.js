import React from "react"

import MenuList from './MenuList.js'
import ChangeLessonButton from './ChangeLessonButton.js'

import "../style/Tutorial/tutorial_lessons/Marks.css"
import "../style/Tutorial/tutorial_lessons/lesson_07.css"

import demons_harder from '../../img/demons_hfigerstyle_harder.png'
import demons_easier from '../../img/demons_hfigerstyle_easier.png'

function lesson(){
    return(
        <div className="lesson">
            <aside className="menu">
                <MenuList />
            </aside>
            <main>
                <div>
                    Daną piosenkę można też zagrać poprzez tzw. <mark id='italics'>palcówkę</mark> (z ang. fingerstyle). Ten styl gry można podzielić na dwa mniejsze sposoby.
                </div>
                <div>
                    Pierwszy sposób można porównać melodyjnie do tego, jak robi to wokalista. Czyli podczas pojedynczego akordu trzeba postarać się zagrać takie dźwięki, jakie są śpiewane w piosence.
                </div>
                <div>
                    <img src={demons_harder} className="lesson07_tabs" alt="tabulatury" />
                    <mark className="italics small">Tabulatory napisane przy pomocy strony https://www.tunelessons.com/</mark>
                </div>
                <div>
                    <img src={demons_easier} className="lesson07_tabs" alt="tabulatury" />
                    <mark className="italics small">Tabulatory napisane przy pomocy strony https://www.tunelessons.com/</mark>
                </div>
                <div>
                    <p>Drugim sposobem jest trzymanie poszczególnego akordu i granie sekwejcni podzielonej na dwie części. Najpierw gramy odpowiedni pojedynczy dźwięk ze struny basowej, po czym gramy kolejno struny: 3. 2. 1. 2. 3., trzymając przy tym cały czas ten sam akord.</p>
                    <p>To, jakiej struny basowej użyć, trzeba się wyuczyć, albowiem nie ma to stałej regułki.</p>
                </div>

                <ChangeLessonButton />
            </main>
        </div>
    )
}

export default lesson
