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
      summary: "الفصل الأول كاملاً (Slides 1 to 58 + Sheet 1 Q1.1–1.10): الفرق بين Architecture و Organization، الهيكل والوظيفة، الـ Multicore والكاش واللوحة الأم، معمارية فون نيومان وحاسوب IAS، أجيال الحواسيب وقانون مور، والأنظمة المدمجة ومعمارية ARM والحوسبة السحابية.",
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
        },

        /* ====================================================================
           PART 4: The von Neumann Architecture & The IAS Computer (Slides 16 to 21)
           ==================================================================== */
        {
          id: "ch1-p4",
          code: "PART 4",
          slides: "Slides 16 to 21",
          title: "The von Neumann Architecture & The IAS Computer",
          hasContent: true,
          contentHtml: `
            <!-- 1. الفكرة الأساسية (الثورة اللي غيرت تاريخ الكمبيوتر) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">01</span>
                <h2 class="exp-sec-title">الفكرة الأساسية (الثورة اللي غيرت تاريخ الكمبيوتر)</h2>
              </div>

              <div class="balady-box">
                <div class="balady-label">💡 من أسلاك ENIAC اليدوية إلى ثورة Stored-Program Concept (1945)</div>
                <p>
                  زمان في كمبيوتر <strong>ENIAC</strong> كان البرنامج عبارة عن أسلاك بتتوصل في الحيطة يدوياً (<strong class="mono" style="color: var(--accent-rose);">Hardwired Program</strong>)!
                  علشان تغير البرنامج كنت بتفك وتربط أسلاك في <strong>أسبوعين كاملين</strong>!
                </p>
                <p style="margin-top: 0.65rem;">
                  جه <strong>جون فون نيومان (John von Neumann)</strong> سنة <strong>1945</strong> وقال فكرة عبقرية:
                </p>
                <div class="en-def-box" style="margin: 0.7rem 0; border-left-color: var(--accent-amber);">
                  <p style="font-weight: 700; color: var(--text-primary);">
                    "بدل ما البرنامج يكون أسلاك.. نخلي أوامر البرنامج أرقام عادية، ونخزنها في الذاكرة مع البيانات! ولما نعوز نغير البرنامج، نكتب شوية أوامر جديدة في الذاكرة والمعالج يقرأها وينفذها."
                  </p>
                </div>
                <p>
                  ده هو مبدأ: <strong class="mono" style="color: var(--accent-cyan);">Stored-Program Concept</strong> وحاسوب <strong class="mono" style="color: var(--accent-emerald);">IAS Computer</strong> (معهد الدراسات المتقدمة بجامعة برينستون).
                </p>
              </div>
            </section>

            <!-- 2. THE 3 KEY PRINCIPLES OF VON NEUMANN ARCHITECTURE (مبادئ فون نيومان الثلاثة) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">02</span>
                <h2 class="exp-sec-title">THE 3 KEY PRINCIPLES OF VON NEUMANN ARCHITECTURE (مبادئ فون نيومان الثلاثة)</h2>
              </div>

              <div style="display: flex; flex-direction: column; gap: 1rem;">
                <div class="en-def-box">
                  <span class="en-def-label">Principle 01 // Shared Read-Write Memory</span>
                  <p class="en-def-text">
                    "1. <strong>Data and instructions</strong> are stored in a <strong>single read-write memory</strong>."
                  </p>
                  <p style="margin-top: 0.45rem; color: var(--text-secondary);">
                    📖 <strong>التوضيح:</strong> البيانات والتعليمات بيقعدوا مع بعض في نفس الذاكرة القابلة للقراءة والكتابة.
                  </p>
                </div>

                <div class="en-def-box" style="border-left-color: var(--accent-amber);">
                  <span class="en-def-label" style="color: var(--accent-amber);">Principle 02 // Addressable by Location</span>
                  <p class="en-def-text">
                    "2. The contents of this memory are <strong>addressable by location</strong>, regardless of the type of data."
                  </p>
                  <p style="margin-top: 0.45rem; color: var(--text-secondary);">
                    📖 <strong>التوضيح:</strong> الذاكرة متقسمة خانات بعناوين رقمية، والجهاز بيوصل للعنوان بغض النظر عن نوع الداتا اللي جواه.
                  </p>
                </div>

                <div class="en-def-box" style="border-left-color: var(--accent-emerald);">
                  <span class="en-def-label" style="color: var(--accent-emerald);">Principle 03 // Sequential Execution</span>
                  <p class="en-def-text">
                    "3. Execution occurs in a <strong>sequential fashion</strong> (unless explicitly modified by a jump)."
                  </p>
                  <p style="margin-top: 0.45rem; color: var(--text-secondary);">
                    📖 <strong>التوضيح:</strong> التنفيذ بيمشي ورا بعضه خطوة خطوة من تعليمة للتانية، إلا لو جه أمر صريح بالقفز (<span class="mono">Jump / Branch</span>) لعنوان تاني.
                  </p>
                </div>
              </div>
            </section>

            <!-- 3. IAS MEMORY FORMAT (هيكل الكلمة في حاسوب IAS - سلايد 18 + محاكي الـ 40 بت) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">03</span>
                <h2 class="exp-sec-title">IAS MEMORY FORMAT (هيكل الكلمة الـ 40-Bit في حاسوب IAS - سلايد 18)</h2>
              </div>

              <p style="margin-bottom: 0.75rem;">
                الذاكرة في حاسوب <strong>IAS</strong> بتتكون من <strong>4096 كلمة (<span class="mono">4096 Words</span>)</strong>، وحجم الكلمة الواحدة = <strong>40 بت (<span class="mono">40-bit</span>)</strong>. الكلمة دي بتشيل شكل من اتنين (اضغط على الخطوات في المخطط التفاعلي عشان تشوف تقسيمة الـ 40 بت بالتفصيل):
              </p>

              <!-- INTERACTIVE SIMULATOR 7: IAS 40-Bit Memory Word & Shared Memory -->
              <div class="sim-card" data-sim="sim-ias-word">
                <div class="sim-top-bar">
                  <div class="sim-title-group">
                    <span class="sim-live-dot"></span>
                    <span class="sim-badge-title">FIG 1.7 // IAS 40-BIT MEMORY FORMAT &amp; STORED-PROGRAM SIMULATOR</span>
                  </div>
                  <div class="sim-controls">
                    <button type="button" class="sim-step-btn active" data-sim-step="0">1. الذاكرة المشتركة (4096 × 40-bit)</button>
                    <button type="button" class="sim-step-btn" data-sim-step="1">2. كلمة بيانات (Number Word)</button>
                    <button type="button" class="sim-step-btn" data-sim-step="2">3. كلمة تعليمات (2 Instructions)</button>
                    <button type="button" class="sim-step-btn play-auto" data-sim-autoplay>▶ تشغيل تلقائي</button>
                  </div>
                </div>

                <div class="sim-svg-stage">
                  <svg viewBox="0 0 740 355" xmlns="http://www.w3.org/2000/svg">
                    <!-- Top: Shared Read-Write Memory Overview -->
                    <g class="svg-hw-group cyan-node active-node" data-node-step="0" data-click-step="0">
                      <rect class="svg-hw-box" x="45" y="14" width="650" height="72" rx="10" />
                      <text class="svg-label-mono" x="370" y="36">① VON NEUMANN SHARED MEMORY: 4096 WORDS × 40 BITS PER WORD</text>
                      <text class="svg-label-en" x="370" y="57">Addressable Locations [0000 to 4095]  •  2^12 = 4,096 Words</text>
                      <text class="svg-label-ar" x="370" y="76">البيانات (Numbers) والتعليمات (Instructions) متخزنين مع بعض في نفس الذاكرة</text>
                    </g>

                    <!-- Connectors from Shared Memory to Format 1 & Format 2 -->
                    <path class="wire-base" d="M 220 86 L 220 118" />
                    <path class="wire-base" d="M 520 86 L 520 226" />
                    <path class="wire-flow emerald active-flow" data-wire-step="0,1" d="M 220 86 L 220 118" />
                    <path class="wire-flow amber" data-wire-step="0,2" d="M 520 86 L 520 226" />

                    <circle class="data-packet-dot moving" data-packet-step="0,1" r="6" fill="#10b981">
                      <animateMotion dur="0.9s" repeatCount="indefinite" path="M 220 86 L 220 118" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="0,2" r="6" fill="#f59e0b">
                      <animateMotion dur="1.2s" repeatCount="indefinite" path="M 520 86 L 520 226" />
                    </circle>

                    <!-- Format 1: 40-Bit Number Word -->
                    <g class="svg-hw-group emerald-node" data-node-step="1" data-click-step="1">
                      <rect class="svg-hw-box" x="45" y="118" width="650" height="86" rx="10" />
                      <text class="svg-label-mono" x="370" y="138" style="fill:var(--accent-emerald);">② FORMAT A: NUMBER WORD (كلمة بيانات رقمية = 40 بت)</text>

                      <!-- Bit Indices -->
                      <text class="svg-label-mono" x="95" y="154" style="font-size:10px;">Bit 0</text>
                      <text class="svg-label-mono" x="155" y="154" style="font-size:10px;">Bit 1</text>
                      <text class="svg-label-mono" x="655" y="154" style="font-size:10px;">Bit 39</text>

                      <!-- Sign Bit Box (1 bit) -->
                      <rect x="65" y="160" width="75" height="34" rx="5" fill="var(--bg-elevated)" stroke="var(--accent-rose)" stroke-width="2" />
                      <text class="svg-label-en" x="102" y="181" style="font-size:11px; fill:var(--accent-rose);">Sign (1b)</text>

                      <!-- 39-Bit Numeric Value Box -->
                      <rect x="144" y="160" width="530" height="34" rx="5" fill="var(--bg-surface)" stroke="var(--accent-emerald)" stroke-width="2" />
                      <text class="svg-label-en" x="409" y="181" style="font-size:12px;">39-Bit Numeric Value (قيمة الرقم الرياضي نفسه)</text>
                    </g>

                    <!-- Format 2: 40-Bit Instruction Word (2 x 20-bit Instructions) -->
                    <g class="svg-hw-group amber-node" data-node-step="2" data-click-step="2">
                      <rect class="svg-hw-box" x="45" y="226" width="650" height="114" rx="10" />
                      <text class="svg-label-mono" x="370" y="246" style="fill:var(--accent-amber);">③ FORMAT B: INSTRUCTION WORD (كلمة تعليمات = تعليمتين × 20 بت)</text>

                      <!-- Bit Indices -->
                      <text class="svg-label-mono" x="75" y="263" style="font-size:9.5px;">0</text>
                      <text class="svg-label-mono" x="172" y="263" style="font-size:9.5px;">7</text>
                      <text class="svg-label-mono" x="190" y="263" style="font-size:9.5px;">8</text>
                      <text class="svg-label-mono" x="355" y="263" style="font-size:9.5px;">19</text>
                      <text class="svg-label-mono" x="380" y="263" style="font-size:9.5px;">20</text>
                      <text class="svg-label-mono" x="475" y="263" style="font-size:9.5px;">27</text>
                      <text class="svg-label-mono" x="495" y="263" style="font-size:9.5px;">28</text>
                      <text class="svg-label-mono" x="662" y="263" style="font-size:9.5px;">39</text>

                      <!-- Left Instruction: Opcode (8b) + Address (12b) -->
                      <rect x="65" y="268" width="116" height="36" rx="5" fill="var(--bg-elevated)" stroke="var(--accent-amber)" stroke-width="2" />
                      <text class="svg-label-en" x="123" y="290" style="font-size:11px; fill:var(--accent-amber);">Opcode (8-bit)</text>

                      <rect x="184" y="268" width="180" height="36" rx="5" fill="var(--bg-surface)" stroke="var(--accent-cyan)" stroke-width="2" />
                      <text class="svg-label-en" x="274" y="290" style="font-size:11px;">Address (12-bit)</text>

                      <!-- Right Instruction: Opcode (8b) + Address (12b) -->
                      <rect x="374" y="268" width="116" height="36" rx="5" fill="var(--bg-elevated)" stroke="var(--accent-amber)" stroke-width="2" />
                      <text class="svg-label-en" x="432" y="290" style="font-size:11px; fill:var(--accent-amber);">Opcode (8-bit)</text>

                      <rect x="493" y="268" width="181" height="36" rx="5" fill="var(--bg-surface)" stroke="var(--accent-cyan)" stroke-width="2" />
                      <text class="svg-label-en" x="583" y="290" style="font-size:11px;">Address (12-bit)</text>

                      <!-- Left / Right Bracket Labels -->
                      <text class="svg-label-mono" x="215" y="324" style="fill:var(--accent-cyan);">◄─── LEFT INSTRUCTION (20-Bit) ───►</text>
                      <text class="svg-label-mono" x="524" y="324" style="fill:var(--accent-emerald);">◄─── RIGHT INSTRUCTION (20-Bit) ───►</text>
                    </g>
                  </svg>
                </div>
              </div>

              <div class="two-layers-split">
                <div class="layer-pill-card" style="border-top: 3px solid var(--accent-emerald);">
                  <div class="mono" style="color: var(--accent-emerald); font-weight: 800; font-size: 0.85rem; margin-bottom: 0.4rem;">
                    FORMAT 01 // NUMBER WORD (40-BIT)
                  </div>
                  <p style="font-size: 0.94rem;">
                    • <strong>البت 0 (<span class="mono">Sign Bit</span>):</strong> إشارة الرقم (<span class="mono">0</span> للموجب، <span class="mono">1</span> للسالب).<br/>
                    • <strong>البتات 1 إلى 39 (<span class="mono">39-bit Numeric Value</span>):</strong> قيمة الرقم الرياضي نفسه.
                  </p>
                </div>

                <div class="layer-pill-card" style="border-top: 3px solid var(--accent-amber);">
                  <div class="mono" style="color: var(--accent-amber); font-weight: 800; font-size: 0.85rem; margin-bottom: 0.4rem;">
                    FORMAT 02 // INSTRUCTION WORD (2 × 20-BIT)
                  </div>
                  <p style="font-size: 0.94rem;">
                    الكلمة أم 40 بت بتشيل <strong>تعليمتين كاملتين</strong> (<span class="mono">Left &amp; Right</span>)، كل تعليمة <strong>20 بت</strong>:<br/>
                    • <strong><span class="mono">Opcode (8-bit)</span>:</strong> كود العملية (نوع الأمر زي جمع أو طرح).<br/>
                    • <strong><span class="mono">Address (12-bit)</span>:</strong> عنوان المتغير في الذاكرة ($2^{12} = 4096$ كلمة).
                  </p>
                </div>
              </div>
            </section>

            <!-- 4. THE 6 ESSENTIAL IAS REGISTERS (السجلات الستة لحاسوب IAS ووظيفة كل سجل) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">04</span>
                <h2 class="exp-sec-title">THE 6 ESSENTIAL IAS REGISTERS (السجلات الستة لحاسوب IAS ووظيفة كل سجل)</h2>
              </div>

              <div class="attr-grid">
                <div class="attr-card" style="border-top: 3px solid var(--accent-cyan);">
                  <span class="attr-term">1. MBR (Memory Buffer Register)</span>
                  <p class="attr-desc ltr-block" style="margin-bottom: 0.45rem;">
                    "Contains a word to be stored in memory or sent to the I/O unit, or used to receive a word from memory or from the I/O unit."
                  </p>
                  <p class="attr-desc" style="color: var(--text-primary); font-weight: 600;">
                    📬 <strong>التوضيح:</strong> "صندوق بريد الذاكرة" (40-bit)؛ أي كلمة طالعة أو داخلة من الذاكرة لازم تقف فيه الأول.
                  </p>
                </div>

                <div class="attr-card" style="border-top: 3px solid var(--accent-amber);">
                  <span class="attr-term" style="color: var(--accent-amber);">2. MAR (Memory Address Register)</span>
                  <p class="attr-desc ltr-block" style="margin-bottom: 0.45rem;">
                    "Specifies the address in memory of the word to be written from or read into MBR."
                  </p>
                  <p class="attr-desc" style="color: var(--text-primary); font-weight: 600;">
                    📍 <strong>التوضيح:</strong> "سجل العنوان" (12-bit)؛ بيشيل رقم العنوان اللي المعالج رايح يقرأ منه أو يكتب فيه في الذاكرة.
                  </p>
                </div>

                <div class="attr-card" style="border-top: 3px solid var(--accent-emerald);">
                  <span class="attr-term" style="color: var(--accent-emerald);">3. IR (Instruction Register)</span>
                  <p class="attr-desc ltr-block" style="margin-bottom: 0.45rem;">
                    "Contains the 8-bit opcode instruction being executed."
                  </p>
                  <p class="attr-desc" style="color: var(--text-primary); font-weight: 600;">
                    ⚙️ <strong>التوضيح:</strong> بيشيل كود العملية الحالية (<strong>الـ 8 بت بتوع الـ Opcode</strong>) علشان وحدة التحكم تفك شفرته وتنفذه.
                  </p>
                </div>

                <div class="attr-card" style="border-top: 3px solid var(--accent-purple);">
                  <span class="attr-term" style="color: var(--accent-purple);">4. IBR (Instruction Buffer Register)</span>
                  <p class="attr-desc ltr-block" style="margin-bottom: 0.45rem;">
                    "Employed to hold temporarily the right-hand instruction from a word in memory."
                  </p>
                  <p class="attr-desc" style="color: var(--text-primary); font-weight: 600;">
                    ⏳ <strong>التوضيح:</strong> بيشيل <strong>التعليمة اليمين (20-bit) مؤقتاً</strong> في الكلمة لحد ما التعليمة الشمال تخلص تنفيذ!
                  </p>
                </div>

                <div class="attr-card" style="border-top: 3px solid var(--accent-amber);">
                  <span class="attr-term" style="color: var(--accent-amber);">5. PC (Program Counter)</span>
                  <p class="attr-desc ltr-block" style="margin-bottom: 0.45rem;">
                    "Contains the address of the next instruction pair to be fetched from memory."
                  </p>
                  <p class="attr-desc" style="color: var(--text-primary); font-weight: 600;">
                    🔢 <strong>التوضيح:</strong> "عداد البرنامج" (12-bit)؛ بيشيل عنوان التعليمة (أو زوج التعليمات) اللي عليها الدور تتجاب من الذاكرة.
                  </p>
                </div>

                <div class="attr-card" style="border-top: 3px solid var(--accent-cyan);">
                  <span class="attr-term">6. AC &amp; MQ (Accumulator &amp; Multiplier Quotient)</span>
                  <p class="attr-desc ltr-block" style="margin-bottom: 0.45rem;">
                    "Employed to hold temporarily operands and results generated by the ALU."
                  </p>
                  <p class="attr-desc" style="color: var(--text-primary); font-weight: 600;">
                    🧮 <strong>التوضيح:</strong> سجلات ملحقة بالـ <span class="mono">ALU</span> بتشيل الأرقام المؤقتة ونواتج الضرب والقسمة والجمع.
                  </p>
                </div>
              </div>
            </section>

            <!-- 5. IAS DATA FLOW DIAGRAM & THE FETCH-EXECUTE CYCLE (المحاكي التفاعلي الكامل لدورة الجلب والتنفيذ) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">05</span>
                <h2 class="exp-sec-title">IAS DATA FLOW &amp; THE FETCH-EXECUTE CYCLE (مخطط تدفق البيانات ودورة الجلب والتنفيذ)</h2>
              </div>

              <p style="margin-bottom: 0.75rem;">
                تبع خطوة بخطوة على مخطط حاسوب <strong>IAS</strong> الرسمي إزاي الـ 6 سجلات بيشتغلوا مع بعض في <strong>دورة الجلب (<span class="mono">Fetch Cycle</span>)</strong> و<strong>دورة التنفيذ (<span class="mono">Execute Cycle</span>)</strong>:
              </p>

              <!-- INTERACTIVE SIMULATOR 8: IAS Registers Data Flow & Fetch-Execute Cycle -->
              <div class="sim-card" data-sim="sim-ias-dataflow">
                <div class="sim-top-bar">
                  <div class="sim-title-group">
                    <span class="sim-live-dot"></span>
                    <span class="sim-badge-title">FIG 1.8 // IAS REGISTERS DATA FLOW &amp; FETCH-EXECUTE SIMULATOR</span>
                  </div>
                  <div class="sim-controls">
                    <button type="button" class="sim-step-btn active" data-sim-step="0">1. Fetch A: PC ➔ MAR ➔ MBR</button>
                    <button type="button" class="sim-step-btn" data-sim-step="1">2. Fetch B: تقسيم الشمال واليمين</button>
                    <button type="button" class="sim-step-btn" data-sim-step="2">3. Execute: تشغيل الـ ALU والـ AC</button>
                    <button type="button" class="sim-step-btn" data-sim-step="3">4. Next: تنفيذ اليمين من الـ IBR</button>
                    <button type="button" class="sim-step-btn play-auto" data-sim-autoplay>▶ تشغيل الدورة</button>
                  </div>
                </div>

                <div class="sim-svg-stage">
                  <svg viewBox="0 0 740 420" xmlns="http://www.w3.org/2000/svg">
                    <!-- Main Memory Top Block -->
                    <g class="svg-hw-group emerald-node active-node" data-node-step="0,2" data-click-step="0">
                      <rect class="svg-hw-box" x="140" y="12" width="460" height="58" rx="10" />
                      <text class="svg-label-en" x="370" y="37">MAIN MEMORY (4096 Words × 40-Bit)</text>
                      <text class="svg-label-ar" x="370" y="58">الذاكرة الرئيسية المشتركة للبيانات والتعليمات</text>
                    </g>

                    <!-- Base Wires -->
                    <!-- PC -> MAR -> Memory -->
                    <path class="wire-base" d="M 165 210 L 165 162" />
                    <path class="wire-base" d="M 165 104 L 165 70" />
                    <!-- Memory -> MBR -->
                    <path class="wire-base" d="M 370 70 L 370 104" />
                    <!-- MBR -> IBR & MBR -> IR & MBR -> MAR -->
                    <path class="wire-base" d="M 370 162 L 370 210" />
                    <path class="wire-base" d="M 310 162 L 265 186 L 265 298 L 310 298" />
                    <path class="wire-base" d="M 290 133 L 235 133" />
                    <!-- IBR -> IR & MAR -->
                    <path class="wire-base" d="M 370 268 L 370 298" />
                    <path class="wire-base" d="M 295 239 L 250 239 L 250 133 L 235 133" />
                    <!-- IR -> Control Circuits -->
                    <path class="wire-base" d="M 370 354 L 370 375" />
                    <!-- MBR <-> AC/MQ <-> ALU -->
                    <path class="wire-base" d="M 450 133 L 580 133 L 580 210" />
                    <path class="wire-base" d="M 580 268 L 580 298" />
                    <path class="wire-base" d="M 450 388 L 580 388 L 580 354" />

                    <!-- Animated Flow Wires per Step -->
                    <!-- Step 0: PC -> MAR -> Memory -> MBR -->
                    <path class="wire-flow amber active-flow" data-wire-step="0" d="M 165 210 L 165 70" />
                    <path class="wire-flow emerald active-flow" data-wire-step="0,2" d="M 370 70 L 370 104" />

                    <!-- Step 1: MBR -> IR (Left) & MBR -> IBR (Right) -->
                    <path class="wire-flow cyan" data-wire-step="1" d="M 310 162 L 265 186 L 265 298 L 310 298" />
                    <path class="wire-flow amber" data-wire-step="1" d="M 370 162 L 370 210" />
                    <path class="wire-flow cyan" data-wire-step="1" d="M 290 133 L 235 133" />

                    <!-- Step 2: IR -> Control -> ALU <-> AC/MQ & MBR -->
                    <path class="wire-flow amber" data-wire-step="2" d="M 370 354 L 370 388 L 580 388 L 580 354" />
                    <path class="wire-flow cyan" data-wire-step="2" d="M 450 133 L 580 133 L 580 298" />

                    <!-- Step 3: IBR -> IR & MAR -->
                    <path class="wire-flow emerald" data-wire-step="3" d="M 370 268 L 370 298" />
                    <path class="wire-flow emerald" data-wire-step="3" d="M 295 239 L 250 239 L 250 133 L 235 133" />

                    <!-- Moving Data Packets -->
                    <circle class="data-packet-dot moving" data-packet-step="0" r="6" fill="#f59e0b">
                      <animateMotion dur="1.1s" repeatCount="indefinite" path="M 165 210 L 165 70" />
                    </circle>
                    <circle class="data-packet-dot moving" data-packet-step="0,2" r="7" fill="#10b981">
                      <animateMotion dur="0.9s" repeatCount="indefinite" path="M 370 70 L 370 104" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="1" r="6" fill="#06b6d4">
                      <animateMotion dur="1.1s" repeatCount="indefinite" path="M 310 162 L 265 186 L 265 298 L 310 298" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="1" r="6" fill="#f59e0b">
                      <animateMotion dur="0.8s" repeatCount="indefinite" path="M 370 162 L 370 210" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="2" r="7" fill="#06b6d4">
                      <animateMotion dur="1.1s" repeatCount="indefinite" path="M 450 133 L 580 133 L 580 298" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="3" r="7" fill="#10b981">
                      <animateMotion dur="0.8s" repeatCount="indefinite" path="M 370 268 L 370 298" />
                    </circle>

                    <!-- On-Wire Operation Callout Badges -->
                    <g class="svg-wire-callout active-pill" data-pill-step="0" data-click-step="0">
                      <rect class="svg-wire-pill" x="380" y="75" width="160" height="22" />
                      <text class="svg-wire-text" x="460" y="90">① جلب الكلمة الـ 40-bit ▼</text>
                    </g>

                    <g class="svg-wire-callout" data-pill-step="1" data-click-step="1">
                      <rect class="svg-wire-pill" x="285" y="172" width="170" height="22" />
                      <text class="svg-wire-text" x="370" y="187">② اليمين للـ IBR والشمال للـ IR ▼</text>
                    </g>

                    <g class="svg-wire-callout" data-pill-step="2" data-click-step="2">
                      <rect class="svg-wire-pill" x="458" y="110" width="138" height="22" />
                      <text class="svg-wire-text" x="527" y="125">③ حساب في ALU &amp; AC ▼</text>
                    </g>

                    <g class="svg-wire-callout" data-pill-step="3" data-click-step="3">
                      <rect class="svg-wire-pill" x="285" y="272" width="170" height="22" />
                      <text class="svg-wire-text" x="370" y="287">④ سحب اليمين من IBR فوراً ▼</text>
                    </g>

                    <!-- MAR Register -->
                    <g class="svg-hw-group amber-node active-node" data-node-step="0,1,3" data-click-step="0">
                      <rect class="svg-hw-box" x="95" y="104" width="140" height="58" rx="8" />
                      <text class="svg-label-en" x="165" y="128">MAR (12-Bit)</text>
                      <text class="svg-label-ar" x="165" y="148">سجل عنوان الذاكرة</text>
                    </g>

                    <!-- PC Register -->
                    <g class="svg-hw-group amber-node active-node" data-node-step="0" data-click-step="0">
                      <rect class="svg-hw-box" x="95" y="210" width="140" height="58" rx="8" />
                      <text class="svg-label-en" x="165" y="234">PC (12-Bit)</text>
                      <text class="svg-label-ar" x="165" y="254">عنوان التعليمة التالية</text>
                    </g>

                    <!-- MBR Register -->
                    <g class="svg-hw-group cyan-node active-node" data-node-step="0,1,2" data-click-step="0">
                      <rect class="svg-hw-box" x="290" y="104" width="160" height="58" rx="8" />
                      <text class="svg-label-en" x="370" y="128">MBR (40-Bit)</text>
                      <text class="svg-label-ar" x="370" y="148">صندوق بريد الذاكرة</text>
                    </g>

                    <!-- IBR Register -->
                    <g class="svg-hw-group amber-node" data-node-step="1,3" data-click-step="1">
                      <rect class="svg-hw-box" x="295" y="210" width="150" height="58" rx="8" />
                      <text class="svg-label-en" x="370" y="234">IBR (20-Bit)</text>
                      <text class="svg-label-ar" x="370" y="254">انتظار التعليمة اليمين</text>
                    </g>

                    <!-- IR Register -->
                    <g class="svg-hw-group emerald-node" data-node-step="1,2,3" data-click-step="2">
                      <rect class="svg-hw-box" x="295" y="298" width="150" height="56" rx="8" />
                      <text class="svg-label-en" x="370" y="321">IR (8-Bit Opcode)</text>
                      <text class="svg-label-ar" x="370" y="341">كود الأمر الجاري تنفيذه</text>
                    </g>

                    <!-- Control Circuits -->
                    <g class="svg-hw-group amber-node" data-node-step="2" data-click-step="2">
                      <rect class="svg-hw-box" x="290" y="370" width="160" height="40" rx="6" />
                      <text class="svg-label-mono" x="370" y="394" style="fill:var(--accent-amber);">[CONTROL CIRCUITS]</text>
                    </g>

                    <!-- AC / MQ Registers -->
                    <g class="svg-hw-group cyan-node" data-node-step="2" data-click-step="2">
                      <rect class="svg-hw-box" x="500" y="210" width="165" height="58" rx="8" />
                      <text class="svg-label-en" x="582" y="234">AC / MQ (40-Bit)</text>
                      <text class="svg-label-ar" x="582" y="254">الأرقام ونواتج الحساب</text>
                    </g>

                    <!-- ALU -->
                    <g class="svg-hw-group cyan-node" data-node-step="2" data-click-step="2">
                      <rect class="svg-hw-box" x="500" y="298" width="165" height="56" rx="8" />
                      <text class="svg-label-en" x="582" y="321">ALU (Processing)</text>
                      <text class="svg-label-ar" x="582" y="341">مصنع الجمع والضرب</text>
                    </g>
                  </svg>
                </div>
              </div>

              <div class="two-layers-split">
                <div class="layer-pill-card" style="border-top: 3px solid var(--accent-cyan);">
                  <div class="balady-label" style="color: var(--accent-cyan);">📥 1. Fetch Cycle (دورة الجلب)</div>
                  <ul style="padding-right: 1.15rem; font-size: 0.93rem; list-style: disc;">
                    <li>المعالج ينقل العنوان من الـ <strong>PC</strong> إلى الـ <strong>MAR</strong>.</li>
                    <li>الذاكرة تطلع الكلمة الـ 40 بت في الـ <strong>MBR</strong>.</li>
                    <li>التعليمة الشمال (<span class="mono">Left</span>) تروح للـ <strong>IR</strong> علشان تتنفذ حالياً.</li>
                    <li>التعليمة اليمين (<span class="mono">Right</span>) تتخزن مؤقتاً في الـ <strong>IBR</strong> علشان تستنى دورها.</li>
                  </ul>
                </div>

                <div class="layer-pill-card" style="border-top: 3px solid var(--accent-amber);">
                  <div class="balady-label" style="color: var(--accent-amber);">⚡ 2. Execute Cycle (دورة التنفيذ)</div>
                  <ul style="padding-right: 1.15rem; font-size: 0.93rem; list-style: disc;">
                    <li>وحدة التحكم تقرأ الـ <span class="mono">Opcode</span> اللي في الـ <strong>IR</strong> وتفهمه.</li>
                    <li>الـ <strong>ALU</strong> تسحب الرقم من الذاكرة وتجمعه أو تضربه في الـ <strong>AC</strong>.</li>
                    <li>في النبضة التالية: المعالج ياخد التعليمة اليمين الجاهزة من الـ <strong>IBR</strong> وينفذها مباشرة <strong>بدون ما يروح للذاكرة تاني!</strong></li>
                  </ul>
                </div>
              </div>

              <div class="exam-trap-box">
                <div class="exam-trap-title">⚠️ أخطر تريكات الامتحان الخاصة بحاسوب IAS وفون نيومان (3 Traps)</div>
                <div class="exam-trap-list">
                  <p>
                    <strong>⚠️ Trap 1 (البتات والتقسيمة — تحفظها زي اسمك!):</strong><br/>
                    • حجم الكلمة (<span class="mono">Word Size</span>) = <strong>40 بت</strong>.<br/>
                    • حجم التعليمة الواحدة (<span class="mono">Instruction Size</span>) = <strong>20 بت</strong>.<br/>
                    • الكلمة الواحدة بتشيل: إما <strong>1 رقم (<span class="mono">1 Number</span>)</strong> أو <strong>2 تعليمات (<span class="mono">2 Instructions</span>)</strong>.<br/>
                    • كود العملية (<span class="mono">Opcode</span>) = <strong>8 بت</strong> | عنوان الذاكرة (<span class="mono">Address</span>) = <strong>12 بت</strong> ($2^{12} = 4096$ كلمة).
                  </p>
                  <p>
                    <strong>⚠️ Trap 2 (تريكة السجلات في الـ MCQs):</strong><br/>
                    • السجل اللي بيشيل عنوان التعليمة التالية ===&gt; <strong class="mono">PC (Program Counter)</strong>.<br/>
                    • السجل اللي بيشيل كود الأمر للتنفيذ حالياً ===&gt; <strong class="mono">IR (Instruction Register)</strong>.<br/>
                    • السجل اللي بيشيل التعليمة اليمين مؤقتاً ===&gt; <strong class="mono">IBR (Instruction Buffer Register)</strong>.<br/>
                    • السجل اللي بتمر عليه أي داتا من الذاكرة ===&gt; <strong class="mono">MBR (Memory Buffer Register)</strong>.
                  </p>
                  <p>
                    <strong>⚠️ Trap 3 (Von Neumann vs. Harvard):</strong><br/>
                    معمارية <strong>فون نيومان</strong> بتتميز باشتراك الذاكرة للبيانات والتعليمات (<strong class="mono">Shared Single Read-Write Memory</strong>)، عكس معمارية <strong>Harvard</strong> اللي بتفصل ذاكرة الكود عن ذاكرة البيانات فيزيائياً.
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
                  <p class="tf-question">[Q1] "In the IAS computer, data and instructions are stored in separate memories."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge false">Answer: FALSE (✖)</span>
                    <span class="ltr-block">(They are stored in a <strong>SINGLE shared read-write memory</strong>).</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q2] "The IAS instruction format consists of an 8-bit opcode and a 12-bit address."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge true">Answer: TRUE (✔)</span>
                    <span class="ltr-block">(8-bit Opcode + 12-bit Address = 20-bit Instruction).</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q3] "The Program Counter (PC) holds the instruction currently being executed."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge false">Answer: FALSE (✖)</span>
                    <span class="ltr-block">(<strong>IR</strong> holds the instruction being executed; <strong>PC</strong> holds the <strong>NEXT address</strong>).</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q4] "The IBR register temporarily holds the right-hand instruction of a pair."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge true">Answer: TRUE (✔)</span>
                  </div>
                </div>
              </div>
            </section>

            <!-- 7. SHEET 1: OFFICIAL EXAM QUESTION & MODEL ANSWER (Question 1.6) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">07</span>
                <h2 class="exp-sec-title">SHEET 1: OFFICIAL EXAM QUESTION &amp; MODEL ANSWER (سؤال الشيت 1.6)</h2>
              </div>

              <div class="sheet-card">
                <div class="sheet-q-box">
                  <span class="mono" style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700;">QUESTION 1.6 // SHEET 1</span>
                  <p style="font-family: var(--font-en); font-weight: 700; font-size: 1.05rem; margin-top: 0.35rem;">
                    "What is a stored program computer?"
                  </p>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
                  <span style="font-weight: 800; color: var(--accent-emerald);">✅ Model Answer (الإجابة النموذجية المعتمدة):</span>
                  <button type="button" class="tool-pill-btn" onclick="const box = this.parentElement.nextElementSibling; box.style.display = box.style.display === 'none' ? 'block' : 'none';">
                    إخفاء / إظهار الإجابة للتسميع
                  </button>
                </div>

                <div class="sheet-a-box">
                  <p style="font-family: var(--font-en); line-height: 1.8;">
                    A <strong>stored program computer</strong> is a computer architecture (originating from the <strong>von Neumann concept</strong>) in which <strong>program instructions and data are stored together in the same read-write memory</strong>. The computer can manipulate instructions just as it manipulates data, allowing programs to be loaded, modified, and executed electronically without manually rewiring the hardware.
                  </p>
                </div>
              </div>
            </section>
          `,
          quiz: [
            {
              id: "p4_q1",
              question: "Q1. What is the fundamental principle of the von Neumann 'Stored-Program Concept'?",
              options: [
                "Programs are hardwired manually using physical cables on the wall",
                "Data and instructions are stored together in a single shared read-write memory",
                "Instructions are stored in RAM while data is only stored in CPU registers",
                "Every instruction must be 64 bits long"
              ],
              correctIndex: 1,
              explanation: "صح جداً! جوهر مبدأ فون نيومان (Stored-Program Concept) هو تخزين البيانات والتعليمات معاً في ذاكرة واحدة مشتركة قابلة للقراءة والكتابة (Single read-write memory)."
            },
            {
              id: "p4_q2",
              question: "Q2. In the IAS computer memory format, what is the size of a single memory word, and how many instructions can one word hold?",
              options: [
                "32-bit word holding 1 instruction",
                "40-bit word holding 2 instructions (20 bits each)",
                "20-bit word holding 2 instructions (10 bits each)",
                "64-bit word holding 4 instructions"
              ],
              correctIndex: 1,
              explanation: "الله ينور! الكلمة في حاسوب IAS حجمها 40 بت (40-bit word)، ولما بتشيل تعليمات بتتقسم لنصين: تعليمة شمال (20 بت) وتعليمة يمين (20 بت)."
            },
            {
              id: "p4_q3",
              question: "Q3. How are the 20 bits of a single IAS instruction divided?",
              options: [
                "10-bit opcode and 10-bit address",
                "8-bit opcode and 12-bit address",
                "12-bit opcode and 8-bit address",
                "1-bit sign and 19-bit value"
              ],
              correctIndex: 1,
              explanation: "برافو! التعليمة الـ 20 بت في حاسوب IAS مكونة من 8 بت لنوع العملية (8-bit Opcode) و 12 بت لعنوان الذاكرة (12-bit Address، عشان 2^12 = 4096 كلمة)."
            },
            {
              id: "p4_q4",
              question: "Q4. [EXAM TRAP]: Which IAS register holds the 8-bit opcode of the instruction currently being executed?",
              options: [
                "PC (Program Counter)",
                "IBR (Instruction Buffer Register)",
                "IR (Instruction Register)",
                "MAR (Memory Address Register)"
              ],
              correctIndex: 2,
              explanation: "مظبوط! سجل الـ IR (Instruction Register) هو اللي بيشيل الـ 8-bit Opcode بتاع الأمر اللي بيتنفذ حالياً، بينما الـ PC بيشيل عنوان الأمر اللي عليه الدور."
            },
            {
              id: "p4_q5",
              question: "Q5. Which IAS register is used to temporarily hold the right-hand instruction from a 40-bit memory word while the left-hand instruction executes?",
              options: [
                "MBR (Memory Buffer Register)",
                "IBR (Instruction Buffer Register)",
                "AC (Accumulator)",
                "PC (Program Counter)"
              ],
              correctIndex: 1,
              explanation: "صح! سجل الـ IBR (Instruction Buffer Register) وظيفته يشيل التعليمة اليمين (20-bit) مؤقتاً لحد ما التعليمة الشمال تخلص، فيوفر مشوار للذاكرة!"
            },
            {
              id: "p4_q6",
              question: "Q6. Which IAS register contains the address of the NEXT instruction pair to be fetched from memory?",
              options: [
                "IR (Instruction Register)",
                "PC (Program Counter)",
                "MBR (Memory Buffer Register)",
                "MQ (Multiplier Quotient)"
              ],
              correctIndex: 1,
              explanation: "إجابة صحيحة! عداد البرنامج PC (Program Counter) دايماً بيشاور على عنوان التعليمة (أو زوج التعليمات) التالية اللي عليها الدور تتجاب من الذاكرة."
            },
            {
              id: "p4_q7",
              question: "Q7. [True / False]: In the IAS computer, the Program Counter (PC) holds the instruction currently being executed.",
              options: [
                "True",
                "False"
              ],
              correctIndex: 1,
              explanation: "الإجابة False (✖)! دي أشهر خدعة في صح وغلط: الـ IR هو اللي بيشيل التعليمة اللي بتتنفذ حالياً، أما الـ PC فبيشيل عنوان التعليمة التالية (Next Address)."
            },
            {
              id: "p4_q8",
              question: "Q8. Which registers are directly employed to hold temporarily operands and results generated by the ALU in the IAS computer?",
              options: [
                "PC and MAR",
                "IR and IBR",
                "AC (Accumulator) and MQ (Multiplier Quotient)",
                "MAR and IBR"
              ],
              correctIndex: 2,
              explanation: "الله ينور! سجلات الـ AC (Accumulator) والـ MQ (Multiplier Quotient) هي السجلات الـ 40 بت الملحقة بالـ ALU لحفظ الأرقام ونواتج العمليات الحسابية."
            }
          ]
        },

        /* ====================================================================
           PART 5: Computer Generations, Integrated Circuits & Moore's Law (Slides 22 to 41)
           ==================================================================== */
        {
          id: "ch1-p5",
          code: "PART 5",
          slides: "Slides 22 to 41",
          title: "Computer Generations, Integrated Circuits & Moore's Law",
          hasContent: true,
          contentHtml: `
            <!-- 1. COMPUTER GENERATIONS SUMMARY (جدول أجيال الحواسيب الرسمي للامتحان) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">01</span>
                <h2 class="exp-sec-title">COMPUTER GENERATIONS SUMMARY (جدول أجيال الحواسيب الرسمي للامتحان)</h2>
              </div>

              <p style="margin-bottom: 0.5rem;">
                جدول مقارنة الأجيال الخمسة للحواسيب والتقنية الأساسية (<span class="mono">Principal Technology</span>) لكل جيل كما يرد في الامتحانات:
              </p>

              <div class="gen-table-wrap">
                <table class="gen-table">
                  <thead>
                    <tr>
                      <th>الجيل والسنوات (Generation &amp; Years)</th>
                      <th>التقنية الأساسية (Principal Technology)</th>
                      <th>أمثلة وخصائص (Examples &amp; Characteristics)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong class="mono" style="color:var(--accent-rose);">1st Gen (1946 – 1957)</strong></td>
                      <td><strong>Vacuum Tubes</strong> (الصمامات المفرغة الزجاجية)</td>
                      <td><span class="mono">ENIAC, IAS</span> (ضخم جداً، حرارة عالية، سرعة بطيئة)</td>
                    </tr>
                    <tr>
                      <td><strong class="mono" style="color:var(--accent-amber);">2nd Gen (1958 – 1964)</strong></td>
                      <td><strong>Transistors</strong> (الترانزستور السيليكون)</td>
                      <td><span class="mono">IBM 7094</span> (أصغر، أسرع، أرخص، حرارة أقل)</td>
                    </tr>
                    <tr>
                      <td><strong class="mono" style="color:var(--accent-cyan);">3rd Gen (1965 – 1971)</strong></td>
                      <td><strong>Integrated Circuits — ICs</strong> (دوائر متكاملة SSI/MSI)</td>
                      <td><span class="mono">IBM System/360</span> (بوابات وخلايا ذاكرة على شريحة واحدة)</td>
                    </tr>
                    <tr>
                      <td><strong class="mono" style="color:var(--accent-emerald);">4th Gen (1972 – 1977)</strong></td>
                      <td><strong>LSI</strong> (Large Scale Integration)</td>
                      <td>أشباه الموصلات (<span class="mono">Semiconductor Memory</span>) وبداية الميكروبروسيسور</td>
                    </tr>
                    <tr>
                      <td><strong class="mono" style="color:var(--accent-purple);">5th Gen (1978 – Present)</strong></td>
                      <td><strong>VLSI &amp; ULSI</strong> (ملايين ومليارات الترانزستورات)</td>
                      <td>المعالجات الحديثة (<span class="mono">Microprocessors, Multicore, x86</span>)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <!-- 2. THE TRANSISTOR REVOLUTION (ثورة الترانزستور - سلايد 22) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">02</span>
                <h2 class="exp-sec-title">THE TRANSISTOR REVOLUTION (ثورة الترانزستور - سلايد 22)</h2>
              </div>

              <div class="balady-box">
                <div class="balady-label">💡 اختراع الترانزستور في معامل Bell Labs سنة 1947</div>
                <p>
                  اخترع الترانزستور في معامل <strong>Bell Labs</strong> سنة <strong>1947</strong> من مادة السيليكون (<strong class="mono" style="color: var(--accent-cyan);">Solid-State Device</strong>)، وأحدث انقلاباً أنهى عصر الصمامات المفرغة الزجاجية.
                </p>
              </div>

              <h3 style="font-size: 1.05rem; font-weight: 800; margin: 1.1rem 0 0.65rem; color: var(--accent-amber);">
                📌 مميزات الترانزستور الأربعة مقارنة بالصمامات المفرغة (سؤال امتحان شهير):
              </h3>

              <div class="attr-grid">
                <div class="attr-card" style="border-top: 3px solid var(--accent-cyan);">
                  <span class="attr-term">1. Smaller</span>
                  <p class="attr-desc">أصغر في الحجم الفيزيائي بآلاف المرات من لمبات الصمامات المفرغة.</p>
                </div>

                <div class="attr-card" style="border-top: 3px solid var(--accent-emerald);">
                  <span class="attr-term" style="color: var(--accent-emerald);">2. Cheaper</span>
                  <p class="attr-desc">أرخص بكتير في تكلفة الإنتاج والتصنيع.</p>
                </div>

                <div class="attr-card" style="border-top: 3px solid var(--accent-amber);">
                  <span class="attr-term" style="color: var(--accent-amber);">3. Dissipates Less Heat</span>
                  <p class="attr-desc">بيطلع حرارة أقل بكتير جداً ويستهلك كهرباء أقل.</p>
                </div>

                <div class="attr-card" style="border-top: 3px solid var(--accent-purple);">
                  <span class="attr-term" style="color: var(--accent-purple);">4. Higher Reliability</span>
                  <p class="attr-desc">قطعة صلبة (<span class="mono">Solid-State</span>) عمرها الافتراضي طويل ومش بتنكسر أو تتحرق زي لمبات الزجاج.</p>
                </div>
              </div>
            </section>

            <!-- 3. INTEGRATED CIRCUITS - ICs & 4. MOORE'S LAW (مع محاكي الـ IC وقانون مور التفاعلي) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">03</span>
                <h2 class="exp-sec-title">INTEGRATED CIRCUITS (ICs) &amp; MOORE'S LAW (الدوائر المتكاملة وقانون مور - سلايد 26 إلى 31)</h2>
              </div>

              <div class="en-def-box">
                <span class="en-def-label">Official Concept — Integrated Circuit (IC)</span>
                <p class="en-def-text">
                  "A <strong>single, thin piece of silicon (chip)</strong> upon which an entire electronic circuit, consisting of thousands or millions of <strong>transistors, gates, and connections</strong>, is fabricated."
                </p>
              </div>

              <div class="balady-box">
                <div class="balady-label">📖 الشرح والتوضيح</div>
                <p>
                  بدل ما نصنع كل ترانزستور لوحده ونوصلهم بأسلاك نحاس تلحمها وتفك منك (<span class="mono">Discrete Components</span>)، حفرنا كل الترانزستورات والمقاومات والأسلاك في نفس اللحظة على <strong>شريحة سيليكون واحدة رقيقة (<span class="mono">Silicon Chip / Die</span>)</strong>!
                </p>
              </div>

              <div class="two-layers-split" style="margin-bottom: 1.25rem;">
                <div class="layer-pill-card" style="border-top: 3px solid var(--accent-cyan);">
                  <div class="mono" style="color: var(--accent-cyan); font-weight: 800; font-size: 0.85rem; margin-bottom: 0.35rem;">
                    IC COMPONENT 01 // LOGIC GATES
                  </div>
                  <p><strong>• البوابات المنطقية (<span class="mono">Logic Gates</span>)</strong> ──► وظيفتها: <strong>معالجة البيانات (<span class="mono">Data Processing</span>)</strong>.</p>
                </div>

                <div class="layer-pill-card" style="border-top: 3px solid var(--accent-emerald);">
                  <div class="mono" style="color: var(--accent-emerald); font-weight: 800; font-size: 0.85rem; margin-bottom: 0.35rem;">
                    IC COMPONENT 02 // MEMORY CELLS
                  </div>
                  <p><strong>• خلايا الذاكرة (<span class="mono">Memory Cells</span>)</strong> ──► وظيفتها: <strong>تخزين البيانات (<span class="mono">Data Storage</span>)</strong>.</p>
                </div>
              </div>

              <!-- INTERACTIVE SIMULATOR 9: Integrated Circuit & Moore's Law Scaling -->
              <div class="sim-card" data-sim="sim-ic-moore">
                <div class="sim-top-bar">
                  <div class="sim-title-group">
                    <span class="sim-live-dot"></span>
                    <span class="sim-badge-title">FIG 1.9 // INTEGRATED CIRCUIT (IC) &amp; MOORE'S LAW SIMULATOR</span>
                  </div>
                  <div class="sim-controls">
                    <button type="button" class="sim-step-btn active" data-sim-step="0">1. تشريح شريحة الـ IC (Gates + Cells)</button>
                    <button type="button" class="sim-step-btn" data-sim-step="1">2. قانون مور (2× Transistors)</button>
                    <button type="button" class="sim-step-btn" data-sim-step="2">3. قصر المسارات وزيادة السرعة</button>
                    <button type="button" class="sim-step-btn play-auto" data-sim-autoplay>▶ تشغيل تلقائي</button>
                  </div>
                </div>

                <div class="sim-svg-stage">
                  <svg viewBox="0 0 740 345" xmlns="http://www.w3.org/2000/svg">
                    <!-- Left Side: Single Silicon IC Die Anatomy -->
                    <g class="svg-hw-group cyan-node active-node" data-node-step="0,2" data-click-step="0">
                      <rect class="svg-hw-box" x="35" y="20" width="320" height="295" rx="12" />
                      <text class="svg-label-mono" x="195" y="45">① INTEGRATED CIRCUIT (SINGLE SILICON DIE)</text>

                      <!-- Logic Gates Block inside IC -->
                      <rect x="60" y="65" width="270" height="82" rx="8" fill="var(--bg-elevated)" stroke="var(--accent-cyan)" stroke-width="2" />
                      <text class="svg-label-en" x="195" y="92">Logic Gates (AND / OR / NOT)</text>
                      <text class="svg-label-ar" x="195" y="114">البوابات المنطقية ➔ معالجة البيانات</text>
                      <text class="svg-label-mono" x="195" y="134" style="fill:var(--accent-cyan);">FUNCTION: DATA PROCESSING</text>

                      <!-- Internal On-Chip Metallization Paths -->
                      <path class="wire-base" d="M 145 147 L 145 195" />
                      <path class="wire-base" d="M 245 147 L 245 195" />
                      <path class="wire-flow amber active-flow" data-wire-step="0,2" d="M 145 147 L 145 195" />
                      <path class="wire-flow emerald active-flow" data-wire-step="0,2" d="M 245 195 L 245 147" />

                      <circle class="data-packet-dot moving" data-packet-step="0,2" r="5" fill="#f59e0b">
                        <animateMotion dur="0.65s" repeatCount="indefinite" path="M 145 147 L 145 195" />
                      </circle>
                      <circle class="data-packet-dot moving" data-packet-step="0,2" r="5" fill="#10b981">
                        <animateMotion dur="0.65s" repeatCount="indefinite" path="M 245 195 L 245 147" />
                      </circle>

                      <!-- Memory Cells Block inside IC -->
                      <rect x="60" y="195" width="270" height="82" rx="8" fill="var(--bg-elevated)" stroke="var(--accent-emerald)" stroke-width="2" />
                      <text class="svg-label-en" x="195" y="222">Memory Cells (Flip-Flops)</text>
                      <text class="svg-label-ar" x="195" y="244">خلايا الذاكرة ➔ تخزين البيانات</text>
                      <text class="svg-label-mono" x="195" y="264" style="fill:var(--accent-emerald);">FUNCTION: DATA STORAGE</text>

                      <text class="svg-label-mono" x="195" y="298" style="fill:var(--text-muted);">FABRICATED ON ONE THIN WAFER CHIP</text>
                    </g>

                    <!-- Callout Badge 1/3 on Internal IC Paths -->
                    <g class="svg-wire-callout active-pill" data-pill-step="0,2" data-click-step="2">
                      <rect class="svg-wire-pill" x="90" y="160" width="210" height="22" />
                      <text class="svg-wire-text" x="195" y="175">③ مسارات قصيرة جداً = سرعة أعلى ⚡</text>
                    </g>

                    <!-- Right Side: Moore's Law Doubling Visualization -->
                    <g class="svg-hw-group amber-node" data-node-step="1,2" data-click-step="1">
                      <rect class="svg-hw-box" x="385" y="20" width="320" height="295" rx="12" />
                      <text class="svg-label-mono" x="545" y="45" style="fill:var(--accent-amber);">② MOORE'S LAW (EMPIRICAL OBSERVATION)</text>

                      <!-- Year N Die vs Year N+2 Die (Same Chip Area, 2x Density) -->
                      <rect x="410" y="65" width="120" height="105" rx="8" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="2" />
                      <text class="svg-label-mono" x="470" y="85">CHIP DIE (GEN A)</text>
                      <!-- 4 Transistor blocks -->
                      <rect x="428" y="96" width="34" height="26" rx="4" fill="var(--accent-cyan-soft)" stroke="var(--accent-cyan)" />
                      <rect x="476" y="96" width="34" height="26" rx="4" fill="var(--accent-cyan-soft)" stroke="var(--accent-cyan)" />
                      <rect x="428" y="130" width="34" height="26" rx="4" fill="var(--accent-cyan-soft)" stroke="var(--accent-cyan)" />
                      <rect x="476" y="130" width="34" height="26" rx="4" fill="var(--accent-cyan-soft)" stroke="var(--accent-cyan)" />

                      <text class="svg-label-mono" x="545" y="122" style="fill:var(--accent-amber); font-size:14px;">──►</text>

                      <!-- Same size Die with 2x Transistors & Shorter Paths -->
                      <rect x="560" y="65" width="120" height="105" rx="8" fill="var(--bg-elevated)" stroke="var(--accent-amber)" stroke-width="2" />
                      <text class="svg-label-mono" x="620" y="85" style="fill:var(--accent-amber);">SAME DIE (2×)</text>
                      <!-- 8 Smaller Transistor blocks packed closer -->
                      <rect x="574" y="95" width="20" height="16" rx="3" fill="var(--accent-amber-soft)" stroke="var(--accent-amber)" />
                      <rect x="598" y="95" width="20" height="16" rx="3" fill="var(--accent-amber-soft)" stroke="var(--accent-amber)" />
                      <rect x="622" y="95" width="20" height="16" rx="3" fill="var(--accent-amber-soft)" stroke="var(--accent-amber)" />
                      <rect x="646" y="95" width="20" height="16" rx="3" fill="var(--accent-amber-soft)" stroke="var(--accent-amber)" />
                      <rect x="574" y="117" width="20" height="16" rx="3" fill="var(--accent-amber-soft)" stroke="var(--accent-amber)" />
                      <rect x="598" y="117" width="20" height="16" rx="3" fill="var(--accent-amber-soft)" stroke="var(--accent-amber)" />
                      <rect x="622" y="117" width="20" height="16" rx="3" fill="var(--accent-amber-soft)" stroke="var(--accent-amber)" />
                      <rect x="646" y="117" width="20" height="16" rx="3" fill="var(--accent-amber-soft)" stroke="var(--accent-amber)" />
                      <text class="svg-label-mono" x="620" y="154" style="fill:var(--accent-emerald); font-size:9.5px;">2× TRANSISTORS!</text>

                      <!-- 5 Consequences Summary Box -->
                      <rect x="410" y="185" width="270" height="112" rx="8" fill="var(--bg-surface)" stroke="var(--accent-emerald)" stroke-width="1.5" />
                      <text class="svg-label-en" x="545" y="207" style="font-size:11.5px; fill:var(--accent-emerald);">5 Consequences of Moore's Law:</text>
                      <text class="svg-label-ar" x="545" y="228" style="font-size:11.5px;">1. ثبات سعر الشريحة وهبوط تكلفة الحواسيب</text>
                      <text class="svg-label-ar" x="545" y="247" style="font-size:11.5px;">2. مسارات أقصر (Shorter Paths) = سرعة أعلى</text>
                      <text class="svg-label-ar" x="545" y="266" style="font-size:11.5px;">3. حجم أصغر + 4. طاقة وتبريد أقل</text>
                      <text class="svg-label-ar" x="545" y="285" style="font-size:11.5px;">5. لحامات خارجية أقل = اعتمادية أعلى</text>
                    </g>
                  </svg>
                </div>
              </div>

              <!-- 4. GORDON MOORE & MOORE'S LAW DETAILS -->
              <div class="en-def-box" style="border-left-color: var(--accent-amber); margin-top: 1.25rem;">
                <span class="en-def-label" style="color: var(--accent-amber);">Gordon Moore (Co-founder of Intel, 1965) — Moore's Law Definition</span>
                <p class="en-def-text">
                  "The <strong>number of transistors</strong> that could be put on a <strong>single chip</strong> was <strong>doubling every year</strong> (later revised to <strong>every 18 months to 2 years</strong>)."
                </p>
              </div>

              <div class="balady-box">
                <div class="balady-label">📖 الشرح والتوضيح</div>
                <p>
                  <strong>جوردون مور</strong> (المؤسس المشارك لشركة Intel) لاحظ سنة 1965 إن كل سنة لسنتين، المهندسين بيعرفوا يصغروا الترانزستور للنص، فبنقدر نحشر <strong>ضعف عدد الترانزستورات</strong> على نفس مساحة شريحة السيليكون!
                </p>
              </div>

              <h3 style="font-size: 1.05rem; font-weight: 800; margin: 1.15rem 0 0.65rem; color: var(--accent-emerald);">
                📌 النتائج الخمس المترتبة على قانون مور (The 5 Consequences / Benefits of Moore's Law):
              </h3>

              <div class="attr-grid">
                <div class="attr-card">
                  <span class="attr-term" style="color: var(--accent-emerald);">1. Cost Dropped Dramatically</span>
                  <p class="attr-desc ltr-block" style="margin-bottom:0.3rem;">The cost of a chip has remained nearly unchanged while its logic capacity multiplied.</p>
                  <p class="attr-desc">تكلفة الدوائر المنطقية والذاكرة والحواسيب نزلت للأرض.</p>
                </div>

                <div class="attr-card">
                  <span class="attr-term" style="color: var(--accent-amber);">2. Shorter Electrical Paths ➔ Higher Speed</span>
                  <p class="attr-desc ltr-block" style="margin-bottom:0.3rem;">Shorter electrical paths between components led to MUCH higher clock speeds.</p>
                  <p class="attr-desc">المسافة صغرت فالإلكترونات بتجري في زمن أقل، فالتردد والسرعة زادوا جداً.</p>
                </div>

                <div class="attr-card">
                  <span class="attr-term">3. Smaller Physical Size</span>
                  <p class="attr-desc ltr-block" style="margin-bottom:0.3rem;">The computer becomes smaller in size, making it convenient to place in various environments.</p>
                  <p class="attr-desc">الأجهزة صغرت من حجم أوضة كاملة لحجم تليفون أو ساعة يد.</p>
                </div>

                <div class="attr-card">
                  <span class="attr-term" style="color: var(--accent-cyan);">4. Reduced Power &amp; Cooling</span>
                  <p class="attr-desc ltr-block" style="margin-bottom:0.3rem;">Reduction in electrical power and cooling requirements.</p>
                  <p class="attr-desc">استهلاك الكهرباء ومتطلبات التبريد قلت لكل بوابة منطقية.</p>
                </div>

                <div class="attr-card" style="grid-column: 1 / -1;">
                  <span class="attr-term" style="color: var(--accent-purple);">5. Fewer Interconnections ➔ Much Higher Reliability</span>
                  <p class="attr-desc ltr-block" style="margin-bottom:0.3rem;">Fewer interconnections between separate chips, yielding much higher reliability.</p>
                  <p class="attr-desc">التوصيلات واللحامات الخارجية بين الشرائح قلت لأن كله بقى محفور جوه نفس الشريحة، فاحتمالية الأعطال انعدمت تقريباً.</p>
                </div>
              </div>
            </section>

            <!-- 5. EVOLUTION OF SEMICONDUCTOR MEMORY & MICROPROCESSORS (سلايد 36 إلى 41) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">04</span>
                <h2 class="exp-sec-title">EVOLUTION OF SEMICONDUCTOR MEMORY &amp; MICROPROCESSORS (تطور ذاكرة أشباه الموصلات والمعالجات - سلايد 36 إلى 41)</h2>
              </div>

              <!-- INTERACTIVE SIMULATOR 10: Microprocessor & Generations Evolution Timeline -->
              <div class="sim-card" data-sim="sim-cpu-evolution">
                <div class="sim-top-bar">
                  <div class="sim-title-group">
                    <span class="sim-live-dot"></span>
                    <span class="sim-badge-title">FIG 1.10 // GENERATIONS &amp; INTEL MICROPROCESSOR EVOLUTION SIMULATOR</span>
                  </div>
                  <div class="sim-controls">
                    <button type="button" class="sim-step-btn active" data-sim-step="0">1. Vacuum Tubes ➔ Transistor</button>
                    <button type="button" class="sim-step-btn" data-sim-step="1">2. 1970 RAM &amp; 1971 Intel 4004</button>
                    <button type="button" class="sim-step-btn" data-sim-step="2">3. عائلة x86 (8080 ➔ Pentium)</button>
                    <button type="button" class="sim-step-btn play-auto" data-sim-autoplay>▶ تشغيل التطور</button>
                  </div>
                </div>

                <div class="sim-svg-stage">
                  <svg viewBox="0 0 740 330" xmlns="http://www.w3.org/2000/svg">
                    <!-- Stage 1: Gen 1 & Gen 2 -->
                    <g class="svg-hw-group amber-node active-node" data-node-step="0" data-click-step="0">
                      <rect class="svg-hw-box" x="30" y="25" width="680" height="82" rx="10" />
                      <text class="svg-label-mono" x="370" y="47" style="fill:var(--accent-amber);">① 1ST GEN (1946: VACUUM TUBES) ──► 2ND GEN (1958: SILICON TRANSISTOR)</text>
                      <text class="svg-label-en" x="370" y="70">ENIAC / IAS (Glass Vacuum Tubes)  ──►  Bell Labs 1947 Transistor / IBM 7094</text>
                      <text class="svg-label-ar" x="370" y="92">الترانزستور: أصغر (Smaller) • أرخص (Cheaper) • حرارة أقل (Less Heat) • اعتمادية أعلى (Reliable)</text>
                    </g>

                    <path class="wire-base" d="M 370 107 L 370 130" />
                    <path class="wire-flow cyan active-flow" data-wire-step="0,1" d="M 370 107 L 370 130" />

                    <!-- Stage 2: 1970 Semiconductor Memory & 1971 Intel 4004 -->
                    <g class="svg-hw-group cyan-node" data-node-step="1" data-click-step="1">
                      <rect class="svg-hw-box" x="30" y="130" width="680" height="82" rx="10" />
                      <text class="svg-label-mono" x="370" y="152">② 3RD GEN ICs (1965) ──► FAIRCHILD RAM (1970) ──► INTEL 4004 (1971)</text>
                      <text class="svg-label-en" x="370" y="175">1970: First 256-bit Semiconductor RAM  |  1971: Intel 4004 (First 4-Bit Microprocessor)</text>
                      <text class="svg-label-ar" x="370" y="197">Intel 4004: أول ميكروبروسيسور عام جمع كل الـ CPU (ALU + CU + Registers) على شريحة واحدة!</text>
                    </g>

                    <path class="wire-base" d="M 370 212 L 370 235" />
                    <path class="wire-flow emerald" data-wire-step="1,2" d="M 370 212 L 370 235" />

                    <!-- Stage 3: Intel x86 Architecture Progression -->
                    <g class="svg-hw-group emerald-node" data-node-step="2" data-click-step="2">
                      <rect class="svg-hw-box" x="30" y="235" width="680" height="82" rx="10" />
                      <text class="svg-label-mono" x="370" y="257" style="fill:var(--accent-emerald);">③ INTEL x86 MICROPROCESSOR EVOLUTION (1974 TO 1993+)</text>
                      <text class="svg-label-en" x="370" y="280">8080 (8-bit) ──► 8086 (16-bit x86) ──► 80386 (32-bit + Virtual Mem) ──► Pentium (Superscalar)</text>
                      <text class="svg-label-ar" x="370" y="302">Pentium (1993): تقنية Superscalar لتنفيذ أكثر من تعليمة بالتوازي في نفس نبضة الساعة!</text>
                    </g>

                    <circle class="data-packet-dot moving" data-packet-step="0,1,2" r="6" fill="#06b6d4">
                      <animateMotion dur="1.6s" repeatCount="indefinite" path="M 370 40 L 370 300" />
                    </circle>
                  </svg>
                </div>
              </div>

              <div class="attr-grid">
                <div class="attr-card" style="border-top: 3px solid var(--accent-cyan);">
                  <span class="attr-term">• 1970 — Fairchild Semiconductor Memory</span>
                  <p class="attr-desc">أول شريحة رامات سيليكون تجارية في التاريخ، وكانت سعتها <strong>256 بت بس</strong> (في حجم حرف واحد)!</p>
                </div>

                <div class="attr-card" style="border-top: 3px solid var(--accent-amber);">
                  <span class="attr-term" style="color: var(--accent-amber);">• 1971 — Intel 4004 (نقطة التحول الكبرى)</span>
                  <p class="attr-desc">
                    <strong>أول ميكروبروسيسور عام في التاريخ (<span class="mono">First general-purpose microprocessor</span>)</strong>: جمع كل عناصر الـ <span class="mono">CPU (ALU, CU, Registers)</span> على شريحة سيليكون واحدة، وكان بعرض <strong>4-bit</strong>.
                  </p>
                </div>

                <div class="attr-card">
                  <span class="attr-term">• 1974 — Intel 8080</span>
                  <p class="attr-desc">أول معالج دقيق عام بعرض <strong>8-bit</strong> (<span class="mono">First general-purpose 8-bit microprocessor</span>).</p>
                </div>

                <div class="attr-card">
                  <span class="attr-term">• 1978 — Intel 8086 / 8088</span>
                  <p class="attr-desc">أول معالج <strong>16-bit</strong> ومعه ولدت معمارية <strong class="mono">x86</strong> الشهيرة المستمرة حتى اليوم.</p>
                </div>

                <div class="attr-card" style="border-top: 3px solid var(--accent-emerald);">
                  <span class="attr-term" style="color: var(--accent-emerald);">• 1985 — Intel 80386</span>
                  <p class="attr-desc">قفزة لمعمارية <strong>32-bit</strong> ودعم تعدد المهام والذاكرة الافتراضية (<span class="mono">Virtual Memory</span>).</p>
                </div>

                <div class="attr-card" style="border-top: 3px solid var(--accent-purple);">
                  <span class="attr-term" style="color: var(--accent-purple);">• 1993 — Intel Pentium</span>
                  <p class="attr-desc">استخدام تقنية <strong class="mono">Superscalar</strong> (تنفيذ أكتر من تعليمة بالتوازي في نفس نبضة الساعة).</p>
                </div>
              </div>

              <div class="exam-trap-box">
                <div class="exam-trap-title">⚠️ أخطر تريكات الامتحان الخاصة بأجيال الحواسب وقانون مور (4 Traps)</div>
                <div class="exam-trap-list">
                  <p>
                    <strong>⚠️ Trap 1 (طبيعة قانون مور):</strong><br/>
                    قانون مور مش قانون فيزياء طبيعي زي قانون الجاذبية! هو <strong>"ملاحظة وتنبؤ تجريبي" (<span class="mono">Empirical Observation</span>)</strong>.
                  </p>
                  <p>
                    <strong>⚠️ Trap 2 (تضاعف الترانزستورات بيحصل كل قد إيه؟):</strong><br/>
                    • في النص الأصلي لمور (1965): <strong class="mono">Doubling every year</strong> (كل سنة).<br/>
                    • في التعديل المعتمد الشائع لاحقاً (سلايد 31): <strong class="mono">Doubling every 18 months to 2 years</strong> (كل 18 شهر لسنتين).
                  </p>
                  <p>
                    <strong>⚠️ Trap 3 (لما عدد الترانزستورات يزيد على نفس الشريحة، السرعة بتزيد ليه؟):</strong><br/>
                    السبب الفيزيائي المباشر: <strong class="mono">Shorter electrical paths</strong> (المسارات الكهربائية بين الترانزستورات بقت أقصر بكتير).
                  </p>
                  <p>
                    <strong>⚠️ Trap 4 (أول ميكروبروسيسور في التاريخ):</strong><br/>
                    هو <strong class="mono">Intel 4004</strong> سنة <strong>1971</strong> (بعرض 4-bit).
                  </p>
                </div>
              </div>
            </section>

            <!-- 6. POPULAR EXAM TRUE / FALSE DRILLS -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">05</span>
                <h2 class="exp-sec-title">POPULAR EXAM TRUE / FALSE DRILLS (أسئلة صح وغلط المشهورة)</h2>
              </div>

              <div class="tf-drills-grid">
                <div class="tf-card">
                  <p class="tf-question">[Q1] "Moore's law states that the physical size of a chip doubles every year."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge false">Answer: FALSE (✖)</span>
                    <span class="ltr-block">(The <strong>NUMBER OF TRANSISTORS</strong> doubles; chip size remains about the same).</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q2] "The second generation of computers was characterized by the use of vacuum tubes."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge false">Answer: FALSE (✖)</span>
                    <span class="ltr-block">(Second generation used <strong>TRANSISTORS</strong>; First generation used vacuum tubes).</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q3] "An integrated circuit combines gates and memory cells on a single silicon die."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge true">Answer: TRUE (✔)</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q4] "Shorter electrical paths on chips result in increased operating speeds."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge true">Answer: TRUE (✔)</span>
                  </div>
                </div>
              </div>
            </section>

            <!-- 7. SHEET 1: OFFICIAL EXAM QUESTION & MODEL ANSWER (Question 1.10) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">06</span>
                <h2 class="exp-sec-title">SHEET 1: OFFICIAL EXAM QUESTION &amp; MODEL ANSWER (سؤال الشيت 1.10)</h2>
              </div>

              <div class="sheet-card">
                <div class="sheet-q-box">
                  <span class="mono" style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700;">QUESTION 1.10 // SHEET 1</span>
                  <p style="font-family: var(--font-en); font-weight: 700; font-size: 1.05rem; margin-top: 0.35rem;">
                    "Explain Moore’s law."
                  </p>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
                  <span style="font-weight: 800; color: var(--accent-emerald);">✅ Model Answer (الإجابة النموذجية المعتمدة):</span>
                  <button type="button" class="tool-pill-btn" onclick="const box = this.parentElement.nextElementSibling; box.style.display = box.style.display === 'none' ? 'block' : 'none';">
                    إخفاء / إظهار الإجابة للتسميع
                  </button>
                </div>

                <div class="sheet-a-box">
                  <p style="font-family: var(--font-en); margin-bottom: 0.65rem;">
                    <strong>Moore’s Law</strong> was proposed in 1965 by <strong>Gordon Moore</strong>, co-founder of Intel. It observes that the <strong>number of transistors that could be put on a single chip was doubling every year</strong> (later revised to approximately <strong>every 18 months to two years</strong>).
                  </p>
                  <p style="font-family: var(--font-en); font-weight: 700; margin-bottom: 0.4rem;">
                    The consequences of Moore's Law include:
                  </p>
                  <ol>
                    <li>The <strong>cost</strong> of computer logic and memory chips has dropped dramatically.</li>
                    <li><strong>Electrical paths</strong> on chips are shortened, resulting in <strong>higher clock speeds</strong> and performance.</li>
                    <li>Computers have become significantly <strong>smaller in physical size</strong>.</li>
                    <li><strong>Power consumption and cooling</strong> requirements have been greatly reduced.</li>
                    <li><strong>Interconnections between chips</strong> are reduced, leading to substantially <strong>higher reliability</strong>.</li>
                  </ol>
                </div>
              </div>
            </section>
          `,
          quiz: [
            {
              id: "p5_q1",
              question: "Q1. Match the computer generation carefully: Which technology characterized the 1st, 2nd, and 3rd computer generations respectively?",
              options: [
                "1st: Transistors, 2nd: Vacuum Tubes, 3rd: VLSI",
                "1st: Vacuum Tubes, 2nd: Transistors, 3rd: Integrated Circuits (ICs)",
                "1st: Integrated Circuits, 2nd: LSI, 3rd: Vacuum Tubes",
                "1st: Microprocessors, 2nd: Transistors, 3rd: Vacuum Tubes"
              ],
              correctIndex: 1,
              explanation: "صح جداً! الجيل الأول Vacuum Tubes (ENIAC/IAS)، الجيل الثاني Transistors (IBM 7094)، والجيل الثالث Integrated Circuits - ICs (IBM System/360)."
            },
            {
              id: "p5_q2",
              question: "Q2. Compared to vacuum tubes, which of the following is a major advantage of the Silicon Transistor (invented at Bell Labs in 1947)?",
              options: [
                "It is much larger and dissipates more heat",
                "It is smaller, cheaper, dissipates less heat, and has higher reliability",
                "It is made of fragile glass tubes",
                "It requires manual rewiring for every program"
              ],
              correctIndex: 1,
              explanation: "الله ينور! مميزات الترانزستور الأربعة في الامتحان: Smaller, Cheaper, Dissipates less heat, Higher reliability (Solid-state device)."
            },
            {
              id: "p5_q3",
              question: "Q3. Inside an Integrated Circuit (IC), what are the two fundamental components used for Data Processing and Data Storage?",
              options: [
                "Logic Gates (for Data Processing) and Memory Cells (for Data Storage)",
                "Vacuum Tubes and Magnetic Drums",
                "Mechanical Relays and Punched Cards",
                "Power Supplies and Cooling Fans"
              ],
              correctIndex: 0,
              explanation: "برافو! جوه شريحة الـ IC: البوابات المنطقية (Logic Gates) بتعمل Data Processing، وخلايا الذاكرة (Memory Cells) بتعمل Data Storage."
            },
            {
              id: "p5_q4",
              question: "Q4. [EXAM TRAP]: What does Gordon Moore's Law state?",
              options: [
                "The physical size of a silicon chip doubles every year",
                "The number of transistors that can be placed on a single chip doubles every 18 to 24 months (originally every year)",
                "The cost of a single chip doubles every two years",
                "The electrical path length between transistors doubles every year"
              ],
              correctIndex: 1,
              explanation: "مظبوط! قانون مور بينص على إن عدد الترانزستورات (Number of transistors) على الشريحة الواحدة بيتضاعف، بينما مساحة الشريحة وتكلفتها ثابتة تقريباً."
            },
            {
              id: "p5_q5",
              question: "Q5. Why does packing transistors closer together on a single chip (as predicted by Moore's Law) increase the operating speed of the processor?",
              options: [
                "Because it makes the electrical paths longer",
                "Because shorter electrical paths reduce the time signals take to travel",
                "Because it increases the number of external solder joints between separate chips",
                "Because it replaces silicon with glass vacuum tubes"
              ],
              correctIndex: 1,
              explanation: "صح! السبب الفيزيائي المباشر لزيادة السرعة في قانون مور هو قصر المسارات الكهربائية (Shorter electrical paths) بين المكونات على الشريحة."
            },
            {
              id: "p5_q6",
              question: "Q6. Which chip, released in 1971, was the world's FIRST general-purpose microprocessor (placing all CPU components on a single chip)?",
              options: [
                "IBM System/360",
                "Intel 4004 (4-bit)",
                "Intel 80386 (32-bit)",
                "ENIAC"
              ],
              correctIndex: 1,
              explanation: "إجابة صحيحة! معالج Intel 4004 سنة 1971 (بعرض 4-bit) هو أول ميكروبروسيسور عام جمع كل مكونات الـ CPU على شريحة واحدة."
            },
            {
              id: "p5_q7",
              question: "Q7. [True / False]: Moore's law states that the size of a chip doubles every year.",
              options: [
                "True",
                "False"
              ],
              correctIndex: 1,
              explanation: "الإجابة False (✖)! اللي بيتضاعف هو عدد الترانزستورات (Number of transistors on a single chip)، مش حجم الشريحة."
            },
            {
              id: "p5_q8",
              question: "Q8. In the evolution of Intel microprocessors, which feature was introduced with the Intel Pentium (1993)?",
              options: [
                "4-bit calculator processing",
                "Superscalar technique (allowing multiple instructions to execute in parallel)",
                "Replacing transistors with vacuum tubes",
                "256-bit total RAM limit"
              ],
              correctIndex: 1,
              explanation: "الله ينور! معالج Intel Pentium (1993) قدم تقنية الـ Superscalar اللي بتسمح بتنفيذ أكتر من تعليمة بالتوازي في نفس نبضة الساعة."
            }
          ]
        },

        /* ====================================================================
           PART 6: Embedded Systems, ARM Architecture & Cloud Computing (Slides 42 to 58)
           ==================================================================== */
        {
          id: "ch1-p6",
          code: "PART 6",
          slides: "Slides 42 to 58",
          title: "Embedded Systems, ARM Architecture & Cloud Computing",
          hasContent: true,
          contentHtml: `
            <!-- 1. EMBEDDED SYSTEMS & IOT (الأنظمة المدمجة وإنترنت الأشياء - سؤال الشيت 1.7) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">01</span>
                <h2 class="exp-sec-title">EMBEDDED SYSTEMS &amp; IOT (الأنظمة المدمجة وإنترنت الأشياء - سؤال الشيت 1.7)</h2>
              </div>

              <div class="en-def-box">
                <span class="en-def-label">Official English Definition — Embedded System</span>
                <p class="en-def-text">
                  "An <strong>embedded system</strong> is the use of electronics and software <strong>within a larger product</strong> (as opposed to a general-purpose computer) designed to perform a <strong>dedicated, specific function</strong>."
                </p>
              </div>

              <div class="balady-box">
                <div class="balady-label">📖 الشرح والتوضيح</div>
                <p>
                  ده كمبيوتر صغير ومعالج مدفون جوه منتج كبير (زي الغسالة، العربية، الميكروويف، التكييف). مش معمول علشان يفتح فيسبوك ويكتب وورد زي اللابتوب (<span class="mono">General-Purpose Computer</span>)، بل معمول علشان يدير <strong>وظيفة واحدة محددة بس (<span class="mono">Dedicated Specific Function</span>)</strong>!
                </p>
              </div>

              <div class="two-layers-split">
                <div class="layer-pill-card" style="border-top: 3px solid var(--accent-purple);">
                  <div class="mono" style="color: var(--accent-purple); font-weight: 800; font-size: 0.85rem; margin-bottom: 0.4rem;">
                    SLIDE 50 // DEEPLY EMBEDDED SYSTEMS
                  </div>
                  <p style="font-size: 0.94rem;">
                    <strong>• الأنظمة شديدة الاندماج (<span class="mono">Deeply Embedded Systems</span>):</strong><br/>
                    أنظمة مدمجة صغيرة جداً ومدفونة في أعماق الأجهزة (حساسات ومتحكمات ميكروسكوبية)، وسلوكها الداخلي والبرمجي شبه مخفي وصعب مراقبته أو تعديله من المبرمج والمستخدم العادي.
                  </p>
                </div>

                <div class="layer-pill-card" style="border-top: 3px solid var(--accent-emerald);">
                  <div class="mono" style="color: var(--accent-emerald); font-weight: 800; font-size: 0.85rem; margin-bottom: 0.4rem;">
                    SLIDE 47 // INTERNET OF THINGS (IoT)
                  </div>
                  <p style="font-size: 0.94rem;">
                    <strong>• إنترنت الأشياء (<span class="mono">Internet of Things — IoT</span>):</strong><br/>
                    شبكة الأجهزة الذكية والأجهزة المدمجة (من الحساسات للأجهزة المنزلية والسيارات) المتصلة ببعضها عبر الإنترنت لتبادل البيانات واتخاذ قرارات ذكية تلقائياً.
                  </p>
                </div>
              </div>
            </section>

            <!-- 2. ARM ARCHITECTURE (معمارية ARM وعائلات Cortex - سؤال الشيت 1.8) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">02</span>
                <h2 class="exp-sec-title">ARM ARCHITECTURE (معمارية ARM وعائلات Cortex الثلاثة - سؤال الشيت 1.8)</h2>
              </div>

              <div class="en-def-box" style="border-left-color: var(--accent-amber);">
                <span class="en-def-label" style="color: var(--accent-amber);">Official English Definition — ARM Architecture</span>
                <p class="en-def-text">
                  "<strong>ARM</strong> refers to a family of <strong>RISC-based (Reduced Instruction Set Computer)</strong> microprocessor architectures designed by ARM Holdings. It is widely used in <strong>embedded systems and mobile devices</strong> due to its <strong>high power efficiency and low cost</strong>."
                </p>
              </div>

              <div class="balady-box">
                <div class="balady-label">📖 الشرح والتوضيح</div>
                <p>
                  المعمارية اللي مشغلة كل موبايلات كوكب الأرض! صممتها شركة بريطانية اسمها <strong>ARM</strong>. سر نجاحها إنها مبنية على فلسفة الـ <strong class="mono" style="color: var(--accent-cyan);">RISC</strong> (أوامر بسيطة وخفيفة جداً)، فبتستهلك كهرباء قليلة جداً وحرارتها باردة، وده اللي مخلي بطارية الموبايل تعيش ساعات طويلة.
                </p>
              </div>

              <!-- INTERACTIVE SIMULATOR 11: ARM RISC Architecture & Cortex Families (A / R / M) -->
              <div class="sim-card" data-sim="sim-arm-embedded">
                <div class="sim-top-bar">
                  <div class="sim-title-group">
                    <span class="sim-live-dot"></span>
                    <span class="sim-badge-title">FIG 1.11 // ARM RISC ARCHITECTURE &amp; CORTEX (A / R / M) SIMULATOR</span>
                  </div>
                  <div class="sim-controls">
                    <button type="button" class="sim-step-btn active" data-sim-step="0">1. فلسفة ARM RISC (توفير الطاقة)</button>
                    <button type="button" class="sim-step-btn" data-sim-step="1">2. عائلتا Cortex-A &amp; Cortex-R</button>
                    <button type="button" class="sim-step-btn" data-sim-step="2">3. عائلة Cortex-M (IoT &amp; Embedded)</button>
                    <button type="button" class="sim-step-btn play-auto" data-sim-autoplay>▶ تشغيل تلقائي</button>
                  </div>
                </div>

                <div class="sim-svg-stage">
                  <svg viewBox="0 0 740 345" xmlns="http://www.w3.org/2000/svg">
                    <!-- Top: ARM RISC Core Philosophy vs x86 CISC -->
                    <g class="svg-hw-group cyan-node active-node" data-node-step="0,1,2" data-click-step="0">
                      <rect class="svg-hw-box" x="110" y="16" width="520" height="84" rx="10" />
                      <text class="svg-label-mono" x="370" y="39">① ARM ARCHITECTURE // RISC (REDUCED INSTRUCTION SET COMPUTER)</text>
                      <text class="svg-label-en" x="370" y="62">Simple Instructions • High Power Efficiency • Compact Die • Low Cost</text>
                      <text class="svg-label-ar" x="370" y="84">أوامر RISC بسيطة وخفيفة ➔ استهلاك بطارية قليل جداً وحرارة باردة (عكس Intel x86 CISC)</text>
                    </g>

                    <!-- Wires from ARM Core to the 3 Cortex Families -->
                    <path class="wire-base" d="M 370 100 L 370 142 L 135 142 L 135 182" />
                    <path class="wire-base" d="M 370 100 L 370 182" />
                    <path class="wire-base" d="M 370 100 L 370 142 L 605 142 L 605 182" />

                    <path class="wire-flow cyan active-flow" data-wire-step="0,1" d="M 370 100 L 370 142 L 135 142 L 135 182" />
                    <path class="wire-flow amber active-flow" data-wire-step="0,1" d="M 370 100 L 370 182" />
                    <path class="wire-flow emerald" data-wire-step="0,2" d="M 370 100 L 370 142 L 605 142 L 605 182" />

                    <circle class="data-packet-dot moving" data-packet-step="0,1" r="6" fill="#06b6d4">
                      <animateMotion dur="1.1s" repeatCount="indefinite" path="M 370 100 L 370 142 L 135 142 L 135 182" />
                    </circle>
                    <circle class="data-packet-dot moving" data-packet-step="0,1" r="6" fill="#f59e0b">
                      <animateMotion dur="0.9s" repeatCount="indefinite" path="M 370 100 L 370 182" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="0,2" r="7" fill="#10b981">
                      <animateMotion dur="1.1s" repeatCount="indefinite" path="M 370 100 L 370 142 L 605 142 L 605 182" />
                    </circle>

                    <!-- On-Wire Callout Pills -->
                    <g class="svg-wire-callout active-pill" data-pill-step="1" data-click-step="1">
                      <rect class="svg-wire-pill" x="55" y="150" width="160" height="22" />
                      <text class="svg-wire-text" x="135" y="165">② A = Applications ▼</text>
                    </g>

                    <g class="svg-wire-callout active-pill" data-pill-step="1" data-click-step="1">
                      <rect class="svg-wire-pill" x="290" y="150" width="160" height="22" />
                      <text class="svg-wire-text" x="370" y="165">② R = Real-Time ▼</text>
                    </g>

                    <g class="svg-wire-callout" data-pill-step="2" data-click-step="2">
                      <rect class="svg-wire-pill" x="515" y="150" width="180" height="22" />
                      <text class="svg-wire-text" x="605" y="165">③ M = Microcontroller ▼</text>
                    </g>

                    <!-- Cortex-A (Application Processors) -->
                    <g class="svg-hw-group cyan-node" data-node-step="1" data-click-step="1">
                      <rect class="svg-hw-box" x="25" y="182" width="220" height="140" rx="10" />
                      <text class="svg-label-mono" x="135" y="206">ARM CORTEX-A</text>
                      <text class="svg-label-en" x="135" y="230">Application Processors</text>
                      <text class="svg-label-ar" x="135" y="256">للموبايلات والتابلت</text>
                      <text class="svg-label-ar" x="135" y="278">(تشغيل أنظمة Android &amp; iOS)</text>
                      <text class="svg-label-mono" x="135" y="304" style="fill:var(--accent-cyan);">SMARTPHONES &amp; OS</text>
                    </g>

                    <!-- Cortex-R (Real-Time Processors) -->
                    <g class="svg-hw-group amber-node" data-node-step="1" data-click-step="1">
                      <rect class="svg-hw-box" x="260" y="182" width="220" height="140" rx="10" />
                      <text class="svg-label-mono" x="370" y="206" style="fill:var(--accent-amber);">ARM CORTEX-R</text>
                      <text class="svg-label-en" x="370" y="230">Real-Time Processors</text>
                      <text class="svg-label-ar" x="370" y="256">للأنظمة الحرجة في التوقيت</text>
                      <text class="svg-label-ar" x="370" y="278">(فرامل العربيات ABS والطيران)</text>
                      <text class="svg-label-mono" x="370" y="304" style="fill:var(--accent-amber);">CRITICAL REAL-TIME</text>
                    </g>

                    <!-- Cortex-M (Microcontroller Processors) -->
                    <g class="svg-hw-group emerald-node" data-node-step="2" data-click-step="2">
                      <rect class="svg-hw-box" x="495" y="182" width="220" height="140" rx="10" />
                      <text class="svg-label-mono" x="605" y="206" style="fill:var(--accent-emerald);">ARM CORTEX-M</text>
                      <text class="svg-label-en" x="605" y="230">Microcontroller Units</text>
                      <text class="svg-label-ar" x="605" y="256">للحساسات والأجهزة المدمجة</text>
                      <text class="svg-label-ar" x="605" y="278">(إنترنت الأشياء IoT &amp; Sensors)</text>
                      <text class="svg-label-mono" x="605" y="304" style="fill:var(--accent-emerald);">EMBEDDED &amp; IoT</text>
                    </g>
                  </svg>
                </div>
              </div>

              <h3 style="font-size: 1.05rem; font-weight: 800; margin: 1.15rem 0 0.65rem; color: var(--accent-cyan);">
                📌 عائلات معالجات آرم الثلاثة المشهورة (ARM Cortex Processor Families):
              </h3>

              <div class="attr-grid">
                <div class="attr-card" style="border-top: 3px solid var(--accent-cyan);">
                  <span class="attr-term">• Cortex-A (Application Processors)</span>
                  <p class="attr-desc">مخصصة للهواتف الذكية والأجهزة اللوحية التي تشغل أنظمة تشغيل كاملة وغنية مثل <span class="mono">Android</span> و <span class="mono">iOS</span>.</p>
                </div>

                <div class="attr-card" style="border-top: 3px solid var(--accent-amber);">
                  <span class="attr-term" style="color: var(--accent-amber);">• Cortex-R (Real-Time Processors)</span>
                  <p class="attr-desc">مخصصة للأنظمة السريعة جداً والحرجة في التوقيت (<span class="mono">Real-Time</span>) مثل فرامل العربيات (<span class="mono">ABS</span>) وأنظمة الطيران والطب.</p>
                </div>

                <div class="attr-card" style="border-top: 3px solid var(--accent-emerald);">
                  <span class="attr-term" style="color: var(--accent-emerald);">• Cortex-M (Microcontroller Processors)</span>
                  <p class="attr-desc">مخصصة للحساسات الصغيرة والأجهزة شديدة الاندماج وأجهزة إنترنت الأشياء (<span class="mono">IoT</span>).</p>
                </div>
              </div>
            </section>

            <!-- 3. CLOUD COMPUTING & NETWORKING (الحوسبة السحابية - سؤال الشيت 1.9) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">03</span>
                <h2 class="exp-sec-title">CLOUD COMPUTING &amp; NETWORKING (الحوسبة السحابية - سؤال الشيت 1.9)</h2>
              </div>

              <div class="en-def-box" style="border-left-color: var(--accent-emerald);">
                <span class="en-def-label" style="color: var(--accent-emerald);">Official NIST Definition — Cloud Computing</span>
                <p class="en-def-text">
                  "A model for enabling <strong>ubiquitous, convenient, on-demand network access</strong> to a <strong>shared pool of configurable computing resources</strong> (e.g., networks, servers, storage, applications) that can be <strong>rapidly provisioned and released</strong> with minimal management effort."
                </p>
              </div>

              <div class="balady-box">
                <div class="balady-label">📖 الشرح والتوضيح</div>
                <p>
                  بدل ما تشتري سيرفرات غالية عندك في الشركة، إنت بتأجر السيرفرات والرامات والتخزين من مراكز بيانات عملاقة (عند جوجل أو أمازون أو مايكروسوفت) وتوصلها عبر الإنترنت <strong>عند الطلب (<span class="mono">On-Demand</span>)</strong> وتدفع على قد استخدامك بالملي زي عداد الكهرباء!
                </p>
                <p style="margin-top: 0.55rem;">
                  • <strong>شبكات السحابة (<span class="mono">Cloud Networking</span> — سلايد 55):</strong> هي شبكات الربط فائقة السرعة والموثوقية (<span class="mono">High-performance &amp; High-reliability networking</span>) التي تسمح بنقل البيانات بين المشترك ومراكز البيانات السحابية بدون تأخير.
                </p>
              </div>

              <!-- INTERACTIVE SIMULATOR 12: IoT, Cloud Networking & NIST Cloud Computing Pool -->
              <div class="sim-card" data-sim="sim-iot-cloud">
                <div class="sim-top-bar">
                  <div class="sim-title-group">
                    <span class="sim-live-dot"></span>
                    <span class="sim-badge-title">FIG 1.12 // IOT, CLOUD NETWORKING &amp; NIST CLOUD RESOURCE POOL SIMULATOR</span>
                  </div>
                  <div class="sim-controls">
                    <button type="button" class="sim-step-btn active" data-sim-step="0">1. أجهزة الـ IoT والـ Embedded</button>
                    <button type="button" class="sim-step-btn" data-sim-step="1">2. شبكات السحابة (Cloud Networking)</button>
                    <button type="button" class="sim-step-btn" data-sim-step="2">3. مجمع موارد السحابة (NIST Cloud Pool)</button>
                    <button type="button" class="sim-step-btn play-auto" data-sim-autoplay>▶ تشغيل تلقائي</button>
                  </div>
                </div>

                <div class="sim-svg-stage">
                  <svg viewBox="0 0 740 320" xmlns="http://www.w3.org/2000/svg">
                    <!-- Left: Embedded & IoT Edge Devices -->
                    <g class="svg-hw-group emerald-node active-node" data-node-step="0,1" data-click-step="0">
                      <rect class="svg-hw-box" x="25" y="45" width="215" height="230" rx="10" />
                      <text class="svg-label-mono" x="132" y="70" style="fill:var(--accent-emerald);">① EDGE // EMBEDDED &amp; IoT</text>
                      <rect x="45" y="88" width="175" height="44" rx="6" fill="var(--bg-elevated)" stroke="var(--accent-emerald)" />
                      <text class="svg-label-en" x="132" y="108" style="font-size:11.5px;">Smart Sensors (Cortex-M)</text>
                      <text class="svg-label-ar" x="132" y="124" style="font-size:11px;">حساسات شديدة الاندماج</text>

                      <rect x="45" y="144" width="175" height="44" rx="6" fill="var(--bg-elevated)" stroke="var(--accent-cyan)" />
                      <text class="svg-label-en" x="132" y="164" style="font-size:11.5px;">Smart Appliances &amp; Cars</text>
                      <text class="svg-label-ar" x="132" y="180" style="font-size:11px;">وظيفة محددة (Dedicated)</text>

                      <rect x="45" y="200" width="175" height="44" rx="6" fill="var(--bg-elevated)" stroke="var(--accent-amber)" />
                      <text class="svg-label-en" x="132" y="220" style="font-size:11.5px;">Mobile Devices (Cortex-A)</text>
                      <text class="svg-label-ar" x="132" y="236" style="font-size:11px;">موبايلات متصلة بالسحابة</text>
                    </g>

                    <!-- Middle: High-Performance Cloud Networking -->
                    <path class="wire-base" d="M 240 135 L 435 135" />
                    <path class="wire-base" d="M 435 185 L 240 185" />

                    <path class="wire-flow cyan active-flow" data-wire-step="0,1,2" d="M 240 135 L 435 135" />
                    <path class="wire-flow amber active-flow" data-wire-step="1,2" d="M 435 185 L 240 185" />

                    <circle class="data-packet-dot moving" data-packet-step="0,1,2" r="6" fill="#06b6d4">
                      <animateMotion dur="1.0s" repeatCount="indefinite" path="M 240 135 L 435 135" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="1,2" r="6" fill="#f59e0b">
                      <animateMotion dur="1.0s" repeatCount="indefinite" path="M 435 185 L 240 185" />
                    </circle>

                    <g class="svg-wire-callout active-pill" data-pill-step="1" data-click-step="1">
                      <rect class="svg-wire-pill" x="252" y="96" width="170" height="24" />
                      <text class="svg-wire-text" x="337" y="112">② Cloud Networking ──►</text>
                    </g>

                    <g class="svg-wire-callout" data-pill-step="1,2" data-click-step="1">
                      <rect class="svg-wire-pill" x="252" y="198" width="170" height="24" />
                      <text class="svg-wire-text" x="337" y="214">◄── On-Demand Access</text>
                    </g>

                    <!-- Right: NIST Shared Pool of Configurable Cloud Resources -->
                    <g class="svg-hw-group cyan-node" data-node-step="2" data-click-step="2">
                      <rect class="svg-hw-box" x="435" y="45" width="280" height="230" rx="12" />
                      <text class="svg-label-mono" x="575" y="70">③ CLOUD COMPUTING (NIST SHARED POOL)</text>
                      <text class="svg-label-en" x="575" y="92" style="font-size:11.5px; fill:var(--accent-amber);">On-Demand Configurable Resources:</text>

                      <rect x="458" y="106" width="110" height="58" rx="6" fill="var(--bg-elevated)" stroke="var(--accent-cyan)" />
                      <text class="svg-label-en" x="513" y="130" style="font-size:11.5px;">Servers / VMs</text>
                      <text class="svg-label-ar" x="513" y="150" style="font-size:10.5px;">سيرفرات ومعالجات</text>

                      <rect x="582" y="106" width="110" height="58" rx="6" fill="var(--bg-elevated)" stroke="var(--accent-emerald)" />
                      <text class="svg-label-en" x="637" y="130" style="font-size:11.5px;">Cloud Storage</text>
                      <text class="svg-label-ar" x="637" y="150" style="font-size:10.5px;">قواعد بيانات وتخزين</text>

                      <rect x="458" y="176" width="110" height="58" rx="6" fill="var(--bg-elevated)" stroke="var(--accent-amber)" />
                      <text class="svg-label-en" x="513" y="200" style="font-size:11.5px;">Networks</text>
                      <text class="svg-label-ar" x="513" y="220" style="font-size:10.5px;">شبكات افتراضية</text>

                      <rect x="582" y="176" width="110" height="58" rx="6" fill="var(--bg-elevated)" stroke="var(--accent-purple)" />
                      <text class="svg-label-en" x="637" y="200" style="font-size:11.5px;">Applications</text>
                      <text class="svg-label-ar" x="637" y="220" style="font-size:10.5px;">تطبيقات وخدمات</text>

                      <text class="svg-label-mono" x="575" y="256" style="fill:var(--accent-emerald);">RAPIDLY PROVISIONED &amp; RELEASED</text>
                    </g>
                  </svg>
                </div>
              </div>

              <div class="exam-trap-box">
                <div class="exam-trap-title">⚠️ أخطر تريكات الامتحان الخاصة بالأنظمة المدمجة والـ ARM والـ Cloud (3 Traps)</div>
                <div class="exam-trap-list">
                  <p>
                    <strong>⚠️ Trap 1 (Embedded System vs. General-Purpose Computer):</strong><br/>
                    • الـ <span class="mono">General-Purpose Computer</span> (زي اللابتوب والديسكتوب): بيشغل برامج وتطبيقات متعددة ومختلفة.<br/>
                    • الـ <span class="mono">Embedded System</span> (زي حاسوب الغسالة أو الفرامل): <strong class="mono">Dedicated to a SPECIFIC function</strong>.
                  </p>
                  <p>
                    <strong>⚠️ Trap 2 (معمارية المعالجات — CISC vs. RISC):</strong><br/>
                    • معالجات <strong>Intel x86</strong> المستخدمة في الكمبيوتر واللابتوب تعتمد على عمارة ===&gt; <strong class="mono">CISC</strong>.<br/>
                    • معالجات <strong>ARM</strong> المستخدمة في الموبايلات والأنظمة المدمجة تعتمد على عمارة ===&gt; <strong class="mono">RISC</strong>.
                  </p>
                  <p>
                    <strong>⚠️ Trap 3 (عائلات ARM Cortex الثلاثة):</strong><br/>
                    • <strong class="mono">Cortex-A = Application</strong> (هواتف ذكية وأنظمة تشغيل كاملة).<br/>
                    • <strong class="mono">Cortex-R = Real-Time</strong> (أنظمة حرجة في التوقيت كالفرامل والطيران).<br/>
                    • <strong class="mono">Cortex-M = Microcontroller</strong> (أجهزة مدمجة وحساسات وإنترنت الأشياء IoT).
                  </p>
                </div>
              </div>
            </section>

            <!-- 4. POPULAR EXAM TRUE / FALSE DRILLS -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">04</span>
                <h2 class="exp-sec-title">POPULAR EXAM TRUE / FALSE DRILLS (أسئلة صح وغلط المشهورة)</h2>
              </div>

              <div class="tf-drills-grid">
                <div class="tf-card">
                  <p class="tf-question">[Q1] "An embedded system is designed to perform a wide variety of general-purpose user applications."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge false">Answer: FALSE (✖)</span>
                    <span class="ltr-block">(It is designed for a <strong>DEDICATED, specific function</strong>).</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q2] "The ARM architecture is based on CISC design principles."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge false">Answer: FALSE (✖)</span>
                    <span class="ltr-block">(ARM is based on <strong>RISC</strong> design principles).</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q3] "Cloud computing allows on-demand network access to shared configurable computing resources."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge true">Answer: TRUE (✔)</span>
                  </div>
                </div>
              </div>
            </section>

            <!-- 5. SHEET 1: OFFICIAL EXAM QUESTIONS & MODEL ANSWERS (1.7, 1.8, 1.9) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">05</span>
                <h2 class="exp-sec-title">SHEET 1: OFFICIAL EXAM QUESTIONS &amp; MODEL ANSWERS (أسئلة الشيت 1.7 إلى 1.9)</h2>
              </div>

              <div style="display: flex; flex-direction: column; gap: 1.25rem;">
                <!-- Q 1.7 -->
                <div class="sheet-card">
                  <div class="sheet-q-box">
                    <span class="mono" style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700;">QUESTION 1.7 // SHEET 1</span>
                    <p style="font-family: var(--font-en); font-weight: 700; font-size: 1.02rem; margin-top: 0.35rem;">
                      "What, in general terms, is meant by: Embedded system."
                    </p>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
                    <span style="font-weight: 800; color: var(--accent-emerald);">✅ Model Answer (الإجابة النموذجية):</span>
                    <button type="button" class="tool-pill-btn" onclick="const box = this.parentElement.nextElementSibling; box.style.display = box.style.display === 'none' ? 'block' : 'none';">
                      إخفاء / إظهار الإجابة للتسميع
                    </button>
                  </div>
                  <div class="sheet-a-box">
                    <p style="font-family: var(--font-en); line-height: 1.8;">
                      An <strong>embedded system</strong> is a computer system (consisting of a processor, memory, and input/output interfaces) that is <strong>embedded as part of a larger electronic or mechanical device</strong>, designed to perform <strong>dedicated functions</strong> often with real-time computing constraints.
                    </p>
                  </div>
                </div>

                <!-- Q 1.8 -->
                <div class="sheet-card">
                  <div class="sheet-q-box">
                    <span class="mono" style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700;">QUESTION 1.8 // SHEET 1</span>
                    <p style="font-family: var(--font-en); font-weight: 700; font-size: 1.02rem; margin-top: 0.35rem;">
                      "What, in general terms, is meant by: Arm architecture."
                    </p>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
                    <span style="font-weight: 800; color: var(--accent-emerald);">✅ Model Answer (الإجابة النموذجية):</span>
                    <button type="button" class="tool-pill-btn" onclick="const box = this.parentElement.nextElementSibling; box.style.display = box.style.display === 'none' ? 'block' : 'none';">
                      إخفاء / إظهار الإجابة للتسميع
                    </button>
                  </div>
                  <div class="sheet-a-box">
                    <p style="font-family: var(--font-en); line-height: 1.8;">
                      <strong>Arm architecture</strong> refers to a family of <strong>reduced instruction set computer (RISC)</strong> microprocessors designed by ARM Holdings. It is engineered primarily for <strong>power efficiency, compact die size, and low cost</strong>, making it the dominant processor architecture for mobile devices, smartphones, and embedded systems.
                    </p>
                  </div>
                </div>

                <!-- Q 1.9 -->
                <div class="sheet-card">
                  <div class="sheet-q-box">
                    <span class="mono" style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700;">QUESTION 1.9 // SHEET 1</span>
                    <p style="font-family: var(--font-en); font-weight: 700; font-size: 1.02rem; margin-top: 0.35rem;">
                      "What, in general terms, is meant by: Cloud computing."
                    </p>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
                    <span style="font-weight: 800; color: var(--accent-emerald);">✅ Model Answer (الإجابة النموذجية):</span>
                    <button type="button" class="tool-pill-btn" onclick="const box = this.parentElement.nextElementSibling; box.style.display = box.style.display === 'none' ? 'block' : 'none';">
                      إخفاء / إظهار الإجابة للتسميع
                    </button>
                  </div>
                  <div class="sheet-a-box">
                    <p style="font-family: var(--font-en); line-height: 1.8;">
                      <strong>Cloud computing</strong> (as defined by NIST) is a model for enabling <strong>ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources</strong> (e.g., networks, servers, storage, applications, and services) that can be <strong>rapidly provisioned and released</strong> with minimal management effort or service provider interaction.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          `,
          quiz: [
            {
              id: "p6_q1",
              question: "Q1. What is the key distinction between an Embedded System and a General-Purpose Computer?",
              options: [
                "An embedded system is designed to perform a dedicated, specific function within a larger product",
                "An embedded system has no processor or memory",
                "An embedded system is only used in giant mainframe data centers",
                "A general-purpose computer can only run one single fixed function"
              ],
              correctIndex: 0,
              explanation: "صح جداً! النظام المدمج (Embedded System) هو كمبيوتر مدفون جوه منتج أكبر ومصمم لأداء وظيفة محددة ومخصصة (Dedicated, specific function)."
            },
            {
              id: "p6_q2",
              question: "Q2. [EXAM TRAP]: The ARM processor architecture is based on which instruction set design philosophy?",
              options: [
                "CISC (Complex Instruction Set Computer)",
                "RISC (Reduced Instruction Set Computer)",
                "Hardwired ENIAC Vacuum Tube Logic",
                "40-bit IAS Analog Computing"
              ],
              correctIndex: 1,
              explanation: "الله ينور! معمارية ARM مبنية على فلسفة الـ RISC (Reduced Instruction Set Computer)، وده اللي بيخليها موفرة جداً للطاقة ورخيصة وباردة."
            },
            {
              id: "p6_q3",
              question: "Q3. Why is the ARM architecture the dominant choice for smartphones and mobile devices?",
              options: [
                "Because it consumes maximum electrical power and generates high heat",
                "Due to its high power efficiency, compact die size, and low cost",
                "Because it cannot run operating systems like Android or iOS",
                "Because it uses glass vacuum tubes"
              ],
              correctIndex: 1,
              explanation: "برافو! سر سيطرة ARM على الموبايلات والأنظمة المدمجة هو كفاءة استهلاك الطاقة العالية (High power efficiency)، صغر مساحة الشريحة، وانخفاض التكلفة."
            },
            {
              id: "p6_q4",
              question: "Q4. Match the ARM Cortex family: Which ARM Cortex family is specifically designed for Smartphones running rich operating systems like Android and iOS?",
              options: [
                "ARM Cortex-M",
                "ARM Cortex-R",
                "ARM Cortex-A",
                "Intel 4004"
              ],
              correctIndex: 2,
              explanation: "مظبوط! حرف الـ A في Cortex-A بيرمز لـ Application Processors، وهي المخصصة للموبايلات والأجهزة اللي بتشغل أنظمة تشغيل كاملة زي Android."
            },
            {
              id: "p6_q5",
              question: "Q5. Which ARM Cortex family is engineered for ultra-low-power Microcontrollers in IoT sensors and deeply embedded devices?",
              options: [
                "ARM Cortex-A (Application)",
                "ARM Cortex-R (Real-Time)",
                "ARM Cortex-M (Microcontroller)",
                "IBM System/370"
              ],
              correctIndex: 2,
              explanation: "صح! عائلة Cortex-M (Microcontroller) مخصصة للحساسات الصغيرة وأجهزة إنترنت الأشياء (IoT) والأنظمة المدمجة."
            },
            {
              id: "p6_q6",
              question: "Q6. Which ARM Cortex family is used for safety-critical systems requiring deterministic Real-Time response (such as car ABS brakes and aviation)?",
              options: [
                "ARM Cortex-R",
                "ARM Cortex-A",
                "ARM Cortex-M",
                "Intel 8086"
              ],
              correctIndex: 0,
              explanation: "إجابة صحيحة! عائلة Cortex-R (Real-Time Processors) مخصصة للأنظمة الحرجة في التوقيت زي فرامل العربيات والطيران."
            },
            {
              id: "p6_q7",
              question: "Q7. According to the official NIST definition, Cloud Computing provides:",
              options: [
                "Local manual rewiring of vacuum tubes without internet access",
                "Ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources",
                "Permanent physical ownership of hardware servers inside every user's home",
                "A single 4-bit calculator chip"
              ],
              correctIndex: 1,
              explanation: "الله ينور! تعريف NIST الرسمي للـ Cloud Computing: الوصول الشبكي المريح وعند الطلب (On-demand network access) لمجمع مشترك من الموارد الحاسوبية القابلة للضبط (Servers, Storage, Networks, Applications)."
            },
            {
              id: "p6_q8",
              question: "Q8. [True / False]: An embedded system is designed to perform a wide variety of general-purpose applications like a desktop PC.",
              options: [
                "True",
                "False"
              ],
              correctIndex: 1,
              explanation: "الإجابة False (✖)! الـ Embedded System مصمم لأداء وظيفة محددة ومخصصة (Dedicated, specific function) جوه جهاز أكبر."
            }
          ]
        }
      ]
    }
  ]
};



