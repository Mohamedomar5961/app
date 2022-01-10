import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-crown"
          width="54"
          height="54"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffbf00"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z" />
        </svg>
      </div>
      <div className="navDiv">
        <a href="#top">Top</a>
        <a href="#hot">Hot</a>
        <a href="#manga">Manga</a>
        <a href="#fav">Favorites</a>
      </div>
    </nav>
  );
};

export default Navbar;
