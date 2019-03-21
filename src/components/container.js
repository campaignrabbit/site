import React from 'react';

export default function Container( props ) {
    if (!props.children) {
        return null;
    }
    const classes = `container container-${props.type} ${props.className}`;
    return(
        <div className={classes}>
            { props.children }
        </div>
    )
}

Container.defaultProps = {
    type: 'l',
    className: ''
};
