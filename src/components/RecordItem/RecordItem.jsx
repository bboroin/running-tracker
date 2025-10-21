import React, { useState } from "react";
import "./RecordItem.css";
import RecordItemView from "./RecordItemView";
import RecordItemEdit from "./RecordItemEdit";

const RecordItem = ({ record, total, onDelete, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState({
    running: record.running,
    walking: record.walking,
    rest: record.rest,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDraft((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave({
      ...record,
      running: draft.running,
      walking: draft.walking,
      rest: draft.rest,
    });
    setIsEditing(false);
  };

  return isEditing ? (
    <RecordItemEdit
      record={record}
      draft={draft}
      onSave={handleSave}
      onCancel={() => setIsEditing(false)}
      onChange={handleChange}
    />
  ) : (
    <RecordItemView
      record={record}
      total={total}
      onEdit={() => setIsEditing(true)}
      onDelete={onDelete}
    />
  );
};

export default RecordItem;
