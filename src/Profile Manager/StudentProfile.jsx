import { useState } from "react";

function StudentProfile() {
    const [data, setData] = useState({
        name: "Sajeesh",
        age: 21,
        course: "CSE",
        isPlaced: false,
        duration : 6
    })

    const changeName = () => {
        setData({ ...data, name: "Zatrix" })
    }
    const IncreaseAge = () => {
        setData({ ...data, age: data.age + 1 })
    }
    const switchCourse = () => {
        setData({ ...data, course: "EEE" })
    }
    const isPlace = () => {
        setData({ ...data, isPlaced: true })
    }
    const reset = () => {
        setData({
            name: "Sajeesh",
            age: 21,
            course: "CSE",
            isPlaced: false
        })
    }
    const changeDuration = () =>{
        setData(
            {
                ...data,duration:8
            }
        )
    }

    return (
        <>
            <div>
                
                <h1>Student Profile Manager</h1>
                <p>Student Name : <b>{data.name}</b></p>
                <p>Student Age : <b>{data.age}</b></p>
                <p>Student Age : <b>{data.course}</b></p>
                <p>Course Duration : <b>{data.duration} Months</b> </p>
                <p>placement Status : <b>{data.isPlaced ? "placed" : "Not placed"}</b></p>

                <button onClick={changeName}>Change Name</button>
                <button onClick={IncreaseAge}>Increase Age</button>
                <button onClick={switchCourse}>Switch Course</button>
                <button onClick={isPlace}>chane placement Status</button>
                <button onClick={reset}>reset</button>
                <button onClick={changeDuration}>changeDuration</button>
            </div>
        </>
    )
}
export default StudentProfile