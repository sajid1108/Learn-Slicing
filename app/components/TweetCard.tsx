import Image from "next/image";

export default function TweetCard() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0D1117]">
      <div className="bg-[#243447] text-white p-6 rounded-lg shadow-lg w-[601px] h-[228px]">
        <div className="flex items-center space-x-4">
          {/* Gambar Profil */}
          <Image
            src="/pp-dummy3.jpg"
            alt="User Avatar"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-bold">John Doe</h3>
            <p className="text-gray-400 text-sm">@realjohndoe</p>
          </div>
        </div>
        {/* Konten Tweet */}
        <p className="mt-4 text-gray-300">
          Why do they call it 'debugging' when it feels more like 'wildly
          guessing and hoping for the best'?
          <span className="text-blue-400">
            {" "}
            #programming #coding #debugging
          </span>
        </p>
        {/* Footer */}
        <div className="mt-4 flex justify-between items-center text-gray-400 text-sm">
          <div className="flex items-center space-x-2">
            <span>❤️</span>
            <span>650</span>
          </div>
          <span>3:40 PM - Feb 24, 2022</span>
        </div>
      </div>
    </div>
  );
}
