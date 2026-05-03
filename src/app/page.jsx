"use client";

import books from "@/data/books.json";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const featuredBooks = books.slice(0, 4);

  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <section className="hero min-h-[70vh] bg-base-200">
        <div className="text-center w-full max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold">Find Your Next Read</h1>

          <p className="py-6">
            Borrow or Read books online anytime, anywhere.
          </p>

          <input type="text"  placeholder="Search books by title"  className="input input-bordered w-full mb-6" onChange={(e) => setSearch(e.target.value)}/>

          {search && (
            <div className="grid md:grid-cols-3 gap-4">
              {filteredBooks.slice(0, 6).map((book) => (
                <div key={book.id} className="card bg-base-100 shadow">
                  <img src={book.image_url} alt={book.title} />
                  <div className="card-body">
                    <h2 className="card-title text-sm">{book.title}</h2>

                    <Link href={`/books/${book.id}`}  className="btn btn-primary btn-sm" >
                      Details
                    </Link>
                  </div>
                </div>
              ))}

              {filteredBooks.length === 0 && (
                <p className="col-span-full text-gray-500">
                  No books found.
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      <marquee className="py-4  bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white shadow  text-white">
        New Arrivals: The LibraRian | Special Discount on Memberships ! Our new book added (Fossil plants, Vol. 3 , Kara Kush, The load of chips ) | upcamming books ( Harry Potter )
      </marquee>

      <section className="py-12 px-6">

        <h2 className="text-3xl font-bold mb-6">Featured Books</h2>

        <div className="grid md:grid-cols-4 gap-6">

          {featuredBooks.map((book) => (
            <div key={book.id} className="card bg-base-100 shadow">

              <img src={book.image_url} alt={book.title} />

              <div className="card-body">

                <h3 className="card-title">{book.title}</h3>

                <Link href={`/books/${book.id}`}  className="btn btn-sm btn-primary" >
                  View Details
                </Link>
              </div>
            </div>
          ))}


        </div>
        <div className="flex mt-10 justify-end">
          <Link href="/all-books" className="btn btn-primary">
            Visit All Books <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>
    </main>
  );
}