const knex = require("../knex");

class Thread {
  static async list() {
    const query = "SELECT * FROM threads";
    const { rows } = await knex.raw(query);
    return rows;
  }

  static async create(user_id, post_id, comment) {
    const query = `INSERT INTO threads (user_id, post_id, comment)
          VALUES (?, ?, ?) RETURNING *`;
    const args = [user_id, post_id, comment];
    const { rows } = await knex.raw(query, args);
    const threadEntry = rows[0];
    return threadEntry;
  }

  static async find(post_id) {
    const query = "SELECT * FROM threads WHERE post_id = ?";
    const args = [post_id];
    const { rows } = await knex.raw(query, args);
    return rows
  }

  static async update(comment, id) {
    const query = "UPDATE threads SET comment = ? WHERE id = ? RETURNING *";
    const args = [comment, id];
    console.log(args)
    const { rows } = await knex.raw(query, args);
    return rows;
    }
}

module.exports = Thread;
