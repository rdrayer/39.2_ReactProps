const Person = (props) => {
    let message;
    if (props.age > 18) {
        message = "please go vote!"
    } else {
        message = "you must be 18"
    }
    let displayName;
    if (props.name.length > 8) {
        displayName = props.name.slice(0, 6)
    } else {
        displayName = props.name;
    }
    return (
    <div>
        <p>Learn some info about this person: </p>
            <h4>Name: {displayName}</h4>
            <h4>Age: {props.age}</h4>
            <h4>Hobbies: </h4>
            <ul>
                {props.hobbies.map((hobby) => (
                    <li>{hobby}</li>
                ))}
            </ul>
            <h3>{message}</h3>

            
    </div>
      
    )
}