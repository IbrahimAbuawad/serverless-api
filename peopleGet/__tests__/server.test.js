'use strict';

const superagent = require ('superagent');


describe('testing server for CRUD functions', () =>{
  it ('should respond with an array of database items', async () => {
    const response = await superagent.get('https://dunu1cze4f.execute-api.us-east-1.amazonaws.com/test/people');
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body[0].id).toEqual('c28380bf-5a21-445c-aa26-2b947b309998');
  })
  it ('should respond with a single database item when provided with ID parameter', async () => {
    const response = await superagent.get('https://dunu1cze4f.execute-api.us-east-1.amazonaws.com/test/people/c28380bf-5a21-445c-aa26-2b947b309998');
    expect(response.body[0].id).toEqual('c28380bf-5a21-445c-aa26-2b947b309998');
    expect(response.body[0].name).toEqual('iam sooo tired');
  })
  
 
})