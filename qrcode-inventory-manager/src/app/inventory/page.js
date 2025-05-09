"use client";

import {useSelector} from "react-redux";

export default function Inventory()
{
    const{isAuthenticated}=useSelector(state=>state.user);

    if (!isAuthenticated) return <p>Molimo prijavite se</p>

    return(
        <div>
            <table>
                <thead>
                    <td>Naziv</td>
                    <td>Lokacija</td>
                    <td>Količina</td>
                    <td>CIjena</td>
                    <td>Status</td>
                </thead>
                <tbody>
                    <td>Stolica</td>
                    <td>Zbornica</td>
                    <td>1</td>
                    <td>500e</td>
                    <td>✅</td>
                </tbody>
            </table>
        </div>
    );
}