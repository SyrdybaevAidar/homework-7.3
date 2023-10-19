import React from 'react';
import NumberComponent from '../numbers/number_component';

interface panelComponentProps{
    numbers: number[]
}

const panelComponent: React.FC<panelComponentProps>  = prop => {
    return <div>
        <NumberComponent number={prop.numbers[0]}/>
        <NumberComponent number={prop.numbers[1]}/>
        <NumberComponent number={prop.numbers[2]}/>
        <NumberComponent number={prop.numbers[3]}/>
        <NumberComponent number={prop.numbers[4]}/>
    </div>
}