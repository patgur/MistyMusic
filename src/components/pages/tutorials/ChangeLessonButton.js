import React from "react"

import FirstLessonButton from './FirstLessonButton.js'
import NextLessonButton from './NextLessonButton.js'
import currentUrl from './getUrl'



export default function ChangeLessonButton(){
    let changeLessonButtonNumber = +currentUrl()
    return(
        <section>
            {      
                (changeLessonButtonNumber >= 1 && changeLessonButtonNumber <=22) ? <NextLessonButton NextLessonButtonUrlNumber={changeLessonButtonNumber} /> : <FirstLessonButton />
            }
        </section>
    )
}