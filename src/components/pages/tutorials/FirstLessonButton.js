import { Link } from 'react-router-dom'
export default function FirstLessonButton(){
    return(
        <>
            <Link  to={'/tutorial/01'}  className='lessonButton'>Pierwsza lekcja</Link>
        </>
    )
}