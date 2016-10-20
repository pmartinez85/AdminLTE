const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.sass('app.scss')
        .less('app1.less')
        .less('./node_modules/admin-lte/build/less/AdminLTE.less', './public/css/ad/AdminLTE.css')
        .styles([
        './public/css/app.css',
        './public/css/ad/AdminLTE.css'
    ])
       .webpack('app.js')
});
