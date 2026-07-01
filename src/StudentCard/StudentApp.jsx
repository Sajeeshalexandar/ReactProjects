import Studentz from "./Studentz";


var StudentName = "Sajeesh"
var studentAge = "21"
var StudentDept = "cse"

function StudentApp() {
    return (
        <>
            <Studentz name={StudentName} age={studentAge} department={StudentDept} />
        </>
    )
}
export default StudentApp