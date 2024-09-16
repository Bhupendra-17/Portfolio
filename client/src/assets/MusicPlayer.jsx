import { useState, useEffect, useRef } from 'react';
import Image from './a.jpg';
import Song from './First Eye Sight(YUDKBH).mp3';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);
  const progressRef = useRef(null);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    const updateProgress = () => {
      setProgress(audio.currentTime);
    };
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration);
    });
    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
    };
  }, []);

  const handleProgressChange = (e) => {
    audioRef.current.currentTime = e.target.value;
    setProgress(e.target.value);
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="bg-zinc-900 text-white">
      <section>
        <div className="h-fit m-auto p-9 rounded-lg relative bg-gradient-to-r from-orange-600 to-pink-900 md:w-4/5 lg:w-3/5">
          <div className="circle flex justify-between">
            <div className="bg-stone-50 w-9 h-9 py-1 rounded-3xl px-2 hover:ring-4">
              <i className="fa-solid fa-angle-left text-2xl text-red-600 text-center"></i>
            </div>
            <div className="bg-stone-50 w-9 h-9 p-2 py-1 rounded-3xl hover:ring-4">
              <i className="fa-solid fa-bars text-2xl text-red-600 text-center"></i>
            </div>
          </div>
          <br />
          <hr className="bg-white" />
          <div>
            <p>
              <marquee behavior="" direction="left" className="font-semibold text-2xl">
                My favourite song.mp3
              </marquee>
            </p>
          </div>

          {/* Image Section */}
          <div className="block m-auto">
            <img src={Image} className="h-80 rounded-xl hover:ring-4 border-4 self-center m-auto" alt="Album Cover" />
          </div>

          {/* Controls Section - Directly after the Image */}
          <div className="relative justify-center mt-10">
            <div className="flex justify-center">
              <audio controls ref={audioRef} id="song" className="hidden">
                <source src={Song} type="audio/mp3" />
              </audio>
            </div>
            <div className="flex flex-col gap-5 mt-5">
              <input
                type="range"
                value={progress}
                max={duration}
                ref={progressRef}
                onChange={handleProgressChange}
                className="appearance-none w-full h-1.5 rounded-lg cursor-pointer"
              />
              <div className="flex flex-row align-middle justify-between text-black">
                <div className="bg-stone-50 w-9 h-9 p-1 rounded-3xl hover:ring-4">
                  <i className="fa-solid fa-backward text-2xl text-red-600 text-center"></i>
                </div>
                <div
                  className="bg-cyan-600 w-12 h-12 px-3 py-1.5 rounded-3xl hover:ring-4"
                  onClick={togglePlayPause}
                >
                  <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'} text-4xl text-white text-center`}></i>
                </div>
                <div className="bg-stone-50 w-9 h-9 p-2 py-1 rounded-3xl hover:ring-4">
                  <i className="fa-solid fa-forward text-2xl text-red-600 text-center"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MusicPlayer;
