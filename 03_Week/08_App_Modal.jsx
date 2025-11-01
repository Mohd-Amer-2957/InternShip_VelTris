import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const MyModal = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <center>
                <Button onClick={() => setOpen(true)}>Open Modal</Button>
                <Modal title='Edit Items here'
                    open={open}
                    onOk={() => setOpen(false)}
                    onCancel={()=> setOpen(false)}
                >
                    <p>Here we write contents...</p>
                </Modal>
            </center>
        </>
    );
};

export default MyModal