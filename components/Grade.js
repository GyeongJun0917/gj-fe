import React, {useState} from "react";
import Layout from "../containers/Layout";
export default function Grade(){
    const [inputs, setInputs] = useState({})
    const {name, kor, eng, math} = inputs;
    const handleChange = (e) => {
        e.preventDefault()
        const {value, name } = e.target;
        setInputs({...inputs, [name]: value})
    }
    const handleClick = (e) => {
        e.preventDefault()
       const gradeRequest = {name, kor, eng, math}
        alert(` 사용자이름: ${JSON.stringify(gradeRequest)}`)
    }
    
    const sum = ()=>{
        let name = document.getElementById('name').value
        console.log('이름'+name)
        let kor = document.getElementById('kor').value
        console.log('국어'+kor)
        let eng = document.getElementById('eng').value
        console.log('영어'+eng)
        let math= document.getElementById('math').value
        console.log('수학'+math)

    }
    
return( <Layout>
    <form>
    <h1>Grade</h1>
<div>
<label htmlFor=""><b>이름</b></label> <br />
<input type="text" id="name" onChange={handleChange}  /><br /><br />
<label htmlFor=""><b>국어 점수</b></label><br />
<input type="text" id="kor" onChange={handleChange} /><br /><br />
<label htmlFor=""><b>영어 점수</b></label><br />
<input type="text" id="eng" onChange={handleChange} /><br /><br />
<label htmlFor=""><b>수학 점수</b></label><br />
<input type="text" id="math" onChange={handleChange} /><br /><br />
<button onClick={handleClick}>결과 </button><br />
</div>
</form>
</Layout>
 ) }