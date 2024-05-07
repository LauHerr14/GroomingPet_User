
-- Base de datos: grooming_pet
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla agendar_cita
--

CREATE TABLE agendar_citas (
  id_cliente int(11) NOT NULL,
  id_mascota int(11) NOT NULL,
  hora_disponible datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla cliente
--

CREATE TABLE clientes (
  id_cliente int(11) NOT NULL,
  nombre_cliente varchar(20) NOT NULL,
  direccion varchar(20) NOT NULL,
  telefono int(11) DEFAULT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla cliente
--

INSERT INTO clientes (id_cliente, nombre_cliente, direccion, telefono, email, password) VALUES
(1, 'Edwin', 'cl 78 sur', 2147483647, 'steveng@gmail.com', 'xxxxx'),
(2, 'Steven', 'cl 80 bis sur', 2147483647, 'gonzalez@gmail.com', 'xxxxx'),
(3, 'Angie', 'cra 72 sur', 2147483647, 'angiel@gmailcom', 'xxxxx'),
(4, 'Katherin', 'cl 89 a sur', 2147483647, 'katherinm@gmail.com', 'xxxxx'),
(5, 'Diana', 'cra 76 b sur', 2147483647, 'dianabb@gmail.com', 'xxxxx');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla mascota
--

CREATE TABLE mascotas (
  id_mascota int(11) NOT NULL,
  nombre_mascota varchar(255) NOT NULL,
  id_cliente int(11) NOT NULL,
  tipo_mascota 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla mascota
--

INSERT INTO mascotas (id_mascota, nombre_mascota, id_cliente) VALUES
(1, 'Luna', 5),
(2, 'Tommy', 1),
(3, 'Jerry', 2),
(4, 'Sammy', 4),
(5, 'Mono', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla servicio
--

  CREATE TABLE servicios (
    id_servicio int(11) NOT NULL,
    nombre_servicio varchar(255) NOT NULL,
    precio int(7) NOT NULL,
    descripcion_servicio varchar(255) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla servicio
--

INSERT INTO servicio (id_servicios, nombre_servicio, precio, descripcion_servicio) VALUES
(1, 'Baño y Peluqueria', 35, 'descrpcion'),
(2, 'Baño medicado', 78, 'descripcion'),
(3, 'Corte de uñas', 25, 'descripcion'),
(4, 'Limpieza general', 120, 'descripcion');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla servicio_mascotas
--

CREATE TABLE servicio_mascotas (
  id_servicio int(11) NOT NULL,
  id_mascota int(11) NOT NULL,
  fecha_ingreso datetime NOT NULL,
  fecha_salida datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla servicio_mascotas
--

INSERT INTO servicio_mascotas (id_servicio, id_mascota, fecha_ingreso, fecha_salida) VALUES
(1, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla cliente
--
ALTER TABLE clientes
  ADD PRIMARY KEY (id_cliente);


--
-- Indices de la tabla mascota
--
ALTER TABLE mascotas
  ADD PRIMARY KEY (id_mascota),
  

--
-- Indices de la tabla servicio
--
ALTER TABLE servicios
  ADD PRIMARY KEY (id_servicio);

--
-- Llaves foraneas
--
ALTER TABLE mascotas
ADD CONSTRAINT id_cliente
FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente);


ALTER TABLE agendar_cita
ADD CONSTRAINT id_cliente
FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente);


ALTER TABLE agendar_cita
ADD CONSTRAINT id_mascota
FOREIGN KEY (id_mascota) REFERENCES mascotas(id_mascota);


ALTER TABLE servicio_mascotas
ADD CONSTRAINT id_servicio
FOREIGN KEY (id_servicio) REFERENCES servicios(id_servicio);


ALTER TABLE servicio_mascotas
ADD CONSTRAINT id_mascota
FOREIGN KEY (id_mascota) REFERENCES mascotas(id_mascota);

