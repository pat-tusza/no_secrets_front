import React, {useState} from 'react';
import InfoContainer from './InfoContainer'
import Login from './Login'
import { Switch, Route, useHistory } from "react-router-dom"
import Detail from "./Detail"
import Watchlist from './Watchlist'
import Compare from './Compare';


function App() {
  const [user, setUser] = useState({
    username: 'Guest',
    id: 'Guest'
  })

  const [compareMem, setCompareMem] = useState({
    member1: {
      birthdate: "",
      cid: "",
      first_elected: "",
      gender: "",
      id: 0,
      image: "",
      name: "",
      office: "",
      party: ""
    },
    member2: {
      birthdate: "",
      cid: "",
      first_elected: "",
      gender: "",
      id: 0,
      image: "",
      name: "",
      office: "",
      party: ""
    }
  })

  const [noNoWord, setNoNoWord] = useState(true)
  
  return (
    <div>
      <h3>Signed in as: {user.username}</h3>
      <Switch>
        <Route exact path='/home'>
          <Login 
          user={user}
          setUser={setUser}
          setNoNoWord={setNoNoWord}
          noNoWord={noNoWord}
          />
          <InfoContainer 
          user={user}
          noNoWord={noNoWord}
          setCompareMem={setCompareMem}
          compareMem={compareMem}
          />
        </Route>
        <Route exact path="/member/:cid">
          <Detail user={user} />
        </Route>
        <Route exact path="/watchlist"> 
          <Watchlist user={user} />
        </Route>
        <Route exact path="/compare">
          <Compare compareMem={compareMem} />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
