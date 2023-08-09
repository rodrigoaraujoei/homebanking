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

    server.route({

        method: 'GET',

        path: '/home{param*}',

        handler: {

          directory: {

            path: Path.join(__dirname, './src/app/home'),
                redirectToSlash: true,
                index: ['home-component.html']

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