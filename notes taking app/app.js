// if user add it to note add it to local storage
shownotes();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function(e) {
  // body...
  let addtxt = document.getElementById('addtxt');
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);

  }
  notesObj.push(addtxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addtxt = "";
  console.log(notesObj);
  shownotes();

});

function shownotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);

  }
  let html = ``;
  notesObj.forEach(function(element, index) {
    html+= `
            <div class="notecard mx-2 my-2" id="blocks" style="width: 18rem;">
              <div class="body-card">
                <h5 class="card-title">Note ${index+1}</h5>
                <p class="card-text">${element}</p>
                <button href="#"  id="${index}" onclick="dele(this.id)" class="btn btn-primary">Delete Note</button>
              </div>

            </div>
        `
  });
  notesElm=document.getElementById('notes');
   if(notes!=0)
   {
     notesElm.innerHTML=html;
   }
   else{
     notesElm.innerHTML=`no notes available`;
   }





}


// function the delete note
function dele(index){
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);

  }
  notesObj.splice(index,1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  shownotes();


}
// Search bar
let search= document.getElementById('search');
search.addEventListener("input",function(){
  let inputval=search.value.toLowerCase();
  let  notecards=document.getElementsByClassName('notecard');
  Array.from(notecards).forEach(function(element){
    let cardtxt=element.getElementsByTagName('p')[0].innerText;
    if(cardtxt.includes(inputval)){
      element.style.display="block";
    }
    else{
      element.style.display="none";
    }

  })
})
