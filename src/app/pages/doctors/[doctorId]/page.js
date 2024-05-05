import Review from "@/app/components/Review"
import Input from "@/app/components/Input"

const DoctorPage = ({ params }) => {
  return (
    <div className="h-full w-full bg-slate-200">
      <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="flex flex-col items-start p-12 text-black">
          <div className="flex items-center space-x-4">
            <div class="avatar">
              <div class="w-36 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Dr. John Doe {params.doctorId}</h1>
              <p className="text-gray-500">Field Name</p>
            </div>
          </div>
          <div className="mt-6">
            <p>
              Proident tempor proident culpa ipsum laborum elit id enim enim enim in. Voluptate esse quis do enim sunt duis officia occaecat occaecat. Aliqua in minim amet eiusmod labore commodo aute ullamco in ad. Velit culpa cillum nostrud nulla incididunt pariatur mollit proident in anim deserunt consequat anim. Laborum enim laborum labore officia enim. Aute adipisicing magna ullamco laboris mollit ad anim dolor deserunt exercitation elit nostrud quis.
            </p>
            <p className="mt-6">
              Proident tempor proident culpa ipsum laborum elit id enim enim enim in. Voluptate esse quis do enim sunt duis officia occaecat occaecat. Aliqua in minim amet eiusmod labore commodo aute ullamco in ad. Velit culpa cillum nostrud nulla incididunt pariatur mollit proident in anim deserunt consequat anim. Laborum enim laborum labore officia enim. Aute adipisicing magna ullamco laboris mollit ad anim dolor deserunt exercitation elit nostrud quis.
            </p>
          </div>
        </div>
        <div className="bg-slate-200 rounded-lg p-6 sm:p-8 m-12">
          <h2 className="text-xl font-bold mb-4 text-black">Book an Appointment</h2>
          <form className="space-y-4">
            <Input htmlFor="name" label="Name" type="text" />
            <Input htmlFor="email" label="Email" type="email" />
            <Input htmlFor="phone" label="Phone" type="tel" />
            <Input htmlFor="date" label="Appointment Date" type="date" />
            <Input htmlFor="time" label="Appointment Time" type="time" />
            <button className="w-full btn text-white transition-all hover:bg-black" type="submit">
              Book Appointment
            </button>
          </form>
        </div>
      </div>
      <div className="p-12 h-full bg-slate-200">
        <div className="flex justify-between">

          <h2 className="text-2xl font-bold mb-4 text-black">Patient Reviews</h2>
          <button className="btn text-white">Add Review</button>
        </div>
        <div className="space-y-6">
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </div>
  )
}

export default DoctorPage