import React, { useState, useEffect } from "react"
// import { FOLDER, FILE } from "./utils/Constants"
import TreeItem from "./TreeItem"
import LocalStorageHelper from "./utils/LocalStorageHelper"

function FileTree({fileTree, onNameChange, onOpenFile}) {

    /*
    useEffect(() => {
        const intervalId = setInterval(() => {
            LocalStorageHelper.saveFileTree(fileTree)
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    })
    */

    const handleClearStorage = () => {
        LocalStorageHelper.deleteFileTree()
    }

    const handleAddFile = () => {
        LocalStorageHelper.deleteFileTree()
    }

    const handleAddFolder = () => {
        LocalStorageHelper.deleteFileTree()
    }

    return (
        <div className="FileTree">
            <h2 style={{color: '#b5b5b5fa'}}>EXPLORER
                <button className="addFolderButton"
                        onClick={handleAddFolder}>
                </button> 
                <button className="addFileButton"
                        onClick={handleAddFile}>
                </button>
            </h2>
            {
                fileTree.map( fileTreeItem =>
                    <TreeItem key={fileTreeItem.id} 
                              item={fileTreeItem}
                              onNameChange={onNameChange}
                              onOpenFile={onOpenFile}/>
                )
            }
        </div>
    )
}

export default FileTree