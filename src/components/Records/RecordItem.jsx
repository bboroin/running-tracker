import React from "react";

const RecordItem = ({ record }) => {
  const { date, running, walking, rest } = record;
  return (
    <div className="record-item">
      <div className="record-col date">{date}</div>
      <div className="record-col run">{running} km</div>
      <div className="record-col walk">{walking} km</div>
      <div className="record-col rest">{rest} 분</div>
    </div>
  );
};

export default RecordItem;
