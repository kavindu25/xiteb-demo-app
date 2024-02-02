import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="relative z-20 grid grid-cols-1">
      <div className="bg-white py-5 hidden md:block">
        <div className="flex flex-row justify-between container mx-auto px-16">
          <div className="px-48">
            <img src={logo} style={{ height: "45px", width: "155px" }} />
          </div>
          <div className="flex flex-row text-sm px-48 ">
            <div className="px-2 text-gray-600 hover:text-gray-900 self-center">
              <a href="#">Sign In</a>
            </div>
            <div className="px-2 text-gray-600 hover:text-gray-900 self-center">
              <a href="#" className="">
                Join Now
              </a>
            </div>
            <div className="px-2 text-gray-600 hover:text-gray-900 self-center">
              <a href="#">Find Reservations</a>
            </div>
            <div className="px-2 text-gray-600 hover:text-gray-900 self-center">
              <a href="#">English</a>
            </div>
            <div className="px-2 text-gray-600 hover:text-gray-900 self-center">
              <a href="#">LKR</a>
            </div>
            <div className="px-2 text-gray-600 hover:text-gray-900 self-center">
              <a href="#">Scan QR</a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-700 py-1  text-sm hidden md:block">
        <div className="container mx-auto flex flex-row justify-center">
          <div className="relative group ">
            <button className="flex flex-row items-center w-full px-4 py-4 mt-2 text-white font-bold text-center uppercase bg-transparent  md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none hover:text-slate-900 hover:bg-white ">
              <span>About</span>
            </button>
            <div className="absolute left-4 right-4 w-96 px-8 py-4 z-10 hidden bg-white rounded-b-xl group-hover:block">
              <div className="flex flex-col gap-4 text-left px-2 pt-2 pb-4 ">
                <a className="text-lg font-bold">Abot the hotel</a>
                <a href="#" className="text-md hover:font-bold">
                  Overview
                </a>
                <a href="#" className="text-md hover:font-bold">
                  Explore Colombo
                </a>
                <a href="#" className="text-md hover:font-bold">
                  Services & Facilities
                </a>
                <a href="#" className="text-md hover:font-bold">
                  Map & Directions
                </a>
              </div>
            </div>
          </div>

          <div className="relative group">
            <button className="flex flex-row items-center w-full px-4 py-4 mt-2 text-white font-bold text-center uppercase bg-transparent  md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none hover:text-slate-900 hover:bg-white">
              <span>rooms & Suits</span>
            </button>
            <div className="absolute left-4 right-4 w-96 px-8 py-4 z-10 hidden bg-white rounded-b-xl group-hover:block">
              <div className="grid grid-cols-2">
                <div className="flex flex-col gap-4 text-left px-2 pt-2 pb-4 ">
                  <p className="text-lg font-bold">Rooms</p>
                  <p className="text-md hover:font-bold">Overview</p>
                  <p className="text-md hover:font-bold">Explore Colombo</p>
                  <p className="text-md hover:font-bold">
                    Services & Facilities
                  </p>
                  <p className="text-md hover:font-bold">Map & Directions</p>
                </div>
                <div className="flex flex-col gap-4 text-left px-2 pt-2 pb-4 ">
                  <p className="text-lg font-bold">Suites</p>
                  <p className="text-md hover:font-bold">Overview</p>
                  <p className="text-md hover:font-bold">Explore Colombo</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="flex flex-row items-center w-full px-4 py-4 mt-2 text-white font-bold text-center uppercase bg-transparent  md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none hover:text-slate-900 hover:bg-white">
              <span>Dining</span>
            </button>
            <div className="absolute left-4 right-4 w-96 px-8 py-4 z-10 hidden bg-white rounded-b-xl group-hover:block">
              <div className="grid grid-cols-2">
                <div className="flex flex-col gap-4 text-left px-2 pt-2 pb-4 ">
                  <p className="text-lg font-bold">Restaurants</p>
                  <p className="text-md hover:font-bold">Overview</p>
                  <p className="text-md hover:font-bold">Explore Colombo</p>
                  <p className="text-md hover:font-bold">
                    Services & Facilities
                  </p>
                  <p className="text-md hover:font-bold">Map & Directions</p>
                </div>
                <div className="flex flex-col gap-4 text-left px-2 pt-2 pb-4 ">
                  <p className="text-lg font-bold">Bars & Lounges</p>
                  <p className="text-md hover:font-bold">Overview</p>
                  <p className="text-md hover:font-bold">Explore Colombo</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="flex flex-row items-center w-full px-4 py-4 mt-2 text-white font-bold text-center uppercase bg-transparent  md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none hover:text-slate-900 hover:bg-white">
              <span>Experience</span>
            </button>
            <div className="absolute left-4 right-4 w-96 px-8 py-4 z-10 hidden bg-white rounded-b-xl group-hover:block">
              <div className="grid grid-cols-2">
                <div className="flex flex-col gap-4 text-left px-2 pt-2 pb-4 ">
                  <p className="text-lg font-bold">For Kids</p>
                  <p className="text-md hover:font-bold">Overview</p>
                  <p className="text-md hover:font-bold">Explore Colombo</p>
                  <p className="text-md hover:font-bold">
                    Services & Facilities
                  </p>
                  <p className="text-md hover:font-bold">Map & Directions</p>
                </div>
                <div className="flex flex-col gap-4 text-left px-2 pt-2 pb-4 ">
                  <p className="text-lg font-bold">Health & Leisure</p>
                  <p className="text-md hover:font-bold">Overview</p>
                  <p className="text-md hover:font-bold">Explore Colombo</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="flex flex-row items-center w-full px-4 py-4 mt-2 text-white font-bold text-center uppercase bg-transparent  md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none hover:text-slate-900 hover:bg-white">
              <span>Events</span>
            </button>
            <div className="absolute left-4 right-4 w-96 px-8 py-4 z-10 hidden bg-white rounded-b-xl group-hover:block">
              <div className="grid grid-cols-2">
                <div className="flex flex-col gap-4 text-left px-2 pt-2 pb-4 ">
                  <p className="text-lg font-bold">Meetings & Events</p>
                  <p className="text-md hover:font-bold">Overview</p>
                  <p className="text-md hover:font-bold">Explore Colombo</p>
                  <p className="text-md hover:font-bold">
                    Services & Facilities
                  </p>
                  <p className="text-md hover:font-bold">Map & Directions</p>
                </div>
                <div className="flex flex-col gap-4 text-left px-2 pt-2 pb-4 ">
                  <p className="text-lg font-bold">Wedding and Celebrations</p>
                  <p className="text-md hover:font-bold">Overview</p>
                  <p className="text-md hover:font-bold">Explore Colombo</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="flex flex-row items-center w-full px-4 py-4 mt-2 text-white font-bold text-center uppercase bg-transparent  md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none hover:text-slate-900 hover:bg-white">
              <span>Gallery</span>
            </button>
          </div>
          <div className="relative group">
            <button className="flex flex-row items-center w-full px-4 py-4 mt-2 text-white font-bold text-center uppercase bg-transparent  md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none hover:text-slate-900 hover:bg-white">
              <span>Offers</span>
            </button>
          </div>
          <div className="relative group">
            <button className="flex flex-row items-center w-full px-4 py-4 mt-2 text-white font-bold text-center uppercase bg-transparent  md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none hover:text-slate-900 hover:bg-white">
              <span>More</span>
            </button>
            <div className="absolute left-4 right-4 w-96 px-8 py-4 z-10 hidden bg-white rounded-b-xl group-hover:block">
              <div className="grid grid-cols-2">
                <div className="flex flex-col gap-4 text-left px-2 pt-2 pb-4 ">
                  <p className="text-lg font-bold">Restaurants</p>
                  <p className="text-md hover:font-bold">Overview</p>
                  <p className="text-md hover:font-bold">Explore Colombo</p>
                  <p className="text-md hover:font-bold">
                    Services & Facilities
                  </p>
                  <p className="text-md hover:font-bold">Map & Directions</p>
                </div>
                <div className="flex flex-col gap-4 text-left px-2 pt-2 pb-4 ">
                  <p className="text-lg font-bold">Bars & Lounges</p>
                  <p className="text-md hover:font-bold">Overview</p>
                  <p className="text-md hover:font-bold">Explore Colombo</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="flex flex-row items-center w-full px-4 py-4 mt-2 text-white font-bold text-center uppercase bg-transparent  md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none hover:text-slate-900 hover:bg-white">
              <span>Find a Hotel</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
