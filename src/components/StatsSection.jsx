'use client';
import Briefcase from '@gravity-ui/icons/Briefcase';
import Factory from '@gravity-ui/icons/Factory';
import PersonPlus from '@gravity-ui/icons/PersonPlus';
import Star from '@gravity-ui/icons/Star';

const StatsSection = () => {
  return (
    <section className="relative py-24 pt-80 overflow-hidden bg-zinc-950">
      {/* Background Globe Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: "url('/images/globe.png')", // Make sure to place globe.jpg in your public folder
        }}
      />
      
      {/* Purple Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/70 to-zinc-950" />
      
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Main Heading */}
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-2xl md:text-3xl font-light text-white leading-tight tracking-tight">
            Assisting over <span className="font-semibold text-violet-400">15,000</span> job seekers<br />
            find their dream positions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Stat 1 */}
          <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700 rounded-3xl p-8 text-left hover:border-violet-500/30 transition-all group">
            <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-violet-950 transition-colors">
              <Briefcase className="w-7 h-7 text-violet-400" />
            </div>
            <div className="text-5xl font-semibold text-white mb-1">50K</div>
            <div className="text-zinc-400 text-sm tracking-wide">Active Jobs</div>
          </div>

          {/* Stat 2 */}
          <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700 rounded-3xl p-8 text-left hover:border-violet-500/30 transition-all group">
            <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-violet-950 transition-colors">
              <Factory className="w-7 h-7 text-violet-400" />
            </div>
            <div className="text-5xl font-semibold text-white mb-1">12K</div>
            <div className="text-zinc-400 text-sm tracking-wide">Companies</div>
          </div>

          {/* Stat 3 */}
          <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700 rounded-3xl p-8 text-left hover:border-violet-500/30 transition-all group">
            <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-violet-950 transition-colors">
              <PersonPlus className="w-7 h-7 text-violet-400" />
            </div>
            <div className="text-5xl font-semibold text-white mb-1">2M</div>
            <div className="text-zinc-400 text-sm tracking-wide">Job Seekers</div>
          </div>

          {/* Stat 4 */}
          <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700 rounded-3xl p-8 text-left hover:border-violet-500/30 transition-all group">
            <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-violet-950 transition-colors">
              <Star className="w-7 h-7 text-violet-400" />
            </div>
            <div className="text-5xl font-semibold text-white mb-1">97%</div>
            <div className="text-zinc-400 text-sm tracking-wide">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;