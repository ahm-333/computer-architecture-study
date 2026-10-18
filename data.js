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
    },

    /* ========================================================================
       CHAPTER 3: A TOP-LEVEL VIEW OF COMPUTER FUNCTION AND INTERCONNECTION
       ======================================================================== */
    {
      id: "ch-3",
      code: "CHAPTER 03",
      titleAr: "الفصل الثالث: نظرة عليا لوظيفة الحاسوب والتوصيل البيني",
      titleEn: "Chapter 3: A Top-Level View of Computer Function and Interconnection",
      summary: "مقارنة البرمجة بالعتاد الصلب (Hardwired) مقابل البرمجيات (Software - Figure 3.1b)، مفاهيم فون نيومان الثلاثة، السجلات الستة الأساسية (PC, IR, MAR, MBR, I/O AR, I/O BR - Figure 3.2)، دورة التعليمة الأساسية (Fetch & Execute - Figure 3.3)، مخطط تدفق الحالات السبعة (Figure 3.6)، الآلة الافتراضية وتتبع تنفيذ البرامج خطوة بخطوة (Figure 3.4 & 3.5)، وإجابات الشيت الثالث (3.1 إلى 3.5 و 3.8).",
      isReady: true,
      parts: [
        /* ====================================================================
           MODULE 1: Hardware vs. Software, von Neumann Model & Core Registers (Slides 1 to 7)
           ==================================================================== */
        {
          id: "ch3-p1",
          code: "MODULE 1",
          slides: "Slides 1 to 7",
          title: "The Foundation — هندسة المكونات وعقل السوفتوير (Hardware vs Software, von Neumann & Core Registers)",
          hasContent: true,
          contentHtml: `
<!-- 0. HERO SECTION -->
            <div class="mod-hero-box">
              <div class="mod-hero-meta-row">
                <span class="mod-meta-badge">Route: /module-1-foundation</span>
                <span class="mod-meta-badge amber">Topic Range: William Stallings 10th Ed — Chapter 3 (Slides 1 to 7)</span>
                <span class="mod-meta-badge emerald">Sheet Questions Covered: 3.1, 3.2, 3.3</span>
              </div>
              <h1 class="mod-hero-title">كيف تحول الحديد والنحاس إلى عقل يفكر؟ (من كاوية اللحام إلى معمارية فون نيومان)</h1>
              <p class="mod-hero-subtitle">
                "قبل ما نكتب سطور كود بلغة C أو Python، الكمبيوتر كان عبارة عن أسلاك ولحامات ثابتة. في هذا الموديول هنكتشف إزاي جون فون نيومان حل أكبر كابوس في تاريخ الإلكترونيات واخترع فكرة السوفتوير، وإيه هي السجلات الستة (Registers) اللي بتمثل الدراعات الحقيقية للمعالج."
              </p>
              <div class="mod-obj-pills">
                <span class="mod-obj-pill">Hardwired vs Software</span>
                <span class="mod-obj-pill">The 3 von Neumann Concepts</span>
                <span class="mod-obj-pill">6 Core Registers</span>
                <span class="mod-obj-pill">Top-Level Bus Scheme</span>
                <span class="mod-obj-pill">Exam Traps &amp; Buzzwords</span>
              </div>
            </div>

            <!-- 01. الفكرة الأساسية من الصفر -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">01</span>
                <h2 class="exp-sec-title">الفكرة الأساسية من الصفر (من كاوية اللحام إلى معمارية فون نيومان)</h2>
              </div>

              <div class="balady-box">
                <div class="balady-label">💡 القصة بدأت إزاي؟ (تشبيه الغسالة وكاوية اللحام)</div>
                <p>
                  تخيل إنك اشتريت غسالة، بس الدائرة الإلكترونية اللي جواها متوصلة بأسلاك نحاس وبوابات منطقية ثابتة عشان <strong>تلف يمين بس!</strong> لو جيت تاني يوم قولت لها معلش عاوزك تلفي شمال، مفيش حل غير إنك تجيب كاوية لحام وتفك الأسلاك وتلحم دايرة جديدة خالص من الصفر!
                </p>
                <p style="margin-top: 0.6rem;">
                  ده بالظبط اللي كان بيحصل في أوائل الأربعينيات في حواسيب زي <strong>ENIAC</strong> قبل تطويرها؛ كان المهندسون يوصلون بوابات منطقية (<span class="mono">AND, OR, NOT</span>) ومفاتيح بأسلاك فيزيائية عشان يحلوا مسألة واحدة (زي حساب مسار قذيفة مدفعية). لو المسألة اتغيرت، الدايرة بتترمي ونقعد نلحم من أول وجديد!
                </p>
                <p style="margin-top: 0.6rem;">
                  لحد ما جه العالم العبقري <strong>جون فون نيومان (John von Neumann)</strong> وقال: <em>"ليه الغباء ده؟ إحنا نقسم الكمبيوتر لطبقتين عظيمتين"</em>:
                </p>
              </div>

              <div class="two-layers-split">
                <div class="layer-pill-card" style="border-top: 3px solid var(--accent-amber);">
                  <div class="mono" style="color: var(--accent-amber); font-weight: 800; font-size: 0.85rem; margin-bottom: 0.35rem;">
                    LAYER 01 // HARDWIRED PROGRAMMING
                  </div>
                  <p><strong>1. البرمجة بالعتاد الصلب:</strong> بوابات وأسلاك ملحومة على قد مسألة واحدة (Inflexible — غير مرن ومكلف جداً).</p>
                </div>

                <div class="layer-pill-card" style="border-top: 3px solid var(--accent-cyan);">
                  <div class="mono" style="color: var(--accent-cyan); font-weight: 800; font-size: 0.85rem; margin-bottom: 0.35rem;">
                    LAYER 02 // THE SOFTWARE APPROACH
                  </div>
                  <p><strong>2. حل البرمجيات المرنة:</strong> عتاد عام وثابت للأبد (<span class="mono">General-Purpose Hardware</span>) + شفرة أوامر وأرقام في الذاكرة (<span class="mono">Software</span>).</p>
                </div>
              </div>
            </section>

            <!-- 02. HARDWIRED vs. SOFTWARE ARCHITECTURE -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">02</span>
                <h2 class="exp-sec-title">HARDWIRED vs. SOFTWARE ARCHITECTURE (التعريفات والمقارنة الأساسية - سؤال الشيت 3.2)</h2>
              </div>

              <div class="comp-matrix-grid">
                <!-- Column 1: Hardwired Programming -->
                <div class="comp-card hardwired">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
                    <span class="layer-pill-tag" style="color: var(--accent-amber); font-weight:800;">1 // HARDWIRED PROGRAMMING</span>
                    <span class="mod-meta-badge amber" style="font-size:0.72rem;">سؤال الشيت 3.2</span>
                  </div>
                  <div style="font-weight: 800; font-size: 1.12rem; margin-bottom: 0.85rem; color: var(--text-primary);">
                    البرمجة بالعتاد الصلب (Hardwired Program)
                  </div>

                  <div class="en-def-box" style="margin-bottom: 1rem;">
                    <div class="en-def-label">Official English Definition (للامتحان)</div>
                    <p class="en-def-text" style="font-size: 0.92rem; line-height: 1.65; margin: 0;">
                      "The process of physically connecting and configuring a specific set of logic components, flip-flops, and wiring to perform a specific computational sequence. Any alteration in the computation requires physical rewiring and redesigning of the hardware circuits."
                    </p>
                  </div>

                  <div class="balady-box" style="margin-bottom: 1rem; border-right-color: var(--accent-amber);">
                    <div class="balady-label">📖 الشرح والتوضيح بالعامية</div>
                    <p style="margin: 0; line-height: 1.75; font-size: 0.94rem;">
                      البرنامج مش كود مكتوب، البرنامج عبارة عن أسلاك ولحامات حقيقية بين البوابات؛ يعني المنطق متجمد في النحاس والحديد!
                    </p>
                  </div>

                  <div class="exam-trap-box" style="margin: 0; padding: 0.85rem 1rem; border-color: rgba(244,63,94,0.3);">
                    <div style="font-weight: 800; color: var(--accent-rose); font-size: 0.88rem; margin-bottom: 0.4rem;">❌ Key Drawbacks (العيوب القاتلة للامتحان):</div>
                    <ul style="margin: 0; padding-right: 1.25rem; font-size: 0.88rem; line-height: 1.65; color: var(--text-secondary);">
                      <li><strong>Zero Flexibility (انعدام المرونة):</strong> العتاد مقيد بوظيفة واحدة فقط.</li>
                      <li><strong>High Cost &amp; Time:</strong> وقت مهول وضياع أموال في فك الأسلاك وإعادة اللحام.</li>
                    </ul>
                  </div>
                </div>

                <!-- Column 2: The Software Approach -->
                <div class="comp-card software">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
                    <span class="layer-pill-tag" style="color: var(--accent-cyan); font-weight:800;">2 // THE SOFTWARE APPROACH</span>
                    <span class="mod-meta-badge" style="font-size:0.72rem;">حل البرمجيات المرنة</span>
                  </div>
                  <div style="font-weight: 800; font-size: 1.12rem; margin-bottom: 0.85rem; color: var(--text-primary);">
                    حل البرمجيات المرنة (The Software Approach)
                  </div>

                  <div class="en-def-box" style="margin-bottom: 1rem;">
                    <div class="en-def-label">Official English Definition (للامتحان)</div>
                    <p class="en-def-text" style="font-size: 0.92rem; line-height: 1.65; margin: 0;">
                      "A computing paradigm where a general-purpose, fixed hardware configuration executes various tasks by accepting a sequence of coded instructions (software). It eliminates the need for physical modifications to run different programs."
                    </p>
                  </div>

                  <div class="balady-box" style="margin-bottom: 1rem; border-right-color: var(--accent-cyan);">
                    <div class="balady-label">📖 الشرح والتوضيح بالعامية</div>
                    <p style="margin: 0; line-height: 1.75; font-size: 0.94rem;">
                      الهاردوير بيفضل ثابت ومحدش بيلمس أسلاكه تاني! العتاد بيفهم لغة موحدة من شفرات ثنائية اسمها <strong>التعليمات (Instructions)</strong>. عاوز تغير البرنامج؟ متلمسش سلك! غير بس الأرقام المكتوبة في الرام.
                    </p>
                  </div>

                  <div class="exam-trap-box" style="margin: 0; padding: 0.85rem 1rem; border-color: rgba(6,182,212,0.3); background: rgba(6,182,212,0.05);">
                    <div style="font-weight: 800; color: var(--accent-cyan); font-size: 0.88rem; margin-bottom: 0.4rem;">⚙️ Core Structural Requirements (المكونات الأساسية المطلوبة جوه المعالج):</div>
                    <ol style="margin: 0; padding-right: 1.25rem; font-size: 0.88rem; line-height: 1.65; color: var(--text-secondary);">
                      <li><strong>Instruction Interpreter (Control Unit):</strong> يفك شفرة الأوامر ويولد إشارات التحكم.</li>
                      <li><strong>General-Purpose ALU:</strong> ينفذ العمليات الحسابية والمنطقية بناءً على إشارات التحكم.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>

            <!-- 03. THE 3 GOLDEN PILLARS OF VON NEUMANN -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">03</span>
                <h2 class="exp-sec-title">THE 3 GOLDEN PILLARS OF VON NEUMANN (مبادئ فون نيومان الثلاثة الذهبية - سؤال الشيت 3.1)</h2>
              </div>

              <div class="attr-grid" style="grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));">
                <!-- Card 1 -->
                <div class="attr-card" style="border-top: 3px solid var(--accent-cyan);">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
                    <span class="attr-term" style="color: var(--accent-cyan);">PILLAR 1 // الذاكرة المشتركة الموحدة</span>
                    <span class="mod-meta-badge" style="font-size:0.7rem;">Single Read-Write Memory</span>
                  </div>
                  <div class="en-def-box" style="padding: 0.8rem 1rem; margin: 0.5rem 0;">
                    <div class="en-def-label">Official English Concept</div>
                    <p class="en-def-text" style="font-size: 0.92rem; margin: 0;">
                      Data and instructions are stored in a <strong>single read-write memory</strong>.
                    </p>
                  </div>
                  <div class="balady-box" style="margin: 0; padding: 0.85rem 1rem;">
                    <div class="balady-label">💡 الشرح بالعامية المصرية</div>
                    <p style="font-size: 0.92rem; margin: 0; line-height: 1.7;">
                      "زمان كان في أفكار تفصل مكان تخزين الأوامر عن مكان الأرقام عتادياً. فون نيومان قال: لأ، الاتنين في النهاية أصفار ووحايد (Bits)! نخزن سطور الكود والأرقام مع بعض في نفس الذاكرة العشوائية (RAM) اللي بنقدر نقرأ منها ونكتب فيها."
                    </p>
                  </div>
                </div>

                <!-- Card 2 -->
                <div class="attr-card" style="border-top: 3px solid var(--accent-amber);">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
                    <span class="attr-term" style="color: var(--accent-amber);">PILLAR 2 // العنونة المكانية وليست النوعية</span>
                    <span class="mod-meta-badge amber" style="font-size:0.7rem;">Location-Based Addressing</span>
                  </div>
                  <div class="en-def-box" style="padding: 0.8rem 1rem; margin: 0.5rem 0;">
                    <div class="en-def-label">Official English Concept</div>
                    <p class="en-def-text" style="font-size: 0.92rem; margin: 0;">
                      The contents of this memory are <strong>addressable by location</strong>, without regard to the type of data contained at that location.
                    </p>
                  </div>
                  <div class="balady-box" style="margin: 0; padding: 0.85rem 1rem;">
                    <div class="balady-label">💡 الشرح بالعامية المصرية</div>
                    <p style="font-size: 0.92rem; margin: 0; line-height: 1.7;">
                      "الذاكرة عاملة زي صندوق بوستة فيه أدراج مرقمة (العنوان 0، 1، 2، 3.. إلخ). لما المعالج يطلب يقرأ من الخانة رقم 50، هو بينفذ قراءة على 'المكان'، والذاكرة ملهاش أي دعوة ولا تعرف الخانة دي جواها كود أمر، ولا رقم عشري، ولا حرف تكست!"
                    </p>
                  </div>
                </div>

                <!-- Card 3 -->
                <div class="attr-card" style="border-top: 3px solid var(--accent-emerald);">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
                    <span class="attr-term" style="color: var(--accent-emerald);">PILLAR 3 // التنفيذ التتابعي الصارم</span>
                    <span class="mod-meta-badge emerald" style="font-size:0.7rem;">Sequential Execution</span>
                  </div>
                  <div class="en-def-box" style="padding: 0.8rem 1rem; margin: 0.5rem 0;">
                    <div class="en-def-label">Official English Concept</div>
                    <p class="en-def-text" style="font-size: 0.92rem; margin: 0;">
                      Execution occurs in a <strong>sequential fashion</strong> (from one instruction to the next) unless an explicit modification (branch/jump) is encountered.
                    </p>
                  </div>
                  <div class="balady-box" style="margin: 0; padding: 0.85rem 1rem;">
                    <div class="balady-label">💡 الشرح بالعامية المصرية</div>
                    <p style="font-size: 0.92rem; margin: 0; line-height: 1.7;">
                      "المعالج بيمشي ورا عداد البرنامج سطر بسطر بالترتيب: يخلص التعليمة 100 يروح تلقائياً لـ 101، بعدها 102.. الحالة الوحيدة اللي تخليه ينط هي لما يلاقي أمر قفز صريح زي <code>JUMP</code> أو <code>BRANCH</code>."
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <!-- 04. TOP-LEVEL ARCHITECTURE & THE 6 CORE REGISTERS -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">04</span>
                <h2 class="exp-sec-title">TOP-LEVEL ARCHITECTURE &amp; THE 6 CORE REGISTERS (مخططات سلايد 4 وسلايد 7 والدراعات الستة للمعالج)</h2>
              </div>

              <!-- Interactive Simulator 1: Figure 3.1b -->
              <div class="sim-card" data-sim="sim-ch3-software-exec">
                <div class="sim-top-bar">
                  <div class="sim-title-group">
                    <span class="sim-live-dot"></span>
                    <span class="sim-badge-title">FIG 3.1b // SOFTWARE EXECUTION SCHEMATIC (SLIDE 4)</span>
                  </div>
                  <div class="sim-controls">
                    <button type="button" class="sim-step-btn active" data-sim-step="0">1. دخول كود التعليمة (Instruction Codes)</button>
                    <button type="button" class="sim-step-btn" data-sim-step="1">2. إشارات التحكم (Control Signals)</button>
                    <button type="button" class="sim-step-btn" data-sim-step="2">3. حساب البيانات وإخراج الناتج (ALU Data In/Out)</button>
                    <button type="button" class="sim-step-btn play-auto" data-sim-autoplay>▶ تشغيل الخطوات بالتتابع</button>
                  </div>
                </div>

                <div class="sim-svg-stage">
                  <svg class="sim-svg" viewBox="0 0 880 375" xmlns="http://www.w3.org/2000/svg" dir="ltr">
                    <rect x="16" y="10" width="848" height="355" rx="14" fill="var(--bg-surface)" fill-opacity="0.45" stroke="var(--border-strong)" stroke-dasharray="6 4" stroke-width="1.5" />
                    <path class="wire-base" d="M 440 76 L 440 116" />
                    <path class="wire-base" d="M 440 198 L 440 250" />
                    <path class="wire-base" d="M 162 292 L 200 292" />
                    <path class="wire-base" d="M 680 292 L 718 292" />

                    <path class="wire-flow amber active-flow" data-wire-step="0" d="M 440 76 L 440 116" />
                    <path class="wire-flow amber" data-wire-step="1" d="M 440 198 L 440 250" />
                    <path class="wire-flow emerald" data-wire-step="2" d="M 162 292 L 200 292" />
                    <path class="wire-flow cyan" data-wire-step="2" d="M 680 292 L 718 292" />

                    <circle class="data-packet-dot moving" data-packet-step="0" r="6" fill="#f59e0b">
                      <animateMotion dur="0.85s" repeatCount="indefinite" path="M 440 76 L 440 116" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="1" r="6" fill="#f59e0b">
                      <animateMotion dur="0.85s" repeatCount="indefinite" path="M 440 198 L 440 250" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="2" r="6" fill="#10b981">
                      <animateMotion dur="1.4s" repeatCount="indefinite" path="M 162 292 L 718 292" />
                    </circle>

                    <g class="svg-hw-group amber-node active-node" data-node-step="0" data-click-step="0">
                      <rect class="svg-hw-box" x="240" y="20" width="400" height="56" rx="10" />
                      <text class="svg-label-en" x="440" y="44" style="fill: var(--accent-amber);">[ INSTRUCTION CODES ]</text>
                      <text class="svg-label-ar" x="440" y="65">(أكواد التعليمات البرمجية داخلة من الذاكرة)</text>
                    </g>

                    <g class="svg-hw-group amber-node active-node" data-node-step="0,1" data-click-step="1">
                      <rect class="svg-hw-box" x="200" y="116" width="480" height="82" rx="12" />
                      <text class="svg-label-en" x="440" y="143" style="fill: var(--accent-amber); font-size: 15px;">INSTRUCTION INTERPRETER (Control Unit)</text>
                      <text class="svg-label-ar" x="440" y="166">وحدة التحكم تفك شفرة التعليمة وتصدر إشارات التشغيل</text>
                      <text class="svg-label-mono" x="440" y="186" style="fill: var(--accent-cyan);">1. Instruction Path (مسار الأوامر فوق)</text>
                    </g>

                    <g class="svg-hw-group cyan-node" data-node-step="1,2" data-click-step="2">
                      <rect class="svg-hw-box" x="200" y="250" width="480" height="84" rx="12" />
                      <text class="svg-label-en" x="440" y="276" style="fill: var(--accent-cyan); font-size: 14.5px;">GENERAL-PURPOSE ARITHMETIC &amp; LOGIC UNIT (ALU)</text>
                      <text class="svg-label-ar" x="440" y="300">تنفذ عمليات الجمع والطرح والمنطق بناءً على إشارة التحكم</text>
                      <text class="svg-label-mono" x="440" y="321" style="fill: var(--accent-emerald);">2. Data Path (مسار البيانات تحت)</text>
                    </g>

                    <g class="svg-hw-group emerald-node" data-node-step="2" data-click-step="2">
                      <rect class="svg-hw-box" x="28" y="256" width="134" height="72" rx="10" />
                      <text class="svg-label-en" x="95" y="285" style="fill: var(--accent-emerald);">DATA IN ──►</text>
                      <text class="svg-label-ar" x="95" y="309">البيانات الداخلة</text>
                    </g>

                    <g class="svg-hw-group cyan-node" data-node-step="2" data-click-step="2">
                      <rect class="svg-hw-box" x="718" y="256" width="134" height="72" rx="10" />
                      <text class="svg-label-en" x="785" y="285" style="fill: var(--accent-cyan);">──► DATA OUT</text>
                      <text class="svg-label-ar" x="785" y="309">الناتج النهائي</text>
                    </g>

                    <g class="svg-wire-callout active-pill" data-pill-step="0" data-click-step="0">
                      <rect class="svg-wire-pill" x="456" y="79" width="220" height="28" />
                      <text class="svg-wire-text" x="566" y="97">1. دخول كود الأمر للـ Interpreter</text>
                    </g>
                    <g class="svg-wire-callout" data-pill-step="1" data-click-step="1">
                      <rect class="svg-wire-pill" x="456" y="209" width="245" height="28" />
                      <text class="svg-wire-text" x="578" y="227">2. Control Signals (إشارات تحكم)</text>
                    </g>
                    <g class="svg-wire-callout" data-pill-step="2" data-click-step="2">
                      <rect class="svg-wire-pill" x="300" y="338" width="280" height="24" />
                      <text class="svg-wire-text" x="440" y="354">3. Data In ──► حساب الـ ALU ──► Data Out</text>
                    </g>
                  </svg>
                </div>

                <div class="sim-status-ticker"></div>
              </div>

              <!-- Schematic ASCII Display -->
              <div class="blueprint-ascii-card">
                <div class="blueprint-ascii-header">
                  <span>[Figure 3.1b: Software-Driven Execution Flow - سلايد 4]</span>
                  <span>FLOW SCHEMATIC</span>
                </div>
                <pre class="blueprint-ascii-pre" dir="ltr">
      [Instruction Codes from Memory] (أكواد الأوامر المشفرة من الرامات)
                     |
                     v
     +-------------------------------------------------------------+
     |                 INSTRUCTION INTERPRETER                     |
     |                      (Control Unit)                         | &lt;--- وحدة فك الشفرة والتحكم
     +------------------------------+------------------------------+
                                    |
                                    | Control Signals (إشارات تحكم كهربية)
                                    v
     +-------------------------------------------------------------+
     |                  GENERAL-PURPOSE ARITHMETIC                 |
     |                     AND LOGIC UNIT (ALU)                    | &lt;--- وحدة حساب ومنطق عامة
     +---------------+-----------------------------+---------------+
                     ^                             |
      Data In        |                             | Data Out
   ------------------+                             +------------------&gt;
   (البيانات الداخلة من الرام)                   (الناتج بعد العملية)</pre>
              </div>

              <!-- Interactive Simulator 2: Figure 3.2 Top-Level Components -->
              <div class="sim-card" data-sim="sim-ch3-toplevel-regs" style="margin-top: 1.5rem;">
                <div class="sim-top-bar">
                  <div class="sim-title-group">
                    <span class="sim-live-dot"></span>
                    <span class="sim-badge-title">FIG 3.2 // TOP-LEVEL COMPUTER COMPONENTS &amp; 6 REGISTERS (SLIDE 7)</span>
                  </div>
                  <div class="sim-controls">
                    <button type="button" class="sim-step-btn active" data-sim-step="0">1. سجلات وخطوط العناوين (PC, MAR, I/O AR)</button>
                    <button type="button" class="sim-step-btn" data-sim-step="1">2. سجلات وخطوط البيانات (MBR, I/O BR, IR)</button>
                    <button type="button" class="sim-step-btn" data-sim-step="2">3. التحكم والـ ALU والأجهزة الخارجية (CU, ALU &amp; I/O)</button>
                    <button type="button" class="sim-step-btn play-auto" data-sim-autoplay>▶ تشغيل الخطوات بالتتابع</button>
                  </div>
                </div>

                <div class="sim-svg-stage">
                  <svg class="sim-svg" viewBox="0 0 920 560" xmlns="http://www.w3.org/2000/svg" dir="ltr">
                    <rect x="20" y="12" width="880" height="252" rx="14" fill="var(--bg-surface)" fill-opacity="0.55" stroke="var(--accent-cyan)" stroke-width="2" />
                    <text class="svg-label-en" x="460" y="36" style="fill: var(--accent-cyan); font-size: 14px;">CENTRAL PROCESSING UNIT (CPU) — وحدة المعالجة المركزية والسجلات الستة</text>

                    <path class="wire-base" d="M 167 104 L 167 120" />
                    <path class="wire-base" d="M 167 248 L 167 292" />
                    <path class="wire-base" d="M 167 344 L 167 380" />
                    <path class="wire-base" d="M 320 380 L 320 344" />
                    <path class="wire-base" d="M 753 292 L 753 248" />
                    <path class="wire-base" d="M 753 120 L 753 104" />
                    <path class="wire-base" d="M 753 344 L 753 380" />
                    <path class="wire-base" d="M 628 77 L 590 77" />
                    <path class="wire-base" d="M 460 144 L 460 160" />
                    <path class="wire-base" d="M 628 150 L 590 190" />
                    <path class="wire-base" d="M 460 248 L 460 292" />
                    <path class="wire-base" d="M 580 344 L 580 380" />
                    <path class="wire-base" d="M 690 484 L 690 502" />

                    <path class="wire-flow amber active-flow" data-wire-step="0" d="M 167 104 L 167 120" />
                    <path class="wire-flow amber active-flow" data-wire-step="0" d="M 167 248 L 167 292" />
                    <path class="wire-flow amber active-flow" data-wire-step="0" d="M 167 344 L 167 380" />
                    <path class="wire-flow cyan" data-wire-step="1" d="M 320 380 L 320 344" />
                    <path class="wire-flow cyan" data-wire-step="1" d="M 753 292 L 753 248" />
                    <path class="wire-flow cyan" data-wire-step="1" d="M 753 120 L 753 104" />
                    <path class="wire-flow emerald" data-wire-step="1,2" d="M 753 344 L 753 380" />
                    <path class="wire-flow amber" data-wire-step="2" d="M 628 77 L 590 77" />
                    <path class="wire-flow amber" data-wire-step="2" d="M 460 144 L 460 160" />
                    <path class="wire-flow cyan" data-wire-step="2" d="M 628 150 L 590 190" />
                    <path class="wire-flow amber" data-wire-step="2" d="M 460 248 L 460 292" />
                    <path class="wire-flow emerald" data-wire-step="2" d="M 580 344 L 580 380" />
                    <path class="wire-flow emerald" data-wire-step="2" d="M 690 484 L 690 502" />

                    <circle class="data-packet-dot moving" data-packet-step="0" r="6" fill="#f59e0b">
                      <animateMotion dur="1.5s" repeatCount="indefinite" path="M 167 104 L 167 380" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="1" r="6" fill="#06b6d4">
                      <animateMotion dur="1.5s" repeatCount="indefinite" path="M 320 380 L 320 318 L 753 318 L 753 104" />
                    </circle>
                    <circle class="data-packet-dot" data-packet-step="2" r="6" fill="#10b981">
                      <animateMotion dur="1.6s" repeatCount="indefinite" path="M 460 144 L 460 318 L 690 318 L 690 502" />
                    </circle>

                    <g class="svg-hw-group amber-node active-node" data-node-step="0" data-click-step="0">
                      <rect class="svg-hw-box" x="42" y="48" width="250" height="56" rx="8" />
                      <text class="svg-label-en" x="167" y="72" style="fill: var(--accent-amber);">PC (Program Counter)</text>
                      <text class="svg-label-ar" x="167" y="94">[شايل عنوان التعليمة الجاية]</text>
                    </g>

                    <g class="svg-hw-group amber-node active-node" data-node-step="0" data-click-step="0">
                      <rect class="svg-hw-box" x="42" y="120" width="250" height="56" rx="8" />
                      <text class="svg-label-en" x="167" y="144" style="fill: var(--accent-amber);">MAR (Memory Address Reg)</text>
                      <text class="svg-label-ar" x="167" y="166">[شايل عنوان خانة الرام — Address Bus]</text>
                    </g>

                    <g class="svg-hw-group amber-node active-node" data-node-step="0" data-click-step="0">
                      <rect class="svg-hw-box" x="42" y="192" width="250" height="56" rx="8" />
                      <text class="svg-label-en" x="167" y="216" style="fill: var(--accent-amber);">I/O AR (I/O Address Reg)</text>
                      <text class="svg-label-ar" x="167" y="238">[شايل عنوان منفذ الـ I/O — Address Bus]</text>
                    </g>

                    <g class="svg-hw-group amber-node" data-node-step="2" data-click-step="2">
                      <rect class="svg-hw-box" x="330" y="48" width="260" height="96" rx="10" />
                      <text class="svg-label-en" x="460" y="76" style="fill: var(--accent-amber);">CONTROL UNIT / TIMING</text>
                      <text class="svg-label-ar" x="460" y="100">(وحدة التحكم والمؤقت)</text>
                      <text class="svg-label-mono" x="460" y="124" style="fill: var(--text-muted);">Decodes IR &amp; Issues Control Signals</text>
                    </g>

                    <g class="svg-hw-group cyan-node" data-node-step="2" data-click-step="2">
                      <rect class="svg-hw-box" x="330" y="160" width="260" height="88" rx="10" />
                      <text class="svg-label-en" x="460" y="188" style="fill: var(--accent-cyan);">ALU &amp; TEMP EXECUTION</text>
                      <text class="svg-label-ar" x="460" y="212">(وحدة الحساب والمنطق والتنفيذ)</text>
                      <text class="svg-label-mono" x="460" y="234" style="fill: var(--text-muted);">Executes Arithmetic &amp; Logic</text>
                    </g>

                    <g class="svg-hw-group cyan-node" data-node-step="1,2" data-click-step="1">
                      <rect class="svg-hw-box" x="628" y="48" width="250" height="56" rx="8" />
                      <text class="svg-label-en" x="753" y="72" style="fill: var(--accent-cyan);">IR (Instruction Register)</text>
                      <text class="svg-label-ar" x="753" y="94">[شايل كود الأمر الشغال حالياً]</text>
                    </g>

                    <g class="svg-hw-group cyan-node" data-node-step="1" data-click-step="1">
                      <rect class="svg-hw-box" x="628" y="120" width="250" height="56" rx="8" />
                      <text class="svg-label-en" x="753" y="144" style="fill: var(--accent-cyan);">MBR (Memory Buffer Reg)</text>
                      <text class="svg-label-ar" x="753" y="166">[صندوق أمانات الداتا — Data Bus]</text>
                    </g>

                    <g class="svg-hw-group emerald-node" data-node-step="1,2" data-click-step="1">
                      <rect class="svg-hw-box" x="628" y="192" width="250" height="56" rx="8" />
                      <text class="svg-label-en" x="753" y="216" style="fill: var(--accent-emerald);">I/O BR (I/O Buffer Reg)</text>
                      <text class="svg-label-ar" x="753" y="238">[صندوق داتا الـ I/O — Data Bus]</text>
                    </g>

                    <g class="svg-hw-group amber-node active-node" data-node-step="0,1,2" data-click-step="0">
                      <rect class="svg-hw-box" x="20" y="292" width="880" height="52" rx="10" />
                      <text class="svg-label-en" x="460" y="314" style="fill: var(--accent-amber);">SYSTEM BUS (ناقل النظام العام)</text>
                      <text class="svg-label-mono" x="460" y="334" style="fill: var(--text-primary);">Address Bus (خطوط العناوين) &nbsp;|&nbsp; Data Bus (خطوط البيانات) &nbsp;|&nbsp; Control Bus (خطوط التحكم)</text>
                    </g>

                    <g class="svg-hw-group cyan-node active-node" data-node-step="0,1" data-click-step="1">
                      <rect class="svg-hw-box" x="20" y="380" width="420" height="168" rx="12" />
                      <text class="svg-label-en" x="230" y="405" style="fill: var(--accent-cyan);">MAIN MEMORY (الذاكرة الرئيسية المرقمة)</text>
                      <rect x="44" y="416" width="372" height="24" rx="5" fill="var(--bg-primary)" stroke="var(--border-strong)" />
                      <text class="svg-label-mono" x="230" y="432" style="fill: var(--text-primary);">Address 0 : &nbsp;[ Word 0 — Instruction / Data ]</text>
                      <rect x="44" y="445" width="372" height="24" rx="5" fill="var(--bg-primary)" stroke="var(--border-strong)" />
                      <text class="svg-label-mono" x="230" y="461" style="fill: var(--text-primary);">Address 1 : &nbsp;[ Word 1 — Instruction / Data ]</text>
                      <rect x="44" y="474" width="372" height="24" rx="5" fill="var(--bg-primary)" stroke="var(--border-strong)" />
                      <text class="svg-label-mono" x="230" y="490" style="fill: var(--text-primary);">Address 2 : &nbsp;[ Word 2 — Instruction / Data ]</text>
                      <rect x="44" y="503" width="372" height="24" rx="5" fill="var(--bg-primary)" stroke="var(--accent-amber)" />
                      <text class="svg-label-mono" x="230" y="519" style="fill: var(--accent-amber);">Address N-1 : [ Word N-1 ]</text>
                      <text class="svg-label-ar" x="230" y="541" style="font-size: 11px;">(خانات مرقمة تشيل الأوامر والبيانات معاً — von Neumann)</text>
                    </g>

                    <g class="svg-hw-group emerald-node" data-node-step="0,1,2" data-click-step="2">
                      <rect class="svg-hw-box" x="480" y="380" width="420" height="104" rx="12" />
                      <text class="svg-label-en" x="690" y="405" style="fill: var(--accent-emerald);">I/O MODULE (وحدة الإدخال والإخراج)</text>
                      <rect x="504" y="416" width="372" height="26" rx="5" fill="var(--bg-primary)" stroke="var(--accent-emerald)" />
                      <text class="svg-label-mono" x="690" y="433" style="fill: var(--text-primary);">Port / Device Buffers (حوافظ بيانات المنافذ)</text>
                      <rect x="504" y="448" width="372" height="26" rx="5" fill="var(--bg-primary)" stroke="var(--accent-amber)" />
                      <text class="svg-label-mono" x="690" y="465" style="fill: var(--accent-amber);">Status &amp; Control Logic (دوائر الحالة والتحكم)</text>
                    </g>

                    <g class="svg-hw-group amber-node" data-node-step="2" data-click-step="2">
                      <rect class="svg-hw-box" x="480" y="502" width="420" height="46" rx="10" />
                      <text class="svg-label-en" x="690" y="523" style="fill: var(--accent-amber);">EXTERNAL PERIPHERALS [ Keyboards, Disks, Displays ]</text>
                      <text class="svg-label-ar" x="690" y="541" style="font-size: 11px;">(الأجهزة الطرفية الخارجية: كيبورد، شاشات، أقراص)</text>
                    </g>

                    <g class="svg-wire-callout active-pill" data-pill-step="0" data-click-step="0">
                      <rect class="svg-wire-pill" x="30" y="260" width="275" height="26" />
                      <text class="svg-wire-text" x="167" y="277">1. Address Bus ◄── MAR &amp; I/O AR</text>
                    </g>
                    <g class="svg-wire-callout" data-pill-step="1" data-click-step="1">
                      <rect class="svg-wire-pill" x="615" y="260" width="275" height="26" />
                      <text class="svg-wire-text" x="752" y="277">2. Data Bus ◄──► MBR &amp; I/O BR</text>
                    </g>
                    <g class="svg-wire-callout" data-pill-step="2" data-click-step="2">
                      <rect class="svg-wire-pill" x="330" y="260" width="260" height="26" />
                      <text class="svg-wire-text" x="460" y="277">3. Control Signals &amp; ALU Execution</text>
                    </g>
                  </svg>
                </div>

                <div class="sim-status-ticker"></div>
              </div>

              <!-- Top-Level Architecture ASCII Blueprint Card -->
              <div class="blueprint-ascii-card">
                <div class="blueprint-ascii-header">
                  <span>[Figure 3.2: Top-Level Computer Architecture - سلايد 7]</span>
                  <span>SYSTEM ARCHITECTURE DIAGRAM</span>
                </div>
                <pre class="blueprint-ascii-pre" dir="ltr">
  +--------------------------------------------------------------------------------------+
  |                            CENTRAL PROCESSING UNIT (CPU)                             |
  |                                                                                      |
  |   +-----------------------+                    +-----------------------+             |
  |   | PC (Program Counter)  |                    | IR (Instruction Reg)  |             |
  |   | [شايل عنوان الأمر الجاي]|                  | [شايل كود الأمر الشغال]|             |
  |   +-----------+-----------+                    +-----------+-----------+             |
  |               |                                            |                         |
  |   +-----------v-----------+                    +-----------v-----------+             |
  |   | MAR (Mem Address Reg) |                    | MBR (Mem Buffer Reg)  |             |
  |   | [شايل عنوان خانة الرام] |                  | [صندوق أمانات الداتا] |             |
  |   +-----------+-----------+                    +-----------+-----------+             |
  |               |                                            |                         |
  |   +-----------v-----------+                    +-----------v-----------+             |
  |   | I/O AR (I/O Addr Reg) |                    | I/O BR (I/O Buff Reg) |             |
  |   | [شايل عنوان منفذ الـIO]|                   | [صندوق داتا الـ IO]   |             |
  |   +-----------+-----------+                    +-----------+-----------+             |
  |               |                                            |                         |
  |               v                                            v                         |
  |   +-----------------------+                    +-----------------------+             |
  |   | Control Unit / Timing |                    | ALU &amp; Execution Logic |             |
  |   | (وحدة التحكم والمؤقت) |                    | (وحدة الحساب والتنفيذ)|             |
  |   +-----------------------+                    +-----------------------+             |
  +---------------|--------------------------------------------|-------------------------+
                  | Address Lines (خطوط العناوين)              | Data Lines (خطوط البيانات)
                  |                                            |
                  +====================+=======================+
                                       |
                                       v System Bus (ناقل النظام العام)
                  +====================+=======================+
                  | Address Lines      | Data Lines            | Control Lines
                  |                    |                       |
  +---------------v--------------------v---+   +---------------v-----------------------+
  |              MAIN MEMORY               |   |              I/O MODULE               |
  |               (الذاكرة)                |   |        (وحدة الإدخال والإخراج)        |
  |  Address:                              |   |                                       |
  |    0    [ Word 0                     ] |   |  +---------------------------------+  |
  |    1    [ Word 1                     ] |   |  | Port / Device Data Buffers      |  |
  |    2    [ Word 2                     ] |   |  | (حوافظ بيانات الأجهزة الخارجية) |  |
  |   ...   [ ...                        ] |   |  +---------------------------------+  |
  |   N-1   [ Word N-1                   ] |   |  | Status &amp; Control Logic          |  |
  |         (مصفوفة خانات الذاكرة)         |   |  | (دوائر الحالة والتحكم)          |  |
  +----------------------------------------+   |  +---------------------------------+  |
                                               |                   |                   |
                                               +-------------------|-------------------+
                                                                   | External Interface
                                                                   v
                                                       [ Keyboards, Disks, Displays ]
                                                       (كيبورد، شاشات، أقراص تخزين)</pre>
              </div>

              <!-- 6 Core Registers Deck Grid -->
              <h3 style="font-size: 1.15rem; font-weight: 800; margin: 1.75rem 0 0.85rem; color: var(--accent-amber);">
                📌 تفصيل السجلات الستة الأساسية (Core CPU Registers — سؤال الشيت 3.3)
              </h3>

              <div class="reg-deck-grid">
                <!-- 1. PC -->
                <div class="reg-deck-card">
                  <div class="reg-deck-card-header">
                    <span class="reg-badge-abbr">PC</span>
                    <span class="reg-bus-tag address">Address Bus / Connected to MAR</span>
                  </div>
                  <div class="reg-full-name">Program Counter (عداد البرنامج)</div>
                  <div class="en-def-box" style="padding: 0.75rem 0.95rem; margin-bottom: 0.75rem;">
                    <div class="en-def-label">Official English Role</div>
                    <p class="en-def-text" style="font-size: 0.88rem; margin: 0;">
                      Holds the memory address of the next instruction to be fetched from memory.
                    </p>
                  </div>
                  <div class="balady-box" style="margin: 0; padding: 0.85rem 1rem;">
                    <div class="balady-label">💡 الشرح بالعامية المصرية</div>
                    <p style="font-size: 0.9rem; margin: 0; line-height: 1.65;">
                      "البوصلة بتاعة المعالج؛ دايمًا عينه عليها عشان يعرف هو رايح فين في الخطوة الجاية. أول ما بنسحب الأمر، الـ PC بيزيد تلقائياً بواحد عشان يجهز للأمر اللي بعده."
                    </p>
                  </div>
                </div>

                <!-- 2. IR -->
                <div class="reg-deck-card">
                  <div class="reg-deck-card-header">
                    <span class="reg-badge-abbr cyan">IR</span>
                    <span class="reg-bus-tag data">Data Bus / Connected to MBR</span>
                  </div>
                  <div class="reg-full-name">Instruction Register (سجل التعليمة)</div>
                  <div class="en-def-box" style="padding: 0.75rem 0.95rem; margin-bottom: 0.75rem;">
                    <div class="en-def-label">Official English Role</div>
                    <p class="en-def-text" style="font-size: 0.88rem; margin: 0;">
                      Holds the binary instruction word currently being decoded and executed by the control unit.
                    </p>
                  </div>
                  <div class="balady-box" style="margin: 0; padding: 0.85rem 1rem;">
                    <div class="balady-label">💡 الشرح بالعامية المصرية</div>
                    <p style="font-size: 0.9rem; margin: 0; line-height: 1.65;">
                      "الصندوق اللي بنحط فيه التعليمة اللي شغالة حالياً؛ وحدة التحكم بتقف قدام الـ IR ده تفك شفرته وتعرف المعالج هيعمل إيه بالظبط."
                    </p>
                  </div>
                </div>

                <!-- 3. MAR -->
                <div class="reg-deck-card">
                  <div class="reg-deck-card-header">
                    <span class="reg-badge-abbr">MAR</span>
                    <span class="reg-bus-tag address">Address Bus (ناقل العناوين)</span>
                  </div>
                  <div class="reg-full-name">Memory Address Register (سجل عنوان الذاكرة)</div>
                  <div class="en-def-box" style="padding: 0.75rem 0.95rem; margin-bottom: 0.75rem;">
                    <div class="en-def-label">Official English Role</div>
                    <p class="en-def-text" style="font-size: 0.88rem; margin: 0;">
                      Specifies the physical memory address for an upcoming memory read or write operation.
                    </p>
                  </div>
                  <div class="balady-box" style="margin: 0; padding: 0.85rem 1rem;">
                    <div class="balady-label">💡 الشرح بالعامية المصرية</div>
                    <p style="font-size: 0.9rem; margin: 0; line-height: 1.65;">
                      "سجل العنوان؛ متوصل مباشرة بأسلاك العناوين في الرامات. المعالج بيحط فيه رقم الخانة اللي عاوز يزورها في الذاكرة عشان يقرأ أو يكتب."
                    </p>
                  </div>
                </div>

                <!-- 4. MBR -->
                <div class="reg-deck-card">
                  <div class="reg-deck-card-header">
                    <span class="reg-badge-abbr cyan">MBR</span>
                    <span class="reg-bus-tag data">Data Bus (ناقل البيانات)</span>
                  </div>
                  <div class="reg-full-name">Memory Buffer Register (سجل حاجز الذاكرة)</div>
                  <div class="en-def-box" style="padding: 0.75rem 0.95rem; margin-bottom: 0.75rem;">
                    <div class="en-def-label">Official English Role</div>
                    <p class="en-def-text" style="font-size: 0.88rem; margin: 0;">
                      Holds the data word read from memory or the data word ready to be written into memory.
                    </p>
                  </div>
                  <div class="balady-box" style="margin: 0; padding: 0.85rem 1rem;">
                    <div class="balady-label">💡 الشرح بالعامية المصرية</div>
                    <p style="font-size: 0.9rem; margin: 0; line-height: 1.65;">
                      "صندوق أمانات وبريد الذاكرة؛ متوصل بأسلاك البيانات. أي داتا أو كود تعليمة طالع من الرام أو داخل للرام لازم يقف في الـ MBR ده الأول."
                    </p>
                  </div>
                </div>

                <!-- 5. I/O AR -->
                <div class="reg-deck-card">
                  <div class="reg-deck-card-header">
                    <span class="reg-badge-abbr emerald">I/O AR</span>
                    <span class="reg-bus-tag address">Address Bus (ناقل العناوين)</span>
                  </div>
                  <div class="reg-full-name">Input/Output Address Register (سجل عنوان منافذ الـ IO)</div>
                  <div class="en-def-box" style="padding: 0.75rem 0.95rem; margin-bottom: 0.75rem;">
                    <div class="en-def-label">Official English Role</div>
                    <p class="en-def-text" style="font-size: 0.88rem; margin: 0;">
                      Specifies the unique address or port of the external I/O peripheral device being accessed.
                    </p>
                  </div>
                  <div class="balady-box" style="margin: 0; padding: 0.85rem 1rem;">
                    <div class="balady-label">💡 الشرح بالعامية المصرية</div>
                    <p style="font-size: 0.9rem; margin: 0; line-height: 1.65;">
                      "سجل عنوان أجهزة الإدخال والإخراج؛ بيحدد رقم المنفذ أو عنوان الجهاز الخارجي المطلوب التخاطب معه (زي منفذ الشاشة أو الهارد)."
                    </p>
                  </div>
                </div>

                <!-- 6. I/O BR -->
                <div class="reg-deck-card">
                  <div class="reg-deck-card-header">
                    <span class="reg-badge-abbr emerald">I/O BR</span>
                    <span class="reg-bus-tag data">Data Bus (ناقل البيانات)</span>
                  </div>
                  <div class="reg-full-name">Input/Output Buffer Register (سجل حاجز بيانات الـ IO)</div>
                  <div class="en-def-box" style="padding: 0.75rem 0.95rem; margin-bottom: 0.75rem;">
                    <div class="en-def-label">Official English Role</div>
                    <p class="en-def-text" style="font-size: 0.88rem; margin: 0;">
                      Serves as a temporary data buffer for data exchanged between an I/O module and the processor.
                    </p>
                  </div>
                  <div class="balady-box" style="margin: 0; padding: 0.85rem 1rem;">
                    <div class="balady-label">💡 الشرح بالعامية المصرية</div>
                    <p style="font-size: 0.9rem; margin: 0; line-height: 1.65;">
                      "صندوق داتا أجهزة الإدخال والإخراج؛ بيشيل البيانات اللي بتتنقل رايحة أو جاية بين المعالج وجهاز الـ I/O."
                    </p>
                  </div>
                </div>
              </div>

              <!-- Exam Traps Box -->
              <div class="exam-trap-box" style="margin-top: 1.5rem;">
                <div class="exam-trap-title">⚠️ أخطر 3 مصائد في امتحانات الـ MCQs للسجلات ونواقل النظام</div>
                <ul class="exam-trap-list">
                  <li>
                    <strong>1. مين شايل عنوان ومين شايل داتا؟ (Address Bus vs. Data Bus):</strong><br/>
                    • <strong>خطوط العناوين (<span class="mono" style="color:var(--accent-amber);">Address Bus</span>):</strong> <code class="mono">PC</code>, <code class="mono">MAR</code>, <code class="mono">I/O AR</code>.<br/>
                    • <strong>خطوط البيانات (<span class="mono" style="color:var(--accent-cyan);">Data Bus</span>):</strong> <code class="mono">IR</code>, <code class="mono">MBR</code>, <code class="mono">I/O BR</code>.
                  </li>
                  <li>
                    <strong>2. الفرق القاتل بين PC و IR:</strong><br/>
                    • لو شفت: <em>"Holds the address of the <strong>NEXT</strong> instruction"</em> ===&gt; تختار فوراً <strong class="mono" style="color:var(--accent-amber);">PC (Program Counter)</strong>.<br/>
                    • لو شفت: <em>"Holds the instruction <strong>CURRENTLY</strong> being executed"</em> ===&gt; تختار فوراً <strong class="mono" style="color:var(--accent-cyan);">IR (Instruction Register)</strong>.
                  </li>
                  <li>
                    <strong>3. الفرق بين MAR و MBR:</strong><br/>
                    • لو شفت: <em>"Specifies the <strong>address</strong> in memory"</em> ===&gt; تختار فوراً <strong class="mono" style="color:var(--accent-amber);">MAR</strong>.<br/>
                    • لو شفت: <em>"Contains <strong>data</strong> to be written into memory or read from memory"</em> ===&gt; تختار فوراً <strong class="mono" style="color:var(--accent-cyan);">MBR</strong>.
                  </li>
                </ul>
              </div>
            </section>

            <!-- 05. INSTANT EXAM BUZZWORDS (كلمات السر لحل أسئلة الـ MCQs في ثانية) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">05</span>
                <h2 class="exp-sec-title">INSTANT EXAM BUZZWORDS (كلمات السر لحل أسئلة الـ MCQs في ثانية)</h2>
              </div>

              <!-- Matrix 1: Address Bus vs Data Bus -->
              <div class="buzzwords-matrix" style="margin-bottom: 1.5rem;">
                <div class="buzz-col org-col">
                  <div class="buzz-target" style="color: var(--accent-amber);">
                    <span>لو شفت في السؤال 👇</span>
                    <span>===&gt; ADDRESS BUS REGISTERS</span>
                  </div>
                  <div class="buzz-tags">
                    <span class="buzz-tag">Address in memory</span>
                    <span class="buzz-tag">Next instruction address</span>
                    <span class="buzz-tag">Address Bus connection</span>
                    <span class="buzz-tag">PC (Program Counter)</span>
                    <span class="buzz-tag">MAR (Memory Address)</span>
                    <span class="buzz-tag">I/O AR (Port Address)</span>
                  </div>
                </div>

                <div class="buzz-col arch-col">
                  <div class="buzz-target" style="color: var(--accent-cyan);">
                    <span>لو شفت في السؤال 👇</span>
                    <span>===&gt; DATA BUS REGISTERS</span>
                  </div>
                  <div class="buzz-tags">
                    <span class="buzz-tag">Contains data word</span>
                    <span class="buzz-tag">Currently executed opcode</span>
                    <span class="buzz-tag">Data Bus connection</span>
                    <span class="buzz-tag">MBR (Memory Buffer)</span>
                    <span class="buzz-tag">IR (Instruction Register)</span>
                    <span class="buzz-tag">I/O BR (Data Buffer)</span>
                  </div>
                </div>
              </div>

              <!-- Matrix 2: Hardwired vs Software -->
              <div class="buzzwords-matrix">
                <div class="buzz-col org-col">
                  <div class="buzz-target" style="color: var(--accent-amber);">
                    <span>لو شفت في السؤال 👇</span>
                    <span>===&gt; HARDWIRED PROGRAM</span>
                  </div>
                  <div class="buzz-tags">
                    <span class="buzz-tag">Inflexible configuration</span>
                    <span class="buzz-tag">Physical rewiring / resoldering</span>
                    <span class="buzz-tag">Permanent hardware wiring</span>
                    <span class="buzz-tag">Single fixed problem</span>
                    <span class="buzz-tag">ENIAC artillery calculations</span>
                  </div>
                </div>

                <div class="buzz-col arch-col">
                  <div class="buzz-target" style="color: var(--accent-cyan);">
                    <span>لو شفت في السؤال 👇</span>
                    <span>===&gt; SOFTWARE APPROACH</span>
                  </div>
                  <div class="buzz-tags">
                    <span class="buzz-tag">General-Purpose hardware</span>
                    <span class="buzz-tag">Instruction interpreter</span>
                    <span class="buzz-tag">Control signals</span>
                    <span class="buzz-tag">Coded instructions sequence</span>
                    <span class="buzz-tag">No physical rewiring</span>
                  </div>
                </div>
              </div>
            </section>

            <!-- 06. POPULAR EXAM TRUE / FALSE DRILLS -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">06</span>
                <h2 class="exp-sec-title">POPULAR EXAM TRUE / FALSE DRILLS (أسئلة صح وغلط المشهورة — تفاعلية)</h2>
              </div>

              <div class="tf-drills-grid">
                <div class="tf-card">
                  <p class="tf-question">[Q1] "In a hardwired program, modifying the computational task requires no physical changes to the hardware."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge false">Answer: FALSE (✖)</span>
                    <span>(بالعامية: خطأ فادح! الـ Hardwired Program يعني أسلاك وبوابات ملحومة، وأي تعديل في المسألة بيتطلب فك وإعادة لحام الأسلاك physical rewiring).</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q2] "The von Neumann architecture stores program instructions and computational data in two physically separated memories."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge false">Answer: FALSE (✖)</span>
                    <span>(بالعامية: خطأ! المبدأ الذهبي الأول لفون نيومان هو تخزين الأوامر والداتا معاً في نفس الذاكرة المشتركة Single read-write memory).</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q3] "The Program Counter (PC) holds the address of the NEXT instruction to be fetched from memory."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge true">Answer: TRUE (✔)</span>
                    <span>(بالعامية: صح جداً! الـ PC هو بوصلة المعالج اللي بتشاور دايمًا على عنوان الأمر القادم).</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q4] "The Memory Address Register (MAR) is connected directly to the system data bus."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge false">Answer: FALSE (✖)</span>
                    <span>(بالعامية: خطأ! الـ MAR شايل عناوين فمتصل بناقل العناوين Address Bus؛ اللي متوصل بالـ Data Bus هو الـ MBR).</span>
                  </div>
                </div>

                <div class="tf-card">
                  <p class="tf-question">[Q5] "In Figure 3.1b, the instruction interpreter directly calculates arithmetic results on Data In."</p>
                  <div class="tf-answer-row">
                    <span class="tf-badge false">Answer: FALSE (✖)</span>
                    <span>(بالعامية: خطأ! مفسر الأوامر بس بيفك شفرة التعليمة ويطلع إشارات تحكم Control Signals، والـ ALU هي اللي بتحسب وتخرج Data Out).</span>
                  </div>
                </div>
              </div>
            </section>

            <!-- 07. SHEET 3: OFFICIAL EXAM QUESTIONS & MODEL ANSWERS -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">07</span>
                <h2 class="exp-sec-title">SHEET 3: OFFICIAL EXAM QUESTIONS &amp; MODEL ANSWERS (أسئلة الشيت 3.1، 3.2، 3.3)</h2>
              </div>

              <div class="sheet-hub-wrap">
                <!-- Accordion Item 1: Question 3.1 -->
                <div class="sheet-card" style="margin-bottom: 1.25rem;">
                  <div class="sheet-q-box">
                    <span class="mono" style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700;">QUESTION 3.1 // SHEET 3</span>
                    <p style="font-family: var(--font-en); font-weight: 700; font-size: 1.02rem; margin-top: 0.35rem;" dir="ltr">
                      "What are the three key concepts on which the von Neumann architecture is based?"
                    </p>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
                    <span style="font-weight: 800; color: var(--accent-emerald);">✅ Model Answer (إجابة نموذجية للامتحان):</span>
                    <button type="button" class="tool-pill-btn" onclick="const box = this.parentElement.nextElementSibling; box.style.display = box.style.display === 'none' ? 'block' : 'none';">
                      إخفاء / إظهار الإجابة للتسميع
                    </button>
                  </div>
                  <div class="sheet-a-box" dir="ltr" style="text-align: left;">
                    <ol style="font-family: var(--font-en); line-height: 1.85; padding-left: 1.25rem; margin: 0;">
                      <li><strong>Data and instructions are stored in a single read-write memory.</strong></li>
                      <li><strong>The contents of this memory are addressable by location, without regard to the type of data contained at that location.</strong></li>
                      <li><strong>Execution occurs in a sequential fashion (from one instruction to the next) unless an explicit modification (such as a branch or jump) is encountered.</strong></li>
                    </ol>
                  </div>
                </div>

                <!-- Accordion Item 2: Question 3.2 -->
                <div class="sheet-card" style="margin-bottom: 1.25rem;">
                  <div class="sheet-q-box">
                    <span class="mono" style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700;">QUESTION 3.2 // SHEET 3</span>
                    <p style="font-family: var(--font-en); font-weight: 700; font-size: 1.02rem; margin-top: 0.35rem;" dir="ltr">
                      "What, in general terms, is the hardwired program (programming in hardware)?"
                    </p>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
                    <span style="font-weight: 800; color: var(--accent-emerald);">✅ Model Answer (إجابة نموذجية للامتحان):</span>
                    <button type="button" class="tool-pill-btn" onclick="const box = this.parentElement.nextElementSibling; box.style.display = box.style.display === 'none' ? 'block' : 'none';">
                      إخفاء / إظهار الإجابة للتسميع
                    </button>
                  </div>
                  <div class="sheet-a-box" dir="ltr" style="text-align: left;">
                    <p style="font-family: var(--font-en); line-height: 1.85; margin: 0;">
                      A <strong>hardwired program</strong> refers to the process of physically connecting and configuring a specific set of logic components, gates, and wiring to perform a specific computational task. Any modification to the computational algorithm requires <strong>physical rewiring and redesigning</strong> of the hardware circuitry.
                    </p>
                  </div>
                </div>

                <!-- Accordion Item 3: Question 3.3 -->
                <div class="sheet-card">
                  <div class="sheet-q-box">
                    <span class="mono" style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700;">QUESTION 3.3 // SHEET 3</span>
                    <p style="font-family: var(--font-en); font-weight: 700; font-size: 1.02rem; margin-top: 0.35rem;" dir="ltr">
                      "What is the function of each of the following CPU registers: MAR, MBR, I/O BR, I/O AR, PC, IR?"
                    </p>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
                    <span style="font-weight: 800; color: var(--accent-emerald);">✅ Model Answer (إجابة نموذجية للامتحان):</span>
                    <button type="button" class="tool-pill-btn" onclick="const box = this.parentElement.nextElementSibling; box.style.display = box.style.display === 'none' ? 'block' : 'none';">
                      إخفاء / إظهار الإجابة للتسميع
                    </button>
                  </div>
                  <div class="sheet-a-box" dir="ltr" style="text-align: left;">
                    <ul style="font-family: var(--font-en); line-height: 1.85; padding-left: 1.25rem; margin: 0; list-style: disc;">
                      <li><strong>MAR (Memory Address Register):</strong> Specifies the memory address for an upcoming memory read or write operation.</li>
                      <li><strong>MBR (Memory Buffer Register):</strong> Contains data to be written into memory or receives data read from memory.</li>
                      <li><strong>I/O AR (I/O Address Register):</strong> Specifies the unique address or port of the external I/O device being accessed.</li>
                      <li><strong>I/O BR (I/O Buffer Register):</strong> Acts as a temporary data buffer for data exchanged between an I/O module and the processor.</li>
                      <li><strong>PC (Program Counter):</strong> Holds the address of the next instruction to be fetched from memory.</li>
                      <li><strong>IR (Instruction Register):</strong> Holds the instruction currently being executed and decoded by the control unit.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

          `,
          quiz: [
            {
              id: "ch3_p1_q1",
              question: "Q1. What is the primary limitation of a 'Hardwired Program' (programming in hardware)?",
              options: [
                "It requires an instruction interpreter to decode software",
                "It is inflexible; any change in the algorithm requires physically rewiring the hardware",
                "It stores instructions and data in the same RAM",
                "It can only execute branch instructions"
              ],
              correctIndex: 1,
              explanation: "بالعامية كده: أكبر مصيبة في الـ Hardwired Program هي إنه غير مرن (Inflexible)! لأن البرنامج متفصل بأسلاك ولحامات على قد مسألة واحدة، فلو حبيت تغير المسألة لازم تفك الأسلاك وتلحم دايرة جديدة من الصفر."
            },
            {
              id: "ch3_p1_q2",
              question: "Q2. In the Software Approach (Figure 3.1b), what are the two main hardware components required inside the processor?",
              options: [
                "Hard Disk and Magnetic Tape",
                "Instruction Interpreter (Control Unit) and General-Purpose ALU",
                "Keyboard and Display Monitor",
                "Vacuum Tubes and Patch Cords"
              ],
              correctIndex: 1,
              explanation: "الخلاصة بالعامية: عشان نشغل أي برنامج (Software) من غير ما نلمس الأسلاك، محتاجين حاجتين جوه المعالج: (1) مفسر أوامر (Instruction Interpreter / Control Unit) يفك الشفرة ويطلع إشارات تحكم، و(2) وحدة حساب ومنطق عامة (General-Purpose ALU) تنفذ العمليات."
            },
            {
              id: "ch3_p1_q3",
              question: "Q3. [EXAM TRAP]: According to Figure 3.1b, what does the Instruction Interpreter output to the General-Purpose ALU?",
              options: [
                "Final Data Out results",
                "Control Signals",
                "External I/O Device Ports",
                "Power Supply Voltage"
              ],
              correctIndex: 1,
              explanation: "بص على مخطط Figure 3.1b: مفسر الأوامر (Instruction Interpreter) بياخد كود التعليمة من فوق، وبيطلع من تحته إشارات تحكم كهربائية (Control Signals) تنزل تأمر الـ ALU يجمع أو يطرح!"
            },
            {
              id: "ch3_p1_q4",
              question: "Q4. Which of the following is NOT one of the three key concepts of the von Neumann architecture?",
              options: [
                "Data and instructions are stored in a single read-write memory",
                "Memory contents are addressable by location regardless of the type of data",
                "Instructions and data must be stored in two physically separate memories",
                "Execution occurs sequentially from one instruction to the next unless modified by a branch"
              ],
              correctIndex: 2,
              explanation: "صحصح للفخ! فون نيومان قايم على إن الداتا والأوامر بيتخزنوا مع بعض في ذاكرة واحدة (Single read-write memory)، مش ذاكرتين منفصلتين!"
            },
            {
              id: "ch3_p1_q5",
              question: "Q5. [EXAM TRAP]: Which CPU register holds the address of the NEXT instruction to be fetched from memory?",
              options: [
                "IR (Instruction Register)",
                "PC (Program Counter)",
                "MBR (Memory Buffer Register)",
                "I/O AR (I/O Address Register)"
              ],
              correctIndex: 1,
              explanation: "تريكة الامتحان المشهورة (Trap 2): اللي شايل 'عنوان الأمر الجاي' (Next instruction address) هو عداد البرنامج PC (Program Counter)، أما الـ IR فشايل كود الأمر اللي شغال دلوقتي!"
            },
            {
              id: "ch3_p1_q6",
              question: "Q6. Which CPU register holds the instruction currently being executed and decoded by the Control Unit?",
              options: [
                "PC (Program Counter)",
                "MAR (Memory Address Register)",
                "IR (Instruction Register)",
                "I/O BR (I/O Buffer Register)"
              ],
              correctIndex: 2,
              explanation: "بالعامية: سجل التعليمة IR (Instruction Register) هو اللي شايل كود الأمر الشغال حالياً عشان وحدة التحكم (Control Unit) تفك شفرته وتنفذه."
            },
            {
              id: "ch3_p1_q7",
              question: "Q7. [EXAM TRAP]: Which pair of CPU registers is connected directly to the System Address Bus?",
              options: [
                "MBR and I/O BR",
                "MAR and I/O AR",
                "IR and MBR",
                "ALU and AC"
              ],
              correctIndex: 1,
              explanation: "تريكة الامتحان (Trap 1): أي سجل في اسمه كلمة Address (يعني MAR بتاع عنوان الرام، و I/O AR بتاع عنوان منفذ الـ I/O) بيبقى متوصل بخطوط العناوين (Address Bus)!"
            },
            {
              id: "ch3_p1_q8",
              question: "Q8. [EXAM TRAP]: Which pair of CPU registers is connected directly to the System Data Bus to exchange data words?",
              options: [
                "MAR and PC",
                "MBR and I/O BR",
                "I/O AR and MAR",
                "PC and I/O AR"
              ],
              correctIndex: 1,
              explanation: "بالبلدي كده: أي سجل في اسمه كلمة Buffer (يعني صندوق أمانات الداتا: MBR للرام، و I/O BR للـ I/O) بيبقى متوصل بخطوط البيانات (Data Bus) عشان يستلم ويسلم الداتا!"
            },
            {
              id: "ch3_p1_q9",
              question: "Q9. What is the specific role of the I/O Address Register (I/O AR)?",
              options: [
                "It holds the result of ALU multiplication",
                "It specifies a particular external I/O device or port address",
                "It stores the opcode of the current instruction",
                "It counts the number of clock cycles per second"
              ],
              correctIndex: 1,
              explanation: "الـ I/O AR (I/O Address Register) شغلانته يحدد رقم أو عنوان جهاز الإدخال/الإخراج (I/O Device Port Address) اللي المعالج عاوز يكلمه."
            },
            {
              id: "ch3_p1_q10",
              question: "Q10. [True / False]: In Figure 3.1b, the Instruction Interpreter directly performs arithmetic addition and subtraction on Data In.",
              options: [
                "True (✔)",
                "False (✖)"
              ],
              correctIndex: 1,
              explanation: "الإجابة FALSE (✖)! مفسر الأوامر (Instruction Interpreter) مبيحسبش بإيده، هو بس بيفك شفرة التعليمة ويبعت إشارات تحكم (Control Signals)، واللي بينفذ الجمع والطرح فعلياً هو الـ ALU!"
            }
          ]
        },

        /* ====================================================================
           MODULE 2: Instruction Cycle, State Flow Diagram & Program Execution Trace (Slides 8 to 17)
           ==================================================================== */
        {
          id: "ch3-p2",
          code: "MODULE 2",
          slides: "Slides 8 to 17",
          title: "نبض المعالج: كيف ينفذ الحاسوب مليار عملية في الثانية؟ (Instruction Cycle, State Flow Diagram & Program Execution Trace)",
          hasContent: true,
          contentHtml: `
<!-- 0. HERO SECTION -->
            <div class="mod-hero-box">
              <div class="mod-hero-meta-row">
                <span class="mod-meta-badge">Route: /module-2-instruction-cycle</span>
                <span class="mod-meta-badge amber">Topic Range: William Stallings 10th Ed — Chapter 3 (Slides 8 to 17)</span>
                <span class="mod-meta-badge emerald">Sheet Questions Covered: 3.4, 3.5, 3.8</span>
              </div>
              <h1 class="mod-hero-h1">نبض المعالج: كيف ينفذ الحاسوب مليار عملية في الثانية؟</h1>
              <p class="mod-hero-lead">
                "من اللحظة التي تضغط فيها على زر تشغيل الحاسوب حتى إيقافه، يدخل المعالج في حلقة أبدية لا تتوقف: يجلب التعليمة من الذاكرة، يفك شفرتها، وينفذها، ثم يعيد الكرة. في هذا الموديول سنشرح دورة التعليمات البسيطة، مخطط الحالات الكامل (State Diagram)، وسنخوض في تفاصيل مسألة التتبع الحسابية الشهيرة بنظام الهيكسا (Hexadecimal)."
              </p>
              <div class="mod-badges-row">
                <span class="mod-pill-chip">Basic Fetch-Execute Cycle</span>
                <span class="mod-pill-chip">7-State Cycle Diagram</span>
                <span class="mod-pill-chip">16-Bit Instruction Format</span>
                <span class="mod-pill-chip">Hexadecimal Trace Simulator</span>
                <span class="mod-pill-chip">Sheet Questions 3.4, 3.5 &amp; 3.8</span>
              </div>
            </div>

            <!-- 01. الفكرة الأساسية من الصفر (هو المعالج بيفكر إزاي؟ تشبيه طباخ المطعم) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">01</span>
                <h2 class="exp-sec-title">الفكرة الأساسية من الصفر: هو المعالج بيفكر إزاي؟ (تشبيه طباخ المطعم)</h2>
              </div>

              <div class="balady-box">
                <div class="balady-header">
                  <span class="balady-badge">💡 قصة دورة التعليمة ببساطة ومن الصفر</span>
                  <span class="mono" style="font-size: 0.8rem; color: var(--accent-cyan); font-weight: 700;">THE MASTER ANALOGY</span>
                </div>
                <p>
                  عشان تفهم دورة التعليمة (Instruction Cycle) وتثبت في دماغك ليوم الامتحان، تخيل المعالج كأنه <strong>طباخ محترف في مطعم سريع (Chef)</strong> واقف قدامه لوحة متعلق عليها فواتير طلبات الزباين (دي الذاكرة RAM):
                </p>
                <div class="two-layers-split" style="margin-top: 1rem;">
                  <div class="layer-pill-card">
                    <span class="layer-tag" style="background: rgba(56, 189, 248, 0.15); color: var(--accent-cyan); border: 1px solid rgba(56, 189, 248, 0.3);">PHASE 01 // FETCH CYCLE</span>
                    <h3 style="font-size: 1.15rem; margin-top: 0.5rem; color: var(--accent-cyan);">مرحلة الجلب (يمد إيده يجيب الفاتورة)</h3>
                    <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); margin-top: 0.5rem;">
                      الشيف بيبص في ورقة صغيرة معاه مكتوب فيها رقم الفاتورة التالية (ده الـ <strong>PC</strong>). بيمد إيده على لوحة الطلبات عند نفس الرقم، ياخد الفاتورة يمسكها في إيده (ده الـ <strong>IR</strong>)، وقبل ما يعمل أي حاجة تانية يزود الرقم اللي في ورقته بواحد عشان يجهز للفاتورة اللي بعدها!
                    </p>
                  </div>

                  <div class="layer-pill-card">
                    <span class="layer-tag" style="background: rgba(245, 158, 11, 0.15); color: var(--accent-amber); border: 1px solid rgba(245, 158, 11, 0.3);">PHASE 02 // EXECUTE CYCLE</span>
                    <h3 style="font-size: 1.15rem; margin-top: 0.5rem; color: var(--accent-amber);">مرحلة التنفيذ (يطبخ وينفذ الطلب)</h3>
                    <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); margin-top: 0.5rem;">
                      الشيف يقرأ نوع الوجبة المكتوب على الفاتورة (الـ <strong>Opcode</strong>): لو مكتوب "برجر" يروح للقلاية، لو "سلطة" يروح للسكين (دي الـ <strong>ALU</strong>)، ويجيب المكونات من الثلاجة (الـ <strong>Operands</strong>)، يجهز الوجبة ويحطها على صينية التسليم (الـ <strong>Store</strong>)!
                    </p>
                  </div>
                </div>
                <div style="margin-top: 1rem; padding: 0.85rem; border-radius: 8px; background: rgba(0,0,0,0.25); border-left: 3px solid var(--accent-emerald);">
                  <strong style="color: var(--accent-emerald);">📌 الخلاصة المعمارية:</strong>
                  المعالج في الحقيقة مبيفهمش كل حاجة مرة واحدة؛ هو مكنة بتعمل خطوتين اتنين بالتكرار: <strong>Fetch ➔ Execute ➔ Fetch ➔ Execute</strong> لحد ما البرنامج يخلص أو يجيله أمر إيقاف (HALT)!
                </div>
              </div>
            </section>

            <!-- 02. COMPONENT 1: بطاقة الدورة البسيطة التفاعلية (Figure 3.3) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">02</span>
                <h2 class="exp-sec-title">COMPONENT 1: بطاقة الدورة البسيطة التفاعلية (Two-Step Cycle Card — Figure 3.3)</h2>
              </div>

              <!-- Interactive ASCII Diagram -->
              <div class="terminal-card">
                <div class="terminal-bar">
                  <div class="terminal-dots">
                    <span class="dot red"></span>
                    <span class="dot yellow"></span>
                    <span class="dot green"></span>
                  </div>
                  <span class="terminal-title">FIGURE 3.3 // BASIC INSTRUCTION CYCLE ARCHITECTURE</span>
                  <span class="mono" style="font-size: 0.72rem; color: var(--accent-cyan);">STALLINGS 10th ED</span>
                </div>
                <div class="terminal-body">
                  <pre class="ascii-diagram">
          +-------------------------------------------------------------+
          |                 BASIC INSTRUCTION CYCLE                     |
          |                                                             |
          |     +-------------------+         +-------------------+     |
     +--------->|    FETCH CYCLE    |-------->|   EXECUTE CYCLE   |---------+
     |          | (جلب التعليمة)    |         | (تنفيذ العملية)   |         |
     |          +-------------------+         +-------------------+         |
     |                                                                      |
     +--------------------------- HALT / REPEAT ----------------------------+
                  </pre>
                </div>
              </div>

              <!-- Interactive Simulator: sim-ch3-basic-cycle -->
              <div class="sim-wrapper-box" data-sim-target="sim-ch3-basic-cycle">
                <div class="sim-header-row">
                  <div class="sim-title-group">
                    <span class="mono sim-badge">SIMULATOR // FIGURE 3.3</span>
                    <h3 class="sim-title">محاكي دورة التعليمة الثنائية التفاعلي (Basic 2-Step Cycle)</h3>
                  </div>
                  <div class="sim-controls-toolbar">
                    <button type="button" class="sim-step-btn active" data-sim-step="0">1. Fetch Cycle</button>
                    <button type="button" class="sim-step-btn" data-sim-step="1">2. Execute Cycle</button>
                    <button type="button" class="sim-step-btn" data-sim-step="2">3. Halt / Repeat</button>
                    <button type="button" class="sim-step-btn play-auto" data-sim-autoplay>تشغيل تلقائي ⏵</button>
                  </div>
                </div>

                <div class="sim-display-screen">
                  <div class="sim-step-details-card">
                    <div class="sim-step-header">
                      <span class="sim-active-num mono">01</span>
                      <h4 class="sim-active-title">المرحلة 1: دورة الجلب (Fetch Cycle — جلب التعليمة من الذاكرة)</h4>
                    </div>
                    <div class="sim-active-route mono">START ──► FETCH CYCLE: [IR ◄── Memory[PC]] &amp; [PC = PC + 1]</div>
                    <div class="sim-active-payload">📥 مرحلة الجلب (Fetch): المعالج يقرأ التعليمة من العنوان المسجل في PC ويضعها في IR ويزود PC بواحد</div>
                    <p class="sim-active-desc">يبص المعالج في عداد البرنامج (PC) ليعرف عنوان التعليمة المطلوبة، ثم يقرأ كود التعليمة من الذاكرة الرئيسية ويحفظه في سجل التعليمة (IR)، ويزود عداد البرنامج تلقائياً بواحد (PC = PC + 1) ليشير للتعليمة التالية.</p>
                  </div>
                </div>
              </div>

              <!-- Data Breakdown — تفكيك المرحلتين -->
              <div class="two-layers-split" style="margin-top: 1.5rem;">
                <!-- 1. Fetch Cycle -->
                <div class="layer-pill-card">
                  <span class="layer-tag" style="background: rgba(56, 189, 248, 0.15); color: var(--accent-cyan); border: 1px solid rgba(56, 189, 248, 0.3);">1. FETCH CYCLE (مرحلة الجلب)</span>
                  <div class="en-def-box" style="margin-top: 0.75rem;">
                    <div class="en-def-title">Official English Role (William Stallings):</div>
                    <p class="en-def-text">
                      "The processor reads an instruction from memory at the address specified by the Program Counter (PC), loads it into the Instruction Register (IR), and increments the PC."
                    </p>
                  </div>
                  <div class="balady-box" style="margin-top: 0.75rem;">
                    <div class="balady-header">
                      <span class="balady-badge">📖 الشرح بالعامية المصرية (الخطوات بالملي)</span>
                    </div>
                    <p>المعالج بيمد إيده في الذاكرة يجيب التعليمة. الخطوات بالملي:</p>
                    <ol style="margin-top: 0.5rem; padding-right: 1.2rem; font-size: 0.95rem; line-height: 1.8;">
                      <li>يبص في الـ <strong>PC</strong> يلاقي العنوان المطلوب.</li>
                      <li>يروح للرام عند العنوان ده وينسخ كود التعليمة يحطه في الـ <strong>IR</strong>.</li>
                      <li>يزود الـ <strong>PC</strong> بواحد تلقائياً (<span class="mono">PC = PC + 1</span>) عشان يجهز للأمر اللي بعده قبل ما ينفذ الحالي!</li>
                    </ol>
                  </div>
                </div>

                <!-- 2. Execute Cycle -->
                <div class="layer-pill-card">
                  <span class="layer-tag" style="background: rgba(245, 158, 11, 0.15); color: var(--accent-amber); border: 1px solid rgba(245, 158, 11, 0.3);">2. EXECUTE CYCLE (مرحلة التنفيذ)</span>
                  <div class="en-def-box" style="margin-top: 0.75rem;">
                    <div class="en-def-title">Official English Role (William Stallings):</div>
                    <p class="en-def-text">
                      "The control unit decodes the binary opcode in the IR and triggers hardware paths to execute the operation."
                    </p>
                  </div>
                  <div class="balady-box" style="margin-top: 0.75rem;">
                    <div class="balady-header">
                      <span class="balady-badge">📖 الشرح بالعامية المصرية</span>
                    </div>
                    <p>
                      وحدة التحكم تحلل كود العملية (Opcode) في مسجل الـ IR، وتعرف المطلوب بالظبط، وتطلق إشارات التحكم اللازمة لكل دوائر المعالج لتنفيذ العملية على الفور.
                    </p>
                  </div>
                </div>
              </div>

              <!-- The 4 Operation Categories (سلايد 10 - فئات العمليات الأربعة) -->
              <div style="margin-top: 1.5rem;">
                <h3 style="font-size: 1.15rem; color: var(--accent-emerald); font-weight: 800; margin-bottom: 0.75rem;">
                  ⚡ The 4 Operation Categories (سلايد 10 - فئات العمليات الأربعة أثناء مرحلة التنفيذ):
                </h3>
                <div class="attr-grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));">
                  <div class="attr-card">
                    <span class="attr-type mono" style="color: var(--accent-cyan);">CATEGORY 01</span>
                    <h4 style="font-size: 1.05rem; margin-top: 0.35rem; color: #fff;">Processor - Memory</h4>
                    <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.6;">
                      نقل بيانات بين المعالج والذاكرة: قراءة بيانات من الرام للمعالج (<span class="mono">Read / Load</span>) أو كتابة وتخزين ناتج في الرام (<span class="mono">Write / Store</span>).
                    </p>
                  </div>

                  <div class="attr-card">
                    <span class="attr-type mono" style="color: var(--accent-emerald);">CATEGORY 02</span>
                    <h4 style="font-size: 1.05rem; margin-top: 0.35rem; color: #fff;">Processor - I/O</h4>
                    <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.6;">
                      نقل بيانات بين المعالج وجهاز خارجي أو وحدة إدخال/إخراج (لوحة مفاتيح، شاشة، طابعة، قرص صلب).
                    </p>
                  </div>

                  <div class="attr-card">
                    <span class="attr-type mono" style="color: var(--accent-amber);">CATEGORY 03</span>
                    <h4 style="font-size: 1.05rem; margin-top: 0.35rem; color: #fff;">Data Processing</h4>
                    <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.6;">
                      إجراء عملية حسابية (<span class="mono">ADD, SUB</span>) أو منطقية (<span class="mono">AND, OR, NOT</span>) على البيانات داخل وحدة الحساب والمنطق الـ ALU.
                    </p>
                  </div>

                  <div class="attr-card">
                    <span class="attr-type mono" style="color: #ec4899;">CATEGORY 04</span>
                    <h4 style="font-size: 1.05rem; margin-top: 0.35rem; color: #fff;">Control</h4>
                    <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.6;">
                      تغيير مسار تنفيذ البرنامج بالقفز أو التفرع لعنوان جديد (<span class="mono">Jump / Branch</span>) مثل جمل <span class="mono">if / while</span>، حيث يتم تعديل قيمة الـ PC مباشرة!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <!-- 03. COMPONENT 2: المخطط المعماري الكامل للحالات (Figure 3.6) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">03</span>
                <h2 class="exp-sec-title">COMPONENT 2: المخطط المعماري الكامل للحالات (7-State Diagram Card — Figure 3.6)</h2>
              </div>

              <!-- Interactive ASCII Architecture -->
              <div class="terminal-card">
                <div class="terminal-bar">
                  <div class="terminal-dots">
                    <span class="dot red"></span>
                    <span class="dot yellow"></span>
                    <span class="dot green"></span>
                  </div>
                  <span class="terminal-title">FIGURE 3.6 // INSTRUCTION CYCLE STATE DIAGRAM ARCHITECTURE</span>
                  <span class="mono" style="font-size: 0.72rem; color: var(--accent-amber);">FULL 7 STATES FLOW</span>
                </div>
                <div class="terminal-body">
                  <pre class="ascii-diagram">
               +----------------------------------------------------+
               |        INSTRUCTION ADDRESS CALCULATION (iac)       |
               |              [حساب عنوان التعليمة التالية]         |
               +-------------------------+--------------------------+
                                         |
                                         v
               +----------------------------------------------------+
               |              INSTRUCTION FETCH (if)                |
               |             [جلب كود التعليمة إلى سجل IR]          |
               +-------------------------+--------------------------+
                                         |
                                         v
               +----------------------------------------------------+
               |        INSTRUCTION OPERATION DECODING (iod)        |
               |              [فك شفرة كود العملية Opcode]          |
               +-------------------------+--------------------------+
                                         |
                     +-------------------+
                     |
                     v
   +-----> +----------------------------------------------------+ &lt;-----+
   |       |          OPERAND ADDRESS CALCULATION (oac)         |       |
   |       |             [حساب العنوان الفعلي للمعامل]          |       |
   |       +-------------------------+--------------------------+       |
   |                                 |                                  |
   |                                 v                                  | (تكرار لو فيه
   |       +----------------------------------------------------+       |  أكتر من معامل)
   |       |                 OPERAND FETCH (of)                 |       |  For multiple
   |       |             [جلب قيمة المعامل من الذاكرة أو I/O]   |       |   operands
   |       +-------------------------+--------------------------+       |
   |                                 |                                  |
   |                                 v                                  |
   |       +----------------------------------------------------+       |
   |       |                 DATA OPERATION (do)                |-------+
   |       |            [تنفيذ العملية الحسابية أو المنطقية]    |
   |       +-------------------------+--------------------------+
   |                                 |
   |                                 v
   +------ +----------------------------------------------------+
           |          OPERAND ADDRESS CALCULATION (oac)         |
           |            [حساب عنوان مكان تخزين النتيجة]         |
           +-------------------------+--------------------------+
                                     |
                                     v
           +----------------------------------------------------+
           |                 OPERAND STORE (os)                 |
           |            [تخزين النتيجة في الذاكرة أو جهاز I/O]  |
           +-------------------------+--------------------------+
                                     |
                                     v
                 (Return to iac for next instruction / إتمام الدورة)
                  </pre>
                </div>
              </div>

              <!-- Interactive Simulator: sim-ch3-state-diagram -->
              <div class="sim-wrapper-box" data-sim-target="sim-ch3-state-diagram">
                <div class="sim-header-row">
                  <div class="sim-title-group">
                    <span class="mono sim-badge">SIMULATOR // FIGURE 3.6</span>
                    <h3 class="sim-title">محاكي مخطط الحالات المعماري التفاعلي (State Diagram Engine)</h3>
                  </div>
                  <div class="sim-controls-toolbar">
                    <button type="button" class="sim-step-btn active" data-sim-step="0">1. iac ➔ if</button>
                    <button type="button" class="sim-step-btn" data-sim-step="1">2. iod</button>
                    <button type="button" class="sim-step-btn" data-sim-step="2">3. oac ➔ of</button>
                    <button type="button" class="sim-step-btn" data-sim-step="3">4. do ➔ os</button>
                    <button type="button" class="sim-step-btn play-auto" data-sim-autoplay>تشغيل تلقائي ⏵</button>
                  </div>
                </div>

                <div class="sim-display-screen">
                  <div class="sim-step-details-card">
                    <div class="sim-step-header">
                      <span class="sim-active-num mono">01</span>
                      <h4 class="sim-active-title">المرحلة 1: حساب عنوان التعليمة وجلبها (iac ──► if)</h4>
                    </div>
                    <div class="sim-active-route mono">1. iac (Instruction Address Calc) ──► 2. if (Instruction Fetch into IR)</div>
                    <div class="sim-active-payload">📥 حساب العنوان والجلب: حساب عنوان الأمر التالي (iac) ثم قراءته من الذاكرة إلى سجل IR (if)</div>
                    <p class="sim-active-desc">تبدأ الدورة في حالة (iac) بتحديد وحساب عنوان التعليمة التالية في الذاكرة (مثل زيادة PC)، ثم الانتقال إلى حالة (if) لقراءة بايتات التعليمة من الذاكرة إلى مسجل التعليمة IR.</p>
                  </div>
                </div>
              </div>

              <!-- States Reference Grid: 7 States Breakdown -->
              <div style="margin-top: 1.5rem;">
                <h3 style="font-size: 1.15rem; color: var(--accent-cyan); font-weight: 800; margin-bottom: 0.75rem;">
                  📚 States Reference Object — الداتا البرمجية والأكاديمية للحالات السبعة:
                </h3>
                <div class="attr-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
                  <!-- iac -->
                  <div class="attr-card">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <span class="attr-type mono" style="color: var(--accent-cyan); font-size: 0.85rem;">iac</span>
                      <span class="mono" style="font-size: 0.75rem; color: var(--text-muted);">STATE 1</span>
                    </div>
                    <h4 style="font-size: 1.05rem; margin-top: 0.35rem; color: #fff;">Instruction Address Calculation</h4>
                    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.5;">
                      <strong>Academic Role:</strong> Determines the memory address of the next instruction to be executed.
                    </p>
                    <p style="font-size: 0.85rem; color: var(--accent-cyan); margin-top: 0.35rem; line-height: 1.5;">
                      <strong>بالعامية:</strong> المعالج بيحسب مكان الأمر الجاي في الرام (زي إضافة 1 لقيمة الـ PC).
                    </p>
                  </div>

                  <!-- if -->
                  <div class="attr-card">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <span class="attr-type mono" style="color: var(--accent-cyan); font-size: 0.85rem;">if</span>
                      <span class="mono" style="font-size: 0.75rem; color: var(--text-muted);">STATE 2</span>
                    </div>
                    <h4 style="font-size: 1.05rem; margin-top: 0.35rem; color: #fff;">Instruction Fetch</h4>
                    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.5;">
                      <strong>Academic Role:</strong> Reads the instruction word from memory into the processor (IR register).
                    </p>
                    <p style="font-size: 0.85rem; color: var(--accent-cyan); margin-top: 0.35rem; line-height: 1.5;">
                      <strong>بالعامية:</strong> قراءة كود التعليمة المشفر من عنوانها في الرام ووضعها في سجل الـ IR.
                    </p>
                  </div>

                  <!-- iod -->
                  <div class="attr-card">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <span class="attr-type mono" style="color: var(--accent-amber); font-size: 0.85rem;">iod</span>
                      <span class="mono" style="font-size: 0.75rem; color: var(--text-muted);">STATE 3</span>
                    </div>
                    <h4 style="font-size: 1.05rem; margin-top: 0.35rem; color: #fff;">Instruction Operation Decoding</h4>
                    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.5;">
                      <strong>Academic Role:</strong> Analyzes the opcode to determine the required operation and operand addressing modes.
                    </p>
                    <p style="font-size: 0.85rem; color: var(--accent-amber); margin-top: 0.35rem; line-height: 1.5;">
                      <strong>بالعامية:</strong> وحدة التحكم تفك شفرة الـ Opcode وتعرف نوع الشغلانة ومكان الأرقام اللي هتشتغل عليها.
                    </p>
                  </div>

                  <!-- oac -->
                  <div class="attr-card">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <span class="attr-type mono" style="color: var(--accent-amber); font-size: 0.85rem;">oac</span>
                      <span class="mono" style="font-size: 0.75rem; color: var(--text-muted);">STATE 4 &amp; 6</span>
                    </div>
                    <h4 style="font-size: 1.05rem; margin-top: 0.35rem; color: #fff;">Operand Address Calculation</h4>
                    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.5;">
                      <strong>Academic Role:</strong> Calculates the effective memory or I/O address of the operand required for execution.
                    </p>
                    <p style="font-size: 0.85rem; color: var(--accent-amber); margin-top: 0.35rem; line-height: 1.5;">
                      <strong>بالعامية:</strong> حساب العنوان الحقيقي للمعامل في الرامات لو العملية محتاجة داتا من برة.
                    </p>
                  </div>

                  <!-- of -->
                  <div class="attr-card">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <span class="attr-type mono" style="color: var(--accent-emerald); font-size: 0.85rem;">of</span>
                      <span class="mono" style="font-size: 0.75rem; color: var(--text-muted);">STATE 5</span>
                    </div>
                    <h4 style="font-size: 1.05rem; margin-top: 0.35rem; color: #fff;">Operand Fetch</h4>
                    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.5;">
                      <strong>Academic Role:</strong> Fetches the operand value from memory or reads it from an I/O peripheral into the CPU.
                    </p>
                    <p style="font-size: 0.85rem; color: var(--accent-emerald); margin-top: 0.35rem; line-height: 1.5;">
                      <strong>بالعامية:</strong> المعالج يمد إيده ويسحب الرقم المطلوب من الذاكرة أو المنفذ ويدخله جواه.
                    </p>
                  </div>

                  <!-- do -->
                  <div class="attr-card">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <span class="attr-type mono" style="color: var(--accent-emerald); font-size: 0.85rem;">do</span>
                      <span class="mono" style="font-size: 0.75rem; color: var(--text-muted);">STATE 6</span>
                    </div>
                    <h4 style="font-size: 1.05rem; margin-top: 0.35rem; color: #fff;">Data Operation</h4>
                    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.5;">
                      <strong>Academic Role:</strong> Performs the specified arithmetic, logical, or data manipulation operation inside the ALU.
                    </p>
                    <p style="font-size: 0.85rem; color: var(--accent-emerald); margin-top: 0.35rem; line-height: 1.5;">
                      <strong>بالعامية:</strong> وحدة الحساب والمنطق ALU تنفذ الجمع أو الطرح أو المقارنة فعلياً.
                    </p>
                  </div>

                  <!-- os -->
                  <div class="attr-card">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <span class="attr-type mono" style="color: #ec4899; font-size: 0.85rem;">os</span>
                      <span class="mono" style="font-size: 0.75rem; color: var(--text-muted);">STATE 7</span>
                    </div>
                    <h4 style="font-size: 1.05rem; margin-top: 0.35rem; color: #fff;">Operand Store</h4>
                    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.5;">
                      <strong>Academic Role:</strong> Writes the computed result to memory or sends it out to an I/O device.
                    </p>
                    <p style="font-size: 0.85rem; color: #ec4899; margin-top: 0.35rem; line-height: 1.5;">
                      <strong>بالعامية:</strong> تخزين الناتج النهائي في مكانه المحدد بالذاكرة أو إخراجه لشاشة أو قرص تخزين.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <!-- 04. COMPONENT 3: مواصفات الآلة الافتراضية (Figure 3.4) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">04</span>
                <h2 class="exp-sec-title">COMPONENT 3: مواصفات الآلة الافتراضية (Hypothetical Machine Formats Card — Figure 3.4)</h2>
              </div>

              <div class="balady-box">
                <div class="balady-header">
                  <span class="balady-badge">💡 مقدمة الآلة الافتراضية لسلايد 13</span>
                </div>
                <p>
                  كتاب ستالينجز وضع مواصفات لمعالج افتراضي مبسط جداً من <strong>16-bit</strong> عشان يشرح عليه إزاي المعالج بينفذ برنامج كامل خطوة بخطوة. الكلمة فيه حجمها 16 بت (أي 2 بايت = 4 خانات بنظام الهيكسا).
                </p>
              </div>

              <!-- Bit-Field Breakdowns -->
              <div class="two-layers-split" style="margin-top: 1rem;">
                <!-- (A) Instruction Format -->
                <div class="layer-pill-card">
                  <span class="layer-tag" style="background: rgba(56, 189, 248, 0.15); color: var(--accent-cyan); border: 1px solid rgba(56, 189, 248, 0.3);">(A) INSTRUCTION FORMAT (16-BIT)</span>
                  <div class="terminal-body" style="padding: 0.75rem; margin-top: 0.75rem; background: var(--bg-surface-2);">
                    <pre class="ascii-diagram" style="font-size: 0.75rem;">
 0                 3  4                                                    15
+-------------------+--------------------------------------------------------+
|   Opcode (4-bit)  |              Memory Address (12-bit)                   |
+-------------------+--------------------------------------------------------+
 [خانة هيكسا واحدة]   [ثلاث خانات هيكسا لتمثيل العنوان من 000 إلى FFF]
                    </pre>
                  </div>
                  <div style="font-size: 0.9rem; line-height: 1.7; color: var(--text-secondary); margin-top: 0.75rem;">
                    <ul style="padding-right: 1.2rem;">
                      <li><strong>البتات من 0 إلى 3 (4 بت = خانة هيكسا واحدة):</strong> تمثل <strong>كود العملية (Opcode)</strong>. بعدد أوامر أقصى يصل إلى 2<sup>4</sup> = 16 أمراً مختلفاً.</li>
                      <li><strong>البتات من 4 إلى 15 (12 بت = 3 خانات هيكسا):</strong> تمثل <strong>عنوان الذاكرة (Memory Address)</strong> الذي يمكنه عنونة حتى 2<sup>12</sup> = 4096 موقع ذاكرة (4 KB).</li>
                    </ul>
                  </div>
                </div>

                <!-- (B) Integer Format -->
                <div class="layer-pill-card">
                  <span class="layer-tag" style="background: rgba(16, 185, 129, 0.15); color: var(--accent-emerald); border: 1px solid rgba(16, 185, 129, 0.3);">(B) INTEGER FORMAT (16-BIT)</span>
                  <div class="terminal-body" style="padding: 0.75rem; margin-top: 0.75rem; background: var(--bg-surface-2);">
                    <pre class="ascii-diagram" style="font-size: 0.75rem;">
 0  1                                                                      15
+--+-------------------------------------------------------------------------+
| S|                         Magnitude (15-bit)                              |
+--+-------------------------------------------------------------------------+
 [بت الإشارة: 0 موجب، 1 سالب]             [قيمة الرقم العددي]
                    </pre>
                  </div>
                  <div style="font-size: 0.9rem; line-height: 1.7; color: var(--text-secondary); margin-top: 0.75rem;">
                    <ul style="padding-right: 1.2rem;">
                      <li><strong>البت 0:</strong> بت الإشارة (Sign Bit: 0 تعني رقم موجب، 1 تعني رقم سالب).</li>
                      <li><strong>البتات من 1 إلى 15 (15 بت):</strong> تمثل مقدار الرقم (Magnitude).</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- (C) Opcodes Table -->
              <div style="margin-top: 1.5rem;">
                <h3 style="font-size: 1.15rem; color: var(--accent-amber); font-weight: 800; margin-bottom: 0.75rem;">
                  📋 (C) Opcodes Table (جدول شفرات العمليات الأساسية في الآلة الافتراضية):
                </h3>
                <div style="overflow-x: auto;">
                  <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem; text-align: right; background: var(--bg-surface-1); border-radius: 8px; overflow: hidden; border: 1px solid var(--border-color);">
                    <thead>
                      <tr style="background: rgba(255,255,255,0.05); border-bottom: 2px solid var(--border-color);">
                        <th style="padding: 0.85rem; color: var(--accent-cyan); font-family: var(--font-mono);">Binary Opcode</th>
                        <th style="padding: 0.85rem; color: var(--accent-cyan); font-family: var(--font-mono);">Hex</th>
                        <th style="padding: 0.85rem; color: #fff;">Official Operation</th>
                        <th style="padding: 0.85rem; color: var(--accent-emerald);">الشرح بالعامية المصرية</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style="border-bottom: 1px solid var(--border-color);">
                        <td style="padding: 0.85rem; font-family: var(--font-mono); font-weight: 700; color: var(--accent-cyan);">0011</td>
                        <td style="padding: 0.85rem; font-family: var(--font-mono); font-weight: 800; color: var(--accent-amber); font-size: 1.1rem;">3</td>
                        <td style="padding: 0.85rem; font-weight: 700;">Load AC from Memory</td>
                        <td style="padding: 0.85rem; color: var(--text-secondary);">اذهب للعنوان المعطى بالذاكرة وانسخ الرقم وضعه داخل مسجل AC</td>
                      </tr>
                      <tr style="border-bottom: 1px solid var(--border-color);">
                        <td style="padding: 0.85rem; font-family: var(--font-mono); font-weight: 700; color: var(--accent-cyan);">0100</td>
                        <td style="padding: 0.85rem; font-family: var(--font-mono); font-weight: 800; color: var(--accent-amber); font-size: 1.1rem;">4</td>
                        <td style="padding: 0.85rem; font-weight: 700;">Store AC to Memory</td>
                        <td style="padding: 0.85rem; color: var(--text-secondary);">انسخ القيمة الموجودة داخل مسجل AC وخزنها في عنوان الذاكرة المعطى</td>
                      </tr>
                      <tr>
                        <td style="padding: 0.85rem; font-family: var(--font-mono); font-weight: 700; color: var(--accent-cyan);">0111</td>
                        <td style="padding: 0.85rem; font-family: var(--font-mono); font-weight: 800; color: var(--accent-amber); font-size: 1.1rem;">7</td>
                        <td style="padding: 0.85rem; font-weight: 700;">Add to AC from Memory</td>
                        <td style="padding: 0.85rem; color: var(--text-secondary);">اذهب للعنوان واجمع قيمته على القيمة الحالية في AC وخزن الناتج في AC</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <!-- 05. COMPONENT 4: محاكي مسألة التتبع التفاعلي (Trace Simulator - سؤال الشيت 3.8) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">05</span>
                <h2 class="exp-sec-title">COMPONENT 4: محاكي مسألة التتبع التفاعلي (Interactive Trace Simulator - سؤال الشيت 3.8 &amp; Figure 3.5)</h2>
              </div>

              <!-- Problem Given Parameters -->
              <div class="balady-box">
                <div class="balady-header">
                  <span class="balady-badge">📌 معطيات مسألة التتبع الرسمية في الامتحان</span>
                  <span class="mono" style="font-size: 0.8rem; color: var(--accent-amber); font-weight: 700;">SHEET 3 Q3.8 // SLIDES 14-16</span>
                </div>
                <div class="two-layers-split" style="margin-top: 0.75rem;">
                  <div style="background: rgba(0,0,0,0.25); padding: 0.85rem; border-radius: 8px;">
                    <span style="font-weight: 800; color: var(--accent-cyan);">1. الحالة الابتدائية للمسجلات (Initial Registers):</span>
                    <ul style="margin-top: 0.5rem; padding-right: 1.2rem; font-family: var(--font-mono); font-size: 0.95rem; line-height: 1.8;">
                      <li>PC = 215<sub>16</sub> (يشير لأول تعليمة)</li>
                      <li>AC = 0000<sub>16</sub> (مصفّر في البداية)</li>
                      <li>IR = ---- (فارغ لم يجلب شيئاً بعد)</li>
                    </ul>
                  </div>

                  <div style="background: rgba(0,0,0,0.25); padding: 0.85rem; border-radius: 8px;">
                    <span style="font-weight: 800; color: var(--accent-emerald);">2. خريطة الذاكرة الابتدائية (Memory Map in Hex):</span>
                    <ul style="margin-top: 0.5rem; padding-right: 1.2rem; font-family: var(--font-mono); font-size: 0.95rem; line-height: 1.8;">
                      <li>Mem[215] = <strong>3400</strong> (أمر: Load AC from 400)</li>
                      <li>Mem[216] = <strong>7401</strong> (أمر: Add to AC from 401)</li>
                      <li>Mem[217] = <strong>4401</strong> (أمر: Store AC to 401)</li>
                      <li>Mem[400] = <strong>0012</strong> (بيانات: الرقم 12 بالهيكسا)</li>
                      <li>Mem[401] = <strong>1008</strong> (بيانات: الرقم 1008 بالهيكسا)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Interactive Simulator: sim-ch3-trace-exec -->
              <div class="sim-wrapper-box" data-sim-target="sim-ch3-trace-exec" style="margin-top: 1.5rem;">
                <div class="sim-header-row">
                  <div class="sim-title-group">
                    <span class="mono sim-badge">SIMULATOR // FIGURE 3.5 &amp; SHEET 3.8</span>
                    <h3 class="sim-title">مشغل تتبع البرنامج التفاعلي خطوة بخطوة (Step-by-Step Player)</h3>
                  </div>
                  <div class="sim-controls-toolbar">
                    <button type="button" class="sim-step-btn active" data-sim-step="0">Step 1: Fetch 215</button>
                    <button type="button" class="sim-step-btn" data-sim-step="1">Step 2: Load 400</button>
                    <button type="button" class="sim-step-btn" data-sim-step="2">Step 3: Fetch 216</button>
                    <button type="button" class="sim-step-btn" data-sim-step="3">Step 4: Add 401</button>
                    <button type="button" class="sim-step-btn" data-sim-step="4">Step 5: Fetch 217</button>
                    <button type="button" class="sim-step-btn" data-sim-step="5">Step 6: Store 401</button>
                    <button type="button" class="sim-step-btn play-auto" data-sim-autoplay>تشغيل تلقائي ⏵</button>
                  </div>
                </div>

                <div class="sim-display-screen">
                  <div class="sim-step-details-card">
                    <div class="sim-step-header">
                      <span class="sim-active-num mono">01</span>
                      <h4 class="sim-active-title">الخطوة 1 (Cycle 1 - Fetch): جلب التعليمة الأولى من العنوان 215</h4>
                    </div>
                    <div class="sim-active-route mono">Mem[215] = 3400H ──► IR = 3400H | PC = 215 + 1 = 216H | AC = 0000H</div>
                    <div class="sim-active-payload">📥 Step 1 (Fetch 1): قراءة 3400 من العنوان 215 إلى IR، وزيادة PC فوراً ليصبح 216</div>
                    <p class="sim-active-desc">البداية كانت PC = 215. يذهب المعالج للعنوان 215 فيقرأ الكود 3400 ويضعه في IR، ويزيد الـ PC بواحد فوراً في مرحلة الـ Fetch ليصبح PC = 216، بينما يظل AC = 0000.</p>
                  </div>
                </div>
              </div>

              <!-- The Detailed 6 Steps Breakdown in ASCII & Cards -->
              <div style="margin-top: 1.5rem;">
                <h3 style="font-size: 1.15rem; color: #fff; font-weight: 800; margin-bottom: 0.75rem;">
                  📖 الخطوات الستة للمحاكي بالتفصيل المعماري الكامل (سلايد 14 إلى 16):
                </h3>

                <!-- STEP 1 -->
                <div class="trace-step-card" style="margin-bottom: 1rem; border: 1px solid rgba(56, 189, 248, 0.3);">
                  <div class="trace-step-header" style="background: rgba(56, 189, 248, 0.1);">
                    <span class="mono" style="font-weight: 800; color: var(--accent-cyan);">STEP 1: Fetch Cycle for Address 215 (دورة الجلب الأولى)</span>
                    <span class="mono" style="font-size: 0.75rem; color: var(--text-muted);">CYCLE 1 // FETCH</span>
                  </div>
                  <div style="padding: 1rem;">
                    <p><strong>• Action:</strong></p>
                    <ol style="margin-top: 0.35rem; padding-right: 1.2rem; font-size: 0.95rem; line-height: 1.7;">
                      <li>المعالج ينظر للمسجل PC فيجد العنوان <strong>215H</strong>.</li>
                      <li>يتم جلب الكود <strong>3400H</strong> من الخانة 215H وتخزينه في مسجل التعليمة IR.</li>
                      <li>يتم زيادة عداد البرنامج تلقائياً: <span class="mono">PC = 215H + 1 = 216H</span>.</li>
                    </ol>
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 0.75rem; font-family: var(--font-mono); font-size: 0.9rem;">
                      <span class="badge" style="background: rgba(56, 189, 248, 0.15); color: var(--accent-cyan); padding: 0.35rem 0.65rem; border-radius: 4px;">PC: 216H (تم تحديثه)</span>
                      <span class="badge" style="background: rgba(56, 189, 248, 0.15); color: var(--accent-cyan); padding: 0.35rem 0.65rem; border-radius: 4px;">IR: 3400H (تم تحميله)</span>
                      <span class="badge" style="background: rgba(255, 255, 255, 0.05); color: var(--text-muted); padding: 0.35rem 0.65rem; border-radius: 4px;">AC: 0000H (بدون تغيير)</span>
                      <span class="badge" style="background: rgba(255, 255, 255, 0.05); color: var(--text-muted); padding: 0.35rem 0.65rem; border-radius: 4px;">Memory State: لا تغيير</span>
                    </div>
                  </div>
                </div>

                <!-- STEP 2 -->
                <div class="trace-step-card" style="margin-bottom: 1rem; border: 1px solid rgba(245, 158, 11, 0.3);">
                  <div class="trace-step-header" style="background: rgba(245, 158, 11, 0.1);">
                    <span class="mono" style="font-weight: 800; color: var(--accent-amber);">STEP 2: Execute Cycle (Load AC from Address 400)</span>
                    <span class="mono" style="font-size: 0.75rem; color: var(--text-muted);">CYCLE 1 // EXECUTE</span>
                  </div>
                  <div style="padding: 1rem;">
                    <p><strong>• Action:</strong></p>
                    <ol style="margin-top: 0.35rem; padding-right: 1.2rem; font-size: 0.95rem; line-height: 1.7;">
                      <li>فك شفرة التعليمة في IR (3400H):
                        <ul>
                          <li><span class="mono">Opcode = 3H</span> ===&gt; <strong>Load AC from Memory</strong>.</li>
                          <li><span class="mono">Address = 400H</span> ===&gt; العنوان المستهدف.</li>
                        </ul>
                      </li>
                      <li>يذهب المعالج للخانة 400H فيجد القيمة <strong>0012H</strong>.</li>
                      <li>يتم تحميل القيمة 0012H داخل مسجل التراكم AC.</li>
                    </ol>
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 0.75rem; font-family: var(--font-mono); font-size: 0.9rem;">
                      <span class="badge" style="background: rgba(255, 255, 255, 0.05); color: var(--text-muted); padding: 0.35rem 0.65rem; border-radius: 4px;">PC: 216H</span>
                      <span class="badge" style="background: rgba(255, 255, 255, 0.05); color: var(--text-muted); padding: 0.35rem 0.65rem; border-radius: 4px;">IR: 3400H</span>
                      <span class="badge" style="background: rgba(245, 158, 11, 0.15); color: var(--accent-amber); padding: 0.35rem 0.65rem; border-radius: 4px;">AC: 0012H (تم تحميل البيانات بنجاح)</span>
                      <span class="badge" style="background: rgba(255, 255, 255, 0.05); color: var(--text-muted); padding: 0.35rem 0.65rem; border-radius: 4px;">Memory: (400H = 0012H, 401H = 1008H)</span>
                    </div>
                  </div>
                </div>

                <!-- STEP 3 -->
                <div class="trace-step-card" style="margin-bottom: 1rem; border: 1px solid rgba(56, 189, 248, 0.3);">
                  <div class="trace-step-header" style="background: rgba(56, 189, 248, 0.1);">
                    <span class="mono" style="font-weight: 800; color: var(--accent-cyan);">STEP 3: Fetch Cycle for Address 216 (دورة الجلب الثانية)</span>
                    <span class="mono" style="font-size: 0.75rem; color: var(--text-muted);">CYCLE 2 // FETCH</span>
                  </div>
                  <div style="padding: 1rem;">
                    <p><strong>• Action:</strong></p>
                    <ol style="margin-top: 0.35rem; padding-right: 1.2rem; font-size: 0.95rem; line-height: 1.7;">
                      <li>المعالج ينظر للمسجل PC فيجد العنوان <strong>216H</strong>.</li>
                      <li>يتم جلب الكود <strong>7401H</strong> من الخانة 216H ووضعه في مسجل IR.</li>
                      <li>يتم زيادة عداد البرنامج تلقائياً: <span class="mono">PC = 216H + 1 = 217H</span>.</li>
                    </ol>
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 0.75rem; font-family: var(--font-mono); font-size: 0.9rem;">
                      <span class="badge" style="background: rgba(56, 189, 248, 0.15); color: var(--accent-cyan); padding: 0.35rem 0.65rem; border-radius: 4px;">PC: 217H (تم تحديثه)</span>
                      <span class="badge" style="background: rgba(56, 189, 248, 0.15); color: var(--accent-cyan); padding: 0.35rem 0.65rem; border-radius: 4px;">IR: 7401H (تم تحميله)</span>
                      <span class="badge" style="background: rgba(255, 255, 255, 0.05); color: var(--text-muted); padding: 0.35rem 0.65rem; border-radius: 4px;">AC: 0012H (محتفظ بقيمته السابقة)</span>
                      <span class="badge" style="background: rgba(255, 255, 255, 0.05); color: var(--text-muted); padding: 0.35rem 0.65rem; border-radius: 4px;">Memory State: لا تغيير</span>
                    </div>
                  </div>
                </div>

                <!-- STEP 4 -->
                <div class="trace-step-card" style="margin-bottom: 1rem; border: 1px solid rgba(16, 185, 129, 0.3);">
                  <div class="trace-step-header" style="background: rgba(16, 185, 129, 0.1);">
                    <span class="mono" style="font-weight: 800; color: var(--accent-emerald);">STEP 4: Execute Cycle (Add Address 401 to AC)</span>
                    <span class="mono" style="font-size: 0.75rem; color: var(--text-muted);">CYCLE 2 // EXECUTE</span>
                  </div>
                  <div style="padding: 1rem;">
                    <p><strong>• Action:</strong></p>
                    <ol style="margin-top: 0.35rem; padding-right: 1.2rem; font-size: 0.95rem; line-height: 1.7;">
                      <li>فك شفرة التعليمة في IR (7401H):
                        <ul>
                          <li><span class="mono">Opcode = 7H</span> ===&gt; <strong>Add to AC from Memory</strong>.</li>
                          <li><span class="mono">Address = 401H</span> ===&gt; العنوان المستهدف.</li>
                        </ul>
                      </li>
                      <li>يذهب المعالج للخانة 401H فيجد القيمة <strong>1008H</strong>.</li>
                      <li>تجري وحدة الـ ALU عملية جمع بنظام الهيكسا:
                        <div style="font-family: var(--font-mono); background: rgba(0,0,0,0.3); padding: 0.5rem 1rem; border-radius: 6px; width: fit-content; margin: 0.5rem 0;">
                          &nbsp;&nbsp;0012H<br>
                          + 1008H<br>
                          -------<br>
                          &nbsp;&nbsp;<strong>101AH</strong> &nbsp;&nbsp;(2 + 8 = 10 بالعشري، وتكتب A بنظام الهيكسا!)
                        </div>
                      </li>
                      <li>يتم تخزين الناتج <strong>101AH</strong> داخل مسجل AC.</li>
                    </ol>
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 0.75rem; font-family: var(--font-mono); font-size: 0.9rem;">
                      <span class="badge" style="background: rgba(255, 255, 255, 0.05); color: var(--text-muted); padding: 0.35rem 0.65rem; border-radius: 4px;">PC: 217H</span>
                      <span class="badge" style="background: rgba(255, 255, 255, 0.05); color: var(--text-muted); padding: 0.35rem 0.65rem; border-radius: 4px;">IR: 7401H</span>
                      <span class="badge" style="background: rgba(16, 185, 129, 0.15); color: var(--accent-emerald); padding: 0.35rem 0.65rem; border-radius: 4px;">AC: 101AH (القيمة المجمعة الجديدة)</span>
                      <span class="badge" style="background: rgba(255, 255, 255, 0.05); color: var(--text-muted); padding: 0.35rem 0.65rem; border-radius: 4px;">Memory State: لا تغيير</span>
                    </div>
                  </div>
                </div>

                <!-- STEP 5 -->
                <div class="trace-step-card" style="margin-bottom: 1rem; border: 1px solid rgba(56, 189, 248, 0.3);">
                  <div class="trace-step-header" style="background: rgba(56, 189, 248, 0.1);">
                    <span class="mono" style="font-weight: 800; color: var(--accent-cyan);">STEP 5: Fetch Cycle for Address 217 (دورة الجلب الثالثة)</span>
                    <span class="mono" style="font-size: 0.75rem; color: var(--text-muted);">CYCLE 3 // FETCH</span>
                  </div>
                  <div style="padding: 1rem;">
                    <p><strong>• Action:</strong></p>
                    <ol style="margin-top: 0.35rem; padding-right: 1.2rem; font-size: 0.95rem; line-height: 1.7;">
                      <li>المعالج ينظر للمسجل PC فيجد العنوان <strong>217H</strong>.</li>
                      <li>يتم جلب الكود <strong>4401H</strong> من الخانة 217H ووضعه في مسجل IR.</li>
                      <li>يتم زيادة عداد البرنامج تلقائياً: <span class="mono">PC = 217H + 1 = 218H</span>.</li>
                    </ol>
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 0.75rem; font-family: var(--font-mono); font-size: 0.9rem;">
                      <span class="badge" style="background: rgba(56, 189, 248, 0.15); color: var(--accent-cyan); padding: 0.35rem 0.65rem; border-radius: 4px;">PC: 218H (تم تحديثه)</span>
                      <span class="badge" style="background: rgba(56, 189, 248, 0.15); color: var(--accent-cyan); padding: 0.35rem 0.65rem; border-radius: 4px;">IR: 4401H (تم تحميله)</span>
                      <span class="badge" style="background: rgba(255, 255, 255, 0.05); color: var(--text-muted); padding: 0.35rem 0.65rem; border-radius: 4px;">AC: 101AH (بدون تغيير)</span>
                      <span class="badge" style="background: rgba(255, 255, 255, 0.05); color: var(--text-muted); padding: 0.35rem 0.65rem; border-radius: 4px;">Memory State: لا تغيير</span>
                    </div>
                  </div>
                </div>

                <!-- STEP 6 -->
                <div class="trace-step-card" style="margin-bottom: 1rem; border: 1px solid rgba(236, 72, 153, 0.3);">
                  <div class="trace-step-header" style="background: rgba(236, 72, 153, 0.1);">
                    <span class="mono" style="font-weight: 800; color: #ec4899;">STEP 6: Execute Cycle (Store AC to Address 401)</span>
                    <span class="mono" style="font-size: 0.75rem; color: var(--text-muted);">CYCLE 3 // EXECUTE</span>
                  </div>
                  <div style="padding: 1rem;">
                    <p><strong>• Action:</strong></p>
                    <ol style="margin-top: 0.35rem; padding-right: 1.2rem; font-size: 0.95rem; line-height: 1.7;">
                      <li>فك شفرة التعليمة في IR (4401H):
                        <ul>
                          <li><span class="mono">Opcode = 4H</span> ===&gt; <strong>Store AC to Memory</strong>.</li>
                          <li><span class="mono">Address = 401H</span> ===&gt; العنوان المستهدف للكتابة.</li>
                        </ul>
                      </li>
                      <li>يأخذ المعالج القيمة الحالية في AC (وهي <strong>101AH</strong>) ويكتبها في خانة الذاكرة 401H.</li>
                      <li>يتم استبدال ومسح القيمة القديمة (1008H) وتصبح القيمة الجديدة (101AH).</li>
                      <li><strong>مسجل AC يظل محتفظاً بقيمته 101AH دون أي مسح أو تصفير!</strong></li>
                    </ol>
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 0.75rem; font-family: var(--font-mono); font-size: 0.9rem;">
                      <span class="badge" style="background: rgba(255, 255, 255, 0.05); color: var(--text-muted); padding: 0.35rem 0.65rem; border-radius: 4px;">PC: 218H</span>
                      <span class="badge" style="background: rgba(255, 255, 255, 0.05); color: var(--text-muted); padding: 0.35rem 0.65rem; border-radius: 4px;">IR: 4401H</span>
                      <span class="badge" style="background: rgba(236, 72, 153, 0.15); color: #ec4899; padding: 0.35rem 0.65rem; border-radius: 4px;">AC: 101AH (ثابت دون تصفير)</span>
                      <span class="badge" style="background: rgba(236, 72, 153, 0.15); color: #ec4899; padding: 0.35rem 0.65rem; border-radius: 4px;">Mem[401]: 101AH (OVERWRITTEN!)</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Summary Register Snapshot Table -->
              <div style="margin-top: 1.5rem;">
                <h3 style="font-size: 1.15rem; color: var(--accent-cyan); font-weight: 800; margin-bottom: 0.75rem;">
                  📊 جدول ملخص لقطات المسجلات عبر الخطوات الست (Register Snapshots Master Table):
                </h3>
                <div style="overflow-x: auto;">
                  <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; text-align: center; background: var(--bg-surface-1); border-radius: 8px; overflow: hidden; border: 1px solid var(--border-color);">
                    <thead>
                      <tr style="background: rgba(255,255,255,0.05); border-bottom: 2px solid var(--border-color);">
                        <th style="padding: 0.75rem; color: #fff;">الخطوة (Step)</th>
                        <th style="padding: 0.75rem; color: var(--accent-cyan);">نوع المرحلة</th>
                        <th style="padding: 0.75rem; color: var(--accent-cyan); font-family: var(--font-mono);">PC</th>
                        <th style="padding: 0.75rem; color: var(--accent-cyan); font-family: var(--font-mono);">IR</th>
                        <th style="padding: 0.75rem; color: var(--accent-cyan); font-family: var(--font-mono);">AC</th>
                        <th style="padding: 0.75rem; color: var(--accent-emerald); font-family: var(--font-mono);">Mem[400]</th>
                        <th style="padding: 0.75rem; color: var(--accent-emerald); font-family: var(--font-mono);">Mem[401]</th>
                      </tr>
                    </thead>
                    <tbody style="font-family: var(--font-mono);">
                      <tr style="border-bottom: 1px solid var(--border-color);">
                        <td style="padding: 0.75rem; font-weight: 700;">Initial</td>
                        <td style="padding: 0.75rem; color: var(--text-muted); font-family: var(--font-ar);">البداية</td>
                        <td style="padding: 0.75rem;">215</td>
                        <td style="padding: 0.75rem; color: var(--text-muted);">----</td>
                        <td style="padding: 0.75rem;">0000</td>
                        <td style="padding: 0.75rem;">0012</td>
                        <td style="padding: 0.75rem;">1008</td>
                      </tr>
                      <tr style="border-bottom: 1px solid var(--border-color); background: rgba(56, 189, 248, 0.03);">
                        <td style="padding: 0.75rem; font-weight: 700; color: var(--accent-cyan);">Step 1</td>
                        <td style="padding: 0.75rem; color: var(--accent-cyan); font-family: var(--font-ar);">Fetch 215</td>
                        <td style="padding: 0.75rem; font-weight: 700; color: var(--accent-cyan);">216</td>
                        <td style="padding: 0.75rem; font-weight: 700;">3400</td>
                        <td style="padding: 0.75rem;">0000</td>
                        <td style="padding: 0.75rem;">0012</td>
                        <td style="padding: 0.75rem;">1008</td>
                      </tr>
                      <tr style="border-bottom: 1px solid var(--border-color); background: rgba(245, 158, 11, 0.03);">
                        <td style="padding: 0.75rem; font-weight: 700; color: var(--accent-amber);">Step 2</td>
                        <td style="padding: 0.75rem; color: var(--accent-amber); font-family: var(--font-ar);">Execute Load 400</td>
                        <td style="padding: 0.75rem;">216</td>
                        <td style="padding: 0.75rem;">3400</td>
                        <td style="padding: 0.75rem; font-weight: 700; color: var(--accent-amber);">0012</td>
                        <td style="padding: 0.75rem;">0012</td>
                        <td style="padding: 0.75rem;">1008</td>
                      </tr>
                      <tr style="border-bottom: 1px solid var(--border-color); background: rgba(56, 189, 248, 0.03);">
                        <td style="padding: 0.75rem; font-weight: 700; color: var(--accent-cyan);">Step 3</td>
                        <td style="padding: 0.75rem; color: var(--accent-cyan); font-family: var(--font-ar);">Fetch 216</td>
                        <td style="padding: 0.75rem; font-weight: 700; color: var(--accent-cyan);">217</td>
                        <td style="padding: 0.75rem; font-weight: 700;">7401</td>
                        <td style="padding: 0.75rem;">0012</td>
                        <td style="padding: 0.75rem;">0012</td>
                        <td style="padding: 0.75rem;">1008</td>
                      </tr>
                      <tr style="border-bottom: 1px solid var(--border-color); background: rgba(16, 185, 129, 0.03);">
                        <td style="padding: 0.75rem; font-weight: 700; color: var(--accent-emerald);">Step 4</td>
                        <td style="padding: 0.75rem; color: var(--accent-emerald); font-family: var(--font-ar);">Execute Add 401</td>
                        <td style="padding: 0.75rem;">217</td>
                        <td style="padding: 0.75rem;">7401</td>
                        <td style="padding: 0.75rem; font-weight: 800; color: var(--accent-emerald);">101A</td>
                        <td style="padding: 0.75rem;">0012</td>
                        <td style="padding: 0.75rem;">1008</td>
                      </tr>
                      <tr style="border-bottom: 1px solid var(--border-color); background: rgba(56, 189, 248, 0.03);">
                        <td style="padding: 0.75rem; font-weight: 700; color: var(--accent-cyan);">Step 5</td>
                        <td style="padding: 0.75rem; color: var(--accent-cyan); font-family: var(--font-ar);">Fetch 217</td>
                        <td style="padding: 0.75rem; font-weight: 700; color: var(--accent-cyan);">218</td>
                        <td style="padding: 0.75rem; font-weight: 700;">4401</td>
                        <td style="padding: 0.75rem;">101A</td>
                        <td style="padding: 0.75rem;">0012</td>
                        <td style="padding: 0.75rem;">1008</td>
                      </tr>
                      <tr style="background: rgba(236, 72, 153, 0.05);">
                        <td style="padding: 0.75rem; font-weight: 700; color: #ec4899;">Step 6</td>
                        <td style="padding: 0.75rem; color: #ec4899; font-family: var(--font-ar);">Execute Store 401</td>
                        <td style="padding: 0.75rem;">218</td>
                        <td style="padding: 0.75rem;">4401</td>
                        <td style="padding: 0.75rem; font-weight: 800; color: #ec4899;">101A</td>
                        <td style="padding: 0.75rem;">0012</td>
                        <td style="padding: 0.75rem; font-weight: 800; color: #ec4899;">101A ⚠️</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <!-- 06. COMPONENT 5: كروت مصائد الامتحانات (Exam Traps Callouts) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">06</span>
                <h2 class="exp-sec-title">COMPONENT 5: كروت مصائد الامتحانات (Exam Traps Callouts)</h2>
              </div>

              <div class="attr-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
                <!-- Trap 1 -->
                <div class="exam-trap-box" style="margin-top: 0;">
                  <div class="exam-trap-header">
                    <span class="exam-trap-badge">⚠️ تريكة 1 // توقيت زيادة عداد البرنامج</span>
                  </div>
                  <h4 style="font-size: 1rem; color: #fff; margin-top: 0.5rem;">PC Increment Timing</h4>
                  <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-secondary); margin-top: 0.35rem;">
                    <strong>السؤال الشائع:</strong> <em>"In which phase is the Program Counter incremented?"</em><br>
                    <strong>الإجابة القاطعة:</strong> يتم زيادة الـ PC في نهاية مرحلة <strong>الجلب (FETCH CYCLE)</strong> وليس أثناء مرحلة التنفيذ (Execute). المعالج يجهز عنوان التعليمة التالية فور جلب الحالية وقبل تنفيذها!
                  </p>
                </div>

                <!-- Trap 2 -->
                <div class="exam-trap-box" style="margin-top: 0;">
                  <div class="exam-trap-header">
                    <span class="exam-trap-badge">⚠️ تريكة 2 // مصيدة جمع الهيكسا</span>
                  </div>
                  <h4 style="font-size: 1rem; color: #fff; margin-top: 0.5rem;">Hexadecimal Addition Trap</h4>
                  <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-secondary); margin-top: 0.35rem;">
                    <strong>الخطأ القاتل:</strong> في الخطوة الرابعة عند جمع <span class="mono">0012<sub>16</sub> + 1008<sub>16</sub></span>.<br>
                    الطلاب بيكتبوها 1020 أو 1010! افتكر دايماً إن <span class="mono">2 + 8 = 10</span> بالعشري، وفي الهيكسا الرقم 10 يُكتب <strong>'A'</strong>، فالناتج الصحيح هو <strong>101A</strong>!
                  </p>
                </div>

                <!-- Trap 3 -->
                <div class="exam-trap-box" style="margin-top: 0;">
                  <div class="exam-trap-header">
                    <span class="exam-trap-badge">⚠️ تريكة 3 // سلوك أمر التخزين</span>
                  </div>
                  <h4 style="font-size: 1rem; color: #fff; margin-top: 0.5rem;">Store Instruction Behavior</h4>
                  <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-secondary); margin-top: 0.35rem;">
                    <strong>السؤال الشائع:</strong> هل أمر الـ <span class="mono">STORE (Opcode 4)</span> بيمسح أو يصفر الـ AC؟<br>
                    <strong>الإجابة القاطعة:</strong> أمر التخزين ينسخ القيمة فقط من AC إلى الرام، و<strong>لا يصفر المسجل AC إطلاقاً</strong>؛ بل يظل AC محتفظاً بنفس قيمته (101A) كما هي دون أي تغيير!
                  </p>
                </div>

                <!-- Trap 4 -->
                <div class="exam-trap-box" style="margin-top: 0;">
                  <div class="exam-trap-header">
                    <span class="exam-trap-badge">⚠️ تريكة 4 // تعدد المعاملات</span>
                  </div>
                  <h4 style="font-size: 1rem; color: #fff; margin-top: 0.5rem;">Multiple Operands Loop</h4>
                  <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-secondary); margin-top: 0.35rem;">
                    <strong>السؤال الشائع:</strong> هل يمكن لتعليمة واحدة جلب أكثر من معامل من الذاكرة؟<br>
                    <strong>الإجابة القاطعة:</strong> نعم؛ بدليل وجود مسار راجع في مخطط الحالات من <span class="mono">Data Operation (do)</span> عائداً إلى <span class="mono">Operand Address Calculation (oac)</span> لتكرار جلب المعامل الثاني والثالث!
                  </p>
                </div>
              </div>
            </section>

            <!-- 07. INSTANT EXAM BUZZWORDS -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">07</span>
                <h2 class="exp-sec-title">⚡ INSTANT EXAM BUZZWORDS (كلمات السر لحل أسئلة الـ MCQs في ثانية)</h2>
              </div>

              <div class="buzzwords-matrix">
                <div class="buzz-card">
                  <div class="buzz-trigger">
                    <span class="buzz-tag">لو شفت في السؤال 👇</span>
                    <p class="buzz-desc">"Processor reads instruction from memory at PC and increments PC"</p>
                  </div>
                  <div class="buzz-response">
                    <span class="buzz-tag cyan">الإجابة فوراً 👈</span>
                    <strong style="color: var(--accent-cyan); font-size: 1.05rem;">FETCH CYCLE (دورة الجلب)</strong>
                  </div>
                </div>

                <div class="buzz-card">
                  <div class="buzz-trigger">
                    <span class="buzz-tag">لو شفت في السؤال 👇</span>
                    <p class="buzz-desc">"Decodes opcode and activates execution hardware logic"</p>
                  </div>
                  <div class="buzz-response">
                    <span class="buzz-tag cyan">الإجابة فوراً 👈</span>
                    <strong style="color: var(--accent-cyan); font-size: 1.05rem;">EXECUTE CYCLE (دورة التنفيذ)</strong>
                  </div>
                </div>

                <div class="buzz-card">
                  <div class="buzz-trigger">
                    <span class="buzz-tag">لو شفت في السؤال 👇</span>
                    <p class="buzz-desc">"State that determines the memory address of the next instruction"</p>
                  </div>
                  <div class="buzz-response">
                    <span class="buzz-tag amber">الإجابة فوراً 👈</span>
                    <strong style="color: var(--accent-amber); font-size: 1.05rem;">iac (Instruction Address Calculation)</strong>
                  </div>
                </div>

                <div class="buzz-card">
                  <div class="buzz-trigger">
                    <span class="buzz-tag">لو شفت في السؤال 👇</span>
                    <p class="buzz-desc">"State that analyzes the opcode to determine required operation"</p>
                  </div>
                  <div class="buzz-response">
                    <span class="buzz-tag amber">الإجابة فوراً 👈</span>
                    <strong style="color: var(--accent-amber); font-size: 1.05rem;">iod (Instruction Operation Decoding)</strong>
                  </div>
                </div>

                <div class="buzz-card">
                  <div class="buzz-trigger">
                    <span class="buzz-tag">لو شفت في السؤال 👇</span>
                    <p class="buzz-desc">"Hypothetical machine 16-bit instruction: opcode width and memory address width"</p>
                  </div>
                  <div class="buzz-response">
                    <span class="buzz-tag emerald">الإجابة فوراً 👈</span>
                    <strong style="color: var(--accent-emerald); font-size: 1.05rem;">4-bit Opcode (16 operations) &amp; 12-bit Address (4096 words)</strong>
                  </div>
                </div>

                <div class="buzz-card">
                  <div class="buzz-trigger">
                    <span class="buzz-tag">لو شفت في السؤال 👇</span>
                    <p class="buzz-desc">"In the 3-cycle execution trace, what is the final value of AC and Mem[401]?"</p>
                  </div>
                  <div class="buzz-response">
                    <span class="buzz-tag pink">الإجابة فوراً 👈</span>
                    <strong style="color: #ec4899; font-size: 1.05rem;">AC = 101AH &amp; Mem[401] = 101AH</strong>
                  </div>
                </div>
              </div>
            </section>

            <!-- 08. POPULAR EXAM TRUE / FALSE DRILLS -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">08</span>
                <h2 class="exp-sec-title">POPULAR EXAM TRUE / FALSE DRILLS (أسئلة صح وغلط المشهورة — تفاعلية)</h2>
              </div>

              <div class="tf-drills-grid">
                <div class="tf-item-card">
                  <div class="tf-q-text">
                    <strong>Q1:</strong> The Program Counter (PC) is incremented during the Execute Cycle after the operation completes.
                  </div>
                  <div style="margin-top: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span class="tf-badge false">FALSE ❌</span>
                    <span style="font-size: 0.88rem; color: var(--text-secondary);">
                      <strong>السبب بالعامية:</strong> غلط تماماً! الـ PC بيزيد بواحد فوراً أثناء مرحلة الـ <strong>Fetch</strong> عشان يجهز للأمر اللي بعده قبل ما نبدأ ننفذ أصلاً.
                    </span>
                  </div>
                </div>

                <div class="tf-item-card">
                  <div class="tf-q-text">
                    <strong>Q2:</strong> A single instruction execution cycle may involve fetching more than one operand from memory.
                  </div>
                  <div style="margin-top: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span class="tf-badge true">TRUE ✅</span>
                    <span style="font-size: 0.88rem; color: var(--text-secondary);">
                      <strong>السبب بالعامية:</strong> صح 100%! بدليل وجود مسار راجع في مخطط الحالات من (do) عائداً إلى (oac) لجلب معاملات إضافية لو التعليمة محتاجة أكتر من رقم.
                    </span>
                  </div>
                </div>

                <div class="tf-item-card">
                  <div class="tf-q-text">
                    <strong>Q3:</strong> Executing a STORE instruction (e.g., Opcode 0100) automatically resets the Accumulator (AC) to 0000.
                  </div>
                  <div style="margin-top: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span class="tf-badge false">FALSE ❌</span>
                    <span style="font-size: 0.88rem; color: var(--text-secondary);">
                      <strong>السبب بالعامية:</strong> غلط! أمر التخزين بينسخ محتوى الـ AC للرام، والـ AC يفضل محتفظ بقيمته زي ما هي من غير تصفير.
                    </span>
                  </div>
                </div>

                <div class="tf-item-card">
                  <div class="tf-q-text">
                    <strong>Q4:</strong> In the hypothetical machine of Chapter 3, an instruction format with 4-bit opcode allows up to 16 different operations.
                  </div>
                  <div style="margin-top: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span class="tf-badge true">TRUE ✅</span>
                    <span style="font-size: 0.88rem; color: var(--text-secondary);">
                      <strong>السبب بالعامية:</strong> صح لأن 2<sup>4</sup> = 16 أمراً مختلفاً.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <!-- 09. COMPONENT 6: مركز إجابات الشيت الرسمي (Sheet 3 Official Solutions Hub) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">09</span>
                <h2 class="exp-sec-title">COMPONENT 6: مركز إجابات الشيت الرسمي (Sheet 3 Official Solutions Hub — أسئلة 3.4، 3.5، 3.8)</h2>
              </div>

              <!-- Accordion Item 1: Question 3.4 -->
              <div class="sheet-card" style="margin-bottom: 1.25rem;">
                <div class="sheet-q-box">
                  <span class="mono" style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700;">QUESTION 3.4 // SHEET 3</span>
                  <p style="font-family: var(--font-en); font-weight: 700; font-size: 1.05rem; margin-top: 0.35rem;">
                    "Briefly describe the basic instruction cycle."
                  </p>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
                  <span style="font-weight: 800; color: var(--accent-emerald);">✅ Model Answer (الإجابة النموذجية):</span>
                  <button type="button" class="tool-pill-btn" onclick="const box = this.parentElement.nextElementSibling; if(box.style.display==='none'){box.style.display='block'; this.innerText='إخفاء الإجابة للتسميع';} else {box.style.display='none'; this.innerText='إظهار الإجابة';}">إخفاء الإجابة للتسميع</button>
                </div>

                <div class="sheet-ans-box" style="display: block;">
                  <div class="en-def-box" style="margin-bottom: 0.75rem;">
                    <p class="en-def-text">
                      The basic instruction cycle consists of two repetitive primary phases:
                    </p>
                    <ol style="margin-top: 0.5rem; padding-left: 1.2rem; font-family: var(--font-en); line-height: 1.7;">
                      <li><strong>Fetch Cycle:</strong> The processor reads the instruction from the memory location indicated by the Program Counter (PC) and loads it into the Instruction Register (IR). The PC is automatically incremented to point to the next sequential instruction.</li>
                      <li><strong>Execute Cycle:</strong> The control unit decodes the binary opcode in the IR and executes the required operation (such as processor-memory transfer, processor-I/O transfer, data processing in the ALU, or control branching).</li>
                    </ol>
                  </div>
                  <div class="balady-box">
                    <strong>الترجمة والشرح بالعامية للتسميع:</strong>
                    دورة التعليمة البسيطة بتتكون من مرحلتين رئيسيتين بيتكرروا:
                    1. <strong>دورة الجلب (Fetch):</strong> المعالج يقرأ التعليمة من عنوان الرام الموجود في الـ PC ويحطها في الـ IR، ويزود الـ PC بواحد تلقائياً.
                    2. <strong>دورة التنفيذ (Execute):</strong> وحدة التحكم تفك شفرة الـ Opcode في الـ IR وتنفذ العملية (نقل داتا للرام، تواصل مع I/O، حساب ومنطق في ALU، أو قفز Branch).
                  </div>
                </div>
              </div>

              <!-- Accordion Item 2: Question 3.5 -->
              <div class="sheet-card" style="margin-bottom: 1.25rem;">
                <div class="sheet-q-box">
                  <span class="mono" style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700;">QUESTION 3.5 // SHEET 3</span>
                  <p style="font-family: var(--font-en); font-weight: 700; font-size: 1.05rem; margin-top: 0.35rem;">
                    "Briefly describe what happens at each state of the Instruction Cycle State Diagram."
                  </p>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
                  <span style="font-weight: 800; color: var(--accent-emerald);">✅ Model Answer (الإجابة النموذجية):</span>
                  <button type="button" class="tool-pill-btn" onclick="const box = this.parentElement.nextElementSibling; if(box.style.display==='none'){box.style.display='block'; this.innerText='إخفاء الإجابة للتسميع';} else {box.style.display='none'; this.innerText='إظهار الإجابة';}">إخفاء الإجابة للتسميع</button>
                </div>

                <div class="sheet-ans-box" style="display: block;">
                  <div class="en-def-box" style="margin-bottom: 0.75rem;">
                    <ul style="padding-left: 1.2rem; font-family: var(--font-en); line-height: 1.8;">
                      <li><strong>Instruction Address Calculation (iac):</strong> Determines the memory address of the next instruction to be executed.</li>
                      <li><strong>Instruction Fetch (if):</strong> Reads the instruction from its memory location into the Instruction Register (IR).</li>
                      <li><strong>Instruction Operation Decoding (iod):</strong> Decodes the opcode to determine the required operation and operand types.</li>
                      <li><strong>Operand Address Calculation (oac):</strong> Calculates the effective memory or I/O address of the required operand.</li>
                      <li><strong>Operand Fetch (of):</strong> Fetches the operand from memory or reads it from an I/O device into the CPU.</li>
                      <li><strong>Data Operation (do):</strong> Performs the indicated arithmetic or logical operation within the ALU.</li>
                      <li><strong>Operand Store (os):</strong> Writes the resulting computed operand into memory or sends it to an I/O peripheral.</li>
                    </ul>
                  </div>
                  <div class="balady-box">
                    <strong>ملخص الحالات بالعامية:</strong>
                    حساب عنوان التعليمة (iac) ➔ جلب التعليمة للـ IR (if) ➔ فك الشفرة وتحديد العملية (iod) ➔ حساب عنوان المعامل (oac) ➔ جلب المعامل من الرام (of) ➔ إجراء العملية في الـ ALU (do) ➔ تخزين الناتج في الذاكرة (os).
                  </div>
                </div>
              </div>

              <!-- Accordion Item 3: Question 3.8 -->
              <div class="sheet-card" style="margin-bottom: 1.25rem;">
                <div class="sheet-q-box">
                  <span class="mono" style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700;">QUESTION 3.8 // SHEET 3</span>
                  <p style="font-family: var(--font-en); font-weight: 700; font-size: 1.05rem; margin-top: 0.35rem;">
                    "Consider a hypothetical machine with the following specifications:
                    The instruction format is 16 bits (4 bits opcode, 12 bits address).
                    CPU registers: PC, IR, AC.
                    Opcodes: 0011 (3H) = Load AC; 0100 (4H) = Store AC; 0111 (7H) = Add to AC.
                    Memory: 215: 3400, 216: 7401, 217: 4401, 400: 0012, 401: 1008.
                    Initial: PC = 215H, AC = 0000H.
                    Show contents of memory and CPU registers for 3 instruction cycles."
                  </p>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
                  <span style="font-weight: 800; color: var(--accent-emerald);">✅ Model Answer (الإجابة النموذجية):</span>
                  <button type="button" class="tool-pill-btn" onclick="const box = this.parentElement.nextElementSibling; if(box.style.display==='none'){box.style.display='block'; this.innerText='إخفاء الإجابة للتسميع';} else {box.style.display='none'; this.innerText='إظهار الإجابة';}">إخفاء الإجابة للتسميع</button>
                </div>

                <div class="sheet-ans-box" style="display: block;">
                  <div class="balady-box" style="margin-bottom: 0.75rem;">
                    <strong>خطوات الحل النموذجية المعتمدة في الامتحان:</strong>
                    تم توثيق الخطوات الست الكاملة بالتفصيل في <strong>Component 4 (محاكي مسألة التتبع)</strong> وجدول لقطات المسجلات بالأعلى. الملخص النهائي لقيم المسجلات والذاكرة بنهاية الدورات الثلاث:
                    <ul style="margin-top: 0.5rem; padding-right: 1.2rem; font-family: var(--font-mono); font-size: 0.95rem; line-height: 1.8;">
                      <li>Final PC = <strong>218H</strong> (تمت زيادته 3 مرات في دورات الـ Fetch الثلاثة).</li>
                      <li>Final IR = <strong>4401H</strong> (آخر تعليمة تم جلبها وفك شفرتها).</li>
                      <li>Final AC = <strong>101AH</strong> (القيمة الناتجة من جمع 0012H + 1008H).</li>
                      <li>Final Mem[400] = <strong>0012H</strong> (لم تتغير).</li>
                      <li>Final Mem[401] = <strong>101AH</strong> (تم تعديلها وتخزين ناتج الـ AC بداخلها في الخطوة 6).</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

          `,
          quiz: [
            {
              id: "ch3_p2_q1",
              question: "Q1. Which register temporarily holds operands and intermediate results produced by the ALU?",
              options: [
                "Program Counter (PC)",
                "Instruction Register (IR)",
                "Accumulator (AC)",
                "Memory Address Register (MAR)"
              ],
              correctIndex: 2,
              explanation: "بالعامية كده: الـ Accumulator (AC) هو 'المسودة أو درج الحسابات' بتاع المعالج اللي بيقعد فيه أي رقم جاي من الذاكرة أو ناتج جمع وطرح من الـ ALU مؤقتاً."
            },
            {
              id: "ch3_p2_q2",
              question: "Q2. [EXAM TRAP]: During which phase of the instruction cycle is the Program Counter (PC) automatically incremented by 1?",
              options: [
                "At the end of the Fetch Cycle",
                "Only after the Execute Cycle finishes",
                "Only during a Store operation (os)",
                "Never; the programmer must manually increment PC"
              ],
              correctIndex: 0,
              explanation: "تريكة الامتحان رقم 1: عداد البرنامج (PC) بيزيد بواحد (PC = PC + 1) تلقائياً في نهاية مرحلة الجلب (Fetch Cycle) أول ما نقرأ التعليمة، مش في الـ Execute!"
            },
            {
              id: "ch3_p2_q3",
              question: "Q3. Which of the following is NOT one of the 4 Action Classes of instruction execution (Slide 10)?",
              options: [
                "Processor - Memory data transfer",
                "Processor - I/O data transfer",
                "Data Processing (ALU arithmetic/logic)",
                "Manual hardware re-soldering"
              ],
              correctIndex: 3,
              explanation: "فئات التنفيذ الأربعة في سلايد 10 هما: (1) Processor-Memory، و(2) Processor-I/O، و(3) Data Processing، و(4) Control. أكيد لحام الهاردوير مش منها!"
            },
            {
              id: "ch3_p2_q4",
              question: "Q4. In the Instruction Cycle State Diagram (Figure 3.6), what does the state 'iod' stand for?",
              options: [
                "Input/Output Data transfer",
                "Instruction Operation Decoding",
                "Immediate Operand Division",
                "Internal Organization Design"
              ],
              correctIndex: 1,
              explanation: "في مخطط الحالات (Figure 3.6)، الرمز iod اختصار لـ Instruction Operation Decoding، يعني مرحلة فك شفرة الـ Opcode عشان وحدة التحكم تفهم نوع العملية."
            },
            {
              id: "ch3_p2_q5",
              question: "Q5. [EXAM TRAP]: According to Figure 3.6, how does the processor handle an instruction that requires fetching MULTIPLE operands from memory?",
              options: [
                "It halts the computer immediately",
                "It follows the loop from Data Operation (do) / Operand Fetch (of) back to Operand Address Calculation (oac)",
                "It skips the Instruction Fetch (if) state",
                "It clears the Program Counter to 0000"
              ],
              correctIndex: 1,
              explanation: "تريكة مخطط الحالات (Trap 4): لو التعليمة محتاجة أكتر من معامل (Multiple Operands)، فيه سهم راجع (Loop) بيرجع من do إلى oac و of عشان يحسب عنوان المعامل التاني ويجيبه!"
            },
            {
              id: "ch3_p2_q6",
              question: "Q6. In the 16-bit Hypothetical Machine (Figure 3.4), how are the 16 bits of an Instruction Word divided?",
              options: [
                "8 bits for Opcode and 8 bits for Address",
                "1 bit for Sign and 15 bits for Magnitude",
                "4 bits for Opcode (1 Hex digit) and 12 bits for Memory Address (3 Hex digits)",
                "12 bits for Opcode and 4 bits for Memory Address"
              ],
              correctIndex: 2,
              explanation: "في الآلة الافتراضية (Figure 3.4a): كود التعليمة 16 بت متقسم لـ 4 بت على الشمال للـ Opcode (خانة هيكسا واحدة)، و12 بت على اليمين لعنوان الذاكرة Address (3 خانات هيكسا)."
            },
            {
              id: "ch3_p2_q7",
              question: "Q7. [TRACE PROBLEM]: Given PC = 215H, AC = 0000H, Mem[215] = 3400H, and Mem[400] = 0012H. What are the values of PC, IR, and AC at the end of Step 1 (Fetch of Cycle 1)?",
              options: [
                "PC = 215, IR = 3400, AC = 0012",
                "PC = 216, IR = 3400, AC = 0000",
                "PC = 216, IR = 3400, AC = 0012",
                "PC = 400, IR = 0012, AC = 3400"
              ],
              correctIndex: 1,
              explanation: "ركز في السؤال! هو بيسأل عن نهاية Step 1 (مرحلة الـ Fetch بس): في الـ Fetch بنجيب 3400 نحطها في الـ IR، والـ PC بيزيد بواحد يبقى 216، لكن الـ AC لسه متغيرش وبيفضل 0000 لحد ما ندخل في الـ Execute!"
            },
            {
              id: "ch3_p2_q8",
              question: "Q8. [TRACE PROBLEM - HEX TRAP]: In Cycle 2, the instruction is 7401H (Add Mem[401] to AC). If AC = 0012H and Mem[401] = 1008H, what is the new value in AC?",
              options: [
                "1010H",
                "1020H",
                "101AH",
                "8409H"
              ],
              correctIndex: 2,
              explanation: "تريكة جمع الهيكسا (Trap 2)! لما نجمع 0012H + 1008H بنظام الست عشري (Hexadecimal): خانة الآحاد 2 + 8 = 10 بالعشري، والـ 10 في الهيكسا بتتكتب حرف A! يبقى الناتج 101AH."
            },
            {
              id: "ch3_p2_q9",
              question: "Q9. [TRACE PROBLEM - STORE TRAP]: After executing instruction 4401H (Store AC to Memory 401) in Step 6, what are the final contents of AC and Memory[401]?",
              options: [
                "AC = 0000H, Memory[401] = 101AH",
                "AC = 101AH, Memory[401] = 101AH",
                "AC = 101AH, Memory[401] = 1008H",
                "AC = 4401H, Memory[401] = 0000H"
              ],
              correctIndex: 1,
              explanation: "تريكة الـ Store (Trap 3)! أمر Store 4401 بينسخ القيمة اللي في الـ AC (وهي 101A) ويكتبها في خانة الذاكرة 401، والـ AC مش بيتصفر أبداً وبيفضل محتفظ بـ 101A!"
            },
            {
              id: "ch3_p2_q10",
              question: "Q10. At the very end of all 3 instruction cycles (after Step 6 finishes), what is the final value stored in the Program Counter (PC)?",
              options: [
                "215H",
                "217H",
                "218H",
                "401H"
              ],
              correctIndex: 2,
              explanation: "بدأنا بـ PC = 215، وفي كل Fetch من التلات دورات الـ PC زاد بواحد (215 ➔ 216 ➔ 217 ➔ 218)، فيبقى في نهاية الدورة التالتة PC = 218H جاهز للتعليمة الرابعة!"
            }
          ]
        },

        /* ====================================================================
           MODULE 3: Interrupts, Instruction Cycle Integration & Timeline (Slides 18 to 27)
           ==================================================================== */
        {
          id: "ch3-p3",
          code: "MODULE 3",
          slides: "Slides 18 to 27",
          title: "رد الفعل العصبي للحاسوب: كيف تضاعف المقاطعات كفاءة المعالج؟ (Interrupts, Classes & Timeline)",
          hasContent: true,
          contentHtml: `
<!-- 0. HERO SECTION -->
            <div class="mod-hero-box">
              <div class="mod-hero-meta-row">
                <span class="mod-meta-badge">Route: /module-3-interrupts</span>
                <span class="mod-meta-badge amber">Topic Range: William Stallings 10th Ed — Chapter 3 (Slides 18 to 27)</span>
                <span class="mod-meta-badge emerald">Sheet Questions Covered: 3.6, 3.7, 3.9, 3.10</span>
              </div>
              <h1 class="mod-hero-h1">رد الفعل العصبي للحاسوب: كيف تضاعف المقاطعات كفاءة المعالج؟</h1>
              <p class="mod-hero-lead">
                "المعالج يعمل بمليارات النبضات في الثانية، بينما الأجهزة الطرفية بطيئة وتستغرق دهوراً بالمقارنة معه. تخيل لو كان المعالج يجلس بلا حراك منتظراً كل حرف تطبعه الطابعة! هنا جاءت فكرة المقاطعات (Interrupts) لتوفر آلية رد فعل لحظية تحرر المعالج من الانتظار القاتل. في هذا الموديول سنستكشف دورة المقاطعة، فئاتها الأربعة، وسنحاكي مسألة خط الزمن الشهيرة بحالتيها."
              </p>
              <div class="mod-badges-row">
                <span class="mod-pill-chip">Improving CPU Utilization</span>
                <span class="mod-pill-chip">4 Interrupt Classes</span>
                <span class="mod-pill-chip">Interrupt Cycle Integration</span>
                <span class="mod-pill-chip">Sequential vs Nested Interrupts</span>
                <span class="mod-pill-chip">Interactive Timeline Simulator (Q 3.9)</span>
              </div>
            </div>

            <!-- 01. الفكرة الأساسية من الصفر: الفلسفة والهدف المعماري (سؤال الشيت 3.6) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">01</span>
                <h2 class="exp-sec-title">الفكرة الأساسية من الصفر: الفلسفة والهدف المعماري للمقاطعات (سؤال الشيت 3.6)</h2>
              </div>

              <div class="balady-box">
                <div class="balady-header">
                  <span class="balady-badge">💡 معضلة السلحفاة والطيارة النفاثة (The Core Hook)</span>
                  <span class="mono" style="font-size: 0.8rem; color: var(--accent-cyan); font-weight: 700;">WHY INTERRUPTS EXIST</span>
                </div>
                <p>
                  المعالج بيحسب عملياته بـ <strong>النانوثانية (ns)</strong> يعني مليار عملية في الثانية، بينما الطابعة أو القرص الصلب أو كابل الشبكة بيشتغل بـ <strong>المللي ثانية (ms)</strong>. يعني الفرق بين سرعة المعالج وسرعة أي جهاز خارجي زي الفرق بين <strong>سرعة طيارة نفاثة وسرعة سلحفاة عرجاء!</strong>
                </p>
                <div class="two-layers-split" style="margin-top: 1rem;">
                  <div class="layer-pill-card">
                    <span class="layer-tag" style="background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3);">WITHOUT INTERRUPTS // BUSY-WAITING</span>
                    <h3 style="font-size: 1.15rem; margin-top: 0.5rem; color: #f87171;">بدون مقاطعات: انتظار قاتل (Busy-Wait Polling)</h3>
                    <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); margin-top: 0.5rem;">
                      المعالج يبعت سطر للطابعة، ويفضل واقف حاطط إيده على خده في حلقة انتظار مفرغة (Loop) مبيعملش أي حاجة ومضيع ملايين الدورات في الفراغ لحد ما الطابعة تطبع السطر عشان يبعت اللي بعده! ده إهدار مرعب لطاقة وسرعة المعالج.
                    </p>
                  </div>

                  <div class="layer-pill-card">
                    <span class="layer-tag" style="background: rgba(16, 185, 129, 0.15); color: var(--accent-emerald); border: 1px solid rgba(16, 185, 129, 0.3);">WITH INTERRUPTS // INTERRUPT-DRIVEN</span>
                    <h3 style="font-size: 1.15rem; margin-top: 0.5rem; color: var(--accent-emerald);">مع المقاطعات: استغلال 100% للمعالج</h3>
                    <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); margin-top: 0.5rem;">
                      المعالج يرمي أمر الطباعة للطابعة، ويلتفت فوراً يكمل حسابات وبرامج للمستخدم! ولما الطابعة تخلص الورقة بعد كام مللي ثانية، تبعت له نبضة كهربا على خط المقاطعة تقوله: <em>"يا معالج أنا جهزت، تعال خد السطر اللي بعده!"</em> فيخدمها في ميكروثانية ويرجع يكمل شغله!
                    </p>
                  </div>
                </div>

                <!-- Official Academic Definition -->
                <div class="en-def-box" style="margin-top: 1.25rem;">
                  <div class="en-def-title">Official Academic Definition (Sheet Question 3.6 — William Stallings):</div>
                  <p class="en-def-text">
                    "The primary purpose of an interrupt is to <strong>improve processor utilization</strong>. Because external I/O devices are typically much slower than the processor, interrupts allow the CPU to execute user code concurrently while an I/O operation is in progress, rather than wasting thousands of clock cycles idling in a busy-wait loop."
                  </p>
                </div>
              </div>
            </section>

            <!-- 02. COMPONENT 2: كروت الفئات الأربعة للمقاطعات (سؤال الشيت 3.7) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">02</span>
                <h2 class="exp-sec-title">COMPONENT 2: كروت الفئات الأربعة للمقاطعات (The 4 Classes Deck — سؤال الشيت 3.7)</h2>
              </div>

              <div class="attr-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
                <!-- Class 1: Program Interrupt -->
                <div class="attr-card" style="border-top: 3px solid var(--accent-cyan);">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span class="attr-type mono" style="color: var(--accent-cyan);">CLASS 01</span>
                    <span class="badge" style="background: rgba(56, 189, 248, 0.15); color: var(--accent-cyan); font-size: 0.75rem; padding: 0.2rem 0.5rem; border-radius: 4px;">Internal / CPU</span>
                  </div>
                  <h4 style="font-size: 1.15rem; margin-top: 0.5rem; color: #fff;">Program Interrupt</h4>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.6;">
                    <strong>السبب الرسمي:</strong> Generated by some condition that occurs as a result of an instruction execution.
                  </p>
                  <p style="font-size: 0.88rem; color: var(--accent-cyan); margin-top: 0.35rem; line-height: 1.6;">
                    <strong>بالعامية:</strong> أخطاء بتظهر جوه الكود نفسه والمعالج بينفذ.
                  </p>
                  <div style="margin-top: 0.75rem; padding: 0.65rem; background: rgba(0,0,0,0.25); border-radius: 6px; font-size: 0.82rem; line-height: 1.6;">
                    <strong style="color: #fff;">أمثلة مشهورة:</strong>
                    <ul style="padding-right: 1.1rem; margin-top: 0.25rem;">
                      <li>Arithmetic overflow (فيضان السعة الحسابية)</li>
                      <li>Division by zero (القسمة على صفر)</li>
                      <li>Attempt to execute illegal machine instruction</li>
                      <li>Reference outside allowable user memory space</li>
                    </ul>
                  </div>
                </div>

                <!-- Class 2: Timer Interrupt -->
                <div class="attr-card" style="border-top: 3px solid var(--accent-amber);">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span class="attr-type mono" style="color: var(--accent-amber);">CLASS 02</span>
                    <span class="badge" style="background: rgba(245, 158, 11, 0.15); color: var(--accent-amber); font-size: 0.75rem; padding: 0.2rem 0.5rem; border-radius: 4px;">Hardware Timer / OS</span>
                  </div>
                  <h4 style="font-size: 1.15rem; margin-top: 0.5rem; color: #fff;">Timer Interrupt</h4>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.6;">
                    <strong>السبب الرسمي:</strong> Generated by an internal processor hardware timer.
                  </p>
                  <p style="font-size: 0.88rem; color: var(--accent-amber); margin-top: 0.35rem; line-height: 1.6;">
                    <strong>بالعامية:</strong> مؤقت عتادي بيظبط إيقاع الوقت ويدق كل فترة زمنية ثابتة.
                  </p>
                  <div style="margin-top: 0.75rem; padding: 0.65rem; background: rgba(0,0,0,0.25); border-radius: 6px; font-size: 0.82rem; line-height: 1.6;">
                    <strong style="color: #fff;">أمثلة مشهورة:</strong>
                    <ul style="padding-right: 1.1rem; margin-top: 0.25rem;">
                      <li>Enables Operating System to perform time-slicing</li>
                      <li>Forces CPU to switch from one running process to another</li>
                      <li>The foundation of all Multitasking OS architectures</li>
                    </ul>
                  </div>
                </div>

                <!-- Class 3: I/O Interrupt -->
                <div class="attr-card" style="border-top: 3px solid var(--accent-emerald);">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span class="attr-type mono" style="color: var(--accent-emerald);">CLASS 03</span>
                    <span class="badge" style="background: rgba(16, 185, 129, 0.15); color: var(--accent-emerald); font-size: 0.75rem; padding: 0.2rem 0.5rem; border-radius: 4px;">Peripheral Driven</span>
                  </div>
                  <h4 style="font-size: 1.15rem; margin-top: 0.5rem; color: #fff;">I/O Interrupt</h4>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.6;">
                    <strong>السبب الرسمي:</strong> Generated by an I/O controller to signal either normal completion or an error.
                  </p>
                  <p style="font-size: 0.88rem; color: var(--accent-emerald); margin-top: 0.35rem; line-height: 1.6;">
                    <strong>بالعامية:</strong> إشارة من أجهزة الإدخال والإخراج لتبليغ المعالج بحالتها.
                  </p>
                  <div style="margin-top: 0.75rem; padding: 0.65rem; background: rgba(0,0,0,0.25); border-radius: 6px; font-size: 0.82rem; line-height: 1.6;">
                    <strong style="color: #fff;">أمثلة مشهورة:</strong>
                    <ul style="padding-right: 1.1rem; margin-top: 0.25rem;">
                      <li>Printer finished printing a page buffer</li>
                      <li>Disk controller completed reading a sector</li>
                      <li>Network interface received an incoming data packet</li>
                      <li>I/O device ran out of paper or encountered a read fault</li>
                    </ul>
                  </div>
                </div>

                <!-- Class 4: Hardware Failure Interrupt -->
                <div class="attr-card" style="border-top: 3px solid #ec4899;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span class="attr-type mono" style="color: #ec4899;">CLASS 04</span>
                    <span class="badge" style="background: rgba(236, 72, 153, 0.15); color: #ec4899; font-size: 0.75rem; padding: 0.2rem 0.5rem; border-radius: 4px;">Emergency / Physical</span>
                  </div>
                  <h4 style="font-size: 1.15rem; margin-top: 0.5rem; color: #fff;">Hardware Failure Interrupt</h4>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.6;">
                    <strong>السبب الرسمي:</strong> Generated by an abrupt physical hardware malfunction.
                  </p>
                  <p style="font-size: 0.88rem; color: #ec4899; margin-top: 0.35rem; line-height: 1.6;">
                    <strong>بالعامية:</strong> عطل عتادي طارئ وخارج عن إرادة البرامج.
                  </p>
                  <div style="margin-top: 0.75rem; padding: 0.65rem; background: rgba(0,0,0,0.25); border-radius: 6px; font-size: 0.82rem; line-height: 1.6;">
                    <strong style="color: #fff;">أمثلة مشهورة:</strong>
                    <ul style="padding-right: 1.1rem; margin-top: 0.25rem;">
                      <li>Imminent power supply failure (انقطاع الكهرباء الوشيك)</li>
                      <li>Memory parity error (خلل في شريحة الرامات)</li>
                      <li>Bus communication error or physical line drop</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <!-- 03. COMPONENT 3: المخطط المعماري لدورة المقاطعة (Figure 3.7) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">03</span>
                <h2 class="exp-sec-title">COMPONENT 3: المخطط المعماري لدورة المقاطعة (Interrupt Cycle Architecture — Figure 3.7)</h2>
              </div>

              <!-- Interactive ASCII Architecture -->
              <div class="terminal-card">
                <div class="terminal-bar">
                  <div class="terminal-dots">
                    <span class="dot red"></span>
                    <span class="dot yellow"></span>
                    <span class="dot green"></span>
                  </div>
                  <span class="terminal-title">FIGURE 3.7 // INSTRUCTION CYCLE WITH INTERRUPTS ARCHITECTURE</span>
                  <span class="mono" style="font-size: 0.72rem; color: var(--accent-cyan);">STALLINGS 10th ED</span>
                </div>
                <div class="terminal-body">
                  <pre class="ascii-diagram">
           +-------------------------------------------------------------+
           |                 INSTRUCTION CYCLE WITH INTERRUPTS           |
           |                                                             |
           |     +-------------------+         +-------------------+     |
      +--------->|    FETCH CYCLE    |-------->|   EXECUTE CYCLE   |     |
      |          | (جلب التعليمة)    |         | (تنفيذ العملية)   |     |
      |          +-------------------+         +---------+---------+     |
      |                                                  |               |
      |                                                  v               |
      |                                        +-------------------+     |
      |           [No Interrupt Pending]       |  INTERRUPT CYCLE  |     |
      +----------------------------------------+ (فحص المقاطعات)  |     |
      |                                        +---------+---------+     |
      |                                                  |               |
      |          [Interrupt Signal Active]               |               |
      +--------------------------------------------------+               |
      |  1. Suspend execution of current user program.                   |
      |  2. Save context: Push current Program Counter (PC) to stack.    |
      |  3. Load PC with the starting address of the ISR.                |
      +------------------------------------------------------------------+
                  </pre>
                </div>
              </div>

              <!-- Interactive Simulator: sim-ch3-interrupt-cycle -->
              <div class="sim-wrapper-box" data-sim-target="sim-ch3-interrupt-cycle" style="margin-top: 1.5rem;">
                <div class="sim-header-row">
                  <div class="sim-title-group">
                    <span class="mono sim-badge">SIMULATOR // FIGURE 3.7</span>
                    <h3 class="sim-title">محاكي دورة المقاطعة وحفظ السياق (Interrupt Cycle &amp; Context Save)</h3>
                  </div>
                  <div class="sim-controls-toolbar">
                    <button type="button" class="sim-step-btn active" data-sim-step="0">1. Fetch</button>
                    <button type="button" class="sim-step-btn" data-sim-step="1">2. Execute</button>
                    <button type="button" class="sim-step-btn" data-sim-step="2">3. Check &amp; Save</button>
                    <button type="button" class="sim-step-btn" data-sim-step="3">4. Branch to ISR</button>
                    <button type="button" class="sim-step-btn play-auto" data-sim-autoplay>تشغيل تلقائي ⏵</button>
                  </div>
                </div>

                <div class="sim-display-screen">
                  <div class="sim-step-details-card">
                    <div class="sim-step-header">
                      <span class="sim-active-num mono">01</span>
                      <h4 class="sim-active-title">المرحلة 1: دورة الجلب (Fetch Cycle — جلب التعليمة وزيادة PC)</h4>
                    </div>
                    <div class="sim-active-route mono">PC ──► Memory Bus ──► IR ◄── Mem[PC] | PC = PC + 1</div>
                    <div class="sim-active-payload">📥 Fetch Phase: قراءة كود التعليمة من عنوان PC وتخزينه في IR وزيادة العداد فوراً</div>
                    <p class="sim-active-desc">كالمعتاد في بداية كل تعليمة، المعالج يقرأ أمر المستخدم الحالي من الرام ويحطه في مسجل IR، ويزود قيمة عداد البرنامج (PC = PC + 1).</p>
                  </div>
                </div>
              </div>

              <!-- Detailed 4 Actions When Interrupt Occurs -->
              <div style="margin-top: 1.5rem;">
                <h3 style="font-size: 1.15rem; color: var(--accent-emerald); font-weight: 800; margin-bottom: 0.75rem;">
                  ⚡ ماذا يفعل المعالج خطوة بخطوة عند استقبال المقاطعة؟ (سؤال امتحان متكرر)
                </h3>
                <div class="attr-grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));">
                  <div class="attr-card">
                    <span class="attr-type mono" style="color: var(--accent-cyan);">ACTION 01</span>
                    <h4 style="font-size: 1.05rem; margin-top: 0.35rem; color: #fff;">1. نقطة الفحص (Check Timing)</h4>
                    <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.6;">
                      المعالج <strong>لا يقطع نفسه أبداً في منتصف التعليمة</strong>! بل يفحص خط طلب المقاطعة (Interrupt Request Line) دائماً <strong>في نهاية دورة التنفيذ (At the end of Execute Cycle)</strong>.
                    </p>
                  </div>

                  <div class="attr-card">
                    <span class="attr-type mono" style="color: var(--accent-amber);">ACTION 02</span>
                    <h4 style="font-size: 1.05rem; margin-top: 0.35rem; color: #fff;">2. حفظ السياق (Save Context)</h4>
                    <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.6;">
                      لو لقى مقاطعة، يوقف برنامج المستخدم فوراً، ويحفظ عنوان الرجوع (قيمة <strong>PC</strong> الحالية التي تشير للأمر التالي) في الذاكرة (داخل الـ <strong>Stack</strong>) عشان يعرف يرجع منين!
                    </p>
                  </div>

                  <div class="attr-card">
                    <span class="attr-type mono" style="color: var(--accent-emerald);">ACTION 03</span>
                    <h4 style="font-size: 1.05rem; margin-top: 0.35rem; color: #fff;">3. القفز لـ ISR (Branch to ISR)</h4>
                    <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.6;">
                      يتم تحميل عنوان بداية روتين خدمة المقاطعة (<strong>Interrupt Service Routine - ISR</strong>) الخاص بالجهاز في مسجل <strong>PC</strong> ليبدأ المعالج في تنفيذه فوراً.
                    </p>
                  </div>

                  <div class="attr-card">
                    <span class="attr-type mono" style="color: #ec4899;">ACTION 04</span>
                    <h4 style="font-size: 1.05rem; margin-top: 0.35rem; color: #fff;">4. العودة بعد الخدمة (Restore)</h4>
                    <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.6;">
                      بمجرد أن ينتهي الـ ISR بتعليمة عودة، يستعيد المعالج قيمة <strong>PC</strong> القديمة من الـ Stack ويكمل برنامج المستخدم الأصلي من نفس النقطة وكأن شيئاً لم يحدث!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <!-- 04. COMPONENT 4: المقاطعات المتعددة: التتابعي مقابل المتداخل (سؤال الشيت 3.10) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">04</span>
                <h2 class="exp-sec-title">COMPONENT 4: المقاطعات المتعددة: التتابعي مقابل المتداخل (Sequential vs Nested — سؤال الشيت 3.10)</h2>
              </div>

              <!-- Terminal Diagrams for Sequential vs Nested -->
              <div class="terminal-card">
                <div class="terminal-bar">
                  <div class="terminal-dots">
                    <span class="dot red"></span>
                    <span class="dot yellow"></span>
                    <span class="dot green"></span>
                  </div>
                  <span class="terminal-title">MULTIPLE INTERRUPTS ARCHITECTURE // DISABLED vs PRIORITY-BASED</span>
                  <span class="mono" style="font-size: 0.72rem; color: var(--accent-amber);">FIGURE 3.12 &amp; 3.13</span>
                </div>
                <div class="terminal-body">
                  <pre class="ascii-diagram">
(A) Sequential (Disabled Interrupts) Approach:
=============================================
     User Program
          |
      (t1)| Interrupt X occurs
          +-------------------> ISR X (Incoming interrupts are DISABLED)
                                |
                                | Interrupt Y arrives here ---> WAITS in queue (Pending)
                                |
                                + (ISR X completes)
          +---------------------+
          |
          +-------------------> ISR Y (Now services pending interrupt Y)
                                |
                                + (ISR Y completes)
          +---------------------+
          v (Resume User Program)

---------------------------------------------------------------------------------
(B) Nested (Priority-Based) Approach:
=====================================
     User Program
          |
      (t1)| Lower-Priority Interrupt X occurs (e.g., Printer, Priority 1)
          +-------------------> ISR X starts running...
                                |
                            (t2)| Higher-Priority Interrupt Y occurs (e.g., Comm, Priority 6)
                                +-------------------> ISR Y preempts X and runs IMMEDIATELY!
                                                      |
                                                      + (ISR Y finishes)
                                +---------------------+
                                | (Resume remaining part of ISR X)
                                + (ISR X finishes)
          +---------------------+
          v (Resume User Program)
                  </pre>
                </div>
              </div>

              <!-- Core Comparison Table -->
              <div style="margin-top: 1.5rem;">
                <h3 style="font-size: 1.15rem; color: #fff; font-weight: 800; margin-bottom: 0.75rem;">
                  📊 جدول المقارنة الجوهرية للامتحان (سؤال 3.10):
                </h3>
                <div style="overflow-x: auto;">
                  <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem; text-align: right; background: var(--bg-surface-1); border-radius: 8px; overflow: hidden; border: 1px solid var(--border-color);">
                    <thead>
                      <tr style="background: rgba(255,255,255,0.05); border-bottom: 2px solid var(--border-color);">
                        <th style="padding: 0.85rem; color: #fff;">وجه المقارنة</th>
                        <th style="padding: 0.85rem; color: var(--accent-cyan);">المعالجة التتابعية (Sequential / Disabled)</th>
                        <th style="padding: 0.85rem; color: var(--accent-emerald);">المعالجة المتداخلة (Nested / Priority-Based)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style="border-bottom: 1px solid var(--border-color);">
                        <td style="padding: 0.85rem; font-weight: 700; color: var(--accent-amber);">آلية التعامل مع المقاطعات الجديدة</td>
                        <td style="padding: 0.85rem; color: var(--text-secondary);">تعطيل المقاطعات أثناء خدمة أي مقاطعة؛ أي مقاطعة جديدة تنتظر في الطابور (Pending) حتى ينتهي الـ ISR الحالي.</td>
                        <td style="padding: 0.85rem; color: var(--text-secondary);">المقاطعة ذات الأولوية الأعلى تقطع فوراً الروتين الأقل أولوية وتوقفه، وبعد انتهائها يعود المعالج لاستئناف الروتين الأقل.</td>
                      </tr>
                      <tr style="border-bottom: 1px solid var(--border-color);">
                        <td style="padding: 0.85rem; font-weight: 700; color: var(--accent-amber);">الاستجابة للأجهزة الحرجة والطوارئ</td>
                        <td style="padding: 0.85rem; color: #f87171;">بطيئة؛ البيانات الحرجة (زي الشبكة أو عطل كهربائي) قد تضيع لو جاءت أثناء انشغال المعالج بطابعة بطيئة!</td>
                        <td style="padding: 0.85rem; color: var(--accent-emerald); font-weight: 700;">استجابة فورية وحاسمة للأجهزة الحرجة والبيانات السريعة ذات الأولوية العليا.</td>
                      </tr>
                      <tr>
                        <td style="padding: 0.85rem; font-weight: 700; color: var(--accent-amber);">التعقيد العتادي للدوائر (Hardware Complexity)</td>
                        <td style="padding: 0.85rem; color: var(--text-secondary);">بسيط جداً؛ مجرد فليب-فلوب لقفل المقاطعات (Interrupt Enable/Disable bit).</td>
                        <td style="padding: 0.85rem; color: var(--text-secondary);">يتطلب عتاد لمقارنة الأولويات (Priority Arbiter) وبنية Stack متعددة المستويات لحفظ سياقات متعددة.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <!-- 05. COMPONENT 5: محاكي خط الزمن التفاعلي لمسألة الشيت (سؤال 3.9) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">05</span>
                <h2 class="exp-sec-title">COMPONENT 5: محاكي خط الزمن التفاعلي لمسألة الشيت (Interactive Timeline Simulator — سؤال الشيت 3.9)</h2>
              </div>

              <!-- Problem Given Parameters Box -->
              <div class="balady-box">
                <div class="balady-header">
                  <span class="balady-badge">📌 معطيات مسألة خط الزمن الأشهر في امتحانات المعمارية</span>
                  <span class="mono" style="font-size: 0.8rem; color: var(--accent-amber); font-weight: 700;">SHEET 3 Q3.9 // SLIDE 26</span>
                </div>
                <p>لديك نظام حاسوبي يحتوي على 3 أجهزة ومهمة مستخدم:</p>
                <div class="two-layers-split" style="margin-top: 0.75rem;">
                  <div style="background: rgba(0,0,0,0.25); padding: 0.85rem; border-radius: 8px;">
                    <span style="font-weight: 800; color: var(--accent-cyan);">1. برنامج المستخدم (User Program):</span>
                    <ul style="margin-top: 0.5rem; padding-right: 1.2rem; font-size: 0.95rem; line-height: 1.8;">
                      <li>يحتاج <strong>20 وحدة زمنية</strong> ليكتمل.</li>
                      <li>يبدأ التشغيل عند اللحظة <strong>t = 0</strong>.</li>
                    </ul>
                  </div>

                  <div style="background: rgba(0,0,0,0.25); padding: 0.85rem; border-radius: 8px;">
                    <span style="font-weight: 800; color: var(--accent-emerald);">2. الأجهزة الثلاثة ومقاطعاتها:</span>
                    <ul style="margin-top: 0.5rem; padding-right: 1.2rem; font-size: 0.95rem; line-height: 1.8;">
                      <li><strong>Printer (طابعة):</strong> أولوية = <strong>1</strong> (الأقل)، تطلب مقاطعة عند <strong>t = 6</strong>.</li>
                      <li><strong>Communications (اتصالات):</strong> أولوية = <strong>6</strong> (الأعلى)، تطلب مقاطعة عند <strong>t = 9</strong>.</li>
                      <li><strong>Disk (قرص صلب):</strong> أولوية = <strong>3</strong> (متوسطة)، يطلب مقاطعة عند <strong>t = 18</strong>.</li>
                      <li><strong>زمن خدمة كل ISR:</strong> يحتاج <strong>10 وحدات زمنية</strong> متواصلة.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Interactive Simulator: sim-ch3-timeline-nested -->
              <div class="sim-wrapper-box" data-sim-target="sim-ch3-timeline-nested" style="margin-top: 1.5rem;">
                <div class="sim-header-row">
                  <div class="sim-title-group">
                    <span class="mono sim-badge">SIMULATOR // SHEET 3.9 GANTT ENGINE</span>
                    <h3 class="sim-title">مشغل خط الزمن التفاعلي للحالة الأولى (Priority-Based Timeline Player)</h3>
                  </div>
                  <div class="sim-controls-toolbar">
                    <button type="button" class="sim-step-btn active" data-sim-step="0">t=0..6 User</button>
                    <button type="button" class="sim-step-btn" data-sim-step="1">t=6..9 Printer</button>
                    <button type="button" class="sim-step-btn" data-sim-step="2">t=9..19 Comm</button>
                    <button type="button" class="sim-step-btn" data-sim-step="3">t=19..29 Disk</button>
                    <button type="button" class="sim-step-btn" data-sim-step="4">t=29..36 Printer</button>
                    <button type="button" class="sim-step-btn" data-sim-step="5">t=36..50 User</button>
                    <button type="button" class="sim-step-btn play-auto" data-sim-autoplay>تشغيل تلقائي ⏵</button>
                  </div>
                </div>

                <div class="sim-display-screen">
                  <div class="sim-step-details-card">
                    <div class="sim-step-header">
                      <span class="sim-active-num mono">01</span>
                      <h4 class="sim-active-title">الفترة 1 (t = 0 إلى 6): تشغيل برنامج المستخدم الأصلي</h4>
                    </div>
                    <div class="sim-active-route mono">t = 0..6: User Program Runs (6 units executed | 14 units remaining)</div>
                    <div class="sim-active-payload">💻 User Program: المعالج ينفذ كود المستخدم بكل طاقته لمدة 6 وحدات زمنية دون أي مقاطعة</div>
                    <p class="sim-active-desc">بدأ برنامج المستخدم عند t = 0 وظل يعمل حتى t = 6 بنجاح، فأنجز 6 وحدات من إجمالي 20 وحدة مخصصة له، ويتبقى له 14 وحدة.</p>
                  </div>
                </div>
              </div>

              <!-- Tab 1: Priority-Based Detailed Breakdown -->
              <div class="sheet-card" style="margin-top: 1.5rem;">
                <div class="sheet-q-box" style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid var(--accent-cyan);">
                  <span class="mono" style="font-size: 0.8rem; color: var(--accent-cyan); font-weight: 800;">CASE 1 // NESTED PRIORITY-BASED TRACE (الحالة الأولى: حسب الأولويات)</span>
                  <h4 style="margin-top: 0.5rem; color: #fff;">التتبع الزمني بالتفصيل ثانية بثانية (من t = 0 إلى t = 50):</h4>
                </div>

                <div style="padding: 1rem;">
                  <div class="terminal-body" style="padding: 0.75rem; background: var(--bg-surface-2); margin-bottom: 1rem;">
                    <pre class="ascii-diagram" style="font-size: 0.8rem;">
Time:  0      6   9        19        29       36             50
       +------+---+--------+---------+--------+--------------+
Task:  | User | P |  Comm  |  Disk   | P(rem) | User Program |
       +------+---+--------+---------+--------+--------------+
Status:(Runs) (P) (Preempt)(Highest) (Resume) (Finished!)
                    </pre>
                  </div>

                  <ol style="padding-right: 1.2rem; font-size: 0.95rem; line-height: 1.8;">
                    <li><strong>من t = 0 إلى t = 6:</strong> يعمل برنامج المستخدم (نفذ 6 وحدات، متبقي له: 20 - 6 = 14 وحدة).</li>
                    <li><strong>عند t = 6:</strong> مقاطعة Printer (أولوية 1) تبدأ في العمل.</li>
                    <li><strong>من t = 6 إلى t = 9:</strong> يعمل ISR الطابعة (نفذ 3 وحدات، متبقي له: 10 - 3 = 7 وحدات).</li>
                    <li><strong>عند t = 9:</strong> مقاطعة Comm (أولوية 6) تصل. بما أن 6 &gt; 1، يتم إيقاف Printer فوراً وتعليقها ويبدأ ISR الاتصالات.</li>
                    <li><strong>من t = 9 إلى t = 19:</strong> يعمل ISR الاتصالات حتى يكتمل تماماً (9 + 10 = 19).
                      <br><span style="color: var(--accent-amber);">⚠️ تريكة حساسة: عند t = 18 تصل مقاطعة Disk بأولوية 3، لكنها تنتظر ولا تبدأ لأن Comm أولوية 6 أعلى منها!</span>
                    </li>
                    <li><strong>عند t = 19:</strong> ينتهي ISR الاتصالات. المعلق الآن: Disk (أولوية 3) وباقي Printer (أولوية 1). بما أن 3 &gt; 1، يبدأ المعالج في ISR القرص الصلب.</li>
                    <li><strong>من t = 19 إلى t = 29:</strong> يعمل ISR القرص الصلب حتى يكتمل تماماً (19 + 10 = 29).</li>
                    <li><strong>عند t = 29:</strong> يستأنف المعالج الـ 7 وحدات المتبقية لـ ISR الطابعة من t = 29 إلى t = 36 (29 + 7 = 36) وتكتمل الطابعة!</li>
                    <li><strong>من t = 36 إلى t = 50:</strong> يعود المعالج لبرنامج المستخدم ليكمل الـ 14 وحدة المتبقية له فيكتمل البرنامج عند t = 50 (36 + 14 = 50).</li>
                  </ol>

                  <!-- Table for Case 1 -->
                  <div style="margin-top: 1rem; overflow-x: auto;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; text-align: center; background: var(--bg-surface-1); border-radius: 8px; overflow: hidden; border: 1px solid var(--border-color);">
                      <thead>
                        <tr style="background: rgba(255,255,255,0.05); border-bottom: 2px solid var(--border-color);">
                          <th style="padding: 0.75rem; color: #fff;">المهمة / الجهاز</th>
                          <th style="padding: 0.75rem; color: var(--accent-cyan);">الأولوية</th>
                          <th style="padding: 0.75rem; color: var(--accent-cyan);">وقت الوصول</th>
                          <th style="padding: 0.75rem; color: var(--accent-emerald);">وقت البدء</th>
                          <th style="padding: 0.75rem; color: var(--accent-amber);">وقت التوقف</th>
                          <th style="padding: 0.75rem; color: var(--accent-cyan);">وقت الاستئناف</th>
                          <th style="padding: 0.75rem; color: #ec4899;">وقت الانتهاء</th>
                        </tr>
                      </thead>
                      <tbody style="font-family: var(--font-mono);">
                        <tr style="border-bottom: 1px solid var(--border-color);">
                          <td style="padding: 0.75rem; font-weight: 700; color: #fff; font-family: var(--font-ar);">Printer ISR</td>
                          <td style="padding: 0.75rem;">1</td>
                          <td style="padding: 0.75rem;">6</td>
                          <td style="padding: 0.75rem; font-weight: 700; color: var(--accent-emerald);">6</td>
                          <td style="padding: 0.75rem; color: var(--accent-amber);">9</td>
                          <td style="padding: 0.75rem; color: var(--accent-cyan);">29</td>
                          <td style="padding: 0.75rem; font-weight: 800; color: #ec4899;">36</td>
                        </tr>
                        <tr style="border-bottom: 1px solid var(--border-color);">
                          <td style="padding: 0.75rem; font-weight: 700; color: #fff; font-family: var(--font-ar);">Comm ISR</td>
                          <td style="padding: 0.75rem; color: var(--accent-cyan); font-weight: 800;">6</td>
                          <td style="padding: 0.75rem;">9</td>
                          <td style="padding: 0.75rem; font-weight: 700; color: var(--accent-emerald);">9</td>
                          <td style="padding: 0.75rem; color: var(--text-muted);">لا يوجد</td>
                          <td style="padding: 0.75rem; color: var(--text-muted);">لا يوجد</td>
                          <td style="padding: 0.75rem; font-weight: 800; color: #ec4899;">19</td>
                        </tr>
                        <tr style="border-bottom: 1px solid var(--border-color);">
                          <td style="padding: 0.75rem; font-weight: 700; color: #fff; font-family: var(--font-ar);">Disk ISR</td>
                          <td style="padding: 0.75rem;">3</td>
                          <td style="padding: 0.75rem;">18</td>
                          <td style="padding: 0.75rem; font-weight: 700; color: var(--accent-emerald);">19</td>
                          <td style="padding: 0.75rem; color: var(--text-muted);">لا يوجد</td>
                          <td style="padding: 0.75rem; color: var(--text-muted);">لا يوجد</td>
                          <td style="padding: 0.75rem; font-weight: 800; color: #ec4899;">29</td>
                        </tr>
                        <tr>
                          <td style="padding: 0.75rem; font-weight: 700; color: #fff; font-family: var(--font-ar);">User Program</td>
                          <td style="padding: 0.75rem; color: var(--text-muted);">--</td>
                          <td style="padding: 0.75rem;">0</td>
                          <td style="padding: 0.75rem; font-weight: 700; color: var(--accent-emerald);">0</td>
                          <td style="padding: 0.75rem; color: var(--accent-amber);">6</td>
                          <td style="padding: 0.75rem; color: var(--accent-cyan);">36</td>
                          <td style="padding: 0.75rem; font-weight: 800; color: #ec4899;">50</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div style="margin-top: 0.75rem; font-weight: 800; color: var(--accent-emerald);">
                    🏁 Total Time Taken by User Program: <strong>50 وحدة زمنية</strong>.
                  </div>
                </div>
              </div>

              <!-- Tab 2: Equal Priorities Detailed Breakdown -->
              <div class="sheet-card" style="margin-top: 1.5rem;">
                <div class="sheet-q-box" style="background: rgba(16, 185, 129, 0.08); border-left: 4px solid var(--accent-emerald);">
                  <span class="mono" style="font-size: 0.8rem; color: var(--accent-emerald); font-weight: 800;">CASE 2 // EQUAL PRIORITIES / SEQUENTIAL TRACE (الحالة الثانية: في حالة الأولويات المتساوية)</span>
                  <h4 style="margin-top: 0.5rem; color: #fff;">التتبع الزمني بالتفصيل (أسبقية الحضور First-Come, First-Served):</h4>
                </div>

                <div style="padding: 1rem;">
                  <div class="terminal-body" style="padding: 0.75rem; background: var(--bg-surface-2); margin-bottom: 1rem;">
                    <pre class="ascii-diagram" style="font-size: 0.8rem;">
Time:  0      6        16        26        36             50
       +------+--------+---------+---------+--------------+
Task:  | User | Printer|  Comm   |  Disk   | User Program |
       +------+--------+---------+---------+--------------+
Status:(Runs) (First)  (Waited)  (Waited)  (Finished!)
                    </pre>
                  </div>

                  <ol style="padding-right: 1.2rem; font-size: 0.95rem; line-height: 1.8;">
                    <li><strong>من t = 0 إلى t = 6:</strong> يعمل برنامج المستخدم (نفذ 6 وحدات، متبقي 14 وحدة).</li>
                    <li><strong>عند t = 6:</strong> تبدأ Printer أولاً وتعمل 10 وحدات كاملة من t = 6 إلى t = 16 دون أن يقطعها أحد لأن الأولويات متساوية!
                      <br><span style="color: var(--text-secondary);">(مقاطعة Comm تصل عند t = 9 وتنتظر في الطابور).</span>
                    </li>
                    <li><strong>عند t = 16:</strong> تنتهي Printer، فيبدأ روتين Comm ويعمل 10 وحدات كاملة من t = 16 إلى t = 26.
                      <br><span style="color: var(--text-secondary);">(مقاطعة Disk تصل عند t = 18 وتنتظر في الطابور خلف Comm).</span>
                    </li>
                    <li><strong>عند t = 26:</strong> تنتهي Comm، فيبدأ روتين Disk ويعمل 10 وحدات كاملة من t = 26 إلى t = 36.</li>
                    <li><strong>عند t = 36:</strong> تنتهي جميع المقاطعات، فيعود المعالج لإنهاء الـ 14 وحدة المتبقية لبرنامج المستخدم من t = 36 إلى t = 50.</li>
                  </ol>

                  <!-- Table for Case 2 -->
                  <div style="margin-top: 1rem; overflow-x: auto;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; text-align: center; background: var(--bg-surface-1); border-radius: 8px; overflow: hidden; border: 1px solid var(--border-color);">
                      <thead>
                        <tr style="background: rgba(255,255,255,0.05); border-bottom: 2px solid var(--border-color);">
                          <th style="padding: 0.75rem; color: #fff;">المهمة / الجهاز</th>
                          <th style="padding: 0.75rem; color: var(--accent-cyan);">وقت الوصول</th>
                          <th style="padding: 0.75rem; color: var(--accent-emerald);">وقت البدء</th>
                          <th style="padding: 0.75rem; color: #ec4899;">وقت الانتهاء</th>
                        </tr>
                      </thead>
                      <tbody style="font-family: var(--font-mono);">
                        <tr style="border-bottom: 1px solid var(--border-color);">
                          <td style="padding: 0.75rem; font-weight: 700; color: #fff; font-family: var(--font-ar);">Printer ISR</td>
                          <td style="padding: 0.75rem;">6</td>
                          <td style="padding: 0.75rem; font-weight: 700; color: var(--accent-emerald);">6</td>
                          <td style="padding: 0.75rem; font-weight: 800; color: #ec4899;">16</td>
                        </tr>
                        <tr style="border-bottom: 1px solid var(--border-color);">
                          <td style="padding: 0.75rem; font-weight: 700; color: #fff; font-family: var(--font-ar);">Comm ISR</td>
                          <td style="padding: 0.75rem;">9</td>
                          <td style="padding: 0.75rem; font-weight: 700; color: var(--accent-emerald);">16</td>
                          <td style="padding: 0.75rem; font-weight: 800; color: #ec4899;">26</td>
                        </tr>
                        <tr style="border-bottom: 1px solid var(--border-color);">
                          <td style="padding: 0.75rem; font-weight: 700; color: #fff; font-family: var(--font-ar);">Disk ISR</td>
                          <td style="padding: 0.75rem;">18</td>
                          <td style="padding: 0.75rem; font-weight: 700; color: var(--accent-emerald);">26</td>
                          <td style="padding: 0.75rem; font-weight: 800; color: #ec4899;">36</td>
                        </tr>
                        <tr>
                          <td style="padding: 0.75rem; font-weight: 700; color: #fff; font-family: var(--font-ar);">User Program</td>
                          <td style="padding: 0.75rem;">0</td>
                          <td style="padding: 0.75rem; font-weight: 700; color: var(--accent-emerald);">0 &amp; 36</td>
                          <td style="padding: 0.75rem; font-weight: 800; color: #ec4899;">50</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div style="margin-top: 0.75rem; font-weight: 800; color: var(--accent-emerald);">
                    🏁 Total Time Taken by User Program: <strong>50 وحدة زمنية</strong>.
                  </div>
                </div>
              </div>
            </section>

            <!-- 06. COMPONENT 6: كروت مصائد وتريكات الامتحانات (Exam Traps Callouts) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">06</span>
                <h2 class="exp-sec-title">COMPONENT 6: كروت مصائد وتريكات الامتحانات (Exam Traps Callouts)</h2>
              </div>

              <div class="attr-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
                <!-- Trap 1 -->
                <div class="exam-trap-box" style="margin-top: 0;">
                  <div class="exam-trap-header">
                    <span class="exam-trap-badge">⚠️ تريكة 1 // ثبات الزمن الكلي في الحالتين</span>
                  </div>
                  <h4 style="font-size: 1rem; color: #fff; margin-top: 0.5rem;">Total Execution Time Trap</h4>
                  <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-secondary); margin-top: 0.35rem;">
                    <strong>السؤال الشائع:</strong> هل الزمن الكلي لانتهاء البرنامج بيختلف لو غيرنا الأولويات؟<br>
                    <strong>الإجابة القاطعة:</strong> لا! الزمن الكلي هو <strong>50 وحدة زمنية في الحالتين بالتمام والكمال</strong>! لأن كمية الشغل الحسابي ثابتة: (20 للبرنامج + 10 للطابعة + 10 للاتصالات + 10 للقرص = 50). ما يتغير هو فقط ترتيب وأوقات استجابة الأجهزة!
                  </p>
                </div>

                <!-- Trap 2 -->
                <div class="exam-trap-box" style="margin-top: 0;">
                  <div class="exam-trap-header">
                    <span class="exam-trap-badge">⚠️ تريكة 2 // مصيدة وصول Disk عند t=18</span>
                  </div>
                  <h4 style="font-size: 1rem; color: #fff; margin-top: 0.5rem;">Disk Arrival at t = 18</h4>
                  <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-secondary); margin-top: 0.35rem;">
                    <strong>الخطأ الشائع:</strong> كثير من الطلاب يكتب أن Disk يبدأ عند 18!<br>
                    <strong>الصواب:</strong> في حالة الأولويات، الـ Disk يصل عند 18 لكنه <strong>لا يبدأ عند 18</strong>، لأن Comm صاحب الأولوية الأعلى (6) لا يزال قيد التنفيذ حتى اللحظة 19، فيبدأ Disk فور انتهاء Comm عند <strong>t = 19</strong>!
                  </p>
                </div>

                <!-- Trap 3 -->
                <div class="exam-trap-box" style="margin-top: 0;">
                  <div class="exam-trap-header">
                    <span class="exam-trap-badge">⚠️ تريكة 3 // توقيت فحص المقاطعة</span>
                  </div>
                  <h4 style="font-size: 1rem; color: #fff; margin-top: 0.5rem;">Interrupt Check Timing</h4>
                  <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-secondary); margin-top: 0.35rem;">
                    <strong>السؤال الشائع:</strong> هل المعالج يقطع نفسه أثناء جلب تعليمة؟<br>
                    <strong>الإجابة القاطعة:</strong> مستحيل! المعالج لا يقاطع نفسه أبداً في منتصف التعليمة، بل يفحص خط المقاطعة دائماً <strong>في نهاية دورة التنفيذ (At the end of Execute Cycle)</strong>!
                  </p>
                </div>

                <!-- Trap 4 -->
                <div class="exam-trap-box" style="margin-top: 0;">
                  <div class="exam-trap-header">
                    <span class="exam-trap-badge">⚠️ تريكة 4 // ما الذي يتم حفظه في الـ Stack؟</span>
                  </div>
                  <h4 style="font-size: 1rem; color: #fff; margin-top: 0.5rem;">Context Save Contents</h4>
                  <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-secondary); margin-top: 0.35rem;">
                    <strong>السؤال الشائع:</strong> ما هو الشيء الأساسي الذي يحفظه المعالج قبل القفز لـ ISR؟<br>
                    <strong>الإجابة القاطعة:</strong> يحفظ قيمة <strong>عدّاد البرنامج (PC)</strong> وأعلام الحالة (Processor Status Word / Flags) في الـ Stack، حتى يتمكن من العودة واستئناف البرنامج من نفس السطر.
                  </p>
                </div>
              </div>
            </section>

            <!-- 07. INSTANT EXAM BUZZWORDS -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">07</span>
                <h2 class="exp-sec-title">⚡ INSTANT EXAM BUZZWORDS (كلمات السر لحل أسئلة الـ MCQs في ثانية)</h2>
              </div>

              <div class="buzzwords-matrix">
                <div class="buzz-card">
                  <div class="buzz-trigger">
                    <span class="buzz-tag">لو شفت في السؤال 👇</span>
                    <p class="buzz-desc">"Primary architectural purpose of interrupts"</p>
                  </div>
                  <div class="buzz-response">
                    <span class="buzz-tag cyan">الإجابة فوراً 👈</span>
                    <strong style="color: var(--accent-cyan); font-size: 1.05rem;">To improve processor utilization</strong>
                  </div>
                </div>

                <div class="buzz-card">
                  <div class="buzz-trigger">
                    <span class="buzz-tag">لو شفت في السؤال 👇</span>
                    <p class="buzz-desc">"Generated by arithmetic overflow or division by zero"</p>
                  </div>
                  <div class="buzz-response">
                    <span class="buzz-tag amber">الإجابة فوراً 👈</span>
                    <strong style="color: var(--accent-amber); font-size: 1.05rem;">Program Interrupt</strong>
                  </div>
                </div>

                <div class="buzz-card">
                  <div class="buzz-trigger">
                    <span class="buzz-tag">لو شفت في السؤال 👇</span>
                    <p class="buzz-desc">"Used by the OS for time-slicing and multitasking"</p>
                  </div>
                  <div class="buzz-response">
                    <span class="buzz-tag emerald">الإجابة فوراً 👈</span>
                    <strong style="color: var(--accent-emerald); font-size: 1.05rem;">Timer Interrupt</strong>
                  </div>
                </div>

                <div class="buzz-card">
                  <div class="buzz-trigger">
                    <span class="buzz-tag">لو شفت في السؤال 👇</span>
                    <p class="buzz-desc">"When does the processor check for pending interrupt signals?"</p>
                  </div>
                  <div class="buzz-response">
                    <span class="buzz-tag pink">الإجابة فوراً 👈</span>
                    <strong style="color: #ec4899; font-size: 1.05rem;">At the end of Execute Cycle</strong>
                  </div>
                </div>

                <div class="buzz-card">
                  <div class="buzz-trigger">
                    <span class="buzz-tag">لو شفت في السؤال 👇</span>
                    <p class="buzz-desc">"Handling where higher priority interrupt suspends lower priority ISR"</p>
                  </div>
                  <div class="buzz-response">
                    <span class="buzz-tag cyan">الإجابة فوراً 👈</span>
                    <strong style="color: var(--accent-cyan); font-size: 1.05rem;">Nested (Priority-Based) Processing</strong>
                  </div>
                </div>

                <div class="buzz-card">
                  <div class="buzz-trigger">
                    <span class="buzz-tag">لو شفت في السؤال 👇</span>
                    <p class="buzz-desc">"Total time in Q3.9 with user program 20 and 3 ISRs of 10"</p>
                  </div>
                  <div class="buzz-response">
                    <span class="buzz-tag emerald">الإجابة فوراً 👈</span>
                    <strong style="color: var(--accent-emerald); font-size: 1.05rem;">Exactly 50 time units in both cases</strong>
                  </div>
                </div>
              </div>
            </section>

            <!-- 08. POPULAR EXAM TRUE / FALSE DRILLS -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">08</span>
                <h2 class="exp-sec-title">POPULAR EXAM TRUE / FALSE DRILLS (أسئلة صح وغلط المشهورة — تفاعلية)</h2>
              </div>

              <div class="tf-drills-grid">
                <div class="tf-item-card">
                  <div class="tf-q-text">
                    <strong>Q1:</strong> The primary purpose of interrupts is to increase the physical clock speed of the CPU processor.
                  </div>
                  <div style="margin-top: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span class="tf-badge false">FALSE ❌</span>
                    <span style="font-size: 0.88rem; color: var(--text-secondary);">
                      <strong>السبب بالعامية:</strong> غلط! المقاطعة ملهاش دعوة بتردد الساعة (Clock Speed)؛ هدفها رفع استغلال وكفاءة المعالج (Improve Utilization) عشان ميضيعش وقته في الانتظار.
                    </span>
                  </div>
                </div>

                <div class="tf-item-card">
                  <div class="tf-q-text">
                    <strong>Q2:</strong> The processor checks for pending interrupts at the end of each execute cycle, not in the middle of instruction execution.
                  </div>
                  <div style="margin-top: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span class="tf-badge true">TRUE ✅</span>
                    <span style="font-size: 0.88rem; color: var(--text-secondary);">
                      <strong>السبب بالعامية:</strong> صح 100%! المعالج ينهي التعليمة الحالية أولاً ويفحص خط المقاطعة في نهاية الـ Execute Cycle.
                    </span>
                  </div>
                </div>

                <div class="tf-item-card">
                  <div class="tf-q-text">
                    <strong>Q3:</strong> An arithmetic overflow or divide-by-zero generates a Hardware Failure Interrupt.
                  </div>
                  <div style="margin-top: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span class="tf-badge false">FALSE ❌</span>
                    <span style="font-size: 0.88rem; color: var(--text-secondary);">
                      <strong>السبب بالعامية:</strong> غلط! ده بيتصنف تحت <strong>Program Interrupt</strong> لأنه ناتج عن تنفيذ تعليمة برمجية.
                    </span>
                  </div>
                </div>

                <div class="tf-item-card">
                  <div class="tf-q-text">
                    <strong>Q4:</strong> In nested interrupt processing, a priority-6 interrupt can preempt an already running priority-1 ISR.
                  </div>
                  <div style="margin-top: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span class="tf-badge true">TRUE ✅</span>
                    <span style="font-size: 0.88rem; color: var(--text-secondary);">
                      <strong>السبب بالعامية:</strong> صح تماماً لأن 6 أعلى من 1، فالأولوية الأعلى تقطع الأقل فوراً.
                    </span>
                  </div>
                </div>

                <div class="tf-item-card">
                  <div class="tf-q-text">
                    <strong>Q5:</strong> In Sheet Question 3.9, changing from priority processing to equal-priority sequential processing reduces the total execution time from 50 to 40.
                  </div>
                  <div style="margin-top: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span class="tf-badge false">FALSE ❌</span>
                    <span style="font-size: 0.88rem; color: var(--text-secondary);">
                      <strong>السبب بالعامية:</strong> غلط! إجمالي الوقت ثابت 50 وحدة زمنية في الحالتين لأن الشغل الحسابي الإجمالي هو نفسه (20 + 10 + 10 + 10 = 50).
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <!-- 09. COMPONENT 7: مركز إجابات الشيت الرسمي (Sheet 3 Official Solutions Hub) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">09</span>
                <h2 class="exp-sec-title">COMPONENT 7: مركز إجابات الشيت الرسمي (Sheet 3 Official Solutions Hub — أسئلة 3.6، 3.7، 3.9، 3.10)</h2>
              </div>

              <!-- Accordion Item 1: Question 3.6 -->
              <div class="sheet-card" style="margin-bottom: 1.25rem;">
                <div class="sheet-q-box">
                  <span class="mono" style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700;">QUESTION 3.6 // SHEET 3</span>
                  <p style="font-family: var(--font-en); font-weight: 700; font-size: 1.05rem; margin-top: 0.35rem;">
                    "What is the purpose of interrupt?"
                  </p>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
                  <span style="font-weight: 800; color: var(--accent-emerald);">✅ Model Answer (الإجابة النموذجية):</span>
                  <button type="button" class="tool-pill-btn" onclick="const box = this.parentElement.nextElementSibling; if(box.style.display==='none'){box.style.display='block'; this.innerText='إخفاء الإجابة للتسميع';} else {box.style.display='none'; this.innerText='إظهار الإجابة';}">إخفاء الإجابة للتسميع</button>
                </div>

                <div class="sheet-ans-box" style="display: block;">
                  <div class="en-def-box" style="margin-bottom: 0.75rem;">
                    <p class="en-def-text">
                      The primary purpose of an interrupt is to <strong>improve processor utilization</strong>. Because most external I/O devices are significantly slower than the processor, interrupts allow the processor to execute other user instructions while an I/O operation is underway, rather than idling in a busy-wait loop.
                    </p>
                  </div>
                  <div class="balady-box">
                    <strong>الترجمة والشرح بالعامية للتسميع:</strong>
                    الهدف الأساسي للمقاطعة هو <strong>رفع كفاءة واستغلال المعالج (Improve processor utilization)</strong>؛ لأن وحدات الإدخال والإخراج أبطأ بكثير من المعالج، فالمقاطعات بتسمح للمعالج إنه ينفذ برامج تانية أثناء ما جهاز الـ I/O شغال، بدل ما يفضل قاعد عاطل ومضيع وقته في حلقة انتظار مفرغة (Busy-wait loop).
                  </div>
                </div>
              </div>

              <!-- Accordion Item 2: Question 3.7 -->
              <div class="sheet-card" style="margin-bottom: 1.25rem;">
                <div class="sheet-q-box">
                  <span class="mono" style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700;">QUESTION 3.7 // SHEET 3</span>
                  <p style="font-family: var(--font-en); font-weight: 700; font-size: 1.05rem; margin-top: 0.35rem;">
                    "List and briefly explain four Classes of Interrupts."
                  </p>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
                  <span style="font-weight: 800; color: var(--accent-emerald);">✅ Model Answer (الإجابة النموذجية):</span>
                  <button type="button" class="tool-pill-btn" onclick="const box = this.parentElement.nextElementSibling; if(box.style.display==='none'){box.style.display='block'; this.innerText='إخفاء الإجابة للتسميع';} else {box.style.display='none'; this.innerText='إظهار الإجابة';}">إخفاء الإجابة للتسميع</button>
                </div>

                <div class="sheet-ans-box" style="display: block;">
                  <div class="en-def-box" style="margin-bottom: 0.75rem;">
                    <ol style="padding-left: 1.2rem; font-family: var(--font-en); line-height: 1.8;">
                      <li><strong>Program Interrupt:</strong> Generated by conditions that occur as a result of instruction execution (e.g., arithmetic overflow, division by zero, illegal memory address reference).</li>
                      <li><strong>Timer Interrupt:</strong> Generated by an internal processor hardware timer, enabling the operating system to perform time-slicing and multitasking.</li>
                      <li><strong>I/O Interrupt:</strong> Generated by an I/O controller to signal either normal completion of an operation or an error condition.</li>
                      <li><strong>Hardware Failure Interrupt:</strong> Generated by hardware malfunctions such as a power failure or memory parity error.</li>
                    </ol>
                  </div>
                  <div class="balady-box">
                    <strong>الشرح بالعامية للتسميع:</strong>
                    1. <strong>مقاطعة برمجية (Program):</strong> بسبب أخطاء تنفيذ الكود زي القسمة على صفر أو Overflow.<br>
                    2. <strong>مقاطعة المؤقت (Timer):</strong> من تايمر عتادي جوه المعالج عشان نظام التشغيل يقسم الوقت بين البرامج (Multitasking).<br>
                    3. <strong>مقاطعة إدخال/إخراج (I/O):</strong> من أجهزة زي الطابعة أو الهارد عشان تبلغ المعالج إنها خلصت نقل الداتا أو حصل خطأ.<br>
                    4. <strong>مقاطعة عطل عتادي (Hardware Failure):</strong> بسبب مصيبة فيزيائية مفاجئة زي انقطاع الكهرباء أو عطل في شريحة الرام.
                  </div>
                </div>
              </div>

              <!-- Accordion Item 3: Question 3.9 -->
              <div class="sheet-card" style="margin-bottom: 1.25rem;">
                <div class="sheet-q-box">
                  <span class="mono" style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700;">QUESTION 3.9 // SHEET 3</span>
                  <p style="font-family: var(--font-en); font-weight: 700; font-size: 1.05rem; margin-top: 0.35rem;">
                    "Consider a system with three I/O devices: a printer, a disk, and a communications line, with increasing priorities of 1, 3, and 6, respectively. A user program begins at t = 0. At t = 6, a printer interrupt occurs; at t = 9, a communications interrupt occurs; and a disk interrupt occurs (t = 18). Each ISR needs 10 time units to complete its task. The user program needs 20 units to finish.
                    Calculate the time at which each ISR begins and ends;
                    Calculate the total time taken by the user program.
                    Repeat the problem if all interrupts have equal priorities."
                  </p>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
                  <span style="font-weight: 800; color: var(--accent-emerald);">✅ Model Answer (الإجابة النموذجية):</span>
                  <button type="button" class="tool-pill-btn" onclick="const box = this.parentElement.nextElementSibling; if(box.style.display==='none'){box.style.display='block'; this.innerText='إخفاء الإجابة للتسميع';} else {box.style.display='none'; this.innerText='إظهار الإجابة';}">إخفاء الإجابة للتسميع</button>
                </div>

                <div class="sheet-ans-box" style="display: block;">
                  <div class="balady-box" style="margin-bottom: 0.75rem;">
                    <strong>ملخص الحل المعتمد في نموذج الإجابة:</strong>
                    تم توثيق التتبع الزمني الكامل بالرسم والمخططات والجدولين في <strong>Component 5 (محاكي خط الزمن)</strong> بالأعلى.
                    <br><br>
                    <strong>1. الحالة الأولى (حسب الأولويات):</strong>
                    <ul style="margin-top: 0.35rem; padding-right: 1.2rem; font-family: var(--font-mono); font-size: 0.9rem; line-height: 1.8;">
                      <li>Printer ISR: يبدأ عند 6، يتوقف عند 9، يستأنف عند 29، وينتهي عند <strong>36</strong>.</li>
                      <li>Comm ISR: يبدأ عند 9، وينتهي عند <strong>19</strong>.</li>
                      <li>Disk ISR: يبدأ عند 19 (بعد انتهاء Comm)، وينتهي عند <strong>29</strong>.</li>
                      <li>User Program: ينتهي عند <strong>50</strong> (إجمالي الوقت = 50).</li>
                    </ul>
                    <strong>2. الحالة الثانية (الأولويات متساوية — تتابعي):</strong>
                    <ul style="margin-top: 0.35rem; padding-right: 1.2rem; font-family: var(--font-mono); font-size: 0.9rem; line-height: 1.8;">
                      <li>Printer ISR: من 6 إلى <strong>16</strong>.</li>
                      <li>Comm ISR: من 16 إلى <strong>26</strong>.</li>
                      <li>Disk ISR: من 26 إلى <strong>36</strong>.</li>
                      <li>User Program: ينتهي عند <strong>50</strong> (إجمالي الوقت = 50).</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Accordion Item 4: Question 3.10 -->
              <div class="sheet-card" style="margin-bottom: 1.25rem;">
                <div class="sheet-q-box">
                  <span class="mono" style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700;">QUESTION 3.10 // SHEET 3</span>
                  <p style="font-family: var(--font-en); font-weight: 700; font-size: 1.05rem; margin-top: 0.35rem;">
                    "What is the difference between sequential interrupt processing and nested interrupt processing?"
                  </p>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
                  <span style="font-weight: 800; color: var(--accent-emerald);">✅ Model Answer (الإجابة النموذجية):</span>
                  <button type="button" class="tool-pill-btn" onclick="const box = this.parentElement.nextElementSibling; if(box.style.display==='none'){box.style.display='block'; this.innerText='إخفاء الإجابة للتسميع';} else {box.style.display='none'; this.innerText='إظهار الإجابة';}">إخفاء الإجابة للتسميع</button>
                </div>

                <div class="sheet-ans-box" style="display: block;">
                  <div class="en-def-box" style="margin-bottom: 0.75rem;">
                    <ul style="padding-left: 1.2rem; font-family: var(--font-en); line-height: 1.8;">
                      <li><strong>Sequential (Disabled) Interrupt Processing:</strong> Incoming interrupts are disabled while an ISR is executing. Any subsequent interrupt is held pending until the current ISR finishes. Interrupts are handled strictly in sequential arrival order regardless of priority.</li>
                      <li><strong>Nested (Priority-Based) Interrupt Processing:</strong> Interrupts are assigned strict priority levels. A higher-priority interrupt can preempt and suspend a currently executing lower-priority ISR. Once the high-priority ISR finishes, control returns to resume the preempted lower-priority ISR.</li>
                    </ul>
                  </div>
                  <div class="balady-box">
                    <strong>الترجمة والشرح بالعامية للتسميع:</strong>
                    - <strong>التتابعي (Sequential):</strong> المقاطعات بتتقفل أثناء خدمة أي مقاطعة؛ أي طلب جديد بيقف في الطابور مستني لحد ما الروتين الحالي يخلص تماماً، والمقاطعات بتتنفذ بترتيب وصولها الزمني بغض النظر عن أهميتها.<br>
                    - <strong>المتداخل (Nested):</strong> بنحدد لكل جهاز أولوية (Priority). لو جهاز أولويته أعلى طلب مقاطعة يقدر يقطع فوراً الروتين الأقل أولوية الشغال حالياً، وبعد ما يخلص الروتين الكبير المعالج يرجع يكمل الروتين الصغير اللي كان واقفه!
                  </div>
                </div>
              </div>
            </section>

          `,
          quiz: [
                    {
                              "id": "ch3_p3_q1",
                              "question": "Q1. What is the primary architectural purpose of introducing interrupts into computer systems? (Sheet Q3.6)",
                              "options": [
                                        "To simplify hardware wiring inside the processor",
                                        "To improve processor utilization by eliminating busy-wait polling",
                                        "To replace main memory RAM with ultra-fast cache",
                                        "To increase the physical clock frequency of the CPU"
                              ],
                              "correctIndex": 1,
                              "explanation": "بالعامية كده: الهدف الأساسي والوحيد للمقاطعات في معمارية الحاسب هو رفع كفاءة واستغلال المعالج (To improve processor utilization) عشان ميفضلش قاعد عاطل ومضيع وقته مستني الأجهزة الطرفية البطيئة تخلص شغلها!"
                    },
                    {
                              "id": "ch3_p3_q2",
                              "question": "Q2. In which phase of the instruction cycle does the CPU check for pending interrupt signals? (Figure 3.7)",
                              "options": [
                                        "In the middle of fetching the instruction word from memory",
                                        "At the beginning of the instruction decode phase",
                                        "At the end of the Execute Cycle",
                                        "Only when the user presses a key on the keyboard"
                              ],
                              "correctIndex": 2,
                              "explanation": "تريكة الامتحان الشهيرة! المعالج مبيقطعش نفسه في نص الأمر؛ هو دايماً بيشيك على خط المقاطعة في نهاية مرحلة التنفيذ (At the end of Execute Cycle)."
                    },
                    {
                              "id": "ch3_p3_q3",
                              "question": "Q3. Which of the following conditions generates a 'Program Interrupt'? (Sheet Q3.7)",
                              "options": [
                                        "A printer running out of paper in the middle of a print job",
                                        "An arithmetic overflow or division by zero during instruction execution",
                                        "A hardware timer expiring to switch running threads",
                                        "An imminent power supply failure"
                              ],
                              "correctIndex": 1,
                              "explanation": "الـ Program Interrupt بيحصل نتيجة تنفيذ تعليمة فيها مشكلة زي القسمة على صفر (Division by zero) أو فيضان السعة الحسابية (Arithmetic overflow) أو محاولة تنفيذ كود غير مسموح."
                    },
                    {
                              "id": "ch3_p3_q4",
                              "question": "Q4. What is the essential operating system purpose of 'Timer Interrupts'?",
                              "options": [
                                        "To cool down the processor silicon cores",
                                        "To enable the Operating System to perform time-slicing and multitasking",
                                        "To format the hard disk sectors periodically",
                                        "To save BIOS settings to CMOS battery storage"
                              ],
                              "correctIndex": 1,
                              "explanation": "الـ Timer Interrupt هو النبض اللي بيخلي الويندوز أو اللينكس يقسم الوقت بين البرامج (Time-slicing / Multitasking) ويحول من تطبيق للتاني كل جزء من الثانية."
                    },
                    {
                              "id": "ch3_p3_q5",
                              "question": "Q5. When an interrupt occurs, why must the CPU save the current Program Counter (PC) value onto the Stack?",
                              "options": [
                                        "To permanently delete the user program from RAM",
                                        "To allow the CPU to resume the interrupted user program from the exact same point after the ISR completes",
                                        "To clear all CPU registers to 0000",
                                        "To transfer control directly to the BIOS ROM chip"
                              ],
                              "correctIndex": 1,
                              "explanation": "ده اللي بنسميه 'حفظ السياق' (Save Context): المعالج بيسجل قيمة الـ PC في الـ Stack عشان بعد ما يخلص روتين المقاطعة (ISR) يقدر يرجع ويكمل برنامج المستخدم من نفس السطر اللي كان واقف عنده بالضبط!"
                    },
                    {
                              "id": "ch3_p3_q6",
                              "question": "Q6. In the 'Sequential (Disabled) Interrupts' approach, what happens if a new interrupt arrives while an ISR is already running? (Sheet Q3.10)",
                              "options": [
                                        "The new interrupt immediately preempts the current ISR",
                                        "The CPU crashes and forces a system reboot",
                                        "The new interrupt is disabled and held pending in a queue until the current ISR finishes",
                                        "The new interrupt is permanently dropped and ignored"
                              ],
                              "correctIndex": 2,
                              "explanation": "في المعالجة التتابعية (Sequential): المقاطعات الجديدة بتكون مقفولة (Disabled) وبتفضل واقفة في الطابور مستنية (Pending) لحد ما روتين المقاطعة الحالي يخلص تماماً، بغض النظر عن أولويتها."
                    },
                    {
                              "id": "ch3_p3_q7",
                              "question": "Q7. In the 'Nested (Priority-Based) Interrupts' approach, when can an incoming interrupt preempt a currently running ISR?",
                              "options": [
                                        "Only if the new interrupt has an equal priority to the current ISR",
                                        "Only if the new interrupt has a higher priority than the currently running ISR",
                                        "Never; preemption is impossible in von Neumann machines",
                                        "Whenever the I/O bus is idle for 5 microseconds"
                              ],
                              "correctIndex": 1,
                              "explanation": "في النظام المتداخل (Nested): الشرط الوحيد عشان مقاطعة تقطع مقاطعة تانية شغالة، هو إن المقاطعة الجديدة تكون أولويتها أعلى (Higher Priority) من اللي شغالة حالياً!"
                    },
                    {
                              "id": "ch3_p3_q8",
                              "question": "Q8. In Sheet Question 3.9 (User Program = 20, Printer = 10, Comm = 10, Disk = 10), what is the TOTAL execution time taken to complete all tasks?",
                              "options": [
                                        "40 time units",
                                        "45 time units in priority mode and 55 in sequential mode",
                                        "Exactly 50 time units in both priority and sequential cases",
                                        "70 time units"
                              ],
                              "correctIndex": 2,
                              "explanation": "أكبر مصيدة في السؤال 3.9! إجمالي الوقت هو 50 وحدة زمنية في الحالتين لأن كمية الشغل الحسابي ثابتة: (20 للبرنامج + 10 للطابعة + 10 للاتصالات + 10 للقرص = 50). اللي بيتغير بس هو ترتيب وأوقات خدمة كل جهاز!"
                    },
                    {
                              "id": "ch3_p3_q9",
                              "question": "Q9. In Sheet Question 3.9 (Priority mode: Comm=6, Disk=3, Printer=1), when the Disk interrupt arrives at t = 18, why doesn't its ISR begin immediately at t = 18?",
                              "options": [
                                        "Because the printer is already running",
                                        "Because the Comm ISR (Priority 6) is still executing until t = 19 and has higher priority than Disk (Priority 3)",
                                        "Because the disk buffer was full",
                                        "Because user programs have priority over disks"
                              ],
                              "correctIndex": 1,
                              "explanation": "الـ Disk وصل عند 18، بس المعالج كان شغال في روتين الـ Comm صاحب الأولوية القصوى (6) اللي شغال لحد 19. وبما إن 6 أعلى من 3، الـ Disk فضل مستني ثانية واحدة لحد ما الـ Comm يخلص ويبدأ Disk عند t = 19!"
                    },
                    {
                              "id": "ch3_p3_q10",
                              "question": "Q10. Which class of interrupts is triggered by an abnormal physical condition such as a power supply drop or memory parity fault?",
                              "options": [
                                        "Program Interrupt",
                                        "Timer Interrupt",
                                        "I/O Interrupt",
                                        "Hardware Failure Interrupt"
                              ],
                              "correctIndex": 3,
                              "explanation": "أي عطل عتادي مفاجئ وخارج عن البرمجة زي انقطاع الكهرباء الوشيك أو عطل في شريحة الرامات بيتصنف تحت: Hardware Failure Interrupt."
                    }
          ]
        },

        /* ====================================================================
           MODULE 4: Interconnection Structures, System Bus, 10 Control Lines & Point-to-Point
           ==================================================================== */
        {
          id: "ch3-p4",
          code: "MODULE 4",
          slides: "Slides 34 to 58",
          title: "شبكة الشرايين للحاسوب: كيف تتدفق البيانات بين المعالج والذاكرة والطرفيات؟ (Interconnection & System Bus)",
          hasContent: true,
          contentHtml: `
<!-- 0. HERO SECTION -->
            <div class="mod-hero-box">
              <div class="mod-hero-meta-row">
                <span class="mod-meta-badge">Route: /module-4-interconnection</span>
                <span class="mod-meta-badge amber">Topic Range: William Stallings 10th Ed — Chapter 3 (Slides 34 to 58)</span>
                <span class="mod-meta-badge emerald">Sheet Questions Covered: 3.11</span>
              </div>
              <h1 class="mod-hero-h1">شبكة الشرايين للحاسوب: كيف تتدفق البيانات بين المعالج والذاكرة والطرفيات؟</h1>
              <p class="mod-hero-lead">
                "المعالج لا يعيش بمفرده في جزيرة معزولة؛ هو بحاجة لتبادل البيانات والأوامر والعناوين مع الذاكرة والأجهزة الطرفية بمعدل مليارات البتات في الثانية. شبكة المسارات هذه تسمى هياكل الربط (Interconnection Structures). في هذا الموديول سنشرح ناقل النظام (System Bus)، تفاصيل خطوط التحكم العشرة الشهيرة في الامتحانات، ولماذا انتقلت الحواسيب الحديثة من النواقل المشتركة القديمة إلى تقنية التوصيل المباشر Point-to-Point مثل Intel QPI و PCIe."
              </p>
              <div class="mod-badges-row">
                <span class="mod-pill-chip">Interconnection Data Transfers</span>
                <span class="mod-pill-chip">Data, Address &amp; Control Buses</span>
                <span class="mod-pill-chip">10 Typical Control Lines (Q 3.11)</span>
                <span class="mod-pill-chip">Bus Bottlenecks (Propagation Delay)</span>
                <span class="mod-pill-chip">Point-to-Point Interconnect (QPI &amp; PCIe)</span>
              </div>
            </div>

            <!-- 01. الفكرة الأساسية من الصفر: معضلة التواصل ولماذا نحتاج نواقل؟ -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">01</span>
                <h2 class="exp-sec-title">الفكرة الأساسية من الصفر: معضلة التواصل ولماذا نحتاج نواقل مشتركة؟</h2>
              </div>

              <div class="balady-box">
                <div class="balady-header">
                  <span class="balady-badge">💡 قصة شبكة المواصلات داخل اللوحة الأم (The Core Hook)</span>
                  <span class="mono" style="font-size: 0.8rem; color: var(--accent-cyan); font-weight: 700;">HIGHWAY PHILOSOPHY</span>
                </div>
                <p>
                  تخيل مدينة ضخمة فيها 3 منشآت حيوية: <strong>القصر الرئاسي (المعالج CPU)</strong>، و<strong>المخازن المركزية (الذاكرة RAM)</strong>، و<strong>الموانئ والمطارات (أجهزة الـ I/O)</strong>. لو حبينا نوصل سلك مباشر وخاص بين كل باب وباب، اللوحة الأم هتبقى كتلة أسلاك معقدة ومستحيلة التصنيع!
                </p>
                <div class="two-layers-split" style="margin-top: 1rem;">
                  <div class="layer-pill-card">
                    <span class="layer-tag" style="background: rgba(56, 189, 248, 0.15); color: var(--accent-cyan); border: 1px solid rgba(56, 189, 248, 0.3);">THE CLASSIC HIGHWAY // SHARED SYSTEM BUS</span>
                    <h3 style="font-size: 1.15rem; margin-top: 0.5rem; color: var(--accent-cyan);">الحل الكلاسيكي: الطريق السريع المشترك (System Bus)</h3>
                    <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); margin-top: 0.5rem;">
                      عملنا طريق دائري سريع مشترك (Shared Bus) مكون من مئات الأسلاك النحاسية الدقيقة المحفورة على اللوحة الأم. كل الأجهزة بتركب على نفس الطريق وتشترك فيه؛ المعالج يرمي العنوان، والرام ترمي الداتا، وإشارات التحكم تظبط إشارات المرور!
                    </p>
                  </div>

                  <div class="layer-pill-card">
                    <span class="layer-tag" style="background: rgba(245, 158, 11, 0.15); color: var(--accent-amber); border: 1px solid rgba(245, 158, 11, 0.3);">MODERN HIGHWAYS // POINT-TO-POINT LINKS</span>
                    <h3 style="font-size: 1.15rem; margin-top: 0.5rem; color: var(--accent-amber);">الحل الحديث: الكباري المعلقة المباشرة (Point-to-Point)</h3>
                    <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); margin-top: 0.5rem;">
                      لما سرعة الأجهزة بقت خرافية، الطريق المشترك اتخنق وظهر زحام وتأخير فيزيائي قاتل (Bottleneck). الحل في الحواسيب الحديثة كان إلغاء الناقل المشترك وبناء مسارات سريعة ومباشرة مخصصة بين كل قطعتين (زي PCIe و Intel QPI)!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <!-- 02. COMPONENT 1: بطاقة أنواع تدفق البيانات (سلايد 35) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">02</span>
                <h2 class="exp-sec-title">COMPONENT 1: بطاقة أنواع تدفق البيانات (Data Transfer Types — سلايد 35)</h2>
              </div>

              <div class="attr-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
                <!-- Type 1: Memory to Processor -->
                <div class="attr-card" style="border-top: 3px solid var(--accent-cyan);">
                  <span class="attr-type mono" style="color: var(--accent-cyan);">TRANSFER 01</span>
                  <h4 style="font-size: 1.1rem; margin-top: 0.4rem; color: #fff;">Memory to Processor</h4>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.6;">
                    <strong>Academic Definition:</strong> Processor reads an instruction or a unit of data from memory.
                  </p>
                  <p style="font-size: 0.88rem; color: var(--accent-cyan); margin-top: 0.35rem; line-height: 1.6;">
                    <strong>بالعامية:</strong> عملية قراءة (Read / Load)؛ المعالج يمد إيده في الرام يسحب كود تعليمة أو رقم عشان يحسب عليه.
                  </p>
                </div>

                <!-- Type 2: Processor to Memory -->
                <div class="attr-card" style="border-top: 3px solid var(--accent-emerald);">
                  <span class="attr-type mono" style="color: var(--accent-emerald);">TRANSFER 02</span>
                  <h4 style="font-size: 1.1rem; margin-top: 0.4rem; color: #fff;">Processor to Memory</h4>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.6;">
                    <strong>Academic Definition:</strong> Processor writes a unit of data to memory.
                  </p>
                  <p style="font-size: 0.88rem; color: var(--accent-emerald); margin-top: 0.35rem; line-height: 1.6;">
                    <strong>بالعامية:</strong> عملية كتابة (Write / Store)؛ المعالج يرسل ناتج عملية حسابية من مسجل الـ AC لتخزينه في الرام.
                  </p>
                </div>

                <!-- Type 3: I/O to Processor -->
                <div class="attr-card" style="border-top: 3px solid var(--accent-amber);">
                  <span class="attr-type mono" style="color: var(--accent-amber);">TRANSFER 03</span>
                  <h4 style="font-size: 1.1rem; margin-top: 0.4rem; color: #fff;">I/O to Processor</h4>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.6;">
                    <strong>Academic Definition:</strong> Processor reads data from an I/O device via an I/O module.
                  </p>
                  <p style="font-size: 0.88rem; color: var(--accent-amber); margin-top: 0.35rem; line-height: 1.6;">
                    <strong>بالعامية:</strong> قراءة مدخلات؛ المعالج يستقبل ضغطة زرار على الكيبورد، أو حركة ماوس، أو باكت واصلة من كابل الشبكة.
                  </p>
                </div>

                <!-- Type 4: Processor to I/O -->
                <div class="attr-card" style="border-top: 3px solid #ec4899;">
                  <span class="attr-type mono" style="color: #ec4899;">TRANSFER 04</span>
                  <h4 style="font-size: 1.1rem; margin-top: 0.4rem; color: #fff;">Processor to I/O</h4>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.6;">
                    <strong>Academic Definition:</strong> Processor sends data to the I/O device.
                  </p>
                  <p style="font-size: 0.88rem; color: #ec4899; margin-top: 0.35rem; line-height: 1.6;">
                    <strong>بالعامية:</strong> إرسال مخرجات وأوامر؛ المعالج يرسل بيكسلات صورة لكارت الشاشة أو نص ورقة للطابعة.
                  </p>
                </div>

                <!-- Type 5: I/O to or from Memory -->
                <div class="attr-card" style="border-top: 3px solid #a855f7; grid-column: 1 / -1;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span class="attr-type mono" style="color: #a855f7;">TRANSFER 05 // DMA ARCHITECTURE</span>
                    <span class="badge" style="background: rgba(168, 85, 247, 0.15); color: #c084fc; font-size: 0.75rem; padding: 0.2rem 0.5rem; border-radius: 4px;">Direct Memory Access</span>
                  </div>
                  <h4 style="font-size: 1.15rem; margin-top: 0.4rem; color: #fff;">I/O to or from Memory (DMA)</h4>
                  <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.6;">
                    <strong>Academic Definition:</strong> An I/O module is allowed to exchange data directly with memory without going through the processor, using Direct Memory Access (DMA).
                  </p>
                  <p style="font-size: 0.9rem; color: #c084fc; margin-top: 0.35rem; line-height: 1.6;">
                    <strong>بالعامية:</strong> النقل الصاروخي المباشر؛ لما الهارد يقرأ ملف لعبة حجمه 20 جيجا، لو المعالج نقلهم بايت بايت هيتشل! كارت الـ DMA بياخد رخصة وينقل الداتا مباشرة من الهارد للرام دون إشغال المعالج.
                  </p>
                </div>
              </div>
            </section>

            <!-- 03. COMPONENT 2: المخطط المعماري لناقل النظام وتفكيك النواقل الثلاثة (سلايد 37) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">03</span>
                <h2 class="exp-sec-title">COMPONENT 2: المخطط المعماري لناقل النظام وتفكيك النواقل الثلاثة (System Bus — سلايد 37)</h2>
              </div>

              <!-- Interactive ASCII Architecture -->
              <div class="terminal-card">
                <div class="terminal-bar">
                  <div class="terminal-dots">
                    <span class="dot red"></span>
                    <span class="dot yellow"></span>
                    <span class="dot green"></span>
                  </div>
                  <span class="terminal-title">FIGURE 3.16 // SYSTEM BUS INTERCONNECTION ARCHITECTURE</span>
                  <span class="mono" style="font-size: 0.72rem; color: var(--accent-cyan);">STALLINGS 10th ED</span>
                </div>
                <div class="terminal-body">
                  <pre class="ascii-diagram">
  +---------------------------------------------------------------------------------+
  |                                   SYSTEM BUS                                    |
  +=================================================================================+
  | [Control Bus]   =============================================================== |
  | [Address Bus]   =============================================================== |
  | [Data Bus]      =============================================================== |
  +========^=============================^=============================^============+
           |                             |                             |
           v                             v                             v
  +-----------------+           +-----------------+           +-----------------+
  |                 |           |                 |           |                 |
  |       CPU       |           |   MAIN MEMORY   |           |   I/O MODULE    |
  |                 |           |                 |           |                 |
  +-----------------+           +-----------------+           +-----------------+
                  </pre>
                </div>
              </div>

              <!-- Interactive Simulator: sim-ch3-bus-transfers -->
              <div class="sim-wrapper-box" data-sim-target="sim-ch3-bus-transfers" style="margin-top: 1.5rem;">
                <div class="sim-header-row">
                  <div class="sim-title-group">
                    <span class="mono sim-badge">SIMULATOR // SYSTEM BUS DATAFLOW</span>
                    <h3 class="sim-title">محاكي تدفق البيانات عبر نواقل النظام (Bus Transfers Engine)</h3>
                  </div>
                  <div class="sim-controls-toolbar">
                    <button type="button" class="sim-step-btn active" data-sim-step="0">1. Mem Read</button>
                    <button type="button" class="sim-step-btn" data-sim-step="1">2. Mem Write</button>
                    <button type="button" class="sim-step-btn" data-sim-step="2">3. I/O Read</button>
                    <button type="button" class="sim-step-btn" data-sim-step="3">4. I/O Write</button>
                    <button type="button" class="sim-step-btn" data-sim-step="4">5. DMA Transfer</button>
                    <button type="button" class="sim-step-btn play-auto" data-sim-autoplay>تشغيل تلقائي ⏵</button>
                  </div>
                </div>

                <div class="sim-display-screen">
                  <div class="sim-step-details-card">
                    <div class="sim-step-header">
                      <span class="sim-active-num mono">01</span>
                      <h4 class="sim-active-title">النمط 1: قراءة من الذاكرة للمعالج (Memory ➔ Processor)</h4>
                    </div>
                    <div class="sim-active-route mono">CPU ──[Address Bus: Addr X]──► RAM | CPU ──[Control Bus: Memory Read]──► RAM | RAM ──[Data Bus: Word Data]──► CPU</div>
                    <div class="sim-active-payload">📖 Memory Read: المعالج يضع عنوان الذاكرة ويفعل إشارة Memory Read فتضع الرام البيانات على ناقل البيانات</div>
                    <p class="sim-active-desc">المعالج يحدد مكان البيانات المطلوبة بإرسال عنوانها على ناقل العناوين، ويطلق نبضة كهربائية على خط (Memory Read) التابع لناقل التحكم. ترد الذاكرة بقراءة محتوى ذلك العنوان ووضعه على ناقل البيانات، فيستلمه المعالج ويدخله في مسجل MBR أو IR.</p>
                  </div>
                </div>
              </div>

              <!-- The 3 System Bus Types Detailed Table -->
              <div style="margin-top: 1.5rem;">
                <h3 style="font-size: 1.15rem; color: #fff; font-weight: 800; margin-bottom: 0.75rem;">
                  📊 تفكيك النواقل الثلاثة للامتحان (Bus Types Comparison Table):
                </h3>
                <div style="overflow-x: auto;">
                  <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem; text-align: right; background: var(--bg-surface-1); border-radius: 8px; overflow: hidden; border: 1px solid var(--border-color);">
                    <thead>
                      <tr style="background: rgba(255,255,255,0.05); border-bottom: 2px solid var(--border-color);">
                        <th style="padding: 0.85rem; color: #fff;">نوع الناقل</th>
                        <th style="padding: 0.85rem; color: var(--accent-cyan); font-family: var(--font-mono);">Bus Name</th>
                        <th style="padding: 0.85rem; color: var(--accent-amber);">اتجاه الحركة (Direction)</th>
                        <th style="padding: 0.85rem; color: var(--accent-emerald);">الوظيفة الهندسية وتأثير العرض (Width Impact)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style="border-bottom: 1px solid var(--border-color);">
                        <td style="padding: 0.85rem; font-weight: 700; color: #fff;">ناقل البيانات</td>
                        <td style="padding: 0.85rem; font-family: var(--font-mono); font-weight: 700; color: var(--accent-cyan);">Data Bus</td>
                        <td style="padding: 0.85rem; color: var(--accent-amber); font-weight: 700;">ثنائي الاتجاه (Bidirectional)</td>
                        <td style="padding: 0.85rem; color: var(--text-secondary); line-height: 1.6;">
                          ينقل البيانات والأكواد الفعلية. <strong>عرضه (Width)</strong> يحدد كفاءة ومعدل نقل البيانات (Overall Performance)؛ ناقل بعرض 64 بت ينقل ضعف الداتا التي ينقلها ناقل بعرض 32 بت في نفس نبضة الساعة!
                        </td>
                      </tr>
                      <tr style="border-bottom: 1px solid var(--border-color);">
                        <td style="padding: 0.85rem; font-weight: 700; color: #fff;">ناقل العناوين</td>
                        <td style="padding: 0.85rem; font-family: var(--font-mono); font-weight: 700; color: var(--accent-cyan);">Address Bus</td>
                        <td style="padding: 0.85rem; color: var(--accent-cyan); font-weight: 700;">أحادي الاتجاه (Unidirectional من CPU)</td>
                        <td style="padding: 0.85rem; color: var(--text-secondary); line-height: 1.6;">
                          يحدد مصدر أو وجهة البيانات في الذاكرة أو منافذ الـ I/O. <strong>عرضه (Width)</strong> يحدد <strong>أقصى سعة ذاكرة قابلة للعنونة</strong> في النظام! لو عرضه N بت تكون السعة <strong>2<sup>N</sup></strong> (ناقل 32 بت يعنون 4 GB، وناقل 64 بت يعنون مساحات إكسابايت خرافية).
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0.85rem; font-weight: 700; color: #fff;">ناقل التحكم</td>
                        <td style="padding: 0.85rem; font-family: var(--font-mono); font-weight: 700; color: var(--accent-cyan);">Control Bus</td>
                        <td style="padding: 0.85rem; color: var(--accent-emerald); font-weight: 700;">ثنائي / متعدد المصادر</td>
                        <td style="padding: 0.85rem; color: var(--text-secondary); line-height: 1.6;">
                          ينقل إشارات التحكم والتوقيت والأوامر والمقاطعات وإشارات حجز الناقل (Arbitration) بين جميع وحدات النظام لمنع حدوث تصادمات كهربائية.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <!-- 04. COMPONENT 3: كروت خطوط التحكم العشرة (سؤال الشيت 3.11) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">04</span>
                <h2 class="exp-sec-title">COMPONENT 3: كروت خطوط التحكم العشرة (The 10 Typical Control Lines — سؤال الشيت 3.11)</h2>
              </div>

              <div class="balady-box" style="margin-bottom: 1.25rem;">
                <div class="balady-header">
                  <span class="balady-badge">📌 سؤال الشيت الرسمي 3.11</span>
                  <span class="mono" style="font-size: 0.8rem; color: var(--accent-amber); font-weight: 700;">SHEET 3 Q3.11 // SLIDE 40</span>
                </div>
                <p>
                  ناقل التحكم بيتكون من خطوط أسلاك مخصصة، كل سلك له اسم ووظيفة كهربية محددة. أشهر 10 خطوط تحكم في الامتحان مقسمة إلى 5 فئات وظيفية:
                </p>
              </div>

              <!-- The 10 Control Lines Grid -->
              <div class="attr-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
                <!-- Line 1: Memory Write -->
                <div class="attr-card" style="border-left: 4px solid var(--accent-cyan);">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span class="attr-type mono" style="color: var(--accent-cyan);">LINE 01 // COMMAND</span>
                  </div>
                  <h4 style="font-size: 1.1rem; margin-top: 0.4rem; color: #fff;">Memory Write</h4>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.5;">
                    <strong>Official Role:</strong> Causes data on the data bus to be written into the addressed memory location.
                  </p>
                  <p style="font-size: 0.88rem; color: var(--accent-cyan); margin-top: 0.35rem; line-height: 1.5;">
                    <strong>بالعامية:</strong> إشارة تأمر الرام: <em>"خدي الداتا اللي على ناقل البيانات واحفظيها في العنوان المحدد على ناقل العناوين"</em>.
                  </p>
                </div>

                <!-- Line 2: Memory Read -->
                <div class="attr-card" style="border-left: 4px solid var(--accent-cyan);">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span class="attr-type mono" style="color: var(--accent-cyan);">LINE 02 // COMMAND</span>
                  </div>
                  <h4 style="font-size: 1.1rem; margin-top: 0.4rem; color: #fff;">Memory Read</h4>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.5;">
                    <strong>Official Role:</strong> Causes data from the addressed memory location to be placed onto the data bus.
                  </p>
                  <p style="font-size: 0.88rem; color: var(--accent-cyan); margin-top: 0.35rem; line-height: 1.5;">
                    <strong>بالعامية:</strong> إشارة تأمر الرام: <em>"اقرأي القيمة الموجودة في العنوان المطلوب وارميها على ناقل البيانات للمعالج"</em>.
                  </p>
                </div>

                <!-- Line 3: I/O Write -->
                <div class="attr-card" style="border-left: 4px solid var(--accent-amber);">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span class="attr-type mono" style="color: var(--accent-amber);">LINE 03 // COMMAND</span>
                  </div>
                  <h4 style="font-size: 1.1rem; margin-top: 0.4rem; color: #fff;">I/O Write</h4>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.5;">
                    <strong>Official Role:</strong> Causes data on the data bus to be output to the addressed I/O port/peripheral.
                  </p>
                  <p style="font-size: 0.88rem; color: var(--accent-amber); margin-top: 0.35rem; line-height: 1.5;">
                    <strong>بالعامية:</strong> إشارة لمنفذ الطرفيات: <em>"استلم الداتا اللي على الناقل وابعتها للجهاز الخارجي (زي الشاشة أو الطابعة)"</em>.
                  </p>
                </div>

                <!-- Line 4: I/O Read -->
                <div class="attr-card" style="border-left: 4px solid var(--accent-amber);">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span class="attr-type mono" style="color: var(--accent-amber);">LINE 04 // COMMAND</span>
                  </div>
                  <h4 style="font-size: 1.1rem; margin-top: 0.4rem; color: #fff;">I/O Read</h4>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.5;">
                    <strong>Official Role:</strong> Causes data from the addressed I/O port/peripheral to be placed onto the data bus.
                  </p>
                  <p style="font-size: 0.88rem; color: var(--accent-amber); margin-top: 0.35rem; line-height: 1.5;">
                    <strong>بالعامية:</strong> إشارة لمنفذ الطرفيات: <em>"هات الداتا من الجهاز الخارجي (زي الكيبورد) وحطها على الناقل للمعالج"</em>.
                  </p>
                </div>

                <!-- Line 5: Transfer ACK -->
                <div class="attr-card" style="border-left: 4px solid var(--accent-emerald);">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span class="attr-type mono" style="color: var(--accent-emerald);">LINE 05 // STATUS</span>
                  </div>
                  <h4 style="font-size: 1.1rem; margin-top: 0.4rem; color: #fff;">Transfer ACK (Acknowledge)</h4>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.5;">
                    <strong>Official Role:</strong> Indicates that data have been accepted from or placed on the data bus successfully.
                  </p>
                  <p style="font-size: 0.88rem; color: var(--accent-emerald); margin-top: 0.35rem; line-height: 1.5;">
                    <strong>بالعامية:</strong> إشعار تأكيد واستلام: <em>"تمام، استلمت الداتا بنجاح أو حطيتها على الناقل وجاهزة للقراءة"</em>.
                  </p>
                </div>

                <!-- Line 6: Bus Request -->
                <div class="attr-card" style="border-left: 4px solid #a855f7;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span class="attr-type mono" style="color: #a855f7;">LINE 06 // ARBITRATION</span>
                  </div>
                  <h4 style="font-size: 1.1rem; margin-top: 0.4rem; color: #fff;">Bus Request</h4>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.5;">
                    <strong>Official Role:</strong> Indicates that a module (e.g., secondary CPU or DMA controller) needs to gain control of the bus.
                  </p>
                  <p style="font-size: 0.88rem; color: #c084fc; margin-top: 0.35rem; line-height: 1.5;">
                    <strong>بالعامية:</strong> طلب حجز الناقل: كارت DMA بيقول للمتحكم: <em>"فضّيلي أسلاك الناقل أنا عاوز أنقل داتا لوحدي"</em>.
                  </p>
                </div>

                <!-- Line 7: Bus Grant -->
                <div class="attr-card" style="border-left: 4px solid #a855f7;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span class="attr-type mono" style="color: #a855f7;">LINE 07 // ARBITRATION</span>
                  </div>
                  <h4 style="font-size: 1.1rem; margin-top: 0.4rem; color: #fff;">Bus Grant</h4>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.5;">
                    <strong>Official Role:</strong> Indicates that the requesting module has been granted permission to control the bus.
                  </p>
                  <p style="font-size: 0.88rem; color: #c084fc; margin-top: 0.35rem; line-height: 1.5;">
                    <strong>بالعامية:</strong> موافقة على الحجز: رد المتحكم للكارت: <em>"اتفضل، الناقل ملكك دلوقتي تقدر تنقل براحتك"</em>.
                  </p>
                </div>

                <!-- Line 8: Interrupt Request -->
                <div class="attr-card" style="border-left: 4px solid #ec4899;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span class="attr-type mono" style="color: #ec4899;">LINE 08 // INTERRUPT</span>
                  </div>
                  <h4 style="font-size: 1.1rem; margin-top: 0.4rem; color: #fff;">Interrupt Request</h4>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.5;">
                    <strong>Official Role:</strong> Indicates that an interrupt is pending and requires processor attention.
                  </p>
                  <p style="font-size: 0.88rem; color: #ec4899; margin-top: 0.35rem; line-height: 1.5;">
                    <strong>بالعامية:</strong> طلب مقاطعة: سلك ينبه المعالج إن في جهاز خارجي مستني خدمة ضرورية وعاجلة.
                  </p>
                </div>

                <!-- Line 9: Interrupt ACK -->
                <div class="attr-card" style="border-left: 4px solid #ec4899;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span class="attr-type mono" style="color: #ec4899;">LINE 09 // INTERRUPT</span>
                  </div>
                  <h4 style="font-size: 1.1rem; margin-top: 0.4rem; color: #fff;">Interrupt ACK</h4>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.5;">
                    <strong>Official Role:</strong> Acknowledges that the pending interrupt has been recognized and accepted by the processor.
                  </p>
                  <p style="font-size: 0.88rem; color: #ec4899; margin-top: 0.35rem; line-height: 1.5;">
                    <strong>بالعامية:</strong> قبول المقاطعة: المعالج يبعت للجهاز: <em>"استلمت طلب المقاطعة بتاعك ورايح أشغلك الـ ISR حالا"</em>.
                  </p>
                </div>

                <!-- Line 10: Clock -->
                <div class="attr-card" style="border-left: 4px solid #f59e0b;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span class="attr-type mono" style="color: #f59e0b;">LINE 10 // TIMING</span>
                  </div>
                  <h4 style="font-size: 1.1rem; margin-top: 0.4rem; color: #fff;">Clock</h4>
                  <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.5;">
                    <strong>Official Role:</strong> Used to synchronize bus operations; one clock cycle defines the time slot for bus activities.
                  </p>
                  <p style="font-size: 0.88rem; color: #f59e0b; margin-top: 0.35rem; line-height: 1.5;">
                    <strong>بالعامية:</strong> نبضات الساعة المرجعية: الخط اللي بيضبط توقيت ومزامنة كل نبضة على الناقل المتزامن (Synchronous).
                  </p>
                </div>
              </div>
            </section>

            <!-- 05. COMPONENT 4: عيوب النواقل القديمة وظهور تقنية Point-to-Point (سلايدات 48 إلى 58) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">05</span>
                <h2 class="exp-sec-title">COMPONENT 4: عيوب النواقل القديمة وظهور تقنية Point-to-Point (سلايدات 48 إلى 58)</h2>
              </div>

              <!-- The Technological Crisis Box -->
              <div class="balady-box">
                <div class="balady-header">
                  <span class="balady-badge">⚠️ الأزمة التكنولوجية: لماذا مات الناقل المشترك القديم؟</span>
                </div>
                <p>
                  زمان كانت كل المكونات متصلة بنفس الأسلاك المشتركة (Shared Bus). لما تردد المعالجات زاد من ميجاهرتز لـ جيجاهرتز، ظهرت مشكلتان فيزيائيتان قاتلتان:
                </p>
                <div class="two-layers-split" style="margin-top: 1rem;">
                  <div class="layer-pill-card">
                    <span class="layer-tag" style="background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3);">PROBLEM 01 // PROPAGATION DELAY</span>
                    <h3 style="font-size: 1.1rem; margin-top: 0.5rem; color: #f87171;">تأخير الانتشار وانعكاس الإشارة (Propagation Delay)</h3>
                    <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary); margin-top: 0.5rem;">
                      كل ما السلك يطول وتوصل عليه أجهزة أكتر، الإشارة الكهربائية بتضعف وتتعكس وتتأخر، ومتقدرش تعلي تردد الناقل عن حد معين وإلا الداتا هتتشوه تماماً!
                    </p>
                  </div>

                  <div class="layer-pill-card">
                    <span class="layer-tag" style="background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3);">PROBLEM 02 // BUS BOTTLENECK</span>
                    <h3 style="font-size: 1.1rem; margin-top: 0.5rem; color: #f87171;">عنق الزجاجة التنافسي (Bus Contention Bottleneck)</h3>
                    <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary); margin-top: 0.5rem;">
                      جهاز واحد بس هو اللي يقدر ينقل داتا في اللحظة الواحدة! لو كارت الشاشة بينقل فريمات، المعالج والرامات يقفوا مستنيين في طابور لحد ما الناقل يفضى!
                    </p>
                  </div>
                </div>
              </div>

              <!-- Terminal Comparison ASCII -->
              <div class="terminal-card" style="margin-top: 1.5rem;">
                <div class="terminal-bar">
                  <div class="terminal-dots">
                    <span class="dot red"></span>
                    <span class="dot yellow"></span>
                    <span class="dot green"></span>
                  </div>
                  <span class="terminal-title">SHARED BUS vs POINT-TO-POINT ARCHITECTURE</span>
                  <span class="mono" style="font-size: 0.72rem; color: var(--accent-emerald);">MODERN HARDWARE EVOLUTION</span>
                </div>
                <div class="terminal-body">
                  <pre class="ascii-diagram">
[Shared Bus Architecture (OLD)]              [Point-to-Point Architecture (MODERN)]
     +-------------------+                       +-----------+       +-----------+
     |     CPU Core      |                       | CPU Core0 |&lt;=====&gt;| CPU Core1 |
     +---------+---------+                       +-----+-----+  QPI  +-----+-----+
               | Shared Bus                            ^                   ^
   ============+=============                          | PCIe Links        |
   |           |            |                          v                   v
+--+---+    +--+---+    +---+--+                 +-----------+       +-----------+
| Memory|   |  GPU |    | Disk |                 | GPU (x16) |       | NVMe Disk |
+------+    +------+    +------+                 +-----------+       +-----------+
                  </pre>
                </div>
              </div>

              <!-- Point to Point Technologies: QPI & PCIe -->
              <div class="two-layers-split" style="margin-top: 1.5rem;">
                <div class="layer-pill-card">
                  <span class="layer-tag" style="background: rgba(56, 189, 248, 0.15); color: var(--accent-cyan); border: 1px solid rgba(56, 189, 248, 0.3);">INTEL QPI // QUICKPATH INTERCONNECT</span>
                  <h3 style="font-size: 1.15rem; margin-top: 0.5rem; color: var(--accent-cyan);">Intel QuickPath Interconnect (QPI)</h3>
                  <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); margin-top: 0.5rem;">
                    وصلات مباشرة وتسلسلية عالية السرعة تعتمد على حزم البيانات (Packetized Architecture) تربط بين أنوية المعالجات والذاكرة ومتحكمات الـ I/O بسرعة عشرات الجيجابايت في الثانية دون أي تشارك أو انتظار!
                  </p>
                </div>

                <div class="layer-pill-card">
                  <span class="layer-tag" style="background: rgba(16, 185, 129, 0.15); color: var(--accent-emerald); border: 1px solid rgba(16, 185, 129, 0.3);">PCIE // PERIPHERAL COMPONENT INTERCONNECT EXPRESS</span>
                  <h3 style="font-size: 1.15rem; margin-top: 0.5rem; color: var(--accent-emerald);">PCI Express (PCIe)</h3>
                  <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); margin-top: 0.5rem;">
                    مسارات تفاضلية ثنائية الاتجاه (Point-to-Point Lanes: x1, x4, x8, x16) تربط كروت الشاشة ووحدات الـ NVMe SSDs فائقة السرعة مباشرة بالمعالج؛ بحيث يحصل كل كارت على عرضه الترددي الكامل دون مشاركة أحد!
                  </p>
                </div>
              </div>
            </section>

            <!-- 06. COMPONENT 5: كروت مصائد وتريكات الامتحانات (Exam Traps Callouts) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">06</span>
                <h2 class="exp-sec-title">COMPONENT 5: كروت مصائد وتريكات الامتحانات (Exam Traps Callouts)</h2>
              </div>

              <div class="attr-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
                <!-- Trap 1 -->
                <div class="exam-trap-box" style="margin-top: 0;">
                  <div class="exam-trap-header">
                    <span class="exam-trap-badge">⚠️ تريكة 1 // تأثير عرض ناقل العناوين</span>
                  </div>
                  <h4 style="font-size: 1rem; color: #fff; margin-top: 0.5rem;">Address Bus Width Impact</h4>
                  <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-secondary); margin-top: 0.35rem;">
                    <strong>السؤال الشائع:</strong> <em>"What determines the maximum addressable memory capacity of a computer system?"</em><br>
                    <strong>الإجابة القاطعة:</strong> <strong>عرض ناقل العناوين (The width of the Address Bus)</strong>. إذا كان العرض N بت، فإن أقصى سعة ممكنة للذاكرة هي <strong>2<sup>N</sup></strong> كلمة ذاكرة!
                  </p>
                </div>

                <!-- Trap 2 -->
                <div class="exam-trap-box" style="margin-top: 0;">
                  <div class="exam-trap-header">
                    <span class="exam-trap-badge">⚠️ تريكة 2 // تأثير عرض ناقل البيانات</span>
                  </div>
                  <h4 style="font-size: 1rem; color: #fff; margin-top: 0.5rem;">Data Bus Width Impact</h4>
                  <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-secondary); margin-top: 0.35rem;">
                    <strong>السؤال الشائع:</strong> <em>"What determines overall system data transfer throughput and performance?"</em><br>
                    <strong>الإجابة القاطعة:</strong> <strong>عرض ناقل البيانات (The width of the Data Bus)</strong>. لأنه يحدد كمية البتات التي يمكن نقلها في نبضة الساعة الواحدة (مثل 32-bit أو 64-bit).
                  </p>
                </div>

                <!-- Trap 3 -->
                <div class="exam-trap-box" style="margin-top: 0;">
                  <div class="exam-trap-header">
                    <span class="exam-trap-badge">⚠️ تريكة 3 // الفرق بين Bus Request و Interrupt Request</span>
                  </div>
                  <h4 style="font-size: 1rem; color: #fff; margin-top: 0.5rem;">Bus Request vs Interrupt Request</h4>
                  <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-secondary); margin-top: 0.35rem;">
                    - <strong>Bus Request:</strong> طلب للاستحواذ على أسلاك الناقل للقيام بنقل داتا مباشرة دون المرور بالمعالج (يستخدمه الـ DMA).<br>
                    - <strong>Interrupt Request:</strong> طلب للمعالج بتعليق برنامجه والذهاب لتنفيذ روتين خدمة طارئ لجهاز خارجي (ISR).
                  </p>
                </div>

                <!-- Trap 4 -->
                <div class="exam-trap-box" style="margin-top: 0;">
                  <div class="exam-trap-header">
                    <span class="exam-trap-badge">⚠️ تريكة 4 // الناقل المتزامن مقابل غير المتزامن</span>
                  </div>
                  <h4 style="font-size: 1rem; color: #fff; margin-top: 0.5rem;">Synchronous vs Asynchronous Bus</h4>
                  <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-secondary); margin-top: 0.35rem;">
                    - <strong>Synchronous Bus:</strong> يعتمد على نبضات خط الساعة (Clock line)؛ كل الأحداث تتم عند حافة النبضة (سهل في التصميم لكن مقيد بأبطأ جهاز).<br>
                    - <strong>Asynchronous Bus:</strong> يعتمد على بروتوكول المصافحة (Handshaking signals) دون ساعة مشتركة؛ مرن لكل الأجهزة المختلفة السرعة.
                  </p>
                </div>
              </div>
            </section>

            <!-- 07. INSTANT EXAM BUZZWORDS -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">07</span>
                <h2 class="exp-sec-title">⚡ INSTANT EXAM BUZZWORDS (كلمات السر لحل أسئلة الـ MCQs في ثانية)</h2>
              </div>

              <div class="buzzwords-matrix">
                <div class="buzz-card">
                  <div class="buzz-trigger">
                    <span class="buzz-tag">لو شفت في السؤال 👇</span>
                    <p class="buzz-desc">"Determines the maximum addressable memory capacity of the computer"</p>
                  </div>
                  <div class="buzz-response">
                    <span class="buzz-tag cyan">الإجابة فوراً 👈</span>
                    <strong style="color: var(--accent-cyan); font-size: 1.05rem;">Width of Address Bus (2^N)</strong>
                  </div>
                </div>

                <div class="buzz-card">
                  <div class="buzz-trigger">
                    <span class="buzz-tag">لو شفت في السؤال 👇</span>
                    <p class="buzz-desc">"Determines the overall system performance and data throughput"</p>
                  </div>
                  <div class="buzz-response">
                    <span class="buzz-tag emerald">الإجابة فوراً 👈</span>
                    <strong style="color: var(--accent-emerald); font-size: 1.05rem;">Width of Data Bus</strong>
                  </div>
                </div>

                <div class="buzz-card">
                  <div class="buzz-trigger">
                    <span class="buzz-tag">لو شفت في السؤال 👇</span>
                    <p class="buzz-desc">"Control line that signals data have been accepted or placed on data bus"</p>
                  </div>
                  <div class="buzz-response">
                    <span class="buzz-tag amber">الإجابة فوراً 👈</span>
                    <strong style="color: var(--accent-amber); font-size: 1.05rem;">Transfer ACK (Acknowledge)</strong>
                  </div>
                </div>

                <div class="buzz-card">
                  <div class="buzz-trigger">
                    <span class="buzz-tag">لو شفت في السؤال 👇</span>
                    <p class="buzz-desc">"Indicates a module needs to gain control of the bus (e.g. DMA)"</p>
                  </div>
                  <div class="buzz-response">
                    <span class="buzz-tag pink">الإجابة فوراً 👈</span>
                    <strong style="color: #ec4899; font-size: 1.05rem;">Bus Request</strong>
                  </div>
                </div>

                <div class="buzz-card">
                  <div class="buzz-trigger">
                    <span class="buzz-tag">لو شفت في السؤال 👇</span>
                    <p class="buzz-desc">"Direct point-to-point packetized serial interconnect used by Intel CPUs"</p>
                  </div>
                  <div class="buzz-response">
                    <span class="buzz-tag cyan">الإجابة فوراً 👈</span>
                    <strong style="color: var(--accent-cyan); font-size: 1.05rem;">QPI (QuickPath Interconnect)</strong>
                  </div>
                </div>

                <div class="buzz-card">
                  <div class="buzz-trigger">
                    <span class="buzz-tag">لو شفت في السؤال 👇</span>
                    <p class="buzz-desc">"Physical limitation that caused abandonment of traditional shared buses"</p>
                  </div>
                  <div class="buzz-response">
                    <span class="buzz-tag amber">الإجابة فوراً 👈</span>
                    <strong style="color: var(--accent-amber); font-size: 1.05rem;">Propagation Delay &amp; Bottlenecks</strong>
                  </div>
                </div>
              </div>
            </section>

            <!-- 08. POPULAR EXAM TRUE / FALSE DRILLS -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">08</span>
                <h2 class="exp-sec-title">POPULAR EXAM TRUE / FALSE DRILLS (أسئلة صح وغلط المشهورة — تفاعلية)</h2>
              </div>

              <div class="tf-drills-grid">
                <div class="tf-item-card">
                  <div class="tf-q-text">
                    <strong>Q1:</strong> The width of the Address Bus determines the maximum memory capacity that the processor can directly address.
                  </div>
                  <div style="margin-top: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span class="tf-badge true">TRUE ✅</span>
                    <span style="font-size: 0.88rem; color: var(--text-secondary);">
                      <strong>السبب بالعامية:</strong> صح 100%! لو ناقل العناوين عرضه 32 بت، يقدر يعنون 2<sup>32</sup> = 4 GB، ولو 64 بت يعنون مساحات ضخمة.
                    </span>
                  </div>
                </div>

                <div class="tf-item-card">
                  <div class="tf-q-text">
                    <strong>Q2:</strong> On a shared system bus, multiple master modules can simultaneously transmit data across the data bus at the exact same clock cycle.
                  </div>
                  <div style="margin-top: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span class="tf-badge false">FALSE ❌</span>
                    <span style="font-size: 0.88rem; color: var(--text-secondary);">
                      <strong>السبب بالعامية:</strong> غلط تماماً! في الناقل المشترك، جهاز واحد فقط يقدر يتكلم في اللحظة الواحدة، ولو اتنين اتكلموا الإشارات الكهربية تتصادم وتتشوه.
                    </span>
                  </div>
                </div>

                <div class="tf-item-card">
                  <div class="tf-q-text">
                    <strong>Q3:</strong> Direct Memory Access (DMA) allows I/O modules to read and write directly to main memory without involving the processor in every byte.
                  </div>
                  <div style="margin-top: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span class="tf-badge true">TRUE ✅</span>
                    <span style="font-size: 0.88rem; color: var(--text-secondary);">
                      <strong>السبب بالعامية:</strong> صح جداً! ده الهدف من الـ DMA عشان ينقل ملفات كبيرة من الهارد للرام دون إرهاق الـ CPU.
                    </span>
                  </div>
                </div>

                <div class="tf-item-card">
                  <div class="tf-q-text">
                    <strong>Q4:</strong> The "Bus Grant" control line is sent by an I/O device to request permission to control the bus.
                  </div>
                  <div style="margin-top: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span class="tf-badge false">FALSE ❌</span>
                    <span style="font-size: 0.88rem; color: var(--text-secondary);">
                      <strong>السبب بالعامية:</strong> غلط! الجهاز بيبعت <strong>Bus Request</strong>، بينما المتحكم المركزي هو اللي بيرد عليه بإشارة <strong>Bus Grant</strong> بالموافقة.
                    </span>
                  </div>
                </div>

                <div class="tf-item-card">
                  <div class="tf-q-text">
                    <strong>Q5:</strong> Modern Point-to-Point architectures like PCIe replace shared broadcast buses with dedicated, packet-switched differential serial links.
                  </div>
                  <div style="margin-top: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span class="tf-badge true">TRUE ✅</span>
                    <span style="font-size: 0.88rem; color: var(--text-secondary);">
                      <strong>السبب بالعامية:</strong> صح 100%! وده سبب وصول سرعات PCIe إلى عشرات الجيجابايت في الثانية بدون اختناق.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <!-- 09. COMPONENT 6: مركز إجابات الشيت الرسمي (Sheet 3 Official Solutions Hub) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">09</span>
                <h2 class="exp-sec-title">COMPONENT 6: مركز إجابات الشيت الرسمي (Sheet 3 Official Solutions Hub — سؤال 3.11)</h2>
              </div>

              <!-- Accordion Item: Question 3.11 -->
              <div class="sheet-card" style="margin-bottom: 1.25rem;">
                <div class="sheet-q-box">
                  <span class="mono" style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700;">QUESTION 3.11 // SHEET 3</span>
                  <p style="font-family: var(--font-en); font-weight: 700; font-size: 1.05rem; margin-top: 0.35rem;">
                    "List 10 Typical control lines and explain their functions."
                  </p>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
                  <span style="font-weight: 800; color: var(--accent-emerald);">✅ Model Answer (الإجابة النموذجية):</span>
                  <button type="button" class="tool-pill-btn" onclick="const box = this.parentElement.nextElementSibling; if(box.style.display==='none'){box.style.display='block'; this.innerText='إخفاء الإجابة للتسميع';} else {box.style.display='none'; this.innerText='إظهار الإجابة';}">إخفاء الإجابة للتسميع</button>
                </div>

                <div class="sheet-ans-box" style="display: block;">
                  <div class="en-def-box" style="margin-bottom: 0.75rem;">
                    <ol style="padding-left: 1.2rem; font-family: var(--font-en); line-height: 1.8;">
                      <li><strong>Memory Write:</strong> Causes data on the system data bus to be written into the addressed memory location.</li>
                      <li><strong>Memory Read:</strong> Causes data from the addressed memory location to be retrieved and placed onto the system data bus.</li>
                      <li><strong>I/O Write:</strong> Causes data on the data bus to be sent and outputted to the addressed external I/O device or port.</li>
                      <li><strong>I/O Read:</strong> Causes data from the addressed external I/O device or port to be placed onto the system data bus.</li>
                      <li><strong>Transfer ACK (Acknowledge):</strong> Indicates that data have been successfully accepted from or placed onto the data bus.</li>
                      <li><strong>Bus Request:</strong> Indicates that a system component (such as a DMA controller) requests permission to gain control of the bus.</li>
                      <li><strong>Bus Grant:</strong> Emitted by the central bus arbiter indicating that the requesting module has been granted control of the bus.</li>
                      <li><strong>Interrupt Request:</strong> Signals to the central processor that an external peripheral is requesting service and an interrupt is pending.</li>
                      <li><strong>Interrupt ACK:</strong> Emitted by the processor acknowledging that the pending interrupt request has been recognized and accepted.</li>
                      <li><strong>Clock:</strong> Provides regular square-wave timing signals used to synchronize read and write transactions across a synchronous bus.</li>
                    </ol>
                  </div>
                  <div class="balady-box">
                    <strong>الترجمة والشرح بالعامية للحفظ والتسميع:</strong>
                    1. <strong>Memory Write:</strong> إشارة لكتابة وتخزين البيانات في عنوان الذاكرة المحدد.<br>
                    2. <strong>Memory Read:</strong> إشارة لقراءة البيانات من عنوان الذاكرة المحدد ووضعها على الناقل.<br>
                    3. <strong>I/O Write:</strong> إشارة لإرسال البيانات لجهاز إخراج (زي الشاشة أو الطابعة).<br>
                    4. <strong>I/O Read:</strong> إشارة لقراءة البيانات من جهاز إدخال (زي الكيبورد).<br>
                    5. <strong>Transfer ACK:</strong> إشعار تأكيد إن الداتا تم استلامها أو وضعها على الناقل بنجاح.<br>
                    6. <strong>Bus Request:</strong> إشارة طلب حجز الناقل من كارت (زي الـ DMA).<br>
                    7. <strong>Bus Grant:</strong> موافقة المتحكم على حجز الناقل وتسليمه للكارت.<br>
                    8. <strong>Interrupt Request:</strong> سلك طلب المقاطعة من جهاز خارجي للمعالج.<br>
                    9. <strong>Interrupt ACK:</strong> إشعار من المعالج بقبول المقاطعة والذهاب لـ ISR.<br>
                    10. <strong>Clock:</strong> خط نبضات الساعة المرجعية لضبط توقيت ومزامنة عمليات الناقل المتزامن.
                  </div>
                </div>
              </div>
            </section>

          `,
          quiz: [
                    {
                              "id": "ch3_p4_q1",
                              "question": "Q1. What primarily determines the maximum addressable memory capacity of a computer system? (Slide 38)",
                              "options": [
                                        "The physical clock speed of the processor",
                                        "The width of the Address Bus (e.g., 2^N)",
                                        "The width of the Data Bus",
                                        "The size of the hard disk drive"
                              ],
                              "correctIndex": 1,
                              "explanation": "تريكة امتحانات متكررة! عرض ناقل العناوين (Address Bus Width) هو المحدد الوحيد لأقصى حجم ذاكرة يقدر المعالج يعنونها مباشرة (2^N موقع ذاكرة)."
                    },
                    {
                              "id": "ch3_p4_q2",
                              "question": "Q2. What is the primary architectural effect of widening the Data Bus (e.g., from 32-bit to 64-bit)?",
                              "options": [
                                        "It doubles the maximum addressable RAM capacity",
                                        "It increases overall system performance by transmitting more data per cycle",
                                        "It eliminates the need for cache memory",
                                        "It reduces processor power consumption to zero"
                              ],
                              "correctIndex": 1,
                              "explanation": "عرض ناقل البيانات (Data Bus Width) بيحدد كمية البيانات اللي بتتنقل في النبضة الواحدة؛ فناقل 64 بت ينقل ضعف الداتا اللي بينقلها ناقل 32 بت، مما يرفع كفاءة وسرعة النظام (Throughput & Performance)."
                    },
                    {
                              "id": "ch3_p4_q3",
                              "question": "Q3. Which control line causes data on the data bus to be written into the addressed memory location? (Sheet Q3.11)",
                              "options": [
                                        "Memory Read",
                                        "Memory Write",
                                        "I/O Write",
                                        "Bus Request"
                              ],
                              "correctIndex": 1,
                              "explanation": "خط (Memory Write) هو اللي بيبعت إشارة كهربية للرام عشان تستلم الداتا اللي على ناقل البيانات وتخزنها في العنوان المحدد."
                    },
                    {
                              "id": "ch3_p4_q4",
                              "question": "Q4. What is the difference between 'Bus Request' and 'Interrupt Request'? (Sheet Q3.11)",
                              "options": [
                                        "They are identical and physically connected to the same pin",
                                        "Bus Request asks to gain control of the bus lines (e.g. DMA), while Interrupt Request asks CPU to service a peripheral",
                                        "Bus Request formats the RAM, while Interrupt Request restarts the computer",
                                        "Bus Request is used only for monitors, while Interrupt Request is used only for mice"
                              ],
                              "correctIndex": 1,
                              "explanation": "فرق جوهري في الامتحان: الـ Bus Request بيطلبه جهاز زي كارت DMA عشان يستحوذ على أسلاك الناقل وينقل داتا مباشرة، بينما الـ Interrupt Request بيطلبه جهاز عشان يوقف برنامج المعالج ويشغله روتين خدمة ISR!"
                    },
                    {
                              "id": "ch3_p4_q5",
                              "question": "Q5. Which control line provides regular timing signals to synchronize operations on a synchronous bus? (Sheet Q3.11)",
                              "options": [
                                        "Transfer ACK",
                                        "Clock",
                                        "Bus Grant",
                                        "I/O Read"
                              ],
                              "correctIndex": 1,
                              "explanation": "خط الساعة (Clock line) هو اللي بينقل نبضات مربعة منتظمة تضبط وتزامن كل عمليات القراءة والكتابة على الناقل المتزامن (Synchronous Bus)."
                    },
                    {
                              "id": "ch3_p4_q6",
                              "question": "Q6. What is the function of the 'Transfer ACK' (Acknowledge) control line? (Sheet Q3.11)",
                              "options": [
                                        "It turns off the computer power supply",
                                        "It indicates that data have been successfully accepted from or placed onto the data bus",
                                        "It requests bus control from the central arbiter",
                                        "It increments the Program Counter (PC)"
                              ],
                              "correctIndex": 1,
                              "explanation": "إشارة (Transfer ACK) هي إشعار استلام وتأكيد (Acknowledge) إن الداتا اتحطت على الناقل بنجاح أو تم استلامها دون أي تلف."
                    },
                    {
                              "id": "ch3_p4_q7",
                              "question": "Q7. What physical bottleneck primarily led to replacing traditional shared buses with Point-to-Point links? (Slide 49)",
                              "options": [
                                        "Silicon shortage in semiconductor foundries",
                                        "Propagation delay, signal distortion at high frequencies, and bus contention bottlenecks",
                                        "Lack of support for binary numbers",
                                        "High manufacturing cost of copper wires"
                              ],
                              "correctIndex": 1,
                              "explanation": "مع زيادة التردد بالجيجاهرتز، السلك المشترك بيعاني من تأخير الانتشار (Propagation Delay) وانعكاس وتشوه الإشارة، بالإضافة لمشكلة عنق الزجاجة (Bottleneck) لأن جهاز واحد بس اللي بيقدر يتكلم في نفس اللحظة!"
                    },
                    {
                              "id": "ch3_p4_q8",
                              "question": "Q8. How does Intel QuickPath Interconnect (QPI) transmit data between modern processors and chipsets? (Slide 50)",
                              "options": [
                                        "Using a single shared 8-bit ribbon cable",
                                        "Using dedicated, direct point-to-point packetized high-speed serial links",
                                        "Through optical lasers in open air",
                                        "Using the analog audio bus"
                              ],
                              "correctIndex": 1,
                              "explanation": "معمارية QPI من إنتل بتعتمد على وصلات نقطية مباشرة وسريعة جداً (Point-to-Point) بتقسم الداتا لحزم (Packets) وتبعتها بسرعة عشرات الجيجابايت في الثانية دون مشاركة أو انتظار."
                    },
                    {
                              "id": "ch3_p4_q9",
                              "question": "Q9. Direct Memory Access (DMA) primarily facilitates which type of data transfer? (Slide 35)",
                              "options": [
                                        "Processor to Processor register transfers",
                                        "Direct data transfer between I/O modules and memory without passing through the processor",
                                        "Transferring instructions from the IR to the ALU",
                                        "Transferring BIOS code to the CMOS chip"
                              ],
                              "correctIndex": 1,
                              "explanation": "الـ Direct Memory Access (DMA) بيسمح بنقل كتل بيانات ضخمة مباشرة بين أجهزة الـ I/O (زي الهارد أو الشبكة) والذاكرة RAM دون إرهاق المعالج في كل بايت."
                    },
                    {
                              "id": "ch3_p4_q10",
                              "question": "Q10. Which PCI Express (PCIe) configuration provides the maximum bandwidth commonly utilized by dedicated graphics cards?",
                              "options": [
                                        "PCIe x1",
                                        "PCIe x2",
                                        "PCIe x4",
                                        "PCIe x16"
                              ],
                              "correctIndex": 3,
                              "explanation": "منفذ PCIe x16 بيحتوي على 16 مسار تسلسلي تفاضلي (Lanes) بتشتغل بالتوازي، وده اللي بيدي كروت الشاشة الحديثة أقصى معدل نقل بيانات متاح في اللوحة الأم!"
                    }
          ]
        }
      ]
    }
  ]
};



