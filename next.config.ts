import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    const permanent = true;
    return [
      { source: "/gelecek-geldi", destination: "/tr/infrastructure/manifesto", permanent },
      { source: "/boga-ruhu", destination: "/tr/about/bull-spirit", permanent },
      { source: "/gizlilik-sir-ogretisi", destination: "/tr/about/secrecy-doctrine", permanent },
      { source: "/gizlilik-ve-sir-ogretisi", destination: "/tr/about/secrecy-doctrine", permanent },
      { source: "/hizmet-fiyatlandirma-denklemi", destination: "/tr/about/pricing-equation", permanent },
      { source: "/yeniden-kesfetmek", destination: "/tr/about/team", permanent },
      { source: "/musterilerimiz", destination: "/tr/about/clients", permanent },
      { source: "/teknoloji-sirketi", destination: "/tr/operasyon-4-0/business-os", permanent },
      { source: "/ar-ge", destination: "/tr/operasyon-4-0/business-os", permanent },
      { source: "/hedef", destination: "/tr", permanent },
      { source: "/kurumsallik", destination: "/tr/about/bull-spirit", permanent },
      { source: "/ozgunluk", destination: "/tr/about/bull-spirit", permanent },
      { source: "/snp-akademi", destination: "/tr/grow/build-your-career", permanent },
      { source: "/mesleki-egitimleri", destination: "/tr/grow/build-your-career", permanent },
      { source: "/teknoloji-egitimleri", destination: "/tr/grow/build-your-career", permanent },
      { source: "/robotics-egitimleri", destination: "/tr/grow/build-your-career", permanent },
      { source: "/virtual-muhasebe", destination: "/tr/services/digital", permanent },
      { source: "/virtual-ik", destination: "/tr/services/digital", permanent },
      { source: "/rpa", destination: "/tr/services/digital", permanent },
      { source: "/robotics", destination: "/tr/services/digital", permanent },
      { source: "/chazey", destination: "/tr/services/digital", permanent },
      { source: "/snp-flow-ekol", destination: "/tr/services/digital", permanent },
      { source: "/bi-raporlama", destination: "/tr/services/digital", permanent },
      { source: "/teknoloji-harcama-denklemi", destination: "/tr/about/pricing-equation", permanent },
      { source: "/shared-services", destination: "/tr/services/advanced", permanent },
      { source: "/dis-ticaret", destination: "/tr/services/advanced", permanent },
      { source: "/holding", destination: "/tr/services/advanced", permanent },
      { source: "/temel-sirket-hizmetleri", destination: "/tr/services/essentials", permanent },
      { source: "/konforlu-sirket-hizmetleri", destination: "/tr/services/advanced", permanent },
      { source: "/dinamik-sirket-hizmetleri", destination: "/tr/services/digital", permanent },
      { source: "/outsource-muhasebe", destination: "/tr/services/essentials", permanent },
      { source: "/vergi", destination: "/tr/services/essentials", permanent },
      { source: "/kdv-iade", destination: "/tr/services/essentials", permanent },
      { source: "/is-hukuku", destination: "/tr/services/essentials", permanent },
      { source: "/finans", destination: "/tr/services/essentials", permanent },
      { source: "/it", destination: "/tr/services/essentials", permanent },
      { source: "/danismanlik", destination: "/tr/services/essentials", permanent },
    ];
  },
};

export default nextConfig;
