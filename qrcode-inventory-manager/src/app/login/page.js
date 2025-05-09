"use client"
import { useRouter } from "next/navigation";
import {useDispatch } from "react-redux";
import {login} from "../store/userSlice";

export default  function Login ()
{
    const dispatch= useDispatch();
    const router = useRouter();

    const handleLogin =(e) =>{
        e.preventDefault();
        dispatch(login({username:"testUser"}))
        router.push("/inventory");
    };
    return(
        <div>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Unesite korisničko ime" required></input>
                <input type="password" placeholder="Unesite lozinku" required></input>
                <button type="submit">Prijava</button>
            </form>
        </div>
    );
}