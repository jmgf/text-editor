import React, { useState } from "react"
import TreeItem from "./TreeItem"

function Folder({folder, onNameChange, onOpenFile}) {
    let [open, setOpen] = useState(folder.isOpen)
    let [isSettingsVisible, setIsSettingsVisible]  = useState(false)

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
                onMouseEnter={() => {setIsSettingsVisible(true)}}
                onMouseLeave={() => {setIsSettingsVisible(false)}}
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
                {isSettingsVisible && 
                 <button className="settingsButton" onClick={handleNameChange}></button>}
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