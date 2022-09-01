import React from "react"

import MenuList from './MenuList.js'
import ChangeLessonButton from './ChangeLessonButton.js'

import "../style/Tutorial/tutorial_lessons/lesson_14.css"

import G_dur from '../../img/chords/11.png'

function lesson(){
    return(
        <div className='lesson'>
            <aside className="menu">
                <MenuList />
            </aside>
            <main>
                <p>Jak się pewnie domyślacie. Będziemy chcieli teraz zagrać jakąś piosenkę z poznanych akordów. Jak na razie znamy tylko trzy, są to e-moll, a-moll i C-dur. Czas na czwarty akord, który nam się przyda do grania!</p>
                <div>
                    Akord G-dur, wykorzystujemy do niego zazwyczaj cztery palce. Jednak czasem można się spotkać z pewną ułątwioną formą i grać go przy użyciu trzech palców. W tym wypadku, będziemy chcieli się najpierw nauczyć grania go przez trzy palce.
                    <br /><br />
                    <table className="lesson14_table">
                        <tr>
                            <td>Palec</td><td>Struna</td><td>Próg</td>
                        </tr>
                        <tr>
                            <th>1.</th><th><mark id='green'>piąta</mark></th><th><mark id='pink'>drugi</mark></th>
                        </tr>
                        <tr>
                            <th>2.</th><th><mark id='red'>szósta</mark></th><th><mark id='yellow'>trzeci</mark></th>
                        </tr>
                        <tr>
                            <th>4.</th><th><mark id='cyan'>pierwsza</mark></th><th><mark id='yellow'>trzeci</mark></th>
                        </tr>
                        <tr>
                                <th><mark className='italics'>3.</mark></th><th><mark className='pink italics'>druga</mark></th><th><mark className='italics yellow'>trzeci</mark></th>
                        </tr>
                    </table>
                    <mark className="italics small">W tym wypadku dokładanie trzeciego palca jest opcjionalne!</mark>
                </div>
                <div className="lesson14_GDur">
                    <img src={G_dur} className='lesson14_GDur_img' alt='G-dur' />
                </div>
                <p>No dobrze, czyli możemy zagrać jeden akord na dwa sposoby. To będzie jedyny akord, który przedstawię do nauczenia się w dwóch różnych formach. Teraz rodzi się pytanie. Czy jest więcej akordów, które można zagrać na kilka sposobów? Jak najbardziej, powiem więcej, wszystkie akordy można zagrać na kilka, a nawet kilkanaście sposobów. W samouczkach i tabulaturach są one przedstawiane w najprostszej formie. Przy ostatnich lekcjach wspomnę na jakiej zasadzie to działa. Na razie weźmy się za łatwiejsze elementy gry.</p>

                <ChangeLessonButton />
            </main>
        </div>
    )
}

export default lesson
