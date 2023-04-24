CREATE TABLE users (
  id VARCHAR(36) PRIMARY KEY,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  age INT
);
INSERT INTO `users` VALUES ('abdelrahman','mo',35,'f88afa0a-1bcb-47fa-95a2-3c1a8056700a'),
                        ('Ahmed','Mohamed',20,'1d877c7a-9c09-4d98-8cca-304088492a7f'),
                        ('Ahmed','Ashraf',25,'f5422c13-1a4c-4754-9802-509f6040c380');
