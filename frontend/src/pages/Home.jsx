import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const responses = {
    about: "Fusion F5ve began as a small team of passionate developers who bridge the gap between innovative technology and practical solutions. We specialize in scalable, user-focused software solutions.",
    
    mission: "Our mission is to empower businesses and startups by transforming their ideas into impactful digital solutions. Our values include collaboration, excellence, and continuous learning.",
    
    team: "Meet our team:\n- Malvin T Machingura - Lead Developer\n- Junior N Cheiro - UI/UX Designer\n- Venon T Nyadombo - Backend Engineer\n- Nigel M Kutadzaushe - Project Manager.",
    
    ready: "Ready to work with us? Let's discuss your project!",
    
    services: "We offer comprehensive digital solutions:\n\n1. **Web Development**: Custom web applications built with modern technologies like React, Node.js, and cloud platforms.\n2. **Responsive Design**: Ensuring your applications look great on all devices.\n3. **Full-Stack Development**: Complete solutions from front-end to back-end.\n4. **API Integration**: Connecting different services for seamless functionality.\n5. **Performance Optimization**: Enhancing application speed and efficiency.\n6. **Mobile Apps**: Native and cross-platform mobile applications for iOS and Android.\n7. **Cloud Solutions**: Scalable cloud infrastructure and DevOps solutions.\n8. **Consulting**: Technical consulting and project management.",
    
    story: "Founded with a vision to bridge the gap between innovative technology and practical solutions, Fusion F5ve began as a small team of passionate developers. Over the years, we've grown into a dynamic company that specializes in creating scalable, user-focused software solutions.",
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([...messages, { from: "user", text: input }]);

    const userMessage = input.toLowerCase();
    let botResponse = "I'm sorry, I didn't understand that.";

    if (userMessage.includes("about")) {
      botResponse = responses.about;
    } else if (userMessage.includes("mission")) {
      botResponse = responses.mission;
    } else if (userMessage.includes("team")) {
      botResponse = responses.team;
    } else if (userMessage.includes("ready")) {
      botResponse = responses.ready;
    } else if (userMessage.includes("services")) {
      botResponse = responses.services;
    } else if (userMessage.includes("story")) {
      botResponse = responses.story;
    }

    setTimeout(() => {
      setMessages(msgs => [
        ...msgs,
        { from: "bot", text: botResponse }
      ]);
    }, 600);
    
    setInput("");
  };

  return (
    <>
      <button
        className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition z-50"
        onClick={() => setOpen(o => !o)}
        aria-label="Open chat"
      >
        💬
      </button>
      {open && (
        <div className="fixed bottom-20 right-6 bg-gray-900 text-white rounded-lg shadow-xl w-80 max-w-full flex flex-col z-50">
          <div className="px-4 py-2 border-b border-gray-700 flex justify-between items-center">
            <span className="font-bold">Fusion F5ve ChatBot</span>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white">✕</button>
          </div>
          <div className="flex-1 px-4 py-2 overflow-y-auto" style={{ maxHeight: 300 }}>
            {messages.map((msg, i) => (
              <div key={i} className={`my-2 flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <span className={`px-3 py-2 rounded-lg ${msg.from === "user" ? "bg-blue-600" : "bg-gray-800"}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="px-4 py-2 border-t border-gray-700 flex">
            <input
              className="flex-1 bg-gray-800 text-white px-3 py-2 rounded-l-lg outline-none"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
            />
            <button
              className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="text-center max-w-4xl">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Fusion F5ve
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Crafting Tomorrow's Digital Solutions Today
        </motion.p>
        <motion.p
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          We are a passionate team of developers dedicated to building high-quality, scalable, 
          and user-focused software solutions that empower businesses and startups.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <button 
            className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105"
            onClick={() => console.log("Get Started clicked!")}
            aria-label="Get Started"
          >
            Get Started
          </button>
          <button 
            className="border border-gray-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all"
            onClick={() => console.log("View Our Work clicked!")}
            aria-label="View Our Work"
          >
            View Our Work
          </button>
        </motion.div>
      </div>
      <ChatBot />
    </div>
  );
}

export default Home;