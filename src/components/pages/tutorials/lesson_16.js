import React from "react"

import MenuList from './MenuList.js'
import ChangeLessonButton from './ChangeLessonButton.js'

import '../style/Tutorial/tutorial_lessons/lesson_16.css'

import lesson16_EDur from '../../img/chords/08.png'
import lesson16_dMoll from '../../img/chords/18.png'

function lesson(){
    return(
        <div className="lesson">
            <aside className="menu">
                <MenuList />
            </aside>
            <main>
                <p>
                    Teraz przejdziemy do troszkę weselszej muzyki. Jeśli obiły Ci się kiedykolwiek o uszy piosenki takie jak <mark id='italics'>Chryzantemy złociste</mark>, czy <mark id='italics'>Ksiądz Bernardyn</mark>, to pewnie wiesz już o jakiej muzyce jest mowa. Wszystkie te piosenki gra się głównie na 3 akordach. Jeden z nich już znasz i jest to a-moll. Dwa pozostałe, to d-moll i E-dur.
                </p>
                <div>
                    Zaczniemy od akordu E-dur, bo może się on wydawać łatwiejszy do zagrania. Jest to albowiem akord a-moll, tylko ze wszystkimi palcami lewej ręki podniesionymi o jedną strunę. Wygląda on następująco:
                    <br /><br />
                    <table className="lesson16_table">
                        <tr>
                            <td>Palec</td><td>Struna</td><td>Próg</td>
                        </tr>
                        <tr>
                            <th>1.</th><th><mark id='yellow'>trzecia</mark></th><th><mark id='cyan'>pierwszy</mark></th>
                        </tr>
                        <tr>
                            <th>2.</th><th><mark id='green'>piąta</mark></th><th><mark id='pink'>drugi</mark></th>
                        </tr>
                        <tr>
                            <th>3.</th><th><mark id='blue'>czwarta</mark></th><th><mark id='pink'>drugi</mark></th>
                        </tr>
                    </table>
                </div>
                <div className="x">
                    <img src={lesson16_EDur} alt='E-dur' />
                </div>
                <div className="x">
                    <img src={lesson16_dMoll} alt='d-moll' />
                </div>
                <div>
                    d-moll jest troszkę trudniejszy od pozostałych, ale wciąż łatwy do nauczenia. Nie powinien on sprawiać kłopotów po pewnym czasie.
                    <br /><br />
                    <table className="lesson16_table">
                        <tr>
                            <td>Palec</td><td>Struna</td><td>Próg</td>
                        </tr>
                        <tr>
                            <th>1.</th><th><mark id='cyan'>pierwsza</mark></th><th><mark id='cyan'>pierwszy</mark></th>
                        </tr>
                        <tr>
                            <th>2.</th><th><mark id='yellow'>trzecia</mark></th><th><mark id='pink'>drugi</mark></th>
                        </tr>
                        <tr>
                            <th>3.</th><th><mark id='pink'>druga</mark></th><th><mark id='yellow'>trzeci</mark></th>
                        </tr>
                    </table>
                </div>

                <ChangeLessonButton />
            </main>
        </div>
    )
}

export default lesson
