import AnalyseView from "./compnents/AnalyseView";
import Editor from "./compnents/Editor";

export default function App() {
  return (
    <div
      id="view"
      className="h-screen w-screen grid grid-cols-[60%_40%] overflow-hidden"
    >
      <Editor />
      <div className="bg-[#0f0f10] w-full h-full grid grid-rows-[90%_10%]">
        <AnalyseView />
      </div>
    </div>
  );
}
