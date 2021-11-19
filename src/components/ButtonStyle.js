import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
    root : {
         background : 'Linear-gradient(45deg , #333, #FF8E53)',
         border: 0 ,
         borderRadius: 15,
         color:'white',
         padding: '0 30px',
         marginTop:'30px'
    }
})

const ButtonStyle = () => {
    const classes = useStyle();
    return (
        <div>
            <Button className={classes.root}
            >Test Styled Button</Button>
        </div>
    )
}

export default ButtonStyle
