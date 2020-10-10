import React, { useContext } from "react";
import { DictionaryContext } from "./DictionaryContext";
import { DropdownButton, InputGroup, Dropdown } from "react-bootstrap";

const DictionarySelector = () => {
  const sourceContext = useContext(DictionaryContext);
  const { loading, items, dictionaryValue, setDictionaryValue } = sourceContext;

  return (
    <div>
      <InputGroup size="lg">
        <DropdownButton
          as={InputGroup.Append}
          variant="outline-dark"
          title="dictionaries"
          id="input-group-dropdown-2"
          type="text"
          disabled={loading}
          defaultValue={dictionaryValue}
          onChange={(e) => setDictionaryValue(e.currentTarget.value)}
        >
          <Dropdown.Item>
            {items.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </Dropdown.Item>
        </DropdownButton>
      </InputGroup>
    </div>
  );
};

export default DictionarySelector;
