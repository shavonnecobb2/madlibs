import React from 'react';

export const Story = props => {
    return <>
    <div className="table-container text-center">
        <br></br>
        <br></br>
   <p> There was once a wonderful lass named {props.entries.name}.<br></br>
    They lived in a far away castle with their {props.entries.number} {props.entries.animal}s.<br></br>
    It was a windy and chilly {props.entries.month} but neverthelss, {props.entries.name} always made sure to keep their trusty {props.entries.color} jacket on hand.<br></br>
    The end.</p><br></br>
    <p>Sorry.. too much technical stuff to work out and not enough time to fluff D:</p>
        </div>
        </>
}