import React from "react";

function Header() {
  return (
    <>
      <main>
        <header>
          <nav
            className="flex 
          mx-auto 
          items-center
          justify-between
          w-full
          shadow-lg"
          >
            <div
              className="flex
            items-center
            justify-center
            gap-24
            ml-12
            py-4
            text-xl
            font-bold"
            >
              <a  href="/test"
              className="px-4"
              >Maternity</a>
              <a href="/test"
              className="border-2
              rounded-xl
              px-5
              py-1
              hover:border-l-indigo-700
              hover:border-r-indigo-700
              hover:bg-slate-100"
              >Blogs</a>
              <a href="/test"
              className="border-2
              rounded-xl
              px-5
              py-1
              hover:border-l-indigo-700
              hover:border-r-indigo-700
              hover:bg-slate-100"
              >Courses</a>
            </div>
            <div
              className="items-center
            justify-center
            p-4"
            >
              <a href="/test">User_Profile</a>
            </div>
          </nav>
        </header>
      </main>
    </>
  );
}

export default Header;
