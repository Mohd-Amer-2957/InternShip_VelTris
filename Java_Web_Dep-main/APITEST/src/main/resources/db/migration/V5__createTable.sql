CREATE TABLE active_users (
    user_id VARCHAR(50) PRIMARY KEY,
    session_id VARCHAR(100),
    connected_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
