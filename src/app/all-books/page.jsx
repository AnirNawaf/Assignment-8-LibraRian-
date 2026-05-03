"use client";

import { useEffect, useState } from "react";
import books from "@/data/books.json";
import Link from "next/link";

export default function AllBooks() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [readList, setReadList] = useState([]);

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("readList")) || [];
    setReadList(savedBooks);
  }, []);

  const bookSource = category === "Reedlist" ? readList : books;

  const filteredBooks = bookSource.filter((book) => {
    const matchSearch = book.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" ||
      category === "Reedlist" ||
      book.category === category;

    return matchSearch && matchCategory;
  });

  const handleRemove = (id) => {
    const updatedList = readList.filter((book) => book.id !== id);
    setReadList(updatedList);
    localStorage.setItem("readList", JSON.stringify(updatedList));
  };

  return (
    <div className="grid md:grid-cols-4 gap-6 p-6">

      <aside className="space-y-3">
        {["All", "Story", "Tech", "Science", "Reedlist"].map((cat) => (
          <button key={cat} onClick={() => setCategory(cat)} className="btn w-full" >
            {cat}
          </button>
        ))}
      </aside>

      <section className="md:col-span-3">
        <input type="text" placeholder="Search books by title"  className="input input-bordered w-full mb-6" onChange={(e) => setSearch(e.target.value)} />

        <div className="grid md:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <div key={book.id} className="card bg-base-100 shadow">
              <img src={book.image_url} alt={book.title} />

              <div className="card-body">
                <h2 className="card-title">{book.title}</h2>

                <div className="flex gap-2">
                  <Link href={`/books/${book.id}`} className="btn btn-primary btn-sm" >
                    Details
                  </Link>

                  {category === "Reedlist" && (
                    <button onClick={() => handleRemove(book.id)} className="btn btn-error btn-sm" >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No books found.
          </p>
        )}
      </section>
    </div>
  );
}