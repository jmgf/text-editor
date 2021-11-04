// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import FileTree from "./FileTree"
import FileEditor from "./FileEditor"
import LocalStorageHelper from "./utils/LocalStorageHelper"

function App() {
  let [fileTree, setFiles] = useState(LocalStorageHelper.loadFileTree())
  let [currentFile, setCurrentFile] = useState(undefined)


  const changeItemProperty = (list, itemId, property, newValue) => {
    for (let i = 0; i < list.length; i++) {
        const item = list[i]
        if (item.id === itemId) {
            item[property] = newValue
            return true
        } else if (item.children) {
            if (changeItemProperty(item.children, itemId, property, newValue) === true) {
                return true;
            }
        }
    }
    return false;
  }

  const handleItemNameChange = (itemId, newName, event) => {
      let newFileTree = [...fileTree]; // WRONG CLONING METHOD
      changeItemProperty(newFileTree, itemId, 'name', newName)
      setFiles(newFileTree)
      console.log(`Item ${itemId} name changed to ${newName}`)
      LocalStorageHelper.saveFileTree(fileTree)
  } 

  const handleOpenFile = (file) => {
      console.log(LocalStorageHelper.loadFileContent(file.id))
      setCurrentFile({
        ...file,
        content: LocalStorageHelper.loadFileContent(file.id)
      })
      console.log(currentFile)
      console.log(`File ${file.id} was opened`)
      LocalStorageHelper.saveFileTree(fileTree)
  }

  const handleChangeFileContent = (file, newContent) => {
    setCurrentFile({
      ...file,
      content: newContent
    })
  }

  return (
    <div className="App">
      <header>
      </header>
      <main>
        <div className="row">
          <div className="column fileTreeColumn">
            <FileTree fileTree={fileTree}
                      onNameChange={handleItemNameChange}
                      onOpenFile={handleOpenFile}/>
          </div>
          <div className="column fileEditorColumn">
            <FileEditor file={currentFile}
                        onChangeFileContent={handleChangeFileContent} />
          </div>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
