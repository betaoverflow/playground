import React, { useState, useEffect } from 'react'
import axios from 'axios'

function passCheck() {
    if (prompt('Please enter your password', '') == 'letmein') {
    } else {
        alert('Wrong Password')
        window.location = 'http://localhost:3000/questionBank'
    }
}

function toApprove(id){
    try {
        axios.put(`http://localhost:8080/api/questions/moderator/${id}`,{ isApproved: 'true' }).then(function (response) {
            // handle success
            console.log(response)
        })
    } catch (err) {
        console.log(err)
    }
}

function Questions() {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        passCheck()
        try {
            axios.get('http://localhost:8080/api/questions').then(function (response) {
                // handle success
                setQuestions(response.data)
            })
        } catch (err) {
            console.log(err)
        }
    }, [])
    console.log(questions)
    return (
        <div>
            {questions.map(question => {
                return (
                    <div key={question._id}>
                        <h1 key={question._id}>{question.title}</h1>
                        <button onClick={toApprove(question._id)}>Approve</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Questions
