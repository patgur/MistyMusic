import React from "react"

import MenuList from './MenuList.js'
import ChangeLessonButton from './ChangeLessonButton.js'

function lesson(){
    return(
        <div className="lesson">
            <aside className="menu">
                <MenuList />
            </aside>
            <main>
                <p>
                    Większość lekcji jakie nam zostały, to zajmowanie się douczaniem najważniejszych akordów. W sekcji "<mark id='italics'> Akordy</mark>" znajduje się lista podstawowych akordów w skali durowej i mollowej. Jest jeszcze wiele technik, akordów i sztuczek, które nie są omawiane w tym samouczku, ale to ze względu na to, że tutaj chcemy się nauczyć wyłącznie podstawowych elementów gry na gitarze.
                </p>
                <p>
                    Jest jeden ważny element, który chciałbym poruszyć w tej lekcji. Wytłumianie strun. Czasem, nie chcemy, żeby dany akord był zagrany ze wszystkimi strunami, a wciąż najłatwiej jest grać prawą ręką wszystkie struny. Z tego też powodu zazwyczaj będziemy chcieli tłumić ostatnią strunę kciukiem lewej ręki.<br />
                    Tłumienie polega na lekkim przytrzymaniu struny w dowolnym jej miejscu tak, żeby nie mogła wibrować, co jednocześnie hamuje ją od wydawania dźwięku.<br /><br />
                    Co niektóre akordy, które już były przedstawione, mają '<mark id='italics'>x</mark>' na szóstej strunie. To właśnie oznacza, że należy je wytłumić. Wyjątkiem jest akord d-moll, który to ma wytłumione aż 2 struny - piątą i szóstą. W tym wypadku nie trzeba ich wytłumiać, bo fizycznie byłoby to bardzo ciężkie. Niestety, przy tym akordzie trzeba nauczyć się szarpać za jedynie 4 pierwsze struny.
                </p>
                
                <ChangeLessonButton />
            </main>
        </div>
    )
}

export default lesson
