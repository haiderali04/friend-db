const req = require('express/lib/request');
const Friend = require('../models/friendModel');

exports.createFriend = async (req, res) => {
    try{
        let doc = await Friend.create(req.body);
        res.status(200).json({
          status: "Success",
          data: { friend: doc, message: "Friendcreated successfully" },
        });  
    }catch(err){
        let doc = await Friend.create(req.body);
        res.status(400).json({
          status: "Error",
          data: { friend: doc, message: err.message },
        });
    }
   
  }





  exports.getAllFriends = async (req , res) => {
      try{   let friends = await Friend.find();
        res.status(200).json({
            status: "Success",
            data: {friend: friends , message: "Friends Find Successfully"},
        });}
         catch(err){
        let doc = await Friend.find();
        res.status(400).json({
          status: "Error",
          data: { friend: doc, message: err.message },
        });
    
      }
   
  }

  exports.getOneFriend = async (req , res) => {
    try{let friend = await Friend.findById(req.params.id);
        res.status(200).json({
            status: "Success",
            data: {friend: friend , message: "Friend Find by Id Successfully"},
        });} 
    catch(err){
         let doc = await Friend.findById(req.params.id);
        res.status(400).json({
          status: "Error",
          data: { friend: doc, message: err.message },
        });
    }
    
    
}

exports.updateOneFriend = async (req , res) => {
    try{let friend = await Friend.findByIdAndUpdate(req.params.id , req.body,{
        new:true
    });
    res.status(200).json({
        status: "Success",
        data: {friend: friend , message: "Friend update by Id Successfully"},
    });} 
    catch(err){
        let doc = await Friend.findByIdAndUpdate(req.params.id , req.body,{
            new:true
        });
        res.status(400).json({
          status: "Error",
          data: { friend: doc, message: err.message },
        });
    }
    
}


exports.deleteOneFriend = async (req , res) => {
    try{
        let friend = await Friend.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: "Success",
            data: {friend: friend , message: "Friend Find by Id Successfully"},
        });
    } catch(err){
        let doc = await Friend.findByIdAndDelete(req.params.id);
        res.status(400).json({
          status: "Error",
          data: { friend: doc, message: err.message },
        });
    }
    
}