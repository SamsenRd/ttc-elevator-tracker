import React from "react"

export default function Hero() {
    return (
        <>
            <header class="masthead">
                <div class="container position-relative">
                    <div class="row justify-content-center">
                        <div class="col-xl-6">
                            <div class="text-center text-white">
                                <h1 class="mb-5">Welcome to TTC Elevator Tracker</h1>
                                <p class="larger-text">Track elevator statuses at TTC stations in real-time.</p>
                                <div class="search-input">
                                    <input type="text" class="form-control form-control-lg" placeholder="Enter a station"></input>
                                    <button type="submit" class="btn btn-primary btn-lg">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}