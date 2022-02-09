import React, {useState} from "react";

function ListingCard({posting}) {
  const [isLiked, setIsLiked] = useState(false)
  function handleLike(){
    setIsLiked(!isLiked)
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={posting.image} alt={posting.name} />
      </div>
      <div className="details">
        {isLiked ? (
          <button onClick={handleLike} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleLike} className="emoji-button favorite">☆</button>
        )}
        <strong>{posting.description}</strong>
        <span> · {posting.location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
