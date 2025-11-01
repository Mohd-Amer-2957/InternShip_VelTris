import { Drawer, Button } from 'antd';
import { useState } from 'react';

const MyDrawer = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div style={{textAlign:'end'}}>
                <Button onClick={() => setOpen(true)}>Open Drawer</Button>
            <Drawer title="Settings"
                onClose={() => setOpen(false)}
                open={open}>
                <p>Notifications</p>
                <p>Profile</p>
                <p>Log out</p>
            </Drawer>
            </div>
        </>
    );
};

export default MyDrawer