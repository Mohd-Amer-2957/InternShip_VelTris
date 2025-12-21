package com.example.api;

import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;

import java.util.List;

public interface MessageDAO {

    @SqlUpdate("""
        INSERT INTO chat_messages (sender_id, receiver_id, message_text)
        VALUES (:senderId, :receiverId, :text)
    """)
    void saveMessage(
            @Bind("senderId") String senderId,
            @Bind("receiverId") String receiverId,
            @Bind("text") String text
    );

    // 🔴 THIS ANNOTATION IS REQUIRED
    @RegisterBeanMapper(ChatMessage.class)
    @SqlQuery("""
        SELECT sender_id   AS sender,
               receiver_id AS receiver,
               message_text AS text
        FROM chat_messages
        WHERE (LOWER(sender_id) = LOWER(:user1)
           AND LOWER(receiver_id) = LOWER(:user2))
           OR
              (LOWER(sender_id) = LOWER(:user2)
           AND LOWER(receiver_id) = LOWER(:user1))
        ORDER BY sent_at ASC
    """)
    List<ChatMessage> getChatHistory(
            @Bind("user1") String user1,
            @Bind("user2") String user2
    );


    @SqlQuery("""
    SELECT DISTINCT username FROM (
        SELECT sender_id AS username FROM chat_messages
        UNION
        SELECT receiver_id AS username FROM chat_messages
    ) users
    ORDER BY username
""")
    List<String> getAllUsers();

}









//package com.example.api;
//
//import org.jdbi.v3.sqlobject.statement.SqlUpdate;
//import org.jdbi.v3.sqlobject.customizer.Bind;
//
//
//public interface MessageDAO {
//
//    @SqlUpdate("INSERT INTO chat_messages (sender_id, receiver_id, message_text) VALUES (:senderId, :receiverId, :text)")
//    void saveMessage(@Bind("senderId") String senderId,@Bind("receiverId") String receiverId,@Bind("text") String text);
//}
