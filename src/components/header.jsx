import "./header.css";

function Header() {
  return (
    <>
      <div className="logo">
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
        <div className="title">
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap');
          </style>
          <h1>NOOB CODER</h1>
        </div>
      </div>
    </>
  );
}

export default Header;
