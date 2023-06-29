const { Component } = require("react");

class Reviews extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    clickGood =() => 
    this.setState((prevState) => ({
            good: prevState.good + 1,
            }))
    clickNeutral =() => 
    this.setState((prevState) => ({
            neutral: prevState.neutral + 1,
            }))
    clickBad =() => 
    this.setState((prevState) => ({
            bad: prevState.bad + 1,
            }))

    render () {
        return (
            <div>
                <h2>Please leave feedback</h2>
                <div>
                    <button onClick={this.clickGood}>Good</button>
                    <button onClick={this.clickNeutral}>Neutral</button>
                    <button onClick={this.clickBad}>Bad</button>
                </div>
                <div>
                    <p>Good:{this.state.good}</p>
                    <p>Neutral:{this.state.neutral}</p>
                    <p>Bad:{this.state.bad}</p>
                </div>
            </div>
        )
    }
}

export default Reviews