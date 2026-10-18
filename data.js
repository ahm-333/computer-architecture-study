/**
 * ==========================================================================
 * COMPUTER ARCHITECTURE — CURRICULUM DATA STORE (WITH ANIMATED SVG SIMULATORS)
 * ==========================================================================
 */

window.COURSE_DATA = {
  courseCode: "COMP-ARCH",
  courseTitleAr: "معمارية وتنظيم الحاسب",
  courseTitleEn: "Computer Organization & Architecture",
  chapters: [
    {
      id: "ch-1",
      code: "CH 01",
      titleAr: "الفصل الأول: المفاهيم الأساسية وتطور الحاسوب",
      titleEn: "Chapter 1: Basic Concepts and Computer Evolution",
      summary: "الفرق بين Architecture و Organization، الهيكل والوظيفة (Structure & Function)، مكونات الكمبيوتر والمعالج، مع محاكيات تفاعلية متحركة للمخططات وتريكات الامتحانات.",
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
                  <svg viewBox="0 0 720 310" xmlns="http://www.w3.org/2000/svg">
                    <!-- Top Layer: Architecture (Visible to Programmer) -->
                    <g class="svg-hw-group cyan-node active-node" data-node-step="0,1,2">
                      <rect class="svg-hw-box" x="140" y="15" width="440" height="82" rx="10" />
                      <text class="svg-label-mono" x="360" y="38">LAYER 1: COMPUTER ARCHITECTURE (VISIBLE TO PROGRAMMER)</text>
                      <text class="svg-label-en" x="360" y="60">ISA Code: ADD R1, R2, R3  |  Data Type: 32-Bit Int</text>
                      <text class="svg-label-ar" x="360" y="82">كتالوج الأوامر ثابت لا يتغير أبداً مهما غيرنا سرعة الجهاز</text>
                    </g>

                    <!-- Wires from Architecture to Organization -->
                    <path class="wire-base" d="M 360 97 L 360 140 L 195 140 L 195 175" />
                    <path class="wire-base" d="M 360 97 L 360 140 L 525 140 L 525 175" />

                    <path class="wire-flow cyan active-flow" data-wire-step="0,1" d="M 360 97 L 360 140 L 195 140 L 195 175" />
                    <path class="wire-flow amber" data-wire-step="0,2" d="M 360 97 L 360 140 L 525 140 L 525 175" />

                    <!-- Moving Signal Dots -->
                    <circle class="data-packet-dot moving" data-packet-step="0,1" r="6" fill="#06b6d4">
                      <animateMotion dur="1.4s" repeatCount="indefinite" path="M 360 97 L 360 140 L 195 140 L 195 175" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="2" r="7" fill="#f59e0b">
                      <animateMotion dur="0.65s" repeatCount="indefinite" path="M 360 97 L 360 140 L 525 140 L 525 175" />
                    </circle>

                    <!-- ISA Boundary Line -->
                    <line x1="40" y1="140" x2="680" y2="140" stroke="var(--border-strong)" stroke-dasharray="6 6" stroke-width="1.5" />
                    <rect x="275" y="127" width="170" height="24" rx="4" fill="var(--bg-surface)" stroke="var(--border-strong)" />
                    <text class="svg-label-mono" x="360" y="143" style="fill: var(--accent-emerald);">ISA INTERFACE BOUNDARY</text>

                    <!-- Bottom Left: Organization Model A (Economy) -->
                    <g class="svg-hw-group cyan-node" data-node-step="1">
                      <rect class="svg-hw-box" x="45" y="175" width="300" height="115" rx="10" />
                      <text class="svg-label-mono" x="195" y="200">ORGANIZATION A // ECONOMY HW</text>
                      <text class="svg-label-en" x="195" y="224">Clock: 2.0 GHz | 16-bit Bus</text>
                      <text class="svg-label-ar" x="195" y="248">عتاد اقتصادي • إشارات تحكم أبطأ (DRAM)</text>
                      <text class="svg-label-mono" x="195" y="274" style="fill: var(--accent-emerald);">✓ Runs Same Program (Normal Speed)</text>
                    </g>

                    <!-- Bottom Right: Organization Model B (High-End IBM 370) -->
                    <g class="svg-hw-group amber-node" data-node-step="2">
                      <rect class="svg-hw-box" x="375" y="175" width="300" height="115" rx="10" />
                      <text class="svg-label-mono" x="525" y="200" style="fill: var(--accent-amber);">ORGANIZATION B // HIGH-SPEED HW</text>
                      <text class="svg-label-en" x="525" y="224">Clock: 4.0 GHz | 64-bit Bus</text>
                      <text class="svg-label-ar" x="525" y="248">عتاد فائق السرعة • أسلاك أعرض (SRAM)</text>
                      <text class="svg-label-mono" x="525" y="274" style="fill: var(--accent-amber);">🚀 Runs Same Program 2x Faster!</text>
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
                  <svg viewBox="0 0 740 340" xmlns="http://www.w3.org/2000/svg">
                    <!-- Outer Computer Frame -->
                    <rect x="155" y="10" width="430" height="315" rx="14" fill="none" stroke="var(--border-strong)" stroke-width="2" stroke-dasharray="6 4" />
                    <text class="svg-label-mono" x="370" y="30" style="fill: var(--text-muted);">COMPUTER BOUNDARY</text>

                    <!-- Wires & Paths -->
                    <!-- Control to Processing -->
                    <path id="f4-ctrl-proc" class="wire-base" d="M 370 105 L 370 142" />
                    <path class="wire-flow amber active-flow" data-wire-step="0,3" d="M 370 105 L 370 142" />

                    <!-- Control to Storage (side control line) -->
                    <path class="wire-base" d="M 500 72 L 545 72 L 545 272 L 500 272" />
                    <path class="wire-flow amber active-flow" data-wire-step="0,2" d="M 500 72 L 545 72 L 545 272 L 500 272" />

                    <!-- Processing <-> Storage -->
                    <path class="wire-base" d="M 370 205 L 370 242" />
                    <path class="wire-flow cyan" data-wire-step="2,3" d="M 370 205 L 370 242" />

                    <!-- I/O Lines <-> Storage/Movement -->
                    <path class="wire-base" d="M 135 272 L 240 272" />
                    <path class="wire-flow emerald" data-wire-step="1,2" d="M 135 272 L 240 272" />

                    <!-- Communications <-> Storage/Movement -->
                    <path class="wire-base" d="M 605 272 L 500 272" />
                    <path class="wire-flow emerald" data-wire-step="1,2" d="M 605 272 L 500 272" />

                    <!-- Animated Moving Packets -->
                    <circle class="data-packet-dot moving" data-packet-step="0,3" r="6" fill="#f59e0b">
                      <animateMotion dur="0.9s" repeatCount="indefinite" path="M 370 105 L 370 142" />
                    </circle>
                    <circle class="data-packet-dot moving" data-packet-step="0,2" r="5" fill="#f59e0b">
                      <animateMotion dur="1.6s" repeatCount="indefinite" path="M 500 72 L 545 72 L 545 272 L 500 272" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="1,2" r="6" fill="#10b981">
                      <animateMotion dur="1.1s" repeatCount="indefinite" path="M 135 272 L 240 272" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="1,2" r="6" fill="#10b981">
                      <animateMotion dur="1.1s" repeatCount="indefinite" path="M 605 272 L 500 272" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="3" r="6" fill="#06b6d4">
                      <animateMotion dur="0.85s" repeatCount="indefinite" path="M 370 242 L 370 205" />
                    </circle>

                    <!-- NODE 1: Control Mechanism -->
                    <g class="svg-hw-group amber-node active-node" data-node-step="0" data-click-step="0">
                      <rect class="svg-hw-box" x="240" y="42" width="260" height="63" rx="10" />
                      <text class="svg-label-en" x="370" y="68">Control Mechanism</text>
                      <text class="svg-label-ar" x="370" y="90">وحدة التحكم (توجيه الإشارات)</text>
                    </g>

                    <!-- NODE 2: Data Processing Facility -->
                    <g class="svg-hw-group cyan-node" data-node-step="3" data-click-step="3">
                      <rect class="svg-hw-box" x="240" y="142" width="260" height="63" rx="10" />
                      <text class="svg-label-en" x="370" y="168">Data Processing Facility</text>
                      <text class="svg-label-ar" x="370" y="190">معالجة البيانات والحسابات</text>
                    </g>

                    <!-- NODE 3: Data Storage Facility -->
                    <g class="svg-hw-group emerald-node" data-node-step="2" data-click-step="2">
                      <rect class="svg-hw-box" x="240" y="242" width="260" height="63" rx="10" />
                      <text class="svg-label-en" x="370" y="268">Data Storage Facility</text>
                      <text class="svg-label-ar" x="370" y="290">تخزين البيانات (مؤقت أو دائم)</text>
                    </g>

                    <!-- Left Wing: I/O Lines -->
                    <g class="svg-hw-group emerald-node" data-node-step="1" data-click-step="1">
                      <rect class="svg-hw-box" x="10" y="242" width="125" height="63" rx="8" />
                      <text class="svg-label-en" x="72" y="268" style="font-size:12px;">I/O Lines</text>
                      <text class="svg-label-ar" x="72" y="288">(شاشة / ماوس)</text>
                    </g>

                    <!-- Right Wing: Communications -->
                    <g class="svg-hw-group emerald-node" data-node-step="1" data-click-step="1">
                      <rect class="svg-hw-box" x="605" y="242" width="125" height="63" rx="8" />
                      <text class="svg-label-en" x="667" y="268" style="font-size:12px;">Communications</text>
                      <text class="svg-label-ar" x="667" y="288">(إنترنت وشبكات)</text>
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
                  <svg viewBox="0 0 740 340" xmlns="http://www.w3.org/2000/svg">
                    <!-- Outer Computer Box -->
                    <rect x="20" y="10" width="700" height="315" rx="14" fill="none" stroke="var(--border-strong)" stroke-width="2" />
                    <text class="svg-label-mono" x="370" y="30" style="fill: var(--text-muted);">COMPUTER (TOP-LEVEL STRUCTURE)</text>

                    <!-- System Bus Central Highway -->
                    <rect x="60" y="152" width="620" height="36" rx="6" fill="var(--bg-surface)" stroke="var(--accent-amber)" stroke-width="2" />
                    <text class="svg-label-mono" x="370" y="174" style="fill: var(--accent-amber); font-size:12px;">
                      ◄========= SYSTEM BUS (SYSTEM INTERCONNECTION) =========►
                    </text>

                    <!-- Wires connecting CPU, Memory, I/O to System Bus -->
                    <path class="wire-base" d="M 190 115 L 190 152" />
                    <path class="wire-base" d="M 550 115 L 550 152" />
                    <path class="wire-base" d="M 370 188 L 370 228" />
                    <path class="wire-base" d="M 510 265 L 635 265" />

                    <!-- Active Animated Wire Paths per Step -->
                    <!-- Step 0: CPU -> Bus -> Main Memory -->
                    <path class="wire-flow amber active-flow" data-wire-step="0" d="M 190 115 L 190 170 L 550 170 L 550 115" />
                    <!-- Step 1: Main Memory -> Bus -> CPU -->
                    <path class="wire-flow cyan" data-wire-step="1" d="M 550 115 L 550 170 L 190 170 L 190 115" />
                    <!-- Step 2: CPU -> Bus -> I/O -> External -->
                    <path class="wire-flow emerald" data-wire-step="2" d="M 190 115 L 190 170 L 370 170 L 370 228" />
                    <path class="wire-flow emerald" data-wire-step="2" d="M 510 265 L 635 265" />

                    <!-- Animated Moving Packets -->
                    <circle class="data-packet-dot moving" data-packet-step="0" r="7" fill="#f59e0b">
                      <animateMotion dur="1.3s" repeatCount="indefinite" path="M 190 115 L 190 170 L 550 170 L 550 115" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="1" r="7" fill="#06b6d4">
                      <animateMotion dur="1.3s" repeatCount="indefinite" path="M 550 115 L 550 170 L 190 170 L 190 115" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="2" r="7" fill="#10b981">
                      <animateMotion dur="1.3s" repeatCount="indefinite" path="M 190 115 L 190 170 L 370 170 L 370 265 L 635 265" />
                    </circle>

                    <!-- Component 1: CPU -->
                    <g class="svg-hw-group cyan-node active-node" data-node-step="0,1,2" data-click-step="0">
                      <rect class="svg-hw-box" x="65" y="45" width="250" height="70" rx="10" />
                      <text class="svg-label-en" x="190" y="72">Central Processing Unit (CPU)</text>
                      <text class="svg-label-ar" x="190" y="96">يتحكم في الكمبيوتر ويعالج الداتا</text>
                    </g>

                    <!-- Component 2: Main Memory -->
                    <g class="svg-hw-group emerald-node" data-node-step="0,1" data-click-step="1">
                      <rect class="svg-hw-box" x="425" y="45" width="250" height="70" rx="10" />
                      <text class="svg-label-en" x="550" y="72">Main Memory (RAM)</text>
                      <text class="svg-label-ar" x="550" y="96">بتشيل البرامج والداتا الشغالة حالياً</text>
                    </g>

                    <!-- Component 3: Input / Output (I/O) -->
                    <g class="svg-hw-group amber-node" data-node-step="2" data-click-step="2">
                      <rect class="svg-hw-box" x="230" y="228" width="280" height="72" rx="10" />
                      <text class="svg-label-en" x="370" y="256">Input / Output (I/O)</text>
                      <text class="svg-label-ar" x="370" y="280">نقل الداتا بين الكمبيوتر والعالم الخارجي</text>
                    </g>

                    <!-- External World Badge -->
                    <rect x="595" y="243" width="110" height="44" rx="6" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-dasharray="4 3" />
                    <text class="svg-label-ar" x="650" y="270" style="font-size:11px;">[العالم الخارجي]</text>
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
                  <svg viewBox="0 0 740 340" xmlns="http://www.w3.org/2000/svg">
                    <!-- Outer Processor Die Frame -->
                    <rect x="20" y="10" width="700" height="315" rx="14" fill="none" stroke="var(--accent-cyan)" stroke-width="2" />
                    <text class="svg-label-mono" x="370" y="30">CPU (INTERNAL PROCESSOR STRUCTURE)</text>

                    <!-- Internal CPU Bus Bar -->
                    <rect x="60" y="152" width="620" height="36" rx="6" fill="var(--bg-surface)" stroke="var(--accent-cyan)" stroke-width="2" />
                    <text class="svg-label-mono" x="370" y="174" style="font-size:12px;">
                      ◄========= INTERNAL CPU BUS (CPU INTERCONNECTION) =========►
                    </text>

                    <!-- Base Wires -->
                    <path class="wire-base" d="M 190 120 L 190 152" />
                    <path class="wire-base" d="M 550 120 L 550 152" />
                    <path class="wire-base" d="M 370 188 L 370 225" />

                    <!-- Active Animated Wire Paths -->
                    <!-- Step 0: Instruction loaded into Registers -> CU reads it -->
                    <path class="wire-flow emerald active-flow" data-wire-step="0" d="M 370 225 L 370 170 L 190 170 L 190 120" />
                    <!-- Step 1: CU sends Control Order to ALU -->
                    <path class="wire-flow amber" data-wire-step="1" d="M 190 120 L 190 170 L 550 170 L 550 120" />
                    <!-- Step 2: ALU pulls numbers from Registers, computes, and writes back -->
                    <path class="wire-flow cyan" data-wire-step="2" d="M 370 225 L 370 170 L 550 170 L 550 120" />

                    <!-- Animated Moving Packets -->
                    <circle class="data-packet-dot moving" data-packet-step="0" r="7" fill="#10b981">
                      <animateMotion dur="1.1s" repeatCount="indefinite" path="M 370 225 L 370 170 L 190 170 L 190 120" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="1" r="7" fill="#f59e0b">
                      <animateMotion dur="1.0s" repeatCount="indefinite" path="M 190 120 L 190 170 L 550 170 L 550 120" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="2" r="7" fill="#06b6d4">
                      <animateMotion dur="0.9s" repeatCount="indefinite" path="M 550 120 L 550 170 L 370 170 L 370 225" />
                    </circle>

                    <!-- Internal Node 1: Control Unit (CU) -->
                    <g class="svg-hw-group amber-node" data-node-step="0,1" data-click-step="1">
                      <rect class="svg-hw-box" x="55" y="42" width="270" height="78" rx="10" />
                      <text class="svg-label-en" x="190" y="68">Control Unit (CU)</text>
                      <text class="svg-label-ar" x="190" y="92">المدير اللي بيفك التعليمات وبيصدر أوامر</text>
                      <text class="svg-label-mono" x="190" y="110" style="fill: var(--accent-amber);">DECODE &amp; CONTROL SIGNALS</text>
                    </g>

                    <!-- Internal Node 2: Arithmetic & Logic Unit (ALU) -->
                    <g class="svg-hw-group cyan-node" data-node-step="1,2" data-click-step="2">
                      <rect class="svg-hw-box" x="415" y="42" width="270" height="78" rx="10" />
                      <text class="svg-label-en" x="550" y="68">Arithmetic &amp; Logic Unit (ALU)</text>
                      <text class="svg-label-ar" x="550" y="92">المصنع اللي بينفذ الجمع والطرح واللوجيك</text>
                      <text class="svg-label-mono" x="550" y="110">EXECUTE: R1 + R2 = RESULT</text>
                    </g>

                    <!-- Internal Node 3: Registers -->
                    <g class="svg-hw-group emerald-node active-node" data-node-step="0,2" data-click-step="0">
                      <rect class="svg-hw-box" x="190" y="225" width="360" height="80" rx="10" />
                      <text class="svg-label-en" x="370" y="252">Registers (PC | IR | R1 | R2 | ACC)</text>
                      <text class="svg-label-ar" x="370" y="275">خلايا تخزين سريعة جداً ومؤقتة جوه البروسيسور نفسه</text>
                      <text class="svg-label-mono" x="370" y="295" style="fill: var(--accent-emerald);">ULTRA-FAST CPU TEMPORARY STORAGE</text>
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

              <!-- Exam Traps 1, 2, 3 -->
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
                <!-- Question 1.2 -->
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

                <!-- Question 1.3 -->
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

                <!-- Question 1.4 -->
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

                <!-- Question 1.5 -->
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
           PART 3: Placeholder for Next Part in Chapter 1
           ==================================================================== */
        {
          id: "ch1-p3",
          code: "PART 3",
          slides: "قريباً",
          title: "الجزء الثالث — بانتظار إرسال المحتوى",
          hasContent: false,
          contentHtml: "",
          quiz: []
        }
      ]
    },
    {
      id: "ch-3",
      code: "CH 03",
      titleAr: "الفصل الثالث — (بانتظار إرسال محتوى الفصل)",
      titleEn: "Chapter 3 — Awaiting Chapter Content",
      summary: "مساحة مجهزة لاستقبال أجزاء الفصل الثالث بالتفصيل مع الكويز التفاعلي لكل جزء.",
      isReady: false,
      parts: [
        {
          id: "ch3-p1",
          code: "PART 1",
          title: "الجزء الأول — بانتظار المحتوى",
          hasContent: false,
          contentHtml: "",
          quiz: []
        },
        {
          id: "ch3-p2",
          code: "PART 2",
          title: "الجزء الثاني — بانتظار المحتوى",
          hasContent: false,
          contentHtml: "",
          quiz: []
        }
      ]
    },
    {
      id: "ch-4",
      code: "CH 04",
      titleAr: "الفصل الرابع — (بانتظار إرسال محتوى الفصل)",
      titleEn: "Chapter 4 — Awaiting Chapter Content",
      summary: "مساحة مجهزة لاستقبال أجزاء الفصل الرابع بالتفصيل مع الكويز التفاعلي لكل جزء.",
      isReady: false,
      parts: [
        {
          id: "ch4-p1",
          code: "PART 1",
          title: "الجزء الأول — بانتظار المحتوى",
          hasContent: false,
          contentHtml: "",
          quiz: []
        },
        {
          id: "ch4-p2",
          code: "PART 2",
          title: "الجزء الثاني — بانتظار المحتوى",
          hasContent: false,
          contentHtml: "",
          quiz: []
        }
      ]
    },
    {
      id: "ch-5",
      code: "CH 05",
      titleAr: "الفصل الخامس — (بانتظار إرسال محتوى الفصل)",
      titleEn: "Chapter 5 — Awaiting Chapter Content",
      summary: "مساحة مجهزة لاستقبال أجزاء الفصل الخامس بالتفصيل مع الكويز التفاعلي لكل جزء.",
      isReady: false,
      parts: [
        {
          id: "ch5-p1",
          code: "PART 1",
          title: "الجزء الأول — بانتظار المحتوى",
          hasContent: false,
          contentHtml: "",
          quiz: []
        }
      ]
    }
  ]
};
