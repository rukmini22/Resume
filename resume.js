
(function(){
  function loadJson(file,Callback){
    var rawFile=new XMLHttpRequest();
    rawFile.overrideMimeType("application/Json");
    rawFile.open("GET",file,true);
    rawFile.onreadystatechange=function(){
      if(rawFile.readyState===4 & rawFile.status=="200"){
        Callback(rawFile.responseText);
      }
    }
  rawFile.send(null);
}
loadJson("resume.json",function (text) {
var data=JSON.parse(text);
console.log(data);
leftData(data.Profile)
});
var left=document.querySelector(".leftDiv")
function leftData(leftdetails){
  var image=document.createElement("img");
  image.src="image/images.png";
  image.alt="profile Image";
  left.appendChild(image);

   var name=document.createElement("h2");
   name.textContent=leftdetails.name;
   left.appendChild(name);

   var clgname=document.createElement("h3");
   clgname.textContent=leftdetails.clgname;
   left.appendChild(clgname);

   var number=document.createElement("h4");
   number.textContent=leftdetails.number;
   left.appendChild(number);

   var mail=document.createElement("h5");
   mail.textContent=leftdetails.mail;
   left.appendChild(mail);


}
})()
