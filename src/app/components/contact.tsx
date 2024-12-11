const Contact = () => {
  return (
    <div id="Contact">
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-5xl text-4xl title-font mb-4 text-purple-800 sm:font-bold">
              Contact Me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed  sm:text-2xl text-lg text-gray-500">
              Feel free to Contact!
            </p>
          </div>

          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <form
                className="flex flex-wrap -m-2"
                action="https://formspree.io/f/xldeeyep"
                method="POST"
              >
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 sm:text-xl text-sm text-gray-500"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 sm:focus:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 sm:text-xl text-sm text-gray-500"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500  sm:focus:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="subject"
                      className="leading-7 sm:text-xl text-sm text-gray-500"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500  sm:focus:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-500 sm:text-xl "
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500  sm:focus:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto font-bold text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-800 rounded text-lg">
                    Submit
                  </button>
                </div>
              </form>

              <div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
