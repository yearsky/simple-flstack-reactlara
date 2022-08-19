import { useEffect, useState } from "react";
import AuthUser from "./AuthUser";

export default function Dashboard() {
  const { http } = AuthUser();
  const [userdetail, setUserdetail] = useState("");

  useEffect(() => {
    fetchUserDetail();
  }, []);

  const fetchUserDetail = () => {
    http.post("/me").then((res) => {
      setUserdetail(res.data);
    });
  };

  return (
    <div className="row justify-content-center">
      <h1 className="mb-4 mt-4">OurVerse </h1>

      {userdetail ? (
        <>
          {" "}
          <div>
            <div class="card">
              <div class="card-body">
                Hi {userdetail.name}! Welcome to Our Universe!
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <p>Please Login</p>
        </>
      )}
    </div>
  );
}
