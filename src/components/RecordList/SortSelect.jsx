import React from "react";
import Select from "react-select";
import "./SortSelect.css";

const OPTIONS = [
  { value: "date", label: "날짜(최신순)" },
  { value: "total", label: "총 거리" },
  { value: "running", label: "러닝 거리" },
];

const SortSelect = ({ value, onChange }) => {
  const selected = OPTIONS.find((o) => o.value === value);
  return (
    <div className="sort-select">
      <Select
        options={OPTIONS}
        value={selected}
        onChange={(opt) => onChange(opt.value)}
        isSearchable={false}
        classNamePrefix="rs" // CSS에서 이 접두사로 스타일 지정
        menuPortalTarget={document.body}
        menuPosition="fixed"
      />
    </div>
  );
};

export default SortSelect;
