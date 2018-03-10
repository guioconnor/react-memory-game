import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const CardsSelector = ({ options, onChange, value }) => (
  <Select
    name="form-field-name"
    value={value}
    onChange={onChange}
    clearable={false}
    options={options}
  />
);

export default CardsSelector;
