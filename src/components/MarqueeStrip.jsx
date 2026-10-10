export default function MarqueeStrip() {
  const items = [
    "FULL-STACK ENGINEERING",
    "SYSTEM & SERVER ADMINISTRATION",
    "LINUX & WINDOWS SERVER",
    "VIRTUALIZATION & VMWARE",
    "DEEPFACE BIOMETRIC AI",
    "NETWORK CONFIGURATION",
    "DATABASE MANAGEMENT",
    "UI/UX DESIGN",
    "API INTEGRATION",
    "PENS INFORMATIKA",
  ];

  return (
    <div className="w-full bg-black text-white py-2.5 overflow-hidden border-y border-neutral-900 select-none">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 text-xs font-mono tracking-widest uppercase">
            <span>{text}</span>
            <span className="text-neutral-500">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
