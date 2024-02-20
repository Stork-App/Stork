const knex = require('../knex');


class Logs {

    static async list(user_id) {
      const query = 'SELECT * FROM logs WHERE user_id = ? ORDER BY created_at DESC';
      const args = [user_id]
      const { rows } = await knex.raw(query,args);
      const logs = rows
      return logs
    }
  
    static async create(mood, abd_pain, back_pain, nausea, fatigue, weeks, user_id) {
        const query = `INSERT INTO logs (mood, abd_pain, back_pain, nausea, fatigue, weeks, user_id)
          VALUES (?, ?, ?, ?, ?, ?, ?) RETURNING *`;
        const args = [mood, abd_pain, back_pain, nausea, fatigue, weeks, user_id];
        const { rows } = await knex.raw(query, args);
        const logEntry = rows[0];
        return logEntry; 
    }
    static async findAvg(user_id) {
        const query = `SELECT ROUND(AVG(mood), 2) AS mood, ROUND(AVG(abd_pain), 2) AS abd_pain, ROUND(AVG(back_pain), 2) AS back_pain, ROUND(AVG(nausea), 2) AS nausea, ROUND(AVG(fatigue), 2) AS fatigue FROM logs WHERE user_id = ?`;
        const args = [user_id];
        const { rows } = await knex.raw(query, args);

        return rows;
    }

  
  static async update(mood, abd_pain, back_pain, nausea, fatigue, weeks, logId, user_id) {
    const query = "UPDATE logs SET mood = ?, abd_pain = ?, back_pain = ?, nausea = ?, fatigue = ?, weeks = ? WHERE id = ? AND user_id = ? RETURNING *;";
    const args = [mood, abd_pain, back_pain, nausea, fatigue, weeks, logId, user_id];
       const { rows } = await knex.raw(query, args);
       const log = rows[0];
       return log ? new Logs(log): null
    }
  
  
}


module.exports = Logs;

