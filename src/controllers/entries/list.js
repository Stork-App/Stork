const listEntry = async (req, res) => {
    const { 
      db: { Entry } // this req.db.User property is put here by the addModelsToRequest middleware
    } = req; 
  
    const entries = await Entry.list();
    res.send(entries);
  };
  
  module.exports = listEntry;
  