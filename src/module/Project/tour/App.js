import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import Style from "./tour.module.css";
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const fetchTours = async () => {
    setLoading(true);
    try {
      const respone = await fetch(url);
      const tours = await respone.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }

    console.log(tours);
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <div className={Style.main}>
        <Loading />
      </div>
    );
  }
  if (tours.length === 0) {
    return (
      <div className={Style.main}>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className={Style.main}>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
