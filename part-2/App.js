const App = () => {
    return (
        <div>
            <Tweet 
                username="berta216"
                name="Roberta"
                date="01/01/2024"
                message="This is my first Tweet"
            />
            <Tweet 
                username="jdrays"
                name="Justin"
                date="01/21/2024"
                message="Hello"
            />
            <Tweet 
                username="jjdrays"
                name="John John"
                date="01/03/2024"
                message="Yo yo yo"
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))