const Hapi = require('@hapi/hapi'); //Import modul hapi
const routes = require('./routes'); // import modul/file routes

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    server.route(routes); // ambil nilai dari routes.js menggunakan method server.route()

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
