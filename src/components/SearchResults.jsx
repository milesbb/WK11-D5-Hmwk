import { useState } from "react";
import { Alert, Form, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAlbums } from "../redux/actions/loadAlbums";
import AlbumCard from "./AlbumCard";

const SearchResults = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const albums = useSelector((state) => {
    return state.albums.albums.data;
  });
  const loading = useSelector((state) => {
    return state.albums.errorAlbums;
  });
  const errorOccurred = useSelector((state) => {
    return state.albums.loadingAlbums;
  });

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getAlbums(query));
  };

  return (
    <div style={{ width: "82vw", height: "82vh", overflow: "scroll" }}
    className="text-white p-3">
      <Form onSubmit={handleSubmit} className="w-75">
        <Form.Control
        className="bg-dark text-white"
          type="search"
          value={query}
          onChange={handleChange}
          placeholder="type and press Enter"
        />
      </Form>
      <div>
      {loading && (
        <Spinner className="" animation="border" role="status"></Spinner>
      )}

      {!loading && errorOccurred && (
        <Alert className="m-1" variant="danger">
          There was an error retrieving the albums
        </Alert>
      )}

      {!loading && !errorOccurred && albums !== undefined && (
        <Row>
          {albums.map((album) => {
            return <AlbumCard key={album.id} album={album} />;
          })}
        </Row>
      )}
      </div>
    </div>
  );
};

export default SearchResults;
