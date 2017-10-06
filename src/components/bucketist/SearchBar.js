import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from 'material-ui-search-bar';

const SearchBarComponent = ({ onSubmitSearch, onChange }) => {
    return (
        <div>
            <SearchBar
                onChange={(value) => onChange(value)}
                onRequestSearch={() => onSubmitSearch()}
                style={{
                margin: '0 auto',
                maxWidth: 800
                }}
            />
        </div>
    );
}

SearchBarComponent.propType = {
    onSubmit: PropTypes.func.isRequired
};

export default SearchBarComponent;
