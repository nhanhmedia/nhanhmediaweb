import React, { useState, useEffect } from 'react';
import { Facebook, Youtube, Instagram } from 'lucide-react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.61-.6 3.16-1.71 4.28-1.12 1.12-2.67 1.73-4.28 1.73s-3.16-.61-4.28-1.73c-1.11-1.12-1.71-2.67-1.71-4.28s.6-3.16 1.71-4.28c1.12-1.12 2.67-1.73 4.28-1.73.28 0 .56.02.84.06V13.3c-.27-.06-.56-.09-.84-.09-1.07 0-2.1.43-2.85 1.19-.76.75-1.19 1.78-1.19 2.85s.43 2.1 1.19 2.85c.75.76 1.78 1.19 2.85 1.19s2.1-.43 2.85-1.19c.76-.75 1.19-1.78 1.19-2.85V.02z"/>
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 lg:px-20 py-4 flex items-center justify-between ${scrolled ? 'bg-background-dark/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-primary text-3xl">movie_filter</span>
        <h1 className="cinematic-text text-2xl tracking-tighter text-white">NHANH<span className="text-primary">MEDIA</span></h1>
      </div>
      <nav className="hidden md:flex items-center gap-10">
        <a className="text-xs font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors" href="#music-videos">Music Videos</a>
        <a className="text-xs font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors" href="#tvc-projects">TVC</a>
        <a className="text-xs font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors" href="#film-ost-projects">Phim Ngắn</a>
        <a className="text-xs font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors" href="#original-content">Sáng Tạo</a>
        <a className="text-xs font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors" href="#about-us">Về Chúng Tôi</a>
      </nav>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1">
            <button className="px-4 py-1.5 text-[10px] font-bold tracking-widest bg-primary text-white rounded-full transition-all">VN</button>
            <button className="px-4 py-1.5 text-[10px] font-bold tracking-widest text-white/50 hover:text-white transition-all">EN</button>
          </div>
          <button className="md:hidden material-symbols-outlined text-white">menu</button>
        </div>
      </div>
    </header>
  );
};

const Hero = ({ onOpenVideo, onOpenContact }: { onOpenVideo: (url: string) => void, onOpenContact: () => void }) => (
  <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDg5YD-kHt7KdZGQBGi5c4o6tSRTyNt16z0scLrFfXozoVEDFGS0f9IXO5PqXWy0cT4Q-8MJlUBQ526pS-Jg-VvhMsdpndFXQD0RoaLmpcPth_7OE8HCiD81c4bsr3Mr146hMPBkCEm-J9liNfK9_UcZf-njF7XnbQgOPFsys410HQNldRNRC0uDc3Uq4SInoeic5OtG-v9mEgea_bMbkcn40kJH1_-P_cFApI6-pSNni6iad2a_q-gvXkNEUMrz-t1c2Na9kpN0mJd')" }}></div>
    <div className="absolute inset-0 gradient-overlay"></div>
    <div className="relative z-10 text-center px-4 max-w-5xl">
      <span className="text-primary font-bold tracking-[0.5em] uppercase text-sm mb-4 block">Đẳng Cấp Điện Ảnh Việt</span>
      <h1 className="cinematic-text text-6xl md:text-9xl text-white mb-6 leading-none">
        ĐỘT PHÁ CÙNG <br/><span className="text-primary">NHANH MEDIA</span>
      </h1>
      <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
        Kiến tạo những thước phim điện ảnh đẳng cấp. Nâng tầm thương hiệu qua từng khung hình với công nghệ 8K chuẩn Hollywood.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button onClick={onOpenContact} className="bg-primary text-white px-10 py-5 cinematic-text text-lg red-glow transition-all flex items-center justify-center gap-3 animate-heartbeat hover:animate-none hover:scale-105">
          <span>LIÊN HỆ ĐẶT LỊCH NGAY</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
        <button onClick={() => onOpenVideo('https://www.youtube.com/watch?v=CbV9iid8OgA')} className="border border-white/30 backdrop-blur-sm text-white px-10 py-5 cinematic-text text-lg hover:bg-white hover:text-black transition-all">
          XEM SHOWREEL 2025
        </button>
      </div>
    </div>
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
      <span className="text-[10px] tracking-[0.3em] uppercase">Cuộn để khám phá</span>
      <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
    </div>
  </section>
);

const Vision = () => (
  <section className="py-24 px-6 lg:px-20 bg-background-dark border-y border-white/5" id="vision">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div>
        <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">SCENE 02: THE CONTRAST</span>
        <h2 className="cinematic-text text-5xl md:text-7xl text-white mb-12 leading-tight">SỰ KHÁC BIỆT<br/>TRONG TẦM NHÌN</h2>
        
        <div className="bg-white/5 p-8 border-l-2 border-primary/30">
          <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-6">CHÚNG TÔI KHÔNG CHẤP NHẬN:</h3>
          <ul className="space-y-4 text-slate-400 text-sm leading-relaxed">
            <li className="flex gap-4"><span className="text-primary font-bold">01</span> Thành phẩm rập khuôn, thiếu bản sắc thương hiệu.</li>
            <li className="flex gap-4"><span className="text-primary font-bold">02</span> Quy trình thiếu chuyên nghiệp làm chậm tiến độ chiến dịch.</li>
            <li className="flex gap-4"><span className="text-primary font-bold">03</span> Hình ảnh nhợt nhạt, thiếu chiều sâu đánh mất niềm tin khách hàng.</li>
          </ul>
        </div>
      </div>
      
      <div className="lg:pl-10">
        <h3 className="cinematic-text text-3xl text-white mb-8 italic">TUYÊN NGÔN "MOVEMENT & ACTION"</h3>
        <div className="h-px w-24 bg-primary mb-8"></div>
        <p className="text-slate-300 text-lg leading-relaxed font-light italic">
          "Chúng tôi không chỉ quay phim, chúng tôi kiến tạo di sản thị giác. Mỗi khung hình, mỗi dải màu ánh sáng đều được tính toán để tôn vinh giá trị cốt lõi của bạn. Tại NhanhMedia, chúng tôi thấu hiểu sức nặng của mỗi đồng ngân sách và trách nhiệm bảo chứng cho sự đẳng cấp."
        </p>
      </div>
    </div>
  </section>
);

