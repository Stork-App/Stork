const Logs = require('../models/logs');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('logs').del()
  //seeds for user 224 log entries
  await Logs.create(2, 1, 4, 3, 5, 10, 1);
  await Logs.create(3, 2, 1, 5, 4, 2, 2);
  await Logs.create(4, 3, 2, 1, 5, 2, 3);
  await Logs.create(1, 4, 3, 2, 1, 9, 4);
  await Logs.create(5, 1, 2, 4, 3, 11, 1);
  await Logs.create(2, 5, 1, 3, 4, 15, 1);
  await Logs.create(3, 2, 4, 1, 5, 3, 2);
  await Logs.create(1, 3, 5, 2, 2, 4, 3);
  await Logs.create(4, 1, 3, 5, 2, 6, 3);
  await Logs.create(2, 4, 1, 3, 5, 16, 1);
  await Logs.create(5, 2, 4, 1, 3, 11, 4);
  await Logs.create(3, 5, 2, 1, 4, 12, 4);
  await Logs.create(1, 3, 4, 2, 5, 34, 5);
  await Logs.create(4, 1, 5, 3, 2, 4, 2);
  await Logs.create(2, 4, 3, 1, 5, 35, 5);
  await Logs.create(5, 2, 1, 4, 3, 5, 2);
  await Logs.create(3, 5, 4, 2, 1, 18, 1);
  await Logs.create(1, 3, 2, 5, 4, 6, 2);
  await Logs.create(4, 1, 2, 3, 5, 8, 3);
  await Logs.create(2, 4, 5, 1, 3, 10, 3);
  await Logs.create(5, 2, 3, 4, 1, 20, 1);
  await Logs.create(3, 5, 1, 2, 4, 15, 4);
  await Logs.create(1, 3, 4, 5, 2, 22, 1);
  await Logs.create(4, 1, 2, 3, 5, 23, 1);
  await Logs.create(2, 4, 5, 1, 3, 24, 1);
  await Logs.create(5, 2, 3, 4, 1, 25, 1);
  await Logs.create(3, 5, 1, 2, 4, 16, 4);
  await Logs.create(1, 3, 4, 5, 2, 17, 4);
  await Logs.create(4, 1, 2, 3, 5, 26, 1);
  await Logs.create(2, 4, 5, 1, 3, 27, 1);
  await Logs.create(5, 2, 3, 4, 1, 28, 1);
  await Logs.create(3, 5, 1, 2, 4, 36, 5);
  await Logs.create(1, 3, 4, 5, 2, 37, 5);
  await Logs.create(4, 1, 2, 3, 5, 29, 1);
  await Logs.create(2, 4, 5, 1, 3, 38, 5);
  await Logs.create(5, 2, 3, 4, 1, 30, 1);
  await Logs.create(3, 5, 1, 2, 4, 12, 3);
  await Logs.create(1, 3, 4, 5, 2, 14, 3);
  await Logs.create(4, 1, 2, 3, 5, 31, 1);
  await Logs.create(2, 4, 5, 1, 3, 16, 3);
  await Logs.create(5, 2, 3, 4, 1, 32, 1);
  await Logs.create(3, 5, 1, 2, 4, 7, 2);
  await Logs.create(1, 3, 4, 5, 2, 8, 2);
  await Logs.create(4, 1, 2, 3, 5, 33, 1);
  await Logs.create(2, 4, 5, 1, 3, 9, 2);
  await Logs.create(5, 2, 3, 4, 1, 34, 1);
  await Logs.create(3, 5, 1, 2, 4, 20, 4);
  await Logs.create(1, 3, 4, 5, 2, 35, 1);
  await Logs.create(4, 1, 2, 3, 5, 39, 5);
  await Logs.create(2, 4, 5, 1, 3, 36, 1);
};
