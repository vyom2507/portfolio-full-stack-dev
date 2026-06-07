import { CodeXml, Mail, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <section className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-slate-100">
          Vyom Limbachiya
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
         Full Stack Developer and a graduate in Masters in Information Technology & Management at Illinois Tech, Chicago. 
    Experienced in building scalable web applications and native Android solutions 
    with a focus on architectural consistency and performance.
        </p>
        
        <div className="flex flex-wrap gap-4 mt-8">
          
          <a 
            href="https://github.com/vyom2507" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-slate-300 px-5 py-2.5 rounded-lg hover:bg-slate-100 transition-all font-medium text-slate-600"
          >
            <CodeXml size={18} />
            GitHub Profile
          </a>

          <a 
            href="mailto:vyomlimbachiya03@gmail.com" 
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 px-2 py-2.5 transition-colors font-medium"
          >
            <Mail size={18} />
            Contact
          </a>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {["Next.js", "TypeScript", "Java", "Android Studio", "Tailwind CSS", "Node.js", "SQLite"].map((skill) => (
            <span key={skill} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-sm border border-slate-200">
              {skill}
            </span>
          ))}
        </div>
      </section>

<section className="mb-20">
  <h2 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-2">
    Experience
  </h2>
  <div className="space-y-12">
    <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[2px] before:bg-slate-800">
      <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-slate-600" />
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-100">Full Stack Software Engineer</h3>
          <p className="text-slate-400 font-medium">Engineering Co. - Anand, India</p>
        </div>
        <span className="text-sm text-slate-500 font-medium">Apr 2022 – Jun 2024</span>
      </div>
      <ul className="text-slate-300 text-sm space-y-2 list-disc ml-4 leading-relaxed">
        <li>Developed and maintained internal web applications using ASP.NET, C#, and SQL Server.</li>
        <li>Created dashboards and database-driven features to support engineering workflows.</li>
        <li>Improved data retrieval and reporting efficiency through optimized SQL queries.</li>
        <li>Built REST APIs with Spring Boot to reduce backend latency for engineering tools.</li>
      </ul>
    </div>
  </div>
  </div>
</section>

      <section className="mb-20">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-100">Featured Projects</h2>
          <span className="text-sm text-slate-100">Selected Works</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="group border border-slate-900 rounded-xl p-6 bg-white hover:border-slate-300 transition-colors">
            <h3 className="text-xl font-bold mb-">Community Event Hub</h3>
            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
              A full-stack event management platform. I built this using a pure CSS 
              architecture with a single centralized styles.css file for consistency.
            </p>
            <a href="https://github.com/vyom2507/community-event-hub" className="text-sm font-semibold flex items-center gap-1 text-slate-900 hover:text-blue-600 transition-colors">
              View Repository <ExternalLink size={14} />
            </a>
          </div>

          <div className="group border border-slate-500 rounded-xl p-6 bg-white hover:border-slate-300 transition-colors">
            <h3 className="text-xl font-bold mb-2">IIT Student Dashboard</h3>
            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
              A Next.js application providing resource hubs and interactive checklists, immigration guidance, and campus information
              for international students at Illinois Tech.
            </p>
            <a href="https://github.com/vyom2507/iit-international-student-dashboard" className="text-sm font-semibold flex items-center gap-1 text-slate-900 hover:text-blue-600 transition-colors">
              View Repository <ExternalLink size={14} />
            </a>
          </div>

          <div className="group border border-slate-200 rounded-xl p-6 bg-white hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold">Inventory System</h3>
              
            </div>
            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
              A Java-based project currently in development, focused on efficient 
              database management and backend CRUD logic.
            </p>
            <a href="https://github.com/vyom2507/community-event-hub" className="text-sm font-semibold flex items-center gap-1 text-slate-900 hover:text-blue-600 transition-colors">
              View Repository <ExternalLink size={14} />
            </a>
          </div>

          <div className="group border border-slate-200 rounded-xl p-6 bg-white hover:border-slate-300 transition-colors">
            <h3 className="text-xl font-bold mb-2">Mobile Application Suite </h3><span className="text-[10px] bg-blue-50 text-blue-600 font-bold uppercase px-2 py-0.5 rounded border border-blue-100">Ongoing</span>

            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
              An Android Studio project in progress, featuring a resource hub for students to locate campus facilities, buildings and services.
              
            </p>
            <a href="https://github.com/vyom2507/Campus-Resource-Finder" className="text-sm font-semibold flex items-center gap-1 text-slate-900 hover:text-blue-600 transition-colors">
              View Repository <ExternalLink size={14} />
            </a>
          </div>

        </div>
      </section>

      <section className="border-t border-slate-200 pt-12">
        <h2 className="text-2xl font-bold mb-8 text-slate-400">Education</h2>
        <div className="space-y-10">
          <div className="relative pl-6 border-l-2 border-slate-100">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-lg font-bold">Illinois Institute of Technology</h3>
              <span className="text-sm font-medium text-slate-500">2024 - 2026</span>
            </div>
            <p className="text-slate-600">Masters in Information Technology Management (GPA: 3.55)</p>
          </div>

          <div className="relative pl-6 border-l-2 border-slate-100">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-lg font-bold">Charutar Vidya Mandal University</h3>
              <span className="text-sm font-medium text-slate-500">2020 - 2023</span>
            </div>
            <p className="text-slate-600">Bachelor of Computer Applications (GPA: 3.42)</p>
          </div>
        </div>
      </section>
    </main>
  );
}
