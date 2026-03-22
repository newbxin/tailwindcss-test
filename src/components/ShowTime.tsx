import { useState, useEffect } from 'react';

const ShowTime: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  };

  return (
    <div className="flex justify-center items-center mt-8">
      <div className="bg-blue-800 rounded-lg px-6 py-4 text-white text-center w-[500px] h-[300px] flex items-center justify-center">
        <p className="text-2xl font-mono" style={{ color: 'white' }}>{formatTime(time)}</p>
      </div>
    </div>
  );
};

export default ShowTime;
