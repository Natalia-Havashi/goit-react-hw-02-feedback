import { Button, Container, ContainerBtn, Feedback, Response } from "./Reviews.styled";

const { Component } = require("react");

class Reviews extends Component {
   
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

    totalFeedback = () => {
        let total = this.state.good + this.state.neutral + this.state.bad;
        return total;
            };

    render () {
        return (
            <Container>
                <Feedback>Please leave feedback</Feedback>
                <ContainerBtn>
                    <Button onClick={this.clickGood}>Good</Button>
                    <Button onClick={this.clickNeutral}>Neutral</Button>
                    <Button onClick={this.clickBad}>Bad</Button>
                </ContainerBtn>
                <div>
                    <Response>Good: {this.state.good}</Response>
                    <Response>Neutral: {this.state.neutral}</Response>
                    <Response>Bad: {this.state.bad}</Response>
                    <p>Title: {this.totalFeedback}</p>
                </div>
            </Container>
        )
    }
}

export default Reviews