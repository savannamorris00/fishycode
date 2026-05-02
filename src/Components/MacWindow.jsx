import React, { useState } from "react";
import Wave from "react-wavify";
import {
  UserIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  ShieldCheckIcon,
  BugAntIcon,
  WifiIcon,
  MagnifyingGlassIcon,
  CommandLineIcon,
} from "@heroicons/react/24/solid";
import DraggableWindow from "./DraggableWindow.jsx";
const BASE = import.meta.env.BASE_URL;

export default function MacWindow() {
  const [windows, setWindows] = useState({
    about: { visible: false, zIndex: 2, defaultPosition: null },
    work: { visible: false, zIndex: 2, defaultPosition: null },
    contact: { visible: false, zIndex: 2, defaultPosition: null },
    "art-PaperCranes": { visible: false, zIndex: 2, defaultPosition: null },
    "art-Grades": { visible: false, zIndex: 2, defaultPosition: null },
    "art-Trucks": { visible: false, zIndex: 2, defaultPosition: null },
  });

  const [topZIndex, setTopZIndex] = useState(3);
  const [soundOn, setSoundOn] = useState(true);

  const [selectedArt, setSelectedArt] = useState(null);

  const playClick = () => {
    if (!soundOn) return;
    const audio = new Audio(`${BASE}sounds/click1.mp3`);
    audio.play();
  };

  const openWindow = (name) => {
    playClick();
    const windowWidth = 700;
    const windowHeight = 450;
    const x = window.innerWidth / 2 - windowWidth / 2;
    const y = window.innerHeight / 2 - windowHeight / 2;

    setWindows((prev) => ({
      ...prev,
      [name]: { visible: true, zIndex: topZIndex, defaultPosition: { x, y } },
    }));
    setTopZIndex((prev) => prev + 1);
  };

  const focusWindow = (name) => {
    setWindows((prev) => ({
      ...prev,
      [name]: { ...prev[name], zIndex: topZIndex },
    }));
    setTopZIndex((prev) => prev + 1);
  };

  const closeWindow = (name) => {
    setWindows((prev) => ({
      ...prev,
      [name]: { ...prev[name], visible: false },
    }));
  };

  return (
    <div className="relative min-h-screen bg-linear-to-b from-sky-300 via-blue-100 to-white overflow-hidden">
      {/* Wave Background */}
      <Wave
        paused={false}
        style={{
          position: "absolute",
          top: 400,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        options={{ height: 20, amplitude: 20, speed: 0.15, points: 3 }}
        fill="url(#gradient)"
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="5%" stopColor="#57c5ff" />
            <stop offset="50%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
      </Wave>

      {/* Sound Toggle */}
      <button
        onClick={() => setSoundOn(!soundOn)}
        className="fixed top-4 right-4 z-50 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow hover:brightness-110 transition"
      >
        {soundOn ? (
          <SpeakerWaveIcon className="w-6 h-6 text-gray-700" />
        ) : (
          <SpeakerXMarkIcon className="w-6 h-6 text-gray-700" />
        )}
      </button>

      {/* Main Mac Window */}
      <div className="relative z-1 min-h-screen flex items-center justify-center p-4">
        <div className="w-[700px] h-[460px] bg-white rounded-xl shadow-2xl border border-gray-300 overflow-hidden flex flex-col">
          {/* Top Bar */}
          <div className="h-10 bg-[#787276] flex items-center px-4 border-b border-gray-800">
            <span className="text-white text-sm font-semibold">
              Home
            </span>
          </div>

          {/* Content Buttons */}
          <div className="flex-1 p-10 flex flex-col items-center justify-center">
            <h1 className="text-6xl font-mono font-thin">Hi, I'm Savanna!!</h1>
            <p className="mt-5 text-lg text-gray-600 text-center font-mono font-thin">
              IST and Cybersecurity student, Artist
            </p>

            <div className="mt-12 grid grid-cols-3 gap-12">
              {/* ABOUT */}
              <button
                onClick={() => openWindow("about")}
                className="flex flex-col items-center gap-2 group transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-2xl shadow-lg flex items-center justify-center
                group-hover:bg-gray-200 transition">

                  <UserIcon className="w-10 h-10 text-gray-800 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-base font-semibold text-gray-700 group-hover:text-black transition">
                  About
                </span>
              </button>

              {/* WORK */}
              <button
                onClick={() => openWindow("work")}
                className="flex flex-col items-center gap-2 group transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-2xl shadow-lg flex items-center justify-center
                group-hover:bg-gray-200 transition">

                  <BriefcaseIcon className="w-7 h-7 text-gray-800" />
                </div>
                <span className="text-base font-semibold text-gray-700 group-hover:text-black transition">
                  Work
                </span>
              </button>

              {/* CONTACT */}
              <button
                onClick={() => openWindow("contact")}
                className="flex flex-col items-center gap-2 group transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-2xl shadow-lg flex items-center justify-center
                group-hover:bg-gray-200 transition">

                  <EnvelopeIcon className="w-7 h-7 text-gray-800" />
                </div>
                <span className="text-base font-semibold text-gray-700 group-hover:text-black transition">
                  Contact
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Window */}
      {windows.about.visible && (
        <DraggableWindow
          title="About"
          onClose={() => closeWindow("about")}
          zIndex={windows.about.zIndex}
          defaultPosition={windows.about.defaultPosition}
          onMouseDown={() => focusWindow("about")}
          className="h-[450px] w-[700px]"
        >
          <div className="flex flex-col h-full w-full">
            {/* Top horizontal profile */}
            <div className="flex items-center gap-4 p-4 bg-gray-100 border-b border-gray-300">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
                <img
                  src={`${BASE}profile.jpeg`}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold">Savanna Morris</h1>
                <p className="text-gray-600">University Student at UWM</p>
              </div>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6">
              <div>
                <h2 className="font-bold text-lg mb-2">EDUCATION</h2>
                <p className="font-bold">Bachelor of Information Science and Technology</p>
                <p className="text-gray-600">
                  University of Wisconsin-Milwaukee, Milwaukee, WI — Sep 2022 - May 2026
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li><b>Certificate in Cybersecurity</b> – May 2026</li>
                  <li><b>Dean's List</b> – 2026</li>
                </ul>
              </div>

              <div>
                <h2 className="font-bold text-lg mb-2">Current Employment</h2>
                <div className="mb-4">
                  <p className="font-semibold">Data Center Technician</p>
                  <p className="text-gray-600">TEKsystems Contractor, Menomonee Falls, WI — June 2025 – Present</p>
                  <ul className="list-disc pl-6 mt-1 text-gray-700">
                    <li>Monitored and maintained data center systems to ensure optimal performance and uptime</li>
                    <li>Accepted tasks and documented status using ticketing system</li>
                    <li>Performed routine checks on servers to maintain operational standards</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold">Barista</p>
                  <p className="text-gray-600">Coffeeville, Jackson, WI — June 2024 – October 2025</p>
                  <ul className="list-disc pl-6 mt-1 text-gray-700">
                    <li>Prepared specialty drinks, ensuring top quality and customer satisfaction</li>
                    <li>Efficiently multitasked between drink preparation, food service, and customer interactions in a fast-paced environment</li>
                    <li>Worked with a team to maintain clean, efficient cafe operations</li>
                    <li>Recognized for fast kitchen service, ensuring timely food delivery</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-bold text-lg mb-2">Languages</h2>
                <p>
                  I have native fluency in English, and can speak conversational Spanish.
                </p>
              </div>
            </div>
          </div>
        </DraggableWindow>
      )}



      {/* Work Window */}
      {windows.work.visible && (
        <DraggableWindow
          title="Work"
          onClose={() => closeWindow("work")}
          zIndex={windows.work.zIndex}
          defaultPosition={windows.work.defaultPosition}
          onMouseDown={() => focusWindow("work")}
          className="h-[450px] w-[700px]"
        >
          <div className="flex flex-col gap-6 h-full overflow-y-auto p-4">
            {/* CYBERSECURITY SECTION */}
            <div className="flex-1 flex flex-col items-center gap-2 mt-8">
              <h2 className="font-bold mb-2">Cybersecurity</h2>

              <div className="flex gap-2 flex-wrap justify-center">
                <button className="px-4 py-2 bg-gray-200 rounded shadow-inner font-semibold text-gray-700
      transition-all duration-150 hover:translate-y-1 hover:shadow-sm active:translate-y-1 active:shadow-sm">
                  <ShieldCheckIcon className="w-5 h-5 inline mr-2" />
                  Ethical Hacking
                </button>

                <button className="px-4 py-2 bg-gray-200 rounded shadow-inner font-semibold text-gray-700
      transition-all duration-150 hover:translate-y-1 hover:shadow-sm active:translate-y-1 active:shadow-sm">
                  <BugAntIcon className="w-5 h-5 inline mr-2" />
                  Vulnerability Assessment
                </button>

                <button className="px-4 py-2 bg-gray-200 rounded shadow-inner font-semibold text-gray-700
      transition-all duration-150 hover:translate-y-1 hover:shadow-sm active:translate-y-1 active:shadow-sm">
                  <WifiIcon className="w-5 h-5 inline mr-2" />
                  Network Security
                </button>

                <button className="px-4 py-2 bg-gray-200 rounded shadow-inner font-semibold text-gray-700
      transition-all duration-150 hover:translate-y-1 hover:shadow-sm active:translate-y-1 active:shadow-sm">
                  <MagnifyingGlassIcon className="w-5 h-5 inline mr-2" />
                  Port Scanning
                </button>

                <button className="px-4 py-2 bg-gray-200 rounded shadow-inner font-semibold text-gray-700
      transition-all duration-150 hover:translate-y-1 hover:shadow-sm active:translate-y-1 active:shadow-sm">
                  <CommandLineIcon className="w-5 h-5 inline mr-2" />
                  Kali Linux Labs
                </button>
              </div>
            </div>

            {/* Tools / Development */}
            <div className="flex gap-4 w-full justify-center">
              <div className="flex-1 flex flex-col items-center gap-2">
                <h2 className="font-bold mb-2">Tools</h2>
                <div className="flex gap-2 flex-wrap justify-center">
                  {["Eclipse IDE", "Kali Linux", "Metasploit", "Git / GitHub", "VS Code", "Microsoft Office Suite", "Windows", "IOS", "Toast", "Clipstudio", "Figma", "React"].map(tool => (
                    <button key={tool} className="px-4 py-2 bg-gray-200 rounded shadow-inner font-semibold text-gray-700
              transition-all duration-150 hover:translate-y-1 hover:shadow-sm active:translate-y-1 active:shadow-sm">
                      {tool}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex-1 flex flex-col items-center gap-2">
                <h2 className="font-bold mb-2">Development</h2>
                <div className="flex gap-2 flex-wrap justify-center">
                  {["Java", "C", "C#", "Python", "HTML/CSS", "PHP", "Node.js", "JavaScript"].map(dev => (
                    <button key={dev} className="px-4 py-2 bg-gray-200 rounded shadow-inner font-semibold text-gray-700
              transition-all duration-150 hover:translate-y-1 hover:shadow-sm active:translate-y-1 active:shadow-sm">
                      {dev}
                    </button>
                  ))}
                </div>
              </div>
            </div>


            {/* ARTWORK GALLERY - CLICK TO OPEN POPUP */}
            <h2 className="font-bold text-center">Artwork</h2>
            <div className="grid grid-cols-3 gap-4 justify-center">
              {[{ name: "PaperCranes", img: "paper-cranes.jpeg" },
              { name: "Persona", img: "persona.jpeg" },
              { name: "Vivi -Dnd", img: "vivi.jpeg" },
              { name: "Grades", img: "grades.jpeg" },
              { name: "Trucks", img: "trucks.jpeg" }]

                .map(item => (
                  <div
                    key={item.name}
                    className="cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => setSelectedArt(item)}
                  >
                    <img
                      src={`${BASE}art/${item.img}`}
                      alt={item.name}
                      className="w-full h-32 object-cover rounded-lg shadow"
                    />
                    <p className="text-center mt-1 font-semibold">{item.name}</p>
                  </div>
                ))}
            </div>

            {/* DEVELOPMENT PROJECTS SECTION */}
            <h2 className="font-bold mt-4 mb-2">Development Projects</h2>
            <div className="flex gap-4 items-center bg-gray-100 p-2 rounded shadow">
              <div className="w-32 h-32 shrink-0 overflow-hidden rounded">
                <img
                  src={`${BASE}projects/secret-santa.jpeg`}
                  alt="Secret Santa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold">Secret Santa</h3>
                <p className="text-gray-700 mb-3">
                  A web app that simplifies organizing Secret Santa gift exchanges.
                </p>
                <a
                  href="https://connorgreg.pythonanywhere.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
                >
                  Visit Project 🔗
                </a>
              </div>
            </div>
            <div>
              <h2 className="font-bold">Other Projects</h2>
              <h3>This Website!</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Personal Portfolio Website (React, Tailwind CSS)</li>
              </ul>
            </div>
          </div>
        </DraggableWindow>
      )}


      {/* Contact Window */}
      {windows.contact.visible && (
        <DraggableWindow
          title="Contact"
          onClose={() => closeWindow("contact")}
          zIndex={windows.contact.zIndex}
          defaultPosition={windows.contact.defaultPosition}
          onMouseDown={() => focusWindow("contact")}
        >
          <div className="p-4">Contact Window Content</div>
        </DraggableWindow>
      )}
      {/* FULLSCREEN ART VIEWER */}
      {selectedArt && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center"
          style={{ zIndex: 9999 }}
          onClick={() => setSelectedArt(null)}
        >
          <img
            src={`${BASE}art/${selectedArt.img}`}
            alt={selectedArt.name}
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute top-6 right-6 text-white text-4xl font-bold"
            onClick={() => setSelectedArt(null)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}