import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const SearchBar = () => {
  /*
    This piece of state is bound to the value prop in the `input` statement.
    The value is initially set to an empty string.
    `setValue` is used in the following `handleInputChange` function to update the state.
    */
  const [searchTerm, setSearchTerm] = useState("");

  /*This function is used in the `onChange` event listener.
    Because the function runs on every keystroke,
        the React state (and displayed value) gets updated as the user types.
    */
  const handleInputChange = (e) => setSearchTerm(e.currentTarget.value);

  return (
    <div>
      <InputGroup size="lg" className="mb-3">
        <FormControl
          size="lg"
          aria-label="searchbar"
          aria-describedby="basic-addon2"
          value={searchTerm}
          placeholder={"Type your search here."}
          onChange={handleInputChange}
        />
      </InputGroup>
    </div>
  );
};

export default SearchBar;
