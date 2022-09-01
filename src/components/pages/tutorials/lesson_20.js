import React from "react"

import MenuList from './MenuList.js'
import ChangeLessonButton from './ChangeLessonButton.js'

import '../style/Tutorial/tutorial_lessons/lesson_20.css'

import bMoll from '../../img/chords/15.png'

function lesson(){
    return(
        <div className="lesson">
            <aside className="menu">
                <MenuList />
            </aside>
            <main>
                <p>
                    Oto i ona, przerażająca i przez wszystkich nowicjuszy z przerażeniem oczekiwana lekcja akordów barowych. A teraz na serio, czas je lekko opracować i zrozumieć. Może zaproponuję akord b-moll. Moim zdaniem jest najłatwiejszy do złapania. Jest dużo miejsca na palce przy każdym progu, a w dodatku nie jest na pierwszym progu, który moim zdaniem jest cięższy przy łapaniu całego progu ze względu na siodełko. Natomiast, czym dalszy próg, tym bardziej oddalona jest struna od gryfu, co powoduje cięższe dociśnięcie struny. Co więcej progi są coraz to węższe, co utrudnia złapanie strun palcami 2. - 4.
                </p>
                <div>
                    Akord <mark id='i'>b-moll</mark> trzymamy tak jak a-moll, tylko z pierwszym palcem na drugim progu oraz pozostałymi palcami kolejno podniesionymi o jeden w górę, tzn. tam gdzie miał być <mark id='cyan'>pierwszy</mark> palec, jest <mark id='pink'>drugi</mark>, tam gdzie <mark id='pink'>drugi</mark> jest <mark id='yellow'>trzeci</mark> i gdzie miał być <mark id='yellow'>trzeci</mark> jest <mark id='blue'>czwarty</mark>. Więc całość prezentuje się następująco:
                    <br /><br />
                    <table className="lesson20_table">
                        <tr>
                            <td>Palec</td><td>Struna</td><td>Próg</td>
                        </tr>
                        <tr>
                            <th>1.</th><th><mark id='my'>wszystkie</mark></th><th><mark id='pink'>drugi</mark></th>
                        </tr>
                        <tr>
                            <th>2.</th><th><mark id='pink'>druga</mark></th><th><mark id='yellow'>trzeci</mark></th>
                        </tr>
                        <tr>
                            <th>3.</th><th><mark id='blue'>czwarta</mark></th><th><mark id='blue'>czwarty</mark></th>
                        </tr>
                        <tr>
                            <th>4.</th><th><mark id='yellow'>trzecia</mark></th><th><mark id='blue'>czwarty</mark></th>
                        </tr>
                    </table>
                </div>
                <div className="lesson20_img">
                    <img src={bMoll} alt='b-moll' />
                </div>
                <p>
                    No dobra, już wiemy, jak złapać ten akord. Ale on brzęczy i brzmi okropnie. To dlatego, że musimy najpierw nauczyć się złapać "<mark id='italics'>wszystkie</mark>" struny jednocześnie. Tak na prawdę, to nie musimy łapać ostatniej struny, bo jej się w ogóle nie gra. Co więcej, struny od drugiej do czwartej przytrzymujemy palcami na progach. Możemy więc skupić się na strunach pierwszej i piątej. Sęk w tym, żeby przy wszystkich akordach barowych znaleźć swój sposób. Lekko wykrzywić palec, jakoś go pobrudzić, podnieść go wyżej. W zależności od wielkości i grubości rąk oraz palców, trzeba umieć znaleźć swoje najłatwiejsze ustawienie. Na co trzeba brać poprawkę:<br /><br />
                    <ul>
                        <mark>
                            <li className="lesson20_li">Ważne, dużo bardziej niż przy  trzymaniu zwykłych akordów, jest dociskanie ręką z drugiej strony gryfu.</li>
                            <li className="lesson20_li">Ułożenie palców tak, żeby przestań międzypaliczkowa nie nachodziła na strunę. Palce podzielone są na 3 części, czyli mają po 2 zgięcia. Te części to paliczki. Między nimi jest przestrzeń, dzięki której palce mogą się zginać. Przez te małe zgięcia ciężej jest docisnąć strunę, dlatego trzeba uważać, żeby nie trafić nimi na żadną z dociskanych strun.</li>
                            <li className="lesson20_li">Nie poddawać się. Próbować jeden dzień, dwa, trzy... tydzień, dwa, trzy... To niestaty jest bardzo zniechęcająca czynność, aczkolwiek satysfakcja jest niesamowita, bo pozwala to zagrać wiele akordów.</li>
                        </mark>
                    </ul>
                </p>

                <ChangeLessonButton />
            </main>
        </div>
    )
}

export default lesson
