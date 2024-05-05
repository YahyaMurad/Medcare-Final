import Link from "next/link"
import DoctorResultCard from "@/app/components/DoctorResultCard"

const SearchResults = () => {
  return (
    <div className="bg-gray-100 py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h1 className="text-black text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Find the right doctor for you</h1>
          <p className="mt-2 text-slate-500 md:text-lg lg:text-xl">
            Search our database of top-rated doctors and book an appointment today.
          </p>
        </div>
        <div className="mb-8 md:mb-10 lg:mb-12">
          <div className="relative">
            <label class="bg-slate-200 w-full text-black input input-bordered flex items-center gap-2">
              <input type="text" class="grow" placeholder="Search" />
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
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <DoctorResultCard name="Dr. John Doe" field="Field Name" />
          <DoctorResultCard name="Dr. John Doe" field="Field Name" />
          <DoctorResultCard name="Dr. John Doe" field="Field Name" />
          <DoctorResultCard name="Dr. John Doe" field="Field Name" />
          <DoctorResultCard name="Dr. John Doe" field="Field Name" />
          <DoctorResultCard name="Dr. John Doe" field="Field Name" />
          <DoctorResultCard name="Dr. John Doe" field="Field Name" />
          <DoctorResultCard name="Dr. John Doe" field="Field Name" />
        </div>

      </div>
    </div>
  )
}

export default SearchResults