## Introduction

SuperV is a platform that is built on top of Laravel to provide modularity and make common development procedures easier.

Nucleo, one of the most power modules of SuperV provides "Laravel Nova" like SPA admin panel.


## Installation & Configuration

### Installing as a fresh project

```sh
composer create-project superv/superv-project 0.4.x-dev@dev
```

### Installing on an existing project

..soon


### SPA Configuration

```sh

cp resources/nucleo/.env.example resources/nucleo/.env

php artisan superv:install

cd resources/nucleo

yarn

yarn serve --open

```


## License

SuperV is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).