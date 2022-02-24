import React, {useState} from "react";
import Layout from "../containers/Layout";
export default function Login(){
    const [inputs, setInputs] = useState({})
    const {id, pw} = inputs; 

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name } = e.target;
        setInputs({...inputs, [name]: value})
    }
        const handleClick = (e) => {
            e.preventDefault()
           const loginRequest = {id, pw}
            alert(` 사용자이름: ${JSON.stringify(loginRequest)}`)
        }
            return (<Layout>
                <form>
                <h1>로그인</h1><br /><br />

<div></div>

<div>

    <label htmlFor=""><b>id</b></label>
    <input type="text" name="id" onChange={handleChange} /><br />
    <label htmlFor=""><b>pw</b></label>
    <input type="text" name="pw" onChange={handleChange} /><br />

    <button onClick={handleClick}>로그인</button><br />
<label htmlFor="">자동 저장</label><br />

</div>

</form>
</Layout>
            )}