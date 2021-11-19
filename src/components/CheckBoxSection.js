import React ,{ useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import { FormControlLabel, TextField } from '@material-ui/core'

const CheckBoxSection = () => {
    const [checked, setChecked] = useState(true)
    return (
        <div>
            <Checkbox 
            checked ={checked}
            onClick={(e)=>{
             setChecked(e.target.checked)
            }}
            >Test</Checkbox>

           <br />
            <FormControlLabel 
            control={ <Checkbox 
            checked ={checked}
            onClick={(e)=>{
             setChecked(e.target.checked)
            }}
            inputProps={{
                'aria-label' : 'secondary checkbox'
            }}
            />
            }
            label='Testing Checkbox'
            />
            <br/>
            <TextField 
            variant='filled'
            color='secondary'
            type='email'
            label='Email'
            placeholder='abc@gmail.com'/>
        </div>
    )
}

export default CheckBoxSection
