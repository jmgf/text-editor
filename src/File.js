import React, { useState } from "react"

function File({file}) {
    return (
        
        <>
            <h2 title={file.name}>
                {file.name}
            </h2>
        </>
    )
}

export default File