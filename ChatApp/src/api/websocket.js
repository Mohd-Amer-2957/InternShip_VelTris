let socket = null;

export const connectSocket = (onMessageReceived, user) => {
  socket = new WebSocket(`ws://localhost:8082/APITEST/chat?user=${user}`);

  socket.onopen = () => {
    console.log("Connected to WebSocket server");
  };

  
  socket.onmessage = (event) => {
    console.log(event.data)
    const msg = event.data;
    onMessageReceived(msg);
  };

  socket.onclose = () => {
    console.log("Disconnected from WebSocket server");
  };
};


export const sendMessage = (msgObj) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(msgObj);
    console.log("Scoket sending ", msgObj);
  }
};