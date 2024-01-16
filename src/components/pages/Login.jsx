import React from "react";

export default function Login() {

    return (
        <div className="login">
            <h1>Sign in to your account</h1>
            <form>
                <input type="text" id="email" name="email" placeholder="Type your email" required/>
                <input type="text" id="password" name="password" placeholder="Password" required/>
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}