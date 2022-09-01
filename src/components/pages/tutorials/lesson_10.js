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
                    Czas wziąć się za jedną z największych zmór początkujących gitarzystów. <mark id='red'>Trzymanie strun</mark>. Tak jest, zgadza się. Trzymanie strun wcale nie jest takie łatwe, jak mogłoby to się wydawać, w szczególności, jeśli korzystamy z gitary akustycznej, bo ma ona najtwardsze struny. Z samego początku nauka będzie bardzo uciążliwa, albowiem po chwili będzie można wyczuć mocny ból w opuszkach palców. Nie przejmuj się tym, zrób sobie przerwę. Najlepiej uczyć się po godzinę dziennie. Jeśli ból jest zbyt intensywny, ćwiczyć co drugi dzień. Dzięki temu nauka będzie w miarę systematyczna, ale nie będziemy zbyt się ranić. Ból po pewnym czasie przechodzi, co więcej, opuszki stają się o wiele twardsze i z czasem, w przypadku regularnych ćwiczeń, gra nie powinna już sprawiać żadnego bólu. No ale to przyjdzie dopiero z dłuższym czasem.
                </p>
                <p>
                    No dobrze, to czas nauczyć się jakiegoś łatwego utworu. W tym wypadku będziemy grać na jednej strunie. Można sobie wybrać dowolną stronę. Numerami będę jedynie przedstawiać, na jakim progu należy ją przytrzymać. Najlepiej grać wszystkie dźwięki pojedynczym palcem - pierwszym.
                </p>
                <div>
                    Dziś spróbujemy zagrać typową melodię z utworu “<mark id='italics'>Smoke on the water</mark>” od Deep Purple.<br />
                    Postaraj się uczyć po jednym takcie, to znaczy po jednym obszarze między kreskami. Jak dasz radę zagrać dany takt, bez patrzenia na tabulatury, to możesz przejść do kolejnego taktu.
                </div>
                <div>
                    <p style={{fontSize:'20px'}}>|-0---3---5----0-|---3---6-5------|-0---3---5----3-|---0------------|</p>
                </div>

                <ChangeLessonButton />
            </main>
            
        </div>
    )
}

export default lesson
