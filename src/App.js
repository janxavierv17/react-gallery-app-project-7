import React from "react"
import Nav from "./Components/Nav"
import PhotoContainer from "./Components/PhotoContainer"

import SearchForm from "./Components/SearchForm"
function App() {
  return (
    <div>
      <SearchForm />
      <Nav />
      <PhotoContainer />
    </div>
  );
}

export default App;
