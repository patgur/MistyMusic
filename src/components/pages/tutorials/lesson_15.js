import React from "react"
import {Link} from 'react-router-dom'

import MenuList from './MenuList.js'
import ChangeLessonButton from './ChangeLessonButton.js'

import '../style/Tutorial/tutorial_lessons/lesson_15.css'
import '../style/Tutorial/tutorial_lessons/Marks.css'

import GDur from '../../img/chords/11.png'
import aMoll from '../../img/chords/13.png'
import eMoll from '../../img/chords/20.png'
import CDur from '../../img/chords/04.png'

function refresh(){
    setTimeout("window.location.reload(false);", 1);
    return false;
}

function lesson(){
    return(
        <div className="lesson">
            <aside className="menu">
                <MenuList />
            </aside>
            <main>
                <p className="link">
                    No dobrze, znamy już 4 akordy. Jeśli masz jakieś problemy z graniem ich, to wróć proszę do wcześniejszych lekcji, żeby je ponownie przećwiczyć. Podczas tej lekcji będziemy ich już potrzebować.<br /><br />
                    Poznane akordy to: G-dur, a-moll, e-moll i C-dur. Grając je w tej kolejności zagramy piosenkę <mark id='italics'>Halo</mark> od Beyonce. Oczywiście, do tego trzeba dodać prawą rękę. Na sam początek, będziemy się uczyć grania przez akordy, to znaczy, że ręką będziemy szarpać za wszystkie struny poprzez machnięcie w dół lub w górę. Takie machanie ręką w ustalony sposób nazywamy biciem, a określamy je strzałkami, tak, jak to było przedstawione w
                    <Link  to={'/tutorial/06'} onClick={refresh}> lekcji szóstej</Link>.
                </p>
                <div className="lesson15_chords">
                    <img src={GDur} alt=""/> <img src={aMoll} alt=""/>
                    <br /><br />
                    <img src={eMoll} alt=""/> <img src={CDur} alt=""/>
                </div>
                <div className="lesson15_beat">
                    <mark className="my big" style={{fontSize:'280%'}}>↓ · ↓ ↑ · ↑ ↓ ↑</mark>
                </div>
                <p>
                    Kropki między strzałkami mogą Ci podpowiadać w jakich odstępach czasowych wykonać dany ruch.
                </p>

                <ChangeLessonButton />
            </main>
        </div>
    )
}

export default lesson
