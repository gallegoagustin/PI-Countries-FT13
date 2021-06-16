/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  id: 'ARG',
  name: 'Argentina',
  flag: "https://restcountries.eu/data/afg.svg",
  continent: 'Americas',
  capital: 'Buenos Aires',
  subregion: 'South America',
  area: 200,
  population: 200
};

const activity = {
  name: 'Running',
  level: 1,
  length: 1,
  season: 'Winter'
}

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });
});

describe('Activities route', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /activity', () => {
    it('should get 200', () =>
      agent.get('/activities').expect(200)
    );
  });
});

describe('Activity route', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('POST /activity', () => {
    it('should get 200', () =>
      agent.post('/activity').send(activity).expect(200)
    );
  });
});
