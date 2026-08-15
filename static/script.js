function searchChat(){

let input=document.getElementById("search");

let filter=input.value.toLowerCase();

let chats=document.getElementsByClassName("ai-message");

for(let i=0;i<chats.length;i++){

let text=chats[i].innerText.toLowerCase();

if(text.indexOf(filter)>-1){

chats[i].style.display="block";

}else{

chats[i].style.display="none";

}

}

}