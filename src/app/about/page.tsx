import Link from "next/link";

export default function About() {
  return (
    <div
      style={{ backgroundColor: "rgb(48, 61, 116)" }}
      className="min-h-screen p-10"
    >
      <Link href="/" className="btn btn-square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Link>

      <div className="text-center text-6xl">
        <h1 className="text-white font-extrabold">About 💻</h1>
      </div>

      <div className="max-w-3xl mx-auto my-10 mt-40">
        <div className="w-full h-11 relative rounded-t-lg bg-gray-50 flex overflow-hidden justify-start items-center space-x-1.5 px-2">
          <div className="absolute w-full h-full inset-0 bg-gray-300 opacity-90"></div>
          <span className="relative w-3 h-3 border-2 rounded-full border-red-400"></span>
          <span className="relative w-3 h-3 border-2 rounded-full border-yellow-400"></span>
          <span className="relative w-3 h-3 border-2 rounded-full border-green-400"></span>
        </div>
        <div className="relative bg-gray-50 w-full border-blue-900">
          <div className="absolute w-full h-full inset-0 bg-black opacity-0"></div>
          <div className="text-left">
            <div className="text-left p-3 text-green-700 font-extrabold">
              /*
            </div>
            <p className="p-6 text-green-600 font-bold">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, eaque obcaecati. Placeat ipsa, aliquid perferendis vero mollitia ducimus totam, laboriosam dolore, iusto veniam numquam in sapiente est ex nam suscipit.
            </p>
            <p className="p-6 text-green-600 font-bold">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati sequi delectus provident ipsam itaque vero, voluptas expedita modi doloribus numquam tempore placeat consectetur similique iure distinctio aliquam quod adipisci harum.
            </p>
              <p className="p-6 text-green-600 font-bold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati sequi delectus provident ipsam itaque vero, voluptas expedita modi doloribus numquam tempore placeat consectetur similique iure distinctio aliquam quod adipisci harum.
              </p>
            <div className="text-left p-3 text-green-700 font-extrabold">
              */
            </div>
          </div>
          <div className="mt-3 mb-10 mx-1">
            <p className="text-green-700">
              Watercubz@DESKTOP-HP-QW-1334:/
              <span className="text-blue-800">mount/users/routes$</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
