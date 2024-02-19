const update = async (req, res) => {
  const {
      db: { Logs },
      params: { id: logId },
      body: {user_id, mood, abd_pain, back_pain, nausea, fatigue, weeks},
  } = req;
console.log(logId, user_id)
  try {

      const updatedLog = await Logs.update(mood, abd_pain, back_pain, nausea, fatigue, weeks, logId, user_id);
     console.log(updatedLog)
      if (updatedLog) {
        res.json(updatedLog);
        console.log('successfull')
      } else {
          res.status(404).send('Log not found');
      }
  } catch (error) {
      res.status(500).send('Error updating log');
  }
};

module.exports = update
