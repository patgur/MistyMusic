import React from "react"

import MenuList from './MenuList.js'
import ChangeLessonButton from './ChangeLessonButton.js'

import lesson12_eMoll from '../../img/chords/20.png'

function lesson(){
    return(
        <div className="lesson">
            <aside className="menu">
                <MenuList />
            </aside>
            <main>
                <p>
                    Okej, czas na kolejną bardzo ciężką lekcję! Jedna z ważniejszych technik grania na gitarze, to granie poprzez akordy. Lewa ręka przytrzymuje odpowiednio struny, a prawa ręka za nie, zazwyczaj wszystkie szarpie. To jest ten moment, kiedy nauka praktyczna będzie ograniczona czasowo, albowiem opuszki palców zaczną doprowadzać nas do bardzo dużego bólu.
                </p>
                <div>
                    No dobra, to zacznijmy od jednego z łatwiejszych akordów, jest to e-moll. Pierwszym palcem chcemy przytrzymać piątą strunę na drugim progu, a drugim palcem czwartą strunę na drugim progu, tak więc będziemy korzystać z sekwencji:<br/>
                    Palec → struna → próg <br /><br />
                    <p><mark id='i'>1.</mark> → <mark id='green'>piąta</mark> → <mark id='pink'>drugi</mark></p>
                    <p><mark id='i'>2.</mark> → <mark id='blue'>czwarta</mark> → <mark id='pink'>drugi</mark></p>
                </div>
                
                <div>
                    <img src={lesson12_eMoll} alt="Zdjęcie e-moll" />
                </div>
                <p>
                    Okej, trzymanie palcami stun w celu zagrania danego akordu może wydawać się bardzo ciężkie, struna dziwnie brzęczy i nie brzmi to za pięknie. Ważne jest mocne przytrzymywanie strun, lecz z początku nie jest to aż tak banalne. Sęk w tym, żeby palce lekko docisnąć, ale mocno napierać mięśniem kłębu ręki. Nie do końca rozumiem, dlaczego tak mało osób uczących o tym mówi, ale jest to rzecz banalna, oszczędza ból w palcach i urytacje podczas nauki.
                </p>

                <ChangeLessonButton />
            </main>
        </div>
    )
}

export default lesson
