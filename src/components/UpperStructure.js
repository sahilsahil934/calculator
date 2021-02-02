const UpperStructure = ({state, historyRecord}) => {

    return (
        <div className="card">
            <h1 className="card-header">Calculator</h1>
            <div className="screen">
                <p className="card-title">{historyRecord()}</p>
                <h2 className="card-title">{(state.operation === '=') ? state.result : state.number}</h2>
            </div>
        </div>
    )
}

export default UpperStructure;