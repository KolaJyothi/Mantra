const axios=require('axios');
const localStorage=require('localStorage')
var fetch_cached=function(){
    
if(localStorage.length==0){
    getData();
}else{
    console.log(localStorage.getItem("userData"));
}
}
var getData=function(){
axios.get('https://reqres.in/api/users/2')
  .then(function (response) {
      localStorage.setItem("userData",JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  })
}
getData();
fetch_cached();
