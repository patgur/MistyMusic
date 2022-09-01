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
                <option value='1'>A</option>
                <option value='2'>A#</option>
                <option value='3'>B</option>
                <option value='4'>C</option>
                <option value='5'>C#</option>
                <option value='6'>D</option>
                <option value='7'>D#</option>
                <option value='8'>E</option>
                <option value='9'>F</option>
                <option value='10'>F#</option>
                <option value='11'>G</option>
                <option value='12'>G#</option>
                <option value='13'>Am</option>
                <option value='14'>A#m</option>
                <option value='15'>Bm</option>
                <option value='16'>Cm</option>
                <option value='17'>C#m</option>
                <option value='18'>Dm</option>
                <option value='19'>D#m</option>
                <option value='20'>Em</option>
                <option value='21'>Fm</option>
                <option value='22'>F#m</option>
                <option value='23'>Gm</option>
                <option value='24'>G#m</option>
            </select>
            <br />
            <br />
            <button className="transposeButton" onClick={previousChord}>←</button>
            <button className="transposeButton" onClick={nextChord}>→</button>
        </div>
    )
}

export default TabsSquare