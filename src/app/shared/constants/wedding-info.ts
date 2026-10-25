import { ACTIVE_THEME } from '../themes/active-theme';

const COUPLE_HASHTAG = '#Jorge&Yina';

/**
 * Datos de esta boda: nombres, fechas, plazo, lugares y assets. Los textos de la página están en PAGE_COPY.
 */
export const WEDDING_INFO = {
  // Información de la pareja
  couple: {
    husbandName: 'Jorge',
    wifeName: 'Yina',
    fullName: 'Jorge & Yina',
    hashtag: COUPLE_HASHTAG,
  },

  // Confirmación de asistencia
  confirmation: {
    /** Fecha límite ISO para comparaciones (fin del día local) */
    deadline: '2026-11-20T23:59:59',
    /** Texto legible mostrado al invitado */
    deadlineLabel: '20 de noviembre de 2026',
  },

  // Fechas
  dates: {
    bannerDate: '12.09.2026',
    weddingDate: '2026-09-12T16:00:00',
  },

  // Cita/Frase
  quote: {
    text: 'Por encima de todo,\nvistanse de amor, que es el vinculo perfecto.',
    openingQuoteImage: 'assets/images/banner-home/comilla-apertura.svg',
    closingQuoteImage: 'assets/images/banner-home/comilla-cierre.svg',
  },

  // Eventos
  events: {
    ceremony: {
      title: 'Ceremonia',
      animationKey: 'rings' as const,
      place: 'Parroquia Cristo Sacerdote - Los Alpes',
      address: 'Tv. 73, Los Alpes, Cartagena de Indias, Bolívar',
      location: 'Tv.+73,+Los+Alpes,+Cartagena+de+Indias,+Bolívar',
      date: 'Sábado 12 de Septiembre - 16:00',
      animationPath: 'assets/animations/rings.json',
      mapsUrl:
        'https://www.google.com/maps/place/Parroquia+Cristo+Sacerdote+-+Los+Alpes/@10.3966981,-75.4813256,17z/data=!3m1!4b1!4m6!3m5!1s0x8ef625caadc0d713:0x5c81f0948bd2590e!8m2!3d10.3966981!4d-75.4813256!16s%2Fg%2F1ydddld33?entry=ttu&g_ep=EgoyMDI2MDIxNy4wIKXMDSoASAFQAw%3D%3D',
      calendarUrl:
        'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda+de+Jorge+y+Yina+(Ceremonia)&dates=20260912T210000Z/20260912T220000Z&details=¡Acompáñanos+a+celebrar+este+momento+especial!&location=Parroquia+Cristo+Sacerdote+-+Los+Alpes,+Tv.+73,+Los+Alpes,+Cartagena+de+Indias,+Bolívar&sf=true&output=xml',
    },
    party: {
      title: 'Fiesta',
      animationKey: 'party' as const,
      place: 'Los Alpes Social Hall',
      address: 'Tv. 74 #31C-59, Los Alpes, Cartagena de Indias, Bolívar',
      location: 'Tv.+74+%2331C-59,+Los+Alpes,+Cartagena+de+Indias,+Bolívar',
      date: 'Sábado 12 de Septiembre - 19:30',
      animationPath: 'assets/animations/party.json',
      mapsUrl:
        'https://www.google.com/maps/place/LOS+ALPES+Social+Hall/data=!4m2!3m1!1s0x0:0x63d05aebcd7f42ff?sa=X&ved=1t:2428&ictx=111',
      calendarUrl:
        'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda+de+Jorge+y+Yina+(Fiesta)&dates=20260913T003000Z/20260913T040000Z&details=¡Acompáñanos+a+celebrar+este+momento+especial!&location=Los+Alpes+Social+Hall,+Tv.+74+%2331C-59,+Los+Alpes,+Cartagena+de+Indias,+Bolívar&sf=true&output=xml',
    },
  },

  // Música
  music: {
    url: ACTIVE_THEME.assets.music,
    volume: 0.3,
    loop: true,
  },

  // Assets de video e imágenes
  assets: {
    bannerVideo: ACTIVE_THEME.assets.bannerVideo,
    bannerImage: ACTIVE_THEME.assets.bannerImage,
    backgroundImage: ACTIVE_THEME.assets.decorations.eventScheduleLines,
    instagramBackground: ACTIVE_THEME.assets.instagramBackground,
    // publicId: para NgOptimizedImage (srcset automático, q_auto, f_auto) | full: lightbox Fancybox
    portraits: [
      {
        publicId:
          'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
        full: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
      },
      {
        publicId:
          'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
        full: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80',
      },
      {
        publicId:
          'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80',
        full: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80',
      },
      {
        publicId:
          'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
        full: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80',
      },
      {
        publicId:
          'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80',
        full: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1200&q=80',
      },
      {
        publicId:
          'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
        full: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
      },
      {
        publicId:
          'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80',
        full: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1200&q=80',
      },
    ],
  },

  // Animaciones Lottie
  animations: {
    arrowContinue: ACTIVE_THEME.animations.arrowContinue,
    heartPulse: ACTIVE_THEME.animations.heartPulse,
    camera: ACTIVE_THEME.animations.camera,
    gift: ACTIVE_THEME.animations.gift,
    instagram: ACTIVE_THEME.animations.instagram,
    music: ACTIVE_THEME.animations.music,
    sounds: ACTIVE_THEME.animations.sounds,
    dress: ACTIVE_THEME.animations.dress,
    tips: ACTIVE_THEME.animations.tips,
    rings: ACTIVE_THEME.animations.rings,
    party: ACTIVE_THEME.animations.party,
  },
} as const;
