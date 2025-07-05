import { Link } from "react-router";

export default function Banner() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url('/src/assets/LM.jpg')",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl font-bold">
              Simplify Borrowing. Empower Readers
            </h1>
            <p className="mb-5">
              Everything your library needs — in one place.
            </p>
            <Link to={"/add-book"}>
              <button className="btn btn-primary">Add Book</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
