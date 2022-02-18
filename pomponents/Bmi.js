import React, {useState} from "react";
import Layout from "../containers/Layout";
export default function Bmi(){
    const [] = useState(0.0)

    return<Layout><><h1>BMI</h1>
    <from>
    <div><br />
    <label htmlFor="">이름</label><br />
    <input type="text" /><br />

    <label htmlFor="">신장</label><br />
    <input type="text" /><br />

    <label htmlFor="">몸무게</label><br />
    <input type="text" /><br />

    <button> 결과</button><br />
    <label><br />
    </label>

    </div>
    </from>
    </>
    </Layout>
}
