import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'


function App() {
  const [isLoading,setIsLoading] = useState(true);
  const [toursData,setToursData] = useState([]);
  

  const fetchData = async () => {
      const {data} = await axios.get(url);
      setToursData(data);
      setIsLoading(false);
  }

  const removeTours = (id) => {
      const newTour = toursData.filter(tour => tour.id !== id)
      setToursData(newTour);
  }

  const refreshTour = () => {
    fetchData();
  }

  useEffect(() => {
    fetchData();
  },[] )

  return (
    <main>
      <section>
            {isLoading ? <Loading /> : 
              <Tours toursData={toursData} removeTours={removeTours} refreshTour={refreshTour} />
            }
      </section>
    </main>
  )
}

export default App
