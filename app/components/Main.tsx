export default function Main({ left, top }: { left: number; top: number }) {
  return (
    <div
      className="profile absolute bg-[#161616] border-[1px] rounded-sm"
      style={{ left: left, top: top }}
    >
      <div className="background-image"></div>
      <div className="avatar"></div>
      <div className="about flex justify-center items-center">
        <h1 className="text-5xl antialiased font-semibold tracking-[-0.02em]">
          Phan
        </h1>
      </div>
    </div>
  );
}
