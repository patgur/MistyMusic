import React from "react"

import MenuList from './MenuList.js'
import ChangeLessonButton from './ChangeLessonButton.js'

import '../style/Tutorial/tutorial_lessons/lesson_11.css'

function lesson(){
    return(
        <div className='lesson'>
            <aside className="menu">
                <MenuList />
            </aside>
            <main>
                <p>Okej, mam nadzieję, że już w miarę wychodzi Ci wcześniejsza lekcja. Bo będziemy teraz się doskonalić w tym, co już znamy. Znów wykorzystamy utwór "Smoke on the water". W tym wypadku chcemy wykorzystać więcej palców w lewej ręce. Dlatego, dla każdego progu będzie przypisany inny palec:</p>
                <div className="lesson11_fingers">
                    Pierwszy palec -→ trzeci próg <br/>
                    Trzeci palec -→ piąty próg <br/>
                    Czwarty palec -→ szósty próg <br/>
                </div>
                <div className="lesson11_tabs">
                    <p>|-0---3---5----0-|---3---6-5------|-0---3---5----3-|---0------------|</p>
                </div>
                <p>
                    Postaraj się grać wolno i z czasem przyspieszać. To jest bardzo ważna praktyka w dowolnym sposobie grania. Za każdym razem, trzeba na spokojnie przyzwyczaić swoją rękę do wykonywania danych ruchów, albowiem ręce nie są do końca przyzwyczajone do układania palców w dany sposób.
                </p>
                <p>
                Jeśli udało Ci się już opanować lewą rękę do perfekcji. To zostało jeszcze jedno zadanie. W celu grania utworu w szybszym tempie, w którym to wykorzystuje się jedną strunę co najmniej 2 razy z rzędu, przydatną umiejętnością jest granie prawą ręką z wykorzystaniem dwóch palców, najczęściej to będą pierwszy i drugi palec.<br />
                Celem, który chcemy osiągnąć, jest szybsze granie utworu, ale żeby przyzwyczaić palce, postara się grać z początku wolno i dopiero z czasem przyśpieszać. Grać chcemy oboma palcami na zmianę, zaczynając od pierwszego. Ten sposób gry może się często kojarzyć z basistami, albowiem oni bardzo często wykorzystują tę technikę gry na instrumencie.
                </p>

                <ChangeLessonButton />
            </main>
        </div>
    )
}

export default lesson
