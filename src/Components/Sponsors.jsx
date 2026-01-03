import Marquee from "react-fast-marquee";

const Sponsors = () => {
  return (
    <section className="my-16 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">
        Our Trusted Sponsors
      </h2>

      <Marquee className="py-5" pauseOnClick={true}>
        {/*  sponsor-1 */}
        <div className="flex flex-col items-center justify-center text-center bg-white dark:bg-gray-600  shadow-sm rounded-xl mx-6 p-6 w-72 hover:shadow-md transition-all duration-300">
          <figure className="w-60 h-60">
            <img
              src="https://paribhramon.com/wp-content/uploads/2025/02/DHL-Courier-Service-Mobile-Number-and-All-Branch-Address-in-Bangladesh.jpg"
              alt="DHL Bangladesh"
              className="w-full h-full object-contain"
            />
          </figure>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            DHL Bangladesh
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
            Global logistics and shipping partner trusted worldwide.
          </p>
        </div>

        {/*  sponsor-2 */}
        <div className="flex flex-col items-center justify-center text-center bg-white dark:bg-gray-600 shadow-sm rounded-xl mx-6 p-6 w-72 hover:shadow-md transition-all duration-300">
          <figure className="w-60 h-60">
            <img
              src="https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2018/miscellaneous/alibaba-logo-09052018084008.jpg&w=360&height=360"
              alt="Ali Baba"
              className="w-full h-full object-contain"
            />
          </figure>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Alibaba
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
            Global platform connecting buyers, suppliers, and exporters.
          </p>
        </div>

        {/*  sponsor-3 */}
        <div className="flex flex-col items-center justify-center text-center bg-white dark:bg-gray-600 shadow-sm rounded-xl mx-6 p-6 w-72 hover:shadow-md transition-all duration-300">
          <figure className="w-60 h-60">
            <img
              src="https://www.ttnews.com/sites/default/files/styles/social_media_1200x630/public/2023-10/Flexport-1200.jpg"
              alt="FlexPort"
              className="w-full h-full object-contain"
            />
          </figure>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Flexport
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
            Empowering businesses to ship anywhere and grow faster.
          </p>
        </div>

        {/* sponsor-4 */}
        <div className="flex flex-col items-center justify-center text-center bg-white dark:bg-gray-600 shadow-sm rounded-xl mx-6 p-6 w-72 hover:shadow-md transition-all duration-300">
          <figure className="w-60 h-60">
            <img
              src="https://mma.prnewswire.com/media/2319256/4496202/Freightos_Logo.jpg?p=facebook"
              alt="FlexPort"
              className="w-full h-full object-contain"
            />
          </figure>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Freightos
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
            Freightos simplifies global trade with its online marketplace for
            international shipping.
          </p>
        </div>
      </Marquee>
    </section>
  );
};

export default Sponsors;

//   <figure >
//     <img
//       src="https://www.ttnews.com/sites/default/files/styles/social_media_1200x630/public/2023-10/Flexport-1200.jpg"
//       alt="Shoes"
//       className="w-full h-full object-contain"
//     />
//   </figure>
