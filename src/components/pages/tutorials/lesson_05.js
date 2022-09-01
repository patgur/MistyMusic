import React from "react"

import MenuList from './MenuList.js'
import ChangeLessonButton from './ChangeLessonButton.js'

import secondChordPic from '../../img/chords/13.png'
import thirdChordPic from '../../img/chords/03.png'

function lesson(){
    return(
        <div className="lesson">
            <aside className="menu">
                <MenuList />
            </aside>
            <main>
                <div className="lesson5_fingfersPic">
                    <img src={secondChordPic} className="lesson5_chord" alt="akord" />
                </div>
                <div>
                    Skoro już wiemy, jak nazywają się palce i kolejne struny, to została nam jeszcze interpretacja progów, na którym trzeba położyć palce. Progi liczymy kolejno od strony główki, na której znajdują się klucze. Jeżeli, na obazku z akordem, nie ma żadnej liczby, oznacza to, że gramy od pierwszego progu.
                    <br/>
                    W naszym przypadku, nie ma pokazanej żadnej liczby, więc liczymy progi od pierwszego. Akord, który jest po lewej stronie, należy zagrać trzymając pierwszy palec (wskazujący) na pierwszym progu i drugiej (od dołu) strunie. Kolejnie trzeci palec (serdeczny) dajemy na drugi próg i trzeciej strunie. Na samym końcu dokładamy drugi palec (środkowy) na drugim progu i czwartej strunie.
                </div>
                <div>
                    W tym wypadu mamy akord barowy, który dokładniej zostanie wytłumaczony później. Najwżniejsze w nim jest to, że jednym palcem trzeba przytrzymać kilka strun. Przy tym B-dur dajemy pierwszy palec (wskazujący) na drugi prób, tak jak podpowiada zielona cyfra na samej górze obrazka. Kolejno pozostałe palce układane są na strunach 4., 3. i drugiej. Co ciekawego można jeszcze zauważyć, na to na szczóstej strunie jest znak x. Oznacza to, że chcemy z drugiej strony gryfu dotknąć kciukiem 6. struny tak, żeby ją wytłumyć, tzn. żeby pomimo pociągania za nią prawą ręką, nie wydawała ona z siebie dźwięku.
                </div>
                <div>
                    <img src={thirdChordPic} alt="akord" />
                </div>

                <ChangeLessonButton />
            </main>
        </div>
    )
}

export default lesson
