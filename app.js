/**
 * ==========================================================================
 * COMPUTER ARCHITECTURE — INTERACTIVE APPLICATION & SIMULATOR ENGINE
 * ==========================================================================
 */

(function () {
  const STORAGE_KEY_DONE = "comp_arch_completed_parts_v1";
  const STORAGE_KEY_THEME = "comp_arch_theme_v2";
  const STORAGE_KEY_FONT = "comp_arch_font_scale_v1";

  let state = {
    searchQuery: "",
    activeChapterId: null,
    activePartId: null,
    completedParts: loadCompletedParts(),
    fontScale: parseFloat(localStorage.getItem(STORAGE_KEY_FONT) || "1"),
    focusSidebarHidden: false,
    quizAnswers: {},
    simTimers: {}
  };

  /* Simulator Step Explanations Dictionary */
  const SIM_DESCRIPTIONS = {
    "sim-arch-org": [
      {
        tag: "STEP 1 / 3",
        text: "الطبقة الأولى (Architecture): المبرمج بيكتب الكود مرة واحدة بس بناءً على كتالوج الأوامر (ISA) وحجم البتات (32-bit) من غير ما يشغل باله بالأسلاك تحت الكبوت."
      },
      {
        tag: "STEP 2 / 3",
        text: "تحت الكبوت — Organization A: جهاز اقتصادي تردده 2 GHz وراماته DRAM، بينفذ نفس الكود بالظبط عن طريق إشارات التحكم الداخلية."
      },
      {
        tag: "STEP 3 / 3",
        text: "عائلة IBM 370 — Organization B: جهاز فائق السرعة تردده 4 GHz بأسلاك أعرض، بيشغل نفس برنامجك القديم طيارة فوراً بدون تعديل سطر كود واحد (Protecting software investment)!"
      }
    ],
    "sim-4-functions": [
      {
        tag: "FUNCTION 1 / 4",
        text: "1. وظيفة التحكم (Control): العقل الموجه اللي بيطلع إشارات تحكم كهربائية (باللون الذهبي) عشان يدير ويوجه التلات وظائف التانيين."
      },
      {
        tag: "FUNCTION 2 / 4",
        text: "2. وظيفة نقل البيانات (Data Movement): حركة الداتا بين الكمبيوتر والعالم الخارجي سواء عبر أجهزة الـ I/O (شاشة/ماوس) أو عبر الشبكات والإنترنت (Communications)."
      },
      {
        tag: "FUNCTION 3 / 4",
        text: "3. وظيفة تخزين البيانات (Data Storage): حفظ الداتا داخل وحدة التخزين (مؤقتاً في الرامات أو دائماً في الهارد) تحت إشراف إشارات التحكم."
      },
      {
        tag: "FUNCTION 4 / 4",
        text: "4. وظيفة معالجة البيانات (Data Processing): سحب الداتا من وحدة التخزين إلى وحدة المعالجة لإجراء الحسابات والعمليات المنطقية عليها ثم إرجاع النتيجة."
      }
    ],
    "sim-top-structure": [
      {
        tag: "BUS CYCLE 1 / 3",
        text: "خطوة 1 (طلب الأمر): البروسيسور (CPU) عاوز ينفذ أمر، فيبعت عنوان الأمر عبر ناقل النظام (System Bus) إلى الرامات (Main Memory)."
      },
      {
        tag: "BUS CYCLE 2 / 3",
        text: "خطوة 2 (جلب الأمر والداتا): الرامات (Main Memory) تطلع الأمر والداتا المطلوبة وتبعتهم عبر الـ System Bus إلى الـ CPU عشان يعالجهم."
      },
      {
        tag: "BUS CYCLE 3 / 3",
        text: "خطوة 3 (إخراج النتيجة): بعد ما الـ CPU يخلص معالجة، يبعت النتيجة على الـ System Bus لوحدة الإدخال والإخراج (I/O) عشان تتعرض على الشاشة في العالم الخارجي."
      }
    ],
    "sim-cpu-internal": [
      {
        tag: "CPU NANO-STEP 1 / 3",
        text: "خطوة 1 (التخزين اللحظي وفك الشفرة): الأمر والأرقام بيدخلوا يقعدوا في سجل فائق السرعة (Register) جوه المعالج، ووحدة التحكم (CU) تقرأ الأمر عبر الـ Internal CPU Bus."
      },
      {
        tag: "CPU NANO-STEP 2 / 3",
        text: "خطوة 2 (إصدار أمر التشغيل): وحدة التحكم (CU) تفك شفرة الأمر وتبعت إشارة تحكم عبر الناقل الداخلي للـ ALU تقولها: 'يا ALU اجمعي الرقمين دول!'"
      },
      {
        tag: "CPU NANO-STEP 3 / 3",
        text: "خطوة 3 (التنفيذ في نانو ثانية): مصنع الحسابات (ALU) يسحب الرقمين من الـ Registers عبر الناقل الداخلي، يجمعهم، ويرجع النتيجة فوراً في Register تاني!"
      }
    ],
    "sim-multicore-cache": [
      {
        tag: "MULTICORE 1 / 3",
        text: "1. تشغيل الأنوية بالتوازي (Parallel Cores): كل Core جواها CU و ALU و Registers خاصة بيها، وشغالين مع بعض في نفس الوقت على شريحة سيليكون واحدة (Single Chip)!"
      },
      {
        tag: "CACHE L1/L2 2 / 3",
        text: "2. كاش L1 و L2 الخاصة بكل نواة: أسرع وأقرب ذاكرة للنواة (1 نانو ثانية)، بتخلي البروسيسور يلاقي الأوامر المتكررة فوراً بدون انتظار الرامات البطيئة."
      },
      {
        tag: "SHARED L3 & RAM 3 / 3",
        text: "3. كاش L3 المشتركة والرامات: الـ L3 Cache مشتركة (Shared) بين كل الأنوية على الشريحة، وبتنسخ الداتا من الرامات الخارجية (DRAM) عبر الـ System Bus."
      }
    ],
    "sim-motherboard": [
      {
        tag: "MOTHERBOARD 1 / 3",
        text: "1. Processor Sockets: في السيرفرات (زي Intel Quad-Core Xeon سلايد 13) اللوحة الأم بيكون فيها 2 سوكت لبروسيسورين، كل واحد 4 أنوية = 8 أنوية حقيقية شغالة مع بعض!"
      },
      {
        tag: "DIMM SLOTS 2 / 3",
        text: "2. Main Memory Chips (DIMM Slots): الفتحات اللي بتركب فيها مساطر الرامات (DRAM) اللي بتشيل نظام التشغيل والبرامج الشغالة حالياً."
      },
      {
        tag: "PCB TRACES 3 / 3",
        text: "3. PCB Copper Traces & I/O Chipset: خطوط النحاس المطبوعة في قلب اللوحة الخضرا هي الأسلاك الحقيقية للـ System Bus اللي بتربط المعالج بالرامات وشيبات الـ I/O."
      }
    ]
  };

  function loadCompletedParts() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_DONE);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveCompletedParts() {
    try {
      localStorage.setItem(STORAGE_KEY_DONE, JSON.stringify(state.completedParts));
    } catch (e) {}
  }

  /* --------------------------------------------------------------------------
     INTERACTIVE SVG HARDWARE SIMULATORS ENGINE
     -------------------------------------------------------------------------- */
  function clearAllSimTimers() {
    Object.keys(state.simTimers).forEach((k) => {
      clearInterval(state.simTimers[k]);
      delete state.simTimers[k];
    });
  }

  function setSimStep(simCard, stepIndex) {
    const simId = simCard.getAttribute("data-sim");
    const stepStr = String(stepIndex);

    simCard.querySelectorAll("[data-sim-step]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-sim-step") === stepStr);
    });

    simCard.querySelectorAll("[data-node-step]").forEach((node) => {
      const steps = node.getAttribute("data-node-step").split(",");
      node.classList.toggle("active-node", steps.includes(stepStr));
    });

    simCard.querySelectorAll("[data-wire-step]").forEach((wire) => {
      const steps = wire.getAttribute("data-wire-step").split(",");
      wire.classList.toggle("active-flow", steps.includes(stepStr));
    });

    simCard.querySelectorAll("[data-packet-step]").forEach((dot) => {
      const steps = dot.getAttribute("data-packet-step").split(",");
      dot.classList.toggle("moving", steps.includes(stepStr));
    });

    const descList = SIM_DESCRIPTIONS[simId];
    if (descList && descList[stepIndex]) {
      const statusEl = simCard.querySelector("[data-sim-status]");
      const tagEl = simCard.querySelector("[data-sim-tag]");
      if (statusEl) statusEl.textContent = descList[stepIndex].text;
      if (tagEl) tagEl.textContent = descList[stepIndex].tag;
    }

    simCard.setAttribute("data-current-step", stepStr);
  }

  function initSimulators() {
    clearAllSimTimers();

    document.querySelectorAll(".sim-card[data-sim]").forEach((simCard) => {
      const simId = simCard.getAttribute("data-sim");
      const stepBtns = simCard.querySelectorAll("[data-sim-step]");
      const totalSteps = stepBtns.length;
      if (totalSteps === 0) return;

      setSimStep(simCard, 0);

      stepBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          stopAutoplay(simCard, simId);
          const idx = parseInt(btn.getAttribute("data-sim-step"), 10);
          setSimStep(simCard, idx);
        });
      });

      simCard.querySelectorAll("[data-click-step]").forEach((box) => {
        box.addEventListener("click", () => {
          stopAutoplay(simCard, simId);
          const idx = parseInt(box.getAttribute("data-click-step"), 10);
          setSimStep(simCard, idx);
        });
      });

      const autoBtn = simCard.querySelector("[data-sim-autoplay]");
      if (autoBtn) {
        autoBtn.addEventListener("click", () => {
          if (state.simTimers[simId]) {
            stopAutoplay(simCard, simId);
          } else {
            autoBtn.classList.add("playing");
            autoBtn.textContent = "⏸ إيقاف التشغيل التلقائي";
            let current = parseInt(simCard.getAttribute("data-current-step") || "0", 10);
            current = (current + 1) % totalSteps;
            setSimStep(simCard, current);

            state.simTimers[simId] = setInterval(() => {
              let next = parseInt(simCard.getAttribute("data-current-step") || "0", 10);
              next = (next + 1) % totalSteps;
              setSimStep(simCard, next);
            }, 2800);
          }
        });
      }
    });
  }

  function stopAutoplay(simCard, simId) {
    if (state.simTimers[simId]) {
      clearInterval(state.simTimers[simId]);
      delete state.simTimers[simId];
    }
    const autoBtn = simCard.querySelector("[data-sim-autoplay]");
    if (autoBtn) {
      autoBtn.classList.remove("playing");
      autoBtn.textContent = "▶ تشغيل تلقائي";
    }
  }

  /* --------------------------------------------------------------------------
     THEME & READING MODE MANAGEMENT (reading | dark | light)
     -------------------------------------------------------------------------- */
  function initTheme() {
    const saved = localStorage.getItem(STORAGE_KEY_THEME) || "dark";
    setTheme(saved);
    applyFontScale();
  }

  function setTheme(mode) {
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem(STORAGE_KEY_THEME, mode);

    document.querySelectorAll("[data-theme-mode]").forEach((btn) => {
      const btnMode = btn.getAttribute("data-theme-mode");
      btn.classList.toggle("active", btnMode === mode);
    });

    document.querySelectorAll("[data-modal-mode]").forEach((card) => {
      const cardMode = card.getAttribute("data-modal-mode");
      card.classList.toggle("selected", cardMode === mode);
    });

    updateFocusBtnLabel();
  }

  function openModeSelectionModal() {
    const modal = document.getElementById("modePromptModal");
    if (!modal) return;
    modal.classList.add("open");
  }

  function closeModeSelectionModal() {
    const modal = document.getElementById("modePromptModal");
    if (!modal) return;
    modal.classList.remove("open");
  }

  function applyFontScale() {
    const clamped = Math.min(1.3, Math.max(0.85, state.fontScale));
    state.fontScale = clamped;
    document.documentElement.style.setProperty("--reader-font-scale", String(clamped));
    localStorage.setItem(STORAGE_KEY_FONT, String(clamped));
  }

  function updateFocusBtnLabel() {
    const focusBtn = document.getElementById("toggleFocusSidebarBtn");
    if (!focusBtn) return;
    focusBtn.classList.toggle("active", state.focusSidebarHidden);
    focusBtn.textContent = state.focusSidebarHidden
      ? "📑 إظهار قائمة الأجزاء"
      : "📖 توسيع مساحة القراءة";
  }

  /* --------------------------------------------------------------------------
     STATS & TELEMETRY UPDATER
     -------------------------------------------------------------------------- */
  function updateTelemetry() {
    const chapters = window.COURSE_DATA.chapters || [];
    let totalParts = 0;
    let totalQuestions = 0;
    let doneParts = 0;

    chapters.forEach((ch) => {
      (ch.parts || []).forEach((p) => {
        totalParts++;
        totalQuestions += (p.quiz || []).length;
        if (state.completedParts[p.id]) doneParts++;
      });
    });

    const statChaptersEl = document.getElementById("statChaptersCount");
    const statPartsEl = document.getElementById("statPartsCount");
    const statReadyEl = document.getElementById("statReadyCount");
    const progressTextEl = document.getElementById("progressText");
    const progressFillEl = document.getElementById("progressFill");

    if (statChaptersEl) statChaptersEl.textContent = String(chapters.length).padStart(2, "0");
    if (statPartsEl) statPartsEl.textContent = String(totalParts).padStart(2, "0");
    if (statReadyEl) statReadyEl.textContent = String(totalQuestions).padStart(2, "0");

    const pct = totalParts > 0 ? Math.round((doneParts / totalParts) * 100) : 0;
    if (progressTextEl) progressTextEl.textContent = `إنجاز المذاكرة: ${Math.min(100, pct)}%`;
    if (progressFillEl) progressFillEl.style.width = `${Math.min(100, pct)}%`;
  }

  /* --------------------------------------------------------------------------
     LANDING PAGE: RENDER ACTIVE CHAPTERS & PARTS
     -------------------------------------------------------------------------- */
  function renderChaptersGrid() {
    const grid = document.getElementById("chaptersGrid");
    if (!grid) return;

    const chapters = window.COURSE_DATA.chapters || [];
    const q = state.searchQuery.trim().toLowerCase();

    const filtered = chapters.filter((ch) => {
      if (!q) return true;
      const inChapter =
        ch.titleAr.toLowerCase().includes(q) ||
        ch.titleEn.toLowerCase().includes(q) ||
        ch.code.toLowerCase().includes(q) ||
        ch.summary.toLowerCase().includes(q);
      const inParts = (ch.parts || []).some(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.code.toLowerCase().includes(q) ||
          (p.contentHtml && p.contentHtml.toLowerCase().includes(q))
      );
      return inChapter || inParts;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-slot-blueprint" style="grid-column: 1 / -1;">
          <div class="empty-slot-icon">00</div>
          <h3 class="empty-slot-title">لا توجد نتائج مطابقة للبحث الحالي</h3>
          <p class="empty-slot-desc">جرب البحث بكلمة أخرى.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered
      .map((ch) => {
        const partsHtml = (ch.parts || [])
          .map((part) => {
            const isDone = !!state.completedParts[part.id];
            const slidesLabel = part.slides ? ` (${part.slides})` : "";
            const statusLabel = isDone
              ? "✓ تمت المذاكرة"
              : "ابدأ الشرح + كويز ←";

            return `
              <li class="part-item has-content" data-ch="${ch.id}" data-part="${part.id}">
                <div class="part-item-right">
                  <span class="part-num">${part.code}</span>
                  <span class="part-title">${part.title}<small class="mono" style="color:var(--text-muted);">${slidesLabel}</small></span>
                </div>
                <span class="part-status-icon">${statusLabel}</span>
              </li>
            `;
          })
          .join("");

        return `
          <article class="chapter-card is-ready" style="grid-column: 1 / -1;">
            <div>
              <div class="chapter-card-top">
                <div class="chapter-meta-row">
                  <span class="chapter-index-badge">${ch.code}</span>
                  <span class="chapter-state-tag ready">● متاح بالكامل للشرح والمحاكاة والكويز</span>
                </div>
                <h3 class="chapter-title" style="font-size: 1.45rem;">${ch.titleAr}</h3>
                <span class="chapter-en-title" style="font-size: 0.95rem;">${ch.titleEn}</span>
                <p class="chapter-summary">${ch.summary}</p>
              </div>

              <div class="parts-container">
                <div class="parts-header">
                  <span>الأجزاء المضافة داخل الفصل (اضغط على أي جزء لفتح الشرح والمحاكي والكويز)</span>
                  <span class="mono">${(ch.parts || []).length} PARTS READY</span>
                </div>
                <ul class="parts-list">
                  ${partsHtml}
                </ul>
              </div>
            </div>

            <div class="chapter-card-footer">
              <button class="open-chapter-btn" data-open-ch="${ch.id}">
                <span>فتح شرح الفصل من البداية</span>
                <span class="mono">←</span>
              </button>
            </div>
          </article>
        `;
      })
      .join("");

    grid.querySelectorAll(".part-item").forEach((item) => {
      item.addEventListener("click", () => {
        openReader(item.getAttribute("data-ch"), item.getAttribute("data-part"), true);
      });
    });

    grid.querySelectorAll("[data-open-ch]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const chId = btn.getAttribute("data-open-ch");
        const ch = chapters.find((c) => c.id === chId);
        const firstPartId = ch && ch.parts && ch.parts[0] ? ch.parts[0].id : null;
        openReader(chId, firstPartId, true);
      });
    });
  }

  /* --------------------------------------------------------------------------
     INTERACTIVE QUIZ RENDERER
     -------------------------------------------------------------------------- */
  function renderQuizForPart(part) {
    const quizContainer = document.getElementById("partQuizContainer");
    if (!quizContainer) return;

    const quizList = part.quiz || [];
    if (!part.hasContent || quizList.length === 0) {
      quizContainer.innerHTML = "";
      return;
    }

    let answeredCount = 0;
    let correctCount = 0;

    quizList.forEach((q) => {
      const key = `${part.id}_${q.id}`;
      if (state.quizAnswers[key] !== undefined) {
        answeredCount++;
        if (state.quizAnswers[key] === q.correctIndex) {
          correctCount++;
        }
      }
    });

    const questionsHtml = quizList
      .map((q) => {
        const key = `${part.id}_${q.id}`;
        const userChoice = state.quizAnswers[key];
        const isAnswered = userChoice !== undefined;
        const isCorrect = isAnswered && userChoice === q.correctIndex;

        const optionsHtml = q.options
          .map((optText, idx) => {
            let btnClass = "quiz-opt-btn";
            let icon = "○";
            if (isAnswered) {
              if (idx === q.correctIndex) {
                btnClass += " correct";
                icon = "✔";
              } else if (idx === userChoice && userChoice !== q.correctIndex) {
                btnClass += " wrong";
                icon = "✖";
              }
            }
            return `
              <button
                type="button"
                class="${btnClass}"
                data-quiz-q="${q.id}"
                data-quiz-idx="${idx}"
                ${isAnswered ? "disabled" : ""}
              >
                <span>${optText}</span>
                <span class="mono">${icon}</span>
              </button>
            `;
          })
          .join("");

        return `
          <div class="quiz-q-card">
            <p class="quiz-q-title">${q.question}</p>
            <div class="quiz-options-grid">
              ${optionsHtml}
            </div>
            <div class="quiz-feedback ${isAnswered ? "show" : ""} ${isCorrect ? "ok" : "err"}">
              ${
                isAnswered
                  ? `${isCorrect ? "✅ إجابة صحيحة! " : "❌ إجابة غير صحيحة — "}${q.explanation}`
                  : ""
              }
            </div>
          </div>
        `;
      })
      .join("");

    quizContainer.innerHTML = `
      <div class="quiz-wrapper">
        <div class="quiz-header">
          <div>
            <span class="mono" style="font-size: 0.75rem; color: var(--accent-amber); font-weight: 700;">INTERACTIVE EXAM QUIZ // أسئلة امتحانات تفاعلية</span>
            <h2 style="font-family: var(--font-display-ar); font-size: 1.4rem; font-weight: 900;">
              🎯 كويز تفاعلي على ${part.title}
            </h2>
          </div>
          <div class="quiz-score-pill">
            Score: ${correctCount} / ${quizList.length} (${answeredCount} Answered)
          </div>
        </div>

        <div class="quiz-questions-list">
          ${questionsHtml}
        </div>

        <div class="quiz-footer-actions">
          <button type="button" class="tool-pill-btn" id="resetQuizBtn">
            ↻ إعادة الكويز من جديد
          </button>
        </div>
      </div>
    `;

    quizContainer.querySelectorAll("[data-quiz-q]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const qId = btn.getAttribute("data-quiz-q");
        const idx = parseInt(btn.getAttribute("data-quiz-idx"), 10);
        state.quizAnswers[`${part.id}_${qId}`] = idx;
        renderQuizForPart(part);
      });
    });

    const resetBtn = document.getElementById("resetQuizBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        quizList.forEach((q) => {
          delete state.quizAnswers[`${part.id}_${q.id}`];
        });
        renderQuizForPart(part);
      });
    }
  }

  /* --------------------------------------------------------------------------
     READER VIEW
     -------------------------------------------------------------------------- */
  function openReader(chapterId, partId, fromLandingEntry) {
    const chapters = window.COURSE_DATA.chapters || [];
    const ch = chapters.find((c) => c.id === chapterId);
    if (!ch) return;

    state.activeChapterId = ch.id;
    const targetPart =
      (ch.parts || []).find((p) => p.id === partId) || (ch.parts || [])[0] || null;
    state.activePartId = targetPart ? targetPart.id : null;

    document.getElementById("landingView").classList.add("hidden");
    document.getElementById("readerView").classList.add("active");

    if (fromLandingEntry) {
      setTheme("reading");
      openModeSelectionModal();
    }

    renderReaderContent();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function closeReader() {
    clearAllSimTimers();
    state.activeChapterId = null;
    state.activePartId = null;
    closeModeSelectionModal();
    document.getElementById("readerView").classList.remove("active");
    document.getElementById("landingView").classList.remove("hidden");
    renderChaptersGrid();
    updateTelemetry();
  }

  function renderReaderContent() {
    const chapters = window.COURSE_DATA.chapters || [];
    const ch = chapters.find((c) => c.id === state.activeChapterId);
    if (!ch) return;

    const parts = ch.parts || [];
    const currentIndex = parts.findIndex((p) => p.id === state.activePartId);
    const activePart = currentIndex >= 0 ? parts[currentIndex] : parts[0];

    document.getElementById("sidebarChapterCode").textContent = ch.code;
    document.getElementById("sidebarChapterTitle").textContent = ch.titleAr;

    const navContainer = document.getElementById("sidebarPartsNav");
    navContainer.innerHTML = parts
      .map((p) => {
        const isCurrent = activePart && p.id === activePart.id;
        const isDone = !!state.completedParts[p.id];
        return `
          <button class="sidebar-part-btn ${isCurrent ? "active" : ""}" data-switch-part="${p.id}">
            <span><strong class="mono">${p.code}</strong> — ${p.title}</span>
            <span class="mono">${isDone ? "✓" : "●"}</span>
          </button>
        `;
      })
      .join("");

    navContainer.querySelectorAll("[data-switch-part]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.activePartId = btn.getAttribute("data-switch-part");
        renderReaderContent();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });

    if (activePart) {
      const slidesText = activePart.slides ? ` // ${activePart.slides}` : "";
      document.getElementById("canvasPartBadge").textContent = `${ch.code} // ${activePart.code}${slidesText}`;
      document.getElementById("canvasPartTitle").textContent = activePart.title;

      const doneBtn = document.getElementById("markDoneBtn");
      const isDone = !!state.completedParts[activePart.id];
      doneBtn.className = `mark-done-btn ${isDone ? "done" : ""}`;
      doneBtn.innerHTML = isDone
        ? `<span>✓ تمت مذاكرة هذا الجزء</span>`
        : `<span>○ تحديد كـ "تمت المذاكرة"</span>`;

      const bodyEl = document.getElementById("canvasExplanationBody");
      bodyEl.innerHTML = `<div class="explanation-body">${activePart.contentHtml}</div>`;
      initSimulators();
      renderQuizForPart(activePart);

      const prevBtn = document.getElementById("prevPartBtn");
      const nextBtn = document.getElementById("nextPartBtn");

      prevBtn.disabled = currentIndex <= 0;
      nextBtn.disabled = currentIndex >= parts.length - 1;

      prevBtn.onclick = () => {
        if (currentIndex > 0) {
          state.activePartId = parts[currentIndex - 1].id;
          renderReaderContent();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      };

      nextBtn.onclick = () => {
        if (currentIndex < parts.length - 1) {
          state.activePartId = parts[currentIndex + 1].id;
          renderReaderContent();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      };
    }
  }

  /* --------------------------------------------------------------------------
     INITIALIZATION
     -------------------------------------------------------------------------- */
  function init() {
    initTheme();
    updateTelemetry();
    renderChaptersGrid();

    document.querySelectorAll("[data-theme-mode]").forEach((btn) => {
      btn.addEventListener("click", () => {
        setTheme(btn.getAttribute("data-theme-mode"));
      });
    });

    document.querySelectorAll("[data-modal-mode]").forEach((card) => {
      card.addEventListener("click", () => {
        const chosen = card.getAttribute("data-modal-mode");
        setTheme(chosen);
      });
    });

    const confirmModalBtn = document.getElementById("confirmModeModalBtn");
    if (confirmModalBtn) {
      confirmModalBtn.addEventListener("click", closeModeSelectionModal);
    }

    const reopenModalBtn = document.getElementById("reopenModeModalBtn");
    if (reopenModalBtn) {
      reopenModalBtn.addEventListener("click", openModeSelectionModal);
    }

    const modalBackdrop = document.getElementById("modePromptModal");
    if (modalBackdrop) {
      modalBackdrop.addEventListener("click", (e) => {
        if (e.target === modalBackdrop) closeModeSelectionModal();
      });
    }

    const startPart1Btn = document.getElementById("startPart1Btn");
    if (startPart1Btn) {
      startPart1Btn.addEventListener("click", () => {
        openReader("ch-1", "ch1-p1", true);
      });
    }

    const startPart2Btn = document.getElementById("startPart2Btn");
    if (startPart2Btn) {
      startPart2Btn.addEventListener("click", () => {
        openReader("ch-1", "ch1-p2", true);
      });
    }

    const startPart3Btn = document.getElementById("startPart3Btn");
    if (startPart3Btn) {
      startPart3Btn.addEventListener("click", () => {
        openReader("ch-1", "ch1-p3", true);
      });
    }

    const fontIncBtn = document.getElementById("fontIncreaseBtn");
    const fontDecBtn = document.getElementById("fontDecreaseBtn");
    if (fontIncBtn) {
      fontIncBtn.addEventListener("click", () => {
        state.fontScale += 0.08;
        applyFontScale();
      });
    }
    if (fontDecBtn) {
      fontDecBtn.addEventListener("click", () => {
        state.fontScale -= 0.08;
        applyFontScale();
      });
    }

    const focusBtn = document.getElementById("toggleFocusSidebarBtn");
    if (focusBtn) {
      focusBtn.addEventListener("click", () => {
        state.focusSidebarHidden = !state.focusSidebarHidden;
        document.body.classList.toggle("reading-focus-active", state.focusSidebarHidden);
        updateFocusBtnLabel();
      });
    }

    const brandHome = document.getElementById("brandHome");
    if (brandHome) brandHome.addEventListener("click", closeReader);

    const backBtn = document.getElementById("backToIndexBtn");
    if (backBtn) backBtn.addEventListener("click", closeReader);

    const backTopBtn = document.getElementById("backToIndexTopBtn");
    if (backTopBtn) backTopBtn.addEventListener("click", closeReader);

    const markDoneBtn = document.getElementById("markDoneBtn");
    if (markDoneBtn) {
      markDoneBtn.addEventListener("click", () => {
        if (!state.activePartId) return;
        if (state.completedParts[state.activePartId]) {
          delete state.completedParts[state.activePartId];
        } else {
          state.completedParts[state.activePartId] = true;
        }
        saveCompletedParts();
        updateTelemetry();
        renderReaderContent();
      });
    }

    const searchInput = document.getElementById("courseSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        if (state.activeChapterId) {
          closeReader();
        } else {
          renderChaptersGrid();
        }
      });
    }

    window.addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement !== searchInput) {
        e.preventDefault();
        if (searchInput) searchInput.focus();
      } else if (e.key === "Escape") {
        const modal = document.getElementById("modePromptModal");
        if (modal && modal.classList.contains("open")) {
          closeModeSelectionModal();
        } else if (state.activeChapterId) {
          closeReader();
        }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
