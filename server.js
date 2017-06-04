var express = require('express')
var app = express();
var http = require('http').Server(app);


var watson = require('watson-developer-cloud'); 
var fs = require('fs'); 

// CHATBOT

var ConversationV1 = require('watson-developer-cloud/conversation/v1');

// Set up Conversation service wrapper.
var conversation = new ConversationV1({
  username: '4d1076d1-1c64-4ac8-8f4d-a12d8d4df9e6', // replace with username from service key
  password: 'eKCHLmglT3Mz', // replace with password from service key
  path: { workspace_id: 'b4bb901d-63fa-4149-b5d8-82acd9ca94ba' }, // replace with workspace ID
  version_date: '2016-07-11'
});

var resp = "";
// Process the conversation response.
function processResponse(err, response) {
  if (err) {
    console.error(err); // something went wrong
    return;
  }

  // Display the output from dialog, if any.
  if (response.output.text.length != 0) {
    //maybe set response.output.text as output or returned?
      console.log(response.output.text[0]);
      resp = response.output.text[0];
      // console.log("my response: "+resp);
  }
}

//change user input here
var userInput = "help create";

// conversation.message({input:{ text: userInput }}, processResponse);

//CHATBOT END

// VISUAL RECOGNITION

var visual_recognition = watson.visual_recognition({ api_key: '7305e6802f8ba774d669a9ff5436e630730a4c54', version: 'v3', version_date: '2016-05-20' }); 


app.use(express.static('public'));

app.get('/peas', function(req, res){
  var params = { images_file: fs.createReadStream('./img/peas.jpg') }; 
  visual_recognition.classify(params, function(err, res2) {
    res.send(JSON.stringify(res2, null, 2));
  });
});

app.get('/bread', function(req, res){
  var params = { images_file: fs.createReadStream('./img/bread.jpg') }; 
  visual_recognition.classify(params, function(err, res2) {
    res.send(JSON.stringify(res2, null, 2));
  });
});

app.get('/apple', function(req, res){
  var params = { images_file: fs.createReadStream('./img/apple.jpeg') }; 
  visual_recognition.classify(params, function(err, res2) {
    res.send(JSON.stringify(res2, null, 2));
  });
});

app.get('/brownegg', function(req, res){
  var params = { images_file: fs.createReadStream('./img/brown_egg.png') }; 
  visual_recognition.classify(params, function(err, res2) {
    res.send(JSON.stringify(res2, null, 2));
  });
});

app.get('/cabbage', function(req, res){
  var params = { images_file: fs.createReadStream('./img/cabbage.png') }; 
  visual_recognition.classify(params, function(err, res2) {
    res.send(JSON.stringify(res2, null, 2));
  });
});

app.get('/italy', function(req, res){
  var params = { images_file: fs.createReadStream('./img/italy.png') }; 
  visual_recognition.classify(params, function(err, res2) {
    res.send(JSON.stringify(res2, null, 2));
  });
});

app.get('/whiteegg', function(req, res){
  var params = { images_file: fs.createReadStream('./img/white_egg.png') }; 
  visual_recognition.classify(params, function(err, res2) {
    res.send(JSON.stringify(res2, null, 2));
  });
});

app.get('/veg', function(req, res){
  var params = { images_file: fs.createReadStream('./img/veg.png') }; 
  visual_recognition.classify(params, function(err, res2) {
    res.send(JSON.stringify(res2, null, 2));
  });
});

app.get('/steak', function(req, res){
  var params = { images_file: fs.createReadStream('./img/steak.png') }; 
  visual_recognition.classify(params, function(err, res2) {
    res.send(JSON.stringify(res2, null, 2));
  });
});

http.listen(process.env.PORT || 5000, function(){
  console.log('App started');
});
