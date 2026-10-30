// cria o molde completo do seu aplicativo/servidor
import express from 'express';
//app --> representa servidor/express()
const app = express();

app.get('/busca', (req, res) => {
    console.log("Enviado!")
    res.send("Resposta Retornada!");
    })


//liga servidor e configura uma porta 
app.listen(3000, ()=> {console.log("Servidor Rodando!")})