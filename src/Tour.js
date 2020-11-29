import React, { useState } from 'react';

const Tour = ({tourData,removeTours}) => {
   const {id,image,info,name,price} = tourData;

   const [readMore,setReadMore] = useState(false);

  return <article className="single-tour">
      <img src={image} alt={name}/>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
         {readMore ? info : `${info.slice(0,100)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button className="delete-btn" onClick={()=>removeTours(id)}>
          Not Interested
        </button>
      </footer>
  </article>
};

export default Tour;
