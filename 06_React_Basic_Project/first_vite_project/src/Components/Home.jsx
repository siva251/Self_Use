import React from 'react';

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to React Essentials</h1>
                <p>Your guide to mastering core React concepts.</p>
            </header>

            <section className="home-section">
                <h2>What You'll Learn</h2>
                <ul>
                    <li>JSX & Components</li>
                    <li>Props & State</li>
                    <li>Hooks (useState, useEffect, etc.)</li>
                    <li>Routing with React Router</li>
                    <li>Context API & State Management</li>
                    <li>Custom Hooks & Reusability</li>
                </ul>
            </section>

            <section className="home-section">
                <h2>Get Started</h2>
                <p>Navigate through the sidebar or top menu to explore topics. Each concept is explained with code examples and simple explanations.</p>
            </section>

            <footer className="home-footer">
                <p>Happy Coding! 🚀</p>
            </footer>
        </div>
    );
};

export default Home;
