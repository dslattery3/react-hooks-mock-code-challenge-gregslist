import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({postings, deletePost}) {
  const listedCards = postings.map((posting) => {
    return <ListingCard key={posting.id} posting={posting} deletePost={deletePost} />
  })

  return (
    <main>
      <ul className="cards">
        {listedCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
