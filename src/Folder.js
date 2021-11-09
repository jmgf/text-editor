import React, { useState } from "react"
import TreeItem from "./TreeItem"

function Folder({folder, onNameChange, onDelete, onOpenFile}) {
    let [open, setOpen] = useState(folder.isOpen)
    let [isDeleteVisible, setIsDeleteVisible]  = useState(false)

    const toggleOpenState = () => {
        setOpen(previousOpenState => !previousOpenState)
    }

    const handleNameChange = (event) => {
        event.stopPropagation()
        const newName = prompt('Folder name:', folder.name)
        if (newName) {
            onNameChange(folder.id, newName, event)
        }
    }

    const handleDelete = () => {
        onDelete(folder.id, folder.name)
    }

    /*
    const changeFolderName = (event) => {
        event.stopPropagation()
        const newFolderName = prompt('Folder name:')
        setFolderName(previousFolderName => newFolderName)
    }
    */

    return (
        <>
            <h2 className="folderName"
                onClick={toggleOpenState}
                onMouseEnter={() => {setIsDeleteVisible(true)}}
                onMouseLeave={() => {setIsDeleteVisible(false)}}
                title={folder.name}>
                <span style={{color: 'darkgray'}}>
                    {
                        open ? 
                        <span>&#9663;</span> : 
                        <span>&#9657;</span>
                    }
                </span>
                &nbsp;
                {folder.name}
                {isDeleteVisible && 
                 <button className="deleteButton" onClick={handleDelete}></button>}
            </h2>
            <div className={`folderChildren ${!open ? 'folderChildrenClosed' : ''}`}>
                { 
                    folder.children.map(folderChild =>
                        <TreeItem key={folderChild.id} 
                                  item={folderChild} 
                                  onNameChange={onNameChange}
                                  onOpenFile={onOpenFile}/>
                    )
                }
            </div>
        </>
    )
}

export default Folder