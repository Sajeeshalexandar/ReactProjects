import { StudentName } from "./Utils";
import ResultCheck from "./Utils";
import Student from "./Student";

function MainStudent() {
    const mark = 75;
    const result = ResultCheck(mark);
    return (
        <>
            <Student name={StudentName} Studentmark={mark} result={result} />
        </>
    )


}
export default MainStudent
