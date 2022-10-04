//higher order component (HOC) - A component that renders another component.
// Reuse code
// render hijacking
// Prop manipulation
// Abstract stae 

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p> The info is: {props.info}</p>
  </div>
);

// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//         { props.isAdmin && <p> This is private info. please dnt share</p>}
//         <WrappedComponent {...props}/>
//         </div>
//     );
// };

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        { props.isAuthenticated ? (
            <WrappedComponent {...props} />
        ) : (
            <p> Login to view </p>
        ) }
        </div>
    );
};

// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="these are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="these are the details" />, document.getElementById('app'));