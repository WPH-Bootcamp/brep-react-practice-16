import { useEffect, useState } from "react";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <p>Loading data...</p>;
  }
  return (
    <div>
      <h3>DASHBOARD</h3>

      {isLogin ? <h3>Dashboard</h3> : <h3>Silahkan Login</h3>}
      <button onClick={() => setIsLogin((prev) => !prev)}>Login</button>

      <button onClick={() => setShowDetail((prev) => !prev)}>
        Show Detail
      </button>
      {showDetail && <p>ini detail tambahan....</p>}
    </div>
  );
}
