import { Link } from 'react-router-dom';

export default function Booking() {
  return (
    <div className="bg-[#fafbfa] flex-1 flex flex-col pb-32">
      <section className="pt-32 pb-16 text-center container mx-auto px-4 bg-secondary border-b border-muted">
        <h1 className="text-7xl md:text-9xl font-cursive text-primary font-normal mb-8 lowercase tracking-tight">booking</h1>
        <p className="text-primary/70 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
          Schedule your free, zero-obligation consultation with our luxury design team. Let's make your dream minimal space a reality.
        </p>
      </section>
      
      <div className="flex-1 w-full max-w-6xl mx-auto px-4 mt-24 relative overflow-hidden flex flex-col items-center">
        <div className="w-full bg-white p-8 md:p-16 rounded-sm flex flex-col items-center justify-center min-h-[50vh] gap-10 border border-muted/50 text-center shadow-xl">
          <h2 className="text-6xl font-cursive text-primary font-normal lowercase">book via google calendar</h2>
          <p className="text-primary/70 max-w-2xl text-lg font-medium leading-relaxed">Click the button below to view our availability and instantly secure your consultation spot through our securely integrated Google Calendar.</p>
          <a 
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3IM5l1nBr1xU7w97trICxGVuoLCPfS3dCMk_wd7cmrJ2GeuM1Un2fZZIpJGboajH5H1KB5crGo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 px-12 py-6 bg-primary text-white font-bold uppercase tracking-widest text-sm hover:bg-accent hover:shadow-xl transition-all flex items-center justify-center gap-3 rounded-sm shadow-md"
          >
            Open Booking Calendar
          </a>
        </div>
      </div>
    </div>
  )
}
