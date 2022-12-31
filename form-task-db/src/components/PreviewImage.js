import React, { useState } from "react"


const PreviewImage = ({ file }) => {


    //handle file upload
    const [preview, setPreview] = useState(null)
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () => {
        setPreview(reader.result)
    }

    return (

        <div>
            {preview ? <img src={preview} alt="preview" style={{ width: "200px", height: "200px" }} /> : "Loading..."}
        </div>

    )
}

export default PreviewImage
