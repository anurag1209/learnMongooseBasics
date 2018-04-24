var mongoose = require('mongoose');

// my mongo_url : mongodb://mongouser:mongouser@ds133964.mlab.com:33964/learnmongo
mongoose.connect('mongo_url');

var personSchema = mongoose.Schema({
	name : String,
	age : Number,
	nickname : String
});


// Attaching methods to a schema
personSchema.methods.tellName = function () {
	var greeting = this.name 
		? "My name is " + this.name 
		: "I dont have any name";
	console.log(greeting);
}

var Person = mongoose.model('Person', personSchema);

//----------------------------------------------------------------------
// Part-1 : Inserting Data into DB

// var Anurag = new Person({
// 	name : "Anurag",
// 	age : 27,
// 	nickname : "Lallu"
// });

// Anurag.tellName();

// Anurag.save(function(err, data){

// 	if(err){
// 		throw err;
// 	}
// 	console.log("Name " + data.name + " saved in database");
// });



//------------------------------------------------------------------------

// Part-2 : Finding Data from DB


// Person.find({}, function(err, data){
// 	if(err){
// 		throw err;
// 	}
// 	console.log(data);
// });

// Person.find({name : "Anurag"}, function(err, data){
// 	if(err){
// 		throw err;
// 	}
// 	console.log(data);
// });

//------------------------------------------------------------------------

// Part-3 : Updating Data into Document
// Person.update({"name" : "Shubham"}, {$set : {'nickname' : 'Kaaliya'}}, function(err, data){
// 	if(err){
// 		throw err;
// 	}
// 	console.log(data);
// });

//------------------------------------------------------------------------

// Part-4 : Deleting Document from DB

// Person.remove({'name' : 'Anurag'}, function(err, data){
// 	if(err){
// 		throw err;
// 	}
// 	console.log(data);
// 	console.log("Requested data is removed");
// });


//------------------------------------------------------------------------

// Part-5 : "OR" condition in mongoDB

// Person.find({$or : [{'name' : 'Anurag'}, {'age' : 26}]}, function(err, data){
// 	console.log(data);
// });


//------------------------------------------------------------------------

// Part-6 : "AND" condition in mongoDB

// Person.find({$and : [{'name' : 'Anurag'}, {'age' : 24}]}, function(err, data){
// 	console.log(data);
// });


//------------------------------------------------------------------------

// Part-7 : use of "AND" & "OR" condition in combined mongoDB

// Person.find({ $or : [{ $and : [{'name' : 'Anurag'}, {'age' : 27}] }, { $and : [{'name' : 'Pooja'}, {'age' : 26}]}] }, function(err, data){
// 	if(err){
// 		throw err;
// 	}
// 	console.log(data);
// });

//-----------------------------------------------------------------------------

// Part-8 : Getting document's selected values (Projection)

// 1- in projection, we set flags for things we want to retrieve
// 2- 'limit' is used to get the number of posts
// 3- 'skip' is used for skipping number of documents


// Person.find({}, {"name":1, "age":1, "_id": 0}, function(err, data){
// 	if(err){
// 		throw err;
// 	}
// 	console.log(data);
// }).limit(2);

// Person.find({}, {"name":1, "age":1, "_id": 0}, function(err, data){
// 	if(err){
// 		throw err;
// 	}
// 	console.log(data);
// }).limit(2).skip(1);

//--------------------------------------------------------------------

// Part-9 : Sort documents (Use sort())... -1 for desc and 1 for asc

Person.find({}, function(err, data){
	if(err){
		throw err;
	}
	console.log(data);
}).sort({'name' : -1});

