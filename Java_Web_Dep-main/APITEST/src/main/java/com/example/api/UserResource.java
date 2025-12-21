package com.example.api;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import javax.sql.DataSource;
import java.util.List;

import org.jdbi.v3.core.Jdbi;
import org.jdbi.v3.sqlobject.SqlObjectPlugin;

@Path("/users")
@Produces(MediaType.APPLICATION_JSON)
public class UserResource {

    private final MessageDAO messageDAO;

    public UserResource() {
        DataSource ds = DataSourceFactory.create();

        Jdbi jdbi = Jdbi.create(ds);

        // 🔴 REQUIRED (same bug as before)
        jdbi.installPlugin(new SqlObjectPlugin());

        this.messageDAO = jdbi.onDemand(MessageDAO.class);
    }

    @GET
    public List<String> getUsers() {
        return messageDAO.getAllUsers();
    }
}
