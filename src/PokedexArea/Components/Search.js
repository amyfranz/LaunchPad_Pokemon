import React from "react";
import Input from "../../CommonComponents/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Search({ search, onChange, clickSearch }) {
  return (
    <div className="search">
      <Input value={search} onchange={onChange} name="search" />
      <div className="button" onClick={clickSearch}>
        <div className="btn">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    </div>
  );
}
