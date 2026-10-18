/**
 * ==========================================================================
 * COMPUTER ARCHITECTURE — CURRICULUM DATA STORE
 * ==========================================================================
 * يحتوي فقط على الفصول والأجزاء التي تمت إضافتها فعلياً لمنع أي تشتيت أو لخبطة.
 * حالياً: Chapter 1 (Part 1, Part 2, Part 3) كاملة بالمحاكيات التفاعلية والكويزات.
 */

window.COURSE_DATA = {
  courseCode: "COMP-ARCH",
  courseTitleAr: "معمارية وتنظيم الحاسب",
  courseTitleEn: "Computer Organization & Architecture",
  chapters: [
    {
      id: "ch-1",
      code: "CHAPTER 01",
      titleAr: "الفصل الأول: المفاهيم الأساسية وتطور الحاسوب",
      titleEn: "Chapter 1: Basic Concepts and Computer Evolution",
      summary: "يشمل: الفرق بين Architecture و Organization، الهيكل والوظيفة (Structure & Function)، المعالجات متعددة الأنوية (Multicore)، الذاكرة المخبأة (Cache Memory)، وتخطيط اللوحة الأم (Motherboard Layout).",
      isReady: true,
      parts: [
        /* ====================================================================
           PART 1: Computer Architecture vs. Computer Organization (Slides 3 & 4)
           ==================================================================== */
        {
          id: "ch1-p1",
          code: "PART 1",
          slides: "Slides 3 & 4",
          title: "Computer Architecture vs. Computer Organization",
          hasContent: true,
          contentHtml: `
            <!-- 1. الفكرة الأساسية من الصفر + محاكي الطبقتين التفاعلي -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">01</span>
                <h2 class="exp-sec-title">الفكرة الأساسية من الصفر (مع محاكي الطبقتين التفاعلي)</h2>
              </div>

              <div class="balady-box">
                <div class="balady-label">💡 القصة بدأت إزاي؟</div>
                <p>
                  زمان في الستينات، لما شركة زي <strong>IBM</strong> كانت تعمل كمبيوتر جديد أسرع، كانت تغير في الأسلاك والدوائر، فكان المبرمج يتصدم إن كل البرامج اللي كتبها باظت ولازم يعيد كتابتها من الصفر!
                </p>
                <p style="margin-top: 0.6rem;">
                  الشركات خسرت مليارات، فقالوا: <strong>"لازم نفصل الكمبيوتر لطبقتين مستقلتين تماماً"</strong>:
                </p>
              </div>

              <!-- INTERACTIVE SIMULATOR 1: Architecture vs Organization & IBM 370 -->
              <div class="sim-card" data-sim="sim-arch-org">
                <div class="sim-top-bar">
                  <div class="sim-title-group">
                    <span class="sim-live-dot"></span>
                    <span class="sim-badge-title">INTERACTIVE SIMULATOR // ARCHITECTURE VS. ORGANIZATION</span>
                  </div>
                  <div class="sim-controls">
                    <button type="button" class="sim-step-btn active" data-sim-step="0">1. طبقة المبرمج (Architecture)</button>
                    <button type="button" class="sim-step-btn" data-sim-step="1">2. تحت الكبوت: جهاز اقتصادي (2 GHz)</button>
                    <button type="button" class="sim-step-btn" data-sim-step="2">3. عائلة IBM 370: جهاز فائق (4 GHz)</button>
                    <button type="button" class="sim-step-btn play-auto" data-sim-autoplay>▶ تشغيل تلقائي</button>
                  </div>
                </div>

                <div class="sim-svg-stage">
                  <svg viewBox="0 0 720 315" xmlns="http://www.w3.org/2000/svg">
                    <!-- Top Layer: Architecture (Visible to Programmer) -->
                    <g class="svg-hw-group cyan-node active-node" data-node-step="0,1,2" data-click-step="0">
                      <rect class="svg-hw-box" x="140" y="15" width="440" height="82" rx="10" />
                      <text class="svg-label-mono" x="360" y="38">LAYER 1: COMPUTER ARCHITECTURE (VISIBLE TO PROGRAMMER)</text>
                      <text class="svg-label-en" x="360" y="60">ISA Code: ADD R1, R2, R3  |  Data Type: 32-Bit Int</text>
                      <text class="svg-label-ar" x="360" y="82">① كتالوج الأوامر والكود ثابت لا يتغير أبداً</text>
                    </g>

                    <!-- Wires from Architecture to Organization -->
                    <path class="wire-base" d="M 360 97 L 360 140 L 195 140 L 195 180" />
                    <path class="wire-base" d="M 360 97 L 360 140 L 525 140 L 525 180" />

                    <path class="wire-flow cyan active-flow" data-wire-step="0,1" d="M 360 97 L 360 140 L 195 140 L 195 180" />
                    <path class="wire-flow amber" data-wire-step="0,2" d="M 360 97 L 360 140 L 525 140 L 525 180" />

                    <!-- Moving Signal Dots -->
                    <circle class="data-packet-dot moving" data-packet-step="0,1" r="6" fill="#06b6d4">
                      <animateMotion dur="1.4s" repeatCount="indefinite" path="M 360 97 L 360 140 L 195 140 L 195 180" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="2" r="7" fill="#f59e0b">
                      <animateMotion dur="0.65s" repeatCount="indefinite" path="M 360 97 L 360 140 L 525 140 L 525 180" />
                    </circle>

                    <!-- ISA Boundary Line -->
                    <line x1="40" y1="140" x2="680" y2="140" stroke="var(--border-strong)" stroke-dasharray="6 6" stroke-width="1.5" />
                    <g class="svg-wire-callout active-pill" data-pill-step="0" data-click-step="0">
                      <rect class="svg-wire-pill" x="265" y="126" width="190" height="24" />
                      <text class="svg-wire-text" x="360" y="142">① ISA INTERFACE BOUNDARY</text>
                    </g>

                    <!-- Wire Callout 2 (Economy HW) -->
                    <g class="svg-wire-callout" data-pill-step="1" data-click-step="1">
                      <rect class="svg-wire-pill" x="75" y="108" width="170" height="22" />
                      <text class="svg-wire-text" x="160" y="123">② إشارات 2GHz (16-bit) ▼</text>
                    </g>

                    <!-- Wire Callout 3 (High-Speed HW) -->
                    <g class="svg-wire-callout" data-pill-step="2" data-click-step="2">
                      <rect class="svg-wire-pill" x="475" y="108" width="170" height="22" />
                      <text class="svg-wire-text" x="560" y="123">③ إشارات 4GHz (64-bit) ▼</text>
                    </g>

                    <!-- Bottom Left: Organization Model A (Economy) -->
                    <g class="svg-hw-group cyan-node" data-node-step="1" data-click-step="1">
                      <rect class="svg-hw-box" x="45" y="180" width="300" height="115" rx="10" />
                      <text class="svg-label-mono" x="195" y="204">ORGANIZATION A // ECONOMY HW</text>
                      <text class="svg-label-en" x="195" y="228">Clock: 2.0 GHz | 16-bit Bus</text>
                      <text class="svg-label-ar" x="195" y="252">عتاد اقتصادي • إشارات تحكم أبطأ (DRAM)</text>
                      <text class="svg-label-mono" x="195" y="278" style="fill: var(--accent-emerald);">✓ Runs Same Program (Normal Speed)</text>
                    </g>

                    <!-- Bottom Right: Organization Model B (High-End IBM 370) -->
                    <g class="svg-hw-group amber-node" data-node-step="2" data-click-step="2">
                      <rect class="svg-hw-box" x="375" y="180" width="300" height="115" rx="10" />
                      <text class="svg-label-mono" x="525" y="204" style="fill: var(--accent-amber);">ORGANIZATION B // HIGH-SPEED HW</text>
                      <text class="svg-label-en" x="525" y="228">Clock: 4.0 GHz | 64-bit Bus</text>
                      <text class="svg-label-ar" x="525" y="252">عتاد فائق السرعة • أسلاك أعرض (SRAM)</text>
                      <text class="svg-label-mono" x="525" y="278" style="fill: var(--accent-amber);">🚀 Runs Same Program 2x Faster!</text>
                    </g>
                  </svg>
                </div>

                <div class="sim-status-ticker">
                  <span class="sim-status-text" data-sim-status>
                    الطبقة الأولى (Architecture): المبرمج بيكتب الكود مرة واحدة بس بناءً على كتالوج الأوامر (ISA) من غير ما يشغل باله بتفاصيل الأسلاك تحت الكبوت.
                  </span>
                  <span class="sim-status-step-tag" data-sim-tag>STEP 1 / 3</span>
                </div>
              </div>
            </section>

            <!-- 2. COMPUTER ARCHITECTURE (معمارية الحاسوب) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">02</span>
                <h2 class="exp-sec-title">COMPUTER ARCHITECTURE (معمارية الحاسوب)</h2>
              </div>

              <div class="en-def-box">
                <span class="en-def-label">Official English Definition</span>
                <p class="en-def-text">
                  "Attributes of a system <strong>visible to the programmer</strong>, or those attributes that have a <strong>direct impact on the logical execution</strong> of a program."
                </p>
              </div>

              <div class="balady-box">
                <div class="balady-label">📖 الشرح والتوضيح</div>
                <p>
                  دي <strong>"قواعد اللعبة"</strong> أو <strong>"كتالوج الأوامر"</strong> اللي المبرمج شايفه بعينه وهو بيكتب كود أو أسمبلي. أي حاجة بتأثر على منطق البرنامج الرياضي وبتخلي الكود يشتغل صح أو غلط، دي <span class="mono">Architecture</span>.
                </p>
              </div>

              <h3 style="font-size: 1.05rem; font-weight: 800; margin: 1.1rem 0 0.6rem; color: var(--accent-cyan);">
                📌 Core Attributes — إيه اللي جواه وبيتكرر في الامتحانات؟
              </h3>

              <div class="attr-grid">
                <div class="attr-card">
                  <span class="attr-term">• Instruction Set Architecture (ISA)</span>
                  <p class="attr-desc">طقم الأوامر اللي المعالج بيفهمها (زي <span class="mono">ADD, SUB, JUMP</span>).</p>
                </div>

                <div class="attr-card">
                  <span class="attr-term">• Number of bits / Data types</span>
                  <p class="attr-desc">عدد البتات المخصصة للأرقام في الكود (زي <span class="mono">int 32-bit</span> أو <span class="mono">64-bit</span>).</p>
                </div>

                <div class="attr-card">
                  <span class="attr-term">• Addressing Modes</span>
                  <p class="attr-desc">الطرق اللي الكود بيوصل بيها للمتغيرات في الذاكرة.</p>
                </div>

                <div class="attr-card">
                  <span class="attr-term">• I/O Mechanisms</span>
                  <p class="attr-desc">الأوامر البرمجية اللي بنطلب بيها قراءة أو كتابة داتا مع الشاشة والأجهزة.</p>
                </div>
              </div>

              <div class="exam-trap-box">
                <div class="exam-trap-title">⚠️ تريكة الامتحان الخاصة بالـ Architecture</div>
                <p>
                  كلمة <strong>"Bits"</strong> بتخدع أي حد في الامتحان! لما يجيلك:<br/>
                  <span class="mono" style="display:inline-block; margin: 0.35rem 0; padding: 0.2rem 0.6rem; background: var(--bg-card); border-radius: 4px; font-weight: 700;">
                    "Number of bits used to represent data"
                  </span><br/>
                  متقولش بتات يعني إلكترونيات وأسلاك! <strong>لأ.. دي Architecture</strong> لأن المبرمج هو اللي كاتب في الكود إنه عاوز رقم 32 بت، ولو زاد عنه هيحصل عنده فيضان في الحسابات (<strong>Overflow</strong>)!
                </p>
              </div>
            </section>

            <!-- 3. COMPUTER ORGANIZATION (تنظيم الحاسوب) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">03</span>
                <h2 class="exp-sec-title">COMPUTER ORGANIZATION (تنظيم الحاسوب)</h2>
              </div>

              <div class="en-def-box" style="border-left-color: var(--accent-amber);">
                <span class="en-def-label" style="color: var(--accent-amber);">Official English Definition</span>
                <p class="en-def-text">
                  "The operational units and their interconnections that <strong>realize the architectural specifications</strong>. Hardware details <strong>transparent to the programmer</strong>."
                </p>
              </div>

              <div class="balady-box">
                <div class="balady-label">📖 الشرح والتوضيح</div>
                <p>
                  ده بقى <strong>الماتور والأسلاك والعتاد اللي تحت الكبوت</strong> اللي بينفذ الكتالوج ده على أرض الواقع. والمبرمج ملوش دعوة بيه ومبيشوفوش خالص في الكود بتاعه.
                </p>
              </div>

              <h3 style="font-size: 1.05rem; font-weight: 800; margin: 1.1rem 0 0.6rem; color: var(--accent-amber);">
                📌 Core Attributes — إيه اللي جواه وبيتكرر في الامتحانات؟
              </h3>

              <div class="attr-grid">
                <div class="attr-card">
                  <span class="attr-term" style="color: var(--accent-amber);">• Clock Frequency / Speed</span>
                  <p class="attr-desc">تردد نبضات وسرعة المعالج بالـ (<span class="mono">GHz</span> والـ <span class="mono">MHz</span>).</p>
                </div>

                <div class="attr-card">
                  <span class="attr-term" style="color: var(--accent-amber);">• Control Signals</span>
                  <p class="attr-desc">إشارات الكهرباء الداخلية اللي بتفتح وتقفل البوابات وتوجه الداتا.</p>
                </div>

                <div class="attr-card">
                  <span class="attr-term" style="color: var(--accent-amber);">• Bus Widths</span>
                  <p class="attr-desc">العرض الفيزيائي للأسلاك النحاس اللي بتنقل الكهربا على البوردة.</p>
                </div>

                <div class="attr-card">
                  <span class="attr-term" style="color: var(--accent-amber);">• Memory Technology</span>
                  <p class="attr-desc">نوع السيليكون والمكثفات اللي اتصنعت منها الرامات (زي <span class="mono">DRAM</span> و <span class="mono">SRAM</span>).</p>
                </div>
              </div>

              <div class="exam-trap-box">
                <div class="exam-trap-title">⚠️ تريكات الامتحان الخاصة بالـ Organization</div>
                <div class="exam-trap-list">
                  <p>
                    <strong>1. كلمة "Transparent":</strong> في الإنجليزي العادي يعني شفاف، بس في هندسة حاسب والامتحان معناها <strong>"مخفي تماماً عن المبرمج والكود مبيحسش بيه"!</strong> فأي حاجة يقولك عليها <span class="mono">Transparent</span> تبقى <strong>Organization</strong> فوراً.
                  </p>
                  <p>
                    <strong>2. وحدات قياس الزمن أو السرعة:</strong> أي حاجة فيها (<span class="mono">GHz, Nanoseconds, MHz, Latency</span>) تبقى <strong>Organization</strong> فوراً. المعمارية دي ورق وقوانين مجردة ملهاش علاقة بالزمن ولا بالتردد!
                  </p>
                </div>
              </div>
            </section>

            <!-- 4. دراسة الحالة التاريخية: عائلة IBM System/370 (سلايد 4) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">04</span>
                <h2 class="exp-sec-title">دراسة الحالة التاريخية: عائلة IBM System/370 (سلايد 4)</h2>
              </div>

              <div class="case-study-card">
                <p style="font-size: 1.02rem; font-weight: 600;">
                  شركة <strong>IBM</strong> عملت عائلة حواسيب سنة <strong>1970</strong>، نزلت أجهزة رخيصة وأجهزة غالية وسريعة جداً.
                </p>

                <div class="case-Points">
                  <div class="case-point-item">
                    <div class="balady-label" style="color: var(--accent-cyan);">🧠 الفكرة العبقرية</div>
                    <p style="font-size: 0.92rem;">
                      كل الأجهزة اتعملت <strong>بنفس الـ Architecture بالملي!</strong> لكن بـ <strong>Organization مختلف</strong> (أجهزة ترددها بطيء وأسلاكها قليلة، وأجهزة ترددها سريع وعتادها غالي).
                    </p>
                  </div>

                  <div class="case-point-item">
                    <div class="balady-label" style="color: var(--accent-emerald);">🚀 النتيجة</div>
                    <p style="font-size: 0.92rem;">
                      العميل كان يشتري جهاز رخيص، ولما يترقى ويشتري الجهاز الغالي، <strong>كل برامجه القديمة تشتغل طيارة فوراً</strong> من غير ما يغير سطر كود واحد!
                    </p>
                  </div>

                  <div class="case-point-item">
                    <div class="balady-label" style="color: var(--accent-amber);">🎯 مصطلح الامتحان</div>
                    <p style="font-size: 0.92rem;">
                      ده بيتسمى <strong class="mono" style="color: var(--accent-amber);">"Protecting software investment"</strong> (حماية استثمار برامج العملاء).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <!-- 5. INSTANT EXAM BUZZWORDS -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">05</span>
                <h2 class="exp-sec-title">INSTANT EXAM BUZZWORDS (كلمات السر لحل أسئلة الـ MCQs في ثانية)</h2>
              </div>

              <div class="buzzwords-matrix">
                <div class="buzz-col arch-col">
                  <div class="buzz-target" style="color: var(--accent-cyan);">
                    <span>لو شفت في السؤال 👇</span>
                    <span>===&gt; ARCHITECTURE</span>
                  </div>
                  <div class="buzz-tags">
                    <span class="buzz-tag">Visible to programmer</span>
                    <span class="buzz-tag">Logical execution</span>
                    <span class="buzz-tag">Instruction set (ISA)</span>
                    <span class="buzz-tag">Data types bit-width</span>
                    <span class="buzz-tag">Addressing modes</span>
                    <span class="buzz-tag">I/O mechanisms</span>
                  </div>
                </div>

                <div class="buzz-col org-col">
                  <div class="buzz-target" style="color: var(--accent-amber);">
                    <span>لو شفت في السؤال 👇</span>
                    <span>===&gt; ORGANIZATION</span>
                  </div>
                  <div class="buzz-tags">
                    <span class="buzz-tag">Transparent to programmer</span>
                    <span class="buzz-tag">Realize specs</span>
                    <span class="buzz-tag">Control signals</span>
                    <span class="buzz-tag">Clock frequency / GHz / MHz</span>
                    <span class="buzz-tag">Bus width</span>
                    <span class="buzz-tag">Memory technology (DRAM/SRAM)</span>
                  </div>
                </div>
              </div>
            </section>

            <!-- 6. POPULAR EXAM TRUE / FALSE DRILLS -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">06</span>
                <h2 class="exp-sec-title">POPULAR EXAM TRUE / FALSE DRILLS (أسئلة صح وغلط المشهورة)</h2>
              </div>

              <div class="tf-drills-grid">
                <div class="tf-card">
                  <p class="tf-question">[Q1] "Two computers can have the same Architecture but different Organizations."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge true">Answer: TRUE (✔)</span>
                    <span>(زي عائلة <strong>IBM 370</strong>، وزي معالجات <span class="mono">Core i3</span> و <span class="mono">Core i9</span>).</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q2] "Increasing the clock frequency from 2GHz to 4GHz changes the Architecture."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge false">Answer: FALSE (✖)</span>
                    <span>(ده تغيير في الـ <strong>Organization</strong> بس، الكود شغال زي ما هو).</span>
                  </div>
                </div>
              </div>
            </section>

            <!-- 7. SHEET 1: OFFICIAL EXAM QUESTION & MODEL ANSWER -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">07</span>
                <h2 class="exp-sec-title">SHEET 1: OFFICIAL EXAM QUESTION &amp; MODEL ANSWER (سؤال الشيت)</h2>
              </div>

              <div class="sheet-card">
                <div class="sheet-q-box">
                  <span class="mono" style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700;">QUESTION 1.1 // SHEET 1</span>
                  <p style="font-family: var(--font-en); font-weight: 700; font-size: 1.05rem; margin-top: 0.35rem;">
                    "What, in general terms, is the distinction between computer organization and computer architecture?"
                  </p>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
                  <span style="font-weight: 800; color: var(--accent-emerald);">✅ Model Answer (الإجابة النموذجية):</span>
                  <button type="button" class="tool-pill-btn" onclick="const box = this.parentElement.nextElementSibling; box.style.display = box.style.display === 'none' ? 'block' : 'none';">
                    إخفاء / إظهار الإجابة للتسميع
                  </button>
                </div>

                <div class="sheet-a-box">
                  <ol>
                    <li>
                      <strong>Computer Architecture</strong> refers to those attributes of a system <strong>visible to the programmer</strong> or, put another way, those attributes that have a <strong>direct impact on the logical execution of a program</strong> (e.g., instruction set, number of bits used to represent data, addressing modes).
                    </li>
                    <li>
                      <strong>Computer Organization</strong> refers to the operational units and their interconnections that <strong>realize the architectural specifications</strong>, which are <strong>transparent to the programmer</strong> (e.g., control signals, interfaces between computer and peripherals, memory technology used).
                    </li>
                  </ol>
                </div>
              </div>
            </section>
          `,
          quiz: [
            {
              id: "p1_q1",
              question: "Q1. Which of the following is considered an attribute of Computer Architecture rather than Computer Organization?",
              options: [
                "Control signals",
                "Number of bits used to represent various data types",
                "Memory technology (DRAM vs. SRAM)",
                "Clock frequency in GHz"
              ],
              correctIndex: 1,
              explanation: "صح جداً! تريكة الامتحان: 'Number of bits used to represent data' تبع الـ Architecture لأن المبرمج هو اللي بيحدد نوع وحجم المتغير (زي 32-bit أو 64-bit) ولو زاد بيحصل Overflow في الكود."
            },
            {
              id: "p1_q2",
              question: "Q2. Hardware details that are 'transparent to the programmer' (such as control signals and interfaces) belong to:",
              options: [
                "Computer Architecture",
                "Instruction Set Architecture (ISA)",
                "Computer Organization",
                "Addressing Modes"
              ],
              correctIndex: 2,
              explanation: "الله ينور! كلمة 'Transparent to the programmer' معناها مخفي تماماً عن المبرمج والكود مبيحسش بيه، ودي علامة الـ Computer Organization فوراً."
            },
            {
              id: "p1_q3",
              question: "Q3. What was the main advantage of the IBM System/370 family having the same Architecture across different models?",
              options: [
                "Eliminating the need for an ALU",
                "Protecting the customer's software investment",
                "Making all models run at the exact same clock speed",
                "Making hardware control signals visible to the programmer"
              ],
              correctIndex: 1,
              explanation: "مظبوط! كل أجهزة عائلة IBM 370 اتعملت بنفس الـ Architecture وبـ Organization مختلف عشان العميل لما يشتري جهاز أغلى وأسرع، برامجه القديمة تشتغل فوراً (Protecting software investment)."
            },
            {
              id: "p1_q4",
              question: "Q4. [True / False]: Increasing the processor clock frequency from 2 GHz to 4 GHz changes the Computer Architecture.",
              options: [
                "True",
                "False"
              ],
              correctIndex: 1,
              explanation: "الإجابة False (✖)! أي حاجة فيها تردد أو زمن (GHz, MHz, Nanoseconds) هي تغيير في الـ Organization فقط، بينما الـ Architecture والكود ثابتين زي ما هما."
            },
            {
              id: "p1_q5",
              question: "Q5. Attributes that have a direct impact on the logical execution of a program are defined as:",
              options: [
                "Computer Architecture",
                "Computer Organization",
                "System Bus Width",
                "Cache Memory Technology"
              ],
              correctIndex: 0,
              explanation: "برافو! أي صفة بتأثر بشكل مباشر على التنفيذ المنطقي للبرنامج (Logical execution of a program) ومرئية للمبرمج هي Computer Architecture."
            },
            {
              id: "p1_q6",
              question: "Q6. [True / False]: Two computers can have the exact same Architecture but completely different Organizations.",
              options: [
                "True",
                "False"
              ],
              correctIndex: 0,
              explanation: "الإجابة True (✔)! زي عائلة IBM System/370 وزي معالجات Core i3 و Core i9 اللي ليهم نفس الـ Architecture بس مختلفين في السرعة والعتاد الداخلي (Organization)."
            }
          ]
        },

        /* ====================================================================
           PART 2: Structure, Function & Structural Components (Slides 5 to 9)
           ==================================================================== */
        {
          id: "ch1-p2",
          code: "PART 2",
          slides: "Slides 5 to 9",
          title: "Structure, Function & Structural Components",
          hasContent: true,
          contentHtml: `
            <!-- 1. الفكرة الأساسية (النظام الهرمي وليه بنقسم الكمبيوتر كده؟) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">01</span>
                <h2 class="exp-sec-title">الفكرة الأساسية (النظام الهرمي وليه بنقسم الكمبيوتر كده؟)</h2>
              </div>

              <div class="balady-box">
                <div class="balady-label">💡 ليه بنقسم الكمبيوتر لـ Hierarchical System؟</div>
                <p>
                  الكمبيوتر جواه مليارات الترانزستورات.. لو مهندس بص له ككتلة واحدة عقله هيشت!
                  فالعلماء عملوا حل سحري اسمه <strong>"النظام الهرمي" (<span class="mono">Hierarchical System</span>)</strong>:
                  بنمسك السيستم الكبير نقسمه أجزاء، وكل جزء نقسمه أجزاء أصغر، وهكذا.
                </p>
                <p style="margin-top: 0.6rem;">
                  وفي كل مستوى بنسأل <strong>سؤالين بس</strong>:
                </p>
              </div>

              <div class="two-layers-split">
                <div class="layer-pill-card arch">
                  <div class="mono" style="color: var(--accent-cyan); font-weight: 800; font-size: 0.85rem; margin-bottom: 0.35rem;">
                    QUESTION 01 // STRUCTURE (الهيكل)
                  </div>
                  <p><strong>1. القطع متوصلة ببعض إزاي؟</strong> ===&gt; ده الهيكل (<span class="mono">Structure</span>).</p>
                </div>

                <div class="layer-pill-card org">
                  <div class="mono" style="color: var(--accent-amber); font-weight: 800; font-size: 0.85rem; margin-bottom: 0.35rem;">
                    QUESTION 02 // FUNCTION (الوظيفة)
                  </div>
                  <p><strong>2. كل حتة بتعمل إيه ودورها إيه؟</strong> ===&gt; دي الوظيفة (<span class="mono">Function</span>).</p>
                </div>
              </div>
            </section>

            <!-- 2. STRUCTURE vs. FUNCTION (التعريفات الأساسية) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">02</span>
                <h2 class="exp-sec-title">STRUCTURE vs. FUNCTION (التعريفات الأساسية)</h2>
              </div>

              <div class="two-layers-split">
                <div>
                  <div class="en-def-box">
                    <span class="en-def-label">• Structure (الهيكل) — Official Definition</span>
                    <p class="en-def-text">"The way in which the components are <strong>interrelated</strong>."</p>
                  </div>
                  <div class="balady-box">
                    <div class="balady-label">📖 التوضيح</div>
                    <p>طريقة التوصيل والتشبيك بين المكونات؛ السلك طالع منين ورايح لفين.</p>
                  </div>
                </div>

                <div>
                  <div class="en-def-box" style="border-left-color: var(--accent-amber);">
                    <span class="en-def-label" style="color: var(--accent-amber);">• Function (الوظيفة) — Official Definition</span>
                    <p class="en-def-text">"The <strong>operation of each individual component</strong> as part of the structure."</p>
                  </div>
                  <div class="balady-box">
                    <div class="balady-label">📖 التوضيح</div>
                    <p>شغل ودور كل حتة لوحدها جوه السيستم ده.</p>
                  </div>
                </div>
              </div>
            </section>

            <!-- 3. THE 4 BASIC COMPUTER FUNCTIONS (مع محاكي متحرك تفاعلي) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">03</span>
                <h2 class="exp-sec-title">THE 4 BASIC COMPUTER FUNCTIONS (وظائف الحاسوب الأربع وتشغيل المخطط)</h2>
              </div>

              <p style="margin-bottom: 0.75rem;">
                أي كمبيوتر في الكون معندوش غير <strong>4 وظائف أساسية بس</strong>. اضغط على أي وظيفة في المحاكي التفاعلي تحت عشان تشوف إشارات التحكم وحركة الداتا وهي ماشية في المخطط:
              </p>

              <!-- INTERACTIVE SIMULATOR 2: The 4 Basic Computer Functions -->
              <div class="sim-card" data-sim="sim-4-functions">
                <div class="sim-top-bar">
                  <div class="sim-title-group">
                    <span class="sim-live-dot"></span>
                    <span class="sim-badge-title">FIG 1.2 // 4 BASIC COMPUTER FUNCTIONS SIMULATOR</span>
                  </div>
                  <div class="sim-controls">
                    <button type="button" class="sim-step-btn active" data-sim-step="0">1. Control (التحكم)</button>
                    <button type="button" class="sim-step-btn" data-sim-step="1">2. Data Movement (النقل)</button>
                    <button type="button" class="sim-step-btn" data-sim-step="2">3. Data Storage (التخزين)</button>
                    <button type="button" class="sim-step-btn" data-sim-step="3">4. Data Processing (المعالجة)</button>
                    <button type="button" class="sim-step-btn play-auto" data-sim-autoplay>▶ تشغيل الدورة</button>
                  </div>
                </div>

                <div class="sim-svg-stage">
                  <svg viewBox="0 0 740 350" xmlns="http://www.w3.org/2000/svg">
                    <rect x="155" y="10" width="430" height="325" rx="14" fill="none" stroke="var(--border-strong)" stroke-width="2" stroke-dasharray="6 4" />
                    <text class="svg-label-mono" x="370" y="30" style="fill: var(--text-muted);">COMPUTER BOUNDARY</text>

                    <path class="wire-base" d="M 370 105 L 370 150" />
                    <path class="wire-flow amber active-flow" data-wire-step="0,3" d="M 370 105 L 370 150" />

                    <path class="wire-base" d="M 500 72 L 548 72 L 548 282 L 500 282" />
                    <path class="wire-flow amber active-flow" data-wire-step="0,2" d="M 500 72 L 548 72 L 548 282 L 500 282" />

                    <path class="wire-base" d="M 370 213 L 370 255" />
                    <path class="wire-flow cyan" data-wire-step="2,3" d="M 370 213 L 370 255" />

                    <path class="wire-base" d="M 135 282 L 240 282" />
                    <path class="wire-flow emerald" data-wire-step="1,2" d="M 135 282 L 240 282" />

                    <path class="wire-base" d="M 605 282 L 500 282" />
                    <path class="wire-flow emerald" data-wire-step="1,2" d="M 605 282 L 500 282" />

                    <circle class="data-packet-dot moving" data-packet-step="0,3" r="6" fill="#f59e0b">
                      <animateMotion dur="0.9s" repeatCount="indefinite" path="M 370 105 L 370 150" />
                    </circle>
                    <circle class="data-packet-dot moving" data-packet-step="0,2" r="5" fill="#f59e0b">
                      <animateMotion dur="1.6s" repeatCount="indefinite" path="M 500 72 L 548 72 L 548 282 L 500 282" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="1,2" r="6" fill="#10b981">
                      <animateMotion dur="1.1s" repeatCount="indefinite" path="M 135 282 L 240 282" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="1,2" r="6" fill="#10b981">
                      <animateMotion dur="1.1s" repeatCount="indefinite" path="M 605 282 L 500 282" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="3" r="6" fill="#06b6d4">
                      <animateMotion dur="0.85s" repeatCount="indefinite" path="M 370 255 L 370 213" />
                    </circle>

                    <!-- On-Wire Operation Callout Badges -->
                    <g class="svg-wire-callout active-pill" data-pill-step="0" data-click-step="0">
                      <rect class="svg-wire-pill" x="285" y="116" width="170" height="22" />
                      <text class="svg-wire-text" x="370" y="131">① إشارات تحكم Control ▼</text>
                    </g>

                    <g class="svg-wire-callout" data-pill-step="1" data-click-step="1">
                      <rect class="svg-wire-pill" x="136" y="242" width="102" height="22" />
                      <text class="svg-wire-text" x="187" y="257">② نقل I/O ◄►</text>
                    </g>

                    <g class="svg-wire-callout" data-pill-step="1" data-click-step="1">
                      <rect class="svg-wire-pill" x="502" y="242" width="102" height="22" />
                      <text class="svg-wire-text" x="553" y="257">◄► ② نقل Net</text>
                    </g>

                    <g class="svg-wire-callout" data-pill-step="2,3" data-click-step="3">
                      <rect class="svg-wire-pill" x="275" y="222" width="190" height="22" />
                      <text class="svg-wire-text" x="370" y="237">③ تخزين ◄► ④ سحب للحسابات</text>
                    </g>

                    <g class="svg-hw-group amber-node active-node" data-node-step="0" data-click-step="0">
                      <rect class="svg-hw-box" x="240" y="42" width="260" height="63" rx="10" />
                      <text class="svg-label-en" x="370" y="68">1. Control Mechanism</text>
                      <text class="svg-label-ar" x="370" y="90">وحدة التحكم (توجيه الإشارات)</text>
                    </g>

                    <g class="svg-hw-group cyan-node" data-node-step="3" data-click-step="3">
                      <rect class="svg-hw-box" x="240" y="150" width="260" height="63" rx="10" />
                      <text class="svg-label-en" x="370" y="176">4. Data Processing Facility</text>
                      <text class="svg-label-ar" x="370" y="198">معالجة البيانات والحسابات</text>
                    </g>

                    <g class="svg-hw-group emerald-node" data-node-step="2" data-click-step="2">
                      <rect class="svg-hw-box" x="240" y="255" width="260" height="63" rx="10" />
                      <text class="svg-label-en" x="370" y="281">3. Data Storage Facility</text>
                      <text class="svg-label-ar" x="370" y="303">تخزين البيانات (مؤقت أو دائم)</text>
                    </g>

                    <g class="svg-hw-group emerald-node" data-node-step="1" data-click-step="1">
                      <rect class="svg-hw-box" x="10" y="255" width="125" height="63" rx="8" />
                      <text class="svg-label-en" x="72" y="281" style="font-size:12px;">2. I/O Lines</text>
                      <text class="svg-label-ar" x="72" y="301">(شاشة / ماوس)</text>
                    </g>

                    <g class="svg-hw-group emerald-node" data-node-step="1" data-click-step="1">
                      <rect class="svg-hw-box" x="605" y="255" width="125" height="63" rx="8" />
                      <text class="svg-label-en" x="667" y="281" style="font-size:12px;">2. Comms</text>
                      <text class="svg-label-ar" x="667" y="301">(إنترنت وشبكات)</text>
                    </g>
                  </svg>
                </div>

                <div class="sim-status-ticker">
                  <span class="sim-status-text" data-sim-status>
                    وظيفة التحكم (Control): العقل الموجه اللي مش بتمشي فيه داتا، لكن بيطلع إشارات تحكم كهربائية تقول: "دلوقتي نخزن.. دلوقتي نعالج.. دلوقتي نبعت للشاشة".
                  </span>
                  <span class="sim-status-step-tag" data-sim-tag>FUNCTION 1 / 4</span>
                </div>
              </div>

              <div class="attr-grid">
                <div class="attr-card">
                  <span class="attr-term">1. Data Processing (معالجة البيانات)</span>
                  <p class="attr-desc">الحسابات واللوجيك اللي بيحصل جوه.</p>
                </div>

                <div class="attr-card">
                  <span class="attr-term">2. Data Storage (تخزين البيانات)</span>
                  <p class="attr-desc">حفظ الداتا، سواء مؤقت في الرامات أو دائم في الهارد.</p>
                </div>

                <div class="attr-card">
                  <span class="attr-term">3. Data Movement (نقل البيانات)</span>
                  <p class="attr-desc">حركة الداتا بين الكمبيوتر والعالم الخارجي عبر أجهزة الـ <span class="mono">I/O</span> أو عبر النت (<span class="mono">Communications</span>).</p>
                </div>

                <div class="attr-card">
                  <span class="attr-term" style="color: var(--accent-amber);">4. Control (التحكم)</span>
                  <p class="attr-desc">العقل الموجه اللي بيطلع إشارات تحكم كهربائية تدير الوظائف التلاتة التانيين.</p>
                </div>
              </div>

              <div class="exam-trap-box">
                <div class="exam-trap-title">⚠️ تريكة الامتحان الخاصة بالوظائف</div>
                <p>
                  لو سألك: إيه الوظيفة اللي بتدير وتوجه التلاتة التانيين؟ ===&gt; على طول <strong class="mono">CONTROL</strong>.
                </p>
              </div>
            </section>

            <!-- 4. TOP-LEVEL COMPUTER STRUCTURE (مع محاكي الـ System Bus المتحرك) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">04</span>
                <h2 class="exp-sec-title">TOP-LEVEL COMPUTER STRUCTURE (مكونات الحاسوب ككل وتشغيل المخطط)</h2>
              </div>

              <p style="margin-bottom: 0.75rem;">
                لو فتحت كيسة أي كمبيوتر من بره هتلاقيه متكون من <strong>4 قطع أساسية</strong>. شغل المحاكي تحت عشان تشوف إزاي الأمر بيتطلب من الـ <span class="mono">Main Memory</span> ويتنفذ في الـ <span class="mono">CPU</span> ويخرج للـ <span class="mono">I/O</span> عبر الـ <span class="mono">System Bus</span>:
              </p>

              <!-- INTERACTIVE SIMULATOR 3: Top-Level Computer Structure -->
              <div class="sim-card" data-sim="sim-top-structure">
                <div class="sim-top-bar">
                  <div class="sim-title-group">
                    <span class="sim-live-dot"></span>
                    <span class="sim-badge-title">FIG 1.3 // TOP-LEVEL COMPUTER &amp; SYSTEM BUS SIMULATOR</span>
                  </div>
                  <div class="sim-controls">
                    <button type="button" class="sim-step-btn active" data-sim-step="0">خطوة 1: CPU يطلب عنوان الأمر</button>
                    <button type="button" class="sim-step-btn" data-sim-step="1">خطوة 2: الرامات تبعت الأمر للـ CPU</button>
                    <button type="button" class="sim-step-btn" data-sim-step="2">خطوة 3: إخراج النتيجة عبر الـ I/O</button>
                    <button type="button" class="sim-step-btn play-auto" data-sim-autoplay>▶ تشغيل تلقائي</button>
                  </div>
                </div>

                <div class="sim-svg-stage">
                  <svg viewBox="0 0 740 345" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="10" width="700" height="320" rx="14" fill="none" stroke="var(--border-strong)" stroke-width="2" />
                    <text class="svg-label-mono" x="370" y="30" style="fill: var(--text-muted);">COMPUTER (TOP-LEVEL STRUCTURE)</text>

                    <rect x="60" y="152" width="620" height="36" rx="6" fill="var(--bg-surface)" stroke="var(--accent-amber)" stroke-width="2" />
                    <text class="svg-label-mono" x="370" y="174" style="fill: var(--accent-amber); font-size:12px;">
                      ◄========= SYSTEM BUS (SYSTEM INTERCONNECTION) =========►
                    </text>

                    <path class="wire-base" d="M 190 115 L 190 152" />
                    <path class="wire-base" d="M 550 115 L 550 152" />
                    <path class="wire-base" d="M 370 188 L 370 232" />
                    <path class="wire-base" d="M 510 268 L 595 268" />

                    <path class="wire-flow amber active-flow" data-wire-step="0" d="M 190 115 L 190 170 L 550 170 L 550 115" />
                    <path class="wire-flow cyan" data-wire-step="1" d="M 550 115 L 550 170 L 190 170 L 190 115" />
                    <path class="wire-flow emerald" data-wire-step="2" d="M 190 115 L 190 170 L 370 170 L 370 232" />
                    <path class="wire-flow emerald" data-wire-step="2" d="M 510 268 L 595 268" />

                    <circle class="data-packet-dot moving" data-packet-step="0" r="7" fill="#f59e0b">
                      <animateMotion dur="1.3s" repeatCount="indefinite" path="M 190 115 L 190 170 L 550 170 L 550 115" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="1" r="7" fill="#06b6d4">
                      <animateMotion dur="1.3s" repeatCount="indefinite" path="M 550 115 L 550 170 L 190 170 L 190 115" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="2" r="7" fill="#10b981">
                      <animateMotion dur="1.3s" repeatCount="indefinite" path="M 190 115 L 190 170 L 370 170 L 370 268 L 595 268" />
                    </circle>

                    <!-- On-Wire Operation Callout Pills -->
                    <g class="svg-wire-callout active-pill" data-pill-step="0" data-click-step="0">
                      <rect class="svg-wire-pill" x="85" y="122" width="210" height="22" />
                      <text class="svg-wire-text" x="190" y="137">① طلب عنوان الأمر (Address) ──►</text>
                    </g>

                    <g class="svg-wire-callout" data-pill-step="1" data-click-step="1">
                      <rect class="svg-wire-pill" x="445" y="122" width="210" height="22" />
                      <text class="svg-wire-text" x="550" y="137">◄── ② إرسال الأمر والداتا للـ CPU</text>
                    </g>

                    <g class="svg-wire-callout" data-pill-step="2" data-click-step="2">
                      <rect class="svg-wire-pill" x="265" y="198" width="210" height="22" />
                      <text class="svg-wire-text" x="370" y="213">③ إخراج النتيجة للـ I/O والشاشة ▼</text>
                    </g>

                    <g class="svg-hw-group cyan-node active-node" data-node-step="0,1,2" data-click-step="0">
                      <rect class="svg-hw-box" x="65" y="45" width="250" height="70" rx="10" />
                      <text class="svg-label-en" x="190" y="72">Central Processing Unit (CPU)</text>
                      <text class="svg-label-ar" x="190" y="96">يتحكم في الكمبيوتر ويعالج الداتا</text>
                    </g>

                    <g class="svg-hw-group emerald-node" data-node-step="0,1" data-click-step="1">
                      <rect class="svg-hw-box" x="425" y="45" width="250" height="70" rx="10" />
                      <text class="svg-label-en" x="550" y="72">Main Memory (RAM)</text>
                      <text class="svg-label-ar" x="550" y="96">بتشيل البرامج والداتا الشغالة حالياً</text>
                    </g>

                    <g class="svg-hw-group amber-node" data-node-step="2" data-click-step="2">
                      <rect class="svg-hw-box" x="230" y="232" width="280" height="72" rx="10" />
                      <text class="svg-label-en" x="370" y="260">Input / Output (I/O)</text>
                      <text class="svg-label-ar" x="370" y="284">نقل الداتا بين الكمبيوتر والعالم الخارجي</text>
                    </g>

                    <rect x="595" y="246" width="110" height="44" rx="6" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-dasharray="4 3" />
                    <text class="svg-label-ar" x="650" y="273" style="font-size:11px;">[العالم الخارجي]</text>
                  </svg>
                </div>

                <div class="sim-status-ticker">
                  <span class="sim-status-text" data-sim-status>
                    خطوة 1: البروسيسور (CPU) عاوز ينفذ أمر، فيبعت عنوان الأمر على سلك الـ System Bus للرامات (Main Memory).
                  </span>
                  <span class="sim-status-step-tag" data-sim-tag>BUS CYCLE 1 / 3</span>
                </div>
              </div>

              <h3 style="font-size: 1.05rem; font-weight: 800; margin: 1.1rem 0 0.65rem; color: var(--accent-cyan);">
                📌 التعريفات الإنجليزية للمكونات (Computer Components):
              </h3>

              <div class="attr-grid">
                <div class="attr-card">
                  <span class="attr-term">1. CPU (Central Processing Unit)</span>
                  <p class="attr-desc ltr-block">Controls computer operation and performs data processing.</p>
                </div>

                <div class="attr-card">
                  <span class="attr-term">2. Main Memory</span>
                  <p class="attr-desc ltr-block">Stores data and instructions currently in use.</p>
                </div>

                <div class="attr-card">
                  <span class="attr-term">3. I/O (Input/Output)</span>
                  <p class="attr-desc ltr-block">Moves data between the computer and its external environment.</p>
                </div>

                <div class="attr-card">
                  <span class="attr-term">4. System Interconnection</span>
                  <p class="attr-desc ltr-block">Mechanism (typically a system bus) providing communication among CPU, main memory, and I/O.</p>
                </div>
              </div>
            </section>

            <!-- 5. INTERNAL PROCESSOR/CPU STRUCTURE (مع محاكي المعالج من الداخل) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">05</span>
                <h2 class="exp-sec-title">INTERNAL PROCESSOR / CPU STRUCTURE (مكونات المعالج من جوه وتشغيل المخطط)</h2>
              </div>

              <p style="margin-bottom: 0.75rem;">
                لو فتحنا المعالج (<span class="mono">CPU</span>) نفسه بميكروسكوب، هنلاقي جواه <strong>4 حاجات مكملين لبعض</strong>. جرب المحاكي تحت وشوف إزاي الأمر بيتنفذ جوه البروسيسور في نانو ثانية:
              </p>

              <!-- INTERACTIVE SIMULATOR 4: Internal CPU Structure -->
              <div class="sim-card" data-sim="sim-cpu-internal">
                <div class="sim-top-bar">
                  <div class="sim-title-group">
                    <span class="sim-live-dot"></span>
                    <span class="sim-badge-title">FIG 1.4 // INTERNAL CPU MICRO-ARCHITECTURE SIMULATOR</span>
                  </div>
                  <div class="sim-controls">
                    <button type="button" class="sim-step-btn active" data-sim-step="0">1. دخول الأمر في الـ Registers</button>
                    <button type="button" class="sim-step-btn" data-sim-step="1">2. الـ CU تفهم وتأمر الـ ALU</button>
                    <button type="button" class="sim-step-btn" data-sim-step="2">3. الـ ALU تجمع وترجع النتيجة</button>
                    <button type="button" class="sim-step-btn play-auto" data-sim-autoplay>▶ تشغيل تلقائي</button>
                  </div>
                </div>

                <div class="sim-svg-stage">
                  <svg viewBox="0 0 740 345" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="10" width="700" height="320" rx="14" fill="none" stroke="var(--accent-cyan)" stroke-width="2" />
                    <text class="svg-label-mono" x="370" y="30">CPU (INTERNAL PROCESSOR STRUCTURE)</text>

                    <rect x="60" y="152" width="620" height="36" rx="6" fill="var(--bg-surface)" stroke="var(--accent-cyan)" stroke-width="2" />
                    <text class="svg-label-mono" x="370" y="174" style="font-size:12px;">
                      ◄========= INTERNAL CPU BUS (CPU INTERCONNECTION) =========►
                    </text>

                    <path class="wire-base" d="M 190 120 L 190 152" />
                    <path class="wire-base" d="M 550 120 L 550 152" />
                    <path class="wire-base" d="M 370 188 L 370 232" />

                    <path class="wire-flow emerald active-flow" data-wire-step="0" d="M 370 232 L 370 170 L 190 170 L 190 120" />
                    <path class="wire-flow amber" data-wire-step="1" d="M 190 120 L 190 170 L 550 170 L 550 120" />
                    <path class="wire-flow cyan" data-wire-step="2" d="M 370 232 L 370 170 L 550 170 L 550 120" />

                    <circle class="data-packet-dot moving" data-packet-step="0" r="7" fill="#10b981">
                      <animateMotion dur="1.1s" repeatCount="indefinite" path="M 370 232 L 370 170 L 190 170 L 190 120" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="1" r="7" fill="#f59e0b">
                      <animateMotion dur="1.0s" repeatCount="indefinite" path="M 190 120 L 190 170 L 550 170 L 550 120" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="2" r="7" fill="#06b6d4">
                      <animateMotion dur="0.9s" repeatCount="indefinite" path="M 550 120 L 550 170 L 370 170 L 370 232" />
                    </circle>

                    <!-- On-Wire Operation Callout Pills -->
                    <g class="svg-wire-callout active-pill" data-pill-step="0" data-click-step="0">
                      <rect class="svg-wire-pill" x="260" y="198" width="220" height="22" />
                      <text class="svg-wire-text" x="370" y="213">① قراءة الأمر من الـ Registers ▲</text>
                    </g>

                    <g class="svg-wire-callout" data-pill-step="1" data-click-step="1">
                      <rect class="svg-wire-pill" x="85" y="124" width="210" height="22" />
                      <text class="svg-wire-text" x="190" y="139">② الـ CU تفك الشفرة وتأمر الـ ALU ──►</text>
                    </g>

                    <g class="svg-wire-callout" data-pill-step="2" data-click-step="2">
                      <rect class="svg-wire-pill" x="440" y="124" width="220" height="22" />
                      <text class="svg-wire-text" x="550" y="139">③ الـ ALU تجمع (15+27=42) وتحفظ ▼</text>
                    </g>

                    <g class="svg-hw-group amber-node" data-node-step="0,1" data-click-step="1">
                      <rect class="svg-hw-box" x="55" y="42" width="270" height="78" rx="10" />
                      <text class="svg-label-en" x="190" y="68">Control Unit (CU)</text>
                      <text class="svg-label-ar" x="190" y="92">المدير اللي بيفك التعليمات وبيصدر أوامر</text>
                      <text class="svg-label-mono" x="190" y="110" style="fill: var(--accent-amber);">DECODE &amp; CONTROL SIGNALS</text>
                    </g>

                    <g class="svg-hw-group cyan-node" data-node-step="1,2" data-click-step="2">
                      <rect class="svg-hw-box" x="415" y="42" width="270" height="78" rx="10" />
                      <text class="svg-label-en" x="550" y="68">Arithmetic &amp; Logic Unit (ALU)</text>
                      <text class="svg-label-ar" x="550" y="92">المصنع اللي بينفذ الجمع والطرح واللوجيك</text>
                      <text class="svg-label-mono" x="550" y="110">EXECUTE: R1 + R2 = RESULT</text>
                    </g>

                    <g class="svg-hw-group emerald-node active-node" data-node-step="0,2" data-click-step="0">
                      <rect class="svg-hw-box" x="190" y="232" width="360" height="80" rx="10" />
                      <text class="svg-label-en" x="370" y="259">Registers (PC | IR | R1=15 | R2=27 | ACC=42)</text>
                      <text class="svg-label-ar" x="370" y="282">خلايا تخزين سريعة جداً ومؤقتة جوه البروسيسور نفسه</text>
                      <text class="svg-label-mono" x="370" y="302" style="fill: var(--accent-emerald);">ULTRA-FAST CPU TEMPORARY STORAGE</text>
                    </g>
                  </svg>
                </div>

                <div class="sim-status-ticker">
                  <span class="sim-status-text" data-sim-status>
                    خطوة 1: الأمر والأرقام بتدخل تقعد في سجل سريع جداً (Register) جوه البروسيسور، ووحدة التحكم (CU) تسحبه عشان تقرأه وتفهمه.
                  </span>
                  <span class="sim-status-step-tag" data-sim-tag>CPU NANO-STEP 1 / 3</span>
                </div>
              </div>

              <h3 style="font-size: 1.05rem; font-weight: 800; margin: 1.1rem 0 0.65rem; color: var(--accent-amber);">
                📌 التعريفات الإنجليزية للمكونات (Processor Components):
              </h3>

              <div class="attr-grid">
                <div class="attr-card">
                  <span class="attr-term" style="color: var(--accent-amber);">1. Control Unit (CU)</span>
                  <p class="attr-desc ltr-block">Controls the operation of the CPU and hence the computer.</p>
                </div>

                <div class="attr-card">
                  <span class="attr-term" style="color: var(--accent-amber);">2. Arithmetic &amp; Logic Unit (ALU)</span>
                  <p class="attr-desc ltr-block">Performs data processing (arithmetic &amp; logical operations).</p>
                </div>

                <div class="attr-card">
                  <span class="attr-term" style="color: var(--accent-amber);">3. Registers</span>
                  <p class="attr-desc ltr-block">Provides internal ultra-high-speed temporary storage inside the CPU.</p>
                </div>

                <div class="attr-card">
                  <span class="attr-term" style="color: var(--accent-amber);">4. CPU Interconnection</span>
                  <p class="attr-desc ltr-block">Internal pathways connecting CU, ALU, and Registers.</p>
                </div>
              </div>

              <div class="exam-trap-box">
                <div class="exam-trap-title">⚠️ أخطر تريكات الامتحان على الجزء ده (3 Traps)</div>
                <div class="exam-trap-list">
                  <p>
                    <strong>⚠️ Trap 1 (الفخ الأكبر في امتحانات المادة دي):</strong><br/>
                    • مكونات الكمبيوتر ككل: <span class="mono">[CPU, Main Memory, I/O, System Interconnection]</span><br/>
                    • مكونات البروسيسور من جوه: <span class="mono">[Control Unit, ALU, Registers, CPU Interconnection]</span><br/>
                    لو جالك سؤال <span class="mono">"Components of PROCESSOR"</span> وحطيت فيه <span class="mono">Main Memory</span> بتاخد صفر فوراً!
                  </p>
                  <p>
                    <strong>⚠️ Trap 2:</strong><br/>
                    • مين بيعمل <span class="mono">Data processing</span> في الكمبيوتر ككل؟ ===&gt; <strong class="mono">CPU</strong>.<br/>
                    • مين بيعمل <span class="mono">Data processing</span> جوه المعالج نفسه؟ ===&gt; <strong class="mono">ALU</strong>.
                  </p>
                  <p>
                    <strong>⚠️ Trap 3:</strong><br/>
                    • أسلاك الربط بين القطع الكبيرة على المذربورد ===&gt; <strong class="mono">System Interconnection (System Bus)</strong>.<br/>
                    • أسلاك الربط بين وحدات المعالج جوه الشريحة ====&gt; <strong class="mono">CPU Interconnection (Internal Bus)</strong>.
                  </p>
                </div>
              </div>
            </section>

            <!-- 6. POPULAR EXAM TRUE / FALSE DRILLS -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">06</span>
                <h2 class="exp-sec-title">POPULAR EXAM TRUE / FALSE DRILLS (أسئلة صح وغلط المشهورة)</h2>
              </div>

              <div class="tf-drills-grid">
                <div class="tf-card">
                  <p class="tf-question">[Q1] "Main memory and I/O modules are structural components of the processor."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge false">Answer: FALSE (✖)</span>
                    <span class="ltr-block">(They are components of the <strong>COMPUTER</strong>, not the processor).</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q2] "The CPU performs both control and data processing functions."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge true">Answer: TRUE (✔)</span>
                    <span class="ltr-block">(Control via <strong>CU</strong>, Processing via <strong>ALU</strong>).</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q3] "Registers provide long-term permanent storage for files."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge false">Answer: FALSE (✖)</span>
                    <span class="ltr-block">(Registers provide <strong>temporary, ultra-fast storage</strong> for CPU execution).</span>
                  </div>
                </div>
              </div>
            </section>

            <!-- 7. SHEET 1: OFFICIAL EXAM QUESTIONS & MODEL ANSWERS (1.2 to 1.5) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">07</span>
                <h2 class="exp-sec-title">SHEET 1: OFFICIAL EXAM QUESTIONS &amp; MODEL ANSWERS (أسئلة الشيت 1.2 إلى 1.5)</h2>
              </div>

              <div style="display: flex; flex-direction: column; gap: 1.25rem;">
                <div class="sheet-card">
                  <div class="sheet-q-box">
                    <span class="mono" style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700;">QUESTION 1.2 // SHEET 1</span>
                    <p style="font-family: var(--font-en); font-weight: 700; font-size: 1.02rem; margin-top: 0.35rem;">
                      "What, in general terms, is the distinction between computer structure and computer function?"
                    </p>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
                    <span style="font-weight: 800; color: var(--accent-emerald);">✅ Model Answer:</span>
                    <button type="button" class="tool-pill-btn" onclick="const box = this.parentElement.nextElementSibling; box.style.display = box.style.display === 'none' ? 'block' : 'none';">
                      إخفاء / إظهار الإجابة للتسميع
                    </button>
                  </div>
                  <div class="sheet-a-box">
                    <ol>
                      <li><strong>Computer Structure:</strong> The way in which the components are interrelated.</li>
                      <li><strong>Computer Function:</strong> The operation of each individual component as part of the structure.</li>
                    </ol>
                  </div>
                </div>

                <div class="sheet-card">
                  <div class="sheet-q-box">
                    <span class="mono" style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700;">QUESTION 1.3 // SHEET 1</span>
                    <p style="font-family: var(--font-en); font-weight: 700; font-size: 1.02rem; margin-top: 0.35rem;">
                      "What are the four main functions of a computer?"
                    </p>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
                    <span style="font-weight: 800; color: var(--accent-emerald);">✅ Model Answer:</span>
                    <button type="button" class="tool-pill-btn" onclick="const box = this.parentElement.nextElementSibling; box.style.display = box.style.display === 'none' ? 'block' : 'none';">
                      إخفاء / إظهار الإجابة للتسميع
                    </button>
                  </div>
                  <div class="sheet-a-box">
                    <ol>
                      <li><strong>Data Processing:</strong> Manipulating and computing data.</li>
                      <li><strong>Data Storage:</strong> Holding data temporarily (Main Memory) or permanently (Secondary Storage).</li>
                      <li><strong>Data Movement:</strong> Transferring data between computer and external environment (I/O &amp; Network).</li>
                      <li><strong>Control:</strong> Managing resources and directing the other three functions.</li>
                    </ol>
                  </div>
                </div>

                <div class="sheet-card">
                  <div class="sheet-q-box">
                    <span class="mono" style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700;">QUESTION 1.4 // SHEET 1</span>
                    <p style="font-family: var(--font-en); font-weight: 700; font-size: 1.02rem; margin-top: 0.35rem;">
                      "List and briefly define the main structural components of a computer."
                    </p>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
                    <span style="font-weight: 800; color: var(--accent-emerald);">✅ Model Answer:</span>
                    <button type="button" class="tool-pill-btn" onclick="const box = this.parentElement.nextElementSibling; box.style.display = box.style.display === 'none' ? 'block' : 'none';">
                      إخفاء / إظهار الإجابة للتسميع
                    </button>
                  </div>
                  <div class="sheet-a-box">
                    <ol>
                      <li><strong>CPU (Central Processing Unit):</strong> Controls the operation of the computer and performs its data processing functions; often simply called processor.</li>
                      <li><strong>Main Memory:</strong> Stores data and programs currently in use.</li>
                      <li><strong>I/O (Input/Output):</strong> Moves data between the computer and its external environment.</li>
                      <li><strong>System Interconnection:</strong> Mechanism (typically a system bus) providing communication among CPU, main memory, and I/O.</li>
                    </ol>
                  </div>
                </div>

                <div class="sheet-card">
                  <div class="sheet-q-box">
                    <span class="mono" style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700;">QUESTION 1.5 // SHEET 1</span>
                    <p style="font-family: var(--font-en); font-weight: 700; font-size: 1.02rem; margin-top: 0.35rem;">
                      "List and briefly define the main structural components of a processor."
                    </p>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
                    <span style="font-weight: 800; color: var(--accent-emerald);">✅ Model Answer:</span>
                    <button type="button" class="tool-pill-btn" onclick="const box = this.parentElement.nextElementSibling; box.style.display = box.style.display === 'none' ? 'block' : 'none';">
                      إخفاء / إظهار الإجابة للتسميع
                    </button>
                  </div>
                  <div class="sheet-a-box">
                    <ol>
                      <li><strong>Control Unit (CU):</strong> Controls the operation of the CPU and hence the computer.</li>
                      <li><strong>Arithmetic &amp; Logic Unit (ALU):</strong> Performs data processing functions (arithmetic &amp; logic).</li>
                      <li><strong>Registers:</strong> Provides internal high-speed temporary storage to the CPU.</li>
                      <li><strong>CPU Interconnection:</strong> Mechanism providing communication among CU, ALU, and Registers.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
          `,
          quiz: [
            {
              id: "p2_q1",
              question: "Q1. 'The way in which the components of a computer are interrelated' is the definition of:",
              options: [
                "Computer Function",
                "Computer Structure",
                "Data Processing",
                "Control Mechanism"
              ],
              correctIndex: 1,
              explanation: "صح جداً! طريقة التوصيل والترابط بين المكونات (Interrelated) هي الـ Structure، بينما وظيفة وشغل كل مكون لوحده هي الـ Function."
            },
            {
              id: "p2_q2",
              question: "Q2. Which of the four basic computer functions manages the computer's resources and directs the other three functions?",
              options: [
                "Data Movement",
                "Data Processing",
                "Control",
                "Data Storage"
              ],
              correctIndex: 2,
              explanation: "الله ينور! وظيفة الـ Control هي العقل الموجه اللي بيطلع إشارات التحكم عشان يدير الـ Processing والـ Storage والـ Movement."
            },
            {
              id: "p2_q3",
              question: "Q3. [EXAM TRAP]: Which of the following is NOT an internal structural component of the Processor (CPU)?",
              options: [
                "Arithmetic and Logic Unit (ALU)",
                "Control Unit (CU)",
                "Main Memory",
                "Registers"
              ],
              correctIndex: 2,
              explanation: "برافو عليك! ده الفخ الأكبر (Trap 1): الـ Main Memory من مكونات الـ Computer ككل، ومش جوه الـ Processor نفسه."
            },
            {
              id: "p2_q4",
              question: "Q4. Inside the CPU itself, which component is directly responsible for performing arithmetic and logical data processing?",
              options: [
                "Control Unit (CU)",
                "Arithmetic and Logic Unit (ALU)",
                "System Interconnection",
                "I/O Module"
              ],
              correctIndex: 1,
              explanation: "مظبوط! (Trap 2): في الكمبيوتر ككل الـ CPU بيعمل المعالجة، لكن جوه الـ CPU نفسه المصنع اللي بينفذ الجمع والطرح واللوجيك هو الـ ALU."
            },
            {
              id: "p2_q5",
              question: "Q5. The mechanism that provides internal communication among the Control Unit, ALU, and Registers is called:",
              options: [
                "System Bus (System Interconnection)",
                "CPU Interconnection (Internal CPU Bus)",
                "External I/O Interface",
                "Network Communications Line"
              ],
              correctIndex: 1,
              explanation: "صح! (Trap 3): التوصيل الداخلي بين الـ CU والـ ALU والـ Registers جوه شريحة المعالج اسمه CPU Interconnection، أما اللي على المذربورد بره فاسمه System Interconnection."
            },
            {
              id: "p2_q6",
              question: "Q6. [True / False]: Main memory and I/O modules are structural components of the processor.",
              options: [
                "True",
                "False"
              ],
              correctIndex: 1,
              explanation: "الإجابة False (✖)! الـ Main Memory والـ I/O هي مكونات أساسية للـ Computer ككل، مش للـ Processor."
            },
            {
              id: "p2_q7",
              question: "Q7. [True / False]: Registers provide long-term permanent storage for user files.",
              options: [
                "True",
                "False"
              ],
              correctIndex: 1,
              explanation: "الإجابة False (✖)! الـ Registers بتوفر تخزين مؤقت وفائق السرعة (Temporary, ultra-high-speed storage) جوه البروسيسور أثناء تنفيذ الأوامر فقط."
            }
          ]
        },

        /* ====================================================================
           PART 3: Multicore Computers, Cache Memory & Motherboard Layout (Slides 10 to 15)
           ==================================================================== */
        {
          id: "ch1-p3",
          code: "PART 3",
          slides: "Slides 10 to 15",
          title: "Multicore Computers, Cache Memory & Motherboard Layout",
          hasContent: true,
          contentHtml: `
            <!-- 1. الفكرة الأساسية (ليه البروسيسور مفضلش نواة واحدة؟ وخناقة الـ GHz والحرارة) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">01</span>
                <h2 class="exp-sec-title">الفكرة الأساسية (ليه البروسيسور مفضلش نواة واحدة؟ وخناقة الـ GHz والحرارة)</h2>
              </div>

              <div class="balady-box">
                <div class="balady-label">🔥 حائط الطاقة والحرارة (Power &amp; Thermal Wall)</div>
                <p>
                  زمان لحد سنة <strong>2004</strong>، الشركات كانت بتعمل حركة واحدة بس علشان تسرع الجهاز:
                  <strong>"علّي سرعة الساعة (<span class="mono">Clock Frequency</span>)!"</strong>.. من <span class="mono">500MHz</span> لـ <span class="mono">1GHz</span> لـ <span class="mono">2GHz</span> لـ <span class="mono">3.8GHz</span>.
                </p>
                <p style="margin-top: 0.6rem;">
                  وفجأة المهندسين خبطوا في حيطة سد سموها (<strong class="mono" style="color: var(--accent-rose);">Power &amp; Thermal Wall</strong>):
                </p>
                <ul style="margin-top: 0.5rem; padding-right: 1.2rem; list-style: disc;">
                  <li>استهلاك الكهربا بيتناسب طردياً مع <strong>مربع الجهد ومكعب التردد</strong>!</li>
                  <li>الرقاقة بقت تسخن لدرجة الغليان ومفيش مروحة في الكون تقدر تبردها!</li>
                </ul>
                <p style="margin-top: 0.65rem;">
                  فقال المهندسون: <strong>"كفاية جنان في السرعة لنواة واحدة.. إحنا نثبت التردد عند سرعة هادية ومعقولة (زي <span class="mono">2.5GHz</span> إلى <span class="mono">3.5GHz</span>)، وبدل ما نحط مخ واحد يجري ويسخن، نحط كذا مخ (<span class="mono">Cores</span>) يشتغلوا مع بعض في نفس الوقت على نفس شريحة السيليكون!"</strong>.. ومن هنا اتولد الـ <strong class="mono" style="color: var(--accent-cyan);">Multicore</strong>.
                </p>
              </div>
            </section>

            <!-- 2. MULTICORE PROCESSORS (المعالجات متعددة الأنوية بالتفصيل) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">02</span>
                <h2 class="exp-sec-title">MULTICORE PROCESSORS (المعالجات متعددة الأنوية بالتفصيل)</h2>
              </div>

              <div class="en-def-box">
                <span class="en-def-label">Official English Definition</span>
                <p class="en-def-text">
                  "A <strong>multicore processor</strong> is a <strong>single computing component (chip)</strong> that contains two or more independent processing units, called <strong>cores</strong>, each capable of fetching, decoding, and executing program instructions."
                </p>
              </div>

              <div class="balady-box">
                <div class="balady-label">🧠 يعني إيه Core أصلاً؟ (What is a Core?)</div>
                <p>
                  النواة (<span class="mono">Core</span>) دي مش حتة زيادة في البروسيسور.. دي <strong>"بروسيسور كامل مكمل"</strong> بذاته! كل <span class="mono">Core</span> جواها:
                </p>
                <div class="attr-grid" style="margin-top: 0.75rem; margin-bottom: 0;">
                  <div class="attr-card">
                    <span class="attr-term">1. Control Unit (CU)</span>
                    <p class="attr-desc">وحدة تحكم خاصة بيها لفك شفرة الأوامر.</p>
                  </div>
                  <div class="attr-card">
                    <span class="attr-term">2. ALU</span>
                    <p class="attr-desc">وحدة حساب ومنطق خاصة بيها.</p>
                  </div>
                  <div class="attr-card">
                    <span class="attr-term">3. Registers &amp; L1/L2</span>
                    <p class="attr-desc">مجموعة سجلات وكاش <span class="mono">L1/L2</span> خاصة بيها.</p>
                  </div>
                </div>
              </div>

              <!-- INTERACTIVE SIMULATOR 5: Multicore Chip & Cache Hierarchy -->
              <div class="sim-card" data-sim="sim-multicore-cache">
                <div class="sim-top-bar">
                  <div class="sim-title-group">
                    <span class="sim-live-dot"></span>
                    <span class="sim-badge-title">FIG 1.5 // MULTICORE CHIP &amp; L1/L2/L3 CACHE SIMULATOR</span>
                  </div>
                  <div class="sim-controls">
                    <button type="button" class="sim-step-btn active" data-sim-step="0">1. تشغيل الأنوية بالتوازي (Parallel Cores)</button>
                    <button type="button" class="sim-step-btn" data-sim-step="1">2. كاش L1/L2 السريعة (1 ns)</button>
                    <button type="button" class="sim-step-btn" data-sim-step="2">3. كاش L3 المشتركة والرامات</button>
                    <button type="button" class="sim-step-btn play-auto" data-sim-autoplay>▶ تشغيل تلقائي</button>
                  </div>
                </div>

                <div class="sim-svg-stage">
                  <svg viewBox="0 0 740 385" xmlns="http://www.w3.org/2000/svg">
                    <!-- Single Processor Silicon Chip Frame -->
                    <rect x="30" y="10" width="680" height="275" rx="14" fill="none" stroke="var(--accent-cyan)" stroke-width="2.5" />
                    <text class="svg-label-mono" x="370" y="32">PROCESSOR CHIP (SINGLE SILICON DIE // شريحة معالج واحدة)</text>

                    <!-- CORE 1 -->
                    <g class="svg-hw-group cyan-node active-node" data-node-step="0,1" data-click-step="0">
                      <rect class="svg-hw-box" x="55" y="45" width="280" height="130" rx="10" />
                      <text class="svg-label-en" x="195" y="68">CORE 1 (Independent CPU)</text>
                      <!-- CU & ALU inside Core 1 -->
                      <rect x="72" y="80" width="115" height="36" rx="6" fill="var(--bg-elevated)" stroke="var(--accent-amber)" />
                      <text class="svg-label-mono" x="129" y="103" style="fill:var(--accent-amber);">CU + ALU</text>
                      <rect x="200" y="80" width="118" height="36" rx="6" fill="var(--bg-elevated)" stroke="var(--accent-cyan)" />
                      <text class="svg-label-mono" x="259" y="103">Registers</text>
                      <!-- Private L1/L2 inside Core 1 -->
                      <rect x="72" y="126" width="246" height="34" rx="6" fill="var(--bg-surface)" stroke="var(--accent-emerald)" />
                      <text class="svg-label-mono" x="195" y="148" style="fill:var(--accent-emerald);">② Private L1 &amp; L2 Cache (1 ns)</text>
                    </g>

                    <!-- CORE 2 -->
                    <g class="svg-hw-group cyan-node active-node" data-node-step="0,1" data-click-step="0">
                      <rect class="svg-hw-box" x="405" y="45" width="280" height="130" rx="10" />
                      <text class="svg-label-en" x="545" y="68">CORE 2 (Independent CPU)</text>
                      <!-- CU & ALU inside Core 2 -->
                      <rect x="422" y="80" width="115" height="36" rx="6" fill="var(--bg-elevated)" stroke="var(--accent-amber)" />
                      <text class="svg-label-mono" x="479" y="103" style="fill:var(--accent-amber);">CU + ALU</text>
                      <rect x="550" y="80" width="118" height="36" rx="6" fill="var(--bg-elevated)" stroke="var(--accent-cyan)" />
                      <text class="svg-label-mono" x="609" y="103">Registers</text>
                      <!-- Private L1/L2 inside Core 2 -->
                      <rect x="422" y="126" width="246" height="34" rx="6" fill="var(--bg-surface)" stroke="var(--accent-emerald)" />
                      <text class="svg-label-mono" x="545" y="148" style="fill:var(--accent-emerald);">② Private L1 &amp; L2 Cache (1 ns)</text>
                    </g>

                    <!-- Callout 1: Parallel Execution Badge between Cores -->
                    <g class="svg-wire-callout active-pill" data-pill-step="0" data-click-step="0">
                      <rect class="svg-wire-pill" x="305" y="96" width="130" height="24" />
                      <text class="svg-wire-text" x="370" y="112">① توازي Parallel</text>
                    </g>

                    <!-- Wires from Core 1 & Core 2 to Shared L3 Cache -->
                    <path class="wire-base" d="M 195 175 L 195 202 L 370 202 L 370 218" />
                    <path class="wire-base" d="M 545 175 L 545 202 L 370 202 L 370 218" />

                    <path class="wire-flow emerald active-flow" data-wire-step="1,2" d="M 195 175 L 195 202 L 370 202 L 370 218" />
                    <path class="wire-flow emerald active-flow" data-wire-step="1,2" d="M 545 175 L 545 202 L 370 202 L 370 218" />

                    <!-- Callout 2: L1/L2 Fast Access -->
                    <g class="svg-wire-callout" data-pill-step="1" data-click-step="1">
                      <rect class="svg-wire-pill" x="255" y="182" width="230" height="22" />
                      <text class="svg-wire-text" x="370" y="197">② بحث سريع في L1/L2 خلال 1ns ⚡</text>
                    </g>

                    <!-- Shared L3 Cache on Chip -->
                    <g class="svg-hw-group amber-node" data-node-step="1,2" data-click-step="2">
                      <rect class="svg-hw-box" x="150" y="218" width="440" height="55" rx="10" />
                      <text class="svg-label-en" x="370" y="242">Shared L3 Cache (مشتركة بين كل الأنوية)</text>
                      <text class="svg-label-mono" x="370" y="261" style="fill:var(--accent-amber);">FAST ON-CHIP STAGING MEMORY</text>
                    </g>

                    <!-- Wire from L3 to System Bus / Main Memory -->
                    <path class="wire-base" d="M 370 273 L 370 322" />
                    <path class="wire-flow amber" data-wire-step="2" d="M 370 273 L 370 322" />

                    <!-- Callout 3: L3 <-> Main Memory -->
                    <g class="svg-wire-callout" data-pill-step="2" data-click-step="2">
                      <rect class="svg-wire-pill" x="245" y="290" width="250" height="22" />
                      <text class="svg-wire-text" x="370" y="305">③ نسخ من الرامات للكاش (System Bus) ▲▼</text>
                    </g>

                    <!-- Moving Packets -->
                    <circle class="data-packet-dot moving" data-packet-step="0,1" r="6" fill="#06b6d4">
                      <animateMotion dur="0.8s" repeatCount="indefinite" path="M 129 100 L 259 100 L 195 145 Z" />
                    </circle>
                    <circle class="data-packet-dot moving" data-packet-step="0,1" r="6" fill="#06b6d4">
                      <animateMotion dur="0.8s" repeatCount="indefinite" path="M 479 100 L 609 100 L 545 145 Z" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="2" r="7" fill="#f59e0b">
                      <animateMotion dur="1.1s" repeatCount="indefinite" path="M 370 322 L 370 218 L 195 175" />
                    </circle>

                    <!-- Main Memory (Off-Chip via System Bus) -->
                    <g class="svg-hw-group emerald-node" data-node-step="2" data-click-step="2">
                      <rect class="svg-hw-box" x="170" y="322" width="400" height="52" rx="8" />
                      <text class="svg-label-en" x="370" y="345">System Bus ◄===► Main Memory (DRAM)</text>
                      <text class="svg-label-ar" x="370" y="364">الرامات الخارجية (كبيرة الحجم بس أبطأ: 50 إلى 100 نانو ثانية)</text>
                    </g>
                  </svg>
                </div>

                <div class="sim-status-ticker">
                  <span class="sim-status-text" data-sim-status>
                    1. تشغيل الأنوية بالتوازي (Parallel Cores): كل Core جواها CU و ALU و Registers خاصة بيها، وشغالين مع بعض في نفس الوقت على شريحة سيليكون واحدة (Single Chip)!
                  </span>
                  <span class="sim-status-step-tag" data-sim-tag>MULTICORE 1 / 3</span>
                </div>
              </div>

              <div class="exam-trap-box">
                <div class="exam-trap-title">⚠️ تريكات الامتحان الخاصة بالـ Multicore</div>
                <div class="exam-trap-list">
                  <p>
                    <strong>⚠️ Trap 1 (الفخ الأخطر):</strong><br/>
                    لو سألك: <span class="mono">"Multicore processor means multiple processors on multiple separate chips?"</span><br/>
                    الإجابة: <strong>غللللط كبير (FALSE)!</strong> المعمارية دي عبارة عن: <strong class="mono">Multiple cores on a SINGLE silicon chip</strong>.
                  </p>
                  <p>
                    <strong>⚠️ Trap 2:</strong><br/>
                    كل <span class="mono">Core</span> جواها <span class="mono">ALU</span> وسجلات (<span class="mono">Registers</span>) و <span class="mono">Control Unit</span> خاصة بيها، وبتنفذ التعليمات بالتوازي (<span class="mono">in parallel</span>).
                  </p>
                </div>
              </div>
            </section>

            <!-- 3. CACHE MEMORY (معضلة بطء الرامات واختراع الكاش السحرية - سلايد 11) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">03</span>
                <h2 class="exp-sec-title">CACHE MEMORY (معضلة بطء الرامات واختراع الكاش السحرية - سلايد 11)</h2>
              </div>

              <div class="two-layers-split" style="margin-bottom: 1.15rem;">
                <div class="layer-pill-card" style="border-top: 3px solid var(--accent-rose);">
                  <div class="balady-label" style="color: var(--accent-rose);">🐢 The Core Problem (المشكلة)</div>
                  <p style="font-size: 0.94rem;">
                    سرعة المعالجات زادت بآلاف المرات، لكن سرعة الرامات (<span class="mono">Main Memory</span>) زادت ببطء شديد!<br/>
                    • المعالج بيطلب التعليمة في <strong>أقل من 1 نانو ثانية</strong>.<br/>
                    • الرامات بتاخد <strong>50 إلى 100 نانو ثانية</strong> عشان ترد!<br/>
                    لو سبنا المعالج يكلم الرامات علطول، المعالج هيفضل نايم ومستني 99% من وقته (<strong class="mono">Stall</strong>).
                  </p>
                </div>

                <div class="layer-pill-card" style="border-top: 3px solid var(--accent-emerald);">
                  <div class="balady-label" style="color: var(--accent-emerald);">⚡ The Engineering Solution (الحل الهندسي)</div>
                  <p style="font-size: 0.94rem;">
                    اخترعوا ذاكرة اسمها (<strong class="mono">Cache Memory</strong>): ذاكرة سريعة جداً مصنوعة من ترانزستورات فائقة السرعة (<span class="mono">SRAM</span>) بتتحط في النص بين البروسيسور والرامات.<br/>
                    الداتا والأوامر اللي المعالج بيطلبها كتير ورا بعض بننسخها في الكاش، فيلاقيها في <strong>1 نانو ثانية</strong> بدل ما ينزل للرامات البطيئة!
                  </p>
                </div>
              </div>

              <div class="en-def-box">
                <span class="en-def-label">Official English Definition — Cache Memory</span>
                <p class="en-def-text">
                  "Multiple layers of memory <strong>between the processor and main memory</strong>. It is <strong>smaller and much faster than main memory</strong>, used to speed up memory access by staging frequently accessed data and instructions close to the processor."
                </p>
              </div>

              <h3 style="font-size: 1.05rem; font-weight: 800; margin: 1.1rem 0 0.65rem; color: var(--accent-cyan);">
                📊 مستويات الكاش التلاتة — The 3 Cache Levels (L1, L2, L3):
              </h3>

              <div class="attr-grid">
                <div class="attr-card" style="border-top: 3px solid var(--accent-emerald);">
                  <span class="attr-term" style="color: var(--accent-emerald);">• L1 Cache (Level 1)</span>
                  <p class="attr-desc">
                    <strong>أصغر كاش وأسرع كاش في الوجود</strong> (سرعتها نفس سرعة البروسيسور بالملي). موجودة <strong>جوه الـ Core نفسها</strong>، وبتتقسم نصين: <span class="mono">L1-Instruction</span> للكود، و <span class="mono">L1-Data</span> للمتغيرات.
                  </p>
                </div>

                <div class="attr-card" style="border-top: 3px solid var(--accent-cyan);">
                  <span class="attr-term">• L2 Cache (Level 2)</span>
                  <p class="attr-desc">
                    أكبر شوية من <span class="mono">L1</span> وأبطأ منها سنة بسيطة، ومخصصة لنفس الـ <span class="mono">Core</span>.
                  </p>
                </div>

                <div class="attr-card" style="border-top: 3px solid var(--accent-amber);">
                  <span class="attr-term" style="color: var(--accent-amber);">• L3 Cache (Level 3)</span>
                  <p class="attr-desc">
                    كاش كبيرة الحجم بتشيل ميجابايتات كتير، وبتكون <strong>"مشتركة" بين كل الأنوية (<span class="mono">Shared</span>)</strong> على الشريحة.
                  </p>
                </div>
              </div>

              <div class="exam-trap-box">
                <div class="exam-trap-title">⚠️ تريكات الامتحان الخاصة بالـ Cache (سؤال مضمون في الـ MCQs)</div>
                <div class="exam-trap-list">
                  <p>
                    <strong>⚠️ Trap 1 (مقارنة الحجم والسرعة بين الكاش والرامات):</strong><br/>
                    • من حيث السرعة: <strong class="mono">Cache is MUCH FASTER than Main Memory</strong>.<br/>
                    • من حيث السعة: <strong class="mono">Cache is MUCH SMALLER than Main Memory</strong>.
                  </p>
                  <p>
                    <strong>⚠️ Trap 2 (مكان الكاش فين في الهيكل؟):</strong><br/>
                    ===> <strong class="mono">Between the Processor and Main Memory</strong>.
                  </p>
                  <p>
                    <strong>⚠️ Trap 3 (ليه معملناش الرامات كلها من نوع الكاش وخلاص؟):</strong><br/>
                    لأن ترانزستورات الكاش (<span class="mono">SRAM</span>) غالية جداً جداً وبتاخد مساحة سيليكون ضخمة وبتسخن، فالمهندسين بيعملوا سعة صغيرة كاش (<span class="mono">SRAM</span>) وسعة كبيرة رامات رخيصة (<span class="mono">DRAM</span>).
                  </p>
                </div>
              </div>
            </section>

            <!-- 4. MOTHERBOARD & REAL HARDWARE LAYOUT (سلايدات 12 إلى 15) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">04</span>
                <h2 class="exp-sec-title">MOTHERBOARD &amp; REAL HARDWARE LAYOUT (مكونات اللوحة الأم في الواقع - سلايدات 12 إلى 15)</h2>
              </div>

              <div class="en-def-box" style="border-left-color: var(--accent-emerald);">
                <span class="en-def-label" style="color: var(--accent-emerald);">Official Concept — The Motherboard</span>
                <p class="en-def-text">
                  "The <strong>Motherboard</strong> is the main <strong>printed circuit board (PCB)</strong> in a computer that interconnects the processor, main memory, and peripheral controllers."
                </p>
              </div>

              <!-- INTERACTIVE SIMULATOR 6: Motherboard PCB & Server Layout -->
              <div class="sim-card" data-sim="sim-motherboard">
                <div class="sim-top-bar">
                  <div class="sim-title-group">
                    <span class="sim-live-dot"></span>
                    <span class="sim-badge-title">FIG 1.6 // MOTHERBOARD PCB &amp; SERVER ARCHITECTURE SIMULATOR</span>
                  </div>
                  <div class="sim-controls">
                    <button type="button" class="sim-step-btn active" data-sim-step="0">1. Processor Sockets (Xeon / EC12)</button>
                    <button type="button" class="sim-step-btn" data-sim-step="1">2. DIMM Slots (DRAM Chips)</button>
                    <button type="button" class="sim-step-btn" data-sim-step="2">3. PCB Traces &amp; I/O Chipset</button>
                    <button type="button" class="sim-step-btn play-auto" data-sim-autoplay>▶ تشغيل تلقائي</button>
                  </div>
                </div>

                <div class="sim-svg-stage">
                  <svg viewBox="0 0 740 320" xmlns="http://www.w3.org/2000/svg">
                    <!-- Green/Dark PCB Board -->
                    <rect x="20" y="10" width="700" height="300" rx="14" fill="var(--bg-card)" stroke="var(--accent-emerald)" stroke-width="2.5" />
                    <text class="svg-label-mono" x="370" y="32" style="fill:var(--accent-emerald);">PRINTED CIRCUIT BOARD (MOTHERBOARD PCB)</text>

                    <!-- Copper PCB Traces (System Bus Physical Implementation) -->
                    <path class="wire-base" d="M 275 110 L 430 110" />
                    <path class="wire-base" d="M 275 215 L 430 215" />
                    <path class="wire-base" d="M 165 155 L 165 175" />
                    <path class="wire-base" d="M 555 155 L 555 190" />

                    <path class="wire-flow amber active-flow" data-wire-step="0,2" d="M 165 155 L 165 175" />
                    <path class="wire-flow cyan active-flow" data-wire-step="1,2" d="M 275 110 L 430 110" />
                    <path class="wire-flow emerald active-flow" data-wire-step="2" d="M 275 215 L 430 215" />

                    <circle class="data-packet-dot moving" data-packet-step="0,1,2" r="6" fill="#06b6d4">
                      <animateMotion dur="1.1s" repeatCount="indefinite" path="M 275 110 L 430 110" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="2" r="6" fill="#10b981">
                      <animateMotion dur="1.1s" repeatCount="indefinite" path="M 275 215 L 430 215" />
                    </circle>

                    <!-- On-Wire Operation Callout Badges -->
                    <g class="svg-wire-callout active-pill" data-pill-step="0" data-click-step="0">
                      <rect class="svg-wire-pill" x="282" y="153" width="140" height="22" />
                      <text class="svg-wire-text" x="352" y="168">① 2 Chips = 8 Cores</text>
                    </g>

                    <g class="svg-wire-callout" data-pill-step="1" data-click-step="1">
                      <rect class="svg-wire-pill" x="282" y="80" width="140" height="22" />
                      <text class="svg-wire-text" x="352" y="95">◄► ② تغذية من DRAM</text>
                    </g>

                    <g class="svg-wire-callout" data-pill-step="2" data-click-step="2">
                      <rect class="svg-wire-pill" x="280" y="226" width="144" height="22" />
                      <text class="svg-wire-text" x="352" y="241">③ PCB Traces (Bus)</text>
                    </g>

                    <!-- CPU Socket 1 -->
                    <g class="svg-hw-group cyan-node active-node" data-node-step="0" data-click-step="0">
                      <rect class="svg-hw-box" x="55" y="55" width="220" height="100" rx="8" />
                      <text class="svg-label-mono" x="165" y="80">PROCESSOR SOCKET 1</text>
                      <text class="svg-label-en" x="165" y="104">Quad-Core Xeon Chip</text>
                      <text class="svg-label-ar" x="165" y="130">شريحة معالج 1 (4 أنوية)</text>
                    </g>

                    <!-- CPU Socket 2 (Dual Socket Server Board) -->
                    <g class="svg-hw-group cyan-node active-node" data-node-step="0" data-click-step="0">
                      <rect class="svg-hw-box" x="55" y="175" width="220" height="100" rx="8" />
                      <text class="svg-label-mono" x="165" y="200">PROCESSOR SOCKET 2</text>
                      <text class="svg-label-en" x="165" y="224">Quad-Core Xeon Chip</text>
                      <text class="svg-label-ar" x="165" y="250">شريحة معالج 2 (المجموع = 8 أنوية)</text>
                    </g>

                    <!-- DIMM Slots (Main Memory DRAM) -->
                    <g class="svg-hw-group emerald-node" data-node-step="1" data-click-step="1">
                      <rect class="svg-hw-box" x="430" y="55" width="250" height="100" rx="8" />
                      <text class="svg-label-mono" x="555" y="80" style="fill:var(--accent-emerald);">DIMM MEMORY SLOTS</text>
                      <text class="svg-label-en" x="555" y="105">Main Memory (DRAM Chips)</text>
                      <text class="svg-label-ar" x="555" y="130">فتحات مساطر الرامات على البوردة</text>
                    </g>

                    <!-- I/O Controller Chipset -->
                    <g class="svg-hw-group amber-node" data-node-step="2" data-click-step="2">
                      <rect class="svg-hw-box" x="430" y="190" width="250" height="85" rx="8" />
                      <text class="svg-label-mono" x="555" y="215" style="fill:var(--accent-amber);">I/O CONTROLLER CHIPSET</text>
                      <text class="svg-label-en" x="555" y="238">PCIe • USB • Storage • GPU</text>
                      <text class="svg-label-ar" x="555" y="260">تنظيم المرور مع الكروت والمنافذ</text>
                    </g>
                  </svg>
                </div>

                <div class="sim-status-ticker">
                  <span class="sim-status-text" data-sim-status>
                    1. Processor Sockets: في السيرفرات (زي Intel Quad-Core Xeon سلايد 13) اللوحة الأم بيكون فيها 2 سوكت لبروسيسورين، كل واحد 4 أنوية = 8 أنوية حقيقية شغالة مع بعض!
                  </span>
                  <span class="sim-status-step-tag" data-sim-tag>MOTHERBOARD 1 / 3</span>
                </div>
              </div>

              <div class="attr-grid">
                <div class="attr-card">
                  <span class="attr-term">1. Processor Chip (Socket)</span>
                  <p class="attr-desc">المكان اللي بنسقط فيه شريحة المعالج. في السيرفرات (سلايد 13) بيكون فيه <span class="mono">Two Processor Sockets</span>.</p>
                </div>

                <div class="attr-card">
                  <span class="attr-term">2. Main Memory Chips (DIMM Slots)</span>
                  <p class="attr-desc">الفتحات اللي بتركب فيها مساطر الرامات (<span class="mono">DRAM Chips</span>) اللي بتشيل نظام التشغيل والبرامج الشغالة.</p>
                </div>

                <div class="attr-card">
                  <span class="attr-term">3. I/O Controller Chips (Chipset)</span>
                  <p class="attr-desc">الشيبات المسؤولة عن تنظيم المرور مع الكروت والمنافذ (<span class="mono">USB, PCIe, Graphics, Hard Drives</span>).</p>
                </div>

                <div class="attr-card">
                  <span class="attr-term">4. PCB Traces (System Bus Lines)</span>
                  <p class="attr-desc">خطوط النحاس المطبوعة في قلب اللوحة الخضرا، ودي هي الأسلاك الفيزيائية للـ <span class="mono">System Bus</span>.</p>
                </div>
              </div>

              <h3 style="font-size: 1.05rem; font-weight: 800; margin: 1.25rem 0 0.65rem; color: var(--accent-amber);">
                🏛️ دراسة الأمثلة المعمارية في السلايدات (Case Studies — Slides 13 to 15):
              </h3>

              <div class="two-layers-split">
                <div class="case-study-card">
                  <div class="balady-label" style="color: var(--accent-cyan);">🖥️ Example 1: Intel Quad-Core Xeon (سلايد 13)</div>
                  <p style="font-size: 0.94rem;">
                    • لوحة سيرفر فيها بروسيسورين (<span class="mono">2 Processor Chips</span>).<br/>
                    • كل شريحة معالج فيها 4 أنوية (<span class="mono">Quad-Core</span>)، يعني السيستم كله شغال بـ <strong>8 أنوية حقيقية</strong> مع بعض.
                  </p>
                </div>

                <div class="case-study-card">
                  <div class="balady-label" style="color: var(--accent-amber);">🏦 Example 2: IBM zEnterprise EC12 (سلايدات 14 و 15)</div>
                  <p style="font-size: 0.94rem;">
                    • وحش المين فريم (<span class="mono">Mainframe</span>) بتاع البنوك الكبرى وحسابات الطيران.<br/>
                    • شريحة المعالج الواحدة مساحتها <span class="mono">522 mm²</span> وجواها <strong>2.75 مليار ترانزستور</strong>!<br/>
                    • فيها <strong>6 أنوية (<span class="mono">6 Cores</span>)</strong>، كل نواة ليها كاش <span class="mono">L1</span> و <span class="mono">L2</span> خاصة بيها، وعليها كاش <span class="mono">L3</span> مشتركة حجمها <strong>48 MB</strong>، ومعاها شريحة كاش إضافية <span class="mono">L4</span> عملاقة!
                  </p>
                </div>
              </div>
            </section>

            <!-- 5. INSTANT EXAM BUZZWORDS -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">05</span>
                <h2 class="exp-sec-title">INSTANT EXAM BUZZWORDS (كلمات السر لحل أسئلة الـ MCQs في ثانية)</h2>
              </div>

              <div class="attr-grid">
                <div class="attr-card">
                  <span class="attr-term">"Multiple independent cores on a single chip"</span>
                  <p class="attr-desc mono" style="color: var(--accent-emerald); font-weight: 700;">====&gt; MULTICORE PROCESSOR</p>
                </div>
                <div class="attr-card">
                  <span class="attr-term">"Each core contains"</span>
                  <p class="attr-desc mono" style="color: var(--accent-emerald); font-weight: 700;">====&gt; [ALU + Control Unit + Registers]</p>
                </div>
                <div class="attr-card">
                  <span class="attr-term">"Bridge the speed gap between CPU and RAM"</span>
                  <p class="attr-desc mono" style="color: var(--accent-emerald); font-weight: 700;">====&gt; CACHE MEMORY</p>
                </div>
                <div class="attr-card">
                  <span class="attr-term">"Fastest and closest cache to core"</span>
                  <p class="attr-desc mono" style="color: var(--accent-emerald); font-weight: 700;">====&gt; L1 CACHE</p>
                </div>
                <div class="attr-card">
                  <span class="attr-term">"Cache shared by all cores on the chip"</span>
                  <p class="attr-desc mono" style="color: var(--accent-emerald); font-weight: 700;">====&gt; L3 CACHE</p>
                </div>
                <div class="attr-card">
                  <span class="attr-term">"Main printed circuit board with traces"</span>
                  <p class="attr-desc mono" style="color: var(--accent-emerald); font-weight: 700;">====&gt; MOTHERBOARD</p>
                </div>
              </div>
            </section>

            <!-- 6. POPULAR EXAM TRUE / FALSE & MCQ DRILLS -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">06</span>
                <h2 class="exp-sec-title">POPULAR EXAM TRUE / FALSE DRILLS (أسئلة صح وغلط المشهورة)</h2>
              </div>

              <div class="tf-drills-grid">
                <div class="tf-card">
                  <p class="tf-question">[Q1] "A multicore processor places multiple execution units on separate motherboards."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge false">Answer: FALSE (✖)</span>
                    <span class="ltr-block">(They are integrated onto a <strong>SINGLE chip/die</strong>).</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q2] "Cache memory is both faster and larger than main memory."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge false">Answer: FALSE (✖)</span>
                    <span class="ltr-block">(It is <strong>FASTER</strong>, but much <strong>SMALLER</strong>).</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q3] "Level 1 cache is typically located directly inside each core."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge true">Answer: TRUE (✔)</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q4] "In modern architectures, L3 cache is usually shared among all cores on the chip."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge true">Answer: TRUE (✔)</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q5] "The printed traces on a motherboard physically implement the system bus."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge true">Answer: TRUE (✔)</span>
                  </div>
                </div>
              </div>
            </section>
          `,
          quiz: [
            {
              id: "p3_q1",
              question: "Q1. What is the correct definition of a Multicore Processor?",
              options: [
                "Multiple processors placed on separate motherboards",
                "A single computing chip containing two or more independent processing units (cores)",
                "A single core with multiple Main Memory DIMM slots",
                "A processor that only contains L3 cache without an ALU"
              ],
              correctIndex: 1,
              explanation: "صح جداً! الـ Multicore processor هو شريحة سيليكون واحدة (Single chip) جواها نواتين أو أكتر مستقلين (Multiple independent cores)."
            },
            {
              id: "p3_q2",
              question: "Q2. Each individual Core inside a multicore processor contains its own:",
              options: [
                "Control Unit (CU), ALU, and Registers",
                "Motherboard PCB traces and DIMM slots",
                "Hard disk drive and external I/O ports",
                "Main memory DRAM modules"
              ],
              correctIndex: 0,
              explanation: "الله ينور! كل Core هي بروسيسور مستقل كامل جواه Control Unit و ALU و Registers وكاش L1/L2 خاصة بيه."
            },
            {
              id: "p3_q3",
              question: "Q3. [EXAM TRAP]: How does Cache Memory compare to Main Memory (RAM) in terms of speed and capacity?",
              options: [
                "Cache is slower and larger than Main Memory",
                "Cache is faster and larger than Main Memory",
                "Cache is much faster and much smaller than Main Memory",
                "Cache has the exact same speed and size as Main Memory"
              ],
              correctIndex: 2,
              explanation: "برافو عليك! ده سؤال مضمون في الامتحان: الكاش أسرع بكتير (Much Faster) ولكن أصغر بكتير في الحجم (Much Smaller) من الـ Main Memory."
            },
            {
              id: "p3_q4",
              question: "Q4. Which level of cache is the smallest, fastest, and located directly inside each core (often split into L1-Instruction and L1-Data)?",
              options: [
                "L1 Cache",
                "L2 Cache",
                "L3 Cache",
                "L4 Mainframe Cache"
              ],
              correctIndex: 0,
              explanation: "مظبوط! كاش المستوى الأول (L1 Cache) هي الأصغر والأسرع على الإطلاق وموجودة جوه الـ Core نفسها."
            },
            {
              id: "p3_q5",
              question: "Q5. In a modern multicore processor chip, which cache level is typically SHARED among all cores on the chip?",
              options: [
                "L1-Instruction Cache",
                "L1-Data Cache",
                "L3 Cache",
                "CPU General Registers"
              ],
              correctIndex: 2,
              explanation: "صح! الـ L3 Cache بتكون كبيرة الحجم ومشتركة (Shared) بين كل الأنوية اللي على شريحة المعالج."
            },
            {
              id: "p3_q6",
              question: "Q6. On a computer motherboard (PCB), what do the printed copper traces physically implement?",
              options: [
                "The System Bus (interconnecting CPU, memory, and I/O controllers)",
                "The Arithmetic and Logic Unit (ALU)",
                "Level 1 Instruction Cache",
                "Secondary hard drive storage"
              ],
              correctIndex: 0,
              explanation: "إجابة صحيحة! خطوط النحاس المطبوعة على اللوحة الأم (PCB Traces) هي التجسيد الفيزيائي الحقيقي لأسلاك الـ System Bus."
            },
            {
              id: "p3_q7",
              question: "Q7. Why did processor designers shift from increasing single-core clock frequency (GHz) to Multicore architectures around 2004?",
              options: [
                "Because programmers wanted to rewrite all their code",
                "Due to the Power and Thermal Wall (power consumption and extreme heat at high frequencies)",
                "Because Main Memory became faster than the CPU",
                "To remove cache memory from the processor"
              ],
              correctIndex: 1,
              explanation: "الله ينور! بسبب حائط الطاقة والحرارة (Power & Thermal Wall)، لأن استهلاك الكهربا والحرارة زادوا بشكل مستحيل تبريده مع رفع التردد، فثبتوا التردد وزودوا عدد الأنوية (Cores)."
            }
          ]
        }
      ]
    }
  ]
};
