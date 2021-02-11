var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const { v4: uuidv4 } = require('uuid')
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient();

app.get('/subscriber', function(req, res) {
  var params = {
    TableName: 'contacttable-dev'
  }
  docClient.scan(params, function(err, data) {
    if (err) res.json({ err })
    else res.json({ data })
  })
});

app.get('/subscriber/:id', function(req, res) {
  var params = {
    TableName: 'contacttable-dev',
    FilterExpression: 'id = :val',
    ExpressionAttributeValues: {':val': req.params.id}
  }
  docClient.scan(params, function(err, data) {
    if (err) res.json({ err })
    else res.json({ data })
  })
});

app.post('/subscriber', function(req, res) {
  var item = {
    id: uuidv4(),
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    nickname: req.body.nickname
  }
  var params = {
    TableName : 'contacttable-dev',
    Item: item
  }
  docClient.put(params, function(err, data) {
    if (err) res.json({ err })
    else res.json(item)
  })
});

app.listen(3000, function() {
    console.log("App started")
});

module.exports = app
