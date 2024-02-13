const Thread = require('../models/thread');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await knex('threads').del()
  await Thread.create(1, 1, 'Lorem ipsum dolor sit amet.');
  await Thread.create(2, 2, 'Sed ut perspiciatis unde omnis iste natus error.');
  await Thread.create(3, 3, 'Duis aute irure dolor in reprehenderit.');
  await Thread.create(4, 4, 'Ut enim ad minima veniam, quis nostrum exercitationem.');
  await Thread.create(5, 5, 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.');
  await Thread.create(6, 6, 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur.');
  await Thread.create(1, 7, 'At vero eos et accusamus et iusto odio dignissimos ducimus.');
  await Thread.create(2, 8, 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.');
  await Thread.create(3, 9, 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.');
  await Thread.create(4, 10, 'Temporibus autem quibusdam et aut officiis debitis aut rerum.');
  await Thread.create(5, 11, 'Harum quidem rerum facilis est et expedita distinctio.');
  await Thread.create(6, 12, 'Nam libero tempore, cum soluta nobis est eligendi optio cumque.');
  
  // Additional seed data with random generic text
  await Thread.create(1, 13, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  await Thread.create(2, 1, 'Nulla facilisi. Ut tincidunt ex vitae magna tincidunt.');
  await Thread.create(3, 2, 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.');
  await Thread.create(4, 3, 'Vestibulum euismod urna nec lacus bibendum, ut fermentum odio interdum.');
  await Thread.create(5, 4, 'Fusce ullamcorper nisl id risus rhoncus, non cursus nisl tincidunt.');
  await Thread.create(6, 5, 'Integer nec lacus id purus bibendum scelerisque eu vel augue.');
};
