import React, { useState, useEffect } from "react";
import "./RecordForm.css";
import RecordList from "../RecordList/RecordList";

const INITIAL_FORM = {
  date: "",
  runDistance: 0,
  walkDistance: 0,
  restTime: 0,
};

const STORAGE_KEY = "runningRecords";

const RecordForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);

  // localStorage에서 초기값을 읽음 (lazy initializer)
  const [records, setRecords] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // records 변경 시 저장
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  }, [records]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 중복 날짜 검사
    const exists = records.some((r) => r.date === formData.date);
    if (exists) {
      alert("해당 날짜의 기록이 존재합니다. 다른 날짜를 선택해주세요.");
      return;
    }

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

  // 기록 삭제
  const handleDelete = (id) => {
    if (!confirm("해당 기록을 삭제하시겠습니까?")) {
      return;
    } else {
      setRecords((prev) => prev.filter((r) => r.id !== id));
      alert("삭제가 완료되었습니다.");
    }
  };

  // 기록 수정
  const handleSave = (updated) => {
    setRecords((prev) => prev.map((r) => (r.id === updated.id ? updated : r)));
  };

  return (
    <div>
      <form className="record-form" onSubmit={handleSubmit}>
        <label className="record-label">
          <span>날짜</span>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="record-input"
          />
        </label>

        <label className="record-label">
          <span>뛴 거리 (km)</span>
          <input
            type="number"
            name="runDistance"
            value={formData.runDistance}
            onChange={handleChange}
            min={0}
            step={0.1}
            className="record-input"
          />
        </label>

        <label className="record-label">
          <span>걸은 거리 (km)</span>
          <input
            type="number"
            name="walkDistance"
            value={formData.walkDistance}
            onChange={handleChange}
            min={0}
            step={0.1}
            className="record-input"
          />
        </label>

        <label className="record-label">
          <span>쉬는 시간 (분)</span>
          <input
            type="number"
            name="restTime"
            min={0}
            value={formData.restTime}
            onChange={handleChange}
            className="record-input"
          />
        </label>

        <button type="submit" className="btn btn-submit">
          추가
        </button>
      </form>

      <RecordList
        records={records}
        onDelete={handleDelete}
        onSave={handleSave}
      />
    </div>
  );
};

export default RecordForm;
