import JsonQuery from 'json-query'
import React, { useState, useEffect} from 'react'
import DonationPage from './DonationPage'
import {Link, useParams} from "react-router-dom"

const Detail = ({user}) => {
    const params = useParams()
    const id = params.cid

    const [pageMember, setPageMember] = useState(null)
    const [isMemLoaded, setIsMemloaded] = useState(false)
    const [pageDonations, setPageDonations] = useState(null)
    const [isDonLoaded, setIsDonloaded] = useState(false)

    useEffect(() => {
        fetch (`http://127.0.0.1:3000/members/${id}`)
        .then(r =>r.json())
        .then(member =>{
            setPageMember(member)
            setIsMemloaded(true)
            fetch(`https://www.opensecrets.org/api/?method=candContrib&cid=${id}&cycle=2020&apikey=2683f9437fadd3b81cbb2f77d08d4f76&output=json`)
                .then(r =>r.json())
                .then(donations => {
                    setPageDonations(donations)
                    setIsDonloaded(true)
                })
        })
    }, [])

    
    if(!isDonLoaded) return <h2>Loading....</h2>
    
    
    
    console.log(pageMember)
    // console.log(pageDonations, pageDonations.response.contributors.contributor[0]['@attributes'])

    const lilNas= pageDonations.response.contributors.contributor

    // console.log(lilNas)
    const displayStuff = lilNas.map((attributes)=> <DonationPage key={attributes.id} attributes={attributes}/>)

    const {birthday, name, first_elected, gender, image, office, party} = pageMember[0]
   
    return (
        <div>
            <img src= {image} alt={name}/>
            <p>{name}</p>
            <p>Gender: {gender}</p>
            <p>Birtdhay: {birthday}</p>
            <p>Party: {party}</p>
            <p>Office: {office}</p>
            <p>Year First Elected: {first_elected}</p>
            {displayStuff}
            <Link to='/home'>Home</Link>
        </div>
    )
}

export default Detail
