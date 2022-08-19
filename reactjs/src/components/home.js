import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="card mt-5">
      <div className="card-header">Welcome</div>
      <div className="card-body">
        <h5 className="card-title">Simple Login</h5>
        <p className="card-text">Try Login or Register</p>
        <Link className="btn btn-primary" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
}
