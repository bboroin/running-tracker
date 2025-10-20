import React from "react";
import RecordItem from "./RecordItem";
import "./RecordList.css";

const RecordList = ({ records }) => {
  return (
    <div className="record-list">
      <div className="record-list__header">
        <div className="record-col date">날짜</div>
        <div className="record-col run">뛴 거리</div>
        <div className="record-col walk">걸은 거리</div>
        <div className="record-col rest">쉬는 시간</div>
      </div>

      <div className="record-list__body">
        {records.map((record) => (
          <RecordItem key={record.id} record={record} />
        ))}
      </div>
    </div>
  );
};

export default RecordList;
