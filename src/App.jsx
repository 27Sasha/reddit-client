import React from "react";
import './App.css';
import Header from './page/Header/Header';
import Home from './page/Home/Home';
import Subreddits from './page/Subreddits/Subreddits';

export default function App() {
    return (
        <>
            <Header />
            <main>
                <Home />
            </main>
            <aside>
                <Subreddits />
            </aside>
        </>
    );
}