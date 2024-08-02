import express from 'express'
const servidor = express()

servidor.get('/Soma/:n1/:n2', (req, resp) => {
    let n1 = Number(req.params.n1)
    let n2 = Number(req.params.n2)

    let soma = n1 + n2

    resp.send('a soma é '+ soma);
}
)

servidor.listen(
    5050,
    () => console.log('-------> subiu!!')
);
