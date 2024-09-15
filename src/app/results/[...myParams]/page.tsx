import Gallery from "@/app/Components/Gallery";
import React from "react";

type Props = {
  params: {
    myParams: (string | undefined)[];
  };
};

export function generateMetadata({ params: { myParams } }: Props) {
  const topic = myParams?.[0] ?? "curated";
  const page = myParams?.[1] ?? "1";

  return {
    title: `Results for ${topic} - Page ${page}`,
  };
}

const SearchResults: React.FC<Props> = ({ params: { myParams } }) => {
  const topic = myParams?.[0] ?? "curated";
  const page = myParams?.[1] ?? "1";

  return <Gallery topic={topic} page={page} />;
};

export default SearchResults;
