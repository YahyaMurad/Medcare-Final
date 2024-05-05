import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex-1 bg-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-black">Find the Right Doctor for You</h1>
        <p className="text-gray-600 mb-8">
          Browse and select doctors based on their competencies, availability, and patient reviews.
        </p>
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center shadow-2xl">
          <label class="bg-slate-200 w-full text-black input input-bordered flex items-center gap-2">
            <input type="text" class="grow" placeholder="Search" />
            <Link href="pages/search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70 cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Hero