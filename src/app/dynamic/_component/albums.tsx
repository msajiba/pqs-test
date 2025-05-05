import { fetchAlbums } from "@/components/API";
import React from "react";

const Albums = async () => {
  const albums = await fetchAlbums();
  return (
    <div className="flex flex-col gap-4 border shadow-md p-4">
      <h1>Albums</h1>
      {albums.length}
    </div>
  );
};

export default Albums;
