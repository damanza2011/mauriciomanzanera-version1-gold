/**
 * Mauricio Manzanera - Versión 1 (Dark Luxury Gold)
 * Official Landing Page Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Sticky Header Blur
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('bg-[#07090e]/95', 'backdrop-blur-md', 'shadow-2xl', 'border-b', 'border-amber-400/20');
      header.classList.remove('bg-transparent');
    } else {
      header.classList.remove('bg-[#07090e]/95', 'backdrop-blur-md', 'shadow-2xl', 'border-b', 'border-amber-400/20');
      header.classList.add('bg-transparent');
    }
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenu.classList.toggle('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Counters
  const counters = document.querySelectorAll('.counter');
  let countersTriggered = false;

  const countUp = (el) => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 1800;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.innerText = target;
        clearInterval(timer);
      } else {
        el.innerText = Math.floor(current);
      }
    }, stepTime);
  };

  const checkCounters = () => {
    const metricsSection = document.getElementById('metricas');
    if (!metricsSection || countersTriggered) return;

    const rect = metricsSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.85) {
      countersTriggered = true;
      counters.forEach(counter => countUp(counter));
    }
  };

  window.addEventListener('scroll', checkCounters);
  checkCounters();

  // Diagnostic Simulator
  const diagnosticData = {
    expansion: {
      title: "Expansión y Redes de Negocios Globales",
      subtitle: "Apertura en Europa, Medio Oriente y América Latina",
      timeframe: "3 a 6 meses",
      focus: "Arquitectura de alianzas bilaterales, estructuración comercial en mercados multilaterales y articulación con redes de alto nivel.",
      deliverable: "Roadmap de penetración de mercado, validación de contrapartes y acuerdos comerciales vinculantes.",
      roi: "Aceleración de entrada comercial de hasta 60% frente a procesos tradicionales.",
      tag: "Global Business Network"
    },
    conflict: {
      title: "Negociación Estratégica y Resolución de Conflictos",
      subtitle: "Mediación de Juntas Directivas, M&A y Acuerdos de Socios",
      timeframe: "4 a 12 semanas",
      focus: "Aplicación de Programación Neurolingüística (PNL) ejecutiva, desescalamiento de disputas patrimoniales y alineación de intereses directivos.",
      deliverable: "Pacto de accionistas renegociado, mediación vinculante y protocolo de gobernanza corporativa pacífica.",
      roi: "Preservación del patrimonio corporativo y desbloqueo de decisiones críticas.",
      tag: "Alta Mediación & PNL"
    },
    esg: {
      title: "Sostenibilidad, ESG e Innovación Disruptiva",
      subtitle: "Modelos de Negocio Responsables con Triple Impacto",
      timeframe: "2 a 4 meses",
      focus: "Integración de métricas de sostenibilidad ambiental y social en la cadena de valor sin comprometer la rentabilidad de la compañía.",
      deliverable: "Estrategia ESG auditable, planes de mitigación de impacto y posicionamiento de reputación institucional.",
      roi: "Atracción de capital institucional y acceso a fondos de inversión sostenibles.",
      tag: "Triple Impacto & ESG"
    },
    diagnosis: {
      title: "Diagnóstico Organizacional y Eficiencia Comercial",
      subtitle: "Reestructuración Estratégica y Planes a la Medida",
      timeframe: "30 a 60 días",
      focus: "Auditoría integral de la fuerza de ventas, cultura de liderazgo, cuellos de botella organizacionales y alineación con metas de expansión.",
      deliverable: "Matriz de diagnóstico integral, plan de acción ejecutivo y redefinición del modelo de comercialización.",
      roi: "Incremento comprobado de productividad comercial entre 25% y 40%.",
      tag: "Diagnóstico a la Medida"
    }
  };

  const challengeButtons = document.querySelectorAll('.challenge-btn');
  const diagTitle = document.getElementById('diag-title');
  const diagSubtitle = document.getElementById('diag-subtitle');
  const diagTimeframe = document.getElementById('diag-timeframe');
  const diagFocus = document.getElementById('diag-focus');
  const diagDeliverable = document.getElementById('diag-deliverable');
  const diagRoi = document.getElementById('diag-roi');
  const diagTag = document.getElementById('diag-tag');
  const diagModalTrigger = document.getElementById('diag-modal-trigger');

  challengeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      challengeButtons.forEach(b => {
        b.classList.remove('bg-amber-500/20', 'border-amber-400', 'text-amber-300');
        b.classList.add('bg-white/5', 'border-white/10', 'text-slate-300');
      });

      btn.classList.add('bg-amber-500/20', 'border-amber-400', 'text-amber-300');
      btn.classList.remove('bg-white/5', 'border-white/10', 'text-slate-300');

      const challengeKey = btn.getAttribute('data-challenge');
      const data = diagnosticData[challengeKey];

      if (data && diagTitle) {
        diagTitle.innerText = data.title;
        diagSubtitle.innerText = data.subtitle;
        diagTimeframe.innerText = data.timeframe;
        diagFocus.innerText = data.focus;
        diagDeliverable.innerText = data.deliverable;
        diagRoi.innerText = data.roi;
        diagTag.innerText = data.tag;
        
        if (diagModalTrigger) {
          diagModalTrigger.setAttribute('data-preset-subject', `Consulta sobre: ${data.title}`);
        }
      }
    });
  });

  // Modal Agendamiento
  const bookingModal = document.getElementById('booking-modal');
  const openModalBtns = document.querySelectorAll('.open-booking-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const consultationForm = document.getElementById('consultation-form');
  const subjectInput = document.getElementById('form-subject');

  const openModal = (defaultSubject = '') => {
    if (bookingModal) {
      bookingModal.classList.remove('hidden');
      bookingModal.classList.add('flex');
      document.body.style.overflow = 'hidden';
      if (subjectInput && defaultSubject) {
        subjectInput.value = defaultSubject;
      }
    }
  };

  const closeModal = () => {
    if (bookingModal) {
      bookingModal.classList.add('hidden');
      bookingModal.classList.remove('flex');
      document.body.style.overflow = '';
    }
  };

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const preset = btn.getAttribute('data-preset-subject') || '';
      openModal(preset);
    });
  });

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) closeModal();
    });
  }

  // Form submission -> WhatsApp Direct
  if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name')?.value || '';
      const email = document.getElementById('form-email')?.value || '';
      const org = document.getElementById('form-org')?.value || '';
      const subject = document.getElementById('form-subject')?.value || 'Consulta General';
      const message = document.getElementById('form-message')?.value || '';

      const fullMessage = `Hola Mauricio, te contacto a través de tu sitio web oficial (www.mauriciomanzanera.com).\n\n*Nombre:* ${name}\n*Empresa/Entidad:* ${org}\n*Email:* ${email}\n*Asunto:* ${subject}\n*Mensaje:* ${message}`;
      const encodedMsg = encodeURIComponent(fullMessage);
      const waUrl = `https://wa.me/573182664266?text=${encodedMsg}`;

      showToast("Solicitud procesada con éxito. Redirigiendo a WhatsApp directo...");
      
      setTimeout(() => {
        window.open(waUrl, '_blank');
        closeModal();
        consultationForm.reset();
      }, 700);
    });
  }

  // Toast
  function showToast(message) {
    let toast = document.getElementById('custom-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'custom-toast';
      toast.className = 'fixed bottom-6 left-6 z-50 bg-[#0d121f] text-slate-100 border border-amber-400/40 px-5 py-3 rounded-xl shadow-2xl flex items-center space-x-3 text-xs transition-all duration-300 transform translate-y-10 opacity-0';
      toast.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span><span id="toast-text"></span>`;
      document.body.appendChild(toast);
    }
    const toastText = document.getElementById('toast-text');
    if (toastText) toastText.innerText = message;

    toast.classList.remove('translate-y-10', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-10', 'opacity-0');
    }, 2800);
  }

  // Copy trigger
  document.querySelectorAll('.copy-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copiado: ${textToCopy}`);
        });
      }
    });
  });

  // Language toast indicator
  document.querySelectorAll('.lang-badge').forEach(pill => {
    pill.addEventListener('click', () => {
      const lang = pill.getAttribute('data-lang-name');
      showToast(`Competencia activa: ${lang} para acuerdos de alto nivel.`);
    });
  });

  // Chatbot "Habla con Mauro" (Texto & Voz)
  const chatbotTrigger = document.getElementById('chatbot-trigger-container');
  const openChatbotBtn = document.getElementById('open-chatbot-btn');
  const closeChatbotBtn = document.getElementById('close-chatbot-btn');
  const chatbotWindow = document.getElementById('chatbot-window');
  const chatMessagesContainer = document.getElementById('chat-messages-container');
  const chatbotForm = document.getElementById('chatbot-form');
  const chatInput = document.getElementById('chat-input');
  const chatMicBtn = document.getElementById('chat-mic-btn');
  const voiceRecordingIndicator = document.getElementById('voice-recording-indicator');
  const cancelVoiceBtn = document.getElementById('cancel-voice-btn');
  const toggleVoiceBtn = document.getElementById('toggle-voice-btn');
  const voiceIconOn = document.getElementById('voice-icon-on');
  const voiceIconOff = document.getElementById('voice-icon-off');

  let isVoiceOutputEnabled = true;
  let recognition = null;
  let isRecording = false;

  if (openChatbotBtn && chatbotWindow) {
    openChatbotBtn.addEventListener('click', () => {
      chatbotWindow.classList.remove('hidden');
      chatbotWindow.classList.add('flex');
      if (chatbotTrigger) chatbotTrigger.classList.add('hidden');
      if (chatInput) chatInput.focus();
    });
  }

  if (closeChatbotBtn && chatbotWindow) {
    closeChatbotBtn.addEventListener('click', () => {
      chatbotWindow.classList.add('hidden');
      chatbotWindow.classList.remove('flex');
      if (chatbotTrigger) chatbotTrigger.classList.remove('hidden');
      stopSpeechRecognition();
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    });
  }

  if (toggleVoiceBtn) {
    toggleVoiceBtn.addEventListener('click', () => {
      isVoiceOutputEnabled = !isVoiceOutputEnabled;
      if (voiceIconOn && voiceIconOff) {
        if (isVoiceOutputEnabled) {
          voiceIconOn.classList.remove('hidden');
          voiceIconOff.classList.add('hidden');
          showToast("Voz de Mauro: Activada");
        } else {
          voiceIconOn.classList.add('hidden');
          voiceIconOff.classList.remove('hidden');
          if (window.speechSynthesis) window.speechSynthesis.cancel();
          showToast("Voz de Mauro: Silenciada");
        }
      }
    });
  }

  const speakText = (text) => {
    if (!isVoiceOutputEnabled || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const cleanText = text.replace(/<[^>]*>?/gm, '').replace(/[*_#]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'es-ES';
    utterance.rate = 1.0;
    utterance.pitch = 0.95;
    window.speechSynthesis.speak(utterance);
  };

  const appendMessage = (sender, text, canSpeak = false) => {
    const isUser = sender === 'user';
    const msgDiv = document.createElement('div');
    msgDiv.className = isUser ? 'flex items-start justify-end space-x-2' : 'flex items-start space-x-2.5';

    if (isUser) {
      msgDiv.innerHTML = `
        <div class="bg-amber-500/20 rounded-2xl rounded-tr-sm p-3 border border-amber-400/30 text-amber-100 max-w-[85%] shadow-sm">
          <p>${text}</p>
          <span class="block text-[9px] text-amber-300/60 text-right mt-1 font-mono-tag">Tú</span>
        </div>
      `;
    } else {
      msgDiv.innerHTML = `
        <div class="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 font-bold text-[10px] shrink-0 mt-0.5">
          MM
        </div>
        <div class="bg-white/10 rounded-2xl rounded-tl-sm p-3 border border-white/10 text-slate-200 max-w-[85%] space-y-1.5 shadow-sm">
          <p>${text}</p>
          <div class="pt-1 flex items-center justify-between text-[10px] text-amber-300/80 font-mono-tag">
            <span>Mauro AI</span>
            <button class="speak-msg-btn flex items-center space-x-1 hover:text-amber-300" title="Escuchar">
              <i data-lucide="volume-2" class="w-3 h-3"></i>
              <span>Escuchar</span>
            </button>
          </div>
        </div>
      `;
    }

    chatMessagesContainer.appendChild(msgDiv);
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    if (window.lucide) window.lucide.createIcons();

    if (!isUser) {
      const speakBtn = msgDiv.querySelector('.speak-msg-btn');
      if (speakBtn) speakBtn.addEventListener('click', () => speakText(text));
      if (canSpeak) speakText(text);
    }
  };

  document.querySelectorAll('.speak-msg-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const msg = btn.getAttribute('data-msg') || btn.closest('.bg-white\\/10').querySelector('p').innerText;
      speakText(msg);
    });
  });

  const generateMauroResponse = (query) => {
    const q = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if (q.includes('experiencia') || q.includes('trayectoria') || q.includes('quien es') || q.includes('perfil')) {
      return "Cuento con cerca de dos décadas de trayectoria directiva internacional. Me desempeño como Consultor de Soluciones y Presidente de Red Global de Negocios S.A.S. Previamente fui Vicepresidente de Ventas y Marketing para I.B.R. Ltda. en Londres y Medellín.";
    }
    if (q.includes('pnl') || q.includes('conflicto') || q.includes('mediacion') || q.includes('negociacion') || q.includes('socios')) {
      return "Integro herramientas de Programación Neurolingüística (PNL) a la negociación de alta dirección para mapear los patrones de pensamiento, neutralizar fricciones emocionales entre accionistas y construir acuerdos comerciales sostenibles.";
    }
    if (q.includes('esg') || q.includes('sostenib') || q.includes('ambiente')) {
      return "La sostenibilidad corporativa y los criterios ESG no son gastos; son el motor principal para acceder a capital internacional de bajo costo y blindar la licencia social de las organizaciones.";
    }
    if (q.includes('estudio') || q.includes('javeriana') || q.includes('andes') || q.includes('london')) {
      return "Soy Administrador de Empresas de la Pontificia Universidad Javeriana, con estudios en Ingeniería Industrial en la Universidad de los Andes y Contabilidad y Finanzas en el City College of London, Reino Unido.";
    }
    if (q.includes('agendar') || q.includes('cita') || q.includes('reunion') || q.includes('contacto') || q.includes('telefono') || q.includes('whatsapp')) {
      setTimeout(() => openModal("Solicitud coordinada a través de Mauro AI"), 700);
      return "Con gusto. Puedes contactarme directamente a mi línea y WhatsApp (+57 318 266 4266) o por LinkedIn. He abierto además el formulario de agendamiento en tu pantalla para coordinar la sesión.";
    }

    return "Gracias por tu consulta. Mi enfoque se centra en destrabar negociaciones críticas, diseñar soluciones comerciales a medida y acelerar la sostenibilidad corporativa. ¿Deseas agendar una llamada directa?";
  };

  const handleChatSubmit = (text) => {
    if (!text || text.trim() === '') return;
    const userText = text.trim();
    if (chatInput) chatInput.value = '';
    appendMessage('user', userText);

    setTimeout(() => {
      const response = generateMauroResponse(userText);
      appendMessage('mauro', response, true);
    }, 400);
  };

  if (chatbotForm) {
    chatbotForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleChatSubmit(chatInput.value);
    });
  }

  document.querySelectorAll('.chat-quick-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const prompt = chip.getAttribute('data-prompt');
      if (prompt) handleChatSubmit(prompt);
    });
  });

  // Speech Recognition
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const stopSpeechRecognition = () => {
    if (recognition && isRecording) {
      recognition.stop();
      isRecording = false;
      if (voiceRecordingIndicator) voiceRecordingIndicator.classList.add('hidden');
      if (chatMicBtn) chatMicBtn.classList.remove('bg-red-500/30', 'text-red-400');
    }
  };

  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.lang = 'es-CO';
    recognition.continuous = false;

    recognition.onstart = () => {
      isRecording = true;
      if (voiceRecordingIndicator) voiceRecordingIndicator.classList.remove('hidden');
      if (chatMicBtn) chatMicBtn.classList.add('bg-red-500/30', 'text-red-400');
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      stopSpeechRecognition();
      if (chatInput) chatInput.value = transcript;
      handleChatSubmit(transcript);
    };

    recognition.onerror = () => stopSpeechRecognition();
    recognition.onend = () => stopSpeechRecognition();

    if (chatMicBtn) {
      chatMicBtn.addEventListener('click', () => {
        if (!isRecording) {
          try { recognition.start(); } catch (err) { recognition.stop(); }
        } else {
          stopSpeechRecognition();
        }
      });
    }

    if (cancelVoiceBtn) cancelVoiceBtn.addEventListener('click', stopSpeechRecognition);
  }
});
