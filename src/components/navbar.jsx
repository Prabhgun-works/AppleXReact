import React from "react"
import { navLinks } from "../constants"
export default function Navbar() {
    return(
        <header>
            <nav>
                <img src='logo.svg' alt="Apple logo"/>
                <ul>{navLinks.map((link) => (
                        <li key={link.label} >
                            <a href={link.label}>{link.label}</a>
                        </li>

                    ))}   
                    <div className="flex-center gap-3">
                        <button>
                            <img src="/search.svg" alt="Search"/>
                        </button>
                        <button>
                            <img src="/cart.svg" alt="Cart"/>
                        </button>
                    </div>
                </ul>
            </nav>
        </header>
    )
}