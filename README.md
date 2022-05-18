# Desafío para Software Engineers

- Nombre postulante: Daniel Sepúlveda Pérez
- Link a la app en producción: [Countries App](https://dansep-kimche.netlify.app/)

## Pregunta

La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. Todas las tablas del sistema existen en la misma BDD en MySQL. La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos. El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario (y porque nos gusta pensar en Kimche como un Ferrari). ¿Qué propondrías para enfrentar el problema? Esta pregunta es abierta, no hay respuestas malas. Puedes proponer arquitectura, tecnologías, diseño, etc.

Se podría atacar el problema desde diversos ángulos. En la base de datos habría que revisar si la query se encuentra optimizada o si, de acuerdo a la estructura de la base de datos, conviene crear índices para reducir el tiempo de actualización. También verificaría la configuración del servidor que ejecuta los controladores. Una buena alternativa sería usar AWS RDS, que permite escalar la base de datos dependiendo de los requerimientos del cliente.

## 🔧 Instalación

Para ejecutar este proyecto de manera local, sigue los siguientes pasos:

- Crea una carpeta y ejecuta `git clone https://github.com/DanSepulveda/portfolio.git`
- Ejecuta `npm install` en el directorio raíz.
- Eejecuta `npm run start` en el directorio raíz.
- Dirígete `http://localhost:3000` en el navegador.

## 🛠️ Stack Tecnológico

Este proyecto fue desarrollado usando las siguientes tecnologías:

- [React](https://es.reactjs.org//) - Librería de JS
- [React Redux](https://react-redux.js.org/) - Librería para manejo de estado
- [Apollo Client](https://www.apollographql.com/docs/react/) - Librería para administrar datos con GraphQL