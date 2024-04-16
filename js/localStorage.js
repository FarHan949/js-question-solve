// The Local Storage Manager: You are working on a note-taking app, and you want to 
// implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

const saveNoteToLocalStorage=(note)=>{
   localStorage.setItem(note, note)
}

let note = localStorage.getItem("note")
if(note){
    document.write(note)
}


document.getElementById('btn').addEventListener('click',function(){
    let note = prompt('Enter your name')
    saveNoteToLocalStorage(note)
    document.write(note).innerHTMl = note
})