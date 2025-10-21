import React, { useState } from "react";
import "./RecordItem.css";
import RecordItemView from "./RecordItemView";
import RecordItemEdit from "./RecordItemEdit";

const RecordItem = ({ record, total, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  return isEditing ? (
    <RecordItemEdit record={record} onCancel={() => setIsEditing(false)} />
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
