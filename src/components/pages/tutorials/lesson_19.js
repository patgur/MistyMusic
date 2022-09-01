import React from "react"

import MenuList from './MenuList.js'
import ChangeLessonButton from './ChangeLessonButton.js'

import '../style/Tutorial/tutorial_lessons/lesson_19.css'

import DDur from '../../img/chords/06.png'
import ADur from '../../img/chords/01.png'

function lesson(){
    return(
        <div className="lesson">
            <aside className="menu">
                <MenuList />
            </aside>
            <main>
                <p>
                    Ostatnia lekcja z akordów łatwych. Kolejna lekcja, równa dwudziestka będą naszą męczarnią i poczuciem bezsilności. No ale, najpierw coś przyjemnego, albowiem poniżej są dwa łatwe durowe akordy.
                </p>
                <div>
                    No to pierwszym szybko-szkoleniowym akordem jest <mark id='i'>A-dur</mark>. Trzyma się go w następujący sposób:
                    <br /><br />
                    <table className="lesson19_table">
                        <tr>
                            <td>Palec</td><td>Struna</td><td>Próg</td>
                        </tr>
                        <tr>
                            <th>2.</th><th><mark id='blue'>czwarta</mark></th><th><mark id='pink'>drugi</mark></th>
                        </tr>
                        <tr>
                            <th>3.</th><th><mark id='yellow'>trzecia</mark></th><th><mark id='pink'>drugi</mark></th>
                        </tr>
                        <tr>
                            <th>4.</th><th><mark id='pink'>druga</mark></th><th><mark id='pink'>drugi</mark></th>
                        </tr>
                    </table>
                    <br /><br />
                    Zwróć proszę uwagę, że nie korzysta się z pierwszego palca przy tym akordzie. Bierze się to stąd, że często się wykorzystuje jego wyższą formę, czyli podnosi się o co najmniej jeden półton. A, A# i B są grane tak samo, tylko daje się do podwyższenia pierwszy palec na cały próg. Co Więcej, zwróć proszę uwagę, że są to aż trzy palce, na tym samym progu. W dodatku są one na strunach położonych zaraz obok siebie. Czwarty palec jest o wiele chudszy od pierwszego, dlatego łatwiej jest złapać dany akord.
                </div>
                <div className="lesson19_img">
                    <img src={ADur} alt="A-Dur" />
                </div>
                
                <div className="lesson19_img">
                    <img src={DDur} alt="D-Dur" />
                </div>
                <div>
                    Akord <mark id='i'>d-Dur</mark> to nasz kolejny akord. Trzymanie go przypomina nawet lekko literę 'D'.
                    <br /><br />
                    <table className="lesson19_table">
                        <tr>
                            <td>Palec</td><td>Struna</td><td>Próg</td>
                        </tr>
                        <tr>
                            <th>1.</th><th><mark id='yellow'>trzecia</mark></th><th><mark id='pink'>drugi</mark></th>
                        </tr>
                        <tr>
                            <th>2.</th><th><mark id='pink'>druga</mark></th><th><mark id='yellow'>trzeci</mark></th>
                        </tr>
                        <tr>
                            <th>3.</th><th><mark id='cyan'>pierwsza</mark></th><th><mark id='pink'>drugi</mark></th>
                        </tr>
                    </table>
                </div>

                <ChangeLessonButton />
            </main>
        </div>
    )
}

export default lesson
