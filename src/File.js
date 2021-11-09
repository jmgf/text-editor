import React, {useState} from "react"

function File({file, onNameChange, onDelete, onOpenFile}) {
    let [isDeleteVisible, setIsDeleteVisible]  = useState(false)

    const handleOpenFile = (event) => {
        onOpenFile(file)
    }

    const handleNameChange = (event) => {
        event.stopPropagation()
        const newName = prompt('File name:', file.name)
        if (newName) {
            onNameChange(file.id, newName, event)
        }
    }

    const handleDelete = () => {
        onDelete(file.id, file.name)
    }

    return (
        
        <>
            <h2 title={file.name} 
                onClick={handleOpenFile}
                onMouseOver={() => {setIsDeleteVisible(true)}}
                onMouseLeave={() => {setIsDeleteVisible(false)}}>
                <span className={isDeleteVisible ? 'shortFileNameSpan' : ''}>{file.name}</span>
                {isDeleteVisible && 
                <button className="deleteButton" onClick={handleDelete}></button>}
            </h2>
        </>
    )
}

export default File