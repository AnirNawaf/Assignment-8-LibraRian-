"use client";

import books from "@/data/books.json";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function BookDetails() {
  const params = useParams();
  const id = params.id;

  const book = books.find((item) => String(item.id) === String(id));

  const [quantity, setQuantity] = useState(book?.available_quantity || 0);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Book not found</h1>
      </div>
    );
  }

  const relatedBooks = books.filter((b) => b.id !== book.id).slice(0, 4);

  const AddReadList = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      toast.error("Please login first to add this book");
      window.location.href = "/login";
      return;
    }

    if (quantity <= 0) {
      toast.error("No copies available");
      return;
    }

    const oldList = JSON.parse(localStorage.getItem("readList")) || [];

    const alreadyAdded = oldList.find((item) => item.id === book.id);

    if (alreadyAdded) {
      toast.error("This book is already in Readlist");
      return;
    }

    const updatedBook = {
      ...book, available_quantity: quantity - 1,
    };

    const newList = [...oldList, updatedBook];
    localStorage.setItem("readList", JSON.stringify(newList));

    setQuantity(quantity - 1);

    toast.success("Book added to Readlist");
  };

  const Readnow = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      toast.error("Please login first to read this book");
      window.location.href = "/login";
      return;
    }

    window.open(book.read_url, "_blank");
  };

  return (
    <div className="bg-[#f4f4f4] min-h-screen px-6 md:px-16 py-10">

      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex justify-center">

          <img src={book.image_url} alt={book.title} className="w-80 shadow-lg" />

        </div>

        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800"> {book.title} </h1>

          <p className="text-gray-600 mt-2">by {book.author}</p>

          <p className="mt-4 text-gray-700">{book.description}</p>

          <p className="mt-4 text-sm text-gray-500"> {quantity} copies available </p>

          <div className="flex gap-4 mt-6">
            <button onClick={Readnow} className=" cursor-pointer transition hover:scale-120 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md text-sm font-semibold" >
              Read for free
            </button>

            <button onClick={AddReadList} className=" cursor-pointer transition hover:scale-120 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md text-sm font-semibold" >
              Add TO ReedLest
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6"> You may also like..... </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedBooks.map((item) => (
            <Link key={item.id} href={`/books/${item.id}`}>
              <div className="cursor-pointer group">
                <img src={item.image_url} alt={item.title} className="w-full shadow-md group-hover:scale-105 transition" />
                <p className="text-sm mt-2">{item.title}</p>
                <p className="text-xs text-gray-500">by {item.author}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}