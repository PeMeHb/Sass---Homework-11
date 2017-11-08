const builder = require('../elementBuilder');
require('./main.scss');

module.exports = () => {
    const getDate = () => new Date().toLocaleDateString();
    let items = '';
    for (let i = 1; i < 11; i++) {
        items += `<li class="item${i}">${i}</li>`
    }
    const content = `
    <h1 class="title">Hello</h1>
    <h5 class="date">${getDate()}</h5>
    <ul>${items}</ul>
`;
    return builder('main', content , 'main');
};
