const chalk = require('chalk');
const ERR_NO_ENV_FLAG = chalk.red(
    `You must pass an --env.env flag into your build foer webpack to work!`
);

module.exports = {
    ERR_NO_ENV_FLAG
};