const Services = ({ onOpenContact }: { onOpenContact: () => void }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { icon: "movie_filter", title: "SẢN XUẤT MUSIC VIDEO", desc: "Hình ảnh điện ảnh cao cấp cho bản hit tiếp theo. Tối ưu cho nghệ sĩ chuyên nghiệp." },
    { icon: "ads_click", title: "TVC & PHIM QUẢNG CÁO", desc: "Sự xuất sắc trong thương mại thúc đẩy chuyển đổi. Hiệu quả cho Giám đốc Thương hiệu." },
    { icon: "photo_camera", title: "CHỤP ẢNH CHUYÊN NGHIỆP", desc: "Ghi lại bản sắc thương hiệu qua lăng kính thời trang cao cấp. Visual Key Visual đẳng cấp." },
    { icon: "video_settings", title: "HẬU KỲ CHUYÊN NGHIỆP", desc: "Chỉnh màu & VFX đẳng cấp thế giới. Hoàn thiện từng pixel theo chuẩn Hollywood." },
    { icon: "lightbulb", title: "Ý TƯỞNG SÁNG TẠO", desc: "Kịch bản phân cảnh & định hướng chiến lược. Định hình thông điệp từ cốt lõi." },
    { icon: "smart_toy", title: "SẢN XUẤT AI", desc: "Ứng dụng AI tiên tiến trong sản xuất hình ảnh và video. Tối ưu chi phí và thời gian." }
  ];

  return (
    <section className="py-24 px-6 lg:px-20 bg-background-light border-b border-white/5" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">GIẢI PHÁP TỐI ƯU</span>
            <h2 className="cinematic-text text-5xl md:text-7xl text-white mb-4">SOLUTION FINDER</h2>
            <p className="text-slate-400 text-sm tracking-wide uppercase">LỰA CHỌN GIẢI PHÁP PHÙ HỢP VỚI MỤC TIÊU CHIẾN LƯỢC CỦA BẠN</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-background-dark p-8 flex flex-col justify-between min-h-[300px] group hover:border-primary/50 border border-white/5 transition-all duration-500">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6">{service.icon}</span>
                <h4 className="cinematic-text text-xl text-white mb-4 leading-tight">{service.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">{service.desc}</p>
              </div>
              <button 
                onClick={onOpenContact}
                className="flex items-center gap-2 text-primary font-bold text-xs tracking-[0.2em] uppercase group-hover:gap-4 transition-all"
              >
                TƯ VẤN DỰ ÁN
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const mvData = [
  { year: "SẢN PHẨM TIÊU BIỂU", title: "Muốn nói với em | Official MV", artist: "K-ICM FT. NHANHMEDIA", id: "5TlJtpytXtk" },
  { year: "SẢN PHẨM TIÊU BIỂU", title: "TỰ SỰ - ORANGE x THUẬN NGUYỄN | QUA BỂN LÀM CHI OST", artist: "ORANGE x THUẬN NGUYỄN", id: "C4QhZvTqhnI" },
  { year: "SẢN PHẨM TIÊU BIỂU", title: "XIN - Nhóm Nhạc ... (Đạt G, B Ray, Masew) | OFFICIAL MV", artist: "Đạt G, B Ray, Masew", id: "ZVZbjw9Dk7Y" },
  { year: "SẢN PHẨM TIÊU BIỂU", title: "LG x Bùi Công Nam - Tết Nhà Là Tết Nhất | Official MV", artist: "LG x Bùi Công Nam", id: "VPN10JXw9tc" },
  { year: "2026", title: "7 ANH EM 2 (M/V) - Huỳnh James x Pjnboys ft Seaflows", artist: "Huỳnh James x Pjnboys ft Seaflows", id: "vl6DauYV-ik" },
  { year: "2026", title: "CUỐI TUẦN - HUỲNH JAMES x PJNBOYS | Official MV", artist: "HUỲNH JAMES x PJNBOYS", id: "h8LsKymLIEA" },
  { year: "2025", title: "KHÔNG THỬ SAO BIẾT | VIN X Đỗ Hiếu X Only C | TOP MIQVN 2025 | Official MV 4K", artist: "VIN X Đỗ Hiếu X Only C", id: "KU2rxK6_wvg" },
  { year: "2025", title: "jmancurly - ATLAS", artist: "jmancurly", id: "J_ElLtGjW2A" },
  { year: "2025", title: "jmancurly - WORK ON MYSELF", artist: "jmancurly", id: "NBHCJI38AYs" },
  { year: "2025", title: "NGÔ TRÚC LINH - LƯU ANH VÀO BỘ NHỚ | FT. HUY TÍT | MUSIC VIDEO", artist: "NGÔ TRÚC LINH FT. HUY TÍT", id: "Y6dBpy731ts" },
  { year: "2025", title: "FREAKY ft. APJ - CHÚNG TA CHỈ LÀ NHỮNG ĐỨA TRẺ | Official Music Video", artist: "FREAKY ft. APJ", id: "phgI-TefJCw" },
  { year: "2025", title: "PJNBOYS - TRI | LOI EM DOWN (Official MV)", artist: "PJNBOYS - TRI", id: "ee-kpnyOOFk" },
  { year: "2025", title: "Pjnboys x TCONK x Minh Huy - Don't Sleep | Official MV", artist: "Pjnboys x TCONK x Minh Huy", id: "O1fmSkYYhIw" },
  { year: "2025", title: "Huỳnh James x Pjnboys - WE ARE THE FIRE | Official MV", artist: "Huỳnh James x Pjnboys", id: "hhTUoe-VUwQ" },
  { year: "2024", title: "DUY MẠNH - TÔI LÀ DÂN 37 (Official MV)", artist: "DUY MẠNH", id: "YgeiKEH9YGQ" },
  { year: "2024", title: "jmancurly - RIZZ MAN", artist: "jmancurly", id: "d07wPVpJA1U" },
  { year: "2024", title: "Pjnboys, Huỳnh James, Hata, Lil Nhí, Tconk, Su - LỤM | Official MV", artist: "Pjnboys, Huỳnh James, Hata, Lil Nhí, Tconk, Su", id: "KU2rxK6_wvg" },
  { year: "2024", title: "Huỳnh James x Pjnboys - CẦU VỪA ĐỦ XÀI | Official MV", artist: "Huỳnh James x Pjnboys", id: "8s-CAWqjsjo" },
  { year: "2024", title: "Whee! - Ngày Tháng Năm (Live Session)", artist: "Whee!", id: "vs82XD_wNR0" },
  { year: "2024", title: "Doãn Hiếu - Tháng Năm Rực Rỡ | Official MV", artist: "Doãn Hiếu", id: "_pltSfc5U7Q" },
  { year: "2024", title: "ÁNH SÁNG AZA - Chờ Chia Tay | Official MV", artist: "ÁNH SÁNG AZA", id: "p9U0KjMySY0" },
  { year: "2024", title: "DOÃN HIẾU X KHÁNH X NGUYÊN JENDA - VỀ NHÀ THÔI | Official MV", artist: "DOÃN HIẾU X KHÁNH X NGUYÊN JENDA", id: "q6he9HFsg60" },
  { year: "2024", title: "NGUYỄN MINH HOÀNG - ĐAU ĐẾN NỖI SỢ YÊU | Official MV", artist: "NGUYỄN MINH HOÀNG", id: "WHOzVn9bdkA" },
  { year: "2023", title: "LG x Bùi Công Nam - Tết Nhà Là Tết Nhất | Official MV", artist: "LG x Bùi Công Nam", id: "VPN10JXw9tc" },
  { year: "2023", title: "WHEE! - NGÀY THÁNG NĂM | Official MV", artist: "WHEE!", id: "_xnYXvekGmw" },
  { year: "2023", title: "Nhanhmedia - Tâm tư nơi đây | Official MV", artist: "Nhanhmedia", id: "TVtojJFzW-Y" },
  { year: "2023", title: "KEYO - VÔ TREE | Official MV", artist: "KEYO", id: "dIhDbAI9lAY" },
  { year: "2022", title: "Nhanhmedia - Muốn nói với em | Official MV", artist: "Nhanhmedia", id: "5TlJtpytXtk" }
];

const MusicVideos = () => {
  const [activeVideoId, setActiveVideoId] = useState(mvData[0].id);

  const groupedMvData = mvData.reduce((acc, mv) => {
    if (!acc[mv.year]) acc[mv.year] = [];
    acc[mv.year].push(mv);
    return acc;
  }, {} as Record<string, typeof mvData>);

  const years = Object.keys(groupedMvData).sort((a, b) => {
    if (a === "SẢN PHẨM TIÊU BIỂU") return -1;
    if (b === "SẢN PHẨM TIÊU BIỂU") return 1;
    return parseInt(b) - parseInt(a);
  });

  return (
    <section className="bg-black text-white py-[60px] px-[20px] font-sans border-b border-white/5" id="music-videos" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[40px] items-start">
        
        <div className="flex-1 w-full lg:min-w-[300px] lg:max-w-[400px]">
          <p className="text-primary font-bold text-[0.8rem] tracking-[2px] uppercase mb-[10px]">Music Videos</p>
          <h2 className="text-[2.5rem] mb-[20px] font-extrabold cinematic-text">MUSIC VIDEOS</h2>
          <p className="text-[#888] mb-[40px] leading-[1.6]">Nơi âm nhạc hòa quyện cùng nghệ thuật thị giác</p>

          <div className="max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {years.map(year => (
              <div key={year} className="mb-6">
                <h3 className="text-xl font-bold text-white/80 mb-3 sticky top-0 bg-black py-2 z-10">{year}</h3>
                {groupedMvData[year].map((mv, index) => {
                  const isActive = activeVideoId === mv.id;
                  return (
                    <div 
                      key={mv.id}
                      onClick={() => setActiveVideoId(mv.id)}
                      className={`py-[12px] border-b border-[#222] cursor-pointer transition-all duration-300 flex items-center ${isActive ? 'opacity-100 pl-[10px] border-l-[3px] border-l-primary bg-white/5' : 'opacity-60 border-l-0 pl-0 hover:opacity-80 hover:bg-white/5'}`}
                    >
                      <div className="relative w-16 h-9 mr-4 flex-shrink-0 overflow-hidden rounded-sm">
                        <img 
                          src={`https://img.youtube.com/vi/${mv.id}/default.jpg`} 
                          alt={mv.title}
                          className="w-full h-full object-cover"
                        />
                        {isActive && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-sm">play_arrow</span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[0.9rem] font-semibold text-white line-clamp-2 leading-tight mb-1">{mv.title}</div>
                        <div className="text-[0.7rem] text-slate-400 truncate uppercase tracking-wider">{mv.artist}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <a 
            href="https://www.youtube.com/@nhanhmedia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-8 border border-primary text-primary text-[10px] font-bold tracking-widest uppercase py-3 px-8 hover:bg-primary hover:text-black transition-colors w-full text-center"
          >
            XEM TẤT CẢ TRÊN YOUTUBE
          </a>
        </div>

        <div className="flex-[1.5] w-full lg:min-w-[500px] sticky top-24">
          <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-[#333]">
            <iframe 
              className="absolute top-0 left-0 w-full h-full" 
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
          
          {/* Current Video Info */}
          <div className="mt-6">
            {mvData.filter(mv => mv.id === activeVideoId).map(mv => (
              <div key={mv.id}>
                <h3 className="text-2xl font-bold text-white mb-2">{mv.title}</h3>
                <p className="text-primary font-medium tracking-wider uppercase">{mv.artist}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const BehindTheScenes = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop", name: "SET_01.jpg" },
    { src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop", name: "SET_02.jpg" },
    { src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop", name: "SET_03.jpg" },
    { src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop", name: "SET_04.jpg" },
    { src: "https://images.unsplash.com/photo-1512733596533-7b00ccf8ebaf?q=80&w=2064&auto=format&fit=crop", name: "SET_05.jpg" },
    { src: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=2064&auto=format&fit=crop", name: "SET_06.jpg" },
    { src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop", name: "SET_07.jpg" },
    { src: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=2073&auto=format&fit=crop", name: "SET_08.jpg" }
  ];

  return (
    <section className="bg-background-dark py-24 px-6 lg:px-20 text-center border-b border-white/5 overflow-hidden" id="behind-the-scenes">
      <div className="mb-16">
        <p className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-4">HẬU TRƯỜNG</p>
        <h2 className="cinematic-text text-4xl md:text-5xl text-white mb-6">QUY TRÌNH KIẾN TẠO</h2>
        <div className="w-16 h-[2px] bg-primary mx-auto mb-6"></div>
        <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Cái nhìn cận cảnh về những nỗ lực thầm lặng phía sau ống kính để tạo nên những khung hình di sản.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {images.map((img, index) => (
            <div key={index} className="relative aspect-square overflow-hidden group border border-white/5">
              <img 
                src={img.src} 
                alt={img.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors flex items-end p-2">
                <span className="text-[8px] font-mono text-white/50 tracking-widest uppercase">{img.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const originalContentData = {
  tiktok: [
    { id: "7346423028277890311" },
    { id: "7302739852519312642" },
    { id: "7298288666219252993" },
    { id: "7391811877900176648" },
    { id: "7366224874441870599" },
    { id: "7397065184927304967" }
  ]
};

const OriginalContent = ({ onOpenVideo }: { onOpenVideo: (url: string) => void }) => {
  const [youtubeVideos, setYoutubeVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleYoutubeCount, setVisibleYoutubeCount] = useState(3);
  const [visibleTiktokCount, setVisibleTiktokCount] = useState(3);

  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      try {
        const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY || 'AIzaSyABhI26Jzccjo-6xBzC7GcRc3OlBEsfWFw';
        // Use search query for the handle to get results if channelId is unknown
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=nhanhmedia1201&part=snippet,id&order=date&maxResults=3&type=video`);
        const data = await response.json();
        
        if (data.items && data.items.length > 0) {
          const formattedVideos = data.items.map((item: any) => ({
            title: item.snippet.title,
            subtitle: item.snippet.channelTitle,
            img: item.snippet.thumbnails.high.url,
            url: `https://www.youtube.com/watch?v=${item.id.videoId}`
          }));
          setYoutubeVideos(formattedVideos);
        } else {
          // Fallback to 3 featured videos if API returns nothing or fails
          setYoutubeVideos([
            {
              title: 'Vị ngon bùng nổ" GreyD cực mê - tvc popeye',
              subtitle: 'NHANH MEDIA',
              img: 'https://img.youtube.com/vi/oe6sWPTA2gA/maxresdefault.jpg',
              url: 'https://www.youtube.com/watch?v=oe6sWPTA2gA'
            },
            {
              title: 'Hậu trường sản xuất MV triệu view',
              subtitle: 'NHANH MEDIA',
              img: 'https://img.youtube.com/vi/6G05q3wc_uE/maxresdefault.jpg',
              url: 'https://www.youtube.com/watch?v=6G05q3wc_uE'
            },
            {
              title: 'Quy trình sáng tạo nội dung số 2025',
              subtitle: 'NHANH MEDIA',
              img: 'https://img.youtube.com/vi/jLEgJBk6yE8/maxresdefault.jpg',
              url: 'https://www.youtube.com/watch?v=jLEgJBk6yE8'
            }
          ]);
        }
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
        // Fallback on error
        setYoutubeVideos([
          {
            title: 'Vị ngon bùng nổ" GreyD cực mê - tvc popeye',
            subtitle: 'NHANH MEDIA',
            img: 'https://img.youtube.com/vi/oe6sWPTA2gA/maxresdefault.jpg',
            url: 'https://www.youtube.com/watch?v=oe6sWPTA2gA'
          },
          {
            title: 'Hậu trường sản xuất MV triệu view',
            subtitle: 'NHANH MEDIA',
            img: 'https://img.youtube.com/vi/6G05q3wc_uE/maxresdefault.jpg',
            url: 'https://www.youtube.com/watch?v=6G05q3wc_uE'
          },
          {
            title: 'Quy trình sáng tạo nội dung số 2025',
            subtitle: 'NHANH MEDIA',
            img: 'https://img.youtube.com/vi/jLEgJBk6yE8/maxresdefault.jpg',
            url: 'https://www.youtube.com/watch?v=jLEgJBk6yE8'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchYouTubeVideos();

    // Load TikTok embed script
    if (!document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleLoadMoreYoutube = () => {
    setVisibleYoutubeCount(prev => prev + 3);
  };

  const handleLoadMoreTiktok = () => {
    setVisibleTiktokCount(prev => prev + 3);
  };

  return (
    <section className="py-24 px-6 lg:px-20 bg-background-dark border-t border-white/5" id="original-content">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">BLOG & VLOG</span>
          <h2 className="cinematic-text text-4xl md:text-5xl text-white italic">NỘI DUNG <span className="text-primary">SÁNG TẠO</span></h2>
        </div>
        
        <div className="mb-24">
          <h3 className="text-white font-bold tracking-widest text-lg uppercase mb-8 flex items-center gap-2">
            <Youtube className="w-6 h-6 text-primary" /> KÊNH YOUTUBE CHÍNH THỨC
          </h3>
          
          <div className="flex justify-center mb-12">
            <div className="relative p-6 bg-gradient-to-br from-red-600/20 to-transparent rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(255,0,0,0.1)] overflow-hidden max-w-[820px] w-full flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/50 flex-shrink-0">
                <img src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/518287405_24879572944962899_2877507918607518568_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=2a1932&_nc_ohc=1JnjVLjafIcQ7kNvwGNVEey&_nc_oc=AdnpkLeZn5zDeKIgHo77PXKmyJDdTRm31iEGGWGH8bTXEuI72KvtlvJMkEAhJgpSp8xXnvSuXUKksU_i8hd0_DFP&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=Mj_Upt5EySo1F7XdchejxA&_nc_ss=8&oh=00_AfwMLCEeZLYWn-6geAOTyy690hX0czXIVfaN87PI6LMOZA&oe=69AE26D7" alt="Nhanh Media" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-2xl font-bold text-white mb-2">NHANH MEDIA ENTERTAINMENT</h4>
                <p className="text-slate-400 text-sm mb-4">@nhanhmedia1201 • 1.2K video • 300M+ views</p>
                <a 
                  href="https://www.youtube.com/@nhanhmedia1201" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-red-700 transition-all"
                >
                  <Youtube className="w-4 h-4" /> ĐĂNG KÝ KÊNH
                </a>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-48">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {youtubeVideos.map((video, idx) => (
                  <div key={idx} onClick={() => onOpenVideo(video.url)} className="group relative overflow-hidden aspect-video bg-slate-900 cursor-pointer">
                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={video.title} src={video.img}/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                      <span className="text-primary text-xs font-bold mb-1">{video.subtitle}</span>
                      <h3 className="text-xl font-bold italic uppercase tracking-tighter text-white line-clamp-2">{video.title}</h3>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-6xl text-white/80">play_circle</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <a 
                  href="https://www.youtube.com/@nhanhmedia1201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-white/20 text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
                >
                  Xem trên YouTube
                </a>
              </div>
            </>
          )}
        </div>

        <div className="mt-20">
          <h3 className="text-white font-bold tracking-widest text-lg uppercase mb-8 flex items-center gap-2">
            <TikTokIcon className="w-6 h-6 text-primary" /> TIKTOK NGẮN
          </h3>
          <div className="flex justify-center">
            <div className="relative p-4 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(244,27,53,0.1)] overflow-hidden max-w-[820px] w-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@nhanhmedia" data-unique-id="nhanhmedia" data-embed-type="creator" style={{ maxWidth: '780px', minWidth: '288px' }}>
                <section>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@nhanhmedia?refer=creator_embed">@nhanhmedia</a>
                </section>
              </blockquote>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a 
              href="https://www.tiktok.com/@nhanhmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/20 text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
            >
              Xem trên TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};



const testimonialsData = [
  { text: `"Làm việc với Đạo diễn Nhảnh Lê mang lại sự yên tâm tuyệt đối. Từ khâu set up bối cảnh đến hậu kỳ đều vô cùng chuyên nghiệp."`, author: "ARTIST MANAGEMENT", role: "TOP TIER AGENCY", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" },
  { text: `"Một ekip năng động, sáng tạo và mang tinh thần cống hiến cao! Video TVC hoàn thiện vượt ngoài mong đợi, màu sắc mang đậm chất điện ảnh."`, author: "BRAND MANAGER", role: "FMCG INDUSTRY", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop" },
  { text: `"Gửi lời cảm ơn chân thành đến Nhanhmedia đã đồng hành tạo nên thành công cho chương trình. Khả năng giải quyết vấn đề cực kỳ nhạy bén."`, author: "EXECUTIVE PRODUCER", role: "PRODUCTION HOUSE", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" },
  { text: `"Sự tỉ mỉ trong từng khung hình và khả năng nắm bắt cảm xúc của NhanhMedia là điều khiến tôi ấn tượng nhất. Một đối tác đáng tin cậy."`, author: "MARKETING DIRECTOR", role: "TECH STARTUP", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" },
  { text: `"Chiến dịch quảng cáo lần này thành công rực rỡ một phần lớn nhờ vào chất lượng hình ảnh xuất sắc từ NhanhMedia. Chắc chắn sẽ hợp tác lâu dài."`, author: "CREATIVE DIRECTOR", role: "GLOBAL AGENCY", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
  { text: `"Không chỉ là những người thợ quay phim, các bạn là những nghệ sĩ thực thụ. Cảm ơn vì đã kể câu chuyện của chúng tôi một cách tuyệt vời nhất."`, author: "CEO & FOUNDER", role: "FASHION BRAND", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" }
];

const Testimonials = () => (
  <section className="py-24 px-6 lg:px-20 bg-background-dark" id="testimonials">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">NIỀM TIN & CHẤT LƯỢNG</span>
        <h2 className="cinematic-text text-4xl md:text-5xl text-white italic">ĐỐI TÁC NÓI GÌ VỀ CHÚNG TÔI</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, idx) => (
          <div key={idx} className="bg-black p-10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 border border-white/5 hover:border-primary/30">
            <div className="absolute top-4 right-6 text-8xl font-black text-white/5 italic select-none group-hover:text-primary/10 transition-colors duration-500">99</div>
            <div className="relative z-10">
              <div className="text-primary mb-8 text-xl tracking-widest flex gap-1">
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
              </div>
              <p className="text-slate-300 italic mb-12 leading-relaxed text-sm min-h-[80px]">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <img src={testimonial.img} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-xs uppercase tracking-widest">{testimonial.author}</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-primary mt-1">{testimonial.role}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Achievements = () => {
  const stats = [
    { label: "SẢN PHẨM HOÀN THÀNH", value: "150+", icon: "movie" },
    { label: "TỔNG LƯỢT VIEWS", value: "300M+", icon: "trending_up" },
    { label: "CHIẾN DỊCH ĐỘT PHÁ", value: "20+", icon: "rocket_launch" },
    { label: "KHÁCH HÀNG TIN TƯỞNG", value: "100+", icon: "groups" }
  ];

  return (
    <section className="py-20 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block group-hover:scale-110 transition-transform">{stat.icon}</span>
              <div className="text-4xl md:text-5xl font-black text-white mb-2 cinematic-text">{stat.value}</div>
              <div className="text-[10px] tracking-[0.3em] text-slate-500 uppercase font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustedBy = () => {
  const brands = [
    "LG", "Popeyes", "TSUBAKI", "BCNV", "Degrey", "Maybelline", "Omachi",
    "Huỳnh James", "Pjnboys", "Tconk", "Lil Nhí", "Su", "Hata", "Whee!", "Vo Tree", "Keyo", "TTeam", "Blackbi", "Doãn Hiếu", "KHÁNH", "Bùi Công Nam", "Grey D", "Hoa hậu Ngọc Châu", "Xuân Tùng", "Orange", "Thuận Nguyễn", "Văn Mai Hương", "Hồ Trung Dũng", "Bùi Lan Hương", "Hứa Kim Tuyền", "Juky San", "Hoàng Dũng", "Phạm Hương", "Lua", "Hòa Minzy", "Thiên Nga", "Cris Phan", "Đạt G", "B Ray", "Masew", "Niz", "Trịnh Đình Quang", "Only C", "Ricky Star", "Anh Tú", "Isaac", "Lam Trường", "Binz", "Thúy Vân", "Đàm Phương Linh", "Hamlet Trương"
  ];

  const fonts = [
    "'Montserrat', sans-serif",
    "'Playfair Display', serif",
    "'Oswald', sans-serif",
    "'Lora', serif",
    "'Nunito', sans-serif",
    "'Merriweather', serif",
    "'Be Vietnam Pro', sans-serif",
    "'Space Grotesk', sans-serif"
  ];

  // Split brands into 3 rows for a more "crowded" look
  const row1 = brands.slice(0, 17);
  const row2 = brands.slice(17, 34);
  const row3 = brands.slice(34);

  return (
    <section className="py-24 bg-background-dark border-y border-white/5 overflow-hidden" id="trusted-by">
      <div className="text-center mb-16">
        <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-xs block mb-2">PARTNERS & COLLABORATORS</span>
        <h2 className="cinematic-text text-3xl md:text-5xl text-white italic">ĐỐI TÁC CHIẾN LƯỢC</h2>
      </div>
      
      <div className="flex flex-col gap-8">
        {/* Row 1 */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12 py-2">
            {row1.map((brand, idx) => (
              <span key={idx} style={{ fontFamily: fonts[idx % fonts.length] }} className="text-white/30 text-2xl md:text-4xl tracking-widest hover:text-primary transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </div>
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-12 py-2">
            {row1.map((brand, idx) => (
              <span key={`dup1-${idx}`} style={{ fontFamily: fonts[idx % fonts.length] }} className="text-white/30 text-2xl md:text-4xl tracking-widest hover:text-primary transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 - Reverse direction */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee-reverse whitespace-nowrap flex items-center gap-12 py-2">
            {row2.map((brand, idx) => (
              <span key={idx} style={{ fontFamily: fonts[(idx + 3) % fonts.length] }} className="text-white/20 text-3xl md:text-5xl tracking-widest hover:text-primary transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </div>
          <div className="absolute top-0 animate-marquee-reverse2 whitespace-nowrap flex items-center gap-12 py-2">
            {row2.map((brand, idx) => (
              <span key={`dup2-${idx}`} style={{ fontFamily: fonts[(idx + 3) % fonts.length] }} className="text-white/20 text-3xl md:text-5xl tracking-widest hover:text-primary transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Row 3 */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12 py-2">
            {row3.map((brand, idx) => (
              <span key={idx} style={{ fontFamily: fonts[(idx + 5) % fonts.length] }} className="text-white/30 text-2xl md:text-4xl tracking-widest hover:text-primary transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </div>
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-12 py-2">
            {row3.map((brand, idx) => (
              <span key={`dup3-${idx}`} style={{ fontFamily: fonts[(idx + 5) % fonts.length] }} className="text-white/30 text-2xl md:text-4xl tracking-widest hover:text-primary transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FilmAndOSTProjects = () => {
  const [activeVideoId, setActiveVideoId] = useState('qjythhbqoMo');

  const projects = [
    { id: 'qjythhbqoMo', name: 'NỤ HÔN BẠC TỶ | HOUSE RULE |' },
    { id: 'C4QhZvTqhnI', name: 'Orange - Tự Sự ft. Thuận Nguyễn l Qua Bển Làm Chi OST' },
    { id: 'GBMhZRvyTPA', name: 'OST NGHỀ SIÊU DỄ - Sống Một Lần Rồi Thôi - Đinh Tuấn Khanh' },
    { id: 'GETZ-UuLYfo', name: 'Búng Cái Có Liền - Only C ft. Ricky Star' },
    { id: 'kqNIvF75p0g', name: 'OST CON NHÓT MÓT CHỒNG - TÔI THƯƠNG BA – VĂN MAI HƯƠNG x HỒ TRUNG DŨNG' },
    { id: 'orDLZt5dpmE', name: 'Bao Giờ Hết Ế' },
    { id: 'OKJFX1WQGV0', name: 'Ta là ai của đời nhau' },
  ];

  return (
    <section className="bg-black text-white py-[60px] px-[20px] font-sans border-b border-white/5" id="film-ost-projects" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[40px] items-start">
        
        <div className="flex-1 w-full lg:min-w-[300px] lg:max-w-[400px]">
          <p className="text-primary font-bold text-[0.8rem] tracking-[2px] uppercase mb-[10px]">Tác phẩm Điện ảnh</p>
          <h2 className="text-[2.5rem] mb-[20px] font-extrabold cinematic-text">DỰ ÁN PHIM & OST</h2>
          <p className="text-[#888] mb-[40px] leading-[1.6]">Hợp tác cùng những đạo diễn và nhà sản xuất hàng đầu Việt Nam để tạo nên những trải nghiệm hình ảnh và âm nhạc mang tính biểu tượng.</p>

          <div className="max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {projects.map((project, index) => {
              const isActive = activeVideoId === project.id;
              return (
                <div 
                  key={project.id}
                  onClick={() => setActiveVideoId(project.id)}
                  className={`py-[12px] border-b border-[#222] cursor-pointer transition-all duration-300 flex items-center ${isActive ? 'opacity-100 pl-[10px] border-l-[3px] border-l-primary bg-white/5' : 'opacity-60 border-l-0 pl-0 hover:opacity-80 hover:bg-white/5'}`}
                >
                  <div className="relative w-16 h-9 mr-4 flex-shrink-0 overflow-hidden rounded-sm">
                    <img 
                      src={`https://img.youtube.com/vi/${project.id}/default.jpg`} 
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-sm">play_arrow</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[0.9rem] font-semibold truncate text-white">{project.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex-[1.5] w-full lg:min-w-[500px] sticky top-24">
          <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-[#333]">
            <iframe 
              className="absolute top-0 left-0 w-full h-full" 
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
          
          {/* Current Video Info */}
          <div className="mt-6">
            {projects.filter(p => p.id === activeVideoId).map(p => (
              <div key={p.id}>
                <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set target to 5 days from now
    const target = new Date();
    target.setDate(target.getDate() + 5);
    target.setHours(23, 59, 59, 999);
    
    const timer = setInterval(() => {
      const currentTime = new Date();
      const difference = target.getTime() - currentTime.getTime();
      
      if (difference <= 0) {
        clearInterval(timer);
        return;
      }
      
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 md:gap-8 justify-center mb-12">
      {[
        { label: 'Ngày', value: timeLeft.days },
        { label: 'Giờ', value: timeLeft.hours },
        { label: 'Phút', value: timeLeft.minutes },
        { label: 'Giây', value: timeLeft.seconds }
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center group">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-2xl mb-3 shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:border-primary/50 transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="text-3xl md:text-5xl font-black text-white group-hover:text-primary transition-colors tabular-nums">{String(item.value).padStart(2, '0')}</span>
          </div>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/40 font-bold group-hover:text-white/70 transition-colors">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

const CTA = ({ onOpenContact }: { onOpenContact: () => void }) => (
  <section className="py-32 px-6 lg:px-20 bg-black text-center border-y border-white/5 relative overflow-hidden">
    {/* Background glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
    
    <div className="max-w-4xl mx-auto relative z-10">
      <h2 className="cinematic-text text-4xl md:text-6xl text-white mb-6 leading-tight font-black uppercase">
        ƯU ĐÃI 20% CHO 05 DỰ ÁN <br/>
        <span className="text-primary">ĐĂNG KÝ SỚM NHẤT TRONG THÁNG</span>
      </h2>
      <p className="text-white/80 text-lg md:text-2xl mb-10 max-w-3xl mx-auto font-light leading-relaxed">
        Đồng hành cùng Nhanhmedia để nhận ngay gói tư vấn chiến lược hình ảnh <span className="text-[#FFD700] font-bold uppercase tracking-wider bg-[#FFD700]/10 px-3 py-1 rounded-md border border-[#FFD700]/30 inline-block mt-2 md:mt-0">miễn phí</span>.
      </p>
      
      <CountdownTimer />
      
      <div className="mb-12 p-6 bg-white/5 border border-white/10 rounded-xl max-w-2xl mx-auto">
        <p className="text-slate-400 text-sm italic">
          "Team đồng hành kết nối trực tiếp với các nhãn hàng đối tác để mang lại những ưu đãi đặc quyền về chi phí sản xuất và truyền thông cho dự án của bạn."
        </p>
      </div>

      <button onClick={onOpenContact} className="bg-primary text-white px-12 py-6 cinematic-text text-2xl hover:bg-white hover:text-black transition-all italic font-bold tracking-widest rounded-md shadow-[0_0_30px_rgba(244,27,53,0.3)] hover:shadow-[0_0_50px_rgba(244,27,53,0.5)] transform hover:scale-105">
        [ NHẬN ƯU ĐÃI NGAY ]
      </button>
    </div>
  </section>
);

const TVCSection = ({ onOpenContact }: { onOpenContact: () => void }) => {
  const [showAll, setShowAll] = useState(false);
  const tvcs = [
    { id: 'oe6sWPTA2gA', title: 'Vị ngon bùng nổ" GreyD cực mê - tvc popeye' },
    { id: '6G05q3wc_uE', title: 'TVC QUẢNG CÁO 01' },
    { id: 'jLEgJBk6yE8', title: 'TVC QUẢNG CÁO 02' },
    { id: 'nhI5POx3De0', title: 'TVC QUẢNG CÁO 03' },
    { id: 'V59iWpzW-sQ', title: 'TVC QUẢNG CÁO 04' },
    { id: 'jvUtHPL5DK4', title: 'TVC QUẢNG CÁO 05' },
    { id: 'P3Vbr1tpEVw', title: 'TVC QUẢNG CÁO 06' },
    { id: 'Q9RUqF7vZGM', title: 'TVC QUẢNG CÁO 07' },
    { id: 'xER-Ci60geI', title: 'TVC QUẢNG CÁO 08' },
    { id: 'Yr-meWsd1UI', title: 'TVC QUẢNG CÁO 09' },
  ];

  const visibleTvcs = showAll ? tvcs : tvcs.slice(0, 3);

  return (
    <section className="bg-background-light py-24 px-6 lg:px-20 border-b border-white/5" id="tvc-projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Phim Quảng Cáo</span>
          <h2 className="cinematic-text text-4xl md:text-5xl text-white italic">TVC & <span className="text-primary">QUẢNG CÁO</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleTvcs.map((tvc, idx) => (
            <div key={idx} className="group relative overflow-hidden aspect-video bg-black border border-white/10 rounded-lg shadow-2xl hover:border-primary/50 transition-all">
              <iframe 
                className="w-full h-full" 
                src={`https://www.youtube.com/embed/${tvc.id}`} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <h4 className="text-white font-bold text-xs truncate">{tvc.title}</h4>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center flex flex-col md:flex-row gap-4 justify-center">
          {!showAll && (
            <button 
              onClick={() => setShowAll(true)}
              className="border border-white/30 text-white px-10 py-4 cinematic-text text-sm hover:bg-white hover:text-black transition-all"
            >
              XEM THÊM TVC
            </button>
          )}
          <button onClick={onOpenContact} className="bg-primary text-white px-10 py-4 cinematic-text text-sm hover:bg-white hover:text-black transition-all">
            TƯ VẤN CHIẾN DỊCH
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-black py-20 px-6 lg:px-20 border-t border-white/5">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="md:col-span-2">
        <h2 className="cinematic-text text-3xl text-white mb-6 tracking-tighter">NHANH<span className="text-primary">MEDIA</span></h2>
        <p className="text-slate-400 max-w-sm mb-4">CÔNG TY TNHH TRUYỀN THÔNG VÀ GIẢI TRÍ NHANHMEDIA</p>
        <p className="text-slate-500 text-xs mb-8 uppercase tracking-widest">Mã số thuế: 0315710998 • Hoạt động từ 2019</p>
        <div className="flex gap-4">
          <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="https://www.facebook.com/Nhanhmedia.Entertainment" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-4 h-4" />
          </a>
          <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="https://www.facebook.com/nhanh.phan.thiet/" target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-outlined text-sm">person</span>
          </a>
          <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="#" target="_blank" rel="noopener noreferrer">
            <Youtube className="w-4 h-4" />
          </a>
          <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="https://www.tiktok.com/@nhanhmedia" target="_blank" rel="noopener noreferrer">
            <TikTokIcon className="w-4 h-4" />
          </a>
          <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="#" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
      <div>
        <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-6">Dịch Vụ</h4>
        <ul className="space-y-3 text-slate-400 text-sm">
          <li><a className="hover:text-primary transition-colors" href="#">Sản xuất Music Video</a></li>
          <li><a className="hover:text-primary transition-colors" href="#">Quay TVC Quảng Cáo</a></li>
          <li><a className="hover:text-primary transition-colors" href="#">Phim Doanh Nghiệp</a></li>
          <li><a className="hover:text-primary transition-colors" href="#">Hậu kỳ Video (VFX/Color)</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-6">Liên Hệ</h4>
        <ul className="space-y-3 text-slate-400 text-sm">
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-primary text-sm mt-1">location_on</span>
            <span>49/2/55B Đường số 51, P.14, Q.Gò Vấp, TP.HCM</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-primary text-sm mt-1">call</span>
            <div className="flex flex-col">
              <span>0833 601 662 (Director & Founder)</span>
              <span>0942 048 600 (Producer & Co-founder)</span>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-primary text-sm mt-1">mail</span>
            <span>nhanhmedia@gmail.com</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 uppercase tracking-widest">
      <p>© 2026 NHANHMEDIA PRODUCTION HOUSE. ALL RIGHTS RESERVED.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <a href="#">Chính sách bảo mật</a>
        <a href="#">Điều khoản sử dụng</a>
      </div>
    </div>
  </footer>
);

import VideoModal from './components/VideoModal';

const Quote = () => (
  <section className="py-24 px-6 lg:px-20 bg-background-dark flex justify-center items-center text-center border-y border-white/5" id="about-us">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/3">
        <div className="relative aspect-[3/4] w-full max-w-[300px] mx-auto overflow-hidden rounded-sm border border-white/10">
          <img src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/518287405_24879572944962899_2877507918607518568_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=2a1932&_nc_ohc=1JnjVLjafIcQ7kNvwGNVEey&_nc_oc=AdnpkLeZn5zDeKIgHo77PXKmyJDdTRm31iEGGWGH8bTXEuI72KvtlvJMkEAhJgpSp8xXnvSuXUKksU_i8hd0_DFP&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=Mj_Upt5EySo1F7XdchejxA&_nc_ss=8&oh=00_AfwMLCEeZLYWn-6geAOTyy690hX0czXIVfaN87PI6LMOZA&oe=69AE26D7" alt="Director Nhảnh Lê" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-left">
            <h4 className="cinematic-text text-2xl text-white tracking-widest">NHẢNH LÊ</h4>
            <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mt-1 block">Founder & Director</span>
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/3 text-left">
        <h3 className="text-white text-3xl font-bold mb-6 uppercase tracking-wider">ĐỘI NGŨ KIẾN TẠO DI SẢN</h3>
        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
          Tại Nhanhmedia, chúng tôi tự hào sở hữu một đội ngũ chuyên gia hàng đầu trong lĩnh vực sản xuất hình ảnh và video. Từ những nhà sản xuất dày dặn kinh nghiệm, đạo diễn hình ảnh tài năng, đến các chuyên gia hậu kỳ xuất sắc, mỗi thành viên đều mang trong mình ngọn lửa đam mê mãnh liệt với nghệ thuật thị giác. Sự kết hợp hoàn hảo giữa kỹ thuật điêu luyện và tư duy sáng tạo đột phá chính là sức mạnh cốt lõi giúp chúng tôi biến mọi ý tưởng thành hiện thực.
        </p>
        <span className="material-symbols-outlined text-primary text-6xl mb-4 opacity-80">format_quote</span>
        <p className="text-2xl md:text-3xl text-white italic font-light leading-relaxed border-l-4 border-primary pl-6">
          "Sự tưởng tượng và trí óc của chúng ta là nhà biên kịch hay nhất, còn việc đưa những hình ảnh đó lên màn ảnh là nhờ vào tài năng và sự nỗ lực của ta."
        </p>
      </div>
    </div>
  </section>
);

const TVCShow = () => {
  const [showAll, setShowAll] = useState(false);
  const content = [
    { id: 'bI7bUu8_blg', title: 'TVC SHOW 01' },
    { id: 'CJ4sIj4Xwkw', title: 'TVC SHOW 02' },
    { id: 'a2P90riUv1s', title: 'TVC SHOW 03' },
    { id: 'NnJ-Vo-3J5I', title: 'TVC SHOW 04' },
    { id: 'QzzTAokG7CQ', title: 'TVC SHOW 05' },
    { id: 'p43cW8epZG0', title: 'TVC SHOW 06' },
    { id: '3WYeUtr0co8', title: 'TVC SHOW 07' },
    { id: 'cdR0sT-gARo', title: 'TVC SHOW 08' }
  ];

  const visibleContent = showAll ? content : content.slice(0, 4);

  return (
    <section className="py-24 px-6 lg:px-20 bg-background-light border-b border-white/5" id="tvc-show">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">MULTIMEDIA PRODUCTION</span>
          <h2 className="cinematic-text text-4xl md:text-5xl text-white italic">TVC <span className="text-primary">SHOW</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleContent.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden aspect-video bg-black border border-white/10 rounded-lg shadow-2xl hover:border-primary/50 transition-all">
              <iframe 
                className="w-full h-full" 
                src={`https://www.youtube.com/embed/${item.id}`} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <h4 className="text-white font-bold text-xs truncate">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-12 text-center">
            <button 
              onClick={() => setShowAll(true)}
              className="border border-primary text-primary px-10 py-4 cinematic-text text-sm hover:bg-primary hover:text-white transition-all"
            >
              XEM THÊM DỰ ÁN TVC
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const handleOpenVideo = (url: string) => {
    setVideoUrl(url);
    setIsVideoModalOpen(true);
  };

  const handleOpenContact = () => {
    window.open('https://m.me/Nhanhmedia.Entertainment', '_blank');
  };

  return (
    <div className="min-h-screen bg-background-dark text-slate-100 font-display selection:bg-primary selection:text-white">
      <Navbar />
      <Hero onOpenVideo={handleOpenVideo} onOpenContact={handleOpenContact} />
      <Achievements />
      <TrustedBy />
      <Vision />
      <Services onOpenContact={handleOpenContact} />
      <MusicVideos />
      <TVCShow />
      <FilmAndOSTProjects />
      <TVCSection onOpenContact={handleOpenContact} />
      <OriginalContent onOpenVideo={handleOpenVideo} />
      <BehindTheScenes />
      <Testimonials />
      <Quote />
      <CTA onOpenContact={handleOpenContact} />
      <Footer />
      
      {/* Pulsing Contact Button */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <button onClick={handleOpenContact} className="bg-primary text-white flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl animate-pulse-integrated hover:brightness-110 transition-all group">
          <span className="material-symbols-outlined text-2xl">chat_bubble</span>
          <span className="text-xs font-bold tracking-[0.2em] uppercase hidden md:block">Tư vấn dự án</span>
        </button>
      </div>

      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
        videoUrl={videoUrl} 
      />
    </div>
  );
}
