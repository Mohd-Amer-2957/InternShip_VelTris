package com.example.api;

import org.jdbi.v3.sqlobject.config.RegisterConstructorMapper;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;
import org.jdbi.v3.sqlobject.customizer.Bind;

public interface UserConnectionDAO {

    @SqlUpdate("REPLACE INTO active_users (user_id, session_id) VALUES (:userId, :sessionId)")
    void addUser(@Bind("userId") String userId, @Bind("sessionId") String sessionId);

    @SqlUpdate("DELETE FROM active_users WHERE user_id = :userId")
    void removeUser(String userId);
}
