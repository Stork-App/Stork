const logsbyuser = async (req, res) => {
  const {

      db: { Logs },
      params: { id },

  } = req;
  console.log('test');
  const usersLogs = await Logs.logsByUser(id);
    res.json(usersLogs);

};

module.exports = logsbyuser
