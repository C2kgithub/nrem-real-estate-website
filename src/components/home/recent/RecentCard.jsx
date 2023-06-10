import React, { useState } from "react";
import { list } from "../../data/Data";

const RecentCard = () => {
  const [likedItems, setLikedItems] = useState([]);

  const handleLike = (itemId) => {
    if (likedItems.includes(itemId)) {
      setLikedItems(likedItems.filter((id) => id !== itemId));
    } else {
      setLikedItems([...likedItems, itemId]);
    }
  };

  return (
    <>
      <div className="content grid3 mtop">
        {list.map((val, index) => {
          const { id, cover, category, location, name, price, type } = val;
          const isLiked = likedItems.includes(id);

          return (
            
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", 
                  color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <i className={`fa fa-heart${isLiked ? " liked" : ""}`}
                    onClick={() => handleLike(id)}
                  ></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>{price}</button> <label htmlFor=''>...</label>
                </div>
                <span>{type}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard