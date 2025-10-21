import React, { useState, useMemo } from "react";
import RecordItem from "../RecordItem/RecordItem";
import SortSelect from "./SortSelect";
import "./RecordList.css";

const RecordList = ({ records, onDelete }) => {
  const [sortOption, setSortOption] = useState("date");

  const sortedRecords = useMemo(() => {
    const sorted = [...records];
    switch (sortOption) {
      case "total":
        return sorted.sort(
          (a, b) =>
            Number(b.running) +
            Number(b.walking) -
            (Number(a.running) + Number(a.walking))
        );
      case "running":
        return sorted.sort((a, b) => b.running - a.running);
      case "date":
      default:
        return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  }, [records, sortOption]);

  return (
    <>
      <div className="toolbar">
        <SortSelect value={sortOption} onChange={setSortOption} />
      </div>

      <div className="record-list">
        <div className="record-list__header">
          <div className="record-col date">날짜</div>
          <div className="record-col run">러닝</div>
          <div className="record-col walk">걷기</div>
          <div className="record-col rest">휴식</div>
          <div className="record-col total">총 합</div>
        </div>

        <div className="record-list__body">
          {sortedRecords.length > 0 ? (
            sortedRecords.map((record) => {
              const total = (
                Number(record.running) + Number(record.walking)
              ).toFixed(1);
              return (
                <RecordItem
                  key={record.id}
                  record={record}
                  total={total}
                  onDelete={onDelete}
                />
              );
            })
          ) : (
            <p className="record-list__empty">저장된 기록이 없습니다.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default RecordList;
