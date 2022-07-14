//if user add a note , add it to the local storage
showNotes();
let addBtn = document.getElementById("addbtn");
addBtn.addEventListener("click", function (e) {
    console.log('you have clicked');
  let addtxt = document.getElementById("addtxt");
  
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }

  notesobj.push(addtxt.value);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  addtxt.value = "";
  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  let html = "";
  notesobj.forEach(function (element, index) {
    html += `
        <div class=" noteCard my-2 mx-2 card" style="width: 18rem;">
                
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onClick="deleteNote(this.id)"  class="btn btn-primary">Delete</button>
        </div>
      </div>
        `;
  });
  let notesElm = document.getElementById("notes");
  if (notes) {
    notesElm.innerHTML = html;
  }
  else{
    `nothing to show use "add a note" to print a note`
  }
}


function deleteNote(index){
    console.log('i am deleting',index);
    let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }

  notesobj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  showNotes();
}