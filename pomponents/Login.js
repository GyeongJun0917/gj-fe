import React, {useState} from "react";
export default function Login(){
    const [] = useState(0)
return <><hi>Login</hi>
<form>
<div></div>
<div>
<label htmlFor=""><b>Username</b></label><br />
<input type="text" /><br />
<label htmlFor=""><b>Password</b></label><br />
<input type="text" /><br />
<button>Login</button><br />
<label htmlFor="">
<input type="text" /> Remember me
</label><br />
</div>
<div>
<button>Cancel</button>
<span>Forgot <a href="#">password?</a></span>
</div>
</form>
</>
}
