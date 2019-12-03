import React from 'react';

export class Story extends React.Component {

    constructor(props) {
        super(props);
        if (props.location) {
            this.state = props.location.state; 
        } else { 
            this.state = {
                animal: "",
                color: "",
                number: "",
                name: "",
                month: ""
            }
        }
    }

    render() {
    return <>
    <div className="table-container text-center">
        <br></br>
        <br></br>
   <p> There was once a wonderful lass named {this.state.name}.<br></br>
    They lived in a far away castle with their {this.state.number} {this.state.animal}s.<br></br>
    It was a windy and chilly {this.state.month} but neverthelss, {this.state.name} always made sure to keep their trusty {this.state.color} jacket on hand.<br></br>
    The end.</p><br></br>
    <p>Sorry.. too much technical stuff to work out and not enough time to fluff D:</p>
        </div>
        </>
    }
}