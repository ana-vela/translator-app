import React, {useContext} from 'react';
import {SourceLanguageContext} from './SourceLanguageContext';


const SourceLanguageSelector = () => {

    const sourceContext = useContext(SourceLanguageContext);
    const { loading, items, sourceValue, setSourceValue } = sourceContext;

    return (
        <select 
            disabled={loading}
            value={sourceValue}
            onChange={e => setSourceValue(e.currentTarget.value)}>
            {items.map(item => (
                <option key={item.value} value={item.value}>
                    {item.label}
                </option>
            ))}
        </select>
    );

};

export default SourceLanguageSelector;