import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Hero = () => {
  const notify = () =>
    toast.info(
      "Kechirasiz hech nima ishlamaydi, bu shunchaki test uchun edi:)",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
    );
  return (
    <div className="mt-10">
      <div className="flex gap-4 items-center" id="special">
        <hr className=" w-full" />
        <h1 className="w-full text-center font-semibold text-4xl">
          SPECIAL HOLIDAYS
        </h1>
        <hr className="w-full" />
      </div>
      <div className="mt-6 relative overflow-hidden">
        <img
          src="https://www.partytimemalta.com/cdn/shop/files/Banner_Image_Childrens_Parties_1220x407@2x.jpg?v=1704302321"
          className="w-full h-full transition-transform duration-300 ease-in-out transform scale-100 hover:scale-105 cursor-pointer"
          alt=""
          onClick={notify}
        />
      </div>
      <div className="mt-28">
        <div className="flex gap-4 items-center">
          <hr className=" w-full" />
          <h1
            className="w-full text-center font-semibold text-4xl"
            id="funevents"
          >
            FOR FUN EVENTS
          </h1>
          <hr className="w-full" />
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div key={index} className="relative overflow-hidden">
              <img
                src={item.img}
                className="w-full h-full transition-transform duration-300 ease-in-out transform scale-100 hover:scale-105 cursor-pointer"
                alt=""
                onClick={notify}
              />
              <div className="absolute bottom-0 left-0 w-full h-[20%] flex flex-col justify-center items-center bg-black bg-opacity-70">
                <h1 className="text-white font-semibold">{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-28">
        <div className="flex gap-4 items-center">
          <hr className=" w-full" />
          <h1 className="w-full text-center font-semibold text-4xl">
            TENT PARTIES
          </h1>
          <hr className="w-full" />
        </div>
        <div>
          <div className="mt-6 relative overflow-hidden max-h-[450px]">
            <img
              src="https://www.enchantedbelltents.co.uk/wp-content/uploads/2019/03/Enchanted-Bell-Tents-private-parties.jpg"
              className="w-full h-full transition-transform duration-300 ease-in-out transform scale-100 hover:scale-105 cursor-pointer"
              alt=""
              onClick={notify}
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4 items-center mt-24 mb-12">
        <hr className=" w-full" />
        <h1 className="w-full text-center font-semibold text-4xl" id="sell">
          MUSIC EQUIPMENT
        </h1>
        <hr className="w-full" />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data2.map((item, index) => (
          <div
            className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm"
            key={index}
          >
            <a
              href=""
              className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </a>
            <a href="" className="z-20 absolute h-full w-full top-0 left-0 ">
              &nbsp;
            </a>
            <div className="h-auto overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="bg-white py-4 px-3">
              <h3 className="text-xs mb-2 font-medium">
                Des cadeaux incroyables prêts à être utilisés dans votre
                prochain projet
              </h3>
              <div className="flex justify-between items-center">
                <p className="text-lg text-gray-400 ">99$</p>
                <div className="relative z-40 flex items-center gap-2">
                  <button className="bg-green-600 text-white px-4 py-1 rounded text-sm">
                    ORDER
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 items-center mt-28">
        <hr className=" w-full" />
        <h1 className="w-full text-center font-semibold text-4xl" id="pricing">
          PRICING
        </h1>
        <hr className="w-full" />
      </div>

      <div className="flex flex-col items-center justify-center text-gray-700">
        <div className="flex flex-wrap items-center justify-center w-full max-w-4xl mt-8">
          <div className="flex flex-col flex-grow mt-8 overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="flex flex-col items-center p-10 bg-gray-200">
              <span className="font-semibold text-2xl">Bronze</span>
              <div className="flex items-center">
                <span className="text-3xl">$</span>
                <span className="text-5xl font-bold">20</span>
                <span className="text-2xl text-gray-500">/mo</span>
              </div>
            </div>
            <div className="p-10">
              <ul>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">
                    Room decorations - balloons, banners
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">
                    Table decorations - flowers in the center, gifts
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">DJ service</span>
                </li>
              </ul>
            </div>
            <div className="flex px-10 pb-10 justfy-center">
              <button className="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 rounded-lg">
                Join now
              </button>
            </div>
          </div>

          <div className="z-10 flex flex-col flex-grow mt-8 overflow-hidden transform bg-white rounded-lg shadow-lg md:scale-110">
            <div className="flex flex-col items-center p-10 bg-gray-200">
              <span className="font-semibold text-2xl">Silver</span>
              <div className="flex items-center">
                <span className="text-3xl">$</span>
                <span className="text-6xl font-bold">50</span>
                <span className="text-2xl text-gray-500">/mo</span>
              </div>
            </div>
            <div className="p-10">
              <ul>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 italic">Design an invitation</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">Live band</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">Cold food and various juices</span>
                </li>
              </ul>
            </div>
            <div className="flex px-10 pb-10 justfy-center">
              <button className="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 rounded-lg">
                Join now
              </button>
            </div>
          </div>

          <div className="flex flex-col flex-grow overflow-hidden bg-white rounded-lg shadow-lg mt-19">
            <div className="flex flex-col items-center p-10 bg-gray-200">
              <span className="font-semibold text-2xl">Gold</span>
              <div className="flex items-center">
                <span className="text-3xl">$</span>
                <span className="text-5xl font-bold">99</span>
                <span className="text-2xl text-gray-500">/mo</span>
              </div>
            </div>
            <div className="p-10">
              <ul>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 italic">
                    Staff involved to ensure total excellence
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">
                    Finding accommodation for guests, booking transport
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">Live band and focus</span>
                </li>
              </ul>
            </div>
            <div className="flex px-10 pb-10 justfy-center">
              <button className="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 rounded-lg">
                Join now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <div className="flex gap-4 items-center">
          <hr className=" w-full" />
          <h1
            className="w-full text-center font-semibold text-4xl"
            id="delivery"
          >
            DELIVERY SERVICE
          </h1>
          <hr className="w-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              What kind of food do you want?
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Let us know how we can help you"
              required
            />
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 mt-6"
            >
              where to deliver?
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Text me your address"
              required
            />
            <button className="flex items-center justify-center mx-auto h-10 px-12 text-sm uppercase bg-gray-200 rounded-lg mt-4">
              Order
            </button>
          </div>
          <img src="/delivery.svg" alt="" />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Hero;

const data = [
  {
    img: "https://www.partytimemalta.com/cdn/shop/collections/ba-304_rainbow_balloon_arch-min_280x280@2x.jpg?v=1587637564",
    title: "ARCHES & BACKDROPS",
  },
  {
    img: "https://www.partytimemalta.com/cdn/shop/collections/19_FOIL3314a_027_L2_280x280@2x.jpg?v=1585850215",
    title: "FOIL NUMBERS",
  },
  {
    img: "https://www.partytimemalta.com/cdn/shop/collections/web-res-crazy-bunches--3-2_280x280@2x.jpg?v=1645039666",
    title: "READY-MADE BOUQUETS",
  },
  {
    img: "https://www.partytimemalta.com/cdn/shop/collections/19_BALL1154ar_097_L2_280x280@2x.jpg?v=1616854491",
    title: "SOLID COLOURED LATEX",
  },
  {
    img: "https://www.partytimemalta.com/cdn/shop/collections/kit-134_-_40_mosaic_balloon_kit_rainbow_280x280@2x.jpg?v=1630673658",
    title: "BALLOON STANDS",
  },
  {
    img: "https://www.partytimemalta.com/cdn/shop/collections/19_BALL2468ar_010_L2_280x280@2x.jpg?v=1659973269",
    title: "LARGE BALLOONS",
  },
];

const data2 = [
  {
    img: "https://shop.theartsmusicstore.com/cdn/shop/files/36439_ibanez_ga1_Ibanez-GA1-Acclaim-tilt_grande.jpg?v=1692125273",
  },
  {
    img: "https://shop.theartsmusicstore.com/cdn/shop/files/36439_ibanez_ga1_Ibanez-GA1-Acclaim-tilt_grande.jpg?v=1692125273",
  },
  {
    img: "https://shop.theartsmusicstore.com/cdn/shop/files/36439_ibanez_ga1_Ibanez-GA1-Acclaim-tilt_grande.jpg?v=1692125273",
  },
  {
    img: "https://shop.theartsmusicstore.com/cdn/shop/files/36439_ibanez_ga1_Ibanez-GA1-Acclaim-tilt_grande.jpg?v=1692125273",
  },
];
