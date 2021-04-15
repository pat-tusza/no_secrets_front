import React, { useState, useEffect } from 'react'
import DonCompareOne from './DonCompareOne'
import DonCompareTwo from './DonCompareTwo'

const Compare = ({compareMem}) => {
    
    const [mem1Don, setMem1Don] = useState(null)
    const [mem2Don, setMem2Don] = useState(null)
    const [mem1Loaded, setMem1Load] = useState(false)
    const [mem2Loaded, setMem2Load] = useState(false)

    
    useEffect(() => {
        fetch(`https://www.opensecrets.org/api/?method=candContrib&cid=${compareMem.member1.cid}&cycle=2020&apikey=2683f9437fadd3b81cbb2f77d08d4f76&output=json`)
                .then(r =>r.json())
                .then(donations => {
                    setMem1Don(donations)
                    setMem1Load(!mem1Loaded)
                })
                fetch(`https://www.opensecrets.org/api/?method=candContrib&cid=${compareMem.member2.cid}&cycle=2020&apikey=2683f9437fadd3b81cbb2f77d08d4f76&output=json`)
                .then(r =>r.json())
                .then(donations => {
                    setMem2Don(donations)
                    setMem2Load(!mem2Loaded)
                })        
    },[])
    
    if(!mem2Loaded || !mem1Loaded) return <h2>Loading...</h2>

    
    const daBaby= mem1Don.response.contributors.contributor
    const lilBaby= mem2Don.response.contributors.contributor

    const displayOne = daBaby.map((attributes, i)=> <DonCompareOne key={i} attributesOne={attributes}/>)
    const displayTwo = lilBaby.map((attributes, i)=> <DonCompareTwo key={i} attributesTwo={attributes}/>)
    console.log(daBaby, lilBaby)
    
    return (
        <div>
            <div>
                <img src= {compareMem.member1.image} alt={compareMem.member1.name}/>
                <p>{compareMem.member1.name}</p>
                <p>Gender: {compareMem.member1.gender}</p>
                <p>Birtdhay: {compareMem.member1.birthday}</p>
                <p>Party: {compareMem.member1.party}</p>
                <p>Office: {compareMem.member1.office}</p>
                <p>Year First Elected: {compareMem.member1.first_elected}</p>
                {displayOne}
            </div>
            <div>
            <img src= {compareMem.member2.image} alt={compareMem.member2.name}/>
                <p>{compareMem.member2.name}</p>
                <p>Gender: {compareMem.member2.gender}</p>
                <p>Birtdhay: {compareMem.member2.birthday}</p>
                <p>Party: {compareMem.member2.party}</p>
                <p>Office: {compareMem.member2.office}</p>
                <p>Year First Elected: {compareMem.member2.first_elected}</p>
                {displayTwo}
            </div>
        </div>
    )
}

export default Compare
