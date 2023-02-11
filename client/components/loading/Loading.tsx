import { RotatingLines } from "react-loader-spinner";

export const Loading = () => {
  return (
    <main className="items z-0 flex min-h-screen min-w-full justify-center p-5 sm:p-10">
      <RotatingLines
        strokeColor="#047857"
        strokeWidth="1"
        animationDuration="0.75"
        width="68"
        visible={true}
      />
    </main>
  );
};
