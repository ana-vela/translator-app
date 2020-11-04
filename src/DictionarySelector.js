import React, { useContext } from "react";
import { DictionaryContext } from "./DictionaryContext";
import { Form } from 'react-bootstrap';


const DictionarySelector = () => {
  const sourceContext = useContext(DictionaryContext);
  const { loading, items, dictionaryValue, setDictionaryValue } = sourceContext;

  return (
    <Form.Control as="select" size="lg" aria-label="dictionary selector"
      disabled={loading}
      defaultValue={dictionaryValue}
      onChange={e => setDictionaryValue(e.currentTarget.value)}>
      {items.map(item => (
          <option key={item.value} value={item.value}>
              {item.label}
          </option>
      ))}
    </Form.Control>    
  );
};

export default DictionarySelector;
