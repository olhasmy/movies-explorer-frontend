import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";
import NotFound from "../NotFound/NotFound";
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {

    return (
      <div className="App">
          <Switch>
              <Route exact path="/">
                  <Main />
              </Route>
              <Route path="/movies">
                  <Movies />
              </Route>
              <Route path="/savedMovies">
                  <SavedMovies />
              </Route>
              <Route path="/profile">
                  <Profile name="Ольга" email="123@mail.ru"/>
              </Route>
              <Route path="/signin">
                  <Login />
              </Route>
              <Route path="/signup">
                  <Register />
              </Route>
              <Route path="/*">
                  <NotFound />
              </Route>
          </Switch>
      </div>
  );
}

export default App;
