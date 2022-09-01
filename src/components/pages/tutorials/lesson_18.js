import React from "react"

import MenuList from './MenuList.js'
import ChangeLessonButton from './ChangeLessonButton.js'

import '../style/Tutorial/tutorial_lessons/lesson_18.css'

import FDur from '../../img/chords/09.png'
import FDurEz from '../../img/chords/09_ez.png'

function lesson(){
    return(
        <div className="lesson">
            <aside className="menu">
                <MenuList />
            </aside>
            <main>
                <p>
                    Dziś się zajmiemy pewną odmianą jednego z akordów. Mowa o akordzie barowym F-dur. Już tłumaczę co to zanczy. Żeby podnieść grany akord o półton, wystarczy go zagrać na wszystkich strunach o jedym progu wyżej. Tytko uwaga, chodzi o <mark id='red'>wszystkie</mark> struny. Wlicza się te, które są grane na zerowym progu (bez trzymania struny). Żeby przytrzymać wszystkie struny i grać akord wyżej są dwie opcje. Pierwszym palcem przytrzymać wszystkie struny. Robi się to zazwyczaj pierwszym palcem.
                </p>
                <div>
                    W tym wypadku akord F-Dur, to tak na prawdę akord E-dur podniesiony o pół tonu. Resztę strun trzymamy w takim samym ułożeniu z tą różnicą, że każda kolejna struna ma być przetrzymana przez kolejne palce. Poniżej wystawiam Wam tabelkę:
                    <br /><br />
                    <table className="lesson18_table">
                        <tr>
                            <td>Palec</td><td>Struna</td><td>Próg</td>
                        </tr>
                        <tr>
                            <th>1.</th><th><mark id='my'>wszystkie</mark></th><th><mark id='cyan'>pierwszy</mark></th>
                        </tr>
                        <tr>
                            <th>2.</th><th><mark id='yellow'>trzecia</mark></th><th><mark id='pink'>drugi</mark></th>
                        </tr>
                        <tr>
                            <th>3.</th><th><mark id='green'>piąta</mark></th><th><mark id='yellow'>trzeci</mark></th>
                        </tr>
                        <tr>
                            <th>4.</th><th><mark id='blue'>czwarta</mark></th><th><mark id='yellow'>trzeci</mark></th>
                        </tr>
                    </table>
                </div>
                <div className="lesson18_img">
                    <img src={FDur} alt='Fdur' />
                </div>
                <div>
                    No ale, jeszcze nie chcemy się uczyć akordów z progiem, czli barowych, albowiem są one największą zmorą początkujących gitarzystów. Sam miałem z nimi dość duży problem, jak jeszcze zaczynałem się uczyć. Czas troszkę uprościć ten akord i zagrać go następująco:
                    <br /><br />
                    <table className="lesson18_table">
                        <tr>
                            <td>Palec</td><td>Struna</td><td>Próg</td>
                        </tr>
                        <tr>
                            <th>1.</th><th><mark id='pink'>druga</mark></th><th><mark id='cyan'>pierwszy</mark></th>
                        </tr>
                        <tr>
                            <th>2.</th><th><mark id='yellow'>trzecia</mark></th><th><mark id='pink'>drugi</mark></th>
                        </tr>
                        <tr>
                            <th>3.</th><th><mark id='green'>piąta</mark></th><th><mark id='yellow'>trzeci</mark></th>
                        </tr>
                        <tr>
                            <th>4.</th><th><mark id='blue'>czwarta</mark></th><th><mark id='yellow'>trzeci</mark></th>
                        </tr>
                    </table>
                </div>
                <div>
                    <img src={FDurEz} alt='Łatwiejszy F-dur' />
                </div>
                <p>
                    Teraz nie musimy się przejmować progiem w tym akordzie, osobiście polecam zagrać piosenkę "<mark id='italics'>Demons</mark>" od Imagine Dragons. Bicie standardowe, tj.: <mark id='my'>↓ · ↓ ↑ · ↑ ↓ ↑</mark><br/>
                    Akordy kolejno to: C-dur, G-dur, a-moll i F-dur.
                </p>
            
                <ChangeLessonButton />
            </main>
        </div>
    )
}

export default lesson
