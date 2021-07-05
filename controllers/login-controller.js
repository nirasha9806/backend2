const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Researcher } = require('../models/researcher-model');
const { WorkshopPresenter } = require('../models/workshopPresenter-model');
const { Attendee } = require('../models/attendee-model');

const LogIn = async (req, res, next) => {
  let workshopPresenter = await WorkshopPresenter.find({
    email: req.body.email,
  });
  let researcher = await Researcher.find({ email: req.body.email });
  let attendee = await Attendee.find({ email: req.body.email });
  console.log(workshopPresenter);
  if (researcher.length > 0) {
    await Researcher.find({ email: req.body.email })
      .exec()
      .then((researcher) => {
        // console.log(req.body.email);
        if (researcher.length < 1) {
          return res.status(200).json({
            message: 'Email not found, User does not exit',
          });
        }
        bcrypt.compare(
          req.body.password,
          researcher[0].password,
          (err, result) => {
            if (err) {
              return res.status(200).json({
                message: 'Login failed',
              });
            }
            if (result) {
              const token = jwt.sign(
                {
                  email: researcher[0].email,
                  userId: researcher[0]._id,
                },
                '' + process.env.JWT_KEY,
                {
                  expiresIn: '1h',
                }
              );
              console.log(researcher);
              return res.status(200).json({
                message: 'Login successful',
                user: researcher,
                token: token,
              });
            }
            res.status(200).json({
              message: 'Login failed',
            });
          }
        );
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  } else if (workshopPresenter.length > 0) {
    console.log('lll');
    await WorkshopPresenter.find({ email: req.body.email })
      .exec()
      .then((workshopPresenter) => {
        console.log(req.body.email);
        if (workshopPresenter.length < 1) {
          return res.status(200).json({
            message: 'Email not found, User does not exit',
          });
        }
        bcrypt.compare(
          req.body.password,
          workshopPresenter[0].password,
          (err, result) => {
            if (err) {
              return res.status(200).json({
                message: 'Login failed',
              });
            }
            if (result) {
              const token = jwt.sign(
                {
                  email: workshopPresenter[0].email,
                  userId: workshopPresenter[0]._id,
                },
                '' + process.env.JWT_KEY,
                {
                  expiresIn: '1h',
                }
              );
              console.log(workshopPresenter);
              return res.status(200).json({
                message: 'Login successful',
                user: workshopPresenter,
                token: token,
              });
            }
            res.status(200).json({
              message: 'Login failed',
            });
          }
        );
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  } else if (attendee.length > 0) {
    await Attendee.find({ email: req.body.email })
      .exec()
      .then((attendee) => {
        console.log(req.body.email);
        if (attendee.length < 1) {
          return res.status(200).json({
            message: 'Email not found, User does not exit',
          });
        }
        bcrypt.compare(
          req.body.password,
          attendee[0].password,
          (err, result) => {
            if (err) {
              return res.status(200).json({
                message: 'Login failed',
              });
            }
            if (result) {
              const token = jwt.sign(
                {
                  email: attendee[0].email,
                  userId: attendee[0]._id,
                },
                '' + process.env.JWT_KEY,
                {
                  expiresIn: '1h',
                }
              );
              console.log(attendee);
              return res.status(200).json({
                message: 'Login successful',
                user: attendee,
                token: token,
              });
            }
            res.status(200).json({
              message: 'Login failed',
            });
          }
        );
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  } else {
    return res.status(200).json({
      message: 'Invalid Email.. Try Again !!',
    });
  }
};

exports.LogIn = LogIn;
