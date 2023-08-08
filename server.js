'use strict';

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Path = require('path');

const init = async () => {

    const server = Hapi.server({
        port: 3001,
        host: 'localhost'
    });

    await server.register(Inert);

    server.route(
        
        {
            method: 'GET',
            path: '/',
            handler: (request, h) => {

                return h.file('./src/app/home/{param*}');
            },
        
        },
        {
            method: 'GET',
            path: '/users',
            handler: (request, h) => {

                return 'Hello Users!';
            }
        }
        
    );

    await server.start();
    console.log('Server running on %s', server.info.uri);

};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();