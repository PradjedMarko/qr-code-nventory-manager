"use client"
import Link from "next/link";
import {useSelector, useDispatch} from 'react-redux';
import{logout} from '../store/userSlice';

export default function Navbar()
{
    const {isAuthenticated}= useSelector(state=> state.user);
    const dispatch = useDispatch();
    return(
        <nav>
            <Link href="/">Naslovna</Link>
            
                {!isAuthenticated ?(
                    <>
                    <Link href="/login">login</Link>

                    </>
                ): (
                    <>
                     <Link href="/inventory">inventory</Link>
                     <button onClick={()=>dispatch(logout())}>Logout</button>
                </>)}
        </nav>
    )

}
