import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    project: '',
    budget: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/mdalqzje', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          onClose();
          setFormData({ email: '', phone: '', project: '', budget: '' });
        }, 3000);
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          setError(data.errors.map((err: any) => err.message).join(', '));
        } else {
          setError('Có lỗi xảy ra. Vui lòng thử lại sau.');
        }
      }
    } catch (err) {
      setError('Lỗi kết nối. Vui lòng kiểm tra lại mạng.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-background-dark border border-white/10 rounded-2xl p-8 shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/5 hover:bg-primary text-white rounded-full flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        
        <h2 className="cinematic-text text-3xl text-white mb-2">LIÊN HỆ ĐẶT LỊCH</h2>
        <p className="text-slate-400 text-sm mb-8">Vui lòng để lại thông tin, chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.</p>

        {submitted ? (
          <div className="text-center py-12">
            <span className="material-symbols-outlined text-primary text-6xl mb-4">check_circle</span>
            <h3 className="text-xl font-bold text-white mb-2">Gửi thành công!</h3>
            <p className="text-slate-400">Cảm ơn bạn đã quan tâm đến dịch vụ của NhanhMedia. Chúng tôi sẽ liên hệ lại sớm nhất.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-sm p-3 rounded-lg mb-4">
                {error}
              </div>
            )}
            <div>
              <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Email</label>
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Số điện thoại</label>
              <input 
                type="tel" 
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="090 123 4567"
              />
            </div>
            <div>
              <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Dự án</label>
              <textarea 
                name="project"
                required
                value={formData.project}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors h-24 resize-none"
                placeholder="Mô tả ngắn gọn về dự án của bạn..."
              ></textarea>
            </div>
            <div>
              <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Ngân sách dự kiến</label>
              <select 
                name="budget"
                required
                value={formData.budget}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
              >
                <option value="" disabled className="bg-background-dark text-slate-400">Chọn mức ngân sách</option>
                <option value="< 50M" className="bg-background-dark text-white">Dưới 50 triệu VNĐ</option>
                <option value="50M - 200M" className="bg-background-dark text-white">50 - 200 triệu VNĐ</option>
                <option value="200M - 500M" className="bg-background-dark text-white">200 - 500 triệu VNĐ</option>
                <option value="> 500M" className="bg-background-dark text-white">Trên 500 triệu VNĐ</option>
              </select>
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-primary text-white font-bold tracking-widest uppercase py-4 rounded-lg hover:bg-white hover:text-black transition-colors mt-6 flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined animate-spin mr-2">progress_activity</span>
                  ĐANG GỬI...
                </>
              ) : (
                'GỬI THÔNG TIN'
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
