import React from 'react';
import {Input} from 'semantic-ui-react';

const SearchBox = ({placeholder, handleChange}) => {
    return (
        <Input fluid className="PadY" icon='paw' iconPosition='left'
        placeholder={placeholder}
        onChange={handleChange}/>
    )
}

export default SearchBox
