import Link from "next/link";

type Props = {
  topic: string;
  page: string | undefined;
  prevPage: string | null;
  nextPage: string | null;
};

export default function Footer({ topic, nextPage, page, prevPage }: Props) {
  if (!prevPage && !nextPage) return;

  const pageNumbers: number[] = [];

  if (prevPage && nextPage) {
    for (let i = parseInt(prevPage) + 1; i < parseInt(nextPage); i++) {
      pageNumbers.push(i)
    }
}

  const nextPageArea = nextPage ? (
    <Link
      href={`/results/${topic}/${nextPage}`}
      className={`${!prevPage ? "mx-auto" : ""}`}
    >
      {!prevPage ? "more" : ""} &gt;&gt;&gt;
    </Link>
  ) : null;

  const prevPageArea = prevPage ? (
    <>
      <Link
        href={`/results/${topic}/${prevPage}`}
        className={`${!prevPage ? "mx-auto" : ""}`}
      >
        {!prevPage ? "back" : ""} &lt;&lt;&lt;
      </Link>

      {pageNumbers.map((num) =>
        page && num === parseInt(page) ? (
          num
        ) : (
          <Link
            key={page}
            href={`/results/${topic}/${num}`}
            className="underline"
          >
            {num}
          </Link>
        )
      )}
    </>
  ) : null;

  return (
    <footer className="flex flex-row justify-between items-center px-2 py-4 font-bold w-60 mx-auto">
      {prevPageArea}
      {nextPageArea}
    </footer>
  );
}
