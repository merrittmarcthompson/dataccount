const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get the database ready. The general consensus on Stack Overflow is that you should do this connect once at the start of your program rather than every time you need it in a router.
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://merrittmarcthompson:QnkZ4v%24rYk3%23@cluster0-sbqgw.mongodb.net/test?retryWrites=true&w=majority";
const mongoClient = new MongoClient(uri, { useNewUrlParser: true });
mongoClient.connect(error => {
  // If we can't connect, nothing further is going to work and there's no point in continuing.
  if (error != null)
    throw error;
});

app.get(
  '/api/owner/accessRequests/pending',
  async (req, res) => {
    // The owner wants to see the access requests that need their approval.
    console.log('/api/owner/accessRequests/pending');

    try {
      // Experience has shown that the db may not be ready yet the first time, so there may be a pause and something else may happen for a while if this is the first GET.
      db = await mongoClient.db("test");

      // Make an array of the access requests that are pending approval.
      const accessRequestsCursor = db.collection("accessRequests");
      const pendingAccessRequests = await accessRequestsCursor.find({ approved: { $exists: false } }).toArray();

      // Add a name to the array, just in case we want to add more results to this API later, like this:
      //   { pendingAccessRequests: [...the pending access requests...] }
      const wrappedPendingAccessRequests = { pendingAccessRequests: pendingAccessRequests };

      res.status(200);
      const json = JSON.stringify(wrappedPendingAccessRequests);
      console.log(json);
      res.send(json);
    } catch (error) {
      console.error(error);

      // This should have worked. If it didn't, it seems like it's our (the server's) fault, i.e. 500.
      res.status(500);
      res.send();
    }
  });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('listening on port ' + port));