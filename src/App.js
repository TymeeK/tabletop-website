import React, { Component, useState } from 'react';

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { counter: 0 };
//         this.increment = this.increment.bind(this);
//     }

//     increment() {
//         this.setState(prevState => ({ counter: prevState.counter + 1 }));
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.increment}>
//                     Click me! {this.state.counter}
//                 </button>
//             </div>
//         );
//     }
// }

function App() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }
    return (
        <div>
            <button onClick={increment}>Click me! {counter}</button>
        </div>
    );
}

export default App;
