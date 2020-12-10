// import React from 'react';
// import PropTypes from 'prop-types';

// class App extends React.Component 
// {
//     state = {
//         count: 0
//     };
//     add = () => {
//         // this.setState({count: this.state.count +1}) ; not a good way to depend on the external state
//         this.setState(current => ({count: current.count +1}));
//     }; 
//     substract = () => {
//         // this.setState({count: this.state.count -1}); not a good way
//         this.setState(current => ({count: current.count -1}));
//     }; 
//     render()
//     {
//     return (
//     <div>
//     <h1>The number is: {this.state.count}</h1>
//     <button onClick={this.add}>Add</button>
//     <button onClick={this.substract}>Substract</button>
//     </div>
//     )}
// }

// export default App; 
