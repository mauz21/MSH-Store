
import React, { useState } from 'react';

const AccountPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-gray-50 min-h-screen py-32 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-12 shadow-2xl border border-gray-100">
         <div className="flex gap-8 mb-12 border-b border-gray-100">
            <button 
              className={`pb-4 text-xl font-black relative ${isLogin ? 'text-gray-900' : 'text-gray-300'}`}
              onClick={() => setIsLogin(true)}
            >
              Login
              {isLogin && <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0084d1]" />}
            </button>
            <button 
              className={`pb-4 text-xl font-black relative ${!isLogin ? 'text-gray-900' : 'text-gray-300'}`}
              onClick={() => setIsLogin(false)}
            >
              Register
              {!isLogin && <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0084d1]" />}
            </button>
         </div>

         {isLogin ? (
           <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div>
                 <label className="block text-sm font-bold mb-2">Username or email address *</label>
                 <input type="text" required className="w-full border border-gray-200 p-4 focus:outline-none focus:border-[#0084d1]" />
              </div>
              <div>
                 <label className="block text-sm font-bold mb-2">Password *</label>
                 <input type="password" required className="w-full border border-gray-200 p-4 focus:outline-none focus:border-[#0084d1]" />
              </div>
              <div className="flex items-center gap-2">
                 <input type="checkbox" id="remember" />
                 <label htmlFor="remember" className="text-sm font-bold text-gray-500 cursor-pointer">Remember me</label>
              </div>
              <button className="w-full bg-[#0084d1] text-white font-bold py-4 hover:bg-black transition-all">LOG IN</button>
              <a href="#" className="block text-center text-sm text-[#0084d1] font-bold mt-4">Lost your password?</a>
           </form>
         ) : (
           <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div>
                 <label className="block text-sm font-bold mb-2">Email address *</label>
                 <input type="email" required className="w-full border border-gray-200 p-4 focus:outline-none focus:border-[#0084d1]" />
              </div>
              <div>
                 <label className="block text-sm font-bold mb-2">Password *</label>
                 <input type="password" required className="w-full border border-gray-200 p-4 focus:outline-none focus:border-[#0084d1]" />
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">A link to set a new password will be sent to your email address.</p>
              <p className="text-xs text-gray-500 leading-relaxed">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="text-[#0084d1] cursor-pointer">privacy policy</span>.</p>
              <button className="w-full bg-[#0084d1] text-white font-bold py-4 hover:bg-black transition-all">REGISTER</button>
           </form>
         )}
      </div>
    </div>
  );
};

export default AccountPage;
