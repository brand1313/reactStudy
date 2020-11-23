import React, { useState, useRef } from 'react';

function InputSample () {
    
    const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
    });

    const {name, nickname} = inputs;

    const nameinputs = useRef();

    const onChange = (e) => {
        const {name, value} = e.target;

        setInputs({
            ...inputs,
            [name] : value
        })
    }
    
    const onReset = () => {
        setInputs({
            name : '',
            nickname : ''
        });

        nameinputs.current.focus();
    }

    return(
        <div>
            <input name="name" placeholder="이름" value={name} onChange={onChange} ref={nameinputs}/>
            <input name="nickname" placeholder="별명" value={nickname} onChange={onChange} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>{name} : {nickname}</b>
            </div>
        </div>
    )    
}

export default InputSample;