
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col">
       {/* Hero */}
       <section 
        className="relative py-32 bg-cover bg-center text-white text-center"
        style={{ backgroundImage: `url('https://picsum.photos/seed/about/1920/600')` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-6xl md:text-8xl font-black">About Us</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
         <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
               <div className="space-y-6">
                  <div className="w-16 h-1 bg-[#0084d1]" />
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900">Who We Are</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.</p>
                  <p className="text-gray-600 leading-relaxed">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.</p>
               </div>
               <div className="relative group overflow-hidden">
                  <img src="https://picsum.photos/seed/who/800/600" className="w-full shadow-2xl transition-transform duration-700 group-hover:scale-105" />
               </div>
            </div>
         </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50">
         <div className="container mx-auto px-4 md:px-8 text-center">
            <div className="w-16 h-1 bg-[#0084d1] mx-auto mb-6" />
            <h4 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">A Few Words About</h4>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-20">Our Team</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
               {[
                 { name: 'Harvey Spector', role: 'Founder - CEO', img: 'https://picsum.photos/seed/t1/400/500' },
                 { name: 'Jessica Pearson', role: 'COO', img: 'https://picsum.photos/seed/t2/400/500' },
                 { name: 'Rachel Zane', role: 'Marketing Head', img: 'https://picsum.photos/seed/t3/400/500' },
                 { name: 'Luise Litt', role: 'Lead Developer', img: 'https://picsum.photos/seed/t4/400/500' },
                 { name: 'Katrina Bennett', role: 'Intern Designer', img: 'https://picsum.photos/seed/t5/400/500' },
                 { name: 'Mike Ross', role: 'Intern Designer', img: 'https://picsum.photos/seed/t6/400/500' }
               ].map((member, i) => (
                 <div key={i} className="bg-white p-8 group">
                    <img src={member.img} className="w-32 h-32 rounded-full mx-auto mb-6 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                    <p className="text-gray-500 text-sm mb-4">{member.role}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Follow Section */}
      <section className="relative py-40 overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 z-0">
            <img src="https://picsum.photos/seed/follow/1920/600" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-white/80" />
         </div>
         <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="w-16 h-1 bg-[#0084d1] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Follow Us</h2>
            <div className="flex justify-center gap-8">
                {['facebook', 'twitter', 'instagram', 'google-plus'].map(social => (
                  <a key={social} href="#" className="text-gray-600 hover:text-[#0084d1] transition-colors text-2xl">
                    <i className={`fab fa-${social}`}></i>
                  </a>
                ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default AboutPage;
