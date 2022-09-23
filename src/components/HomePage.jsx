import { useState } from "react";

const HomePage = () => {
  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorOccurred, setError] = useState(false)

  return (
    <div
      style={{ width: "82vw", height: "82vh", overflow: "scroll" }}
      className="text-white p-3"
    >
      <h1>Good Morning</h1>
      <div></div>
      <h2>Recently Played</h2>
      <div></div>
      <h2>Albums to try</h2>
      <div></div>
      <h2>Albums of this week</h2>
      <div></div>
    </div>
  );
};

export default HomePage;
