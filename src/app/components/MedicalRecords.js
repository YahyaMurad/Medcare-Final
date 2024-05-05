import MedicalCard from "./MedicalCard"

const MedicalRecords = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl text-black font-bold mb-8">My Medical Records</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MedicalCard cardTitle="Recent Appointments" />
          <MedicalCard cardTitle="Test Results" />
        </div>
      </div>
    </section>
  )
}

export default MedicalRecords