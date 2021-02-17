## Vitamon
Vitamon is a fun mobile application that allows users to set and achieve goals through a routine and reward system. In our app, Vitamons are monsters that are fed through users’ healthy habits and daily accomplishments. You can also add friends to help keep you accountable. Flex your achievements on the Vitamon app!

## Technologies
Our server was created with Node.js, Express, Passport, PostgreSQL, and Sequelize, and deployed on Heroku.

Our [frontend](
https://github.com/Vitamon-App/vitamon-frontend "Vitamon Frontend Repository") was created with JavaScript, React Native, Expo, React Navigation, Redux, and Victory.js.

## Developers

[Melissa Pastore](https://www.linkedin.com/in/melissalpastore) | [Veronica Tomchak](https://www.linkedin.com/in/veronica-tomchak) | [Priscila Pintado](http://www.linkedin.com/in/priscila-pintado") | [Daniel Park](https://www.linkedin.com/in/danieljosephpark)

## Installation

```js
git clone https://github.com/Vitamon-App/Vitamon-backend
cd vitamon-backend

// if you have the psql command line installed:
createdb vitamon and vitamon-test

// otherwise:
psql
CREATE DATABASE vitamon;
\q

npm install
npm run seed
npm run start-server
```
