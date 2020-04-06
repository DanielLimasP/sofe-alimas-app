import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
  
  var json_data;
  var list_all = [];
  var list_countries = [];
  var list_timeline_global = [];
  var list_timeline_countries = [];

  var req_all = fetch('http://api.coronastatistics.live/all')
            .then(function (response) {
                //console.log(response.json())
                return response.json();
            }).then(function(data){
                json_data = data;
                for(var i in json_data)
                list_all.push([i, json_data[i]]);    
                return data;
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
  
  var req_countries = fetch('http://api.coronastatistics.live/countries')
            .then(function (response) {
                //console.log(response.json())
                return response.json();
            }).then(function(data){
                json_data = data;
                for(var i in json_data)
                list_countries.push([i, json_data[i]]);    
                return data;
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
  
  var req_timeline_countries = fetch('http://api.coronastatistics.live/timeline')
            .then(function (response) {
                //console.log(response.json())
                return response.json();
            }).then(function(data){
                json_data = data;
                for(var i in json_data)
                list_timeline_countries.push([i, json_data[i]]);    
                return data;
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
  
  var req_timeline_global = fetch('http://api.coronastatistics.live/timeline/global')
            .then(function (response) {
                //console.log(response.json())
                return response.json();
            }).then(function(data){
                json_data = data;
                for(var i in json_data)
                list_timeline_global.push([i, json_data[i]]);    
                return data;
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
  
  console.log(list_all, 'datos globales');   
  console.log(list_countries, 'datos por pais');   
  console.log(list_timeline_countries, 'timeline de los paises');   
  console.log(list_timeline_global, 'timeline global');  
    return list_all, list_countries, list_timeline_countries, list_timeline_global;
  }
}