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
  }

  componentDidMount() {
    fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=eb6398e4423566f4579a4b10e75ffda3&tags=nba&text=nba&safe_search=1&format=json&nojsoncallback=1&auth_token=72157718893974428-b90fbb58cd8c7a44&api_sig=43a92d76a42d62470539825d8d84164f")
      .then(res => res.json())
      .then(data => (this.setState({ nba: data.photos.photo })))

    fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=eb6398e4423566f4579a4b10e75ffda3&tags=anime&text=anime&safe_search=1&format=json&nojsoncallback=1&auth_token=72157718893974428-b90fbb58cd8c7a44&api_sig=7349a32fc6366ecfbb7535799ecbac17")
      .then(res => res.json())
      .then(data => (this.setState({ anime: data.photos.photo })))

    fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=eb6398e4423566f4579a4b10e75ffda3&tags=computers&text=computers&safe_search=1&format=json&nojsoncallback=1&auth_token=72157718893974428-b90fbb58cd8c7a44&api_sig=dbe93de49ab13a15b5e678a845840feb")
      .then(res => res.json())
      .then(data => (this.setState({ computers: data.photos.photo })))



  }

  render() {

    return (

      <Router  >
        <div className="container">
          <SearchForm />
          <Nav />
          <Switch>
            <Route path="/nba" component={() =>
              <PhotoContainer data={this.state.nba} />}
            />
            <Route path="/anime" component={() =>
              <PhotoContainer data={this.state.anime} />}
            />
            <Route path="/computers" component={() =>
              <PhotoContainer data={this.state.computers} />}
            />
          </Switch>
        </div>
      </Router >
    );
  }
}
