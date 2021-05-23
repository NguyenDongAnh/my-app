import React, { useState, useEffect } from 'react'
import '../../assets/css/style.css';
import '../../assets/css/grid.css';

import { useForm } from 'react-hook-form'
import instance from '../../http-common'
let renderCount = 0;
let idx = 0;
export default function UploadImage() {
    renderCount++
    console.log(renderCount)
    const [selectedImage, setSelectedImage] = useState([]);
    const [fileList, setFileList] = useState([])
    const { register, handleSubmit } = useForm();
    const [progressInfo, setProgressInfo] = useState([])
    const imageHandleChange = async (e) => {
        e.preventDefault();
        if (e.target.files) {
            handleFileList(e.target.files)
        } else if (e.dataTransfer.files) {
            let previewArea = document.querySelector(".preview-area");
            previewArea.style.background = "#fff";
            handleFileList(e.dataTransfer.files)
        }
        return;
    }

    const handleFileList = async (files) => {
        let _progressInfo = []
        let fileArray = await Object.values(files).map(file => {
            setFileList(fileList => [...fileList, file])
            _progressInfo.push({ percentage: 0, fileName: file.name, error: false, errorMessage: '' })
            return URL.createObjectURL(file)
        })
        setProgressInfo(progressInfo => progressInfo.concat(_progressInfo))
        setSelectedImage(prevImage => prevImage.concat(fileArray))
        return Object.values(files).map(
            (file) => URL.revokeObjectURL(file)
        )
    }
    const renderPhotos = (source) => {
        return source.map((photo) => {
            return (
                <div className="card m-05">
                    <img src={photo} alt="..." />
                </div>
            )
        })
    }

    const clearState = () => {
        setFileList([]);
        setSelectedImage([]);
        // setProgressInfo([]);
    }

    async function upload(file, idx) {
        let formData = new FormData()
        formData.append('Image', file)

        const options = {
            method: "post",
            url: "/user/upload",
            headers: {
                'Content-Type': `multipart/form-data;`
            },
            data: formData,
            onUploadProgress: (progressEvent) => {
                const { loaded, total } = progressEvent;
                let percentage = Math.floor((loaded * 100) / total);
                let _progressInfo = [...progressInfo]
                _progressInfo[idx].percentage = percentage
                setProgressInfo(_progressInfo)
                console.log(`${loaded}kb of ${total} kb| ${percentage}`)
            }
        }
        instance({
            ...options,
        }).then(function (response) {
            if (response.data.error) {
                let _progressInfo = [...progressInfo];
                _progressInfo[idx].error = true;
                _progressInfo[idx].errorMessage = response.data.error;
                setProgressInfo(_progressInfo)
                console.log(response.error)
            }
            console.log(progressInfo)
        }).catch(function (error) {
            console.log(error)
        });
    }


    const renderProgress = (source) => {
        return source.map((progress) => {
            return (
                <div>
                    <div className="progress-title">{progress.fileName} {progress.error ? "--- " + progress.errorMessage : ''}</div>
                    <div className="progress-bar">
                        <div style={{ width: progress.percentage + "%", background: progress.error ? "red" : "rgb(0, 174, 255)" }}></div>
                    </div>
                </div>
            )
        })
    }

    const onSubmit = () => {
        let preview = document.querySelector(".preview-area .row").querySelectorAll('.card');
        let progress_box = document.querySelector(".progress-box")
        console.log(progress_box)
        if (fileList.length !== 0) {
            progress_box.classList.add("active")
            fileList.forEach(async (file) => {
                upload(file, idx)
                idx++;
            })
            preview.innerHTML = '';
            clearState()
        }
    }

    useEffect(() => {
        document.title = "Preview and Upload Image"
        let previewArea = document.querySelector(".preview-area");
        let close_button = document.querySelector(".close-button")
        let progress_box = document.querySelector(".progress-box");
        previewArea.addEventListener('dragover', (event) => {
            event.preventDefault();
            previewArea.style.background = "rgba(0,0,0,0.2)"
        });
        previewArea.addEventListener('dragleave', (event) => {
            event.preventDefault();
            previewArea.style.background = "#fff"
        });
        close_button.onclick = () => {
            setProgressInfo([]);
            progress_box.classList.remove('active');
            idx = 0;
        }
    }, [])
    //     <div className="alert">
    //     <div className="alert-content hidden">
    //         <span className="fas fa-exclamation-circle"></span>
    //         <span className="msg"></span>
    //         <span className="close-button">
    //             <span className="fas fa-times"></span>
    //         </span>
    //     </div>
    // </div>
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="upload-preview-image">
                    <div className="content f-width p-2">
                        <div className="title">Upload Image With Preview</div>
                        <div className="preview-area f-width" onDrop={imageHandleChange}>
                            <div className="row">
                                {renderPhotos(selectedImage)}
                                <div className="card-ul m-05 border-card-dashed">
                                    <label htmlFor="file">
                                        <input type="file" id="file" multiple onChange={imageHandleChange} />
                                        <div className="button">
                                            <i className='bx bxs-camera-plus'></i>
                                            <span>Upload</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <div className="progress-box">
                {/* <header></header> */}
                <div className="close-button">
                    <span className="fas fa-times"></span>
                </div>
                {renderProgress(progressInfo)}
            </div>
        </div>
    )
}