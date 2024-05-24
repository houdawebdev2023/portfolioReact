import React, { Component } from "react";
import Calendar from "react-calendar";
class Picker extends Component {
    state={
        date:new Date(),
        showDate:false
    }
    onChange= date =>{
        this.setState({
            date
        })
    }
    validation = () =>{
        this.setState({
            showDate: true
        })
        console.log(this.state.date);
    }
    reset = () => {
        this.setState({
            showDate:false
        })
    }
    render() {
        return (
            <div className="calendar-container">
            <div onClick={this.reset}>
                <Calendar
                onChange={this.onChange}
                selectRange={true}
                value={this.state.date}
                />
                </div>
                {/* <p>Date choisie:{this.state.date.toLocaleDateString()}</p> */}
                <button onClick={this.validation}>Valider</button>
                {this.state.showDate ? (
                    <div>
                    <p>Du : {this.state.date[0].toLocaleDateString()}</p>
                    <p>Au : {this.state.date[1].toLocaleDateString()}</p>
                    </div>
                ):null}
            </div>
        );
    }
}

export default Picker;
