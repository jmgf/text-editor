import React, { useState } from "react"
import Constants from "./utils/Constants"
import Folder from "./Folder"
import File from "./File"

function TreeItem({item, onNameChange, onOpenFile}) {

    return (
        <div className="TreeItem">
            {
                item.type === Constants.FOLDER ?
                <Folder folder={item} onNameChange={onNameChange} onOpenFile={onOpenFile}/> :
                <File file={item} onNameChange={onNameChange} onOpenFile={onOpenFile}/>
            }
        </div>
    )
}

export default TreeItem