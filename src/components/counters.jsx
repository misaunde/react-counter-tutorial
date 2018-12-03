import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {


    render() { 
        console.log("Counters - Rendered");
        const { onReset, counters, onDelete, onIncrement } = this.props; //descructure from props object (avoid using this.props everywhere...)
        return ( 
            <div>
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                { counters.map(c => <Counter key={c.id} onDelete={onDelete} onIncrement={onIncrement} counter={c} /> )}
            </div> 
        );
    }
}
 
export default Counters;