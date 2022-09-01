import React from "react"
import gitara from '../img/guitar.png'
import './style/MainPage.css'

class MainPage extends React.Component{
    render(){
        return(
            <div className="mainPage">
                <p className="mainPage-img"><img src={gitara} className="guitarPicture" alt="gitara" /></p>
                <p className="mainPage-text">
                    <h2>Witaj na stronie poświęconej nauczaniu podstaw muzyki i gry na gitarze!</h2>
                    <br/><br/>
                    <p>
                        Na stronie można znaleźć samouczek, który w sposób chronologiczny pomoże zrozumieć podstawy muzyki potrzebne do nauczenia się gry na gitarze.
                        Przedstawione są nazwy poszczególnych elementów gitary, strun <br/ >oraz akordów. Po zakończeniu samouczka śmiało będzie można wziąć gitarę i pograć na niej wśród swoich znajomych.

                        <br/><br/><br/>

                        W zakładce Tabulatory można wpisać własny tekst piosenki oraz wykorzystywane w niej akordy, które będą przez cały czas pokazane w trakcie gry.
                        Można to wykorzystać do nauki danej piosenki, w momencie gdy nie pamiętamy jeszcze potrzebych do niej akordów.

                        <br/><br/><br/>

                        W zakładce Akordy jest wypisana lista podstawowych akordów, które są stosunkowo łatrwe do zagrania. Większość piosenek można zagrać z ich wykorzsytaniem.
                    </p>
                </p>
            </div>
        )
    }
}

export default MainPage