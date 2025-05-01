"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Input from "./Input";
import { useDebounce } from "use-debounce";

function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState<string>(
    searchParams.get("search") || ""
  );

  let [debouncedSearch] = useDebounce(search, 300);

  useEffect(() => {
    // Create a new URLSearchParams object
    const params = new URLSearchParams(searchParams.toString());

    // Update or remove the 'q' parameter based on search value
    if (debouncedSearch) {
      params.set("search", debouncedSearch);
    } else {
      params.delete("search");
    }

    // Update the URL without refreshing the page
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    router.push(newUrl);
  }, [debouncedSearch, router, searchParams]);

  return (
    <div>
      <Input
        value={search}
        onChange={(e) => setSearch(e.target?.value)}
        placeholder="search anything globally"
      />
    </div>
  );
}

export default SearchInput;
