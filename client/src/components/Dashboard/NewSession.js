import React, { Component } from 'react';

class NewSession extends Component {
  constructor() {
    super();
    this.state = {
      responses: [],
      feelings: [""]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let responses = [...this.state.responses];
    let feelings;
    responses[e.target.id] = e.target.value;

    if (responses[3]) {
      feelings = responses[3].split(',');
    } else {
      feelings = [""];
    }

    this.setState({
      responses: responses,
      feelings: feelings
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("This is happening");
    console.log(this.state.responses);
    this.props.saveSession(this.state.responses);
  }

  render() {
    return (
      <div className="container">
        <h2>New RAIN Session</h2>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            {this.props.questions.map((data, i) => {
              if (i === 3) {
                return (
                  <div className="form-group">
                  <label htmlFor="{i}">
                    <h3>{data.step}</h3>
                    {data.question}
                    <div className="feelings">
                      {this.state.feelings && this.state.feelings.map(data => (
                        <span className="badge badge-success">{data}</span>
                      ))}
                    </div>
                  </label>
                  <input
                    className="form-control"
                    id={i}
                    value={this.state.responses[i]}
                    onChange={this.handleChange} />
                </div>
                )
              }
              return (
                <div className="form-group">
                <label htmlFor="{i}">
                  <h3>{data.step}</h3>
                  {data.question}
                </label>
                <input
                  className="form-control"
                  id={i}
                  value={this.state.responses[i]}
                  onChange={this.handleChange} />
              </div>
              )
            })}
            <button
              type="submit"
              className="btn btn-primary">Submit</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default NewSession;
