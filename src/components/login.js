import React, { Component } from 'react';
import {firebase} from "../firebase"

class Login extends Component {
    state = {
        name:"",
        email:'',
        password:''
    }
    handleNameChange = (event) => {
        this.setState({
            name:event.target.value
        })
    }
    handleEmailChange = (event) => {
        this.setState({
            email:event.target.value
        })
    }
    handlePasswordChange = (event) => {
        this.setState({
            password:event.target.value
        })
    }
    handleSignIn = () => {
        firebase.auth().signInWithEmailAndPassword(
            this.state.email, this.state.password
        ).then(()=> this.props.history.push('/'))
        .catch(e=>alert(e.message))
    }
    handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(
            this.state.email, this.state.password
        )
        .then(() => {

            var user = firebase.auth().currentUser;

            user.updateProfile({
              displayName: this.state.name
            }).then(console.log("add user name"))
            .catch((e)=>console.log(e));            
    
            this.props.history.push('/')
        })
        .catch(e=>alert(e.message))
    }
    handleSignOut() {
        firebase.auth().signOut()
        .then(() => console.log('Signed Out'))
        .catch( (error) =>console.error('Sign Out Error', error))
    }
    componentDidMount() {
        var user = firebase.auth().currentUser;

        if (user != null) {
        user.providerData.forEach(function (profile) {
            console.log("Sign-in provider: " + profile.providerId);
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            console.log("  Photo URL: " + profile.photoURL);
        });
        }
    }
    render(){
        
        return(
            <div className="container">
                <div>
                    <div className="form_element">
                        <label>Enter name</label>
                        <input 
                            type="text"
                            onChange={this.handleNameChange}
                            value={this.state.name}
                        />
                    </div>
                    <div className="form_element">
                        <label>Enter email</label>
                        <input 
                            type="text"
                            onChange={this.handleEmailChange}
                            value={this.state.email}
                        />
                    </div>
                    <div className="form_element">
                        <label>Enter password</label>
                        <input 
                            type="text"
                            onChange={this.handlePasswordChange}
                            value={this.state.password}
                        />
                    </div>
                <button onClick={this.handleSignUp}>Registration</button>
                <button onClick={this.handleSignIn}>Sign in</button>
                <button onClick={this.handleSignOut}>Sign out</button>
                </div>
            </div>
        )
    }
}

export default Login;