import React, { useState } from "react"
import exampleFileTree from "./utils/ExampleFileTree"
import { FOLDER, FILE } from "./utils/Constants"
import TreeItem from "./TreeItem"
import LocalStorageHelper from "./utils/LocalStorageHelper"

function FileTree() {
    let [fileTree, setFiles] = useState(exampleFileTree)
    console.log(fileTree)

    return (
        <div className="FileTree">
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