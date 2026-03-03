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
        <a className="text-xs font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors" href="#">Music Videos</a>
        <a className="text-xs font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors" href="#">TVC</a>
        <a className="text-xs font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors" href="#">Phim Ngắn</a>
        <a className="text-xs font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors" href="#">Portfolio</a>
        <a className="text-xs font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors" href="#">Về Chúng Tôi</a>
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
          XEM SHOWREEL 2024
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
          <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-6">CHÚNG TÔI KHÔNG CHẤP NHẬN SỰ TRUNG BÌNH:</h3>
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

const Services = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-background-dark p-6 flex flex-col justify-between min-h-[350px] group hover:border-primary/50 border border-transparent transition-colors">
            <div>
              <span className="material-symbols-outlined text-primary text-3xl mb-6">movie_filter</span>
              <h4 className="cinematic-text text-lg text-white mb-4">MUSIC VIDEO<br/>PRODUCTION</h4>
              <p className="text-slate-400 text-xs leading-relaxed">High-end cinematic visuals for the next hit. Tối ưu cho nghệ sĩ chuyên nghiệp.</p>
            </div>
          </div>
          
          <div className="bg-background-dark p-6 flex flex-col justify-between min-h-[350px] group hover:border-primary/50 border border-transparent transition-colors">
            <div>
              <span className="material-symbols-outlined text-primary text-3xl mb-6">ads_click</span>
              <h4 className="cinematic-text text-lg text-white mb-4">TVC & VIRAL<br/>CLIPS</h4>
              <p className="text-slate-400 text-xs leading-relaxed">Commercial excellence that drives conversions. Hiệu quả cho Brand Manager.</p>
            </div>
          </div>
          
          <div className="bg-background-dark p-6 flex flex-col justify-between min-h-[350px] group hover:border-primary/50 border border-transparent transition-colors">
            <div>
              <span className="material-symbols-outlined text-primary text-3xl mb-6">photo_camera</span>
              <h4 className="cinematic-text text-lg text-white mb-4">PROFESSIONAL<br/>PHOTOGRAPHY</h4>
              <p className="text-slate-400 text-xs leading-relaxed">Capturing brand essence through high-fashion lenses. Visual Key Visual đẳng cấp.</p>
            </div>
          </div>
          
          <div className="bg-background-dark p-6 flex flex-col justify-between min-h-[350px] group hover:border-primary/50 border border-transparent transition-colors">
            <div>
              <span className="material-symbols-outlined text-primary text-3xl mb-6">video_settings</span>
              <h4 className="cinematic-text text-lg text-white mb-4">POST-<br/>PRODUCTION</h4>
              <p className="text-slate-400 text-xs leading-relaxed">World-class color grading & VFX. Hoàn thiện từng pixel theo chuẩn Hollywood.</p>
            </div>
          </div>
          
          <div className="bg-background-dark p-6 flex flex-col justify-between min-h-[350px] group hover:border-primary/50 border border-transparent transition-colors">
            <div>
              <span className="material-symbols-outlined text-primary text-3xl mb-6">lightbulb</span>
              <h4 className="cinematic-text text-lg text-white mb-4">CREATIVE<br/>CONCEPT</h4>
              <p className="text-slate-400 text-xs leading-relaxed">Storyboarding & strategic direction. Định hình thông điệp từ cốt lõi.</p>
            </div>
          </div>

          <div className="bg-background-dark p-6 flex flex-col justify-between min-h-[350px] group hover:border-primary/50 border border-transparent transition-colors">
            <div>
              <span className="material-symbols-outlined text-primary text-3xl mb-6">smart_toy</span>
              <h4 className="cinematic-text text-lg text-white mb-4">AI<br/>PRODUCTION</h4>
              <p className="text-slate-400 text-xs leading-relaxed">Ứng dụng AI tiên tiến trong sản xuất hình ảnh và video. Tối ưu chi phí và thời gian.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mvData = [
  { year: "2026", title: "7 ANH EM 2 (M/V)", artist: "Huỳnh James x Pjnboys ft Seaflows", id: "vl6DauYV-ik" },
  { year: "2026", title: "CUỐI TUẦN", artist: "HUỲNH JAMES x PJNBOYS", id: "h8LsKymLIEA" },
  { year: "2025", title: "KHÔNG THỬ SAO BIẾT", artist: "VIN X Đỗ Hiếu X Only C", id: "KU2rxK6_wvg" },
  { year: "2025", title: "ATLAS", artist: "jmancurly", id: "J_ElLtGjW2A" },
  { year: "2025", title: "WORK ON MYSELF", artist: "jmancurly", id: "NBHCJI38AYs" },
  { year: "2025", title: "LƯU ANH VÀO BỘ NHỚ", artist: "NGÔ TRÚC LINH FT. HUY TÍT", id: "Y6dBpy731ts" },
  { year: "2025", title: "CHÚNG TA CHỈ LÀ NHỮNG ĐỨA TRẺ", artist: "FREAKY ft. APJ", id: "phgI-TefJCw" },
  { year: "2025", title: "LOI EM DOWN", artist: "PJNBOYS - TRI", id: "ee-kpnyOOFk" },
  { year: "2025", title: "Don't Sleep", artist: "Pjnboys x TCONK x Minh Huy", id: "O1fmSkYYhIw" },
  { year: "2025", title: "WE ARE THE FIRE", artist: "Huỳnh James x Pjnboys", id: "hhTUoe-VUwQ" },
  { year: "2024", title: "TÔI LÀ DÂN 37", artist: "DUY MẠNH", id: "YgeiKEH9YGQ" },
  { year: "2024", title: "RIZZ MAN", artist: "jmancurly", id: "d07wPVpJA1U" },
  { year: "2024", title: "LỤM", artist: "Pjnboys, Huỳnh James, Hata, Lil Nhí, Tconk, Su", id: "KU2rxK6_wvg" },
  { year: "2024", title: "CẦU VỪA ĐỦ XÀI", artist: "Huỳnh James x Pjnboys", id: "8s-CAWqjsjo" },
  { year: "2024", title: "Ngày Tháng Năm (Live)", artist: "Whee!", id: "vs82XD_wNR0" },
  { year: "2024", title: "Tháng Năm Rực Rỡ", artist: "Doãn Hiếu", id: "_pltSfc5U7Q" },
  { year: "2024", title: "Chờ Chia Tay", artist: "ÁNH SÁNG AZA", id: "p9U0KjMySY0" },
  { year: "2024", title: "VỀ NHÀ THÔI", artist: "DOÃN HIẾU X KHÁNH X NGUYÊN JENDA", id: "q6he9HFsg60" },
  { year: "2024", title: "ĐAU ĐẾN NỖI SỢ YÊU", artist: "NGUYỄN MINH HOÀNG", id: "WHOzVn9bdkA" },
  { year: "2023", title: "Tết Nhà Là Tết Nhất", artist: "LG x Bùi Công Nam", id: "VPN10JXw9tc" },
  { year: "2023", title: "NGÀY THÁNG NĂM", artist: "WHEE!", id: "_xnYXvekGmw" },
  { year: "2023", title: "Tâm tư nơi đây", artist: "Nhanhmedia", id: "TVtojJFzW-Y" },
  { year: "2023", title: "VÔ TREE", artist: "KEYO", id: "dIhDbAI9lAY" },
  { year: "2022", title: "Muốn nói với em", artist: "Nhanhmedia", id: "5TlJtpytXtk" }
];

