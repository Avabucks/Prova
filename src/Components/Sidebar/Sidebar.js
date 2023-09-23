import React, { useState } from 'react';

import './Sidebar.css'
import 'boxicons'

function Sidebar(props) {
  const color = ["#fe9b72", "#fec971", "#004dfe", "#b693fd", "#e4ee91"];

  const [listOpen,setListOpen] = useState(false);

  return (
    <div className='sidebar'>
      <box-icon name='plus-circle' onClick={()=>setListOpen(!listOpen)}></box-icon>
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {
          color.map((item,index) => <li key={index} className='sidebar_list_item' style=
          {{backgroundColor: item}} onClick={()=>props.addNote(item)}/>)
        }
      </ul>
    </div>
  )
}

export default Sidebar