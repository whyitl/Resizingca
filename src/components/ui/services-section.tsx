

import { Link } from "react-router-dom";

function Services() {

  return (
    <div className="w-full pt-32 lg:pt-48" style={{
      backgroundColor: '#F6F6F6',
      backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.06) 1px, transparent 1px)',
      backgroundSize: '10px 10px',
      backgroundPosition: '0 0',
      marginTop: '77px',
      paddingBottom: '40px'
    }}>
      <div className="container mx-auto px-6" style={{ marginTop: '-120px' }}>
        <div className="grid grid-cols-1 gap-8 items-start md:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-4 flex-col">
              <h1 className="text-2xl md:text-3xl max-w-lg tracking-tighter text-left font-bold google-sans">
                The work we do, and who we do it for.
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left mb-4">
                We design affordable websites for <strong>small businesses</strong> that feel refined, considered, and cohesive. Our approach keeps <strong>costs low</strong> while giving you a clean, consistent online presence where every touchpoint feels intentional, from the first scroll to the final click.
              </p>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                A standard collaboration typically spans <strong>2 to 3 weeks</strong>, taking us from initial strategy all the way to the final deployment and launch.
              </p>
              <div>
                <Link
                  to="/contact"
                  className="mt-4 inline-block px-6 py-3 rounded-md font-semibold text-white transition-colors duration-200 hover:opacity-90"
                  style={{ backgroundColor: '#3B5249' }}
                >
                  Reach Out
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white rounded-md h-52 flex flex-col p-4">
              <p className="text-lg font-medium mb-2">Web Design + Development</p>
              <p className="text-sm text-muted-foreground leading-relaxed">We replace renting slow, fragile platforms with owning a custom-engineered asset that offers superior speed, security, and long-term investment value</p>
              <p className="text-sm font-medium mt-2">Projects start from $400</p>
            </div>
            <div className="bg-white rounded-md row-span-2 flex flex-col p-4">
              <p className="text-lg font-medium mb-2">Maintenance & Support</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">We don't sell traditional "maintenance" because your custom site is engineered to be crash-proof; instead, this is an investment in continuous growth rather than just repairs. Unlike Framer or WebFlow owners who pay to fix broken plugins, you pay for a dedicated partner to actively improve your asset, ensuring your digital presence appreciates in value over time.</p>

              <p className="text-xs text-muted-foreground leading-relaxed mb-1"><span className="font-medium text-foreground">Priority Access:</span> You skip the waiting line; when you need a critical update for a marketing push, your request is executed immediately by the team who knows your code best.</p>
              <p className="text-xs text-muted-foreground leading-relaxed"><span className="font-medium text-foreground">Future-Proofing:</span> We proactively update your site's underlying technology to modern standards, guaranteeing it never becomes "legacy" software that needs a costly rebuild.</p>
            </div>
            <div className="bg-white rounded-md h-44 flex flex-col p-4">
              <p className="text-lg font-medium mb-2">Web Hosting</p>
              <p className="text-xs text-muted-foreground leading-relaxed">We host on Cloudflare's Network to ensure instant load times and enterprise-grade security, including SSL and DDoS protection. Our continuous deployment pipeline pushes updates live instantly, keeping your site current with absolutely zero downtime.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Services };

