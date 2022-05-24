
CREATE TABLE calculadora.calc (
	id INT auto_increment NOT NULL,
	conta varchar(200) NOT NULL,
	resultado varchar(100) NOT NULL,
	create_at DATETIME DEFAULT CURRENT_TIMESTAMP NULL,
	CONSTRAINT calc_pk PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;