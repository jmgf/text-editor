import React, { useState } from "react"
import TreeItem from "./TreeItem"

function Folder({folder}) {
    let [open, setOpen] = useState(false)
    const toggleOpenState = () => {
        setOpen(previousOpenState => !previousOpenState)
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
            {
                open && 
                <div className="folderChildren">
                    { 
                        folder.children.map(folderChild =>
                            <TreeItem id={folderChild.id} item={folderChild} />
                        )
                    }
                </div>
            }
        </>
    )
}

export default Folder