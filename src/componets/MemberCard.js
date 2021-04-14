import React from 'react'
import { Link } from "react-router-dom"

const MemberCard = ({member, user}) => {
    
    const link = `/member/${member.cid}`

    function handleClick(){
        const newWatch = {user_id: user.id, member_id: member.id, comments: ''}
        fetch(`http://127.0.0.1:3000/watcheds`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
            body: JSON.stringify(newWatch)
        })
        .then(r=> r.json())
        .then(console.log(newWatch))
    }
    return (
        <div>
            <ul>
            <img src= "" alt= ""></img>
            {member.name} {' '}
            {member.party} {' '}
            {member.office} {' '}
            </ul>
            <button onClick={handleClick}>Add to Watch List</button>
            {/* <button>Go to detail page</button> */}
            <Link to={link}>Detail Page</Link>
        </div>
    )
}

export default MemberCard
