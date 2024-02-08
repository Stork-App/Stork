const average = async (req, res) => {
    const {
     db: { Logs },
     params: { id }, 
    } = req;

    console.log(id, "the id")

    const logAvg = await Logs.findAvg(id);
      res.json(logAvg);  
};
module.exports = average
