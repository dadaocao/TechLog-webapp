import googleOneTap from "google-one-tap";
import React, { useEffect, useState } from 'react';

const options = {
    client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    auto_select: false,
    cancel_on_tap_outside: false,
    context:"signin",
}

function GoogleLogIn() {
        const [loginData, setLoginData] = useState(
            localStorage.getItem("loginData")
                ? JSON.parse(localStorage.getItem("loginData"))
                : null
        );

        useEffect(() => {
            if (!loginData) {
                googleOneTap(options, async (response) => {
                    console.log(response);
                    const res = await fetch("/api/google-login", {
                        method: "POST",
                        body: JSON.stringify({
                            token: response.credential,
                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });
                    const data = await res.json();
                    setLoginData(data);
                    localStorage.setItem("loginData", JSON.stringify(data));
                });
            }
        }, [loginData]);

        const handleLogout = () => {
            localStorage.removeItem("loginData");
            setLoginData(null);
        };

        return (
            <div>
                <header>
                    <h1>Implement "Google One-Tap Login" in React and Node.js</h1>
                    <div>
                        {loginData ? (
                            <div>
                                <h2>
                                    You "{loginData.name}" logged in as {loginData.email}
                                </h2>
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                        ) : (
                            <div>Not logged in</div>
                        )}
                    </div>
                </header>
            </div>
        );
    }

export default GoogleLogIn;