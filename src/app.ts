import express from 'express';

import Provider from 'oidc-provider';

require('dotenv').config();

const app = express();
const oidc = new Provider('http://localhost:3000');

app.use('/', oidc.callback());

export default app;
