import React from "react";
import "./RecordItem.css";

const RecordItem = ({ record, total, onDelete }) => {
  const { id, date, running, walking, rest } = record;
  return (
    <div className="record-item">
      <div className="record-col date">{date}</div>
      <div className="record-col run">{running} km</div>
      <div className="record-col walk">{walking} km</div>
      <div className="record-col rest">{rest} 분</div>
      <div className="record-col total">{total} km</div>

      <div className="record-btns">
        <button className="btn btn-edit">수정</button>
        <button className="btn btn-delete" onClick={() => onDelete(id)}>
          삭제
        </button>
      </div>
    </div>
  );
};

export default RecordItem;
