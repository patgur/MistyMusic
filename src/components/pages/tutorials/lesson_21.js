import React from "react"

import MenuList from './MenuList.js'
import ChangeLessonButton from './ChangeLessonButton.js'

import '../style/Tutorial/tutorial_lessons/lesson_21.css'

import ADur from '../../img/chords/01.png'
import AIsDur from '../../img/chords/02.png'
import BDur from '../../img/chords/03.png'
import EDur from '../../img/chords/08.png'
import FDur from '../../img/chords/09.png'
import FIsDur from '../../img/chords/10.png'
import aMoll from '../../img/chords/13.png'
import aIsMoll from '../../img/chords/14.png'
import bMoll from '../../img/chords/15.png'
import cMoll from '../../img/chords/16.png'
import cIsMoll from '../../img/chords/17.png'
import eMoll from '../../img/chords/20.png'
import fMoll from '../../img/chords/21.png'
import fIsMoll from '../../img/chords/22.png'
import gMoll from '../../img/chords/23.png'
import gIsMoll from '../../img/chords/24.png'


function Chord({picture, name}){
    return(
        <div className="lesson21_photo">
            <img className="lesson21_picture" src={picture} alt=''/>
            <div className="lesson21_label">{name}</div>
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
                    Samych ułożeń palców, w kontekście podstawowych akordów barowych, jest cztery. Gra się je tak jak a-moll, E-dur, e-moll i A-dur, tylko, że pierwszy palec dajemy na jeden cały próg, a resztę palców kolejno na jedną pozycję wcześniejszą. Przenosząc akord w prawo lub lewo, możemy kolejno podnosić lub obniżać o półton. Co oznacza, że możemy zagrać A#, zabrać próg, czyli przenieść akord w lewo i wyjdzie nam A, albo przesunąć cały akord w prawo i wyjdzie nam B.<br />
                    Poniżej przedstawię te akordy, które są podobne do poszczególnych akordów.
                </p>
                <div className="lesson21_title">
                    A-dur
                </div>
                <div className="lesson21_chords">
                    <Chord picture={ADur} name='A-dur' />
                    <Chord picture={AIsDur} name='Ais-dur' />
                    <Chord picture={BDur} name='B-dur' />
                </div>
                <div className="lesson21_title">
                    E-dur
                </div>
                <div className="lesson21_chords">
                    <Chord picture={EDur} name='E-dur' />
                    <Chord picture={FDur} name='F-dur' />
                    <Chord picture={FIsDur} name='Fis-dur' />
                </div>
                
                <div className="lesson21_title">
                    a-moll
                </div>
                <div className="lesson21_chords">
                    <Chord picture={aMoll} name='a-moll' />
                    <Chord picture={aIsMoll} name='ais-moll' />
                    <Chord picture={bMoll} name='b-moll' />
                    <Chord picture={cMoll} name='c-moll' />
                    <Chord picture={cIsMoll} name='cis-moll' />
                </div>
                <div className="lesson21_title">
                    e-moll
                </div>
                <div className="lesson21_chords">
                    <Chord picture={eMoll} name='e-moll' />
                    <Chord picture={fMoll} name='f-moll' />
                    <Chord picture={fIsMoll} name='fis-moll' />
                    <Chord picture={gMoll} name='g-moll' />
                    <Chord picture={gIsMoll} name='gis-moll' />
                </div>

                <ChangeLessonButton />
            </main>
        </div>
    )
}

export default lesson
