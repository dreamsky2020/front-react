const { override, fixBabelImports, addLessLoader, addWebpackPlugin } = require('customize-cra');

 module.exports = override(

    fixBabelImports('import', {

        libraryDirectory: 'es',
        
        style: true,
    }),

    addLessLoader({

        javascriptEnabled: true,

        modifyVars: { '@primary-color': '#E99C2E' },
    }),


);