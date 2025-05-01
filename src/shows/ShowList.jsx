import "./shows.css";

/**
 * Component that displays a list of shows and allows selection
 * @param {Object} props
 * @param {Object[]} props.shows - Array of show objects
 * @param {Object} props.selectedShow - Currently selected show
 * @param {Function} props.setSelectedShow - Function to update the selected show
 */
export default function ShowList({ shows, selectedShow, setSelectedShow }) {
  return (
    <section className="show-list">
      <h2>Available Shows</h2>
      <ul>
        {shows.map((show) => (
          <li
            key={show.name}
            onClick={() => setSelectedShow(show)}
            className={show === selectedShow ? "selected" : ""}>
            <h3>{show.name}</h3>
            <p>{show.genre}</p>
            <p>{show.episodes.length} episodes</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
