const updateThread = async (req, res) => {
    const {
      db: { Thread },
      params: { id },
      body: { comment },
    } = req;
  
    const updateThread = await Thread.update(comment, id);
    res.json(updateThread);
  };
  module.exports = updateThread;
  