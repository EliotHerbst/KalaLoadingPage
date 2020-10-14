import React, { useState } from 'react';
import { Input, Button} from 'reactstrap';

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
    const [success, changeSuccess] = useState(false);
    const handleChange = (e: any) => {
        changeEmail(e.target.value);
    }
    function timeout(delay: number) {
        return new Promise( res => setTimeout(res, delay) );}
    const onClick = (e: any) => {
        changeAdding(true);
        getKey()
            .then(x => addEmail(email, x))
                .then(response => {
                    changeAdding(false)
                    if (response.status === 200) {
                        changeSuccess(true);
                        return timeout(1000);
                    } else {
                        changeError(true);
                        return timeout(1000);
                    }
                }).then(() => {changeSuccess(false)
                    changeError(false)});
    }
    const inputStyle={
        display: "inline-block",
        width: "200px",
        marginRight: "10px"
    }
    const buttonStyle={
        display: "inline-block"
    }

    if(error || adding || success) {

    }

    return (
        <div>
            <Input style={inputStyle} onChange={handleChange} value={email} placeholder="Email Address"/>
            <Button style={buttonStyle} color="primary" active={false} onClick={onClick}>Notify Me</Button>
        </div>
    )
}