var express = require('express');
var router = express.Router();
var axios = require('axios');
/* GET home page. */
router.get('/', function (req, res, next) {

  var options = {
    method: 'GET',
    url: 'https://news.nodeista.com/news',
  };

  axios.request(options).then(function (response) {
    res.render('index',{'data':response.data, "name":"All","all":true})
  }).catch(function (error) {
    console.error(error);
  });
  
});
router.post('/', (req, res) => {
  var axios = require("axios").default;
  
  if(req.body.src == 'asi'){
    var options = {
      method: 'GET',
      url: 'https://news.nodeista.com/news/asianet',
    };
  
    axios.request(options).then(function (response) {
      res.render('index',{'data':response.data,"name":"Asianet","asi":true})
    }).catch(function (error) {
      console.error(error);
    });
  }
  else if(req.body.src == '24n'){
    var options = {
      method: 'GET',
      url: 'https://news.nodeista.com/news/24News',
    };
  
    axios.request(options).then(function (response) {
      
      res.render('index',{'data':response.data,"name":"24 News","24n":true})
    }).catch(function (error) {
      console.error(error);
    });
  }
  else if(req.body.src == 'man'){
    var options = {
      method: 'GET',
      url: 'https://news.nodeista.com/news/manorama',
    };
  
    axios.request(options).then(function (response) {
      res.render('index',{'data':response.data,"name":"Manorama News","man":true})
    }).catch(function (error) {
      console.error(error);
    });
  }
  else if(req.body.src == 'mat'){
    var options = {
      method: 'GET',
      url: 'https://news.nodeista.com/news/mathrubhumi',
    };
  
    axios.request(options).then(function (response) {
      res.render('index',{'data':response.data,"name":"Mathrubhumi News","mat":true})
    }).catch(function (error) {
      console.error(error);
    });
  }
  else if(req.body.src == '18n'){
    var options = {
      method: 'GET',
      url: 'https://news.nodeista.com/news/news18',
    };
  
    axios.request(options).then(function (response) {
      res.render('index',{'data':response.data,"name":"News 18","18n":true})
    }).catch(function (error) {
      console.error(error);
    });
  }
  else if(req.body.src == 'med'){
    var options = {
      method: 'GET',
      url: 'https://news.nodeista.com/news/mediaOne',
    };
  
    axios.request(options).then(function (response) {
      res.render('index',{'data':response.data,"name":"Media One","med":true})
    }).catch(function (error) {
      console.error(error);
    });
  }
  else{
    res.redirect('/')
  }
  
  
})

module.exports = router;
