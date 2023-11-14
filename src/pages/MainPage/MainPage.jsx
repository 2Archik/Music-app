import tracksList from "../../assets/tracksList";
import Track from "../../components/Track/Track";
import style from "./mainPage.module.scss";

const MainPage = () => (
  <div className={style.search}>
    <>Поиск треков</>
    <div className={style.list}>
      {tracksList.map((track) => (
        <Track key={track.id} {...track} />
      ))}
    </div>
  </div>
);

export default MainPage;
