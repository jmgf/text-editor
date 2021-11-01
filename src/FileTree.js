import React, { useState } from "react"
import exampleFileTree from "./utils/ExampleFileTree"
import { FOLDER, FILE } from "./utils/Constants"
import TreeItem from "./TreeItem"

function FileTree() {
    let [fileTree, setFiles] = useState(exampleFileTree)
    console.log(fileTree)
    return (
        <>
            {
                fileTree.map( fileTreeItem =>
                    <TreeItem id={fileTreeItem.id} item={fileTreeItem}/>
                )
            }
        </>
    )
}

export default FileTree