import { motion } from "motion/react";

export default function AnalyseView() {
  return (
    <>
      <div id="result" className="flex justify-center items-center">
        <div className="w-[80%] h-[90%] bg-text rounded-xl relative">
          <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-2xl">
            Analysis Result Will be displayed here
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <motion.button
          className="w-[80%] h-[50%] bg-text rounded-xl font-bold cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
        >
          Analyse
        </motion.button>
      </div>
    </>
  );
}
