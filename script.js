function popup(){
    alert("massage was send");
};
function updateYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;
}


function updateDateTime() {
    const now = new Date(); 
    const formattedDateTime = now.toLocaleString();
    
    
    document.getElementById('datetime').innerHTML = formattedDateTime;
}


updateYear();


setInterval(updateDateTime, 1000);