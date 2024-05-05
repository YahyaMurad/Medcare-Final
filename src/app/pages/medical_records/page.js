"use client"
import React, { useState, useEffect } from "react"

const Page = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newAppointment = {
      date: formData.get("date"),
      time: formData.get("time"),
      doctor: formData.get("doctor"),
      reason: formData.get("reason"),
      test: formData.get("test")
    };
    const updatedAppointments = [...appointments, newAppointment];
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    setAppointments(updatedAppointments);
    e.target.reset();
  };

  return (
    <div className="flex flex-col gap-8 p-4 md:p-8 bg-slate-200">
      <header className="flex items-center justify-between">
        <h1 className="text-black text-2xl font-bold">Medical Records</h1>
      </header>
      <div className="grid gap-4 text-black">
        <div className="border rounded-lg shadow-sm">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-black">Date</th>
                  <th className="text-black">Time</th>
                  <th className="text-black">Doctor</th>
                  <th className="text-black">Reason</th>
                  <th className="text-black">Test</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, index) => (
                  <tr key={index}>
                    <td>{appointment.date}</td>
                    <td>{appointment.time}</td>
                    <td>{appointment.doctor}</td>
                    <td>{appointment.reason}</td>
                    <td>{appointment.test ? appointment.test.name : "No file uploaded"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="card">
          <div>
            <h2 className="card-title text-black">Add Appointment</h2>
          </div>
          <div className="card-body">
            <form className="grid gap-4" onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 w-full">
                  <label className="text-black" htmlFor="date">Date</label>
                  <input className="input w-full text-white placeholder:text-white placeholder-opacity-60" id="date" type="date" name="date" />
                </div>
                <div className="space-y-2 w-full">
                  <label className="text-black" htmlFor="time">Time</label>
                  <input className="input w-full text-white placeholder:text-white placeholder-opacity-60" id="time" type="time" name="time" />
                </div>
              </div>
              <div className="space-y-2 w-full">
                <label className="text-black" htmlFor="doctor">Doctor</label>
                <input className="input w-full text-white placeholder:text-white placeholder-opacity-60" id="doctor" placeholder="Enter doctor name" name="doctor" />
              </div>
              <div className="space-y-2">
                <label className="text-black" htmlFor="reason">Reason</label>
                <textarea className="input w-full min-h-[120px] p-2  text-white placeholder:text-white placeholder-opacity-60" id="reason" placeholder="Enter reason for appointment" name="reason" />
              </div>
              <div className="space-y-2">
                <label className="text-black" htmlFor="test">Test</label>
                <input className="file-input w-full text-white placeholder:text-white placeholder-opacity-60" id="test" type="file" name="test" />
              </div>
              <button className="btn text-white" type="submit">Add Appointment</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
