import React, { useState } from "react"
import TreeItem from "./TreeItem"

function Folder({folder}) {
    let [open, setOpen] = useState(folder.isOpen)
    const toggleOpenState = () => {
        setOpen(previousOpenState => !previousOpenState)
        console.log(this)
    }
    return (
        <>
            <h2 className="folderName"
                onClick={toggleOpenState}
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