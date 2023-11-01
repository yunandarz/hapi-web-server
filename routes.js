// latihan routing
const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/hello/{name?}', // latihan path parameter berdasarkan name
        handler: (request, h) => {
           const { name = "stranger" } = request.params; //nilai default menggunakan properti request.params
           const { lang } = request.query; // latihan query parameter menggunakan properti request.query

           if(lang === 'id') {
            return `Hai, ${name}! ini latihan query parameter`; // respon kembalian handler berdasarkan evaluasi nilai lang
           }

           return `Hello, ${name}!`;
       },
    },
    {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
        const { username, password } = request.payload; // Latihan body/payload request. jika client mengirimkan payload berupa JSON, payload tersebut dapat diakses pada route handler melalui properti request.payload.
        return `Welcome ${username}!`;
        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
];
 
module.exports = routes; // kita export file ini untuk digunakan di server.js

/* nilai ‘*’, itu artinya route dapat diakses menggunakan seluruh method yang ada pada HTTP. 
nilai ‘/{any*}’ pada route paling akhir berfungsi untuk menangani permintaan masuk pada path yang belum kita tentukan. 
Ini merupakan salah satu teknik dalam menetapkan routing yang dinamis menggunakan Hapi. */