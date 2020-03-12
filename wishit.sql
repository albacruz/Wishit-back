CREATE TABLE user
(   id         INTEGER PRIMARY KEY AUTO_INCREMENT,
    name       VARCHAR(32)  NOT NULL,
    surname    VARCHAR(128) NOT NULL,
    nickname   VARCHAR(32)  NOT NULL UNIQUE,
    address    VARCHAR(256),
    password   VARCHAR(256),
    birth_date DATE,
    email      VARCHAR(320) NOT NULL UNIQUE
);



CREATE TABLE present
(
    id            INTEGER PRIMARY KEY AUTO_INCREMENT,
    name          VARCHAR(128) NOT NULL,
    description   VARCHAR(512),
    is_material   BOOLEAN,
    type          INTEGER, -- it will be a foreign key to types table
    links         BLOB,    -- temporal to confirm
    n_beneficiary INTEGER      NOT NULL,
    expire_date   DATE
);



CREATE TABLE tag(
    id  INTEGER PRIMARY KEY AUTO_INCREMENT,
    tag VARCHAR(128) NOT NULL UNIQUE
);


CREATE TABLE friend(
    id_user   INTEGER,
    id_friend INTEGER,
    PRIMARY KEY (id_user, id_friend),
    CONSTRAINT fk_user FOREIGN KEY (id_user) REFERENCES user (id),
    CONSTRAINT fk_friend FOREIGN KEY (id_friend) REFERENCES user (id)
);



CREATE TABLE user_present(
    id_user        INTEGER,
    id_present     INTEGER,
    valuation_date DATE,
    valuation      INTEGER,
    PRIMARY KEY (id_user, id_present),
    CONSTRAINT fk_userPresent FOREIGN KEY (id_user) REFERENCES user (id),
    CONSTRAINT fk_present FOREIGN KEY (id_present) REFERENCES present (id)
);



CREATE TABLE tag_to_user(
    id_tag  INTEGER,
    id_user INTEGER,
    PRIMARY KEY (id_tag, id_user),
    CONSTRAINT fk_tag FOREIGN KEY (id_tag) REFERENCES tag (id),
    CONSTRAINT fk_tagToUser FOREIGN KEY (id_user) REFERENCES user (id)
);



CREATE TABLE tag_to_present(
    id_tag     INTEGER,
    id_present INTEGER,
    id_user    INTEGER,
    PRIMARY KEY (id_tag, id_present),
    CONSTRAINT fk_tagToPresent FOREIGN KEY (id_tag) REFERENCES tag (id),
    CONSTRAINT fk_present_tagToPresent FOREIGN KEY (id_present) REFERENCES present (id),
    CONSTRAINT fk_user_tagToPresent FOREIGN KEY (id_user) REFERENCES user (id)
);



CREATE TABLE tag_to_friend(
    id_tag    INTEGER,
    id_friend INTEGER,
    id_user   INTEGER,
    PRIMARY KEY (id_tag, id_friend, id_user),
    CONSTRAINT fk_tagToFriend FOREIGN KEY (id_tag) REFERENCES tag (id),
    CONSTRAINT fk_friend_tagToFriend FOREIGN KEY (id_user, id_friend) REFERENCES friend (id_user, id_friend),
    CONSTRAINT fk_user_tagToFriend FOREIGN KEY (id_user) REFERENCES user (id)
);