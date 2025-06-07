export default function Main({ left, top }: { left: number; top: number }) {
  return (
    <div
      className="profile absolute bg-[#161616] border-[1px] rounded-sm transiton-all w-[100vh]"
      style={{ left: left + 200, top: top - 20 }}
    >
      <div className="background-image"></div>
      <div className="avatar h-fit"></div>
      <div className="about flex justify-center items-center">
        <h1 className="text-3xl pb-12 antialiased font-semibold tracking-[-0.02em] h-fit">
          Phan
        </h1>
      </div>
    </div>
  );
}
