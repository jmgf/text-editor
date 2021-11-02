import React, { useState, useEffect } from "react"
// import { FOLDER, FILE } from "./utils/Constants"
import TreeItem from "./TreeItem"
import LocalStorageHelper from "./utils/LocalStorageHelper"

function FileTree() {
    let [fileTree, setFiles] = useState(LocalStorageHelper.loadFileTree())

    useEffect(() => {
        const intervalId = setInterval(() => {
            LocalStorageHelper.saveFileTree(fileTree)
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    })

    return (
        <div className="FileTree">
            <h2>EXPLORER <button className="settingsButton"></button></h2>
            {
                fileTree.map( fileTreeItem =>
                    <TreeItem key={fileTreeItem.id} 
                              item={fileTreeItem}/>
                )
            }
        </div>
    )
}

export default FileTree