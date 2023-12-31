const App = () => {
    return (
        <div>
            <Person 
                name="RobertaJo"
                age={36}
                hobbies={["soccer", "snowboarding", "carving spoons"]}
            />
            <Person 
                name="Jhunar"
                age={38}
                hobbies={["soccer", "snowboarding", "carving spoons"]}
            />
            <Person 
                name="Justin"
                age={10}
                hobbies={["soccer", "snowboarding", "carving spoons"]}
            />
        </div>

    )
}

ReactDOM.render(<App />, document.getElementById("root")) 