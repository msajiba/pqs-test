import { fetchPhotos } from "@/components/API";
import React from "react";

const Photos = async () => {
  const photos = await fetchPhotos();
  return (
    <div className="flex flex-col gap-4 border shadow-md p-4">
      <h1>Photos</h1>
      {photos.length}
    </div>
  );
};

export default Photos;
