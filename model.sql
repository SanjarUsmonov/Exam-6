CREATE DATABASE exam;

\c exam;

CREATE EXTENSION "uuid-ossp";

CREATE TABLE users(
    user_id uuid DEFAULT uuid_generate_v4(),
    user_username VARCHAR(32) NOT NULL,
    user_password VARCHAR(32),
    user_created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    user_status boolean
);