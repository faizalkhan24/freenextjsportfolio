import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // For showing status messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("An error occurred.");
    }
  };

  return (
    <div className="min-h-screen bg-sixty text-white p-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="flex-1 bg-gray-900 p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="mb-6">
            If you have any questions or inquiries, feel free to reach out using
            the form below. We&apos;ll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-200"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 rounded-md bg-sixty text-gray-200 border border-gray-600 focus:ring-green-500 focus:border-green-500"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-200"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 rounded-md bg-sixty text-gray-200 border border-gray-600 focus:ring-green-500 focus:border-green-500"
                placeholder="johndoe@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-200"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="mt-1 block w-full px-4 py-2 rounded-md bg-sixty text-gray-200 border border-gray-600 focus:ring-green-500 focus:border-green-500"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-ten text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
            {status && <p className="text-center text-green-500">{status}</p>}
          </form>
        </div>
        <div className="flex-1 bg-gray-900 rounded-lg shadow-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.374589983363!2d-122.41941548468111!3d37.77492927975828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b5e5a5abf%3A0x8a25a34eac9c68e3!2sSan%20Francisco%2C%20CA%2094111!5e0!3m2!1sen!2sus!4v1638828231202!5m2!1sen!2sus"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
