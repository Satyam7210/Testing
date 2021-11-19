// Table of Contents
// 1. “Register Your Cat” form
// 2. Form state
// 3. Form validation
// 4. Form submission
// 5. Form’s initial data
// 6. Summary



import React, { useState } from 'react'
import './style.css'
import axios from 'axios';

const colors = ['red', 'white', 'black', 'cream', 'blue'];

const RegisterYourCatForm = () => {
   
        const [formValue, setFormValue] = useState({
            name:'', color:'', age:'', habit:''
        });

        const onChange = (event) => {
            // const value = event.target.value;
            // const name = event.target.name;
            const  {name, value}= event.target;
            setFormValue({...formValue, [name]:value});
            
        }

    const onSubmitHandler = async (event) =>{
          event.preventDefault();

            const formData = new FormData();
            formData.append('name');
            formData.append('color');
            formData.append('age');
            const configData = {
                headers: { 'content-type': 'application/json'}
            }
            formData.append('habit');

            await axios.post('url', formData, configData).then((res)=>res.data)


    }

    
    return (
        <div>
            <form>
                <h1>Register For Cat</h1>
                <div>Input Value :{formValue.name}</div>
                <label>Name*:</label>
                <input name="name" type="text" required value={formValue.name} onChange={onChange}/><br />
                <div>Input formValue :{formValue.color}</div>
                <label>Color*:</label>
                <select 
                    name="color" required value={formValue.color} onChange={onChange}
                >
                    <option value="">Select Color</option>
                    {colors.map(col => <option key={col}>{col}</option>)}
                </select><br />
                <div>Input formValue :{formValue.age}</div>
                <label>Age*:</label>
                <input name="age" type="number" required min="1" value={formValue.age} onChange={onChange} /><br />
                <div>Input formValue :{formValue.habit}</div>
                <label>Habits*:</label>
                <textarea name="habit" value={formValue.habit} onChange={onChange} /><br />
                <button type="submit" onSubmit={onSubmitHandler}>Submit</button>
            </form>
        </div>
    )
}

export default RegisterYourCatForm
