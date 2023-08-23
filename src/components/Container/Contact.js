import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="section">
      <div className="text-center max-w-[600px] mx-auto">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Subscribe Newsletter
        </div>
        <p className="text-sm text-gray leading-7">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae animi
          explicabo illum, nulla incidunt eveniet repellat beatae sunt vero
          molestias.
        </p>
        <motion.form
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-5"
        >
          <input
            type="text"
            placeholder="Enter your email address"
            className="sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60"
          />
          <button className="sm:p-3 p-2 bg-Teal text-white text-sm shadow-md font-bold">
            Subscribe
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
