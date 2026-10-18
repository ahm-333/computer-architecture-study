/**
 * ==========================================================================
 * COMPUTER ARCHITECTURE — CURRICULUM DATA STORE
 * ==========================================================================
 * يحتوي على شرح الفصول والأجزاء + الكويز التفاعلي لكل جزء.
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
      summary: "الفرق الجوهري بين Computer Architecture و Computer Organization، دراسة حالة IBM System/370، وتريكات الامتحانات والشيت.",
      isReady: true,
      parts: [
        {
          id: "ch1-p1",
          code: "PART 1",
          slides: "Slides 3 & 4",
          title: "Computer Architecture vs. Computer Organization",
          hasContent: true,
          contentHtml: `
            <!-- 1. الشرح بالبلدي (الفكرة الأساسية من الصفر) -->
            <section class="exp-section">
              <div class="exp-section-header">
                <span class="exp-sec-num">01</span>
                <h2 class="exp-sec-title">الشرح بالبلدي (الفكرة الأساسية من الصفر)</h2>
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
                <div class="layer-pill-card arch">
                  <div class="mono" style="color: var(--accent-cyan); font-weight: 800; font-size: 0.85rem; margin-bottom: 0.35rem;">
                    LAYER 01 // COMPUTER ARCHITECTURE
                  </div>
                  <p><strong>1. ورقة التعليمات</strong> اللي بيشوفها المبرمج ويكتب بيها الكود (<span class="mono">Architecture</span>).</p>
                </div>

                <div class="layer-pill-card org">
                  <div class="mono" style="color: var(--accent-purple); font-weight: 800; font-size: 0.85rem; margin-bottom: 0.35rem;">
                    LAYER 02 // COMPUTER ORGANIZATION
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
                <div class="balady-label">🗣️ الشرح بالعامية المصرية</div>
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
                <div class="balady-label">🗣️ الشرح بالعامية المصرية</div>
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
                  <span style="font-weight: 800; color: var(--accent-emerald);">✅ Model Answer (الإجابة النموذجية الكاملة):</span>
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
              id: "q1",
              question: "1. في الامتحان، لو جالك سؤال عن 'Number of bits used to represent data'، ده يصنف تبع إيه؟",
              options: [
                "Computer Architecture",
                "Computer Organization",
                "Control Signals",
                "Memory Technology"
              ],
              correctIndex: 0,
              explanation: "صح جداً! تريكة الامتحان: عدد البتات المخصصة للداتا (زي 32-bit أو 64-bit) تبع الـ Architecture لأن المبرمج هو اللي بيحددها في الكود وبتأثر على الحسابات والـ Overflow."
            },
            {
              id: "q2",
              question: "2. كلمة 'Transparent to the programmer' في مادة معمارية الحاسب معناها إيه وتدل على إيه؟",
              options: [
                "واضحة للمبرمج وتدل على الـ Architecture",
                "مخفية تماماً عن المبرمج وتدل على الـ Organization",
                "أوامر الأسمبلي ISA",
                "طرق عنونة الذاكرة Addressing Modes"
              ],
              correctIndex: 1,
              explanation: "الله ينور! كلمة Transparent في هندسة حاسب معناها 'مخفي تماماً عن المبرمج والكود مبيحسش بيه'، وأول ما تشوفها تختار Organization وانت مغمض."
            },
            {
              id: "q3",
              question: "3. لما نرفع سرعة المعالج (Clock Frequency) من 2GHz لـ 4GHz، إيه اللي بيتغير؟",
              options: [
                "الـ Architecture بيتغير بالكامل",
                "الـ ISA بيتغير ولازم نعيد كتابة البرامج",
                "الـ Organization بس هو اللي بيتغير، والـ Architecture ثابت",
                "الـ Addressing Modes بتتغير"
              ],
              correctIndex: 2,
              explanation: "مظبوط! أي حاجة فيها تردد أو سرعة أو زمن (GHz, MHz, Nanoseconds) هي Organization فقط، والكود القديم بيشتغل زي ما هو أسرع."
            },
            {
              id: "q4",
              question: "4. عائلة IBM System/370 اتعملت بنفس الـ Architecture وبـ Organization مختلف عشان تحقق مبدأ إيه؟",
              options: [
                "Increasing Bus Width",
                "Protecting software investment (حماية استثمار برامج العملاء)",
                "Changing Instruction Set",
                "Replacing DRAM with SRAM"
              ],
              correctIndex: 1,
              explanation: "برافو! توحيد الـ Architecture خلى العملاء يشتروا أجهزة أحدث وأسرع وتشتغل عليها كل برامجهم القديمة فوراً بدون تغيير سطر كود واحد (Protecting software investment)."
            },
            {
              id: "q5",
              question: "5. أي عنصر من العناصر الآتية يعتبر من خصائص الـ Computer Organization؟",
              options: [
                "Instruction Set Architecture (ISA)",
                "Addressing Modes",
                "Control Signals & Memory Technology (DRAM/SRAM)",
                "I/O Mechanisms visible in code"
              ],
              correctIndex: 2,
              explanation: "صح! إشارات التحكم الكهربية (Control Signals) وتكنولوجيا تصنيع الرامات (Memory Technology) هي تفاصيل هاردوير تحت الكبوت (Organization)."
            },
            {
              id: "q6",
              question: "6. [True / False]: Two computers can have the same Architecture but different Organizations.",
              options: [
                "TRUE (✔)",
                "FALSE (✖)"
              ],
              correctIndex: 0,
              explanation: "إجابة صحيحة (TRUE ✔)! زي عائلة IBM System/370 وزي معالجات Core i3 و Core i9 اللي بيشغلوا نفس البرامج بس بسرعة وعتاد داخلي مختلف."
            }
          ]
        },
        {
          id: "ch1-p2",
          code: "PART 2",
          slides: "قريباً",
          title: "الجزء الثاني — بانتظار إرسال المحتوى",
          hasContent: false,
          contentHtml: "",
          quiz: []
        },
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
