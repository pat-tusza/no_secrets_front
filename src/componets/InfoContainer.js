import React, { useState, useEffect} from 'react'
import SearchBar from './SearchBar'
// import MemberTable from './MemberTable'
import MemberCard from './MemberCard'

const InfoContainer = ({user}) => {
    
    const [memberData, setMemberData] = useState([])
    const [search, setSearch] = useState('')
    
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
    
    const toDisplay = filtDisplay.map((member)=> <MemberCard key={member.cid} member={member} user={user}/>)
    return (
        <div>
            <SearchBar 
            setSearch={setSearch}
            search={search}/>
            {toDisplay}
        </div>
    )
}

export default InfoContainer
