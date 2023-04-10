import React from 'react';
import Dialog from '@mui/material/Dialog';
import "./Action.css"

const Action = (props) => {
    const {setLogin, onClose, open} = props;


    return (
        <Dialog onClose={onClose} open={open}>
            <div className='action-container'>
                <div className='action-msg'>Are you sure you want to logout?</div>
                <div className='action-trigger'>
                    <div className='btn-yes' onClick={()=>{onClose(); setLogin(false)}}>
                        Yes
                    </div>
                    <div className='btn-no' onClick={()=>{onClose(); }}>
                        No
                    </div>
                </div>
            </div>
        </Dialog>
    )
}

export default Action
