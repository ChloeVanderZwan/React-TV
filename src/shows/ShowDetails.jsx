import "./shows.css";
import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

/**
 * Component that displays details about a selected show and its episodes
 * @param {Object} props
 * @param {Object} props.show - The selected show object
 */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  if (!show) {
    return (
      <section className="show-details">
        <h2>No Show Selected</h2>
        <p>Please select a show from the list to view its details.</p>
      </section>
    );
  }

  return (
    <section className="show-details">
      <h2>{show.name}</h2>
      <p>Genre: {show.genre}</p>
      <div className="episodes-container">
        <EpisodeList
          name={show.name}
          episodes={show.episodes}
          selectedEpisode={selectedEpisode}
          setSelectedEpisode={setSelectedEpisode}
        />
        <EpisodeDetails episode={selectedEpisode} />
      </div>
    </section>
  );
}
