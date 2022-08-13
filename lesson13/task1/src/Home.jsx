import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div class="page__content">
      <h1>🏠</h1>
      <Link to="/products">To products</Link>
    </div>
  );
}
