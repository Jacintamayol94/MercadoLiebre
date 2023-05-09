const express = require ('express');
const path = require('path');

const app = express ();
const PORT=process.env.PORT || 3000;

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
})

app.get('/formlogin', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/formlogin.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
})

app.listen (PORT, () => {
    console.log('Servidor corriendo en el puerto'+PORT);
});
