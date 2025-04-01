// function AgahiTitleLarge() {
//   return (
//     <div className="flex h-screen">
//       <svg
//         className=" h-screen mr-14"
//         width="200"
//         viewBox="0 0 200 900"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M50 0 Q 80 50, 50 100 T 50 200 T 50 300 T 50 400 T 50 500 T 50 600 T 50 700 T 50 800 T 50 900"
//           stroke="black"
//           fill="#e35f5f"
//           strokeWidth="2"
//         />
//       </svg>
//       <h1 className="text-9xl absolute -rotate-90 top-1/2 -translate-y-1/2">
//         AGAHI
//       </h1>
//       <svg
//         className="h-screen absolute -right-48"
//         width="200"
//         viewBox="0 0 200 900"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M50 0 Q 80 50, 50 100 T 50 200 T 50 300 T 50 400 T 50 500 T 50 600 T 50 700 T 50 800 T 50 900"
//           stroke="black"
//           fill="#e35f5f"
//           strokeWidth="2"
//         />
//       </svg>
//     </div>
//   );
// }

import Image from "next/image";

function AgahiTitleLarge() {
  return (
    <div>
      <Image src={"/agahiwave.png"} alt="agahi wave" width={400} height={850} />
    </div>
  );
}
export default AgahiTitleLarge;
