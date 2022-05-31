const req = require('express/lib/request');
const Friend = require('../models/friendModel');

exports.createFriend = async (req, res) => {
    let doc = await Friend.create(req.body);
    res.status(200).json({
      status: "Success",
      data: { friend: doc, message: "Friendcreated successfully" },
    });
  }



  exports.getAllFriends = async (req , res) => {
      let friends = await Friend.find();
      res.status(200).json({
          status: "Success",
          data: {friend: friends , message: "Friends Find Successfully"},
      });
  }

  exports.getOneFriend = async (req , res) => {
    let friend = await Friend.findById(req.params.id);
    res.status(200).json({
        status: "Success",
        data: {friend: friend , message: "Friend Find by Id Successfully"},
    });
}

exports.updateOneFriend = async (req , res) => {
    let friend = await Friend.findByIdAndUpdate(req.params.id , req.body,{
        new:true
    });
    res.status(200).json({
        status: "Success",
        data: {friend: friend , message: "Friend Find by Id Successfully"},
    });
}


exports.deleteOneFriend = async (req , res) => {
    let friend = await Friend.findByIdAndDelete(req.params.id);
    res.status(200).json({
        status: "Success",
        data: {friend: friend , message: "Friend Find by Id Successfully"},
    });
}