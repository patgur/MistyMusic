import React from 'react'
import { Link } from 'react-router-dom'


export default function NextLessonButton({NextLessonButtonUrlNumber}){
    let NextLessonButtonx = +NextLessonButtonUrlNumber
    let str = ''
    if(+NextLessonButtonx>9){
        str = NextLessonButtonx.toString()
    }
    else{
        str = '0' + NextLessonButtonx.toString()
    }

    return(
        <>
            <Link  to={'/tutorial/' + str} className='lessonButton'>Następna lekcja</Link>
        </>
    )
}