import React from 'react';
import Tour from './Tour';
const Tours = ({toursData,removeTours,refreshTour}) => {
  return <>
      <div className="title">
        {toursData.length > 0 ? <>
                <h2>Our Tours</h2>
                <div className="underline"></div>
             </> : <>
                <h2>No Tours Left</h2>
                <button className="btn" onClick={refreshTour}>Refresh</button>
             </> 
        }  
      </div>
      <div>
        {toursData.map(tourData => {
          return <Tour key ={tourData.id} tourData={tourData} removeTours={removeTours} />;
            }
          )
        }
      </div>
  </>
};

export default Tours;
