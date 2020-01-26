const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://proliferato:Cl@u130689@cluster0-vsexn.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3333);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: request.query (Filtros, Ordenação, Paginação, ...)
// Route Params: request.params (Indentificar um recurso na alteração ou remoção)
// Body:request.body (Dados para criação ou alteração de um registro)