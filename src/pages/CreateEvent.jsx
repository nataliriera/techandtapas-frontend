import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./auth.css";

export default function CreateEvent() {
  const [form, setForm] = useState({
    title: "",
    desc: "",
    date: "",
    time: "",
    address: "",
    lat: "",
    long: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPin = { ...form };

    await fetch(`${process.env.REACT_APP_SERVER_URL}/pins/createpin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPin),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({
      title: "",
      desc: "",
      date: "",
      time: "",
      address: "",
      lat: "",
      long: "",
    });
    navigate("/maptomeet");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h1>Create New Event</h1>
      <form onSubmit={onSubmit} className="auth__form">
        <label htmlFor="title">Event: </label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={form.title}
          onChange={(e) => updateForm({ title: e.target.value })}
        />
        <label htmlFor="desc">Description</label>
        <textarea
          type="text"
          className="form-control"
          id="description"
          value={form.desc}
          onChange={(e) => updateForm({ desc: e.target.value })}
        />

        <label htmlFor="date">Date</label>
        <input
          type="text"
          className="form-control"
          id="date"
          value={form.date}
          onChange={(e) => updateForm({ date: e.target.value })}
        />

        <label htmlFor="time">Time</label>
        <input
          type="text"
          className="form-control"
          id="time"
          value={form.time}
          onChange={(e) => updateForm({ time: e.target.value })}
        />

        <label htmlFor="address">Address</label>
        <textarea
          type="text"
          className="form-control"
          id="address"
          value={form.address}
          onChange={(e) => updateForm({ address: e.target.value })}
        />

        <label htmlFor="lat">Latitud</label>
        <input
          type="text"
          className="form-control"
          placeholder="Example: 26.9876"
          id="lat"
          value={form.lat}
          onChange={(e) => updateForm({ lat: e.target.value })}
        />

        <label htmlFor="long">Longitud</label>
        <input
          type="text"
          className="form-control"
          placeholder="Example: -80.8765"
          id="long"
          value={form.long}
          onChange={(e) => updateForm({ long: e.target.value })}
        />

        <button className="button__submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
