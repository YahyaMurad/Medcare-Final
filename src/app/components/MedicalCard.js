import MedicalRecord from "./MedicalRecord"

const MedicalCard = ({ cardTitle }) => {
  return (
    <div className="card w-96 bg-slate-200 shadow-xl">
      <div className="card-body">
        <div className="flex items-center gap-4">
          <div className="flex flex-col text-black">
            <h3 className="card-title">{cardTitle}</h3>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {cardTitle === "Recent Appointments" ? (
            <>
              <MedicalRecord name="Dr. John Doe" field="Field Name" date="April 1st, 2024" />
              <MedicalRecord name="Dr. John Doe" field="Field Name" date="April 1st, 2024" />
              <MedicalRecord name="Dr. John Doe" field="Field Name" date="April 1st, 2024" />
            </>
          ) : (
            <>
              <MedicalRecord name="Test Name" date="April 1st, 2024" isTest={true} />
              <MedicalRecord name="Test Name" date="April 1st, 2024" isTest={true} />
              <MedicalRecord name="Test Name" date="April 1st, 2024" isTest={true} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default MedicalCard