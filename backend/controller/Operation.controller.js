const Operation = require('../models/operation.model');

const addition = async (req, res) => {
   const { value1, value2 } = req.body;

   let sum = Number(value1) + Number(value2);
   console.log(`Calculation done: ${sum}`);

   const newEntry = new Operation({
      value1: value1,
      value2: value2,
      result: sum
   });
   const savedData = await newEntry.save();
   res.status(200).json({ sum: sum });
}

const substraction = async (req, res) => {

   const { value1, value2 } = req.body;

   let sub = Number(value1) - Number(value2);
   console.log(value1);
   console.log(`Calculation done: ${sub}`);

   const newEntry = new Operation({
      value1: value1,
      value2: value2,
      result: sub,
      type: 'subtraction'
   });
   await newEntry.save();

   res.status(200).json({ sub: sub });
}

module.exports = { addition, substraction }