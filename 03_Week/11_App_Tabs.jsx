import React, { useState } from 'react';
import { Tabs, Modal, Button, Collapse } from 'antd';

const { TabPane } = Tabs;
const { Panel } = Collapse;

const SettingsDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);




  return (
    <div style={{ width: '600px', margin: '40px auto' }}>
      <h2 style={{ textAlign: 'center' }}>⚙️ Settings Dashboard</h2>

      <Tabs defaultActiveKey="2">
        {/* PROFILE TAB */}
        <TabPane tab="Profile" key="1">
          <p>Name: Mohd Amer</p>
          <p>Email: amer@gmail.com</p>
          <Button type="primary" onClick={()=> setIsModalOpen(true)}>
            Edit Profile
          </Button>

          <Modal
            title="Edit Profile"
            open={isModalOpen}
            onOk={()=> setIsModalOpen(false)}
            onCancel={()=> setIsModalOpen(false)}
          >
            <p>Here you can edit your name and email.</p>
          </Modal>
        </TabPane>

        
        <TabPane tab="Account" key="2">
          <Collapse>
            <Panel header="Privacy Settings" key="1">
              <p>Activate Biometric Authentication  </p>
            </Panel>
            <Panel header="Change Password" key="2">
              <p>Change your password </p>
            </Panel>
          </Collapse>

        </TabPane>
        
      </Tabs>
    </div>
  );
};

export default SettingsDashboard;
