import React from "react"
import "./style/TabsSquare.css"

function TabsSquare({chordNum, changeChord}) {
    
    function previousChord(){
        if(chordNum===1)
            changeChord(24)
        else{
            changeChord(chordNum - 1)
        }
        return false
    }
    
    function nextChord(){
        if(chordNum===24){
            changeChord(1)
        }
        else{
            changeChord(chordNum + 1)
        }
        return false
    }
    
    return (
        <div className="tabsSquare">
            <select value={chordNum}>
                <option value='1' className="tabsSquare_dur">A</option>
                <option value='2' className="tabsSquare_dur">A#</option>
                <option value='3' className="tabsSquare_dur">B</option>
                <option value='4' className="tabsSquare_dur">C</option>
                <option value='5' className="tabsSquare_dur">C#</option>
                <option value='6' className="tabsSquare_dur">D</option>
                <option value='7' className="tabsSquare_dur">D#</option>
                <option value='8' className="tabsSquare_dur">E</option>
                <option value='9' className="tabsSquare_dur">F</option>
                <option value='10' className="tabsSquare_dur">F#</option>
                <option value='11' className="tabsSquare_dur">G</option>
                <option value='12' className="tabsSquare_dur">G#</option>
                <option value='13' className="tabsSquare_moll">am</option>
                <option value='14' className="tabsSquare_moll">a#m</option>
                <option value='15' className="tabsSquare_moll">bm</option>
                <option value='16' className="tabsSquare_moll">cm</option>
                <option value='17' className="tabsSquare_moll">c#m</option>
                <option value='18' className="tabsSquare_moll">cm</option>
                <option value='19' className="tabsSquare_moll">c#m</option>
                <option value='20' className="tabsSquare_moll">cm</option>
                <option value='21' className="tabsSquare_moll">cm</option>
                <option value='22' className="tabsSquare_moll">c#m</option>
                <option value='23' className="tabsSquare_moll">gm</option>
                <option value='24' className="tabsSquare_moll">g#m</option>
            </select>
            <br />
            <br />
            <button className="transposeButton" onClick={previousChord}>←</button>
            <button className="transposeButton" onClick={nextChord}>→</button>
        </div>
    )
}

export default TabsSquare