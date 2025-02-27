import Image from "next/image";

export default function TweetCard() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0D1117]">
      <div className="bg-[#243447] text-white p-6 rounded-lg shadow-lg w-[601px] h-[228px]">
        {/* Header (Profil & Twitter Logo) */}
        <div className="flex items-center justify-between">
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

          {/* Logo Twitter */}
          <Image
            src="/twitter.svg" // Ganti dengan path logo Twitter yang kamu punya
            alt="Twitter Logo"
            width={30}
            height={30}
            className="w-5 h-5"
          />
        </div>

        {/* Konten Tweet */}
        <p className="mt-4 text-gray-300">
          Why do they call it &apos;debugging&apos; when it feels more like
          &apos;wildly guessing and hoping for the best&apos;?
          <span className="text-blue-400">
            {" "}
            #programming #coding #debugging
          </span>
        </p>
        {/* Footer */}
        <div className="mt-4 flex items-center text-gray-400 text-sm space-x-4">
          <div className="flex items-center space-x-2">
            <span>❤️</span>
            <span>650</span>
          </div>
          <span className="ml-auto">3:40 PM - Feb 24, 2022</span>
        </div>
      </div>
    </div>
  );
}
