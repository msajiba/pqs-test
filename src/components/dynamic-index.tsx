import DynamicSection from "@/app/dynamic/_component/dynamic-section";
import {
  fetchAlbums,
  fetchComments,
  fetchPhotos,
  fetchPosts,
  fetchTodos,
  fetchUsers,
} from "@/components/API";
import React, { Suspense } from "react";
import {
  getBodyType,
  getMakers,
  getMaxAndMinPrice,
  getThirdPartBodyType,
  getThirdPartMakers,
} from "./pqs-api";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const experimental_ppr = true;

const DynamicIndex = async ({ searchParams }: Props) => {
  const [
    comments,
    posts,
    users,
    todos,
    albums,
    photos,
    bulkMakerData,
    bulkBodyTypeData,
    orderMakerData,
    orderBodyTypeData,
    maxMinPrice,
    maxMinMileage,
    maxMinEngineCC,
  ] = await Promise.all([
    fetchComments(),
    fetchPosts(),
    fetchUsers(),
    fetchTodos(),
    fetchAlbums(),
    fetchPhotos(),
    getThirdPartMakers(),
    getThirdPartBodyType(),
    getMakers(),
    getBodyType(),
    getMaxAndMinPrice("/api/common/getFobPriceRange"),
    getMaxAndMinPrice("/api/common/getMileage"),
    getMaxAndMinPrice("/api/common/getEngineSizeCC"),
  ]);

  const getLength = () => {
    return {
      comments: comments.length,
      posts: posts.length,
      users: users.length,
      todos: todos.length,
      albums: albums.length,
      photos: photos.length,
    };
  };

  const length = getLength();

  console.log(
    bulkMakerData,
    bulkBodyTypeData,
    orderMakerData,
    orderBodyTypeData,
    maxMinPrice,
    maxMinMileage,
    maxMinEngineCC
  );

  return (
    <div>
      <h1>Dynamic page</h1>

      <h2>Comments: {length.comments}</h2>
      <h2>Posts: {length.posts}</h2>
      <h2>Users: {length.users}</h2>
      <h2>Todos: {length.todos}</h2>
      <h2>Albums: {length.albums}</h2>
      <h2>Photos: {length.photos}</h2>

      <Suspense fallback={<div>Loading...</div>}>
        <DynamicSection searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default DynamicIndex;
