import React from "react"
import {Link} from 'react-router-dom'

import MenuList from './MenuList.js'
import ChangeLessonButton from './ChangeLessonButton.js'

import "../style/Tutorial/tutorial_lessons/lesson_22.css"

import PhotosList from "../../database/chords_photos.json"


function Chord({photoId, photoName}){
    return(
        <div className="lesson22_photo">
            <img className="lesson22_picture" src={require('../../img/chords/' + photoId + '.png').default} alt=''/>
            <div className="lesson22_label">{photoName}</div>
        </div>
    )
}


function lesson(){
    return(
        <div className="lesson">
            <aside className="menu">
                <MenuList />
            </aside>
            <main>
                <p>
                    Tak jak wspominałem w lekcji <Link  to={'/tutorial/07'}> 7. Prawa ręka - fingestyle </Link> można grać dany utwór z powtarzalną sekwencją, wykorzystując do tego fingerstyle. Jak pierwsza opisywana część jest dość ciężka do wyuczenia, to ta sekwencyjna jest w miarę prosta. Do każdego akordu gramy najpierw strunę basową, czyli od czwartej do szóstej. A następnie sekwencję 3-2-1-2-3 strun wiolinowych.
                </p>
                <p>Daną sekwencję można zmieniać, ale to już po tym, jak się poczujesz pewnie z tą podstawową. Można częściej wplatać strunę basową, grać szybciej palcami, z sekwencją strun np.: 3-2-3-1-2-3-1. Można się tym bawić i kreować cokolwiek Wam się podoba. Najważniejsze jest stosowanie stałej sekwencji, co z czasem i tak będzie można zmieniać, ale to już z dużym wyczuciem i doświadczeniem.</p>
                <p>Wszystkie struny są opisane literami odpowiadającymi ich dźwiękom. Żeby wiedzieć, jakiej struny basowej użyć, należy wykorzystać pierwszego najniższego dźwięku z danej tonacji. Rozpoznanie dźwięków z tonacji jest sprawą średniozaawansowaną, dlatego też wypiszę, jakie powinno się wykorzystywać struny basowe jako podstawowe pod dany akord.</p>
                <div className="chordsBox">
                    <div className="lesson22_stringName">
                        <h1>Struna 6</h1>
                    </div>
                    <div className="lesson22_chords">
                        {PhotosList.map((chord) => {
                            if(chord.mainString === 6){return(
                                <Chord photoId={chord.id} photoName={chord.name} />
                            )}
                            else{return(<></>)}
                        })}
                    </div>
                </div>
                <div className="chordsBox">
                    <div className="lesson22_stringName">
                        <h1>Struna 5</h1>
                    </div>
                    <div className="lesson22_chords">
                        {PhotosList.map((chord) => {
                            if(chord.mainString === 5){return(
                                <Chord photoId={chord.id} photoName={chord.name} />
                            )}
                            else{return(<></>)}
                        })}
                    </div>
                </div>
                <div className="chordsBox">
                    <div className="lesson22_stringName">
                        <h1>Struna 4</h1>
                    </div>
                    <div className="lesson22_chords">
                        {PhotosList.map((chord) => {
                            if(chord.mainString === 4){return(
                                <Chord photoId={chord.id} photoName={chord.name} />
                            )}
                            else{return(<></>)}
                        })}
                    </div>
                </div>

                <ChangeLessonButton />
            </main>
        </div>
    )
}

export default lesson
