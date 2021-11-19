// 2. Form state
// The user has introduced data into the input fields: but how do you access these values inside of the React component ?

//     React offers 2 approaches to access the value of an input field: using controlled or uncontrolled components.
// I prefer controlled components because you read and set the input value through the component’s state.

import React, { useState } from 'react'

const MyControlledInput = () => {
    const [value, setValue] = useState('');

    const onChange = (event) =>{
        setValue(event.target.value)
    }
    
    return (
        <div>
            <div>Input Value :{value}</div>
            <input type="text" value={value} onChange={onChange} />
        </div>
    )
}

export default MyControlledInput
