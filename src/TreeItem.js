import React, { useState } from "react"
import Constants from "./utils/Constants"
import Folder from "./Folder"
import File from "./File"

function TreeItem({item, onNameChange, onDelete, onOpenFile}) {

    return (
        <div className="TreeItem">
            {
                item.type === Constants.FOLDER ?
                <Folder folder={item} onDelete={onDelete} onOpenFile={onOpenFile}/> :
                <File file={item} onDelete={onDelete} onOpenFile={onOpenFile}/>
            }
        </div>
    )
}

export default TreeItem