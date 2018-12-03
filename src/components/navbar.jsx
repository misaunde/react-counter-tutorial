import React, { Component } from 'react';

 //Stateless Functional Component (gets props as argument)
//  const NavBar = (props) => {
//     return ( 
//         <nav className="navbar navbar-light bg-light">
//             <a href="#" className="navbar-brand">Amazon
//             <span className="badge badge-pill badge-secondary m-2">{props.totalCounters}</span>
//             </a>

//         </nav>
//      ); 
// }

class NavBar extends Component {

    render() { 
        console.log("NavBar - Rendered");
        return ( 
            <nav className="navbar navbar-light bg-light">
                <a href="#" className="navbar-brand">Amazon
                <span className="badge badge-pill badge-secondary m-2">{this.props.totalCounters}</span>
                </a>

            </nav>
         );
    }
}
 
export default NavBar;