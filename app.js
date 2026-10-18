/**
 * ==========================================================================
 * COMPUTER ARCHITECTURE — INTERACTIVE APPLICATION ENGINE
 * ==========================================================================
 * يدعم:
 * - تفعيل وضع القراءة افتراضياً عند دخول أي فصل + نافذة اختيار الوضع المفضل
 * - Dark / Light / Reading Mode
 * - تكبير وتصغير الخط A+ / A-
 * - الكويز التفاعلي باللغة الإنجليزية مع الشرح والتفسير المبسط
 */

(function () {
  const STORAGE_KEY_DONE = "comp_arch_completed_parts_v1";
  const STORAGE_KEY_THEME = "comp_arch_theme_v2";
  const STORAGE_KEY_FONT = "comp_arch_font_scale_v1";

  let state = {
    filter: "all", // 'all' | 'ready' | 'empty'
    searchQuery: "",
    activeChapterId: null,
    activePartId: null,
    completedParts: loadCompletedParts(),
    fontScale: parseFloat(localStorage.getItem(STORAGE_KEY_FONT) || "1"),
    focusSidebarHidden: false,
    hasShownEntryModalForChapter: false,
    quizAnswers: {} // { [partId_qId]: selectedIndex }
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

    // Sync top bar buttons
    document.querySelectorAll("[data-theme-mode]").forEach((btn) => {
      const btnMode = btn.getAttribute("data-theme-mode");
      btn.classList.toggle("active", btnMode === mode);
    });

    // Sync modal cards
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
    let readyParts = 0;
    let doneParts = 0;

    chapters.forEach((ch) => {
      (ch.parts || []).forEach((p) => {
        totalParts++;
        if (p.hasContent) readyParts++;
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
    if (statReadyEl) statReadyEl.textContent = `${readyParts} / ${totalParts}`;

    const pct = readyParts > 0 ? Math.round((doneParts / readyParts) * 100) : 0;
    if (progressTextEl) progressTextEl.textContent = `إنجاز المذاكرة: ${Math.min(100, pct)}%`;
    if (progressFillEl) progressFillEl.style.width = `${Math.min(100, pct)}%`;
  }

  /* --------------------------------------------------------------------------
     LANDING PAGE: RENDER CHAPTERS & PARTS GRID
     -------------------------------------------------------------------------- */
  function renderChaptersGrid() {
    const grid = document.getElementById("chaptersGrid");
    if (!grid) return;

    const chapters = window.COURSE_DATA.chapters || [];
    const q = state.searchQuery.trim().toLowerCase();

    const filtered = chapters.filter((ch) => {
      if (state.filter === "ready" && !ch.isReady) return false;
      if (state.filter === "empty" && ch.isReady) return false;

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
          <p class="empty-slot-desc">جرب البحث بكلمة أخرى أو اضغط على "كل الفصول".</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered
      .map((ch) => {
        const stateTag = ch.isReady
          ? `<span class="chapter-state-tag ready">● متاح للشرح والكويز</span>`
          : `<span class="chapter-state-tag empty">○ بانتظار المحتوى</span>`;

        const partsHtml = (ch.parts || [])
          .map((part) => {
            const isDone = !!state.completedParts[part.id];
            const statusLabel = isDone
              ? "✓ تمت المذاكرة"
              : part.hasContent
              ? "ابدأ الشرح + كويز ←"
              : "[فارغ — بالانتظار]";

            return `
              <li class="part-item ${part.hasContent ? "has-content" : ""}" data-ch="${ch.id}" data-part="${part.id}">
                <div class="part-item-right">
                  <span class="part-num">${part.code}</span>
                  <span class="part-title">${part.title}</span>
                </div>
                <span class="part-status-icon">${statusLabel}</span>
              </li>
            `;
          })
          .join("");

        return `
          <article class="chapter-card ${ch.isReady ? "is-ready" : "is-empty"}">
            <div>
              <div class="chapter-card-top">
                <div class="chapter-meta-row">
                  <span class="chapter-index-badge">${ch.code}</span>
                  ${stateTag}
                </div>
                <h3 class="chapter-title">${ch.titleAr}</h3>
                <span class="chapter-en-title">${ch.titleEn}</span>
                <p class="chapter-summary">${ch.summary}</p>
              </div>

              <div class="parts-container">
                <div class="parts-header">
                  <span>أجزاء الفصل (اضغط على أي جزء للفتح)</span>
                  <span class="mono">${(ch.parts || []).length} PARTS</span>
                </div>
                <ul class="parts-list">
                  ${partsHtml}
                </ul>
              </div>
            </div>

            <div class="chapter-card-footer">
              <button class="open-chapter-btn" data-open-ch="${ch.id}">
                <span>${ch.isReady ? "فتح شرح الفصل الآن" : "معاينة مكان الفصل"}</span>
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
     INTERACTIVE QUIZ RENDERER (الأسئلة بالإنجليزي + الشرح والتفسير بالعربي)
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
     READER VIEW (التحويل التلقائي لوضع القراءة + إظهار اختيار الوضع عند الدخول)
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

    // عند دخول الفصل: الوضع الافتراضي يكون وضع القراءة (reading) ويظهر للطالب اختيار الوضع
    if (fromLandingEntry) {
      setTheme("reading");
      openModeSelectionModal();
    }

    renderReaderContent();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function closeReader() {
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
            <span class="mono">${isDone ? "✓" : p.hasContent ? "●" : "○"}</span>
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
      if (activePart.hasContent && activePart.contentHtml) {
        bodyEl.innerHTML = `<div class="explanation-body">${activePart.contentHtml}</div>`;
      } else {
        bodyEl.innerHTML = `
          <div class="empty-slot-blueprint">
            <div class="empty-slot-icon">${activePart.code}</div>
            <h3 class="empty-slot-title">مكان الشرح جاهز ومفرغ لهذا الجزء (${activePart.code})</h3>
            <p class="empty-slot-desc">
              بمجرد إرسال محتوى هذا الجزء، سيتم إضافته هنا فوراً مع المخططات وتريكات الامتحان والكويز التفاعلي الخاص به.
            </p>
            <div class="ready-blocks-preview">
              <span class="ready-block-tag">الشرح المبسط والعميق</span>
              <span class="ready-block-tag">Official Definitions</span>
              <span class="ready-block-tag">تريكات الامتحانات</span>
              <span class="ready-block-tag">English Exam Quiz</span>
            </div>
          </div>
        `;
      }

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

    // Top bar 3-Mode Switcher Buttons (reading | dark | light)
    document.querySelectorAll("[data-theme-mode]").forEach((btn) => {
      btn.addEventListener("click", () => {
        setTheme(btn.getAttribute("data-theme-mode"));
      });
    });

    // Modal Mode Choice Cards
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

    // Quick Start Part 1 & Part 2 Buttons in Hero
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

    // Font Size A+ / A- Controls inside Reader
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

    // Toggle Focus Sidebar inside Reader
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

    document.querySelectorAll("[data-filter]").forEach((tab) => {
      tab.addEventListener("click", () => {
        document.querySelectorAll("[data-filter]").forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        state.filter = tab.getAttribute("data-filter");
        renderChaptersGrid();
      });
    });

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
