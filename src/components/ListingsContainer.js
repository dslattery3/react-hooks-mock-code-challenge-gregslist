import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({postings}) {
  const listedCards = postings.map((posting) => {
    return <ListingCard key={posting.id} posting={posting} />
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
