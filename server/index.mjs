// const liveServer = require('live-server');
import liveServer from 'live-server';

const { PORT, OPEN } = process.env;

const params = {
  host: 'localhost',
  port: process.env.PORT || 3000,
  open: process.env.OPEN || false,
};

liveServer.start(params);
