package com.example.api;



import jakarta.websocket.OnClose;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.ServerEndpoint;

import javax.sql.DataSource;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@ServerEndpoint("/chat")
public class ChatServer {

    private static final Map<String, Session> clients = new ConcurrentHashMap<>();

    private static UserConnectionDAO buildUserDao() {
        DataSource ds = DataSourceFactory.create();
        return JdbiFactory.create(ds).onDemand(UserConnectionDAO.class);
    }

    private static MessageDAO buildMessageDao() {
        DataSource ds = DataSourceFactory.create();
        return JdbiFactory.create(ds).onDemand(MessageDAO.class);
    }

    private static final UserConnectionDAO userDAO = buildUserDao();
    private static final MessageDAO messageDAO = buildMessageDao();

    @OnOpen
    public void onOpen(Session session) {
        try {
            String query = session.getQueryString();
            String userId = query.split("=")[1];

            clients.put(userId, session);
            userDAO.addUser(userId, session.getId());

            System.out.println("User " + userId + " connected");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @OnMessage
    public void onMessage(String message, Session senderSession) {
        try {
            if (!message.startsWith("TO:")) {
                senderSession.getBasicRemote().sendText("Invalid format.");
                return;
            }

            String[] parts = message.split(" ", 2);
            String toUser = parts[0].substring(3);
            String text = parts.length > 1 ? parts[1] : "";

            String senderId = clients.entrySet()
                    .stream()
                    .filter(e -> e.getValue().equals(senderSession))
                    .map(Map.Entry::getKey)
                    .findFirst()
                    .orElse("unknown");

            messageDAO.saveMessage(senderId, toUser, text);

            Session receiver = clients.get(toUser);

            if (receiver != null && receiver.isOpen()) {
                receiver.getBasicRemote().sendText("From " + senderId + ": " + text);
            } else {
                senderSession.getBasicRemote().sendText("User " + toUser + " is offline.");
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @OnClose
    public void onClose(Session session) {
        try {
            String userId = clients.entrySet()
                    .stream()
                    .filter(e -> e.getValue().equals(session))
                    .map(Map.Entry::getKey)
                    .findFirst()
                    .orElse(null);

            if (userId != null) {
                clients.remove(userId);
                userDAO.removeUser(userId);
            }

            System.out.println("Session closed: " + session.getId());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
