'use strict';

const superagent = require ('superagent');


describe('testing server for CRUD functions', () =>{
  it ('should respond an empty object after item deleted when provided id on delete', async () => {
    const createPerson = await superagent
    .post('https://dunu1cze4f.execute-api.us-east-1.amazonaws.com/test/people')
    .send({ name: 'iam sooo tired', age: '23'})
    const response = await superagent
      .delete(`https://dunu1cze4f.execute-api.us-east-1.amazonaws.com/test/people/${createPerson.body.id}`);
    expect(response.body).toEqual({});
  })
})