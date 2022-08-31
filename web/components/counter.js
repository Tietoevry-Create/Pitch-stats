import CountUp from 'react-countup';
const Counter = () => {
  return (
    <>
      <div className="mx-auto text-center py-4">
        <CountUp
          className="text-4xl md:text-7xl text-center"
          decimals={3}
          start={0}
          duration={3}
          delay={0.2}
          end={0.86}
          suffix={' grams of Co2'}
        />
        <p className="text-xl py-5">is produced for each visit.</p>
      </div>
      <div className="mx-auto text-center py-4">
        <p className="text-xl py-5">
          For every <span className="underline">10.000</span> visit
        </p>
        <CountUp
          className="text-4xl md:text-7xl text-center"
          decimals={2}
          start={0}
          duration={3}
          delay={1}
          end={102.97}
          suffix={' kilos of Co2'}
        />
        <p className="text-xl py-5">is produced.</p>
      </div>
    </>
  );
};

export default Counter;
