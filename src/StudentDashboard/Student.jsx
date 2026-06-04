

function Student({name,Studentmark,result}){
    return(
        <>
            <div className="student-Container">
            <h1>Student Dashboard👤</h1>
            <h3 className="StudentName">Student Name : {name}</h3>
            <h3>Mark : {Studentmark}</h3>
            <h3 className="result">Result : {result}</h3>
            <h4>{Studentmark>=50 ? "congratulation You passed the Exam🥳🎉" : "You have failed the Exam😞\nBetter lucck next time😩!" }</h4>
            
        </div>
        </>
    )
}
export default Student