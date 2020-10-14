import React, { useState } from 'react';
import { Input, Button, Spinner} from 'reactstrap';

async function getKey() {
    let request = await fetch('https://kalalandingpage.pythonanywhere.com/key')
    let response = await request.json()
    return response.Key;
}

async function addEmail(email: string, key: any) {
    let resp = fetch('https://kalalandingpage.pythonanywhere.com/addemail', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Key': key
        },
        body: JSON.stringify({
            Email: email,
        })
    })
    return resp;
}

export default function EmailForm() {
    const [email, changeEmail] = useState('');
    const [adding, changeAdding] = useState(false);
    const [error, changeError] = useState(false);
    let regEmail: RegExp = new RegExp('^[^@s]+@[^@s.]+.[^@.s]+$')
    const handleChange = (e: any) => {
        changeEmail(e.target.value);
    }

    const onClick = (e: any) => {
        if (regEmail.test(email)) {
            console.log('yes');
            getKey()
                .then(x => {changeAdding(true);
                   return addEmail(email, x)})
                .then(response => {
                    changeAdding(false)
                    console.log(response);
                });

        } else {
            changeError(true);
        }
    }
    if(error) {
        console.log('error');
    }

    const inputStyle={
        display: "inline-block",
        width: "200px",
        marginRight: "10px"
    }
    const buttonStyle={
        display: "inline-block"
    }
    const parent = {

    }
    if (adding) {
        return (
            <div style={parent}>
            <Input style={inputStyle} onChange={handleChange} value={email} placeholder="Email Address"/>
            <Spinner style={buttonStyle} color="primary"/>
        </div>
        )
    }
    return (
        <div style={parent}>
            <Input style={inputStyle} onChange={handleChange} value={email} placeholder="Email Address"/>
            <Button style={buttonStyle} color="primary" active={false} onClick={onClick}>Notify Me</Button>
        </div>
    )
}