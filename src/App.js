import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [info, setInfo] = useState([]);
  const [top, setTop] = useState([]);
  const [hot, setHot] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [star, setStar] = useState("white");
  const [mangaInfo, setMangaInfo] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.get(
        "https://api.jikan.moe/v3/top/manga/1/bypopularity"
      );
      setMangaInfo(response.data.top);
      console.log(response.data.top);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(async () => {
    try {
      const response = await axios.get(
        "https://api.jikan.moe/v3/top/anime/1/bypopularity"
      );
      setInfo(response.data.top);
      console.log(response.data.top);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const onChange = async (url) => {
    const response = url;
    console.log(response);
  };

  const favoriteTodo = async (itemone) => {
    const response = itemone;
    if (favorite.includes(itemone)) {
      setFavorite(favorite.filter((i) => i !== itemone));
    } else {
      setFavorite([...favorite, itemone]);
    }
  };

  console.log(favorite);
  return (
    <div className="App">
      <div className="placeHolder"></div>
      {/* <div className="intro">
        {info.map((items) => {
          return items.rank == 1 ? (
            <div className="se">
              {" "}
              <div className="col">
                <h1>watch the top animes out</h1>
                <p>watch the top animes out</p>
                <button>Watch now</button>
              </div>
              <div className="im">
                <img src={items.image_url} />{" "}
              </div>
            </div>
          ) : (
            <div></div>
          );
        })}
      </div> */}

      {/* <div className="welcomeDiv">
        <p>FIND THE HOTTEST ANIMES TO WATCH HERE!</p>
      </div> */}
      <div className="topDiv">
        <p>Top Anime</p>
      </div>

      <div className="items two">
        {info.map((item) => {
          console.log(item);
          return item.rank < 25 ? (
            <div className="item">
              <div id="two" className="itemBackground">
                <button
                  className="transparent"
                  onClick={() => {
                    favoriteTodo(item);
                  }}
                >
                  {item.star == true ? (
                    <svg
                      onClick={() =>
                        star === !"yellow"
                          ? setStar("yellow")
                          : setStar("white")
                      }
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-star"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      fill={star}
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-star"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      fill={`${star}`}
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                    </svg>
                  )}
                </button>
                <img src={item.image_url}></img>
                <div className="nameDiv">
                  <a target="_blank" href={item.url}>
                    {item.title}
                  </a>
                </div>

                <div className="pInfo">
                  <div className="dateDiv">
                    <p className="startDate">Start: {item.start_date}</p>
                    <p className="endDate">End: {item.end_date}</p>
                  </div>
                  <div className="episodeDiv">
                    <p className="episodes">episodes: {item.episodes}</p>
                    <p className="type">RANK: {item.rank}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          );
        })}
      </div>
      <div id="fav" className="favoriteDiv">
        <p>Favorites</p>
      </div>
      <div className="items two">
        {favorite.map((item) => {
          return (
            <div className="item">
              <div id="two" className="itemBackground">
                <button
                  className="transparent"
                  onClick={() => {
                    favoriteTodo(item);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-star"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    fill="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                  </svg>
                </button>
                <img src={item.image_url}></img>
                <div className="nameDiv">
                  <a target="_blank" href={item.url}>
                    {item.title}
                  </a>
                </div>

                <div className="pInfo">
                  <div className="dateDiv">
                    <p className="startDate">Start: {item.start_date}</p>
                    <p className="endDate">End: {item.end_date}</p>
                  </div>
                  <div className="episodeDiv">
                    <p className="episodes">episodes: {item.episodes}</p>
                    <p className="type">RANK: {item.rank}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div id="hot" className="hotDiv">
        <p>Hottest Anime</p>
      </div>

      <div className="items">
        {info.map((item) => {
          return item.rank > 25 ? (
            <div className="item">
              <div className="itemBackground">
                <button
                  className="transparent"
                  onClick={() => {
                    favoriteTodo(item);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-star"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    fill="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                  </svg>
                </button>
                <img src={item.image_url}></img>
                <a target="_blank" href={item.url}>
                  {item.title}
                </a>

                <div className="pInfo">
                  <div className="dateDiv">
                    <p className="startDate">Start: {item.start_date}</p>
                    <p className="endDate">Start: {item.end_date}</p>
                  </div>
                  <div className="episodeDiv">
                    <p className="episodes">episodes: {item.episodes}</p>
                    <p className="type">RANK: {item.rank}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          );
        })}
      </div>
      <div id="manga" className="mangaPDiv">
        <p className="mangaP">Manga</p>
      </div>
      <div className="items">
        {mangaInfo.map((item) => {
          return (
            <div className="item">
              <div className="itemBackground">
                <button
                  className="transparent"
                  onClick={() => {
                    favoriteTodo(item);
                  }}
                >
                  {item.star == true ? (
                    <svg
                      onClick={() =>
                        star === !"yellow"
                          ? setStar("yellow")
                          : setStar("white")
                      }
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-star"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      fill={star}
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-star"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      fill={`${star}`}
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                    </svg>
                  )}
                </button>
                <img src={item.image_url}></img>
                <a target="_blank" href={item.url}>
                  {item.title}
                </a>

                <div className="pInfo">
                  <div className="dateDiv">
                    <p className="startDate">Start: {item.start_date}</p>
                    <p className="endDate">Start: {item.end_date}</p>
                  </div>
                  <div className="episodeDiv">
                    <p className="episodes">Volumes: {item.volumes}</p>
                    <p className="type">Type: {item.type}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
