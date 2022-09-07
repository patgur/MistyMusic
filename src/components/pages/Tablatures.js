import React, {useState} from "react"
import "./style/Tablatures.css"
import TabsSquare from "./TabsSquare"

function Tablatures(){
    const [chordNum1, changeChord1] = useState(1)
    const [chordNum2, changeChord2] = useState(1)
    const [chordNum3, changeChord3] = useState(1)
    const [chordNum4, changeChord4] = useState(1)

    function trunsposeUp(){
        if(chordNum1<=12){
            if(chordNum1===12){
                changeChord1(1)
            }
            else{
                changeChord1(chordNum1 + 1)
            }
        }else if(chordNum1<=24){
            if(chordNum1===24){
                changeChord1(13)
            }
            else{
                changeChord1(chordNum1 + 1)
            }
        }
        if(chordNum2<=12){
            if(chordNum2===12){
                changeChord2(1)
            }
            else{
                changeChord2(chordNum2 + 1)
            }
        }else if(chordNum2<=24){
            if(chordNum2===24){
                changeChord2(13)
            }
            else{
                changeChord2(chordNum2 + 1)
            }
        }
        if(chordNum3<=12){
            if(chordNum3===12){
                changeChord3(1)
            }
            else{
                changeChord3(chordNum3 + 1)
            }
        }else if(chordNum3<=24){
            if(chordNum3===24){
                changeChord3(13)
            }
            else{
                changeChord3(chordNum3 + 1)
            }
        }
        if(chordNum4<=12){
            if(chordNum4===12){
                changeChord4(1)
            }
            else{
                changeChord4(chordNum4 + 1)
            }
        }else if(chordNum4<=24){
            if(chordNum4===24){
                changeChord4(13)
            }
            else{
                changeChord4(chordNum4 + 1)
            }
        }
    }

    function trunsposeDown(){
        if(chordNum1<=12){
            if(chordNum1===1){
                changeChord1(12)
            }
            else{
                changeChord1(chordNum1 - 1)
            }
        }else if(chordNum1<=24){
            if(chordNum1===13){
                changeChord1(24)
            }
            else{
                changeChord1(chordNum1 - 1)
            }
        }
        if(chordNum2<=12){
            if(chordNum2===1){
                changeChord2(12)
            }
            else{
                changeChord2(chordNum2 - 1)
            }
        }else if(chordNum2<=24){
            if(chordNum2===13){
                changeChord2(24)
            }
            else{
                changeChord2(chordNum2 - 1)
            }
        }
        if(chordNum3<=12){
            if(chordNum3===1){
                changeChord3(12)
            }
            else{
                changeChord3(chordNum3 - 1)
            }
        }else if(chordNum3<=24){
            if(chordNum3===13){
                changeChord3(24)
            }
            else{
                changeChord3(chordNum3 - 1)
            }
        }
        if(chordNum4<=12){
            if(chordNum4===1){
                changeChord4(12)
            }
            else{
                changeChord4(chordNum4 - 1)
            }
        }else if(chordNum4<=24){
            if(chordNum4===13){
                changeChord4(24)
            }
            else{
                changeChord4(chordNum4 - 1)
            }
        }
    }
    return(
        <div className="tablatures">
            <div class='lyrics' contentEditable="true">
                
            </div>
            <div className="chordsContent">
                <div className="chords">
                    <TabsSquare chordNum={chordNum1} changeChord={changeChord1}/>
                    <TabsSquare chordNum={chordNum2} changeChord={changeChord2}/>
                    <TabsSquare chordNum={chordNum3} changeChord={changeChord3}/>
                    <TabsSquare chordNum={chordNum4} changeChord={changeChord4}/>
                </div>
                <br />
                <div className="transpose">
                    <button className="transposeAllButton" onClick={trunsposeDown}>Transpozycja w dół</button>
                    <button className="transposeAllButton" onClick={trunsposeUp}>Transpozycja w górę</button>
                </div>
            </div>
        </div>
    )
}

export default Tablatures