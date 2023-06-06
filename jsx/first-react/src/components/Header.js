
// Here we create the Header Component that will receive props and we know we want to have a user
//     first and last name
import React from 'react';
    
const Header = (props) => {
    // We can assume props looks like an object literal with 2 keys and values because of what was passed in
    // {
    //    "firstName":"Bill",
    //    "lastName":"Justice"
    // }
    // destructuring props in to 2 local variables that MUST match the key names found in the props object
    const { firstName, lastName } = props; 
    return (
        <div>
            <h1>
    		{/* // Destructuring allows us to use them like simple variables */}
                My name is { firstName } { lastName }
            </h1>
        </div>
    );
}
export default Header;

