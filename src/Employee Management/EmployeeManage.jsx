import { useState } from "react";


function Employee() {
    const [employee, setEmployee] = useState(
        [
            { id: 1, name: "Jhon", department: "HR", salary: 30000, active: true },
            { id: 2, name: "David", department: "IT", salary: 50000, active: false },
            { id: 3, name: "Max", department: "Finance", salary: 45000, active: true }
        ]
    )
    const[name,setName] = useState("");
    const[salary,setSalary] = useState("");
    const[department,setDepartment] = useState("");

    const addEmployee = () =>{
        const newEmployee = {
            id : employee.length+1,
            name : name,
            department : department,
            salary : Number(salary),
            active : true
        }
        setEmployee([...employee,newEmployee])
    }
    const remove =(id)=>{
        const updatedEmp = employee.filter((emp) => (emp.id !== id));
        setEmployee(updatedEmp)
    }

    const toggleStatus = () =>{
        const updatedEmp = employee.map((emp) => (
           {...emp,active : emp.active ? emp.active = false : emp.active = true}
        ))
        setEmployee(updatedEmp)   
    }

    const increaseSalary =(id)=>{
        const updatedEmp = employee.map((emp)=>
            emp.id == id? {...emp,salary : Number(emp.salary)+5000} : emp
        )
        setEmployee(updatedEmp)
        
    }

    return (
        <>
            <div>
                <h1>Employee Management Dasboard</h1>
                {employee.map((emp) => (
                    <div key={emp.id} onDoubleClick={()=> remove(emp.id)}>
                        <p>Name : {emp.name}</p>
                        <p>Department : {emp.department}</p>
                        <p>Salary : {emp.salary}</p>
                        <p>Status : {emp.active ? "Active" : "Inactive"}</p>
                        <button onClick={()=> increaseSalary(emp.id)}>Increase Salary</button>
                    </div>               
                ))}
            </div>

            <div>
                <input type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
                <input type="text" placeholder="Enter your department"  onChange={(e)=>setDepartment(e.target.value)}/>
                <input type="number" placeholder="Enter your Salary" onChange={(e)=>setSalary(e.target.value)}/>
                <button onClick={addEmployee}>Add Employee</button>
                <button onClick={toggleStatus}>Toggle Status</button>
                
            </div>
            <div>
                <h2>Dashboard Analysis</h2>
                
                    <>
                    <p>Total Employees : {employee.length}</p>
                    <p>Actice Employees :  {employee.filter(emp => emp.active).length}</p>
                   
                    </>
                    
              
                
            </div>
        </>
    )
}
export default Employee