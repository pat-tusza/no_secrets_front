import React, { useState } from 'react'
import { Link } from "react-router-dom"

const Login = ({setUser, user, setNoNoWord, noNoWord}) => {
    
    const [formInfo, setFormInfo] = useState('')

    const handleChange = e => {
        setFormInfo(e.target.value)
    }

    const handleSub = e => {
        e.preventDefault()
        fetch('http://127.0.0.1:3000/users')
        .then(r => r.json())
        .then(users => {
            let foundUser = users.find(users => users.username === formInfo)
            if (foundUser){
                setUser({...user, username: foundUser.username, id: foundUser.id})
            }else{
                handleCreateUser(formInfo)
            }
        })
        setNoNoWord(!noNoWord)
    }

    function handleCreateUser(name){
        let bunny = {username: name}
        fetch('http://127.0.0.1:3000/users', {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
            body: JSON.stringify(bunny)
        })
        .then(r => r.json())
        .then(newUser => {
            setUser({...user, username: newUser.username, id: newUser.id})
        })
    }

    function handleLogout(){
        setUser({...user, username: 'Guest', id: 'Guest'})
        setNoNoWord(!noNoWord)
    }
    console.log(user)
    
    return (
        <div>
            {user.username === 'Guest' ? (
            <form onSubmit={handleSub}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} value={formInfo}/>
                <button as='input' type="submit" value="Login">Login</button>
            </form>
            ) : ( 
                <>
                <button onClick={handleLogout}>Logout</button> <br></br>
                <Link to='/watchlist'>Watchlist</Link>
                </>
            )} 
            
        </div>
    )
}

export default Login
