##### **Week 3 – Advanced UI with React \& Ant Design**



This week focuses on building interactive and professional UIs using React and Ant Design v5. It explores advanced components like Modal, Drawer, Tabs, Steps, Grid, and Form to create dynamic dashboards and user interfaces. You learn to manage component visibility and behavior using useState and useEffect, apply themes using ConfigProvider, and design responsive layouts. The goal is to integrate multiple UI features cohesively — modals for actions, drawers for side panels, tabs for navigation, and steps for guided progress. Each file demonstrates a focused use case, helping you master reusable component design. The project also includes API integration and theming examples, rounding out a strong foundation in modern UI engineering with React and AntD.







1️⃣ Buttons.jsx



This program demonstrates various Ant Design button types, including Primary, Dashed, Link, and Text styles. It shows how spacing and alignment are handled using the Space component and integrates form elements like Input and DatePicker alongside buttons. Each button triggers a unique visual response, enhancing user interactivity. The example highlights how AntD’s built-in components reduce the need for custom CSS. It also emphasizes accessibility and responsive design through built-in styling tokens. Overall, this teaches consistent button behavior and layout alignment in modern UI workflows.





2️⃣ Select.jsx



This component focuses on dropdown selection using AntD’s Select with multi-select capability. It dynamically renders a fruit list array as options and manages selection states using useState. The example covers core properties like mode="multiple", defaultValue, and onChange. It explains how values update efficiently when users add or remove items. The design improves UX by offering search, filtering, and clear selection display. This demonstrates AntD’s declarative approach to input-driven components and reinforces event-driven data flow in React.





3️⃣ Grid.jsx



Here you explore responsive layouts using AntD’s Row and Col grid system. The example shows how 24-column-based spacing works and how gutters define inter-column gaps. It demonstrates alignment, responsive resizing, and equal-width division for different screen sizes. This grid design automatically adjusts to desktop, tablet, and mobile views without writing extra CSS. You learn how to plan flexible layouts visually while maintaining alignment and hierarchy. The exercise emphasizes AntD’s built-in grid adaptability, a core part of scalable UI design.





4️⃣ Layout.jsx



This file demonstrates AntD’s Layout structure consisting of Header, Content, and Footer. It explains how to build page skeletons suitable for dashboards, admin panels, or landing pages. Each section has a defined purpose — Header for navigation, Content for main UI, and Footer for metadata. The code promotes modularity, allowing the same layout to wrap multiple React components. It also teaches the value of semantic structure for better maintainability. This pattern acts as a foundation for multi-page or SPA layouts with consistent design flow.





5️⃣ Typography.jsx



This example introduces Ant Design’s Typography system for managing styled text components. It covers Title, Paragraph, and Text elements with features like copyable, ellipsis, and code formatting. The file demonstrates how Typography maintains readability while keeping consistent spacing and font sizes. It reduces dependency on CSS and centralizes design through tokens. This example helps understand how textual hierarchy is managed visually in React apps. It’s a key concept for creating clean, content-focused UIs.





6️⃣ Form1.jsx



This file builds a login form using AntD’s Form, Input, and Button components. It applies validation rules that ensure mandatory fields are filled, showing clear success or error states. Upon submission, the entered data is stored in localStorage and logged for review. It uses onFinish to handle submit logic and rules arrays for validation structure. You learn the difference between controlled and uncontrolled inputs in React. This example shows how AntD simplifies forms with built-in layout, validation, and feedback handling.





7️⃣ Modal.jsx / Modal2.jsx



These files demonstrate AntD’s Modal component for creating pop-up dialogs. The first version handles basic open/close actions with useState. The second uses Modal.confirm for confirmation prompts, ideal for delete or submit actions. They explain how modals overlay the page while keeping accessibility intact. Event handlers manage user actions like “OK” or “Cancel.” This pattern helps you manage critical workflows such as confirmation before deletion or submission. It strengthens control flow and UI interactivity within React apps.





8️⃣ Drawer.jsx



The Drawer component demonstrates side navigation or settings panels that slide in from the screen edge. It uses useState to control visibility and props like placement for position. This helps display additional information without navigating away. The component encourages compact UI design and smooth transitions. It’s ideal for temporary menus, filters, or configuration settings. The Drawer offers a great example of stateful UI elements improving user accessibility and navigation efficiency.





9️⃣ Tabs.jsx



This example implements AntD’s Tabs to organize content into multiple sections like Profile, Settings, and Help. It combines Tabs with Modals and Collapse components to create nested interactive panels. Each tab maintains its internal state, showcasing React’s data isolation. This pattern enhances user experience by presenting large data sets cleanly. The Tabs structure is essential for dashboards or admin panels where categorization improves clarity. You learn how to build multi-section layouts that feel responsive and intuitive.





🔟 Steps.jsx



Demonstrates Ant Design’s Steps component for visualizing sequential progress. It outlines stages such as login, verification, and success completion. React state manages the current step and updates dynamically as users proceed. This file shows how to represent workflows, onboarding, or form wizards clearly. Steps help users understand where they are in a process and what comes next. You also learn how to control transitions between steps for smooth UI flow.







1️⃣1️⃣ BasicProject.jsx



This file combines multiple components — Modal, Drawer, Tabs, and Steps — into a unified dashboard layout. It teaches how to integrate independent UIs into one interactive system. Each component interacts with others through shared state, creating a seamless workflow. The example encourages modular thinking and composable architecture. It mirrors real-world app design, such as a settings dashboard or user portal. This file demonstrates project structure, reusability, and component coordination effectively.





1️⃣2️⃣ Themes.jsx



This program focuses on theming and customization using Ant Design’s ConfigProvider. It dynamically toggles between light and dark modes with a switch control. You learn how tokens define design variables like color, border radius, and typography globally. The example shows how a theme can affect all components instantly. It also demonstrates consistency across different pages. This file solidifies the concept of design tokens and centralized styling systems in modern React UIs.





1️⃣3️⃣ GalleryProject.jsx



This project fetches random images from the Picsum API using Axios and displays them in a responsive AntD grid. It uses useEffect for fetching data and useState for pagination. Users can browse through different pages of images seamlessly. It teaches how to integrate third-party APIs with React and handle asynchronous data updates. The UI demonstrates AntD’s grid alignment and card-like presentation. This project strengthens practical skills in data fetching and responsive UI composition.





1️⃣4️⃣ useEffectExample.jsx



This example demonstrates how React’s useEffect hook handles component lifecycle events. It explains how effects run after render, how dependencies control execution, and how cleanup prevents memory leaks. A simple counter setup shows updates on state changes. It’s a foundational piece for understanding reactivity and performance in React. The file clarifies how React synchronizes UI with underlying data changes. Perfect for beginners learning state-driven updates.





1️⃣5️⃣ main.jsx



Serves as the entry point of all Week 3 demos. It imports each component separately and renders them selectively for testing. Ensures compatibility with React 19 and AntD 5 by managing imports properly. Provides a clean base for modular experimentation and debugging. Helps understand the root structure of React apps and render flow. This file is ideal for testing and isolating each UI component independently.





