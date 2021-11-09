// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import FileTree from "./FileTree"
import FileEditor from "./FileEditor"
import Constants from "./utils/Constants"
import LocalStorageHelper from "./utils/LocalStorageHelper"

function App() {
  let [fileTree, setFiles] = useState(LocalStorageHelper.loadFileTree())
  let [currentFile, setCurrentFile] = useState(undefined)

  useEffect(() => {
    LocalStorageHelper.saveFileTree(fileTree)
  }, [fileTree])


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
      
  } 

  const handleOpenFile = (file) => {
      console.log(LocalStorageHelper.loadFileContent(file.id))
      setCurrentFile({
        ...file,
        content: LocalStorageHelper.loadFileContent(file.id)
      })
      console.log(currentFile)
      console.log(`File ${file.id} was opened`)
  }

  const handleChangeFileContent = (file, newContent) => {
    setCurrentFile({
      ...file,
      content: newContent
    })
  }

  const handleAddFile = () => {
    let newFileName = prompt('File name:')
    let newFileTree = [...fileTree]; // WRONG CLONING METHOD
    newFileTree.push({
      name: newFileName,
      id: newFileName,
      type: Constants.FILE
    })
    setFiles(newFileTree)
  }

  const handleAddFolder = () => {
    let newFolderName = prompt('Folder name:')
    let newFileTree = [...fileTree]; // WRONG CLONING METHOD
    newFileTree.push({
      name: newFolderName,
      id: newFolderName,
      type: Constants.FOLDER,
      isOpen: false,
      children: []
    })
    setFiles(newFileTree)
    
  }

  const handleDelete = (itemId, itemName) => {
    const answer = window.confirm(`Are you sure you want do delete '${itemName}'?`)
    if (answer) {
      let newFileTree = [...fileTree]; // WRONG CLONING METHOD
      newFileTree = newFileTree.filter(item => item.id !== itemId)
      setFiles(newFileTree)
    }
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
                      onDelete={handleDelete}
                      onOpenFile={handleOpenFile}
                      onAddFile={handleAddFile}
                      onAddFolder={handleAddFolder}/>
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
