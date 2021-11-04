import React, {useState} from "react"

function File({file, onNameChange, onOpenFile}) {
    let [isSettingsVisible, setIsSettingsVisible]  = useState(false)

    const handleOpenFile = (event) => {
        onOpenFile(file)
    }

    const handleNameChange = (event) => {
        event.stopPropagation()
        const newName = prompt('File name:', file.name)
        if (newName) {
            onNameChange(file.id, newName, event)
        }
    }

    return (
        
        <>
            <h2 title={file.name} 
                onClick={handleOpenFile}
                onMouseOver={() => {setIsSettingsVisible(true)}}
                onMouseLeave={() => {setIsSettingsVisible(false)}}>
                <span className={isSettingsVisible ? 'shortFileNameSpan' : ''}>{file.name}</span>
                {isSettingsVisible && 
                <button className="settingsButton" onClick={handleNameChange}></button>}
            </h2>
        </>
    )
}

export default File