import React from "react"
import './style/Chords.css'
import PhotosList from '../database/chords_photos.json'


function Chord({photoId, photoName}){
    return(
        <div className="photo">
            <img className="picture" src={require('../../components/img/chords/' + photoId + '.png').default} alt=""/>
            <div className="label">{photoName}</div>
        </div>
    )
}


class Chords extends React.Component{
    render(){
        return(
            <div className="chords">
                {PhotosList.map((photo) => {
                    return(
                        <Chord photoId={photo.id} photoName={photo.name} />
                    )
                })}
                <div className="space"></div>
            </div>
        )
    }
}

export default Chords