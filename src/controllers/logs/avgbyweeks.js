const avgbyweeks = async (req, res) => {
    const {
     db: { Logs }, 
     params: { id }, 
    } = req;

    console.log(id);
    const logAvgByWeeks = await Logs.getAvgBySortedWeek(id);
      res.json(logAvgByWeeks);
};
module.exports = avgbyweeks