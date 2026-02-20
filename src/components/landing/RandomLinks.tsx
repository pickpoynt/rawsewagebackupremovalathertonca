import { Link } from "react-router-dom";

const links = [
  { text: "San Francisco CA Plumbers", url: "https://plumbersanfranciscoca.vercel.app/", internal: false },
  { text: "Charlotte NC Plumbing Team", url: "https://plumbercharlottenc.vercel.app/", internal: false },
  { text: "West Seneca NY Plumber Services", url: "https://plumberwestsenecany.vercel.app/", internal: false },
  { text: "Fort Collins Sewer Repair", url: "https://sewerlinerepairfortcollins.vercel.app/", internal: false },
];

const RandomLinks = () => {
  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {links.map((link, index) => (
            link.internal ? (
              <Link
                key={index}
                to={link.url}
                className="text-slate-400 hover:text-indigo-600 transition-colors text-sm font-medium uppercase tracking-widest"
              >
                {link.text}
              </Link>
            ) : (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-indigo-600 transition-colors text-sm font-medium uppercase tracking-widest"
              >
                {link.text}
              </a>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default RandomLinks;
