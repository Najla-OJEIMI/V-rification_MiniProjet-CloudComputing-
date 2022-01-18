const http = require('http');
const si = require('systeminformation');
const { resourceLimits } = require('worker_threads');

const hostname = 'localhost';
const port = 8080;

const result=[];

Promise.all([

    // Les informations de CPU
    si.cpu(function(data) {
       result.push(data);

    }),

    // Les informations de Memo
    si.mem(function(data) {
        result.push(data);

    }),

    // Les informations de système d'opération
    si.osInfo(function(data) {
    result.push(data);

    }),

    // Les informations de currentLoad
    si.currentLoad(function(data) {
        result.push(data);

    }),

    // Les informations de diskLayout
    si.diskLayout(function(data) {
    result.push(data);}),

    // Les informations de networkInterfaces
    si.networkInterfaces(function(data) {
        result.push(data);

    })]).then((result) =>{
        console.log(result);

    });

const requestListner = async function(req, res) {
    // const sysinfo = await getSysInfo();
    // Pour tout autre chemin, on retournera une erreur 404.
    if (req.url !== '/api/v1/sysinfo'){
        res.writeHead(200,'{"Content-Type: application/json"}');
        return res.end('404 Not Found')
    }
    else {
    res.writeHead(200,'{"Content-Type: application/json"}');
    return res.end(JSON.stringify(result)) }
};

const server = http.createServer(requestListner);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/api/v1/sysinfo`);
    });
 
