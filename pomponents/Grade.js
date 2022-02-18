import React, {useState} from "react";
export default function Grade(){
    const [kor, setKor] = useState(0)
return <><h1>Grade</h1>
<from>
<div>
<label htmlFor=""><b>이름</b></label> <br />
<input type="text" /><br /><br />
<label htmlFor=""><b>국어 점수</b></label><br />
<input type="text" /><br /><br />
<label htmlFor=""><b>영어 점수</b></label><br />
<input type="text" /><br /><br />
<label htmlFor=""><b>수학 점수</b></label><br />
<input type="text" /><br /><br />
<button>결과</button><br />
<label><br /><br />
</label>
</div>
</from>
</>
}
