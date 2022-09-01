import React from "react"

import MenuList from './MenuList.js'
import ChangeLessonButton from './ChangeLessonButton.js'

import "../style/Tutorial/tutorial_lessons/lesson_06.css"
import "../style/Tutorial/tutorial_lessons/Marks.css"

import chordPic1 from '../../img/chords/04.png'
import chordPic2 from '../../img/chords/11.png'
import chordPic3 from '../../img/chords/13.png'
import chordPic4 from '../../img/chords/09.png'

function lesson(){
    return(
        <div className="lesson">
            <aside className="menu">
                <MenuList />
            </aside>
            <main>
                <div>
                    Wykorzystanie prawej ręki, podczas gry na gitarze możemy podzielić na dwie podstawowe techniki. Pierwszą z nich jest granie całymi akordami.
                </div>
                
                <div>
                    Każdy akord trzeba zagrać w danej senkwencji, co oznacza, że lewą ręką przytrzymujemy dany akord, a prawą ręką szarpiemy za wszystkie struny w dół lub górę tyle razy, ile jest to zapisane w danej sekwencji. Gdy zagramy całą sekwencję, to zmieniamy akord, który przytrzymujemy lewą ręką i powtarzamy daną sekwencję od nowa.
                </div>
                <div>
                    Sekwencję zazwyczaj zapisuje się strzałkami. Najpopularniejsza z nich to: <mark id='i'>↓ ↓ ↑ ↑ ↓ ↑</mark>.<br/>
                    Stałka w dół oznacza "machnięcie" ręką po wszystkich strunach w kolejności od szóstej struny do pierwszej struny.<br/>
                    Anlogicznie, strzłka w górę oznacza szarpnięie strun od pierwszej do szóstej struny.
                </div>
                <div className="lesson6_pictureSection">
                    <div>
                        <div><mark id='my'>C-dur</mark></div>
                
                        <div><img src={chordPic1} className="lesson6_picture" alt="1.akord" /></div>
                        <div><mark className='big my'>↓ ↓ ↑ ↑ ↓ ↑</mark></div>
                    </div>
                    <div>
                        <div><mark id='my'>G-dur</mark></div>
                        <div><img src={chordPic2} className="lesson6_picture" alt="2.akord" /></div>
                        <div><mark className='big my'>↓ ↓ ↑ ↑ ↓ ↑</mark></div>
                    </div>
                    <div>
                        <div><mark id='my'>a-moll</mark></div>
                        <div><img src={chordPic3} className="lesson6_picture" alt="3.akord" /></div>
                        <div><mark className='big my'>↓ ↓ ↑ ↑ ↓ ↑</mark></div>
                    </div>
                    <div>
                        <div><mark id='my'>F-dur</mark></div>
                        <div><img src={chordPic4} className="lesson6_picture" alt="4.akord" /></div>
                        <div><mark className='big my'>↓ ↓ ↑ ↑ ↓ ↑</mark></div>
                    </div>
                </div>
                <div>
                    Jeżeli mamy piosenkę ułożoną na czterech akordach, to gramy całą sekwencję na pierwszym akordzie, później powtarzamy sekwencję na drugim akordzie, następnie trzecim i na końcu na czwartym. Po zagraniu sekwencji na każdym akordzie, wracamy na pierwszy akord. Tak gramy do końca piosenki.
                    W utworach muzycznych, bardzo często akordy, jak i ich ilość zmienia się ze względu na element piosenki. Czyli np. zwrotki mają po 7 akordów, a refreny po 4. Tym na razie nie trzeba się przejmować. Zaczniemy od czegoś łatwiejszego, gdzie introdukcje, zwrotki, przedrefreny, zwrotki, zarefreny, mosty i  wyjścia mają dokładnie takie same akordy.
                    Przykład po prawej stronie jest sekwencją w piosence <mark id='italics'>Demons</mark> autorsta zespołu <mark id='i'>Imagine Dragons</mark>.
                </div>

                <ChangeLessonButton />
            </main>
        </div>
    )
}

export default lesson
