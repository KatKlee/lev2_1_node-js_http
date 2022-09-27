import fs from 'fs'
import http from 'http'


const sendFile = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.end('error')
            return
        }
        res.end(data.toString())
    })
}

const server = http.createServer((req, res) => {
    console.log('Ein Request:', req.method, req.url);
    if (req.url === '/') {
        sendFile('./pages/index.html', res)
    } else {
        const filePath = "./pages" + req.url
        sendFile(filePath, res)
    }
})

server.listen(9898, console.log('Unser Server läuft'))