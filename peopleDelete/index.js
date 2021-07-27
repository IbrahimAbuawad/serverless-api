const peopleSchema = require('./people.schema.js');

exports.handler = async (event) => {
  try {
    const id = event?.pathParameters?.id;
    let data;
    if (id) {
     const deleteItem = await peopleSchema.delete({id});
     data = deleteItem;
    } 
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      status: 500,
      message: e.message,
    };
  }
};