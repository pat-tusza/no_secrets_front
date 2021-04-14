import React, {useState} from 'react';
import InfoContainer from './InfoContainer'
import Login from './Login'
import { Switch, Route, useHistory } from "react-router-dom"
import Detail from "./Detail"
import Watchlist from './Watchlist'


function App() {
  const [user, setUser] = useState({
    username: 'Guest',
    id: 'Guest'
  })
  
  return (
    <div>
      <h3>Signed in as: {user.username}</h3>
      <Switch>
        <Route exact path='/home'>
          <Login 
          user={user}
          setUser={setUser}
          />
          <InfoContainer user={user} />
        </Route>
        <Route exact path="/member/:cid">
          <Detail user={user} />
        </Route>
        <Route exact path="/watchlist"> 
          <Watchlist user={user} />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
