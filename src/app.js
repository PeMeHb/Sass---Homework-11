const $ = require('jquery');
const header = require("./moduls/header/header")();
const main = require("./moduls/main/main")();
const footer = require("./moduls/footer/footer")();

$('body').append(header).append(main).append(footer);

