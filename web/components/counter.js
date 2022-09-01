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
          suffix={' gram av Co2'}
        />
        <p className="text-xl py-5">blir produsert etter hvert besøk.</p>
      </div>
      <div className="mx-auto text-center py-4">
        <p className="text-xl py-5">
          For hvert <span className="underline">10.000</span> besøk
        </p>
        <CountUp
          className="text-4xl md:text-7xl text-center"
          decimals={2}
          start={0}
          duration={3}
          delay={1}
          end={102.97}
          suffix={' kilo av Co2'}
        />
        <p className="text-xl py-5">blir produsert.</p>
      </div>
    </>
  );
};

export default Counter;
