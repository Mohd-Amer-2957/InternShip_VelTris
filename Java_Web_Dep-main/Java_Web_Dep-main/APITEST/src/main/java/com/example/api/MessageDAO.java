package com.example.api;

import org.jdbi.v3.sqlobject.statement.SqlUpdate;
import org.jdbi.v3.sqlobject.customizer.Bind;


public interface MessageDAO {

    @SqlUpdate("INSERT INTO chat_messages (sender_id, receiver_id, message_text) VALUES (:senderId, :receiverId, :text)")
    void saveMessage(@Bind("senderId") String senderId,@Bind("receiverId") String receiverId,@Bind("text") String text);
}
