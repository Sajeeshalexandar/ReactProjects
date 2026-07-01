import { useState,useEffect } from "react";

const styleInput = {
    display : "grid",
    justifyContent : "start",
    alignItems : "center",
    gap : ".3rem",
    padding : "1rem 1.5rem",
    fontFamily : "arial",
    backgroundColor : "azure",
}
const tablestyle = {
    width : "100vh",
    textAlign : "center",
    
}

function Dashboard() {

    const [employees, setEmployees] = useState([
        { name: "Sajeesh", age: 21, id: 1, salary: 50000 ,active : true},
        { name: "Arun", age: 30, id: 2, salary: 40000 ,active : false},
        { name: "Vikesh", age: 42, id: 3, salary: 45000 ,active : true}
    ])
    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [salary, setSalary] = useState();
    const [active,setActive] = useState(true);


    const Add = (e) => {

        e.preventDefault();
        const NewEmployee = {
            name: name,
            age: age,
            salary: salary,
            id: employees.length + 1,
            active : active
        }

        setEmployees([...employees, NewEmployee]);

        setName("")
        setAge("")
        setSalary("")
    }
    const DeleteEmp = (id) => {
        const FilteredEmp = employees.filter(emp => emp.id !== id);
        setEmployees(FilteredEmp)
    }
    const Increase = (id) => {
       const updatedEmp =  employees.map(emp => emp.id == id ? {...emp, salary : Number(emp.salary) + 5000 }: emp)
       setEmployees(updatedEmp)
    }
    useEffect(()=>(console.log(`The Employee Count : ${employees.length}`)),[employees])
    

    return (
        <>
            <form action="" onSubmit={Add}>
                <div style={styleInput}>
                    <label htmlFor="">Enter Your Name : <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></label>
                    <label htmlFor="">Enter your Age : <input type="number" value={age} onChange={(e) => setAge(e.target.value)} /></label>
                    <label htmlFor="">Enter your Salary : <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} /></label>

                    <label htmlFor="">Active<input 

                        type="radio" 
                        name = "status"
                        checked ={active == true}
                    
                        onChange={(e)=>setActive(true)}

                    /></label>
                    <label htmlFor="">Inactive<input 

                        type="radio" 
                        name = "status"
                        checked={active == false}
                        
                        onChange={(e)=>setActive(false)}
                    /></label>

                </div>
                <input type="submit" style={{padding:".5rem 1rem",color : "white",backgroundColor:"royalblue",border: "none",borderRadius : ".3rem"}}/>
            </form>

            <div>
                <table border={2} style={tablestyle}>
                    <thead style={
                        {backgroundColor:"black",
                        color:"white",
                        fontFamily:"arial"}
                        }>
                        <tr >
                            <th style={{padding:".5rem"}}>Name</th>
                            <th>Age</th>
                            <th>Salary</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody style={{backgroundColor : "beige",}}>

                        {employees.map(emp => (
                            <tr key={emp.id}>
                                <td style={{padding:".5rem"}}>{emp.name}</td>
                                <td>{emp.age}</td>
                                <td>{emp.salary}</td>
                                <td>{emp.active ? "Active" : "Inactive"}</td>
                                <td>
                                    <button onClick={() => DeleteEmp(emp.id)}   style={{padding:".4rem",backgroundColor : "red",color:"white",border : "none",borderRadius : ".2rem"}}>Delete</button>
                                    <button onClick={()=> Increase(emp.id)}  style={{padding:".4rem 1rem",color : "white",backgroundColor:"green",border: "none",borderRadius : ".3rem",margin:"0 .5rem"}}>+5000</button>
                                </td>
                            </tr>

                        ))}

                    </tbody>

                </table>
            </div>
        </>
    )
}
export default Dashboard