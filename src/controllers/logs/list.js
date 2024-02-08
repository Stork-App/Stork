const listLogs = async (req, res) => {
  const {
      params:{id: user_id},
      db: { Logs } // this req.db.User property is put here by the addModelsToRequest middleware
    } = req; 
     console.log(user_id)
    const logs = await Logs.list(user_id);
    res.send(logs);
  };
  
  module.exports = listLogs;
  