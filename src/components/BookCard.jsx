import Link from "next/link";

export default function BookCard({ book }) {
  return (
    <div className="card bg-base-100 shadow">
      <figure>
        <img src={book.image_url} alt={book.title} />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{book.title}</h2>
        <p>{book.author}</p>

        <div className="card-actions justify-end">
          <Link href={`/books/${book.id}`} className="btn btn-primary btn-sm">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}