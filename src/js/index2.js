require('../css/index2.scss');

document.querySelector('#aa').onclick = function () {
    import('./b.js').then(() => {
        console.log(arguments);
    });
};
