'use strict';

const superagent = require ('superagent');


describe('testing server for CRUD functions', () =>{
  it ('should respond with a newly created database item when provided item on POST', async () => {
    const response = await superagent
      .post('https://dunu1cze4f.execute-api.us-east-1.amazonaws.com/test/people')
      .send({name: 'ibrahim abuawad', age: '23'})
    expect(response.body.age).toEqual('23');
    expect(response.body.name).toEqual('ibrahim abuawad');
  })
})