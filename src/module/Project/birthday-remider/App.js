import React, { useState } from "react";
import data from "./data";
import List from "./List";
import Style from "./birtday.module.css";
function App() {
  const [people, setPeople] = useState(data);

  return (
    <div className={Style.main}>
      <h1>Birthday Remider App</h1>
      <section className={Style.container}>
        <h3>{people.length} birthday today</h3>
        <List people={people} />

        {people.length === 0 ? (
          <button onClick={() => setPeople(data)}>Refresh</button>
        ) : (
          <button onClick={() => setPeople([])}>Clear all</button>
        )}
      </section>
    </div>
  );
}

export default App;
