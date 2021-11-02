import React, { useState } from "react"
import Constants from "./utils/Constants"
import Folder from "./Folder"
import File from "./File"

function TreeItem({item}) {
    function handleClick(event) {
        event.stopPropagation()
        console.log('You selected: ', item.name)
    }

    return (
        <div className="TreeItem" onClick={handleClick}>
            {
                item.type === Constants.FOLDER ?
                <Folder folder={item}/> :
                <File file={item}/>
            }
        </div>
    )
}

export default TreeItem