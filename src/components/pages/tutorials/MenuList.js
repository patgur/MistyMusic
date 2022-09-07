import React from "react"
import { Link } from "react-router-dom"

import '../style/Tutorial/Tutorial_Menu.css'

import LessonsList from "../../database/tutorial_pagesNames.json"

export default function MenuList(){
    return(
        <table className="menuList">
                {LessonsList.map((lesson, index) => {
                    return <tr><td><Link to={'/tutorial/' + lesson.id} >{index+1 + '. ' + lesson.name}</Link></td></tr>
                })}
        </table>
    )
}