const MusicVideos = () => {
  const [activeVideoId, setActiveVideoId] = useState(mvData[0].id);

  const groupedMvData = mvData.reduce((acc, mv) => {
    if (!acc[mv.year]) acc[mv.year] = [];
    acc[mv.year].push(mv);
    return acc;
  }, {} as Record<string, typeof mvData>);

  const years = Object.keys(groupedMvData).sort((a, b) => parseInt(b) - parseInt(a));

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
                        <div className="text-[0.9rem] font-semibold truncate text-white">{mv.title}</div>
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
    "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516280440502-65f536af1270?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop"
  ];

  return (
    <section className="bg-background-dark py-24 px-6 lg:px-20 text-center border-b border-white/5 overflow-hidden" id="behind-the-scenes">
      <div className="mb-16">
        <p className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-4">Behind The Scenes</p>
        <h2 className="cinematic-text text-4xl md:text-5xl text-white mb-6">QUY TRÌNH KIẾN TẠO</h2>
        <div className="w-16 h-[2px] bg-primary mx-auto mb-6"></div>
        <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Cái nhìn cận cảnh về những nỗ lực thầm lặng phía sau ống kính để tạo nên những khung hình di sản.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative aspect-video overflow-hidden group">
              <img 
                src={src} 
                alt={`Behind the scenes ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
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
        const API_KEY = 'AIzaSyABhI26Jzccjo-6xBzC7GcRc3OlBEsfWFw';
        // Tìm kiếm video mới nhất từ từ khóa "nhanhmedia" (Bạn có thể thêm &channelId=YOUR_CHANNEL_ID để lấy chính xác video từ kênh)
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=nhanhmedia&part=snippet,id&order=date&maxResults=9&type=video`);
        const data = await response.json();
        
        if (data.items) {
          const formattedVideos = data.items.map((item: any) => ({
            title: item.snippet.title,
            subtitle: item.snippet.channelTitle,
            img: item.snippet.thumbnails.high.url,
            url: `https://www.youtube.com/watch?v=${item.id.videoId}`
          }));
          setYoutubeVideos(formattedVideos);
        }
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
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
          <h2 className="cinematic-text text-4xl md:text-5xl text-white italic">ORIGINAL <span className="text-primary">CONTENT</span></h2>
        </div>
        
        <div className="mb-16">
          <h3 className="text-white font-bold tracking-widest text-lg uppercase mb-8 flex items-center gap-2">
            <Youtube className="w-6 h-6 text-primary" /> YOUTUBE CHANNELS
          </h3>
          {loading ? (
            <div className="flex justify-center items-center h-48">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {youtubeVideos.length > 0 ? youtubeVideos.slice(0, visibleYoutubeCount).map((video, idx) => (
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
                )) : (
                  <div className="col-span-3 text-center text-slate-500 py-10">Không tìm thấy video nào.</div>
                )}
              </div>
              {youtubeVideos.length > visibleYoutubeCount && (
                <div className="mt-10 text-center">
                  <button 
                    onClick={handleLoadMoreYoutube}
                    className="border border-white/20 text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
                  >
                    Xem thêm
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        <div>
          <h3 className="text-white font-bold tracking-widest text-lg uppercase mb-8 flex items-center gap-2">
            <TikTokIcon className="w-6 h-6 text-primary" /> TIKTOK SHORTS
          </h3>
          <div className="flex justify-center">
            <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@nhanhmedia" data-unique-id="nhanhmedia" data-embed-type="creator" style={{ maxWidth: '780px', minWidth: '288px' }}>
              <section>
                <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@nhanhmedia?refer=creator_embed">@nhanhmedia</a>
              </section>
            </blockquote>
            <script async src="https://www.tiktok.com/embed.js"></script>
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
        <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">TRUST & QUALITY</span>
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

  return (
    <section className="py-16 bg-background-dark border-y border-white/5 overflow-hidden" id="trusted-by">
      <div className="text-center mb-10">
        <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs">TRUSTED BY LEADING BRANDS & ARTISTS</span>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
          {brands.map((brand, idx) => (
            <span key={idx} style={{ fontFamily: fonts[idx % fonts.length] }} className="text-white/50 text-3xl tracking-widest hover:text-white transition-colors cursor-default">
              {brand}
            </span>
          ))}
        </div>
        
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 py-4">
          {brands.map((brand, idx) => (
            <span key={`dup-${idx}`} style={{ fontFamily: fonts[idx % fonts.length] }} className="text-white/50 text-3xl tracking-widest hover:text-white transition-colors cursor-default">
              {brand}
            </span>
          ))}
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
          <p className="text-primary font-bold text-[0.8rem] tracking-[2px] uppercase mb-[10px]">Cinematic Works</p>
          <h2 className="text-[2.5rem] mb-[20px] font-extrabold cinematic-text">FILM & OST PROJECTS</h2>
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

const CTA = ({ onOpenContact }: { onOpenContact: () => void }) => (
  <section className="py-32 px-6 lg:px-20 bg-black text-center border-y border-white/5 relative overflow-hidden">
    {/* Background glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
    
    <div className="max-w-4xl mx-auto relative z-10">
      <h2 className="cinematic-text text-4xl md:text-6xl text-white mb-6 leading-tight font-black uppercase">
        ƯU ĐÃI 20% CHO 05 DỰ ÁN <br/>
        <span className="text-primary">ĐĂNG KÝ SỚM NHẤT TRONG THÁNG</span>
      </h2>
      <p className="text-white/80 text-lg md:text-2xl mb-12 max-w-3xl mx-auto font-light leading-relaxed">
        Đồng hành cùng Nhanhmedia để nhận ngay gói tư vấn chiến lược hình ảnh <span className="text-[#FFD700] font-bold uppercase tracking-wider bg-[#FFD700]/10 px-3 py-1 rounded-md border border-[#FFD700]/30 inline-block mt-2 md:mt-0">miễn phí</span>.
      </p>
      <button onClick={onOpenContact} className="bg-primary text-white px-12 py-6 cinematic-text text-2xl hover:bg-white hover:text-black transition-all italic font-bold tracking-widest rounded-md shadow-[0_0_30px_rgba(244,27,53,0.3)] hover:shadow-[0_0_50px_rgba(244,27,53,0.5)] transform hover:scale-105">
        [ NHẬN ƯU ĐÃI NGAY ]
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black py-20 px-6 lg:px-20 border-t border-white/5">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="md:col-span-2">
        <h2 className="cinematic-text text-3xl text-white mb-6 tracking-tighter">NHANH<span className="text-primary">MEDIA</span></h2>
        <p className="text-slate-400 max-w-sm mb-8">Production House & Visual Agency dẫn đầu tại Việt Nam. Chuyên kiến tạo các di sản thị giác thông qua ngôn ngữ điện ảnh đích thực.</p>
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
        <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-6">Địa Chỉ</h4>
        <ul className="space-y-3 text-slate-400 text-sm">
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-primary text-sm mt-1">location_on</span>
            <span>Quận 1, TP. Hồ Chí Minh, Việt Nam</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-primary text-sm mt-1">call</span>
            <span>(+84) 900 123 456</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-primary text-sm mt-1">mail</span>
            <span>contact@nhanhmedia.vn</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 uppercase tracking-widest">
      <p>© 2024 NHANHMEDIA PRODUCTION HOUSE. ALL RIGHTS RESERVED.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <a href="#">Chính sách bảo mật</a>
        <a href="#">Điều khoản sử dụng</a>
      </div>
    </div>
  </footer>
);

import VideoModal from './components/VideoModal';
import ContactModal from './components/ContactModal';

const Quote = () => (
  <section className="py-24 px-6 lg:px-20 bg-background-dark flex justify-center items-center text-center border-y border-white/5" id="about-us">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/3">
        <div className="relative aspect-[3/4] w-full max-w-[300px] mx-auto overflow-hidden rounded-sm border border-white/10">
          <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop" alt="Director Nhảnh Lê" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
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

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const handleOpenVideo = (url: string) => {
    setVideoUrl(url);
    setIsVideoModalOpen(true);
  };

  const handleOpenContact = () => {
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background-dark text-slate-100 font-display selection:bg-primary selection:text-white">
      <Navbar />
      <Hero onOpenVideo={handleOpenVideo} onOpenContact={handleOpenContact} />
      <TrustedBy />
      <Vision />
      <Services />
      <MusicVideos />
      <OriginalContent onOpenVideo={handleOpenVideo} />
      <FilmAndOSTProjects />
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
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}
