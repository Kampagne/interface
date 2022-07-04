# Kampagne-Interface (not yet ready for use)

This repository is one of the code sources of Kampagne, a free, decentralized TTRPG organization and session management tool. Made by RPG players, for RPG players.
- [Repository Structure](#repository-structure)
- [Features](#features)
- [Technologies](#technologies)
- [Development](#development)
    - [Concepts](#concepts)
    - [Structure](#structure)
    - [Sub content](#sub-content)
    - [Assets](#assets)
  - [Issues](#issues)
  - [Standards](#standards)
  - [Migrations](#migrations)
  - [GIT](#git)
  - [Production](#production)
- [Translations](#translations)
  - [Vue translations](#vue-translations)
  - [Database Backup](#database-backup)
- [Testing](#testing)

## Repository Structure
Kampagne is split up into three repositories to better organize and manage its codebase. Here is a description of each:
| Repository | Description |
|------------|-------------|
| Kampagne-Desktop | Most users will only ever need Kampagne-Desktop. It is a standalone desktop application that combines the Kampagne-Server and Kampagne-Interface into one easy-to-use interface. The only reason to use the other two repositories is if you want to run a dedicated server, or if you want to help develop Kampagne. This repositry mainly contains the code necessary for Electron to function properly.
| Kampagne-Server | The Kampagne server is what connects players together. Each campaign has its own server, which manages world content, player information, and session interactions. The server can be accessed from the Desktop application, or it can also serve the Interface over standard web communication. This means new users can try Kampagne before dedicating to installing it on their machines. |
| Kampagne-Interface | The interface is how the user interacts with Kampagne. It allows DMs to create content for their world, and players to manage their characters. The interface is compatible with both web browsers and electron, making it easy to share the same codebase for all experiences.

My philosophy for the desktop app is it should avoid unnecessary bloat.

My philosophy for the server app is it should run with no dependencies.

My philosophy for the interface is it should be pleasing to look at and effective to use.

## Features
***Kampagne is still in the very early stages of development. All features are subject to change.***

#### Objective
My objective with Kampagne is threefold.
1. I had a very hard time finding a tool with the right balance between world building and good features for use during sessions. That is what I want out of Kampagne. It should have world building tools on the order of Kanka and any other paid world-building website. This means creating and tracking characters, places, families, items, inventories, etc. It should also have useful tools for DMs and Players to use during a play session. Something like a party dashboard for the DM to easily get the status of various party members.

2. Open source seems to be lacking in the department of TTRPG tools. Kampagne will fill that gap and be a viable, free alternative to the plethora of paid services out there.

3. We need **fewer** cloud-based services. NOT MORE! You can get away with running this as a cloud-based service, but it is designed first and foremost to be a great desktop or mobile experience. What's the point in having a computer if it can't ever stretch its legs?

#### General Interface
Users of Kampagne can create Stories. A Story is basically a campaign world. It will contain all the characters, places, items, etc. A story owner can manage all the content of their world and invite other users to create a ***character*** in the world. The story dashboard will show the party members and other various stats.

When users are invited to join a story, their first step will be to create a character. The character is the entrypoint to the world for a party member. Any knowledge they have of the world is accessed through the character view.

#### Adaptability
I want Kampagne to be applicable to any TTRPG out there - not just D&D. At the moment I am not sure how I will achieve this, but I will be working towards it.

## Technologies
The technologies used for the front-end interface include:
* Svelte
* Typescript
* GraphQL

***
# Anything beyond this point is a copy of the Kanka README and the Laravel README that I took for inspiration. As I fill out the Kampagne readme, I will remove these READMES.
## Concepts

The app revolves around the concept of `Entities`. These include, for example:

* Characters
* Items
* Locations

### Structure

Each entity is split between two tables:

* The `entity` table, which contains some generic information available to all entities (name, id)
* A table for the specific data of the entity.

### Sub content

Most entities can have n-to-n relations to other entities.

For example, there are `Relations` that link two entities together, as well as `Attributes` which contain n-to-1 custom data of an entity.

### Assets

Assets can be compiled by following the [Laravel Documentation](https://laravel.com/docs/7.x/mix)

You'll need to install the various node packages first:
> yarn install
Select2 needs to be forced to 4.0.5 because newer builds (4.0.7) break:

> yarn install select2@4.0.5 --save
The following will produce assets for development:

> yarn run dev
The following will produce assets for production:

> yarn run prod
## Development

The following rules apply when developing the application.

### Issues

To discuss an issue, please use [Discord](https://discord.gg/rhsyZJ4).
All improvements, features and bugs must be related to a ticket on the trello. Each PR must contain a link to the trello ticket (see [contributing](./docs/CONTRIBUTING.md)).

### Standards

Code must follow PSR-4 recommendations.

### Migrations

All migrations should have a working `down()` function. Exceptions can be permitted for migrations that alter lots of content.

### GIT

Development should be done on your own fork of the repository in the `develop` branch, with substantial new features done in a separate branch.

**Tagging** is only done on the main branch.

### Production

Once a feature is ready and tested, the admin will merge it into the main branch. There is no auto-deploy to the servers.

## Translations

To work on translations, execute the following command to clean your translations and re-import them.

```sh
php artisan translations:reset
php artisan translations:import
```

In the database, change your user's `is_translator` to `true`._Navigate to `/translations` to start working on your translations. Add your new language to `app/config/laravel-translation-manager.php` if needed.

When you are finished, export your changes.

```sh
php artisan translations:export *
```

### Vue translations

To generate the vue translations:

```sh
    php artisan vue-i18n:generate
```

### Database Backup

To back up your database in a gzip file, Kanka uses the [laravel backup manager](https://github.com/backup-manager/laravel). Execute the following command (adapt to your config):

```sh
    php artisan db:backup --database=mysql --destination=s3 --compression=gzip --destinationPath=prod/ --timestamp="d-m-Y"
```

To restore a db, use the following:

```sh
    php artisan db:restore
```

## Testing

The configuration for PHPUnit-Tests is in the file /phpunit.xml.
Before the first run you have to run

```sh
php artisan setupTestDB --env=testing
```

to create and set up the TestDatabase. Also if the Database-Schema changes or new migrations are added, you have to reset the Testing Database with this command.

The Configuration for the TestEnvironment can be found in the files /phpunit.xml and .env.testing.
The Environment-Variables in both files need to be the same.

If everything is set up correctly, you can run the tests by just calling

```sh
phpunit
```

in the project directory.



<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 2000 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Cubet Techno Labs](https://cubettech.com)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[Many](https://www.many.co.uk)**
- **[Webdock, Fast VPS Hosting](https://www.webdock.io/en)**
- **[DevSquad](https://devsquad.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[OP.GG](https://op.gg)**
- **[WebReinvent](https://webreinvent.com/?utm_source=laravel&utm_medium=github&utm_campaign=patreon-sponsors)**
- **[Lendio](https://lendio.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).