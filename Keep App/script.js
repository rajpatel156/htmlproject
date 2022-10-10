const noteBtn=document.querySelector('#noteBtn');
let check="yes";
const updateLSData = ()=>{
    const textAreaData=document.querySelectorAll('textarea');
    const notes=[];
    textAreaData.forEach((n)=>{
        notes.push(n.value);
    });
    localStorage.setItem('notesofapp',JSON.stringify(notes));
}

const notes=JSON.parse(localStorage.getItem('notesofapp'));

const addNote = (txt) =>{
   let text1=''
    if(check=="no"){
        text1=txt;
    }
    check="yes";
    const note=document.createElement('div');
    note.classList.add("notes");
    const con=document.querySelector('#con');
    const content=`
    <div class='btns'>
            <span class='edit' id='edit'><i class="far fa-edit "></i> </span>
            <span class='del' id='del'><i class="far fa-trash-alt"></i></span>
        </div>
        <div class='main ${text1 ? "" : "hidden"}' id='main'></div>
        <textarea class='txt ${text1 ? "hidden" :""}'></textarea>`;

        note.insertAdjacentHTML('afterbegin',content);    
    con.appendChild(note);
    const del=note.querySelector('#del');
    const edit=note.querySelector('#edit');
    const main=note.querySelector('#main');
    const text=note.querySelector('textarea');
        main.innerHTML=text1;
        text.value=text1;
    edit.addEventListener('click',()=>{
        main.classList.toggle('hidden');
        text.classList.toggle('hidden');
        updateLSData();
        
    });
    text.addEventListener('change',()=>{
        main.innerHTML=text.value;
    });

    del.addEventListener('click',()=>{
        note.remove();
        updateLSData();
    });
}

if(notes)
{
   
    notes.forEach((n)=>{
        check="no";
        addNote(n);
        
    });

}
else{
    notes
}

noteBtn.addEventListener('click',addNote);