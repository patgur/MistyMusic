import React from "react"

import MenuList from './MenuList.js'
import ChangeLessonButton from './ChangeLessonButton.js'

import "../style/Tutorial/tutorial_lessons/lesson_09.css"

import guitarNeck from '../../img/a5.png'


function lesson(){
    return(
        <div className="lesson">
            <aside className="menu">
                <MenuList />
            </aside>
            <main>
                <p>
                    No dobrze, w lekcji 10 chcemy już w końcu wziąć gitarę na kolana i coś pograć, dlatego przydałoby się sprawdzić, czy nasza gitara jest dobrze nastrojona. W tym celu przyda nam się stroik. Może on być stricte jako urządzenie, aplikacja z telefonu czy chociażby ze strony internetowej, o ile posiadamy mikrofon podłączony do komputera.
                </p>
                <p>
                    Strojenie z jakiego będziemy korzystać, w zależności od tego, z jakiego oprogramowania korzystamy może chcieć od nas wiedzieć, w jakiej skali chcemy stroić. Jest kilka sposobów określenia podstawowego strojenia, postaram się je wypisać, żeby ułatwić strojenie gitary w każdym przypadku.
                </p>
                <div>
                    1.  Struny z jakich korzystamy są to kolejno:
                </div>
                <div className="lesson9_column">
                    E4 → "Pierwsza struna"<br />
                    B3 → "Druga struna"<br />
                    G3 → "Trzecia struna"<br />
                    D3 → "Czwarta struna"<br />
                    A2 → "Piąta struna"<br />
                    E2 → "Szósta struna"<br />
                </div>
                <div>
                    2. Czasem numer przy strunie zamiast określać oktawę, może być nazwą danej struny, więc będzie to zapisane następująco:
                </div>
                <div className="lesson9_column">
                    E1 → "Pierwsza struna"<br />
                    B2 → "Druga struna"<br />
                    G3 → "Trzecia struna"<br />
                    D4 → "Czwarta struna"<br />
                    A5 → "Piąta struna"<br />
                    E6 → "Szósta struna"<br />
                </div>
                
                <div>
                3. W niektórych stroikach jest podana tylko i wyłącznie kolejność, więc przy literach nie będzie żadnych liczb:
                </div>
                <div className="lesson9_column">
                    E<br />
                    B<br />
                    G<br />
                    D<br />
                    A<br />
                    E<br />
                </div>
                <div>
                    4. Zazwyczaj strojenie jest automatycznie ustawione na standardowe, ale trzeba podać częstotliwość, na której się stroi struny. Ta, która nas interesuje to 440 Hz. Wzięło się to z dźwięku A5, którego to dźwięk właśnie wibruje z częstotliwością 440 Hz. Na gitarze jest to pierwsza struna (E4) zagrana na piątym progu.
                </div>
                <div className='lesson9_guitarNeck'>
                    <img src={guitarNeck} alt="gryf" />
                </div>
                <div>
                    <mark id='red'>UWAGA!</mark><br />
                    W zależności od wykorzystywanej notacji, czasem zamiast <mark id='i'>B</mark>, można spotkać zapis <mark id='i'>H</mark>. Niemniej jednak znaczy to dokładnie to samo.
                </div>

                <ChangeLessonButton />
            </main>
        </div>
    )
}

export default lesson
