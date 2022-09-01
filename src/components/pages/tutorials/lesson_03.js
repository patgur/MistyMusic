import React from "react"

import MenuList from './MenuList.js'
import ChangeLessonButton from './ChangeLessonButton.js'

import handPic from '../../img/hand.jpg'
import chordPic from '../../img/chords/20.png'

import "../style/Tutorial/tutorial_lessons/lesson_03.css"
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
                        Podaczas grania na gitarze, trzeba nauczyć się kilku nazw, które pozwolą na szybszą interpretacje zapisanej piosenki.
                        Akordy są to dźwięki stworzone ze współbrzmienia trzech różnych, odrębnych dźwięków. W przypadku gitary oznacza to pociągnięcie conajmniej trzech strun.
                        <br/>
                        Dla prostrzego opisana akordów, musimy wiedzieć jakim palcem dosicnąć którą strunę i na którym progu, dlategoteż dociskając struny lewą ręką będziemy nazywać palce:
                        <br/>
                    </p>
                </div>
                <div className="lesson3_fingers">
                    Pierwszy palec → wskazujący<br/>
                    Drugi palec → środkowy<br/>
                    Trzeci palec → serdeczny<br/>
                    Czwarty palec → pały<br/><br/>
                    Kciuk jest używany do tłumienia strun, ale o tym troszkę później.
                </div>
                <div className="lesson3_fingfersPic">
                        <img src={handPic} className="lesson3_hand" alt="ręka" />
                </div>
                <div className="lesson3_fingfersPic">
                        <img src={chordPic} className="lesson3_chord" alt="akord" />
                </div>
                <div className="lesson3_chords">
                    Na obrazku po lewej stronie widać jeden z łatwiejszych akordów e-moll. Struny nazywamy niezależnie od dźwięku liczebnikami porządkowymi. Czyli, jeśli położymy gitarę na kolanach w taki sposób, żeby gryf znajdował się po lewej stronie, to ta na samym dole, najcieńsza struna o najwyżym dźwięku, to <mark id="i">pierwsza</mark> struna. Struna wyżej to <mark id="i">druga</mark> struna itd.<br/>
                    W wypadku podanego akordu, musimy przytrzymać struny czwartą (D) i piątą (A).
                    <br/>
                    Niestety, jedna cecha może zauważalnie rozpraszać. Akordy rozpisywane są od strun z najwyższym dźwiękiem od dołu, więc w tym wypadku piąta struna to dźwięk A. <mark id="i">Nie możemy</mark> więc patrzeć na akordy i traktować je jak odbicie lustrzane, co ułatwiałoby zrozumienie rozłożenia palców.
                </div>

                <ChangeLessonButton />
            </main>
        </div>
    )
}

export default lesson