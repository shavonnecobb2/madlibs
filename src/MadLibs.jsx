import React from 'react';
import { Story } from "./Story";
import { Redirect } from 'react-router-dom';

export class MadLibs extends React.Component {

    state = {
        animal: "",
        color: "",
        number: "",
        name: "",
        month: ""
    }

    render() {
        return <>
            {this.state.redirect && <Redirect to="/story" />}
            <form className="container">
                <h1 className="text-center">Shavonne's Mad Mad MadLibs!</h1>
                <div className="form-group">
                    <label htmlFor="animal">What's your favorite animal? (singular)</label>
                    <input type="text" id="animal" name="animal" className="form-control"
                        value={this.state.animal} onChange={e => this.setState({ animal: e.target.value })} />
                </div>

                <div className="form-group">
                    <label htmlFor="color">What's your favorite color?</label>
                    <input type="text" id="color" name="color" className="form-control"
                        value={this.state.color} onChange={e => this.setState({ color: e.target.value })} />
                </div>

                <div className="form-group">
                    <label htmlFor="number">What's your favorite number?</label>
                    <input type="text" id="number" name="number" className="form-control"
                        value={this.state.number} onChange={e => this.setState({ number: e.target.value })} />
                </div>

                <div className="form-group">
                    <label htmlFor="name">What's your best friend's name?</label>
                    <input type="text" id="name" name="name" className="form-control"
                        value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                </div>

                <div className="form-group">
                    <label htmlFor="month">What month is your birthday?</label>
                    <input type="text" id="month" name="month" className="form-control"
                        value={this.state.month} onChange={e => this.setState({ month: e.target.value })} />
                </div>

                <div>
                    <button type="button" className="btn btn-primary btn-lg btn-block"
                        onClick={e => this.onSubmit()}>
                        Save
                    </button>
                </div>
        </form>
            <Story entries={this.state} />
        </>
    }

    onSubmit() {
        this.setState({ redirect: true })
    }
}
