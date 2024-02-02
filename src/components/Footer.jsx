const Footer = () => {
  return (
    <footer className="bg-slate-200 py-8 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <div className="text-purple-800 text-2xl my-4 italic">About</div>
          <a href="#" className="text-slate-900 md hover:font-bold">About Hotel</a>
          <a href="#" className="text-slate-900 md hover:font-bold">Media</a>
          <a href="#" className="text-slate-900 md hover:font-bold">Gallery</a>
          <a href="#" className="text-slate-900 md hover:font-bold">CSR & Sustainability</a>
          <a href="#" className="text-slate-900 md hover:font-bold">John Keels Group</a>
          <a href="#" className="text-slate-900 md hover:font-bold">Terms & Conditions</a>
          <a href="#" className="text-slate-900 md hover:font-bold">Privacy Statement</a>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-purple-800 text-2xl my-4 italic">
            Get in Touch
          </div>
          <a href="#" className="text-slate-900 md hover:font-bold">Know Sri Lanka</a>
          <a href="#" className="text-slate-900 md hover:font-bold">Know Maldives</a>
          <a href="#" className="text-slate-900 md hover:font-bold">Contact Us</a>
          <a href="#" className="text-slate-900 md hover:font-bold">FAQs</a>

          <div className="text-purple-800 text-2xl my-4 italic">Sections</div>
          <a href="#" className="text-slate-900 md hover:font-bold">Careers</a>
          <a href="#" className="text-slate-900 md hover:font-bold">Blog</a>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-purple-800 text-2xl my-4 italic">Follow Us</div>
          <div className="flex flex-row"></div>

          <div className="text-purple-800 text-2xl my-4 italic">
            Get In touch
          </div>
          <a href="#" className="text-slate-900 md hover:font-bold">info@cinnamonhotels.com</a>
          <a href="#" className="text-slate-900 md hover:font-bold">Hotel Contact Information</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
