import React, { useState } from "react";
import "./RecordForm.css";
import RecordList from "./RecordList";

const INITIAL_FORM = {
  date: "",
  runDistance: 0,
  walkDistance: 0,
  restTime: 0,
};

const RecordForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [records, setRecords] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      id: Date.now(),
      date: formData.date,
      running: formData.runDistance,
      walking: formData.walkDistance,
      rest: formData.restTime,
    };
    setRecords((prev) => [...prev, newRecord]);
    setFormData(INITIAL_FORM);
  };

  return (
    <div>
      <form className="record-form" onSubmit={handleSubmit}>
        <label>
          <span>날짜</span>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <span>뛴 거리 (km)</span>
          <input
            type="number"
            name="runDistance"
            value={formData.runDistance}
            onChange={handleChange}
            min={0}
            step={0.1}
          />
        </label>

        <label>
          <span>걸은 거리 (km)</span>
          <input
            type="number"
            name="walkDistance"
            value={formData.walkDistance}
            onChange={handleChange}
            min={0}
            step={0.1}
          />
        </label>

        <label>
          <span>쉬는 시간 (분)</span>
          <input
            type="number"
            name="restTime"
            value={formData.restTime}
            onChange={handleChange}
          />
        </label>

        <button type="submit">추가</button>
      </form>

      <RecordList records={records} />
    </div>
  );
};

export default RecordForm;
