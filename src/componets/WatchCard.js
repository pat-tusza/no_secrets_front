import React, {useState} from 'react'


const WatchCard = ({watch, user}) => {
    
    function handleDelete(){
        fetch(`http://127.0.0.1:3000/watcheds/${watch.id}`, {
            method: 'DELETE'
        })
    }
    
    return (
        <div>
            <ul>
            <img src= "" alt= ""></img>
            {watch.member.name} {' '}
            {watch.member.party} {' '}
            {watch.member.office} {' '}
            Notes: {watch.comments} {' '}
            </ul>
            <button onClick={handleDelete}>Remove from WatchList</button> {' '} 
            <button> Edit Note</button>
            
        </div>
    )
}

export default WatchCard
