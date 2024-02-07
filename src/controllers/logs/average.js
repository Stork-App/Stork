const average = async (req, res) => {
    const {
     db: { Logs }, 
       body: { id }, 
    } = req;

    const logAvg = await Logs.findAvg(id);
      res.json(logAvg);  
};
module.exports = average
