import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from 'material-ui-search-bar';

const SearchBarComponent = ({ onSubmit }) => {
    return (
        <div>
            <SearchBar
                onChange={() => console.log('onChange')}
                onRequestSearch={() => console.log('onRequestSearch')}
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