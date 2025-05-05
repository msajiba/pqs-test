import DynamicIndex from "@/components/dynamic-index";
// import DynamicPromise from "@/components/dynamic-promise";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// export const experimental_ppr = true;

const pageDynamic = async ({ searchParams }: Props) => {
  return (
    <div>
      <h1>Dynamic page</h1>
      {/* <DynamicPromise searchParams={searchParams} /> */}
      <DynamicIndex searchParams={searchParams} />
    </div>
  );
};

export default pageDynamic;
