import Albums from "@/app/dynamic/_component/albums";
import Comments from "@/app/dynamic/_component/comments";
import DynamicSection from "@/app/dynamic/_component/dynamic-section";
import Photos from "@/app/dynamic/_component/photos";
import Posts from "@/app/dynamic/_component/posts";
import Todos from "@/app/dynamic/_component/todos";
import Users from "@/app/dynamic/_component/users";
import React, { Suspense } from "react";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const DynamicPromise = ({ searchParams }: Props) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mb-10">
        <Albums />
        <Comments />
        <Photos />
        <Posts />
        <Todos />
        <Users />
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <DynamicSection searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default DynamicPromise;
