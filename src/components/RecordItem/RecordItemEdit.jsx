import React from "react";

const RecordItemEdit = ({ record, draft, onCancel, onSave, onChange }) => {
  const { date } = record;

  return (
    <div className="record-item editing">
      <div className="record-col date">{date}</div>
      <div className="record-col run">
        <input
          type="number"
          name="running"
          min="0"
          step="0.1"
          value={draft.running}
          onChange={onChange}
          className="record-input"
        />
        km
      </div>
      <div className="record-col walk">
        <input
          type="number"
          name="walking"
          min="0"
          step="0.1"
          value={draft.walking}
          onChange={onChange}
          className="record-input"
        />
        km
      </div>
      <div className="record-col rest">
        <input
          type="number"
          name="rest"
          min="0"
          step="1"
          value={draft.rest}
          onChange={onChange}
          className="record-input"
        />
        분
      </div>
      <div className="record-col total">-</div>

      <div className="record-btns">
        <button className="btn btn-save" onClick={onSave}>
          저장
        </button>
        <button className="btn btn-cancel" onClick={onCancel}>
          취소
        </button>
      </div>
    </div>
  );
};

export default RecordItemEdit;
