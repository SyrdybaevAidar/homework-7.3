import React from 'react';
interface NumberComponentProp{
    number: number
}

const NumberComponent:React.FC<NumberComponentProp> = props => {
    return <span>
        {props.number}
    </span>
};

export default NumberComponent;