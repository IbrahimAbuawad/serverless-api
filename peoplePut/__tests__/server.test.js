'use strict';

const superagent = require ('superagent');


describe('testing server for CRUD functions', () =>{
  it ('should respond with a newly updated database item when provided id on PUT', async () => {
    const createPerson = await superagent
    .post('https://dunu1cze4f.execute-api.us-east-1.amazonaws.com/test/people')
    .send({ name: 'dina faur', age: '24'})
    const response = await superagent
      .put(`https://dunu1cze4f.execute-api.us-east-1.amazonaws.com/test/people/${createPerson.body.id}`)
      .send({name: 'for sure ibrahim', age: '23'})
    expect(response.body[0].age).toEqual('23');
    expect(response.body[0].name).toEqual('for sure ibrahim');
  })
})