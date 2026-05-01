import Editor from "./compnents/Editor";

export default function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-bg">
      <div
        id="view"
        className="h-[95%] w-[95%] grid grid-cols-[60%_40%] rounded-xl overflow-hidden"
      >
        <Editor />
        <div className="bg-[#0f0f10] w-full h-full rounded-r-xl border-2 border-text border-l-0"></div>
      </div>
    </div>
  );
}
