const update = async (req, res) => {
  const {
      db: { Logs },
      params: { id },
      body: {mood, abd_pain, back_pain, nausea, fatigue},
  } = req;

  try {
      const updatedLog = await Logs.update(mood, abd_pain, back_pain, nausea, fatigue, id);
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
