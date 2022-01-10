import axios from "axios";
import React, { useState, useEffect } from "react";

const Manga = () => {
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

  return (
    <div className="mangaApp">
      <div id="manga" className="mangaPDiv">
        <p className="mangaP">Manga</p>
      </div>
      <div className="items">
        {mangaInfo.map((item) => {
          return (
            <div className="item">
              <div className="itemBackground">
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
};

export default Manga;
