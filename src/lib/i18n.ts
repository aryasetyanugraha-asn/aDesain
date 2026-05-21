import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Dummy translations
const resources = {
  en: {
    translation: {
      hero: {
        title: "Innovating the Digital Future with aDesain",
        subtitle: "We are a trusted agency with experience since 2007. We craft apps, AI solutions, media, and more for governments, international corporations, and SMEs.",
        cta1: "Try Demo Dashboard",
        cta2: "Contact Us"
      },
      about: {
        title: "About Us",
        description: "Established in 2007, aDesain has been at the forefront of digital innovation. We have successfully collaborated with various agencies to deliver top-tier digital products."
      },
      services: {
        title: "Our Services",
        appDev: "Application Development",
        ai: "AI Solutions",
        media: "Media & Creativity",
        digital: "Digital Needs"
      },
      clients: {
        title: "Trusted By",
        gov: "Government",
        corp: "International Corps",
        sme: "SMEs",
        agencies: "Partner Agencies"
      },
      contact: {
        title: "Get in Touch",
        email: "Email Us",
        wa1: "WhatsApp (Primary)",
        wa2: "WhatsApp (Secondary)"
      },
      nav: {
        login: "Client Login"
      }
    }
  },
  id: {
    translation: {
      hero: {
        title: "Menginovasi Masa Depan Digital bersama aDesain",
        subtitle: "Kami adalah agensi terpercaya dengan pengalaman sejak 2007. Kami membuat aplikasi, solusi AI, media, dan banyak lagi untuk pemerintah, perusahaan internasional, dan UMKM.",
        cta1: "Coba Demo Dashboard",
        cta2: "Hubungi Kami"
      },
      about: {
        title: "Tentang Kami",
        description: "Didirikan pada tahun 2007, aDesain telah berada di garis depan inovasi digital. Kami telah sukses berkolaborasi dengan berbagai agensi untuk memberikan produk digital terbaik."
      },
      services: {
        title: "Layanan Kami",
        appDev: "Pengembangan Aplikasi",
        ai: "Solusi AI",
        media: "Media & Kreativitas",
        digital: "Kebutuhan Digital"
      },
      clients: {
        title: "Dipercaya Oleh",
        gov: "Pemerintahan",
        corp: "Perusahaan Internasional",
        sme: "UMKM",
        agencies: "Agensi Mitra"
      },
      contact: {
        title: "Hubungi Kami",
        email: "Email Kami",
        wa1: "WhatsApp (Utama)",
        wa2: "WhatsApp (Cadangan)"
      },
      nav: {
        login: "Login Klien"
      }
    }
  },
  ar: {
    translation: {
      hero: {
        title: "ابتكار المستقبل الرقمي مع aDesain",
        subtitle: "نحن وكالة موثوقة بخبرة تمتد منذ عام 2007. نصنع التطبيقات، حلول الذكاء الاصطناعي، الوسائط، والمزيد للحكومات، الشركات الدولية، والشركات الصغيرة والمتوسطة.",
        cta1: "جرب لوحة التحكم التجريبية",
        cta2: "اتصل بنا"
      },
      about: {
        title: "معلومات عنا",
        description: "تأسست aDesain في عام 2007، وكانت في طليعة الابتكار الرقمي. لقد نجحنا في التعاون مع وكالات مختلفة لتقديم أفضل المنتجات الرقمية."
      },
      services: {
        title: "خدماتنا",
        appDev: "تطوير التطبيقات",
        ai: "حلول الذكاء الاصطناعي",
        media: "الوسائط والإبداع",
        digital: "الاحتياجات الرقمية"
      },
      clients: {
        title: "موثوق به من قبل",
        gov: "حكومة",
        corp: "الشركات الدولية",
        sme: "الشركات الصغيرة والمتوسطة",
        agencies: "الوكالات الشريكة"
      },
      contact: {
        title: "ابقى على تواصل",
        email: "ارسل لنا عبر البريد الإلكتروني",
        wa1: "واتساب (الرئيسي)",
        wa2: "واتساب (ثانوي)"
      },
      nav: {
        login: "تسجيل دخول العميل"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
