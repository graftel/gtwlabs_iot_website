import React from 'react';

class RegForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            conform_password: '',
            submitted: false};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState( { [name]: value} );

        console.log(this.state);
    }

    handleSubmit(event) {
        event.preventDefault();
        const { email, password, conform_password } = this.state;
        console.log('email=' + email + 'password=' + password + 'confirm=' + conform_password);
    }    

    render() {
        const { email, password, conform_password, submitted } = this.state;
        return (
            <form id="register-form" onSubmit={this.handleSubmit} role="form">
                <div className="form-group">
                    <input type="email" name="email" id="emailreg" tabIndex="1"
                        className="form-control" placeholder="Email Address" value={email} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <input type="password" name="password" id="passwordreg"
                        tabIndex="2" className="form-control" placeholder="Password" value={password} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <input type="password" name="conform_password"
                        id="confirm-password" tabIndex="3" className="form-control"
                        placeholder="Confirm Password" value={conform_password} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                </div>
            </form>
        );
    }

}

export default RegForm;