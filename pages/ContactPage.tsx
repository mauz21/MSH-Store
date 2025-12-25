
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col">
       <section 
        className="relative py-32 bg-cover bg-center text-white text-center"
        style={{ backgroundImage: `url('https://picsum.photos/seed/contact/1920/600')` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-6xl md:text-8xl font-black">Contact Us</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
         <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-20">
               <h4 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Have any queries?</h4>
               <h2 className="text-4xl font-black text-gray-900">We're here to help.</h2>
               <div className="w-16 h-1 bg-[#0084d1] mx-auto mt-6" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
               {[
                 { title: 'Sales', desc: 'Vestibulum ante ipsum primis in faucibus orci luctus.', link: '1800 123 4567' },
                 { title: 'Complaints', desc: 'Vestibulum ante ipsum primis in faucibus orci luctus.', link: '1900 223 8899' },
                 { title: 'Returns', desc: 'Vestibulum ante ipsum primis in faucibus orci luctus.', link: 'returns@mail.com' },
                 { title: 'Marketing', desc: 'Vestibulum ante ipsum primis in faucibus orci luctus.', link: '1700 444 5578' }
               ].map((item, i) => (
                 <div key={i} className="p-8 border border-gray-100 bg-gray-50 text-center flex flex-col items-center">
                    <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">{item.desc}</p>
                    <span className="text-[#0084d1] font-bold text-lg">{item.link}</span>
                 </div>
               ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
               <div>
                  <h4 className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">Don't be a stranger!</h4>
                  <h2 className="text-5xl font-black text-gray-900 mb-8 leading-tight">You tell us. We listen.</h2>
                  <p className="text-gray-500 leading-relaxed mb-8">Cras elementum finibus lacus nec lacinia. Quisque non convallis nisl, eu condimentum sem. Proin dignissim libero lacus, ut eleifend magna vehicula et. Nam mattis est sed tellus.</p>
               </div>
               <div className="bg-white p-4 md:p-8 shadow-2xl border border-gray-100">
                  <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                     <input type="text" placeholder="NAME" className="w-full border border-gray-200 p-4 focus:outline-none focus:border-[#0084d1]" />
                     <input type="text" placeholder="SUBJECT" className="w-full border border-gray-200 p-4 focus:outline-none focus:border-[#0084d1]" />
                     <input type="email" placeholder="EMAIL" className="w-full border border-gray-200 p-4 focus:outline-none focus:border-[#0084d1]" />
                     <textarea rows={5} placeholder="MESSAGE" className="w-full border border-gray-200 p-4 focus:outline-none focus:border-[#0084d1]"></textarea>
                     <button className="bg-[#0084d1] text-white font-bold px-12 py-4 hover:bg-black transition-all">SEND MESSAGE</button>
                  </form>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default ContactPage;
