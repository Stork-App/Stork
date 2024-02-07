const average = async (req, res) => {
    const {
     db: { Logs },
     params: { id }, 
    } = req;

    console.log(id, "the id")

    const logAvg = await Logs.findAvg(1);
      res.json(logAvg);  
};
module.exports = average
