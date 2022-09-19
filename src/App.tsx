import { type FC, useCallback, useState } from "react";
import reactLogo from "./assets/react.svg";

const App: FC = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="w-screen h-screen p-3">
      <div className="flex flex-col justify-center items-center">
        <a
          className="hover:opacity-60"
          href="https://vitejs.dev"
          target="_blank"
        >
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>

        <a
          className="hover:opacity-60 mt-3"
          href="https://reactjs.org"
          target="_blank"
        >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 className="text-2xl font-bold text-center pt-3">Vite + React</h1>

      <div className="flex flex-col justify-center items-center">
        <button
          className="border border-transparent border-r-8 px-2 py-2 text-base font-medium bg-black dark:bg-white cursor-pointer"
          onClick={increment}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="text-center">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default App;
