import React, {useState} from 'react'
import { Link } from "react-router-dom"


const WatchCard = ({watch, user, watchedData, setWatchedData}) => {
    
    const [isClicked, setIsClicked] = useState(false)
    const [noteForm, setNoteForm] = useState('')
    const [currentComment, setCurrentComment] = useState(watch.comments)


    function removeWatched(watchedId){
        const updatedWatched = watchedData.filter((watched)=> watched.id !== watchedId)
        setWatchedData(updatedWatched)
    }

    function handleDelete(){
        fetch(`http://127.0.0.1:3000/watcheds/${watch.id}`, {
            method: 'DELETE'
        })
        .then(r=> r.json())
        .then(
            removeWatched(watch.id)
        )
    }

    function handleText(e){
        setNoteForm(e.target.value)
    }

    function handlePatch(e){
        e.preventDefault()
        const updatedComment = {
            comments: noteForm
        }

        fetch(`http://127.0.0.1:3000/watcheds/${watch.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(updatedComment)
        })
        .then(r=> r.json())
        .then(
            setCurrentComment(noteForm),
            setIsClicked(!isClicked)
        )
    }

    const editCommentForm = (
        <form onSubmit={handlePatch}>
            Edit your Note: <input type="text" name="comment" onChange={handleText}></input>
            <input type="submit"/>
        </form>    
    )

    function handleClick(){
        setIsClicked(!isClicked)
    }

    const link = `/member/${watch.member.cid}`
    
    return (
        <div>
            <ul>
            <img src= "" alt= ""></img>
            <Link to={link}>{watch.member.name}</Link> {' '}
            {watch.member.party} {' '}
            {watch.member.office} {' '}
            Notes: {currentComment} {' '}
            </ul>
            <button onClick={handleDelete}>Remove from WatchList</button> {' '} 
            {isClicked? editCommentForm : <button onClick={handleClick}> Edit Note</button>}
            
        </div>
    )
}

export default WatchCard
