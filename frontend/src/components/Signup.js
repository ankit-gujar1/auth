import { Link } from "react-router-dom";

const Signup=()=>{
    return(
        <>
            <h1>Signup</h1>
            <Link to={'/'}>Home</Link>

            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Enter Username</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Enter Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Signup;