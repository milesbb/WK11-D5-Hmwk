import { useEffect, useState } from "react";
import { Alert, Button, Card, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAlbums } from "../redux/actions/loadAlbums";
import AlbumCard from "./AlbumCard";

const HomePage = () => {
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
  console.log(albums);
  useEffect(() => {
    dispatch(getAlbums("Queen"));
  }, []);

  return (
    <div
      style={{ width: "82vw", height: "82vh", overflow: "scroll" }}
      className="text-white p-3"
    >
      <h1 className="mb-4">Good Morning</h1>
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
          {albums.slice(0, 5).map((album) => {
            return <AlbumCard key={album.id} album={album} />;
          })}
        </Row>
      )}

      <h2 className="my-5">Recently Played</h2>
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
          {albums.slice(5, 10).map((album) => {
            return <AlbumCard key={album.id} album={album} />;
          })}
        </Row>
      )}
      <h2 className="my-5">Albums to try</h2>
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
          {albums.slice(10, 15).map((album) => {
            return <AlbumCard key={album.id} album={album} />;
          })}
        </Row>
      )}
      <h2 className="my-5">Albums of this week</h2>
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
          {albums.slice(15, 20).map((album) => {
            return <AlbumCard key={album.id} album={album} />;
          })}
        </Row>
      )}
    </div>
  );
};

export default HomePage;
