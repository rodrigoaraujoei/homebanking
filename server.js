'use strict';

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const hapiAuthJwt2 = require('hapi-auth-jwt2');
const Path = require('path');
//const JWT = require('jsonwebtoken');

const init = async () => {

    const server = Hapi.server({
        port: 3001,
        host: 'localhost'
    });


    server.register(hapiAuthJwt2);
    
    await server.register(Inert);

    server.route({

        method: 'GET',

        path: '',

        handler: {

          directory: {

            path: Path.join(__dirname, './src/app/login'),
            redirectToSlash: true,
            index: true

          },

        },

      });

     

    await server.start();

    console.log('Server running on %s', server.info.uri);

};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();