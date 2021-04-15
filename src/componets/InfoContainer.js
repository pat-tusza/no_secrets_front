import React, { useState, useEffect} from 'react'
import SearchBar from './SearchBar'
// import MemberTable from './MemberTable'
import MemberCard from './MemberCard'
import {useHistory} from "react-router-dom"

const InfoContainer = ({user, noNoWord, setCompareMem, compareMem}) => {
    
    const [memberData, setMemberData] = useState([])
    const [search, setSearch] = useState('')
    const history = useHistory()
    
    useEffect(()=>{
        fetch('http://127.0.0.1:3000/members')
        .then(r=> r.json())
        .then(data =>{
            setMemberData(data)
            console.log(data)
        })
    },[])

    const filtDisplay = memberData.filter((member) =>{
        return member.name.toLowerCase().includes(search.toLowerCase())
    })
    
    const toDisplay = filtDisplay.map((member)=> <MemberCard key={member.cid} member={member} user={user} noNoWord={noNoWord} compareMem={compareMem} setCompareMem={setCompareMem}/>)
    
    function compareClick(){
        history.push('/compare')
    }

    return (
        <div>
            <SearchBar 
            setSearch={setSearch}
            search={search}/>
            <button onClick={compareClick}>Compare</button>
            {toDisplay}
        </div>
    )
}

export default InfoContainer
