// const Users = require('../models').Users;
const Events = require ('../models').Events;

const create = async function(req, res) {
  res.setHeader('ContentType', 'application/json');

  const body = req.body;
  body.userId = req.user.id

  [err, eventId] = await to(Events.max('eventId'));
  if (err) console.log(err.message);

  // body.eventId = eventId || eventId === 0 ? eventId + 1 : 0;
  if (!body.name) {
    return ReE(res, 'Please enter a name', 422);
  } else {
    let err, event;

    [err, event] = await to(Events.create(body));
    if (err) return ReE(res, err, 422);

    return ReS(res, event, 201);
  }
};
module.exports.create = create;

const update = async function(req, res) {
  let err, event;
  event = req.body;
  [err, event] = await to(
    Events.update(event, {
      where: {
        id: event.id,
      },
    }),
  );
  if (err) {
    if (typeof err == 'object' && typeof err.message != 'undefined') {
      err = err.message;
    }

    if (typeof code !== 'undefined') res.statusCode = code;
    res.statusCode = 422;
    return res.json({ success: false, error: err });
  }

  return res.json(event);
};
module.exports.update = update;

const getAll = async function(req, res){
  res.setHeader('Content-Type', 'application/json');
  let err, event;
  let whereStatement = {};
  if (req.query.name){
   whereStatement.name = {
      $like: '%' + req.query.name + '%',
    };
  }
  // if (req.query.date){whereStatment.date $eq before getdate(today)}
  // if (req.query.date){
    // whereStatement.date
  [err,event] = await to(Events.findAll({where: whereStatement // , order: [['last','ASC']]
}),
  );
  if (err) console.log(err.message);
  return res.json(event);
};
module.exports.getAll = getAll;

const getEvent = async function (req,res) {
  let err, event;
  let eventId = parseInt(req.params.eventId);
  res.setHeader('Content-Type', 'application/json');
  [err,event] = await to(Events.findbypk(eventId));
  if(!event){
    res.statuscode = 404;
      return res.json({success:false, error:err });
    }
    return res.json(event);
}
module.exports.getEvent = getEvent;

const deleteEvent = async function (req,res){
  res.setHeader('Content-Type','application/json');
  let err, event, match=false;
  let eventId = parseInt(req.params.eventId);
 /*
  [err, event] = await to(Events.findByPk(eventId));
  if (!event) {
    res.statusCode = 404;
    return (res.json({ success: false, error: err }), match=false));
  } else if(event){
    match = true;
    console.log(event + ': ' + match);
    return res.json({event, match});
  };


  if(!eventId|!match){
    return console.log('no eventId in url request')
  };
  */
 [err,event] = await to(Events.destroy({where: {id: eventId}}));

/* if (typeof err == 'object' && typeof err.message != 'undefined') {
  err = err.message;
}
if (typeof code !== 'undefined') res.statusCode = code;
res.statusCode = 422
*/
   if(err){
    TE('Error on Delete');
    return res.json({success:false, error:err.message});
  }
  console.log('check for successful delete');
  return res.json(event);
  }
module.exports.deleteEvent = deleteEvent;
