# Creation of a Real-Time Chat Application

This module focuses on designing and developing a real-time communication system using a modern full-stack architecture. The application enables two users to exchange messages instantly while maintaining persistent chat history in a backend database.

## 🚀 Overview

The chat application was built using the following technologies:

- **React** for the frontend UI and state management.
- **Java WebSockets** for real-time, bidirectional communication.
- **Tomcat Server** for deploying backend services.
- **MySQL Database** for storing chat history and user message logs.

The integration of these components ensured seamless communication between the client and server while maintaining data reliability.

---

## 🧩 Key Features Implemented

### 1. Real-Time Messaging
A WebSocket connection was established between the React frontend and the Java backend.  
Once connected, both users can send and receive messages instantly without page reloads or repeated HTTP requests.

### 2. WebSocket Server Endpoints (Java)
Custom WebSocket endpoints were created using Java annotations such as:

- `@ServerEndpoint`
- `@OnOpen`
- `@OnMessage`
- `@OnClose`

These endpoints manage client sessions, message broadcasting, and connection lifecycle events.

### 3. Backend Deployment on Tomcat
The WebSocket backend services were deployed on **Apache Tomcat**, ensuring stable, production-ready request handling and connection management.

### 4. Database Integration (MySQL)
Every message exchanged between users is stored in a MySQL database with timestamps and sender/receiver details.  
This allows:

- Persistent chat history  
- Ability to retrieve past conversations  
- Reliable record-keeping for user interactions  

### 5. React Frontend Interface
The UI was built using React components, handling:

- Establishing WebSocket connections  
- Managing incoming and outgoing message streams  
- Displaying conversation history  
- Handling user input and message formatting  

React's state updates ensure smooth, real-time message rendering.

---

## 🏗️ System Workflow

1. User opens the chat interface in the React application.  
2. A WebSocket connection is created to the Java WebSocket endpoint running on Tomcat.  
3. Users exchange messages via the WebSocket channel.  
4. The backend receives each message, forwards it to the recipient, and stores it in MySQL.  
5. The frontend updates instantly to reflect new messages in real time.

---

## ✅ Outcome

The application successfully demonstrates a fully functional real-time chat experience supported by:

- A responsive frontend  
- A stable WebSocket-based backend  
- Persistent message storage  
- Smooth integration between React, Java, Tomcat, and MySQL  

This project strengthens practical knowledge of event-driven communication and full-stack system design.

