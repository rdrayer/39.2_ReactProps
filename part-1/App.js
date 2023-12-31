const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Roberta" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))