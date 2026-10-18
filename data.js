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
            <!-- 1. الفكرة الأساسية من الصفر -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">01</span>
                <h2 class="exp-sec-title">الفكرة الأساسية من الصفر</h2>
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

              <div class="two-layers-split">
                <div class="layer-pill-card" style="border-top: 3px solid var(--accent-cyan);">
                  <div class="mono" style="color: var(--accent-cyan); font-weight: 800; font-size: 0.85rem; margin-bottom: 0.35rem;">
                    LAYER 01 // ARCHITECTURE
                  </div>
                  <p><strong>1. ورقة التعليمات</strong> اللي بيشوفها المبرمج ويكتب بيها الكود (<span class="mono">Architecture</span>).</p>
                </div>

                <div class="layer-pill-card" style="border-top: 3px solid var(--accent-amber);">
                  <div class="mono" style="color: var(--accent-amber); font-weight: 800; font-size: 0.85rem; margin-bottom: 0.35rem;">
                    LAYER 02 // ORGANIZATION
                  </div>
                  <p><strong>2. الشغل الداخلي والأسلاك والسرعة</strong> اللي تحت الكبوت (<span class="mono">Organization</span>).</p>
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
                    <span>غللللط! الرامات (<span class="mono">Main Memory</span>) ووحدات الإدخال والإخراج (<span class="mono">I/O</span>) دول من مكونات <strong>الكمبيوتر ككل (<span class="mono">Computer</span>)</strong> بره على المذربورد، مش جوه البروسيسور (<span class="mono">Processor</span>) نفسه!</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q2] "The CPU performs both control and data processing functions."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge true">Answer: TRUE (✔)</span>
                    <span>صح مليون في المية! البروسيسور (<span class="mono">CPU</span>) بيقوم بالوظيفتين مع بعض: بيتحكم في الكمبيوتر عن طريق الـ <strong>CU</strong>، وبيعالج ويحسب البيانات عن طريق الـ <strong>ALU</strong>.</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q3] "Registers provide long-term permanent storage for files."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge false">Answer: FALSE (✖)</span>
                    <span>غلط طبعاً! السجلات (<span class="mono">Registers</span>) دي ذاكرة <strong>مؤقتة وسريعة جداً (<span class="mono">Temporary ultra-fast storage</span>)</strong> جوه البروسيسور بتشيل الأرقام والأوامر لحظة التنفيذ بس، مش لتخزين الملفات الدائم.</span>
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
                    <span>غللللط كبير! كلمة <strong>Multicore</strong> معناها إن الأنوية كلها محفورة مع بعض على <strong>شريحة سيليكون واحدة (<span class="mono">SINGLE silicon chip/die</span>)</strong>، مش على لوحات أم منفصلة!</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q2] "Cache memory is both faster and larger than main memory."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge false">Answer: FALSE (✖)</span>
                    <span>خد بالك من الفخ ده! الكاش فعلاً <strong>أسرع بكتير (<span class="mono">FASTER</span>)</strong> من الرامات، لكنها <strong>أصغر بكتير في الحجم (<span class="mono">MUCH SMALLER</span>)</strong> لأن تصنيعها غالي جداً.</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q3] "Level 1 cache is typically located directly inside each core."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge true">Answer: TRUE (✔)</span>
                    <span>صح جداً! كاش المستوى الأول (<span class="mono">L1 Cache</span>) هي الأصغر والأسرع وقاعدة جوه قلب الـ <strong>Core</strong> نفسها عشان ترد عليها في 1 نانو ثانية.</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q4] "In modern architectures, L3 cache is usually shared among all cores on the chip."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge true">Answer: TRUE (✔)</span>
                    <span>مظبوط! كاش <span class="mono">L3</span> بتكون كبيرة الحجم و<strong>مشتركة (<span class="mono">Shared</span>)</strong> بين كل الأنوية اللي على شريحة البروسيسور.</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q5] "The printed traces on a motherboard physically implement the system bus."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge true">Answer: TRUE (✔)</span>
                    <span>الله ينور! خطوط النحاس المطبوعة على البوردة الخضرا (<span class="mono">PCB Traces</span>) هي فعلياً أسلاك الـ <strong>System Bus</strong> اللي بتربط البروسيسور بالرامات والـ I/O.</span>
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
                    <span>غللللط! جوهر اختراع فون نيومان وحاسوب IAS هو إن البيانات والأوامر قاعدين مع بعض في <strong>ذاكرة واحدة مشتركة (<span class="mono">Single shared read-write memory</span>)</strong>.</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q2] "The IAS instruction format consists of an 8-bit opcode and a 12-bit address."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge true">Answer: TRUE (✔)</span>
                    <span>صح بالمللي! كل تعليمة في الـ IAS طولها <strong>20 بت</strong> متقسمة: <strong>8 بت Opcode</strong> (نوع العملية) + <strong>12 بت Address</strong> (عنوان الذاكرة لأن $2^{12}=4096$).</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q3] "The Program Counter (PC) holds the instruction currently being executed."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge false">Answer: FALSE (✖)</span>
                    <span>فخ مشهور جداً! اللي بيشيل كود التعليمة اللي شغالة دلوقتي هو الـ <strong>IR</strong>، إنما الـ <strong>PC</strong> بيشيل <strong>عنوان التعليمة الجاية (<span class="mono">Next instruction address</span>)</strong> اللي عليها الدور!</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q4] "The IBR register temporarily holds the right-hand instruction of a pair."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge true">Answer: TRUE (✔)</span>
                    <span>صح جداً! سجل الـ <strong>IBR</strong> بيشيل التعليمة اليمين (20 بت) مؤقتاً تستنى دورها لحد ما التعليمة الشمال تخلص تنفيذ، فيوفر مشوار للذاكرة!</span>
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
            </section>

            <!-- 4. GORDON MOORE & MOORE'S LAW (قانون مور - سلايد 31 & سؤال الشيت 1.10) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">04</span>
                <h2 class="exp-sec-title">GORDON MOORE &amp; MOORE'S LAW (قانون مور - سلايد 31 &amp; سؤال الشيت 1.10)</h2>
              </div>

              <div class="en-def-box" style="border-left-color: var(--accent-amber);">
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
                <span class="exp-sec-num">05</span>
                <h2 class="exp-sec-title">EVOLUTION OF SEMICONDUCTOR MEMORY &amp; MICROPROCESSORS (تطور ذاكرة أشباه الموصلات والمعالجات - سلايد 36 إلى 41)</h2>
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
                    <span>غللللط! الفخ ده بيتكرر كتير: اللي بيتضاعف هو <strong>عدد الترانزستورات (<span class="mono">Number of transistors</span>)</strong> اللي جوه الشريحة، إنما حجم الشريحة نفسه ثابت أو بيصغر!</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q2] "The second generation of computers was characterized by the use of vacuum tubes."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge false">Answer: FALSE (✖)</span>
                    <span>غلط! الجيل التاني قام على <strong>الترانزستور (<span class="mono">Transistors</span>)</strong>، أما الصمامات المفرغة (<span class="mono">Vacuum Tubes</span>) فكانت في الجيل الأول!</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q3] "An integrated circuit combines gates and memory cells on a single silicon die."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge true">Answer: TRUE (✔)</span>
                    <span>صح جداً! الدائرة المتكاملة (<span class="mono">IC</span>) بتجمع البوابات المنطقية (<span class="mono">Gates</span> للمعالجة) وخلايا الذاكرة (<span class="mono">Memory cells</span> للتخزين) محفورين مع بعض على شريحة سيليكون واحدة!</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q4] "Shorter electrical paths on chips result in increased operating speeds."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge true">Answer: TRUE (✔)</span>
                    <span>مظبوط! لما نصغر الترانزستورات ونقربهم من بعض، المسافة اللي الكهربا بتمشيها بتقصر (<span class="mono">Shorter electrical paths</span>)، فالسرعة والتردد بيزيدوا جداً.</span>
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
           PART 6: x86 Evolution, Embedded Systems, IoT, ARM Architecture & Cloud (Slides 42 to 58)
           ==================================================================== */
        {
          id: "ch1-p6",
          code: "PART 6",
          slides: "Slides 42 to 58",
          title: "x86 Evolution, Embedded Systems, IoT, ARM Architecture & Cloud",
          hasContent: true,
          contentHtml: `
            <!-- 1. THE TWO TITANS IN PROCESSOR ARCHITECTURE (العملاقان في عالم المعالجات - سلايد 42) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">01</span>
                <h2 class="exp-sec-title">THE TWO TITANS IN PROCESSOR ARCHITECTURE (العملاقان في عالم المعالجات - سلايد 42)</h2>
              </div>

              <div class="balady-box">
                <div class="balady-label">📖 الشرح والتوضيح</div>
                <p>
                  في تاريخ الحاسوب كله، فيه عيلتين معماريتين حكموا كوكب الأرض وقسموه بينهم:
                </p>
              </div>

              <div class="two-layers-split">
                <div class="layer-pill-card" style="border-top: 3px solid var(--accent-cyan);">
                  <div class="mono" style="color: var(--accent-cyan); font-weight: 800; font-size: 0.85rem; margin-bottom: 0.4rem;">
                    1. INTEL x86 FAMILY (CISC TITAN)
                  </div>
                  <p style="font-size: 0.95rem;">
                    <strong>1. عائلة Intel x86:</strong><br/>
                    المعمارية الحاكمة في أجهزة الكمبيوتر الشخصي (<span class="mono">PCs</span>) واللابتوبات والسيرفرات الضخمة.
                  </p>
                </div>

                <div class="layer-pill-card" style="border-top: 3px solid var(--accent-emerald);">
                  <div class="mono" style="color: var(--accent-emerald); font-weight: 800; font-size: 0.85rem; margin-bottom: 0.4rem;">
                    2. ARM ARCHITECTURE FAMILY (RISC TITAN)
                  </div>
                  <p style="font-size: 0.95rem;">
                    <strong>2. عائلة ARM Architecture:</strong><br/>
                    المعمارية الحاكمة في الهواتف الذكية (<span class="mono">Smartphones</span>) والأجهزة المدمجة (<span class="mono">Embedded Systems</span>) وإنترنت الأشياء (<span class="mono">IoT</span>).
                  </p>
                </div>
              </div>
            </section>

            <!-- 2. INTEL x86 EVOLUTION & CISC PHILOSOPHY (تطور معمارية x86 وفلسفتها - سلايد 42 إلى 44) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">02</span>
                <h2 class="exp-sec-title">INTEL x86 EVOLUTION &amp; CISC PHILOSOPHY (تطور معمارية x86 وفلسفتها - سلايد 42 إلى 44)</h2>
              </div>

              <div class="en-def-box">
                <span class="en-def-label">Official Concept — Intel x86 &amp; CISC</span>
                <p class="en-def-text">
                  "The <strong>x86 architecture</strong> is the classic example of <strong>CISC (Complex Instruction Set Computer)</strong>. It evolved over decades to provide rich, powerful instructions, maintaining <strong>backward compatibility</strong> with older software."
                </p>
              </div>

              <div class="balady-box">
                <div class="balady-label">📖 الشرح والتوضيح</div>
                <p>
                  شركة إنتل مشيت بمبدأ: <strong>"المبرمج يطلب تعليمة معقدة تخلّص شغلانة كبيرة في خطوة واحدة!"</strong>.<br/>
                  المعمارية دي بتتميز بإنها قوية جداً وسريعة في البرامج الثقيلة، بس عيبها إنها بتستهلك كهربا عالية جداً وبتطلع حرارة، عشان كده تنفع لجهاز متوصل بفيشة في الحيطة أو بطارية ضخمة.
                </p>
              </div>

              <h3 style="font-size: 1.05rem; font-weight: 800; margin: 1.2rem 0 0.7rem; color: var(--accent-cyan);">
                📌 محطات التطور التاريخية لمعالجات إنتل x86 في السلايدات:
              </h3>

              <div class="attr-grid">
                <div class="attr-card">
                  <span class="attr-term">• 8080 (عام 1974)</span>
                  <p class="attr-desc">أول معالج عام <strong>8-bit</strong>، وكان العقل لأول كمبيوتر شخصي (<span class="mono">Altair</span>).</p>
                </div>

                <div class="attr-card">
                  <span class="attr-term">• 8086 / 8088 (عام 1978)</span>
                  <p class="attr-desc">معالج <strong>16-bit</strong> ومعه ولدت المعمارية <strong class="mono">x86</strong> اللي بنستخدمها لحد النهاردة.</p>
                </div>

                <div class="attr-card">
                  <span class="attr-term">• 80286 (عام 1982)</span>
                  <p class="attr-desc">وسّع عنونة الذاكرة لـ <strong>16 ميجابايت</strong> ووفر حماية برمجية للذاكرة.</p>
                </div>

                <div class="attr-card" style="border-top: 3px solid var(--accent-amber);">
                  <span class="attr-term" style="color: var(--accent-amber);">• 80386 (عام 1985)</span>
                  <p class="attr-desc">القفزة الكبرى لعصر الـ <strong>32-bit</strong> ودعم تشغيل مهام متعددة (<span class="mono">Multitasking</span>) وذاكرة افتراضية.</p>
                </div>

                <div class="attr-card">
                  <span class="attr-term">• 80486 (عام 1989)</span>
                  <p class="attr-desc">دمج كاش <span class="mono">L1</span> ووحدة حساب الأرقام العشرية (<span class="mono">Math Coprocessor</span>) على نفس شريحة المعالج.</p>
                </div>

                <div class="attr-card" style="border-top: 3px solid var(--accent-emerald);">
                  <span class="attr-term" style="color: var(--accent-emerald);">• Pentium (عام 1993)</span>
                  <p class="attr-desc">النقلة التاريخية! أدخل تقنية (<strong class="mono">Superscalar Execution</strong>)، يعني يقدر ينفذ أكتر من تعليمة في نفس نبضة الساعة الواحدة بالتوازي!</p>
                </div>

                <div class="attr-card">
                  <span class="attr-term">• Core Family (عام 2006 وما بعدها)</span>
                  <p class="attr-desc">الانتقال لمعالجات متعددة الأنوية (<span class="mono">Multicore</span>) وترددات فائقة.</p>
                </div>
              </div>

              <div class="exam-trap-box">
                <div class="exam-trap-title">⚠️ تريكات الامتحان الخاصة بـ x86</div>
                <div class="exam-trap-list">
                  <p><strong>⚠️ Trap 1:</strong> فلسفة <span class="mono">x86</span> بتعتمد على أسلوب تصميم ===&gt; <strong class="mono">CISC (Complex Instruction Set Computer)</strong>.</p>
                  <p><strong>⚠️ Trap 2:</strong> المعالج اللي بدأ معمارية الـ <span class="mono">32-bit</span> في إنتل ===&gt; <strong class="mono">Intel 80386</strong>.</p>
                  <p><strong>⚠️ Trap 3:</strong> المعالج اللي أدخل تقنية الـ <span class="mono">Superscalar</span> أول مرة ===&gt; <strong class="mono">Intel Pentium</strong>.</p>
                </div>
              </div>
            </section>

            <!-- 3. EMBEDDED SYSTEMS (الأنظمة المدمجة - سلايدات 45 و 46 & سؤال الشيت 1.7) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">03</span>
                <h2 class="exp-sec-title">EMBEDDED SYSTEMS (الأنظمة المدمجة - سلايدات 45 و 46 &amp; سؤال الشيت 1.7)</h2>
              </div>

              <div class="en-def-box" style="border-left-color: var(--accent-amber);">
                <span class="en-def-label" style="color: var(--accent-amber);">Official English Definition for Exams — Embedded System</span>
                <p class="en-def-text">
                  "An <strong>embedded system</strong> is the use of electronics and software <strong>within a larger product</strong> (as opposed to a general-purpose computer) designed to perform a <strong>dedicated, specific function</strong>, often with <strong>real-time computing constraints</strong>."
                </p>
              </div>

              <div class="balady-box">
                <div class="balady-label">📖 الشرح والتوضيح</div>
                <p>
                  الكمبيوتر العادي (<span class="mono">General-Purpose</span>) معمول يشغل كل حاجة (ألعاب، وورد، متصفح).<br/>
                  لكن <strong>99% من معالجات العالم</strong> مزروعة جوه منتجات تانية: (الغسالة، الميكروويف، فرامل العربية <span class="mono">ABS</span>، جهاز رسم القلب، التكييف).. ده اسمه حاسوب مدمج (<strong class="mono">Embedded System</strong>).<br/>
                  هو كمبيوتر كامل بروسيسور ورام وكل حاجة، بس <strong>"مكرس لوظيفة واحدة ثابتة مبيعملش غيرها!"</strong>.
                </p>
              </div>

              <!-- INTERACTIVE SIMULATOR 1 IN PART 6: EMBEDDED SYSTEM CONTROLLER -->
              <div class="sim-card" data-sim="sim-embedded-controller">
                <div class="sim-top-bar">
                  <div class="sim-title-group">
                    <span class="sim-live-dot"></span>
                    <span class="sim-badge-title">SLIDES 45–46 // EMBEDDED SYSTEM CONTROLLER ARCHITECTURE</span>
                  </div>
                  <div class="sim-controls">
                    <button type="button" class="sim-step-btn active" data-sim-step="0">1. حساسات Analog In</button>
                    <button type="button" class="sim-step-btn" data-sim-step="1">2. تحويل الإشارة ADC</button>
                    <button type="button" class="sim-step-btn" data-sim-step="2">3. مقارنة بـ ROM / SRAM</button>
                    <button type="button" class="sim-step-btn" data-sim-step="3">4. أوامر Control Out (Real-Time)</button>
                    <button type="button" class="sim-step-btn play-auto" data-sim-autoplay>▶ تشغيل تلقائي</button>
                  </div>
                </div>

                <div class="sim-svg-stage">
                  <svg viewBox="0 0 760 365" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Embedded System Controller Hardware Architecture Diagram">
                    <!-- Outer Frame: EMBEDDED SYSTEM CONTROLLER -->
                    <rect x="40" y="12" width="680" height="225" rx="14" fill="none" stroke="var(--accent-cyan)" stroke-width="2.5" />
                    <text class="svg-label-mono" x="380" y="34">EMBEDDED SYSTEM CONTROLLER (متحكم النظام المدمج على شريحة واحدة)</text>

                    <!-- Base Wires -->
                    <!-- Internal Bus between Processor & Memory -->
                    <path class="wire-base" d="M 320 88 L 440 88" />
                    <!-- Processor <-> Custom Logic -->
                    <path class="wire-base" d="M 190 124 L 190 150 L 380 150 L 380 165" />
                    <!-- Memory <-> Custom Logic -->
                    <path class="wire-base" d="M 570 124 L 570 150 L 380 150" />
                    <!-- External I/O Lines: [Analog In] & [Control Out] -->
                    <path class="wire-base" d="M 185 278 L 185 252 L 330 252 L 330 225" />
                    <path class="wire-base" d="M 430 225 L 430 252 L 575 252 L 575 278" />

                    <!-- Internal Bus Label -->
                    <text class="svg-label-mono" x="380" y="76" style="fill: var(--accent-cyan);">◄=== INTERNAL BUS ===►</text>

                    <!-- Animated Flow Wires -->
                    <path class="wire-flow emerald active-flow" data-wire-step="0,1" d="M 185 278 L 185 252 L 330 252 L 330 225" />
                    <path class="wire-flow cyan" data-wire-step="1" d="M 380 165 L 380 150 L 190 150 L 190 124" />
                    <path class="wire-flow amber" data-wire-step="2" d="M 440 88 L 320 88" />
                    <path class="wire-flow amber" data-wire-step="3" d="M 190 124 L 190 150 L 380 150 L 380 165" />
                    <path class="wire-flow amber" data-wire-step="3" d="M 430 225 L 430 252 L 575 252 L 575 278" />

                    <!-- Moving Data Packets -->
                    <circle class="data-packet-dot moving" data-packet-step="0" r="6" fill="#10b981">
                      <animateMotion dur="1.1s" repeatCount="indefinite" path="M 185 278 L 185 252 L 330 252 L 330 225" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="1" r="6" fill="#06b6d4">
                      <animateMotion dur="1.0s" repeatCount="indefinite" path="M 330 225 L 380 150 L 190 150 L 190 124" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="2" r="6" fill="#f59e0b">
                      <animateMotion dur="0.9s" repeatCount="indefinite" path="M 440 88 L 320 88" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="3" r="7" fill="#f59e0b">
                      <animateMotion dur="1.1s" repeatCount="indefinite" path="M 190 124 L 190 150 L 430 150 L 430 252 L 575 252 L 575 278" />
                    </circle>

                    <!-- On-Wire Callout Pills -->
                    <g class="svg-wire-callout active-pill" data-pill-step="0" data-click-step="0">
                      <rect class="svg-wire-pill" x="85" y="241" width="185" height="22" />
                      <text class="svg-wire-text" x="177" y="256">① قراءة الحساسات [Analog In] ▲</text>
                    </g>

                    <g class="svg-wire-callout" data-pill-step="1" data-click-step="1">
                      <rect class="svg-wire-pill" x="200" y="132" width="175" height="22" />
                      <text class="svg-wire-text" x="287" y="147">② تحويل لأرقام ADC ──► CPU</text>
                    </g>

                    <g class="svg-wire-callout" data-pill-step="2" data-click-step="2">
                      <rect class="svg-wire-pill" x="292" y="96" width="176" height="22" />
                      <text class="svg-wire-text" x="380" y="111">③ فحص كود الـ ROM والـ SRAM</text>
                    </g>

                    <g class="svg-wire-callout" data-pill-step="3" data-click-step="3">
                      <rect class="svg-wire-pill" x="485" y="241" width="195" height="22" />
                      <text class="svg-wire-text" x="582" y="256">④ إشارة فورية [Control Out] ▼</text>
                    </g>

                    <!-- Processor (Microcontroller CPU) -->
                    <g class="svg-hw-group cyan-node" data-node-step="1,2,3" data-click-step="2">
                      <rect class="svg-hw-box" x="65" y="50" width="255" height="74" rx="10" />
                      <text class="svg-label-en" x="192" y="75">Processor (Microcontroller CPU)</text>
                      <text class="svg-label-ar" x="192" y="97">معالج مدمج مكرس لوظيفة واحدة محددة</text>
                      <text class="svg-label-mono" x="192" y="114">DEDICATED REAL-TIME CORE</text>
                    </g>

                    <!-- Memory (ROM / Flash for Code | SRAM for Scratchpad) -->
                    <g class="svg-hw-group amber-node" data-node-step="2" data-click-step="2">
                      <rect class="svg-hw-box" x="440" y="50" width="255" height="74" rx="10" />
                      <text class="svg-label-en" x="567" y="75">Memory (ROM / Flash &amp; SRAM)</text>
                      <text class="svg-label-ar" x="567" y="97">ROM للكود الثابت | SRAM للحساب المؤقت</text>
                      <text class="svg-label-mono" x="567" y="114" style="fill: var(--accent-amber);">FIRMWARE CODE &amp; SCRATCHPAD</text>
                    </g>

                    <!-- Custom Logic / Timer -->
                    <g class="svg-hw-group cyan-node" data-node-step="1,3" data-click-step="1">
                      <rect class="svg-hw-box" x="235" y="165" width="290" height="60" rx="10" />
                      <text class="svg-label-en" x="380" y="190">Custom Logic / Timer (ADC &amp; DAC)</text>
                      <text class="svg-label-ar" x="380" y="212">تحويل الإشارات لأرقام وضبط التوقيت اللحظي</text>
                    </g>

                    <!-- Analog Data Capture (Sensors) -->
                    <g class="svg-hw-group emerald-node active-node" data-node-step="0,1" data-click-step="0">
                      <rect class="svg-hw-box" x="50" y="278" width="275" height="72" rx="10" />
                      <text class="svg-label-en" x="187" y="303">Analog Data Capture (Sensors)</text>
                      <text class="svg-label-ar" x="187" y="325">حساسات حرارة الماتور وضغط الزيت وسرعة العجل</text>
                      <text class="svg-label-mono" x="187" y="342" style="fill: var(--accent-emerald);">[ANALOG IN]</text>
                    </g>

                    <!-- Actuators & Switches -->
                    <g class="svg-hw-group amber-node" data-node-step="3" data-click-step="3">
                      <rect class="svg-hw-box" x="435" y="278" width="275" height="72" rx="10" />
                      <text class="svg-label-en" x="572" y="303">Actuators &amp; Switches</text>
                      <text class="svg-label-ar" x="572" y="325">مواتير وصمامات هيدروليك وفرامل ABS لحظية</text>
                      <text class="svg-label-mono" x="572" y="342" style="fill: var(--accent-amber);">[CONTROL OUT — REAL-TIME]</text>
                    </g>
                  </svg>
                </div>
              </div>

              <div class="balady-box" style="margin-top: 1.15rem;">
                <div class="balady-label">⚙️ إزاي المخطط ده شغال في الواقع؟</div>
                <ol style="padding-right: 1.25rem; line-height: 1.9;">
                  <li><strong>1. الحساسات (<span class="mono">Sensors</span>):</strong> تقرأ إشارات من الطبيعة (حرارة الماتور أو سرعة دوران العجل).</li>
                  <li><strong>2. تحويل الإشارة لأرقام (<span class="mono">Analog-to-Digital Converter</span>):</strong> تتحول الإشارة لأرقام وتدخل للمعالج المدمج.</li>
                  <li><strong>3. المقارنة بذاكرة الـ <span class="mono">ROM</span>:</strong> المعالج يقارن القراءة بكود ثابت متخزن في ذاكرة الـ <span class="mono">ROM</span>.</li>
                  <li><strong>4. رد الفعل اللحظي (<span class="mono">Real-Time Actuators</span>):</strong> لو لقى خطر، المعالج يبعت إشارة للـ <span class="mono">Actuators</span> فتضغط الفرامل في جزء من الثانية (<span class="mono">Real-Time</span>).</li>
                </ol>
              </div>
            </section>

            <!-- 4. DEEPLY EMBEDDED SYSTEMS & IoT (الأنظمة شديدة الاندماج وإنترنت الأشياء - سلايد 47 إلى 50) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">04</span>
                <h2 class="exp-sec-title">DEEPLY EMBEDDED SYSTEMS &amp; IoT (الأنظمة شديدة الاندماج وإنترنت الأشياء - سلايد 47 إلى 50)</h2>
              </div>

              <div class="two-layers-split">
                <div class="layer-pill-card" style="border-top: 3px solid var(--accent-purple);">
                  <div class="mono" style="color: var(--accent-purple); font-weight: 800; font-size: 0.85rem; margin-bottom: 0.4rem;">
                    SLIDE 50 // DEEPLY EMBEDDED SYSTEMS
                  </div>
                  <p class="en-def-text" style="font-size: 0.9rem; margin-bottom: 0.55rem;">
                    <strong>Definition:</strong> "A subset of embedded systems with minimal hardware where the <strong>processor's behavior is difficult or impossible to observe</strong> by the programmer and user."
                  </p>
                  <p style="font-size: 0.94rem;">
                    <strong>الشرح والتوضيح:</strong> شريحة ميكروسكوبية مدفونة في أعماق حساس تحت الأرض أو في ماسورة مية، ملهاش شاشة ولا زراير ولا نظام تشغيل تقدر تشوفه، مبرمجة برمجياً على كود بسيط ثابت للأبد.
                  </p>
                </div>

                <div class="layer-pill-card" style="border-top: 3px solid var(--accent-emerald);">
                  <div class="mono" style="color: var(--accent-emerald); font-weight: 800; font-size: 0.85rem; margin-bottom: 0.4rem;">
                    SLIDE 47 // THE INTERNET OF THINGS (IoT)
                  </div>
                  <p class="en-def-text" style="font-size: 0.9rem; margin-bottom: 0.55rem;">
                    <strong>Definition:</strong> "The expanding <strong>interconnection of smart physical devices</strong>, home appliances, and industrial sensors equipped with network connectivity to collect and exchange data."
                  </p>
                  <p style="font-size: 0.94rem;">
                    <strong>الشرح والتوضيح:</strong> لما وصلنا الأنظمة المدمجة دي بالإنترنت (<span class="mono">Wi-Fi, 5G</span>)، بقى البيت الذكي والمصنع الذكي شغال؛ التلاجة تطلب طلبات من السوبرماركت، والتكييف يشتغل لوحده لما تقرب من البيت!<br/>
                    <strong style="color: var(--accent-amber);">🎯 معلومة امتحان:</strong> <span class="mono">"IoT is primarily driven by deeply embedded devices"</span> (المحرك الأساسي لـ IoT هو الأجهزة شديدة الاندماج).
                  </p>
                </div>
              </div>
            </section>

            <!-- 5. ARM PROCESSOR ARCHITECTURE (معمارية آرم وعائلات Cortex - سلايد 51 إلى 53 & سؤال الشيت 1.8) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">05</span>
                <h2 class="exp-sec-title">ARM PROCESSOR ARCHITECTURE (معمارية آرم وعائلات Cortex - سلايد 51 إلى 53 &amp; سؤال الشيت 1.8)</h2>
              </div>

              <div class="en-def-box" style="border-left-color: var(--accent-cyan);">
                <span class="en-def-label" style="color: var(--accent-cyan);">Official English Definition for Exams — ARM Architecture</span>
                <p class="en-def-text">
                  "<strong>ARM</strong> is a family of microprocessors and microcontrollers based on <strong>RISC (Reduced Instruction Set Computer)</strong> design principles, designed by ARM Holdings in Cambridge, England. It is the world-dominant architecture for smartphones and embedded devices due to its <strong>extreme energy efficiency, small chip footprint, and low manufacturing cost</strong>."
                </p>
              </div>

              <div class="balady-box">
                <div class="balady-label">📖 الشرح والتوضيح</div>
                <p>
                  دي المعمارية اللي أكلت الجو في كل موبايلات الدنيا (<span class="mono">iPhone</span> و <span class="mono">Samsung</span> وكل أندرويد).<br/>
                  سرها العبقري: اعتمدت على فلسفة الـ <strong class="mono" style="color: var(--accent-cyan);">RISC</strong>:<br/>
                  <strong>"بدل ما نعمل أوامر معقدة بتاكل كهربا زي إنتل، إحنا نعمل طقم أوامر بسيطة ومختصرة وسريعة جداً!"</strong>.<br/>
                  فالشريحة بقت تاخد نقطة كهربا صغيرة جداً، ومبتسخنش، وبطارية الموبايل تقعد معاك يومين!
                </p>
              </div>

              <h3 style="font-size: 1.05rem; font-weight: 800; margin: 1.15rem 0 0.65rem; color: var(--accent-cyan);">
                📌 ARM Cortex Architectural Families (عائلات آرم الثلاثة المعتمدة في الامتحان - سلايد 52):
              </h3>

              <div class="attr-grid">
                <div class="attr-card" style="border-top: 3px solid var(--accent-cyan);">
                  <span class="attr-term">1. Cortex-A (Application Processors)</span>
                  <p class="attr-desc">
                    مخصصة للأجهزة الذكية (<span class="mono">Smartphones, Tablets</span>) اللي بتشغل أنظمة تشغيل كاملة ومعقدة زي <span class="mono">Android</span> و <span class="mono">iOS</span> ومحتاجة معالجة رسوميات وفيديو وإدارة ذاكرة افتراضية (<span class="mono">MMU</span>).
                  </p>
                </div>

                <div class="attr-card" style="border-top: 3px solid var(--accent-amber);">
                  <span class="attr-term" style="color: var(--accent-amber);">2. Cortex-R (Real-Time Processors)</span>
                  <p class="attr-desc">
                    حرف الـ <strong class="mono">R</strong> اختصار لـ <strong class="mono">Real-Time</strong>!<br/>
                    مخصصة للأنظمة الحرجة في الوقت وفائقة الدقة اللي التأخير فيها برمشة عين يعمل مصيبة (زي فرامل السيارات <span class="mono">ABS</span>، أجهزة التحكم في الطيران، وأنظمة الرعاية المركزة).
                  </p>
                </div>

                <div class="attr-card" style="border-top: 3px solid var(--accent-emerald);">
                  <span class="attr-term" style="color: var(--accent-emerald);">3. Cortex-M (Microcontroller Processors)</span>
                  <p class="attr-desc">
                    حرف الـ <strong class="mono">M</strong> اختصار لـ <strong class="mono">Microcontroller</strong>!<br/>
                    شرائح صغيرة جداً ورخيصة جداً وموفرة للطاقة لأقصى درجة، معمولة للحساسات الذكية والأجهزة المنزلية وأجهزة إنترنت الأشياء (<span class="mono">IoT</span>).
                  </p>
                </div>
              </div>

              <div class="exam-trap-box">
                <div class="exam-trap-title">⚠️ تريكات الامتحان الخاصة بـ ARM</div>
                <div class="exam-trap-list">
                  <p><strong>⚠️ Trap 1:</strong> معمارية <span class="mono">ARM</span> مبنية على تصميم ===&gt; <strong class="mono">RISC</strong> (وليس CISC).</p>
                  <p>
                    <strong>⚠️ Trap 2 (تفرقة عائلات Cortex في الـ MCQs):</strong><br/>
                    • لو قالك: <span class="mono">"For smartphones running rich OS like Android"</span> =======&gt; <strong class="mono">Cortex-A</strong><br/>
                    • لو قالك: <span class="mono">"For time-critical embedded systems like braking"</span> ====&gt; <strong class="mono">Cortex-R</strong><br/>
                    • لو قالك: <span class="mono">"For low-cost, energy-constrained IoT sensors"</span> ======&gt; <strong class="mono">Cortex-M</strong>
                  </p>
                </div>
              </div>
            </section>

            <!-- 6. CLOUD COMPUTING & CLOUD NETWORKING (الحوسبة السحابية وشبكاتها - سلايد 54 إلى 56 & سؤال الشيت 1.9) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">06</span>
                <h2 class="exp-sec-title">CLOUD COMPUTING &amp; CLOUD NETWORKING (الحوسبة السحابية وشبكاتها - سلايد 54 إلى 56 &amp; سؤال الشيت 1.9)</h2>
              </div>

              <div class="en-def-box" style="border-left-color: var(--accent-emerald);">
                <span class="en-def-label" style="color: var(--accent-emerald);">Official NIST Definition for Exams — Cloud Computing</span>
                <p class="en-def-text">
                  "<strong>Cloud Computing</strong> is a model for enabling <strong>ubiquitous, convenient, on-demand network access</strong> to a <strong>shared pool of configurable computing resources</strong> (e.g., networks, servers, storage, applications, and services) that can be <strong>rapidly provisioned and released</strong> with minimal management effort or service provider interaction."
                </p>
              </div>

              <div class="balady-box">
                <div class="balady-label">📖 الشرح والتوضيح</div>
                <p>
                  زمان لو عاوز تبني موقع أو تطبيق ضخم، كنت بتشتري سيرفرات بملايين وتحطها في أوضة مكيفة.<br/>
                  النهاردة، السيرفرات والرامات والتخزين بقت "في السحابة" عند شركات عملاقة زي (<span class="mono">AWS</span> و <span class="mono">Google Cloud</span>).<br/>
                  تفتح اللابتوب وتحجز 50 بروسيسور و 200 جيجا رامات يشتغلوا ساعة ويقفلوا، وتدفع بالدقيقة بالملي زي عداد النور والماية عبر النت!
                </p>
              </div>

              <!-- INTERACTIVE SIMULATOR 2 IN PART 6: CLOUD INFRASTRUCTURE DIAGRAM -->
              <div class="sim-card" data-sim="sim-cloud-infra">
                <div class="sim-top-bar">
                  <div class="sim-title-group">
                    <span class="sim-live-dot"></span>
                    <span class="sim-badge-title">SLIDES 54–56 // CLOUD COMPUTING INFRASTRUCTURE DIAGRAM</span>
                  </div>
                  <div class="sim-controls">
                    <button type="button" class="sim-step-btn active" data-sim-step="0">1. أجهزة العملاء (Clients)</button>
                    <button type="button" class="sim-step-btn" data-sim-step="1">2. شبكات السحابة (Cloud Networking)</button>
                    <button type="button" class="sim-step-btn" data-sim-step="2">3. مجمع الموارد المشترك (Resource Pool)</button>
                    <button type="button" class="sim-step-btn play-auto" data-sim-autoplay>▶ تشغيل تلقائي</button>
                  </div>
                </div>

                <div class="sim-svg-stage">
                  <svg viewBox="0 0 760 365" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cloud Infrastructure Architecture Diagram">
                    <!-- Base Wires -->
                    <path class="wire-base" d="M 150 82 L 150 105 L 610 105 L 610 82" />
                    <path class="wire-base" d="M 380 82 L 380 128" />
                    <path class="wire-base" d="M 380 198 L 380 236" />

                    <!-- Animated Flow Wires -->
                    <path class="wire-flow cyan active-flow" data-wire-step="0" d="M 150 82 L 150 105 L 380 105 L 380 128" />
                    <path class="wire-flow cyan active-flow" data-wire-step="0" d="M 610 82 L 610 105 L 380 105 L 380 128" />
                    <path class="wire-flow amber" data-wire-step="1" d="M 380 105 L 380 236" />
                    <path class="wire-flow emerald" data-wire-step="2" d="M 380 198 L 380 236" />

                    <!-- Moving Data Packets -->
                    <circle class="data-packet-dot moving" data-packet-step="0" r="6" fill="#06b6d4">
                      <animateMotion dur="1.1s" repeatCount="indefinite" path="M 150 82 L 150 105 L 380 105 L 380 128" />
                    </circle>
                    <circle class="data-packet-dot moving" data-packet-step="0" r="6" fill="#06b6d4">
                      <animateMotion dur="1.1s" repeatCount="indefinite" path="M 610 82 L 610 105 L 380 105 L 380 128" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="1" r="7" fill="#f59e0b">
                      <animateMotion dur="1.0s" repeatCount="indefinite" path="M 380 105 L 380 236" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="2" r="7" fill="#10b981">
                      <animateMotion dur="0.9s" repeatCount="indefinite" path="M 380 198 L 380 236" />
                    </circle>

                    <!-- On-Wire Callout Pills -->
                    <g class="svg-wire-callout active-pill" data-pill-step="0" data-click-step="0">
                      <rect class="svg-wire-pill" x="175" y="94" width="190" height="22" />
                      <text class="svg-wire-text" x="270" y="109">① طلب موارد عند الطلب (On-Demand) ▼</text>
                    </g>

                    <g class="svg-wire-callout" data-pill-step="1" data-click-step="1">
                      <rect class="svg-wire-pill" x="550" y="152" width="185" height="22" />
                      <text class="svg-wire-text" x="642" y="167">② ربط لحظي Low-Latency ⚡</text>
                    </g>

                    <g class="svg-wire-callout" data-pill-step="2" data-click-step="2">
                      <rect class="svg-wire-pill" x="280" y="206" width="200" height="22" />
                      <text class="svg-wire-text" x="380" y="221">③ تخصيص فوري للموارد (Provisioning) ▼</text>
                    </g>

                    <!-- Top Row: 3 Clients -->
                    <g class="svg-hw-group cyan-node active-node" data-node-step="0" data-click-step="0">
                      <rect class="svg-hw-box" x="45" y="18" width="210" height="64" rx="10" />
                      <text class="svg-label-en" x="150" y="44">Smartphone Client</text>
                      <text class="svg-label-ar" x="150" y="66">هاتف ذكي (معالج ARM)</text>
                    </g>

                    <g class="svg-hw-group cyan-node active-node" data-node-step="0" data-click-step="0">
                      <rect class="svg-hw-box" x="275" y="18" width="210" height="64" rx="10" />
                      <text class="svg-label-en" x="380" y="44">Laptop Client</text>
                      <text class="svg-label-ar" x="380" y="66">حاسوب محمول (معالج x86)</text>
                    </g>

                    <g class="svg-hw-group cyan-node active-node" data-node-step="0" data-click-step="0">
                      <rect class="svg-hw-box" x="505" y="18" width="210" height="64" rx="10" />
                      <text class="svg-label-en" x="610" y="44">IoT Sensor Client</text>
                      <text class="svg-label-ar" x="610" y="66">جهاز ذكي مدمج (Embedded IoT)</text>
                    </g>

                    <!-- Middle Row: CLOUD NETWORKING -->
                    <g class="svg-hw-group amber-node" data-node-step="1" data-click-step="1">
                      <rect class="svg-hw-box" x="155" y="128" width="450" height="70" rx="12" />
                      <text class="svg-label-en" x="380" y="155">CLOUD NETWORKING</text>
                      <text class="svg-label-ar" x="380" y="177">شبكات سحابية فائقة السرعة والاعتمادية وبدون تأخير</text>
                      <text class="svg-label-mono" x="380" y="192" style="fill: var(--accent-amber);">HIGH-PERFORMANCE, LOW-LATENCY INFRASTRUCTURE</text>
                    </g>

                    <!-- Bottom Row: SHARED CLOUD RESOURCE POOL -->
                    <g class="svg-hw-group emerald-node" data-node-step="2" data-click-step="2">
                      <rect class="svg-hw-box" x="45" y="236" width="670" height="114" rx="14" />
                      <text class="svg-label-en" x="380" y="261">SHARED CLOUD RESOURCE POOL (مجمع الموارد السحابية المشترك)</text>

                      <!-- Virtual Servers -->
                      <rect x="65" y="274" width="200" height="62" rx="8" fill="var(--bg-elevated)" stroke="var(--accent-cyan)" stroke-width="1.8" />
                      <text class="svg-label-en" x="165" y="297" style="font-size: 12px; fill: var(--accent-cyan);">Virtual Servers</text>
                      <text class="svg-label-ar" x="165" y="318" style="font-size: 11px;">سيرفرات Xeon &amp; ARM</text>

                      <!-- Massive Storage -->
                      <rect x="280" y="274" width="200" height="62" rx="8" fill="var(--bg-elevated)" stroke="var(--accent-amber)" stroke-width="1.8" />
                      <text class="svg-label-en" x="380" y="297" style="font-size: 12px; fill: var(--accent-amber);">Massive Storage</text>
                      <text class="svg-label-ar" x="380" y="318" style="font-size: 11px;">سعات تخزين Petabytes</text>

                      <!-- Database Engines -->
                      <rect x="495" y="274" width="200" height="62" rx="8" fill="var(--bg-elevated)" stroke="var(--accent-emerald)" stroke-width="1.8" />
                      <text class="svg-label-en" x="595" y="297" style="font-size: 12px; fill: var(--accent-emerald);">Database Engines</text>
                      <text class="svg-label-ar" x="595" y="318" style="font-size: 11px;">قواعد بيانات ومعالجة ضخمة</text>
                    </g>
                  </svg>
                </div>
              </div>

              <div class="balady-box" style="margin-top: 1.15rem;">
                <div class="balady-label">🌐 Cloud Networking (سلايد 55)</div>
                <p>
                  هي البنية التحتية لشبكات الإنترنت فائقة السرعة والموثوقية (<strong class="mono">High-performance &amp; High-reliability</strong>) التي تضمن وصول واستجابة لحظية بين أجهزة العملاء ومراكز البيانات السحابية بدون انقطاع.
                </p>
              </div>
            </section>

            <!-- 7. INSTANT EXAM BUZZWORDS (كلمات التثبيت السريعة لـ MCQs) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">07</span>
                <h2 class="exp-sec-title">INSTANT EXAM BUZZWORDS (كلمات التثبيت السريعة لـ MCQs)</h2>
              </div>

              <div class="buzzwords-table-wrap">
                <table class="buzz-table">
                  <thead>
                    <tr>
                      <th>أول ما تشوف العبارة دي في السؤال (Exam Clue)</th>
                      <th>اختار فوراً (Target Term)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="mono">"Complex instructions, desktop dominance"</td>
                      <td><span class="buzz-target">CISC / Intel x86</span></td>
                    </tr>
                    <tr>
                      <td class="mono">"Multiple instructions executed per cycle"</td>
                      <td><span class="buzz-target">SUPERSCALAR (Pentium)</span></td>
                    </tr>
                    <tr>
                      <td class="mono">"Computer dedicated to a specific task"</td>
                      <td><span class="buzz-target">EMBEDDED SYSTEM</span></td>
                    </tr>
                    <tr>
                      <td class="mono">"Processor behavior difficult to observe"</td>
                      <td><span class="buzz-target">DEEPLY EMBEDDED SYSTEM</span></td>
                    </tr>
                    <tr>
                      <td class="mono">"Interconnected network of physical devices"</td>
                      <td><span class="buzz-target">INTERNET OF THINGS (IoT)</span></td>
                    </tr>
                    <tr>
                      <td class="mono">"Energy-efficient, RISC architecture for mobile"</td>
                      <td><span class="buzz-target">ARM ARCHITECTURE</span></td>
                    </tr>
                    <tr>
                      <td class="mono">"On-demand network access to shared resources"</td>
                      <td><span class="buzz-target">CLOUD COMPUTING</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <!-- 8. POPULAR EXAM TRUE / FALSE DRILLS -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">08</span>
                <h2 class="exp-sec-title">POPULAR EXAM TRUE / FALSE DRILLS (أسئلة صح وغلط المشهورة)</h2>
              </div>

              <div class="tf-drills-grid">
                <div class="tf-card">
                  <p class="tf-question">[Q1] "The ARM architecture is based on CISC design principles."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge false">Answer: FALSE (✖)</span>
                    <span class="ltr-block">(ARM is strictly <strong>RISC</strong>; x86 is CISC — معمارية ARM قايمة بالكامل على الـ RISC يعني تعليمات بسيطة وموفرة للبطارية، أما إنتل x86 هي اللي CISC).</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q2] "An embedded system is designed to run arbitrary general-purpose software."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge false">Answer: FALSE (✖)</span>
                    <span class="ltr-block">(It is designed for a <strong>dedicated, specific function</strong> — النظام المدمج زي كمبيوتر الغسالة أو الفرامل معمول عشان ينفذ شغلانة واحدة محددة بس، مش يشغل ألعاب وبرامج عامة).</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q3] "ARM Cortex-M processors are optimized for high-end smartphones running Android."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge false">Answer: FALSE (✖)</span>
                    <span class="ltr-block">(<strong>Cortex-A</strong> is for smartphones; <strong>Cortex-M</strong> is for microcontrollers/IoT — الموبايلات بتشتغل بـ Cortex-A، أما Cortex-M فدي للحساسات والـ Microcontrollers الصغيرة).</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q4] "In cloud computing, resources are provisioned on-demand over the network."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge true">Answer: TRUE (✔)</span>
                    <span class="ltr-block">(صح جداً! الحوسبة السحابية فكرتها إنك تطلب السيرفرات والمساحة اللي محتاجها On-demand عن طريق الإنترنت في ثواني).</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q5] "The Intel Pentium processor introduced superscalar execution."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge true">Answer: TRUE (✔)</span>
                    <span class="ltr-block">(مظبوط! معالج Pentium سنة 1993 هو أول معالج من إنتل يقدم الـ Superscalar يعني تنفيذ أكتر من تعليمة بالتوازي في نفس النبضة).</span>
                  </div>
                </div>
              </div>
            </section>

            <!-- 9. SHEET 1: OFFICIAL EXAM QUESTIONS & MODEL ANSWERS (1.7, 1.8, 1.9) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">09</span>
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
                      An <strong>embedded system</strong> is a computer system (comprising a processor, semiconductor memory, and input/output capabilities) that is <strong>integrated as a dedicated subsystem within a larger electronic or mechanical device</strong>. Unlike a general-purpose computer, an embedded system is engineered to perform a <strong>dedicated, specific function</strong>, often under strict real-time constraints, limited power availability, and small physical size.
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
                      <strong>Arm architecture</strong> refers to a family of <strong>reduced instruction set computer (RISC)</strong> microprocessors and microcontrollers developed by ARM Holdings. It is engineered primarily for <strong>high power efficiency, compact physical silicon size, and low cost</strong>, making it the universally dominant architecture for mobile devices (smartphones, tablets) and embedded IoT systems. It is divided into three primary profiles: <strong>Cortex-A (Application), Cortex-R (Real-time), and Cortex-M (Microcontroller)</strong>.
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
                      <strong>Cloud computing</strong> (as defined by NIST) is a model for enabling <strong>ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources</strong> (e.g., networks, servers, storage, applications, and services) that can be <strong>rapidly provisioned and released</strong> with minimal management effort or service provider interaction. It relies on high-performance cloud networking to deliver elastic computing capacity to subscribers.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          `,
          quiz: [
            {
              id: "p6_q1",
              question: "Q1. [EXAM TRAP]: Which design philosophy does the Intel x86 architecture follow, and which does ARM follow?",
              options: [
                "Intel x86 is CISC; ARM is RISC",
                "Intel x86 is RISC; ARM is CISC",
                "Both Intel x86 and ARM are CISC",
                "Both Intel x86 and ARM are Vacuum Tube architectures"
              ],
              correctIndex: 0,
              explanation: "بالعامية كده: إنتل (x86) ماشية بمبدأ الـ CISC (تعليمات دسمة ومعقدة تخلص شغل كتير في خطوة بس بتسحب كهرباء)، إنما ARM ماشية بمبدأ الـ RISC (تعليمات خفيفة وبسيطة وسريعة جداً وموفرة للبطارية عشان كده حاكمة كل الموبايلات)!"
            },
            {
              id: "p6_q2",
              question: "Q2. [EXAM TRAP]: Which Intel x86 processor marked the major leap into 32-bit architecture and multitasking in 1985?",
              options: [
                "Intel 8080 (1974)",
                "Intel 8086 (1978)",
                "Intel 80386 (1985)",
                "Intel 80286 (1982)"
              ],
              correctIndex: 2,
              explanation: "الخلاصة بالعامية: احفظ الرقم 3 في 80386 = 32-bit! ده المعالج اللي نزل سنة 1985 وعمل النقلة التاريخية لعالم الـ 32-bit وشغّل أكتر من برنامج في نفس الوقت (Multitasking)."
            },
            {
              id: "p6_q3",
              question: "Q3. [EXAM TRAP]: Which Intel processor first introduced Superscalar Execution (executing multiple instructions in parallel per clock cycle)?",
              options: [
                "Intel 80486",
                "Intel Pentium (1993)",
                "Intel 8080",
                "Intel 80286"
              ],
              correctIndex: 1,
              explanation: "بالبلدي كده: معالج Pentium (سنة 1993) هو أول واحد فتح خطين إنتاج جوه المعالج (Superscalar Execution) عشان ينفذ كذا تعليمة بالتوازي في نفس دقة الساعة، أما الـ 80486 فكان أول واحد يركب فيه Cache و Math Coprocessor داخلي."
            },
            {
              id: "p6_q4",
              question: "Q4. What is the key distinction between an Embedded System and a General-Purpose Computer?",
              options: [
                "An embedded system is integrated within a larger product to perform a dedicated, specific function",
                "An embedded system has no processor or memory",
                "An embedded system is designed to run arbitrary general-purpose desktop apps",
                "A general-purpose computer cannot run an operating system"
              ],
              correctIndex: 0,
              explanation: "الفرق بالعامية: الكمبيوتر العادي (General-Purpose) بيشغل أي برنامج يخطر على بالك، إنما الـ Embedded System ده كمبيوتر صغير مدفون جوه جهاز كبير (زي الغسالة أو العربية) عشان يعمل وظيفة واحدة محددة ومخصوصة (Dedicated, specific function)."
            },
            {
              id: "p6_q5",
              question: "Q5. A subset of embedded systems with minimal hardware where the processor's behavior is difficult or impossible to observe is called:",
              options: [
                "Mainframe Supercomputer",
                "Deeply Embedded System",
                "Cloud Data Center",
                "General-Purpose Laptop"
              ],
              correctIndex: 1,
              explanation: "بالعامية: لما يكون النظام المدمج صغير جداً ومدفون في أعماق الحساسات الذكية لدرجة إنك متقدرش تراقب سلوكه الداخلي أو تعدل برمجته بسهولة، بنسميه Deeply Embedded System."
            },
            {
              id: "p6_q6",
              question: "Q6. Match the ARM Cortex profile: Which family is designed for Smartphones and Tablets running rich OS like Android and iOS?",
              options: [
                "ARM Cortex-M",
                "ARM Cortex-R",
                "ARM Cortex-A",
                "Intel 8086"
              ],
              correctIndex: 2,
              explanation: "افتكرها بالحرف الأول: حرف الـ A في Cortex-A يعني Application Processors، ودي الفئة القوية اللي بتشغل الموبايلات والتابلت وأنظمة التشغيل الكبيرة زي Android و iOS."
            },
            {
              id: "p6_q7",
              question: "Q7. Which ARM Cortex family is engineered for time-critical Real-Time embedded systems such as automotive ABS braking and aviation control?",
              options: [
                "ARM Cortex-R (Real-Time)",
                "ARM Cortex-A (Application)",
                "ARM Cortex-M (Microcontroller)",
                "Intel Pentium"
              ],
              correctIndex: 0,
              explanation: "حرف الـ R في Cortex-R يعني Real-Time! دي الفئة المعمولة للأنظمة الحرجة اللي التأخير فيها بجزء من الثانية يعمل كارثة، زي فرامل الـ ABS في العربية وأنظمة الطيران."
            },
            {
              id: "p6_q8",
              question: "Q8. Which ARM Cortex family is optimized for low-cost, ultra-low-power Microcontrollers and IoT sensors?",
              options: [
                "ARM Cortex-A",
                "ARM Cortex-R",
                "ARM Cortex-M",
                "Intel Core i9"
              ],
              correctIndex: 2,
              explanation: "حرف الـ M في Cortex-M يعني Microcontroller! ودي الشرائح الصغيرة الرخيصة والموفرة جداً للطاقة اللي بتتحط في حساسات الـ IoT والأجهزة المنزلية."
            },
            {
              id: "p6_q9",
              question: "Q9. According to the official NIST definition, Cloud Computing enables:",
              options: [
                "Manual rewiring of vacuum tubes without internet connectivity",
                "Ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources",
                "Permanent local installation of servers in every room",
                "Replacing all network cables with analog hydraulic valves"
              ],
              correctIndex: 1,
              explanation: "تعريف الـ Cloud Computing بالعامية: بدل ما تشتري سيرفرات غالية وتحطها في شركتك، بتأجر اللي محتاجه (سيرفرات، داتا ستورج، شبكات) عن طريق الإنترنت وقت ما تحتاجه (On-demand network access) من مجمع موارد مشترك (Shared pool)."
            },
            {
              id: "p6_q10",
              question: "Q10. [True / False]: ARM Cortex-M processors are optimized for high-end smartphones running Android.",
              options: [
                "True",
                "False"
              ],
              correctIndex: 1,
              explanation: "الإجابة False (✖)! ده فخ مشهور جداً في الامتحان: الموبايلات والـ Android بتشتغل بمعالجات Cortex-A، إنما Cortex-M دي بتاعة الـ Microcontrollers وحساسات الـ IoT."
            }
          ]
        },

        /* ====================================================================
           COMPREHENSIVE EXAM: CHAPTER 1 (Computer Architecture & Organization)
           ==================================================================== */
        {
          id: "ch1-exam",
          code: "EXAM 1",
          slides: "45 Questions • Full Exam",
          title: "📝 Comprehensive Exam: Chapter 1 (Computer Architecture & Organization)",
          hasContent: true,
          contentHtml: `
            <!-- EXAM OVERVIEW BANNER -->
            <div class="balady-box" style="border-right: 4px solid var(--accent-amber); margin-bottom: 1.5rem;">
              <div class="balady-label">📝 الامتحان التفاعلي الشامل على الفصل الأول (Interactive Comprehensive Exam: Chapter 1)</div>
              <p>
                الامتحان ده متصمم عشان تختبر نفسك <strong>بشكل تفاعلي بالكامل (45 سؤال شاملين كل تفصيلة في Chapter 1 و Sheet 1)</strong>، ومع كل سؤال هتلاقي <strong>شرح الإجابة بالعامية المصرية</strong> عشان المعلومة تثبت في دماغك وتعرف فخاخ الامتحان:<br/>
                • <strong>Section 1 (تفاعلي):</strong> 20 سؤال اختيار من متعدد (<span class="mono">MCQs</span>) — دوس على الإجابة وهتظهرلك النتيجة والشرح بالعامية فوراً!<br/>
                • <strong>Section 2 (تفاعلي):</strong> 10 أسئلة صح وغلط (<span class="mono">True / False</span>) بالتعليل الهندسي والشرح بالعامية.<br/>
                • <strong>Section 3 (تفاعلي):</strong> 10 أسئلة مصطلح علمي وتوصيل (<span class="mono">Matching &amp; Identification</span>) تفاعلية بالكامل.<br/>
                • <strong>Section 4 (مقالي + تسميع):</strong> 5 أسئلة مقالية رئيسية (<span class="mono">Short Answer &amp; Sheet 1 Master Questions</span>) بالإجابة النموذجية بالإنجليزي والشرح بالعامية.<br/>
                <em>💡 ابدأ بحل الأسئلة التفاعلية تحت، وعداد الدرجات هيحسبلك نتيجتك أول بأول!</em>
              </p>
            </div>

            <!-- INTERACTIVE QUIZ MOUNT POINT (SECTIONS 1, 2, AND 3 = 40 INTERACTIVE QUESTIONS) -->
            <div id="examInteractiveQuizMount"></div>

            <!-- ====================================================================
                 SECTION 4: Short Answer & Sheet 1 Master Questions (5 Questions)
                 ==================================================================== -->
            <section class="exp-section" style="margin-top: 2rem;">
              <div class="exp-section-header">
                <span class="exp-sec-num">04</span>
                <h2 class="exp-sec-title">SECTION 4: Short Answer &amp; Sheet 1 Master Questions (5 Essay Questions + الشرح بالعامية)</h2>
              </div>

              <div style="display: flex; flex-direction: column; gap: 1.25rem;">
                <!-- Essay Q1 -->
                <div class="sheet-card">
                  <div class="sheet-q-box">
                    <span class="mono" style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700;">ESSAY QUESTION 1 // MASTER QUESTION</span>
                    <p style="font-family: var(--font-en); font-weight: 700; font-size: 1.02rem; margin-top: 0.35rem;" dir="ltr">
                      Q1. Contrast Computer Architecture and Computer Organization with two concrete examples of each.
                    </p>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
                    <span style="font-weight: 800; color: var(--accent-emerald);">✅ Model Answer + الشرح بالعامية:</span>
                    <button type="button" class="tool-pill-btn" onclick="const box = this.parentElement.nextElementSibling; box.style.display = box.style.display === 'none' ? 'block' : 'none';">
                      إخفاء / إظهار الإجابة للتسميع
                    </button>
                  </div>
                  <div class="sheet-a-box" dir="ltr" style="text-align: left;">
                    <ul style="font-family: var(--font-en); line-height: 1.85; padding-left: 1.25rem;">
                      <li>
                        <strong>Computer Architecture:</strong> Programmer-visible attributes affecting logical program execution.<br/>
                        <em>Examples:</em> (1) Instruction Set Architecture (e.g., x86 vs. ARM instructions); (2) Data type representations (e.g., 32-bit vs. 64-bit word size).
                      </li>
                      <li style="margin-top: 0.5rem;">
                        <strong>Computer Organization:</strong> Physical, operational units realizing the architecture, transparent to software.<br/>
                        <em>Examples:</em> (1) CPU clock frequency (e.g., 2.4 GHz vs. 4.0 GHz); (2) Memory bus width and semiconductor circuit technology (e.g., SRAM vs. DRAM).
                      </li>
                    </ul>
                    <div dir="rtl" style="margin-top: 0.85rem; padding-top: 0.75rem; border-top: 1px dashed rgba(16,185,129,0.3); text-align: right; color: var(--text-primary); font-family: var(--font-ar);">
                      <strong>💡 الشرح بالعامية عشان تثبت في دماغك:</strong><br/>
                      الـ <strong>Architecture (المعمارية)</strong> هي أي حاجة المبرمج بيشوفها ويتعامل معاها في الكود (زي أوامر المعالج Instruction Set وعدد البتات 32-bit ولا 64-bit). إنما الـ <strong>Organization (التنظيم)</strong> هي التفاصيل الهندسية والكهربائية اللي شغالة جوه في الخفاء ومخفية عن المبرمج (Transparent)، زي سرعة الساعة بالـ GHz وعرض كابلات الباص ونوع شرائح الرامات!
                    </div>
                  </div>
                </div>

                <!-- Essay Q2 -->
                <div class="sheet-card">
                  <div class="sheet-q-box">
                    <span class="mono" style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700;">ESSAY QUESTION 2 // MASTER QUESTION</span>
                    <p style="font-family: var(--font-en); font-weight: 700; font-size: 1.02rem; margin-top: 0.35rem;" dir="ltr">
                      Q2. List the four basic functions of a general-purpose computer and state what role the Control mechanism plays among them.
                    </p>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
                    <span style="font-weight: 800; color: var(--accent-emerald);">✅ Model Answer + الشرح بالعامية:</span>
                    <button type="button" class="tool-pill-btn" onclick="const box = this.parentElement.nextElementSibling; box.style.display = box.style.display === 'none' ? 'block' : 'none';">
                      إخفاء / إظهار الإجابة للتسميع
                    </button>
                  </div>
                  <div class="sheet-a-box" dir="ltr" style="text-align: left;">
                    <ol style="font-family: var(--font-en); line-height: 1.85; padding-left: 1.25rem;">
                      <li><strong>Data Processing:</strong> Manipulating and computing arithmetic/logical values.</li>
                      <li><strong>Data Storage:</strong> Retaining data temporarily (RAM) or permanently (Disks).</li>
                      <li><strong>Data Movement:</strong> Transferring data between the computer and external I/O devices or networks.</li>
                      <li><strong>Control:</strong> The control mechanism directs and coordinates the other three operations by issuing control signals, determining when data is moved, processed, or stored.</li>
                    </ol>
                    <div dir="rtl" style="margin-top: 0.85rem; padding-top: 0.75rem; border-top: 1px dashed rgba(16,185,129,0.3); text-align: right; color: var(--text-primary); font-family: var(--font-ar);">
                      <strong>💡 الشرح بالعامية عشان تثبت في دماغك:</strong><br/>
                      أي كمبيوتر في الدنيا مبيعملش غير 4 وظائف بس: يعالج بيانات (<strong>Processing</strong>)، يخزن بيانات (<strong>Storage</strong>)، ينقل بيانات (<strong>Movement</strong>)، ويتحكم فيهم (<strong>Control</strong>). دور الـ <strong>Control</strong> هنا عامل زي "المايسترو" أو عسكري المرور اللي بيطلع إشارات تحكم يقول امتى الداتا تتنقل، وامتى تتحسب، وامتى تتخزن!
                    </div>
                  </div>
                </div>

                <!-- Essay Q3 -->
                <div class="sheet-card">
                  <div class="sheet-q-box">
                    <span class="mono" style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700;">ESSAY QUESTION 3 // MASTER QUESTION</span>
                    <p style="font-family: var(--font-en); font-weight: 700; font-size: 1.02rem; margin-top: 0.35rem;" dir="ltr">
                      Q3. Explain the Stored-Program concept and describe the layout of an IAS instruction word.
                    </p>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
                    <span style="font-weight: 800; color: var(--accent-emerald);">✅ Model Answer + الشرح بالعامية:</span>
                    <button type="button" class="tool-pill-btn" onclick="const box = this.parentElement.nextElementSibling; box.style.display = box.style.display === 'none' ? 'block' : 'none';">
                      إخفاء / إظهار الإجابة للتسميع
                    </button>
                  </div>
                  <div class="sheet-a-box" dir="ltr" style="text-align: left;">
                    <ul style="font-family: var(--font-en); line-height: 1.85; padding-left: 1.25rem;">
                      <li><strong>Stored-Program Concept:</strong> Proposed by John von Neumann, it dictates that program instructions and numerical data are stored together in the same read-write addressable memory, enabling programs to be modified and executed electronically without physical rewiring.</li>
                      <li style="margin-top: 0.5rem;">
                        <strong>IAS Instruction Word Layout:</strong> A 40-bit word contains two 20-bit instructions:<br/>
                        • <strong>Left Instruction (bits 0–19):</strong> 8-bit Opcode (bits 0–7) + 12-bit Memory Address (bits 8–19).<br/>
                        • <strong>Right Instruction (bits 20–39):</strong> 8-bit Opcode (bits 20–27) + 12-bit Memory Address (bits 28–39).
                      </li>
                    </ul>
                    <div dir="rtl" style="margin-top: 0.85rem; padding-top: 0.75rem; border-top: 1px dashed rgba(16,185,129,0.3); text-align: right; color: var(--text-primary); font-family: var(--font-ar);">
                      <strong>💡 الشرح بالعامية عشان تثبت في دماغك:</strong><br/>
                      مبدأ <strong>Stored-Program</strong> بتاع فون نيومان هو إننا نخزن "أوامر البرنامج" مع "البيانات" في نفس الذاكرة (RAM) كأرقام، بدل ما نفضل نفك ونربط أسلاك بإيدينا زي أيام زمان! وفي كمبيوتر IAS، الكلمة الواحدة (40-bit Word) بتشيل <strong>تعليمتين مع بعض</strong> (Left Instruction و Right Instruction)، كل تعليمة 20-bit متقسمة: <strong>8-bit Opcode</strong> (نوع العملية: اجمع/اطرح) + <strong>12-bit Address</strong> (عنوان الخانة في الميموري).
                    </div>
                  </div>
                </div>

                <!-- Essay Q4 -->
                <div class="sheet-card">
                  <div class="sheet-q-box">
                    <span class="mono" style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700;">ESSAY QUESTION 4 // MASTER QUESTION</span>
                    <p style="font-family: var(--font-en); font-weight: 700; font-size: 1.02rem; margin-top: 0.35rem;" dir="ltr">
                      Q4. State five distinct technological benefits that resulted from Moore's Law.
                    </p>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
                    <span style="font-weight: 800; color: var(--accent-emerald);">✅ Model Answer + الشرح بالعامية:</span>
                    <button type="button" class="tool-pill-btn" onclick="const box = this.parentElement.nextElementSibling; box.style.display = box.style.display === 'none' ? 'block' : 'none';">
                      إخفاء / إظهار الإجابة للتسميع
                    </button>
                  </div>
                  <div class="sheet-a-box" dir="ltr" style="text-align: left;">
                    <ol style="font-family: var(--font-en); line-height: 1.85; padding-left: 1.25rem;">
                      <li><strong>Reduced Cost:</strong> Cost per logic gate and memory bit plummeted dramatically.</li>
                      <li><strong>Increased Clock Speed:</strong> Shorter on-chip electrical paths drastically decreased signal propagation delays.</li>
                      <li><strong>Miniaturization:</strong> Computers transformed from room-sized installations to handheld and wearable devices.</li>
                      <li><strong>Reduced Power and Heat:</strong> Smaller integrated transistors consume significantly less energy and generate less thermal output.</li>
                      <li><strong>Enhanced Reliability:</strong> Integrating millions of components onto a single die eliminated failure-prone soldered wire connections.</li>
                    </ol>
                    <div dir="rtl" style="margin-top: 0.85rem; padding-top: 0.75rem; border-top: 1px dashed rgba(16,185,129,0.3); text-align: right; color: var(--text-primary); font-family: var(--font-ar);">
                      <strong>💡 الشرح بالعامية عشان تثبت في دماغك:</strong><br/>
                      لما عدد الترانزستورات بيتضاعف على نفس الشريحة (قانون مور)، بنكسب 5 حاجات ذهبية: (1) <strong>التكلفة بتقل جداً</strong> لأن تمن الرقاقة ثابت، (2) <strong>السرعة بتزيد</strong> لأن المسافة بين الترانزستورات قصرت فالكهرباء بتجري أسرع، (3) <strong>الحجم بيصغر</strong> فبقينا نشيل الكمبيوتر في جيبنا، (4) <strong>استهلاك الكهرباء والحرارة بيقل</strong> لكل بوابة، (5) <strong>الاعتمادية (Reliability) بتعلى</strong> لأن التوصيلات محفورة جوه السيليكون بدل اللحامات اللي كانت بتفك!
                    </div>
                  </div>
                </div>

                <!-- Essay Q5 -->
                <div class="sheet-card">
                  <div class="sheet-q-box">
                    <span class="mono" style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700;">ESSAY QUESTION 5 // MASTER QUESTION</span>
                    <p style="font-family: var(--font-en); font-weight: 700; font-size: 1.02rem; margin-top: 0.35rem;" dir="ltr">
                      Q5. Differentiate between the three ARM Cortex processor profiles: Cortex-A, Cortex-R, and Cortex-M.
                    </p>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
                    <span style="font-weight: 800; color: var(--accent-emerald);">✅ Model Answer + الشرح بالعامية:</span>
                    <button type="button" class="tool-pill-btn" onclick="const box = this.parentElement.nextElementSibling; box.style.display = box.style.display === 'none' ? 'block' : 'none';">
                      إخفاء / إظهار الإجابة للتسميع
                    </button>
                  </div>
                  <div class="sheet-a-box" dir="ltr" style="text-align: left;">
                    <ul style="font-family: var(--font-en); line-height: 1.85; padding-left: 1.25rem;">
                      <li><strong>Cortex-A (Application):</strong> High-performance profile with memory management units (MMU) designed to execute complex, multi-user operating systems (Android, Linux) in smartphones, tablets, and smart TVs.</li>
                      <li><strong>Cortex-R (Real-Time):</strong> High-reliability, deterministic profile with fault tolerance engineered for hard real-time, safety-critical systems (automotive engine/braking management, avionics, medical robotics).</li>
                      <li><strong>Cortex-M (Microcontroller):</strong> Ultra-low-power, cost-optimized, compact profile engineered for deeply embedded sensor nodes, smart meters, household appliances, and IoT devices.</li>
                    </ul>
                    <div dir="rtl" style="margin-top: 0.85rem; padding-top: 0.75rem; border-top: 1px dashed rgba(16,185,129,0.3); text-align: right; color: var(--text-primary); font-family: var(--font-ar);">
                      <strong>💡 الشرح بالعامية عشان تثبت في دماغك:</strong><br/>
                      عيلة ARM Cortex متقسمة 3 إخوات كل واحد ليه شغلانته بالحرف الأول من اسمه:<br/>
                      • <strong>Cortex-A (Application):</strong> الوحش بتاع التطبيقات وأنظمة التشغيل الكبيرة زي Android و iOS في الموبايلات والتابلت.<br/>
                      • <strong>Cortex-R (Real-Time):</strong> بتاع الاستجابة اللحظية الحرجة اللي مفيهاش هزار ولا تأخير جزء من الثانية، زي فرامل العربية (ABS) والطيارات.<br/>
                      • <strong>Cortex-M (Microcontroller):</strong> الصغير الموفر جداً للكهرباء والرخيص، وده اللي مالي حساسات إنترنت الأشياء (IoT) والأجهزة الذكية في البيت.
                    </div>
                  </div>
                </div>
              </div>
            </section>
          `,
          quiz: [
            /* ================================================================
               SECTION 1: Multiple Choice Questions (20 MCQs)
               ================================================================ */
            {
              id: "ex1_q1",
              sectionTitle: "01 // SECTION 1: Multiple Choice Questions (20 MCQs — أسئلة الاختيار من متعدد)",
              question: "Q1. Which of the following is classified as an Architectural attribute rather than an Organizational attribute?",
              options: [
                "The processor clock frequency (e.g., 3.5 GHz)",
                "The physical bus width on the motherboard",
                "The instruction set format and addressing modes",
                "The semiconductor technology used for cache memory"
              ],
              correctIndex: 2,
              explanation: "بالعامية كده: الـ Architecture هي أي حاجة المبرمج بيشوفها ويتعامل معاها مباشرة في الكود (زي الـ Instruction set وطرق عنونة الذاكرة Addressing modes). أما سرعة الساعة (3.5 GHz) وعرض الباص ونوع شرائح الكاش فدي تفاصيل هاردوير داخلية مخفية عن المبرمج يعني Organization!"
            },
            {
              id: "ex1_q2",
              question: "Q2. The primary business motivation for IBM keeping the same Architecture across the System/370 family while using different Organizations was to:",
              options: [
                "Reduce the physical size of all computer models",
                "Protect customers' expensive investments in existing software",
                "Eliminate the need for operating systems",
                "Force customers to buy new software every year"
              ],
              correctIndex: 1,
              explanation: "الخلاصة بالعامية: شركة IBM ثبتت الـ Architecture في كل موديلات System/370 عشان تحمي فلوس واستثمارات العملاء في البرامج القديمة (Backward Compatibility) — يعني العميل يشتري جهاز جديد أسرع في الـ Organization ويشغل عليه كل برامجه القديمة من غير ما يغير سطر كود واحد!"
            },
            {
              id: "ex1_q3",
              question: "Q3. In computer engineering, the term 'Transparent to the programmer' strictly means:",
              options: [
                "The feature is made of clear optical glass",
                "The programmer must explicitly manage and program the feature",
                "The hardware detail is completely hidden from the programmer's view",
                "The feature is documented openly in the software manual"
              ],
              correctIndex: 2,
              explanation: "خلي بالك من الفخ ده! كلمة Transparent في هندسة الحاسبات عكس معناها الحرفي؛ معناها 'مخفي تماماً ومش متشاف للمبرمج' (Invisible/Hidden)، يعني الهاردوير بيعمله لوحده في الخفاء من غير ما المبرمج يشغل باله بيه."
            },
            {
              id: "ex1_q4",
              question: "Q4. Which of the following is NOT one of the four basic structural components of a COMPUTER at the top level?",
              options: [
                "Central Processing Unit (CPU)",
                "Arithmetic and Logic Unit (ALU)",
                "Main Memory",
                "System Interconnection (System Bus)"
              ],
              correctIndex: 1,
              explanation: "صحصح للفخ ده! الـ ALU موجودة جوه الـ CPU مش في المستوى الأعلى للكمبيوتر! المكونات الأربعة الكبار للـ Computer من بره هم: CPU، و Main Memory، و I/O، و System Interconnection."
            },
            {
              id: "ex1_q5",
              question: "Q5. The primary functional component inside the CPU responsible for decoding instructions and generating control signals is the:",
              options: [
                "Arithmetic and Logic Unit (ALU)",
                "Program Counter (PC)",
                "Control Unit (CU)",
                "Memory Buffer Register (MBR)"
              ],
              correctIndex: 2,
              explanation: "بالبلدي كده: الـ Control Unit (CU) هي 'المدير أو المايسترو' اللي قاعد جوه المعالج، شغلانته يفك شفرة التعليمة (Decode) ويطلع إشارات التحكم (Control Signals) لباقي أجزاء الكمبيوتر."
            },
            {
              id: "ex1_q6",
              question: "Q6. A multicore computer is accurately defined as:",
              options: [
                "Multiple separate processor chips mounted on different motherboards",
                "A single silicon chip containing two or more independent execution cores",
                "A processor connected to multiple hard disk drives",
                "A system running multiple operating systems simultaneously"
              ],
              correctIndex: 1,
              explanation: "بالعامية: الـ Multicore معناه إننا جبنا نواتين أو أكتر (Two or more independent cores) وحطيناهم مع بعض على شريحة سيليكون واحدة (Single silicon chip) عشان ينفذوا الأوامر بالتوازي."
            },
            {
              id: "ex1_q7",
              question: "Q7. Which statement correctly compares Cache Memory to Main Memory (RAM)?",
              options: [
                "Cache is larger in capacity and slower in speed",
                "Cache is larger in capacity and faster in speed",
                "Cache is smaller in capacity and slower in speed",
                "Cache is smaller in capacity and much faster in speed"
              ],
              correctIndex: 3,
              explanation: "القاعدة الذهبية في الذاكرة: الـ Cache Memory حجمها أصغر بكتير من الـ RAM العادية، بس سرعتها صاروخية (أسرع بكتير لأنها مبنية من SRAM وقاعدة جوه المعالج نفسه)."
            },
            {
              id: "ex1_q8",
              question: "Q8. The defining characteristic of the von Neumann (stored-program) architecture is that:",
              options: [
                "Instructions and data are stored together in the same read-write memory",
                "Separate physical memories are strictly used for instructions and data",
                "Programs must be hardwired manually using external patch cords",
                "Data can only be accessed sequentially from magnetic tape"
              ],
              correctIndex: 0,
              explanation: "الفكرة العبقرية بتاعة فون نيومان (Stored-Program Concept) بالعامية: إن 'التعليمات' (Instructions) و'البيانات' (Data) بيقعدوا مع بعض في نفس الذاكرة (Single read-write memory) بدل ما نقعد نوصل أسلاك بإيدينا!"
            },
            {
              id: "ex1_q9",
              question: "Q9. In the IAS computer, a standard 40-bit word could hold:",
              options: [
                "One 40-bit data number OR two 20-bit instructions",
                "Two 20-bit data numbers OR one 40-bit instruction",
                "Four 10-bit instructions only",
                "Eight 5-bit opcodes only"
              ],
              correctIndex: 0,
              explanation: "في كمبيوتر IAS، الكلمة الواحدة طولها 40-bit: لو هنحط فيها رقم (Data) هتاخد رقم واحد كامل 40-bit (بت إشارة + 39 بت للرقم)، ولو هنحط فيها أوامر (Instructions) بتتقسم نصين وتشيل تعليمتين كل واحدة 20-bit!"
            },
            {
              id: "ex1_q10",
              question: "Q10. In the IAS computer, which register holds the address of the NEXT instruction pair to be fetched from memory?",
              options: [
                "Instruction Register (IR)",
                "Program Counter (PC)",
                "Instruction Buffer Register (IBR)",
                "Memory Buffer Register (MBR)"
              ],
              correctIndex: 1,
              explanation: "بالعامية: الـ Program Counter (PC) هو 'العداد أو المؤشر' اللي دايماً شايل عنوان التعليمة الجاية (Address of the NEXT instruction pair) اللي عليها الدور تتسحب من الذاكرة."
            },
            {
              id: "ex1_q11",
              question: "Q11. Which register temporarily holds the right-hand instruction of an IAS instruction pair while the left-hand instruction is executing?",
              options: [
                "Accumulator (AC)",
                "Memory Address Register (MAR)",
                "Instruction Buffer Register (IBR)",
                "Multiplier Quotient (MQ)"
              ],
              correctIndex: 2,
              explanation: "بما إن كمبيوتر IAS بيسحب تعليمتين مع بعض في الـ 40-bit word، التعليمة الشمال بتخش تتنفذ على طول في الـ IR والـ MAR، والتعليمة اليمين بتستنى دورها مؤقتاً في كرسي الانتظار اللي اسمه IBR (Instruction Buffer Register)!"
            },
            {
              id: "ex1_q12",
              question: "Q12. The second generation of computers was defined by replacing vacuum tubes with:",
              options: [
                "Integrated circuits (ICs)",
                "Transistors",
                "Microprocessors",
                "Magnetic optical discs"
              ],
              correctIndex: 1,
              explanation: "ترتيب الأجيال عشان متتلخبطش: الجيل الأول = صمامات مفرغة (Vacuum Tubes)، الجيل التاني = الترانزستور (Transistors)، الجيل التالت = الدوائر المتكاملة (ICs)."
            },
            {
              id: "ex1_q13",
              question: "Q13. According to Moore's Law (proposed in 1965), what doubles approximately every year to two years?",
              options: [
                "The physical dimensions of the silicon chip",
                "The retail price of computing hardware",
                "The number of transistors packed onto a single chip",
                "The power consumption and heat dissipation of the CPU"
              ],
              correctIndex: 2,
              explanation: "قانون مور (Moore's Law) بالعامية: جوردون مور لاحظ إن عدد الترانزستورات المحفورة على شريحة السيليكون الواحدة بيتضاعف كل 18 لـ 24 شهر تقريباً بنفس التكلفة!"
            },
            {
              id: "ex1_q14",
              question: "Q14. Which factor directly explains why packing more transistors onto a chip increases operating clock speeds?",
              options: [
                "Shorter electrical paths between circuits",
                "Higher electrical resistance in silicon",
                "Greater physical surface area for air cooling",
                "Increased reliance on external copper wiring"
              ],
              correctIndex: 0,
              explanation: "ليه لما نصغر الترانزستورات ونزود عددها السرعة بتزيد؟ بالعامية: لأن المسافات اللي الكهرباء بتمشيها جوه الشريحة بقت أقصر بكتير (Shorter electrical paths)، فالنبضة بتوصل في وقت أقل بكتير!"
            },
            {
              id: "ex1_q15",
              question: "Q15. An Embedded System is fundamentally characterized by being:",
              options: [
                "Capable of running any general-purpose desktop operating system",
                "Dedicated to performing a specific, fixed function within a larger product",
                "Always equipped with a keyboard, mouse, and large monitor",
                "Designed exclusively for scientific calculations and supercomputers"
              ],
              correctIndex: 1,
              explanation: "الـ Embedded System (النظام المدمج) هو كمبيوتر صغير مدفون جوه جهاز أكبر (زي العربية أو الغسالة أو الميكروويف) ومصمم عشان يعمل وظيفة واحدة محددة ومخصوصة (Dedicated, specific function)."
            },
            {
              id: "ex1_q16",
              question: "Q16. Which ARM Cortex processor family profile is specifically optimized for time-critical, safety-critical real-time applications like automotive braking?",
              options: [
                "Cortex-A",
                "Cortex-M",
                "Cortex-R",
                "Cortex-X"
              ],
              correctIndex: 2,
              explanation: "احفظها بالحرف: حرف الـ R في Cortex-R يعني Real-Time! ودي العيلة المخصصة للأنظمة الحرجة في التوقيت والأمان زي فرامل العربية (ABS) وأنظمة الطيران."
            },
            {
              id: "ex1_q17",
              question: "Q17. The ARM processor architecture is built upon which design philosophy?",
              options: [
                "CISC (Complex Instruction Set Computer)",
                "RISC (Reduced Instruction Set Computer)",
                "Vacuum-tube discrete logic",
                "Hardwired non-programmable logic"
              ],
              correctIndex: 1,
              explanation: "معمارية ARM مبنية بالكامل على فلسفة الـ RISC (Reduced Instruction Set Computer) — يعني تعليمات بسيطة وسريعة وموفرة جداً للبطارية، عكس إنتل x86 اللي شغالة بـ CISC."
            },
            {
              id: "ex1_q18",
              question: "Q18. The Intel Pentium processor (1993) introduced which major architectural breakthrough?",
              options: [
                "First 8-bit general-purpose microprocessor",
                "Transition to vacuum tube technology",
                "Superscalar execution (executing multiple instructions per clock cycle in parallel)",
                "Elimination of cache memory"
              ],
              correctIndex: 2,
              explanation: "معالج Intel Pentium سنة 1993 عمل ثورة الـ Superscalar Execution، يعني بقى فيه خطين تنفيذ جوه المعالج يقدروا ينفذوا أكتر من تعليمة بالتوازي في نفس دقة الساعة!"
            },
            {
              id: "ex1_q19",
              question: "Q19. In Cloud Computing, the NIST definition specifies that resources must be:",
              options: [
                "Manually wired by the consumer prior to each session",
                "Provisioned and released on-demand with minimal management effort",
                "Strictly located within the user's local premises",
                "Exclusively reserved for a single user for life"
              ],
              correctIndex: 1,
              explanation: "في تعريف NIST للـ Cloud Computing: الموارد (سيرفرات، مساحات تخزين، شبكات) بتتاح وتتسحب عند الطلب (On-demand) عبر الشبكة بأقل مجهود إداري."
            },
            {
              id: "ex1_q20",
              question: "Q20. A 'Deeply Embedded System' differs from a standard embedded system in that:",
              options: [
                "It consumes more electrical power than a mainframe",
                "Its internal processor behavior is difficult or impossible for the user/programmer to observe",
                "It contains multiple high-resolution graphics monitors",
                "It is designed to run arbitrary PC gaming software"
              ],
              correctIndex: 1,
              explanation: "الـ Deeply Embedded System هو نظام مدمج متناهي الصغر ومدفون في أعماق الحساسات الذكية، لدرجة إن سلوك المعالج بتاعه صعب أو مستحيل يتراقب مباشرة من المستخدم أو المبرمج العادي."
            },

            /* ================================================================
               SECTION 2: True or False Questions (10 Questions)
               ================================================================ */
            {
              id: "ex1_tf1",
              sectionTitle: "02 // SECTION 2: True or False Questions (10 Questions — أسئلة الصح والغلط بالتعليل)",
              question: "Q21. [True / False]: Two computers can have identical Computer Architectures while utilizing entirely different Computer Organizations.",
              options: ["True (✔)", "False (✖)"],
              correctIndex: 0,
              explanation: "الإجابة TRUE (✔)! بالعامية: ممكن جهازين يكون ليهم نفس الـ Architecture بالمللي (يعني بيشغلوا نفس البرامج ونفس الـ ISA زي عائلة IBM System/370 أو معالجات Core i3 و Core i9)، بس كل واحد متصنع بـ Organization مختلف في السرعة والكاش والباص!"
            },
            {
              id: "ex1_tf2",
              question: "Q22. [True / False]: The number of bits used to represent an integer data type is an Organizational attribute.",
              options: ["True (✔)", "False (✖)"],
              correctIndex: 1,
              explanation: "الإجابة FALSE (✖)! عدد البتات اللي بتمثل الأرقام (Data Representation زي 32-bit أو 64-bit) دي حاجة المبرمج بيشوفها وبتأثر على الكود بتاعه وحدود الـ Overflow، فدي Architecture مش Organization!"
            },
            {
              id: "ex1_tf3",
              question: "Q23. [True / False]: Main Memory and Input/Output modules are structural components found inside the Central Processing Unit.",
              options: ["True (✔)", "False (✖)"],
              correctIndex: 1,
              explanation: "الإجابة FALSE (✖)! اوعى تقع في الفخ ده: الـ Main Memory والـ I/O دول بره المعالج (مكونات المستوى الأعلى للكمبيوتر ككل)، أما اللي جوه الـ CPU فهم: CU و ALU و Registers و CPU Interconnection."
            },
            {
              id: "ex1_tf4",
              question: "Q24. [True / False]: In the IAS computer, instructions and data are stored in physically distinct, isolated memory hardware.",
              options: ["True (✔)", "False (✖)"],
              correctIndex: 1,
              explanation: "الإجابة FALSE (✖)! كمبيوتر IAS مبني على معمارية فون نيومان، وأهم مبدأ فيها إن التعليمات والبيانات (Instructions & Data) بيتخزنوا مع بعض في نفس الذاكرة (Single shared read-write memory)."
            },
            {
              id: "ex1_tf5",
              question: "Q25. [True / False]: The Program Counter (PC) register contains the instruction currently being executed by the ALU.",
              options: ["True (✔)", "False (✖)"],
              correctIndex: 1,
              explanation: "الإجابة FALSE (✖)! الـ PC شايل 'عنوان' التعليمة الجاية (Address of NEXT instruction)، إنما اللي شايل كود التعليمة اللي بتتنفذ دلوقتي هو الـ IR (Instruction Register)."
            },
            {
              id: "ex1_tf6",
              question: "Q26. [True / False]: Moore's Law is a strict, immutable law of nuclear physics.",
              options: ["True (✔)", "False (✖)"],
              correctIndex: 1,
              explanation: "الإجابة FALSE (✖)! قانون مور مش قانون فيزياء ثابت، ده ملاحظة عملية وتوقع تكنولوجي (Empirical observation) قاله جوردون مور سنة 1965 عن تطور صناعة الشرائح."
            },
            {
              id: "ex1_tf7",
              question: "Q27. [True / False]: A multicore processor incorporates multiple execution cores on separate silicon dies connected by external cables.",
              options: ["True (✔)", "False (✖)"],
              correctIndex: 1,
              explanation: "الإجابة FALSE (✖)! الـ Multicore معناه إن كل الأنوية (Cores) محفورة مع بعض على شريحة سيليكون واحدة (Single silicon chip/die)، مش شرائح منفصلة متوصلة بكابلات خارجية."
            },
            {
              id: "ex1_tf8",
              question: "Q28. [True / False]: Cache memory is positioned between the CPU and Main Memory to bridge the performance/speed gap.",
              options: ["True (✔)", "False (✖)"],
              correctIndex: 0,
              explanation: "الإجابة TRUE (✔)! بالعامية: المعالج سريع جداً والرامات بطيئة بالنسبة له، فحطينا الـ Cache Memory في النص كـ 'درج سريع' يسد الفجوة في السرعة ويجهز البيانات للمعالج في لمح البصر."
            },
            {
              id: "ex1_tf9",
              question: "Q29. [True / False]: ARM Cortex-M processors are primarily engineered for complex smartphones running the Android operating system.",
              options: ["True (✔)", "False (✖)"],
              correctIndex: 1,
              explanation: "الإجابة FALSE (✖)! اللي بيشغل الموبايلات والـ Android هو Cortex-A (Application)، أما Cortex-M فده بتاع الـ Microcontrollers وحساسات الـ IoT الصغيرة."
            },
            {
              id: "ex1_tf10",
              question: "Q30. [True / False]: The system bus is an example of System Interconnection.",
              options: ["True (✔)", "False (✖)"],
              correctIndex: 0,
              explanation: "الإجابة TRUE (✔)! الـ System Bus (بخطوطه التلاتة: Data و Address و Control) هو المثال الأساسي للـ System Interconnection اللي بيربط الـ CPU بالـ Memory والـ I/O."
            },

            /* ================================================================
               SECTION 3: Matching & Identification (10 Scientific Terms)
               ================================================================ */
            {
              id: "ex1_m1",
              sectionTitle: "03 // SECTION 3: Matching & Identification (10 Scientific Terms — أسئلة المصطلح العلمي)",
              question: "Q31. [Scientific Term]: Attributes of a system visible to the programmer that directly impact logical program execution.",
              options: [
                "Computer Organization",
                "Computer Architecture",
                "System Interconnection",
                "Deeply Embedded System"
              ],
              correctIndex: 1,
              explanation: "بالعامية: أول ما تشوف كلمة 'Visible to the programmer' وبتأثر على تنفيذ البرنامج منطقياً، يبقى فوراً ده تعريف الـ Computer Architecture!"
            },
            {
              id: "ex1_m2",
              question: "Q32. [Scientific Term]: Operational units and their interconnections that realize the architectural specifications (transparent to the programmer).",
              options: [
                "Computer Architecture",
                "Computer Organization",
                "Instruction Set Architecture (ISA)",
                "Cloud Computing"
              ],
              correctIndex: 1,
              explanation: "بالعامية: أول ما تشوف 'Operational units' و 'Realize architectural specifications' أو 'Transparent to the programmer'، يبقى ده الـ Computer Organization (التنظيم الداخلي للهاردوير)!"
            },
            {
              id: "ex1_m3",
              question: "Q33. [Scientific Term]: The structural component inside the CPU that performs arithmetic calculations and logical bitwise operations.",
              options: [
                "Control Unit (CU)",
                "Arithmetic and Logic Unit (ALU)",
                "Program Counter (PC)",
                "I/O Module"
              ],
              correctIndex: 1,
              explanation: "الآلة الحاسبة اللي جوه المعالج المسؤولة عن الجمع والطرح والعمليات المنطقية هي الـ ALU (Arithmetic and Logic Unit)."
            },
            {
              id: "ex1_m4",
              question: "Q34. [Scientific Term]: Ultra-high-speed temporary storage cells located directly inside the processor chip.",
              options: [
                "Hard Disk Drives",
                "Registers",
                "Magnetic Tapes",
                "External I/O Buffers"
              ],
              correctIndex: 1,
              explanation: "أسرع وحدات تخزين مؤقتة في الكمبيوتر كله واللي قاعدة جوه قلب المعالج نفسه هي المسجلات (Registers)."
            },
            {
              id: "ex1_m5",
              question: "Q35. [Scientific Term]: The 40-bit register in the IAS computer that serves as the buffer/gateway for all words entering or leaving main memory.",
              options: [
                "Memory Address Register (MAR)",
                "Memory Buffer Register (MBR)",
                "Instruction Buffer Register (IBR)",
                "Program Counter (PC)"
              ],
              correctIndex: 1,
              explanation: "بوابة العبور اللي بتستلم أي كلمة (40-bit word) طالعة من الذاكرة أو رايحة تتكتب في الذاكرة هي الـ MBR (Memory Buffer Register)."
            },
            {
              id: "ex1_m6",
              question: "Q36. [Scientific Term]: The 8-bit register in the IAS computer used to hold the operation code (opcode) of the instruction currently being executed.",
              options: [
                "Instruction Register (IR)",
                "Instruction Buffer Register (IBR)",
                "Multiplier Quotient (MQ)",
                "Memory Address Register (MAR)"
              ],
              correctIndex: 0,
              explanation: "المسجل اللي طوله 8-bit وشايل الـ Opcode بتاع التعليمة اللي بتتنفذ دلوقتي حالاً هو الـ IR (Instruction Register)."
            },
            {
              id: "ex1_m7",
              question: "Q37. [Scientific Term]: The empirical observation stating that transistor density on a single silicon chip doubles roughly every 18–24 months.",
              options: [
                "von Neumann Principle",
                "Moore's Law",
                "Superscalar Law",
                "NIST Cloud Model"
              ],
              correctIndex: 1,
              explanation: "تضاعف عدد الترانزستورات على الشريحة الواحدة كل 18 لـ 24 شهر هو قانون مور الشهير (Moore's Law)."
            },
            {
              id: "ex1_m8",
              question: "Q38. [Scientific Term]: A computer system dedicated to performing a specific, fixed function within a larger electrical or mechanical product.",
              options: [
                "Mainframe Supercomputer",
                "Embedded System",
                "General-Purpose Workstation",
                "Cloud Server Cluster"
              ],
              correctIndex: 1,
              explanation: "الكمبيوتر المدفون جوه منتج أكبر عشان يؤدي وظيفة واحدة محددة ومخصوصة هو الـ Embedded System (النظام المدمج)."
            },
            {
              id: "ex1_m9",
              question: "Q39. [Scientific Term]: The energy-efficient RISC processor family dominant in mobile smartphones and embedded consumer electronics.",
              options: [
                "Intel x86 CISC Family",
                "ARM Architecture",
                "ENIAC Vacuum Tube Array",
                "IBM System/370 Mainframe"
              ],
              correctIndex: 1,
              explanation: "عائلة المعالجات المبنية على RISC والموفرة جداً للطاقة واللي مسيطرة على كل الموبايلات والأنظمة المدمجة هي ARM Architecture."
            },
            {
              id: "ex1_m10",
              question: "Q40. [Scientific Term]: A model providing ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources.",
              options: [
                "Hardwired Programming",
                "Cloud Computing",
                "Discrete Transistor Logic",
                "Local Register File"
              ],
              correctIndex: 1,
              explanation: "نموذج الوصول الشبكي المريح وعند الطلب (On-demand network access) لمجمع مشترك من الموارد الحاسوبية هو التعريف الرسمي للـ Cloud Computing (الحوسبة السحابية)."
            }
          ]
        }
      ]
    }
  ]
};



