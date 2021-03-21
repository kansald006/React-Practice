import { Component, useEffect, } from 'react';
import React, { useState } from 'react';

function Welcome() {
    const handlelogout = () => {
        window.location.href = "/"
    }
    return (
        <>
            <h1>Welcome</h1>
            <button onClick={handlelogout}>Logout</button>
        </>
    )
}

export default Welcome;