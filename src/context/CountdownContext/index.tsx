import { ReactNode, createContext, useEffect, useState } from "react";

interface CountdownContextState {
  timeDifference: {
    months: number;
    weeks: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

interface CountdownContextInterface {
  timeDiff: CountdownContextState;
  setTimeDiff: React.Dispatch<React.SetStateAction<CountdownContextState>>;
}

interface propsInterface {
    children: ReactNode;
}

const defaultState: CountdownContextState = {
  timeDifference: {
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
};

const CountdownContext = createContext<CountdownContextInterface>({
  timeDiff: defaultState,
  setTimeDiff: () => {},
});

const CountdownProvider = ({ children } : propsInterface) => {
  const [timeDiff, setTimeDiff] = useState<CountdownContextState>(defaultState);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const targetDate = new Date("2023-05-25T00:00:00.000Z"); // example target date
      const timeDifference = targetDate.getTime() - now.getTime();

      const months  = Math.floor((timeDifference / (1000 * 60 * 60 * 24 * 30)));
      const weeks   = Math.floor((timeDifference / (1000 * 60 * 60 * 24 * 7)) % (4));
      const days    = Math.floor((timeDifference / (1000 * 60 * 60 * 24)) % (7));
      const hours   = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDifference / (1000 / 60)) % 60);
      const seconds = Math.floor((timeDifference / (1000) % 60));
      setTimeDiff({ timeDifference: { months, weeks, days, hours, minutes, seconds } });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeDiff]);

  return (
    <CountdownContext.Provider value={{ timeDiff, setTimeDiff }}>
        {children}
    </CountdownContext.Provider>
  )
};

export {CountdownContext, CountdownProvider};
