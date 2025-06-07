import "./globals.css";

export default function Home() {
  return (
    <div className="app">
      <div className="profile">
        <div className="background-image"></div>
        <div className="avatar"></div>
        <div className="about flex justify-center items-center">
          <h1 className="text-5xl antialiased font-semibold tracking-[-0.02em]">
            Phan
          </h1>
        </div>
      </div>
    </div>
  );
}
