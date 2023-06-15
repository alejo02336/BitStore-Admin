import React from "react";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <div className="main__greeting">
            <h1>Hello BitStore</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>
      </div>
    </main>
  );
}
