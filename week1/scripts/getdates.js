function displayDate() {
  const today=new Date();
  const formatDate=today.toLocaleDateString('en-US', {  year:'numeric',month:'long',day:'numeric'});
  document.getElementById("date-display").textContent=formatDate
}
displayDate();