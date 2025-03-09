const lastModified=new Date(document.lastModified);
const options={year:"numeric", month:"long",day:"numeric"};
const formattedDate=lastModified.toLocaleDateString("en-US","options");
document.addEventListener("DOMContentLoaded", function(){
document.getElementById("date-display").textContent=formattedDate});
//This java script is use for making dynamic web page