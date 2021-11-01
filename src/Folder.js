import React, { useState } from "react"
import TreeItem from "./TreeItem"

function Folder({folder}) {
    let [open, setOpen] = useState(false)
    const toggleOpenState = () => {
        setOpen(previousOpenState => !previousOpenState)
    }
    return (
        <>
            <h2 style={{color: 'gray'}} 
                onMouseOver={(event) => (event.target.style.backgroundColor = 'blue')}
                onClick={toggleOpenState}>
                <span style={{color: 'darkgray'}}>> </span>
                {folder.name}
            </h2>
            {
                open && 
                <div style={{borderLeft: '2px solid darkgray'}}>
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