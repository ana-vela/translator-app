import React, {useContext} from 'react';
import {DictionaryContext} from './DictionaryContext';


const DictionarySelector = () => {

    const sourceContext = useContext(DictionaryContext);
    const { loading, items, dictionaryValue, setDictionaryValue } = sourceContext;

    return (
        <select 
            disabled={loading}
            defaultValue={dictionaryValue}
            onChange={e => setDictionaryValue(e.currentTarget.value)}>
            {items.map(item => (
                <option key={item.value} value={item.value}>
                    {item.label}
                </option>
            ))}
        </select>
    );

};

export default DictionarySelector;