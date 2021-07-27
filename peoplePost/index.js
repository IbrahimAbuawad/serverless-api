const uuid = require('uuid').v4;
const peopleModel = require('./people.schema.js');

exports.handler = async (event) => {
  try {
    const { name, age } = JSON.parse(event.body);
    const id = uuid();
    const doc = new peopleModel({ id, name, age });
    const data = await doc.save();
    return {
      statusCode: 201,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      status: 500,
      message: e.message,
    };
  }
};