import { useState } from "react";
import { Text } from "./text";
import { defineTextareaSize } from "./utils/utils"

export const Block = ({ header, content, size = "18px", patientId, editType, onEditAdd, ...props }) => {
    const {cols, rows} = defineTextareaSize(content.length)
    const [showTextarea, setShowTextarea] = useState(false);
    const [editedValue, setEditedValue] = useState(content);
     const replaceValue = (e) => {
      if (e.key === "Enter") {
        onEditAdd(patientId, editType, editedValue);
        console.log(editedValue)
        setShowTextarea(false)
      }
      if (e.key === "Escape") {setShowTextarea(false)}
    }
    return (
          <div style={{cursor: editType ? "pointer": "auto"}}className="block" onClick={() => {if(!editType) return;
           setShowTextarea(true)}} {...props}>
    <Text size={size} fontWeight="bold" {...props}>
      {header}
    </Text>
    {""}
    {!showTextarea ? 
      <span className="content"> {content} </span>
     : <textarea autoFocus className="editTextarea" cols={cols} value={editedValue} 
      rows={rows}
        onChange={(e) => setEditedValue(e.target.value)}
        onKeyDown={(e) => replaceValue(e)}/> 
    }
      </div>
    )
  };

