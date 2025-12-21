package com.example.api;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

import javax.sql.DataSource;

public class DataSourceFactory {

    // 🔴 SINGLE shared datasource
    private static final HikariDataSource dataSource = createDataSource();

    private static HikariDataSource createDataSource() {
        HikariConfig config = new HikariConfig();

        config.setJdbcUrl("jdbc:mysql://localhost:3306/collage");
        config.setUsername("root");
        config.setPassword("19244@Mohd");
        config.setDriverClassName("com.mysql.cj.jdbc.Driver");

        // Pool tuning
        config.setMaximumPoolSize(10);
        config.setMinimumIdle(2);
        config.setPoolName("ChatAppPool");

        return new HikariDataSource(config);
    }

    public static DataSource create() {
        return dataSource;
    }
}
