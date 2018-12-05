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

SuperV needs two parameters in your .env file

`SV_INSTALLED`: with values true of false this parameter enables/disables the platform completely from your system. It is injected by installer automatically.

`SV_HOSTNAME`: This is the base domain for generation port hostnames. Usually it is your app domain. You should set this before/within installation 


### Installing as a fresh project

#### 1. Create project with composer

```bash
composer create-project superv/superv-project 0.4.x-dev@dev

```

#### 2. Add the DB Credentials

Next make sure to create a new database and add your database credentials to your .env file:

```
DB_HOST=localhost
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret
```



#### 3. Run the installer
```bash
php artisan superv:install
```



### Installing on an existing project

..soon



### SPA Configuration

```bash

cp resources/nucleo/.env.example resources/nucleo/.env

cd resources/nucleo

yarn

yarn serve --open

```


### Default Admin User
>**email:** `root@superv.io`   
>**password:** `secret`



## License

SuperV is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
