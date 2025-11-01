import '@ant-design/v5-patch-for-react-19';    // always add this every time
import { createRoot } from 'react-dom/client'
import './index.css'
import App_Buttons from './01_App_Buttons.jsx'
import App_Select from './02_App_Select.jsx'
import BasicForm from './06_App_Form_1.jsx'
import App from './03_App-Grid.jsx'
import PageLayout from './04_App_Layout.jsx';
import App_Typography from './05_App_Typography.jsx';
import MyModal from './08_App_Modal.jsx';
import ConfirmDelete from './09_App_Modal_2.jsx';
import MyDrawer from './10_App_MyDrawer.jsx';
import App_Tabs from './11_App_Tabs.jsx';
import MySteps from './12_App_Steps.jsx';
import AdvancedUIDashboard from './13_App_BasicProject.jsx';
// import ThemedApp from './14_App_Themes.jsx';
import ThemeToggle from './14_App_Themes.jsx';



// createRoot(document.getElementById('root')).render(<App />)

createRoot(document.getElementById('root')).render(<ThemeToggle/>)
