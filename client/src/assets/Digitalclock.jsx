import { useEffect, useState } from 'react';

export default function Clock() {
  const [time, setTime] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
    period: 'AM',
  });

  useEffect(() => {
    const showtime = () => {
      let currentTime = new Date();
      let h = currentTime.getHours();
      let m = currentTime.getMinutes();
      let s = currentTime.getSeconds();
      let apm = 'AM';

      if (h > 12) {
        h -= 12;
        apm = 'PM';
      }
      if (h < 10) {
        h = '0' + h;
      }
      if (m < 10) {
        m = '0' + m;
      }
      if (s < 10) {
        s = '0' + s;
      }

      setTime({
        hours: h,
        minutes: m,
        seconds: s,
        period: apm,
      });
    };

    const interval = setInterval(showtime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <body className="text-white bg-gradient-to-br from-gray-800 to-cyan-800 overflow-hidden">
      <h1 className="sticky top-0 bg-stone-700 text-center text-4xl p-4 w-full">Clock</h1>
      <section className="w-screen flex flex-col justify-center min-h-screen">
        <div className="relative text-6xl text-center m-0 animate-spin">
          <i className="fa-solid fa-clock"></i>
        </div>
        <div className="flex flex-row justify-center gap-2 p-5">
          <div className="text-6xl font-semibold">
            <h1>{time.hours} :</h1>
          </div>
          <div className="text-6xl font-semibold">
            <h1>{time.minutes} :</h1>
          </div>
          <div className="text-6xl font-semibold">
            <h1>{time.seconds}</h1>
          </div>
          <div className="text-4xl pt-5 pl-2 font-bold">
            <p>{time.period}</p>
          </div>
        </div>
      </section>
    </body>
  );
}
