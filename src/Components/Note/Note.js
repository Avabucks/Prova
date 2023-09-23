import React from 'react'

import './Note.css';

let timer = 500, timeout;

function Note(props) {

  const formatDate=(value)=>{
    if (!value) return "";

    const date = new Date(value);
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sept', 'Oct', 'Nov', 'Dec'
    ];

    let hrs = date.getHours();
    let amPm = hrs > 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? hrs = 24 - hrs : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();
    const month = monthNames[date.getMonth() - 1];
    return `${hrs}:${min} ${amPm} ${day} ${month}`;

  }

  // trigger once
  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  }

  const updateText = (index, text) => {
    debounce(() => props.updateText(index, text))
  }

  return (
    <div className='note' style={{backgroundColor: props.note.color}}>
          <textarea className='note_text' defaultValue={props.note.text} onChange={(event) => updateText(props.note.id, event.target.value)}/>
        <div className='note_footer'>
              <p>{formatDate(props.note.time)}</p>
              <box-icon name='trash' onClick={()=>props.deleteNote(props.note.id)} ></box-icon>
        </div>
    </div>
  )
}

export default Note