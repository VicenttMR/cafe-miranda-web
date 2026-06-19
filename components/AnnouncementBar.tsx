const WORDS = [
  "ABIERTO TODOS LOS DÍAS", "·",
  "08:00 – 23:30", "·",
  "ES PUJOLS, FORMENTERA", "·",
  "RESERVAS POR WHATSAPP", "·",
];

export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-white border-b border-gray-100 h-8 overflow-hidden flex items-center">
      <div
        className="flex gap-8 whitespace-nowrap w-max"
        style={{ animation: "ticker-announcement 35s linear infinite" }}
      >
        {[...WORDS, ...WORDS].map((word, i) => (
          <span
            key={i}
            className="font-grotesk text-[11px] font-medium tracking-[0.2em] uppercase text-miranda-dark"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
