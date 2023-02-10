import { useEffect, useState } from "react";
import { error, loading, searchResponse } from "store/dictionary";
import { URL } from "utils/constants";

export default function Form() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    error.value = false;
    if (search === "") return;
    loading.value = true;
    const timer = setTimeout(() => {
      handleSubmit();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const handleSubmit = async () => {
    await fetch(URL + search).then(async (res) => {
      if (res.status === 200) {
        const data = await res.json();
        console.log(data);
        searchResponse.value = data;
      } else {
        error.value = true;
      }
    });

    loading.value = false;
  };

  return (
    <form
      className="w-full max-w-3xl px-2"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search meanings..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {loading.value ? "Searching..." : "Search"}
        </button>
      </div>
    </form>
  );
}
