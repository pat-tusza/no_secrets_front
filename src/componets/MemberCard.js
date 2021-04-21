import React from 'react'
import { Link } from "react-router-dom"

const MemberCard = ({member, user, noNoWord, compareMem, setCompareMem, testCompare, setTestCompare}) => {
    
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
        .then(
            alert(`${member.name} has been added to your Watchlist!!`)
        )
    }

    function handleBut(e){
        if(e.target.value === "1"){
            setCompareMem({...compareMem, 
                member1: {
                    birthdate: member.birthdate,
                    cid: member.cid,
                    first_elected: member.first_elected,
                    gender: member.gender,
                    id: member.id,
                    image: member.image,
                    name: member.name,
                    office: member.office,
                    party: member.party
                  },
                })
        } else{
            setCompareMem({...compareMem, 
                member2: {
                    birthdate: member.birthdate,
                    cid: member.cid,
                    first_elected: member.first_elected,
                    gender: member.gender,
                    id: member.id,
                    image: member.image,
                    name: member.name,
                    office: member.office,
                    party: member.party
                  },
                })
        }
    }
    // #c1e4f7 lighter blue color
    // #99d2f2 slightly darker blue
    // #4682b4 steel blue CSS
    return (
        <div className="card-div">
            
            <div className="card-info">
                <img src= {member.image} alt= {member.name}></img> {' '}
                <Link to={link}>{member.name}</Link> {' '}
                <span> {' '}
                    Political Party:{' '}{member.party} {' '}
                </span>
                Congressional District:{" "}{member.office} {' '}
                <span>
                    Compare: 
                    <input type="checkbox" onChange={handleBut} value= "1" name="memberId1"></input>
                    <input type="checkbox" onChange={handleBut} value= "2" name="memberId2"></input>
                </span>
                
                {noNoWord? null : <button onClick={handleClick}>Add to Watch List</button>}
                {/* <button>Go to detail page</button> */}
                {/* <Link to={link}>Detail Page</Link> */}
            </div>
        </div>
    )
}

export default MemberCard
