import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

//postings arr of objs {id, description, image, location}

function App() {
  const [postings, setPostings] = useState([])
  const [searchVal, setSearchVal] = useState('')

  function handleSearch(e){
    console.log(e.target.value)
  }
  function searchBar(){
    console.log('searched')
  }
  useEffect (() => {
    fetch('http://localhost:6001/listings').then(r=>r.json()).then(setPostings)
  }, [])

  return (
    <div className="app">
      <Header handleSearch={handleSearch} searchBar={searchBar} />
      <ListingsContainer postings={postings} />
    </div>
  );
}

export default App;
