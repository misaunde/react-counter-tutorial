import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     value: this.props.counter.value, //this only gets read at instantiation
    //     tags: ['tag1', 'tag2', 'tag3']
    // };

    // handleIncrement = () => {
    //     this.setState({ value: this.state.value + 1 });
    // }

    //lifecycle hook (Update)
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps: ', prevProps);
        console.log('prevState: ', prevState);
        if (prevProps.counter.value !== this.props.counter.value) {
            // Ajax call and get new data from the server (just for this component)
        }
    }

    componentWillUnmount() {
        console.log("Counter - Unmount");
        //clean up any timers, listeners, etc to avoid memory leaks
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;
        return (
            <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
        );
    }


    render() {
        console.log("Counter - Rendered");
        return (
            <div>
                {/* <h4>{ this.props.id }</h4> */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Buy</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                {/* { this.renderTags() } */}
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;
