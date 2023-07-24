const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("properties.db");

const express = require('express');
let app = express();

app.use(express.json());

// GET the entire collection of properties, send it back as JSON data
app.get("/api",function(req,res)
{
    console.log("GET REQUEST RECEIVED");

  	db.all("SELECT rowid as id, address, postal_code, city, community, province, price, " + 
           "bedrooms, bathrooms, img, description FROM Properties", 
    function(err, results)
    {
        // send back table data as JSON data
        res.json(results);
    });
});

// GET the entire collection of properties at a specific id, send it back as JSON data
app.get("/api/:id",function(req, res)
{
    /*console.log("GET REQUEST RECEIVED");

    db.serialize(function(err, results)
    {
        let stmt = db.prepare("SELECT rowid as id, address, postal_code, city, " + 
                              "community, province, price, bedrooms, bathrooms, img, description " + 
                              "FROM Properties WHERE id=(?)"); 

        stmt.run(req.params.id, function()
        {
            // send back table data as JSON data
            res.json(results);
        });

        stmt.finalize();
    });*/
    console.log("GET REQUEST RECEIVED");

  	db.all("SELECT rowid as id, address, postal_code, city, community, province, price, " + 
           "bedrooms, bathrooms, img, description FROM Properties WHERE id=" + req.params.id, 
    function(err, results)
    {
        // send back table data as JSON data
        res.json(results);
    });
});

// PUT request to replace the entire collection with the collection provided
app.put("/api", function(req, res)
{
  	console.log("PUT REQUEST RECEIVED");

    // make the update to the database
    db.serialize(function()
    {
        let stmt = db.prepare("UPDATE Properties set address=(?), " +
                              "postal_code=(?), city=(?), community=(?), " +
                              "province=(?), price=(?), bedrooms=(?), " +
                              "bathrooms=(?), img=(?), description=(?)");
        stmt.run(req.body.address,
                 req.body.postal_code,
                 req.body.city,
                 req.body.community,
                 req.body.province,
                 req.body.price,
                 req.body.bedrooms,
                 req.body.bathrooms,
                 req.body.img,
                 req.body.description,
                // only send the response when we know the I/O has completed
                function()
                {
                    res.json({response: "ITEM UPDATED"});
                });

        stmt.finalize();
    });
});

// PUT request to replace the item in the collection with the supplied id with the item provided
app.put("/api/:id", function(req, res)
{
  	console.log("PUT REQUEST RECEIVED");

    // make the update to the database
    db.serialize(function()
    {
        let stmt = db.prepare("UPDATE Properties set address=(?), " +
                              "postal_code=(?), city=(?), community=(?), " +
                              "province=(?), price=(?), bedrooms=(?), " +
                              "bathrooms=(?), img=(?), description=(?) " +
                              "WHERE rowid=(?)");
        stmt.run(req.body.address,
                 req.body.postal_code,
                 req.body.city,
                 req.body.community,
                 req.body.province,
                 req.body.price,
                 req.body.bedrooms,
                 req.body.bathrooms,
                 req.body.img,
                 req.body.description,
                 req.params.id,
                // only send the response when we know the I/O has completed
                function()
                {
                    res.json({response: "ITEM UPDATED"});
                });

        stmt.finalize();
    });
});

// DELETE the entire collection
app.delete("/api", function(req, res)
{
  	console.log("DELETE REQUEST RECEIVED");

    db.run("DELETE FROM Properties", function()
    {
        res.json({response: "COLLECTION DELETED"});
    });
});

// DELETE a specific item in the collection
app.delete("/api/:id", function(req, res)
{
  	console.log("DELETE REQUEST RECEIVED");

    // make the update to the database
    db.serialize(function()
    {
        let stmt = db.prepare("DELETE FROM Properties WHERE rowid=(?)");
        stmt.run(req.params.id, function()
        {
            res.json({response: "ITEM DELETED"});
        });

        stmt.finalize();
    });
});

// POST request to insert the item provided into the collection
app.post('/api', function(req, res)
{
    console.log("POST REQUEST RECEIVED");

    // make the update to the database
    db.serialize(function()
    {
        let stmt = db.prepare("INSERT INTO Properties VALUES (?,?,?,?,?,?,?,?,?,?)");
        stmt.run(req.body.address,
                req.body.postal_code,
                req.body.city,
                req.body.community,
                req.body.province,
                req.body.price,
                req.body.bedrooms,
                req.body.bathrooms,
                req.body.img,
                req.body.description,
                // only send the response when we know the I/O has completed
                function()
                {
                    res.json({response: "ITEM INSERTED"});
                });

        stmt.finalize();
    });
});

var server = app.listen(3000, function(){
  console.log("RESTful API listening on Port 3000!")
});
