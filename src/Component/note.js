import React from "react"
import { useState } from "react";
import "./note.css"


let Note = () => {

    let [text,setText] = useState("");
    let[notes,setNotes] = useState([]);
    let[textareaNone,setTextareaNone] = useState("block")
    let[sendNone,seTsendNone] = useState("block")
    let[deletesendNone,seTdeletesendNone] = useState("none")
    let[addsendNone,seTaddsendNone] = useState("none")
    let[changesendNone,setchangesendNone] = useState("none")
    let [textValue,settextValue] = useState();

    let textNote = (e) => {

        setText(text = " " +  e.target.value)
        settextValue(textValue = e.target.value)
        

    }

    let send = () => {
    
        notes.push(text)
        setNotes(notes)
        
       setTextareaNone(textareaNone = "none");
       seTsendNone(sendNone = "none");
       seTdeletesendNone(deletesendNone = "block");
       seTaddsendNone(addsendNone = "block");
       setchangesendNone(changesendNone = "block")
       settextValue(textValue = " ")
       
       
       
    }

    let addsend = () => {

        setTextareaNone(textareaNone = "block"); 
        seTaddsendNone(addsendNone = "none");
        seTsendNone(sendNone = "block");
        seTdeletesendNone(deletesendNone = "none");
        setchangesendNone(changesendNone = "none")

    }


    let deletesend = () => {
        notes.pop()
        setNotes([notes])
        console.log(notes)
        seTdeletesendNone(deletesendNone = "none")
    }

    let changesend = () => {
        notes = []
        setNotes([notes])
        setTextareaNone(textareaNone = "block");
        setchangesendNone(changesendNone = "none")
        seTdeletesendNone(deletesendNone = "none")
        seTaddsendNone(addsendNone = "none");
        seTsendNone(sendNone = "block");



    }

    return(

        <div>

            <div className="main">

                <div className="block_note">

                    <div className="noteInfoText">{ notes.map((item, index)=><h5 key={index.toString()}>{item}</h5>)}</div>
                    <div style ={{display:textareaNone}} className="block_note_text">
                    <textarea className="textNote" onInput={textNote} value={textValue}></textarea>
                    </div>
                    <div style ={{display:sendNone}} className="block_btn">
                    <button  onClick={send}>отправить заметку</button>
                    </div>
                    <div style ={{display:addsendNone}} className="block_btn">
                    <button  onClick={addsend}>добавить заметку</button>
                    </div>
                    <div style ={{display:changesendNone}} className="block_btn">
                    <button  onClick={changesend}>Изменить заметку</button>
                    </div>
                    <div style ={{display:deletesendNone}} className="block_btn">
                    <button  onClick={deletesend}>Удалить последнюю заметку</button>
                    </div>
                </div>


            </div>

        </div>

    )



}
export default Note;