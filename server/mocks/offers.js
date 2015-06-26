module.exports = function(app) {
  var express = require('express');
  var offersRouter = express.Router();

  offersRouter.get('/', function(req, res) {
    var offers = {
    "offers": [
    {
      "type": "percentage",
      "value": 4
    },
    {
      "type": "minus",
      "value": 15
    },
    {
      "type": "slice",
      "sliceValue": 100,
      "value": 12
    }
    ]
  };
  res.send(offers);
});

  app.use('/api/offers/:isbns', offersRouter);
};
