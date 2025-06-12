import Image from "next/image";
import { useState } from "react";
import { FaHome, FaStore, FaGift, FaWallet, FaHandshake } from "react-icons/fa";
import Progress from "../components/Progress";

export default function Home() {
  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState(1);
  const CLICK_REWARD = 100;

  const handleClick = () => {
    const newPoints = points + CLICK_REWARD;
    setPoints(newPoints);
    if (newPoints >= level * 20000) {
      setLevel(level + 1);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 flex flex-col justify-between">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white tracking-wide">BAYJACKPOTS</h1>
      </div>

      <div className="flex justify-center py-4">
        <div className="rounded-full border-4 border-green-500 p-2">
          <Image src="/bayjackpot_maskot.png" alt="Mascot" width={150} height={150} />
        </div>
      </div>

      <div className="text-center space-y-2">
        <div className="text-lg">💰 Kasa: {points} Puan</div>
        <div className="text-sm">Level: {level}</div>
        <Progress value={(points % 20000) / 200} className="w-1/2 mx-auto bg-gray-700" />
      </div>

      <div className="flex justify-center py-4">
        <button
          onClick={handleClick}
          className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full shadow-lg"
        >
          <Image src="/click_button.png" alt="Click" width={100} height={100} />
        </button>
      </div>

      <div className="flex justify-around items-center py-3 bg-green-500 text-white rounded-t-2xl">
        <div className="text-center"><FaHome className="mx-auto" /><span className="text-xs">Anasayfa</span></div>
        <div className="text-center"><FaStore className="mx-auto" /><span className="text-xs">Market</span></div>
        <div className="text-center"><FaGift className="mx-auto" /><span className="text-xs">Cashout</span></div>
        <div className="text-center"><FaWallet className="mx-auto" /><span className="text-xs">Varlıklarım</span></div>
        <div className="text-center"><FaHandshake className="mx-auto" /><span className="text-xs">Sponsorlar</span></div>
      </div>
    </div>
  );
}
