import React, { useState } from "react";

type TheaderProps = {
  headerText: string;
};
interface IHeaderProps {
  headerText: string;
  extraText?: string;
}
const Props = ({ headerText, extraText = "default text" }: IHeaderProps) => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      {headerText} and {extraText}
      <div>
        {count}
        <div>
          <button onClick={() => setCount((prev) => prev + 1)}>
            Update count
          </button>
        </div>
      </div>
    </div>
  );
};

export default Props;
