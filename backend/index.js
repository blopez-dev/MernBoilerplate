const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const debug = require('debug')('server');
const chalk = require('chalk');
const morgan = require('morgan');
require('dotenv').config();

const server = express();
server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

server.listen('2025', () => debug(`Server is running in ${chalk.yellow('localhost:2025')}`));
