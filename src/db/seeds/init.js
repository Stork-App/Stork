const User = require('../models/user');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await knex('users').del()
  await User.create('jane', 'coolcat@gmail.com', '1234');
  await User.create('lily', 'l33t-guy@gmail.com', '1234');
  await User.create('amanda', 'wowow@gmail.com', '1234');
  await User.create('rachel', 'rachel@gmail.com', 'abc');
  await User.create('kate', 'kate@gmail.com', 'abc');
  await User.create('catherine', 'cookie@gmail.com', 'abc');
};
