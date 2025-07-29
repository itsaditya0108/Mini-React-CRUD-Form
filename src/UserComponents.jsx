function UserComponents({ name, age, student }) {
    return (
        <>
            <h2>Here is my name : {name}</h2>
            <h2>Here is my age : {age}</h2>

            <hr />
            <h3>Student name : {student.name}</h3>
            <h3>Student age : {student.age}</h3>
            <h3>Studnt rollno : {student.rollno}</h3>
        </>

    )
}

export default UserComponents