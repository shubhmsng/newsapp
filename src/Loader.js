import React from 'react';

const Loader = ({ isLoading }) => {
    return(
        <div className="loader-container" style={{ display: isLoading ? "block" : "none" }}>
            <div className="loader"></div>
        </div>
    );
}

export default React.memo(Loader);