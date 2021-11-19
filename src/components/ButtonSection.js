import React from 'react'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import ButtonGroup from '@material-ui/core/ButtonGroup'


const ButtonSection = () => {
    return (
        <div>
            <ButtonGroup>
            <Button
            startIcon={<SaveIcon />}
            size="large"
            variant="contained"
            color="primary"
            style={{
                fontSize:20
            }}>Save</Button>
            <Button
            endIcon={<DeleteIcon />}
            size="large"
            variant="contained"
            color="primary"
            style={{
                fontSize:20
            }}>Discard</Button>
            </ButtonGroup>

            {/* This is optimize the code  */}
            {/* <ButtonGroup size="large"
            variant="contained"
            color="primary"
            >
            <Button
            startIcon={<SaveIcon />}
            style={{
                fontSize:20
            }}
            >Save</Button>
            <Button
            endIcon={<DeleteIcon />}
            >Discard</Button>
            </ButtonGroup> */}
        </div>
    )
}

export default ButtonSection
