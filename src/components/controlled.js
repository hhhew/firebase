import React, { Component } from 'react';
import { firebase } from "../firebase"

class controlled extends Component {
    state = {
        value: ""
    }
    handeleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    handeleSeve = () => {
        const data = this.state.value
        const user = firebase.auth().currentUser
        writeUserData(user.uid)

        // добовление рекордов
        function writeUserData(userId, name, email, ) {
            firebase.database().ref('users/' + userId + "/records").push({
              time: +data
            });
        }
        
    }
    // componentDidMount() {
    //   //записывает текущего пользователя
    //     const user = firebase.auth().currentUser
    //     writeUserData(user.uid,user.displayName, user.email)

    //     function writeUserData(userId, name, email, ) {
    //         firebase.database().ref('users/' + userId).set({
    //           username: name,
    //           email: email
    //         });
    //     }
    // }

    handeleGetData = () => {
        const userId = firebase.auth().currentUser.uid
        // получение массива рекордов текущего пользователся 
        firebase.database().ref('users/' + userId + "/records").orderByChild("time").once("value")
        .then((snapshot => {
            const records = []
            snapshot.forEach(childSnapshot => {
                records.push({
                   time: childSnapshot.val().time
                })
            })
            console.log(records)
        }))
    }

    render() {
        return (
            <div>
                enter numder:
               <input type="text" onChange={this.handeleChange} value={this.state.value} />
                <button onClick={this.handeleSeve}>save</button>
                <button onClick={this.handeleGetData}>get data</button>
            </div>
        )
    }
}

export default controlled;