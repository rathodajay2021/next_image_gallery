"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/results/${search}`);
    setSearch("");
  };

  return (
    <form
      className="flex justify-center md:justify-between"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setSearch(event.target.value)
        }
        placeholder="Search"
        className="bg-white p-2 w-[260px] sm:w-80 text-xl rounded-xl text-black"
      />
    </form>
  );
};

export default Search;
