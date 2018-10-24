## Introduction

SuperV is a platform that is built on top of Laravel to provide modularity and make common development procedures easier.

## Ports

Ports are the gates that open your application to outside word. A basic Laravel application has api and web ports. But usually an app need more than that. Let's say you have an app that has the following sub-systems:

- Web site
- Admin panel
- Customer panel
- Reseller panel, and so on..

With `ports` concept, you can easily define ports with different hostnames and register port-specific routes. 

## Modules

Nucleo, one of the most power modules of SuperV provides "Laravel Nova" like SPA admin panel.


## Installation & Configuration

### Env File

SuperV needs two parameters in your .env file

`SV_INSTALLED`: with values true of false this parameter enables/disables the platform completely from your system. It is injected by installer automatically.

`SV_HOSTNAME`: This is the base domain for generation port hostnames. Usually it is your app domain. You should set this before/within installation


Before starting installation

### Installing as a fresh project

Create project with composer

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
