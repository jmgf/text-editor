import React, { useState } from "react"
import TreeItem from "./TreeItem"

function Folder({folder, handleDoubleClick}) {
    let [open, setOpen] = useState(folder.isOpen)
    let [folderName, setFolderName] = useState(folder.name)

    const toggleOpenState = () => {
        setOpen(previousOpenState => !previousOpenState)
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
                title={folderName}>
                <span style={{color: 'darkgray'}}>
                    {
                        open ? 
                        <span>&#9663;</span> : 
                        <span>&#9657;</span>
                    }
                </span>
                &nbsp;
                {folder.name}
            </h2>
            <div className={`folderChildren ${!open && 'folderChildrenClosed'}`}>
                { 
                    folder.children.map(folderChild =>
                        <TreeItem key={folderChild.id} item={folderChild} />
                    )
                }
            </div>
        </>
    )
}

export default Folder