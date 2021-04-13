import React from "react"
import Nav from "./Components/Nav"
import SearchForm from "./Components/SearchForm"
import PhotoContainer from "./Components/PhotoContainer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
export default class App extends React.Component {
  // Followed how the react router basics unit stores the data (Courses, html, css, javascript)
  state = {
    nba: [],
    anime: [],
    computers: [],
    search: [],
    userInput: ""
  }

  // Since nav bar are a fixed navigation. I decided to just fetch their corresponding API and store them as soon as the component mounts.
  componentDidMount() {
    this.fetchAPI();
    fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=61ec129d9055e71bc638b950a86cd8f1&tags=nba&text=nba&page=12&format=json&nojsoncallback=1")
      .then(res => res.json())
      .then(data => (this.setState({ nba: data.photos.photo })));
    fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=61ec129d9055e71bc638b950a86cd8f1&tags=anime&text=anime&page=12&format=json&nojsoncallback=1")
      .then(res => res.json())
      .then(data => (this.setState({ anime: data.photos.photo })));
    fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=61ec129d9055e71bc638b950a86cd8f1&tags=computers&text=computers&page=12&format=json&nojsoncallback=1")
      .then(res => res.json())
      .then(data => (this.setState({ computers: data.photos.photo })));
  }

  // By default I set the parameter to have a value right away so when the user visits the root page it''ll just display photos.
  fetchAPI = (userInput = "programming") => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=61ec129d9055e71bc638b950a86cd8f1&tags=${userInput}&text=${userInput}&page=12&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(data => this.setState({
        userInput: userInput,
        search: data.photos.photo
      }))
  }
  render() {
    return (
      <Router >
        <div className="container">
          {/* Passed a props to search form component to access the history push.*/}
          <Route render={(props) => <SearchForm fetchAPI={this.fetchAPI} {...props} />} />
          <Nav />

          {/*  Rendering of components with paths  */}
          <Switch>
            <Route exact path="/" render={() =>
              <PhotoContainer data={this.state.search} />}
            />
            <Route path="/nba" render={() =>
              <PhotoContainer data={this.state.nba} />}
            />
            <Route path="/anime" render={() =>
              <PhotoContainer data={this.state.anime} />}
            />
            <Route path="/computers" render={() =>
              <PhotoContainer data={this.state.computers} />}
            />
          </Switch>
        </div>
      </Router >
    );
  }
}
