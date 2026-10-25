import { WEDDING_INFO } from './wedding-info';

/**
 * Textos que arman la página. Los datos de la boda viven en WEDDING_INFO.
 */
export const PAGE_COPY = {
  events: {
      heading: 'Eventos',
      day: 'Día',
      schedule: 'Agendar',
      place: 'Lugar',
      address: 'Dirección',
      directions: '¿Cómo llegar?',
    },
  messages: {
    fallbackInviteeName: 'Invitado',
    loadError: 'Error al cargar los datos de la invitación',
    partialQuotas: 'Solo estás registrando {count} de {maximum} cupos.',
    toasts: {
      missingInvitation: 'Error: No se encontró la información de la invitación',
      declined: 'Lamentamos que no puedas asistir. ¡Esperamos verte en otra ocasión!',
      declineFailed: 'Error al rechazar la invitación. Por favor, intenta nuevamente.',
      accepted: '¡Felicidades! Has sido agendado',
      acceptFailed: 'Error al enviar la confirmación. Por favor, intenta nuevamente.',
    },
  },
  gifts: {
      title: 'Lluvia de sobres',
      description:
        'Sus buenos deseos son suficientes para nosotros y en caso de querer hacernos un regalito, este puede ser en efectivo',
    },
    instagram: {
      title: 'Compartimos este día junto a vos',
      description: 'Compartí tus fotos y videos de ese hermoso día',
      buttonText: 'Ver en Instagram',
      hashtag: WEDDING_INFO.couple.hashtag,
      url: 'https://www.instagram.com/explore/tags/Jorge%26Yina/',
    },
    modals: {
      dressCode: {
        title: 'Elegante formal',
        iconAlt: 'Vestuario',
        description:
          'Queremos que cada uno de ustedes se sienta especial y luzca espectacular en nuestro dia tan especial.',
      },
      tipsAndNotes: {
        title: 'Tips y Notas',
        iconAlt: 'Tips y Notas',
        description:
          'Se reserva el color blanco (en todas sus tonalidades) para el vestido de novia. No olvides confirmar tu asistencia.',
      },
    },
    instructions: {
      title: 'Fiesta',
      description: 'Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en cuenta.',
      cards: [
        {
          id: 'music',
          title: 'Música',
          description: 'Una orientación para<br />tu vestuario',
          animationKey: 'sounds',
          label: 'Sugerir canción',
        },
        {
          id: 'dress',
          title: 'Vestuario',
          description: 'Una orientación para<br />tu vestuario',
          animationKey: 'dress',
          label: 'Ver más',
        },
        {
          id: 'tips',
          title: 'Tips y Notas',
          description: 'Una orientación para<br />tu vestuario',
          animationKey: 'tips',
          label: 'Información',
        },
      ],
    },
    welcome: {
      title: 'Bienvenidos a la invitación de',
      subtitle: 'La música de fondo es parte de la experiencia',
      enterWithMusic: 'INGRESAR CON MÚSICA',
      enterWithoutMusic: 'INGRESAR SIN MÚSICA',
    },
    countdown: {
      title: 'Falta',
      days: 'días',
      hours: 'hs',
      minutes: 'min',
      seconds: 'seg',
    },
    portraits: {
      title: 'Retratos de Nuestro Amor',
      description: 'Un minuto, un segundo, un instante que queda en la eternidad',
      caption: 'Imagen ampliada',
      alt: 'Retrato {index} de {total}',
    },
    banner: {
      videoLabel:
        'Video decorativo de fondo sin audio. Este video es puramente visual y no contiene información esencial.',
      videoFallback:
        'Tu navegador no soporta la reproducción de video HTML5. Este video es decorativo, no contiene audio, y no afecta la funcionalidad ni la accesibilidad del sitio. El contenido principal está disponible en el resto de la página.',
    },
    guide: {
      title: '¡No olvides confirmar tu asistencia!',
      body: 'Tu confirmación nos ayuda a organizar todo. Solo te tomará un momento.',
      later: 'Más tarde',
    },
    rsvp: {
      confirmPresence: 'Confírmanos tu presencia',
      ceremony: 'Confirmar asistencia a ceremonia',
      suggestSong: 'Sugerir canción',
      scheduleParty: 'Agendar Fiesta',
      scheduleCeremony: 'Agendar Ceremonia',
      question: '¿Asistes a nuestra boda?',
      accept: '¡Sí! Confirmo',
      decline: 'No puedo :(',
      loading: 'Cargando...',
      declineTitle: '¿Estás seguro de no asistir?',
      declineMessage:
        'Al confirmar que no puedes asistir, ya no podrás modificar esta decisión después.',
      declineSecondary: '¿Deseas continuar?',
      declineConfirm: 'Sí, confirmo que no asistiré',
      cancel: 'Cancelar',
      partialTitle: '¿Confirmar registro?',
      partialSecondary: 'No podrás modificar esto después. ¿Deseas continuar?',
      partialConfirm: 'Sí, confirmar',
      welcome: '¡Bienvenido {name}!',
      companionsPrompt: 'Ingresa tus acompañantes',
      companionPlaceholder: 'Nombre del acompañante',
      save: 'Guardar',
      guestList: 'Lista de acompañantes ({count}/{maximum}):',
      maximumGuests: 'Máximo {maximum} acompañantes.',
      assigned: 'Asignado',
      remove: 'Eliminar',
      send: 'Enviar',
      sent: 'Registro enviado correctamente.',
    },
    accepted: {
      title: '¡Ya confirmaste tu asistencia!',
      body: 'Estamos emocionados de celebrar contigo este día especial.',
      guests: 'Invitados',
    },
    declined: {
      title: 'Has confirmado que no asistirás',
      body: 'Lamentamos que no puedas acompañarnos. ¡Esperamos verte en otra ocasión especial!',
    },
    error: {
      title: 'Oops, algo salió mal',
      body: 'No pudimos cargar tu información de invitación en este momento.',
      hint: 'Por favor, intenta recargar la página o contacta con el organizador del evento.',
    },
    expired: {
      eyebrow: 'Invitación de boda',
      greeting: 'Hola,',
      introBefore: 'Tienes una invitación pendiente para la boda de',
      introAfter: 'Sin embargo, hay algo importante que debes saber.',
      meaningTitle: '¿Qué significa esto?',
      points: [
        {
          before: 'Tu lugar en la lista de invitados ',
          emphasis: 'ya no está reservado',
          after: ' para esta celebración.',
        },
        {
          before:
            'Los novios han confirmado los arreglos finales con base en los RSVPs recibidos a tiempo.',
          emphasis: '',
          after: '',
        },
        {
          before: 'Si crees que hay un error, ',
          emphasis: 'comunícate directamente',
          after: ' con los novios.',
        },
      ],
      footnote:
        'Puedes seguir viendo la invitación como recuerdo, pero recuerda que ya no estás confirmado para asistir. Si tienes dudas, contacta a los novios.',
      bannerTitle: 'La fecha límite para confirmar tu asistencia ya pasó',
      bannerBefore: 'El plazo para aceptar esta invitación venció el',
      bannerAfter: 'Ya no estás registrado como asistente confirmado.',
      status: 'No confirmado',
    },
    invitationCard: {
      open: 'Ver la invitación de todos modos',
      readOnly: 'Solo lectura — ya no estás confirmado para asistir',
      newTab: 'Abrir en nueva pestaña',
      frameTitle: 'Invitación de boda',
    },
    footer: {
      credit: 'Desarrollado por AdCarryStudios 🚀',
    },
    close: 'Cerrar',
} as const;
