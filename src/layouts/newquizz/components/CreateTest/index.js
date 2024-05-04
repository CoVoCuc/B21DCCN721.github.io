import React, { useState, useRef } from 'react';

import SoftBox from "components/SoftBox";
import "../../../../assets/css/create-quizz.css"

function TestCreationForm() {
    const fileInputRef = useRef(null); // Tham chiếu đến thẻ input file

    const handleFileOptionChange = () => {
        const fileOption = document.getElementById("fileOption").value;
        if (fileOption === "upload") {
            fileInputRef.current.click(); // Kích hoạt sự kiện click để mở cửa sổ File Explorer
        }
    };

    const handleFileUploadChange = (event) => {
        const file = event.target.files[0]; // Lấy ra tệp đã chọn
        // Thực hiện các thao tác khác cần thiết với tệp đã chọn
    };

    return (
        <SoftBox>
            <div className="container">
                <div className="option-container" id="option-container">
                    <h1>Tạo mới bài thi</h1>
                    <div className="test-description">
                        <form id="description-form">
                            <label htmlFor="examName">Tên bài thi:</label>
                            <input type="text" id="examName" required="" />
                            <div>
                                <label htmlFor="examDate">Ngày thi:</label>
                                <input type="date" id="examDate" />
                            </div>
                            <div>
                                <label htmlFor="">Giờ thi:</label>
                                <input type="time" id="timeStart" />
                            </div>
                        </form>
                    </div>
                    <div className="select">
                        <form className="option-form" id="option-form">
                            <label htmlFor="examType">Loại:</label>
                            <select id="examType" required="">
                                <option value="free">Tự do</option>
                                <option value="time-count">Tính giờ</option>
                            </select>
                            <br />
                            <div id="specificTime" style={{ display: "none" }}>
                                <label htmlFor="specificExamTime">Thời gian (phút):</label>
                                <input type="number" id="examTime" />
                            </div>
                            <label htmlFor="numQuestions">Số lượng câu hỏi:</label>
                            <input type="number" id="numQuestions" />
                            <br />
                            <label htmlFor="fileOption">Hình thức: </label>
                            <select id="fileOption" onChange={handleFileOptionChange}>
                                <option value="new">Nhập thủ công</option>
                                <option value="upload">Tải lên file</option>
                            </select>
                            <br />
                            <div id="fileUpload" style={{ display: "none" }}>
                                <label htmlFor="textFile">Tải lên tệp (text):</label>
                                <input type="file" id="text-file" name="textFile" accept=".xls,.xlsx" onChange={handleFileUploadChange} ref={fileInputRef} style={{ display: 'none' }} />
                            </div>
                            <button type="submit">Tạo bài thi</button>
                        </form>
                    </div>
                </div>
            </div>
        </SoftBox>
    );
}

export default TestCreationForm;
