import React from 'react';

const Icon = ({ icon, className = '', ...props }) => {
    return (
        <svg className={className} {...props}>
            <use xlinkHref={`#${icon}`} />
        </svg>
    );
};

export default Icon;
