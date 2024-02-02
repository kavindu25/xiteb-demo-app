import DestinationOne from "../../assets/grid4.jpg";
// import DestinationTwo from "../../assets/grid5.jpg";
// import DestinationThree from "../../assets/grid6.jpg";

const Destinations = () => {
  return (
    <div className="container mx-auto my-12">
      <div className="grid grid-cols-1 justify-items-center">
        <h3 className="text-4xl my-2 font-bold text-gray-600">
          Our Destinations
        </h3>
        <div className="mt-4">
          <select
            label="Select Destination"
            className="w-96 py-4 px-3 text-center"
          >
            <option>Habarana Village by Cinnamon</option>
            <option>Cinnamon Velifushi Maldives</option>
            <option>Cinnamon Hakuraa Huraa Maldives</option>
            <option>Cinnamon Dhonveli Maldives</option>
            <option>Ellaidhoo Maldives by Cinnamon</option>
          </select>
        </div>
        <div className="py-4 mt-8 relative z-10">
          <img src={DestinationOne} alt="hotel destination " className=" " />
          <div className="absolute px-8 py-4 w-96 h-80 my-6 top-12 -right-20 z-20 bg-slate-200 opacity-90 text-left shadow-xl hover:shadow-2xl    ">
            <p className="text-2xl italic text-blue-900  my-6">
              Habarana Village by Cinnamon
            </p>
            <p className="text-md ">
              Experience affordable rustic barefoot type elegance, which is
              designed to reflect the rural environs and simplicity of the local
              village life surrounded by rich biodiversity.
            </p>
            <button className="my-6  py-2 px-4 bg-blue-900 hover:bg-blue-800 text-white italic">Discover More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
