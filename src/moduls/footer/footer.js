const builder = require('../elementBuilder');
require('./footer.scss');

module.exports = () => {
    const content = `<p>Easycode 2017 &copy; <a href="#">Footer;</a></p>`;
    return builder('footer', content , 'footer');
};
