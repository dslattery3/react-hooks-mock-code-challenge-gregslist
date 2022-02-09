import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [postings, setPostings] = useState([])
  const [searchVal, setSearchVal] = useState('')

  function handleSearch(e){
    console.log(e.target.value)
  }
  function searchBar(){
    const searchTerm = searchVal
    const newList = [...postings]
    const finalList = []

    const filteredList = newList.map((post) => post.description.toLowerCase().includes(searchTerm.toLowerCase()) && finalList.push(post))
    
    console.log(filteredList)
    console.log(finalList)

    setPostings(finalList)

  }
  useEffect (() => {
    fetch('http://localhost:6001/listings').then(r=>r.json()).then(setPostings)
  }, [])

  function deletePost(postId){
    const newPostList = [...postings]
    const index = newPostList.findIndex((posting) => posting.id === postId)
    newPostList.splice(index, 1)
    fetch('http://localhost:6001/listings/' + postId,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
      }
    ).then(r=>r.json()).then(console.log)

    setPostings(newPostList)    
  }

  return (
    <div className="app">
      <Header setSearchVal={setSearchVal} handleSearch={handleSearch} searchVal={searchVal} searchBar={searchBar} />
      <ListingsContainer postings={postings} deletePost={deletePost}/>
    </div>
  );
}

export default App;
