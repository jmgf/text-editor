import React, {useState} from "react"
import LocalStorageHelper from "./utils/LocalStorageHelper"

function FileEditor({file, onChangeFileContent}) {
    console.log('re-rendering...')
    //let [fileContent, setFileContent] = useState(content ? content : '')

    const handleSaveFile = (event) => {
        LocalStorageHelper.saveFileContent(file.id, file.content)
    }

    const handleChangeFileContent = (event) => {
        onChangeFileContent(file, event.target.value)
    }

    return (
        <div className="FileEditor">
            { 
              file
              ?
              <>
                <h2>
                    {file.name}
                    <button className="saveButton" onClick={handleSaveFile}></button>
                </h2>
                <textarea spellCheck="false" 
                          placeholder="Write something to get started..."
                          value={file.content}
                          onChange={handleChangeFileContent}>
                </textarea>
              </> 
              :
              <>
                <h1 style={{textAlign: 'center', marginTop: '10rem'}}>Open a file to get started.</h1>
              </>
            }
            
        </div>
    )
}

export default FileEditor