import  { useState } from 'react';
import { Tabs, Modal, Button, Collapse, Drawer, Steps, message } from 'antd';

const { TabPane } = Tabs;
const { Panel } = Collapse;
const { Step } = Steps;

const AdvancedUIDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    setCurrentStep(currentStep + 1);
  };

  const prev = () => {
    setCurrentStep(currentStep - 1);
  };

  const steps = [
    { title: 'Login', description: 'Enter your credentials' },
    { title: 'Verification', description: 'Verify your email or phone' },
    { title: 'Complete', description: 'Finish profile setup' },
  ];


  return (
    <div style={{ width: '700px', margin: '40px auto', padding: '20px', background: '#f7f9fb', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center' }}>⚙️ Advanced UI – Settings Dashboard</h2>

      {/* STEPS (progress bar) */}
      <Steps current={currentStep} style={{ marginBottom: 30 }}>
        {steps.map((item, index) => (
          <Step key={index} title={item.title} description={item.description} />
        ))}
      </Steps>

      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        {currentStep < steps.length - 1 && (
          <Button type="primary" onClick={next}>Next</Button>
        )}
        {currentStep === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Setup complete!')}>Done</Button>
        )}
        {currentStep > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={prev}>Previous</Button>
        )}
      </div>

      {/* MAIN TABS */}
      <Tabs defaultActiveKey="1" centered>
        {/* PROFILE TAB */}
        <TabPane tab="Profile" key="1">
          <p><b>Name:</b> John Doe</p>
          <p><b>Email:</b> john@example.com</p>
          <Button type="primary" onClick={() => setIsModalOpen(true)}>
            Edit Profile
          </Button>

          <Modal
            title="Edit Profile"
            open={isModalOpen}
            onOk={() => setIsModalOpen(false)}
            onCancel={() => setIsModalOpen(false)}
          >
            <p>Here you can edit user details such as name and email.</p>
          </Modal>
        </TabPane>

        {/* ACCOUNT TAB */}
        <TabPane tab="Account" key="2">
          <Collapse accordion>
            <Panel header="Privacy Settings" key="1">
              <p>Control who can view your activity.</p>
            </Panel>
            <Panel header="Security Settings" key="2">
              <p>Enable 2FA, change password, manage devices.</p>
            </Panel>
          </Collapse>
        </TabPane>

        {/* PREFERENCES TAB */}
        <TabPane tab="Preferences" key="3">
          <p>Manage theme, language, and notifications.</p>
          <Button onClick={() => setIsDrawerOpen(true)}>Open Quick Settings</Button>

          <Drawer
            title="Quick Settings"
            placement="right"
            onClose={() => setIsDrawerOpen(false)}
            open={isDrawerOpen}
          >
            <p><b>Theme:</b> Light / Dark</p>
            <p><b>Notifications:</b> On / Off</p>
            <Button type="primary" onClick={() => setIsDrawerOpen(false)}>
              Save Changes
            </Button>
          </Drawer>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default AdvancedUIDashboard;
