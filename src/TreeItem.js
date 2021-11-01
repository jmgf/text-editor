import React, { useState } from "react"
import Constants from "./utils/Constants"
import Folder from "./Folder"
import File from "./File"

function TreeItem({item}) {
    return (
        <div style={{marginLeft: '30px', cursor: 'pointer'}}>
            {
                item.type === Constants.FOLDER ?
                <Folder folder={item}/> :
                <File file={item}/>
            }
        </div>
    )
}

export default TreeItem