import express from 'express';
const meterRoute = express.Router();

import { getToken } from '../controllers/meter.controller.js';

meterRoute.get('/', getToken);

export default meterRoute;