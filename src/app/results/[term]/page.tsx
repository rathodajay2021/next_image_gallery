import Gallery from "@/app/Components/Gallery";
import React from "react";

type Props = {
  params: {
    term: string;
  };
};

export function generateMetadata({ params: { term } }: Props) {
  return {
    title: `Results for ${term}`,
  };
}

const SearchResults: React.FC<Props> = ({ params }) => {
  const { term } = params;

  return <Gallery topic={term} />;
};

export default SearchResults;
