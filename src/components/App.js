import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [postings, setPostings] = useState([])
  const [search, setSearch] = useState('')

  const justClickedSubmit = (searchTerm) => {
    setSearch(searchTerm)
  }

  const searchedListings = postings.filter(post => {
    return post.description.toLowerCase().includes(search.toLowerCase())
  })

  useEffect (() => {
    fetch('http://localhost:6001/listings').then(r=>r.json()).then(setPostings)
  }, [])

  function deletePost(postId){
    const newPostList = [...postings]
    const index = newPostList.findIndex((posting) => posting.id === postId)
    newPostList.splice(index, 1)
    fetch('http://localhost:6001/listings/' + postId,{
      method: 'DELETE'
    }
    )
    setPostings(newPostList)    
  }

  return (
    <div className="app">
      <Header justClickedSubmit={justClickedSubmit}/>
      <ListingsContainer postings={searchedListings} deletePost={deletePost}/>
    </div>
  );
}

export default App;
