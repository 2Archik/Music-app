import { useState } from "react";
import tracksList from "../../assets/tracksList";
import Track from "../../components/Track/Track";
import style from "./mainPage.module.scss";
import { Input } from "@mui/material";

const runSearch = (query) => {
  if (!query) {
    return tracksList;
  }

  const lowerCaseQuery = query.toLowerCase();

  return tracksList.filter(
    (track) =>
      track.title.toLowerCase().includes(lowerCaseQuery) ||
      track.artists.toLowerCase().includes(lowerCaseQuery)
  );
};

const MainPage = () => {
  const [tracks, setTracks] = useState(tracksList);

  const handleChange = (e) => {
    setTracks(runSearch(e.target.value));
  };

  return (
    <div className={style.search}>
      <Input
        className={style.input}
        placeholder="Поиск"
        onChange={handleChange}
      />
      <div className={style.list}>
        <h3>
          Мои треки <span>{tracksList.length}</span>
        </h3>
        {tracks.map((track) => (
          <Track key={track.id} {...track} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
