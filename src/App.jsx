import { useState } from "react";
import { tvShows } from "./shows/data";
import ShowList from "./shows/ShowList";
import ShowDetails from "./shows/ShowDetails";
import "./App.css";

/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <>
      <header>
        <h1>React TV</h1>
      </header>
      <main>
        <div className="content">
          <ShowList
            shows={tvShows}
            selectedShow={selectedShow}
            setSelectedShow={setSelectedShow}
          />
          <ShowDetails show={selectedShow} />
        </div>
      </main>
    </>
  );
}
