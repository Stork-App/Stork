const logsbyuser = async (req, res) => {
  const {
      db: { Logs },
      params: { id },
  } = req;
  const usersLogs = Logs.logsByUser(id);
  res.json(usersLogs);
};

module.exports = logsbyuser
