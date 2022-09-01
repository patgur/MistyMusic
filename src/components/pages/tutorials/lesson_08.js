import React from "react"

import MenuList from './MenuList.js'
import ChangeLessonButton from './ChangeLessonButton.js'

import "../style/Tutorial/tutorial_lessons/Marks.css"

function lesson(){
    return(
        <div className="lesson">
            <aside className="menu">
                <MenuList />
            </aside>
            <main>
                <div>
                    <p>
                        W muzyce przypisuje się dźwiękom określone liczby, tak, żeby określić daną oktawę. Oktawy dzielimy na 12 półtonów, są to kolejno: A, A', B, C, C', D, D', E, F, F', G, G'. Po dźwięku G', mamy dźwięk A, tylko, że w wyższej oktawie. Żeby móc rożróżnić oktawy od siebie, dopisuje się do nich liczby. Czyli przykładowo dźwięk G'3, podwyższony o półton, daje nam dźwięk A4.
                    </p>
                    <p>
                        Znaki:<br />
                        <mark id="i">'</mark> czytamy is → oznacza, że podnosimy dany dźwięk o półton<br />
                        <mark id="i">#</mark> lub <mark id="i">♭</mark> czytamy es → oznacza, że obniżamy dany dźwięk o półton<br />
                        <br />
                        Więc, dźwięk A' i B# to jest ten sam dźwięk.
                    </p>
                    <p>
                        Żeby łatwiej zapamiętać, jakie mamy dźwięki w danej oktawie, wystarczy to przełożyć na alfabet z literami A-G. Większość liter można podnieść o półtonę, dodając do niego <mark id='i'>is</mark>. Wyjątkami są <mark id='i'>B</mark> i <mark id='i'>E</mark>. Daje nam to kolejno:<br/><br/>
                        <mark id='i'>A, A', <mark id='red'>B</mark>, C, C', D, D', <mark id='red'>E</mark>, F, F', G, G'</mark>.
                    </p>
                </div>

                <ChangeLessonButton />
            </main>
        </div>
    )
}

export default lesson
