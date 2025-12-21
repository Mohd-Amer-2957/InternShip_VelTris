package com.example.api;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import javax.sql.DataSource;
import java.util.List;

import org.jdbi.v3.core.Jdbi;
import org.jdbi.v3.sqlobject.SqlObjectPlugin;

@Path("/messages")
@Produces(MediaType.APPLICATION_JSON)
public class MessageResource {

    private final MessageDAO messageDAO;

    public MessageResource() {
        // 1️⃣ Get pooled datasource
        DataSource ds = DataSourceFactory.create();

        // 2️⃣ Create JDBI instance
        Jdbi jdbi = Jdbi.create(ds);

        // 3️⃣ 🔴 REQUIRED: enable SQL Object annotations (@SqlQuery, @SqlUpdate)
        jdbi.installPlugin(new SqlObjectPlugin());

        // 4️⃣ Create DAO proxy
        this.messageDAO = jdbi.onDemand(MessageDAO.class);
    }

    @GET
    public List<ChatMessage> getMessages(
            @QueryParam("user1") String user1,
            @QueryParam("user2") String user2) {

        if (user1 == null || user2 == null) {
            throw new BadRequestException("Both user1 and user2 are required");
        }

        return messageDAO.getChatHistory(user1, user2);
    }
}
