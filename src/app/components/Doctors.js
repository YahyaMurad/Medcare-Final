import DoctorCard from "./DoctorCard"

const Doctors = () => {
  return (
    <div className="flex-1 bg-white py-12 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl text-black font-bold mb-8">Top Doctors Near You</h2>
        <div className="grid grid-cols-2 gap-12">
          <DoctorCard
            id="1"
            name="Dr. John Doe"
            field="Field Name"
            content="Duis aliqua commodo incididunt mollit eiusmod duis ad amet excepteur adipisicing nisi proident. Dolore deserunt ut et amet laborum minim"
          />
          <DoctorCard
            id="2"
            name="Dr. John Doe"
            field="Field Name"
            content="Duis aliqua commodo incididunt mollit eiusmod duis ad amet excepteur adipisicing nisi proident. Dolore deserunt ut et amet laborum minim"
          />
          <DoctorCard
            id="3"
            name="Dr. John Doe"
            field="Field Name"
            content="Duis aliqua commodo incididunt mollit eiusmod duis ad amet excepteur adipisicing nisi proident. Dolore deserunt ut et amet laborum minim"
          />
          <DoctorCard
            id="4"
            name="Dr. John Doe"
            field="Field Name"
            content="Duis aliqua commodo incididunt mollit eiusmod duis ad amet excepteur adipisicing nisi proident. Dolore deserunt ut et amet laborum minim"
          />
        </div>
      </div>
    </div>
  )
}

export default Doctors