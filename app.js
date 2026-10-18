/**
 * ==========================================================================
 * COMPUTER ARCHITECTURE — INTERACTIVE APPLICATION & STEP-BY-STEP SIMULATOR ENGINE
 * ==========================================================================
 * يعرض كل مخطط مع:
 * 1. شريط المسار اللحظي (منين لفين + نوع الإشارة أو الداتا)
 * 2. حركة حية واضحة على الأسلاك والمكونات في الـ SVG
 * 3. قائمة مرقمة ومفصلة لجميع خطوات العملية تحت المخطط مباشرة للتفاعل معها
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

  /* ==========================================================================
     DETAILED STEP-BY-STEP OPERATIONS FOR ALL 6 DIAGRAMS
     ========================================================================== */
  const SIM_OPERATIONS = {
    "sim-4-functions": [
      {
        num: "01",
        title: "الخطوة 1: التحكم والتوجيه (Control — القائد الموجه)",
        route: "Control Mechanism ──[Control Signals]──► All Units",
        payload: "⚡ إشارات تحكم كهربائية لتوجيه المعالجة والتخزين والنقل",
        desc: "تبدأ العملية من وحدة التحكم (Control Mechanism)؛ وهي لا تمر عبرها البيانات، بل ترسل إشارات تحكم كهربائية لجميع الوحدات الأخرى لتحدد: متى نستقبل داتا؟ متى نخزنها؟ ومتى نعالجها أو نخرجها؟"
      },
      {
        num: "02",
        title: "الخطوة 2: نقل البيانات من وإلى العالم الخارجي (Data Movement)",
        route: "I/O Lines & Communications ◄──[Data Stream]──► Computer",
        payload: "📦 حركة البيانات عبر وحدات الإدخال/الإخراج (I/O) أو الشبكات (Communications)",
        desc: "عندما يدخل المستخدم بيانات من الكيبورد/الماوس (I/O) أو تصل بيانات من الإنترنت (Communications)، تقوم وظيفة نقل البيانات (Data Movement) بتمرير هذه البيانات إلى داخل الحاسوب أو إخراج النتائج للشاشة."
      },
      {
        num: "03",
        title: "الخطوة 3: تخزين البيانات مؤقتاً أو دائماً (Data Storage)",
        route: "Data Movement / Processing ──[Save & Load]──► Data Storage Facility",
        payload: "💾 حفظ البيانات في الرامات (مؤقتاً) أو الهارد (دائماً) بأمر من الـ Control",
        desc: "بناءً على إشارة من وحدة التحكم، تدخل البيانات إلى وحدة التخزين (Data Storage Facility) ليتم الاحتفاظ بها سواء بشكل مؤقت أثناء التشغيل في الـ Main Memory أو بشكل دائم على الهارد ديسك."
      },
      {
        num: "04",
        title: "الخطوة 4: معالجة البيانات وإجراء الحسابات (Data Processing)",
        route: "Data Storage ◄──[Operands & Results]──► Data Processing Facility",
        payload: "🧮 سحب البيانات من التخزين ➔ تنفيذ الحسابات والمنطق ➔ إرجاع النتيجة",
        desc: "تأمر وحدة التحكم بسحب البيانات من وحدة التخزين (Storage) إلى وحدة المعالجة (Data Processing Facility)، حيث تتم العمليات الحسابية والمنطقية، ثم تعود النتيجة النهائية للتخزين أو تخرج للشاشة عبر الـ I/O."
      }
    ],

    "sim-top-structure": [
      {
        num: "01",
        title: "الخطوة 1: المعالج يطلب عنوان الأمر من الرامات (Address Fetch)",
        route: "CPU ──[System Bus: Address & Read Signal]──► Main Memory",
        payload: "📍 إرسال عنوان التعليمة المطلوبة (مثلاً Address: 0x1040) على الـ System Bus",
        desc: "البروسيسور (CPU) يريد تنفيذ تعليمة جديدة، فيقوم بوضع عنوان هذه التعليمة على ناقل النظام (System Bus — System Interconnection) ويرسله إلى الذاكرة الرئيسية (Main Memory - RAM)."
      },
      {
        num: "02",
        title: "الخطوة 2: الرامات ترسل التعليمة والبيانات للمعالج (Instruction & Data Read)",
        route: "Main Memory ──[System Bus: Instruction & Data]──► CPU",
        payload: "📥 الرامات ترد بالكود والبيانات عبر الـ System Bus إلى داخل الـ CPU",
        desc: "تقرأ الذاكرة الرئيسية (Main Memory) العنوان المطلوب، وتستخرج التعليمة والبيانات الشغالة حالياً، ثم تدفعها عبر أسلاك الـ System Bus لتدخل إلى المعالج (CPU) ليقوم بمعالجتها."
      },
      {
        num: "03",
        title: "الخطوة 3: إخراج النتيجة النهائية للعالم الخارجي عبر الـ I/O",
        route: "CPU ──[System Bus]──► I/O Module ──► External Environment",
        payload: "🖥️ إرسال نتيجة المعالجة من الـ CPU عبر الـ Bus إلى كارت الشاشة أو الطابعة",
        desc: "بعد أن ينتهي الـ CPU من معالجة البيانات، يرمي النتيجة النهائية على الـ System Bus لتذهب إلى وحدة الإدخال والإخراج (I/O)، والتي بدورها تنقلها إلى العالم الخارجي (الشاشة أو الطابعة)."
      }
    ],

    "sim-cpu-internal": [
      {
        num: "01",
        title: "الخطوة 1: استقرار التعليمة والأرقام داخل السجلات (Registers Load)",
        route: "Registers [IR: ADD R1, R2 | R1 = 15, R2 = 27] ──► Internal CPU Bus",
        payload: "⚡ تخزين مؤقت فائق السرعة داخل الـ Registers ثم قراءة الأمر",
        desc: "بمجرد دخول التعليمة والأرقام إلى المعالج، تقعد فوراً في خلايا تخزين داخلية فائقة السرعة تسمى السجلات (Registers). بعد ذلك، تنتقل التعليمة عبر الناقل الداخلي (Internal CPU Bus) إلى وحدة التحكم (CU)."
      },
      {
        num: "02",
        title: "الخطوة 2: وحدة التحكم (CU) تفك الشفرة وتصدر أمر التشغيل للـ ALU",
        route: "Control Unit (CU) ──[Internal CPU Bus: Control Order]──► ALU",
        payload: "🧠 الـ CU تفهم التعليمة وتصدر إشارة: 'يا ALU اجمعي الرقمين دول!'",
        desc: "تقوم وحدة التحكم (Control Unit - CU) بقراءة التعليمة وفك شفرتها (Decode)، فتفهم أن المطلوب هو عملية جمع، فترسل فوراً إشارة تحكم عبر الـ Internal CPU Bus إلى مصنع الحسابات (ALU)."
      },
      {
        num: "03",
        title: "الخطوة 3: الـ ALU تسحب الرقمين وتجمعهم وتكتب النتيجة في Register",
        route: "Registers (15, 27) ──► ALU (15 + 27 = 42) ──► Registers (Result = 42)",
        payload: "🔥 حساب 15 + 27 = 42 في نانو ثانية وحفظ النتيجة في سجل داخل الـ CPU",
        desc: "تسحب وحدة الحساب والمنطق (ALU) الرقمين من الـ Registers عبر الـ Internal CPU Bus، وتنفذ عملية الجمع واللوجيك في أجزاء من النانو ثانية، ثم ترجع النتيجة النهائية لتتخزن في Register آخر داخل المعالج!"
      }
    ],

    "sim-multicore-cache": [
      {
        num: "01",
        title: "الخطوة 1: عمل الأنوية بالتوازي على شريحة واحدة (Parallel Cores Execution)",
        route: "Single Processor Chip ──► [Core 1 (CU+ALU+Reg)] || [Core 2 (CU+ALU+Reg)]",
        payload: "⚙️ نواتان مستقلتان تعملان بالتوازي على نفس قطعة السيليكون بدون غليان!",
        desc: "بدل رفع تردد نواة واحدة حتى تحترق (Power & Thermal Wall)، تعمل Core 1 و Core 2 في نفس اللحظة بالتوازي على شريحة معالج واحدة (Single Chip). كل نواة بداخلها CU و ALU و Registers مستقلة تماماً."
      },
      {
        num: "02",
        title: "الخطوة 2: البحث الصاروخي في كاش L1 و L2 داخل النواة (1 Nanosecond)",
        route: "Core (CU/ALU) ◄──[1 ns Ultra-Fast Access]──► Private L1 & L2 Cache",
        payload: "⚡ النواة تطلب الأمر فتجده في كاش L1/L2 في 1 نانو ثانية فقط!",
        desc: "عندما تطلب النواة تعليمة أو داتا متكررة، تبحث أولاً في كاش L1 (الموجودة جوه النواة نفسها ومقسمة لـ L1-Instruction و L1-Data) ثم L2؛ فتجد الداتا في 1 نانو ثانية دون أن تنام وتنتظر الرامات البطيئة (No Stall)."
      },
      {
        num: "03",
        title: "الخطوة 3: كاش L3 المشتركة والتواصل مع الرامات (Shared L3 & Main Memory)",
        route: "Cores ◄──► Shared L3 Cache ◄──[System Bus]──► Main Memory (DRAM 100ns)",
        payload: "🔄 كاش L3 تخدم كل الأنوية معاً وتنسخ البيانات من الـ Main Memory البطيئة",
        desc: "إذا لم تكن البيانات في L1 أو L2، تبحث النواة في ذاكرة L3 Cache الكبيرة والمشتركة (Shared) بين كل الأنوية على الشريحة. وإذا طلبت بيانات لأول مرة من الرامات (DRAM - 100ns)، يتم جلبها عبر الـ System Bus ونسخها في الكاش للمرات القادمة."
      }
    ],

    "sim-ias-word": [
      {
        num: "01",
        title: "الخطوة 1: مبدأ البرنامج المخزن (Stored-Program Concept — ذاكرة واحدة مشتركة)",
        route: "Single Read-Write Memory (4096 Words × 40-bit) ◄──► Instructions + Data",
        payload: "🧠 ثورة فون نيومان (1945): الأوامر والبيانات قاعدين مع بعض في نفس الذاكرة!",
        desc: "بدل توصيل الأسلاك يدوياً في الـ ENIAC لمدة أسبوعين، جعل فون نيومان أوامر البرنامج مجرد أرقام ثنائية تتخزن مع البيانات في ذاكرة واحدة قابلة للقراءة والكتابة سعتها 4096 كلمة (Address 0 إلى 4095)، وطول كل كلمة 40 بت."
      },
      {
        num: "02",
        title: "الخطوة 2: الشكل الأول للكلمة — كلمة بيانات رقمية (40-Bit Number Word)",
        route: "Bit [0]: Sign Bit (+ / -)  |  Bits [1 .. 39]: 39-Bit Numeric Value",
        payload: "🔢 الكلمة الـ 40 بت لما تشيل رقم رياضي واحد: 1 بت للإشارة + 39 بت للقيمة",
        desc: "عندما تُستخدم الكلمة الـ 40-bit لتخزين رقم (Data/Number Word): البت رقم 0 على الشمال يحدد الإشارة (Sign Bit: 0 للموجب و 1 للسالب)، والـ 39 بت الباقيين (من البت 1 إلى 39) يمثلون القيمة الرقمية نفسها."
      },
      {
        num: "03",
        title: "الخطوة 3: الشكل الثاني للكلمة — كلمة تعليمات (Two 20-Bit Instructions)",
        route: "Left Inst [0..7 Opcode | 8..19 Addr] + Right Inst [20..27 Opcode | 28..39 Addr]",
        payload: "⚡ الكلمة الـ 40 بت تشيل تعليمتين كاملتين (كل تعليمة 20 بت = 8 Opcode + 12 Address)",
        desc: "عندما تُستخدم الكلمة الـ 40-bit لتخزين أوامر برمجية (Instruction Word)، تقسم بالنص لتشيل تعليمتين (Left & Right): كل تعليمة 20 بت مكونة من 8-bit Opcode (نوع العملية) و 12-bit Address (عنوان الذاكرة، لأن 2^12 = 4096 كلمة!)."
      }
    ],

    "sim-ias-dataflow": [
      {
        num: "01",
        title: "الخطوة 1: دورة الجلب (Fetch A) — طلب العنوان من PC لـ MAR وجلب الكلمة لـ MBR",
        route: "PC (Next Address) ──► MAR ──► Main Memory ──[40-bit Word]──► MBR",
        payload: "📥 عداد البرنامج (PC) يبعت العنوان لـ MAR، والذاكرة ترد بالكلمة الـ 40 بت في MBR",
        desc: "تبدأ دورة الجلب (Fetch Cycle) بنقل عنوان زوج التعليمات اللي عليه الدور من سجل عداد البرنامج (PC) إلى سجل العنوان (MAR). تفتح الذاكرة هذا العنوان وتخرج الكلمة الـ 40 بت كاملة لتضعها في صندوق بريد الذاكرة (MBR)."
      },
      {
        num: "02",
        title: "الخطوة 2: دورة الجلب (Fetch B) — تقسيم الكلمة: الشمال للـ IR واليمين للـ IBR",
        route: "MBR (Left 20-bit) ──► IR (8-bit) & MAR (12-bit)  ||  MBR (Right 20-bit) ──► IBR",
        payload: "✂️ التعليمة الشمال تدخل IR للتنفيذ فوراً، والتعليمة اليمين تقعد في IBR تستنى دورها!",
        desc: "بما أن الكلمة في الـ MBR تحتوي على تعليمتين: تذهب التعليمة الشمال (Left Instruction) فوراً للتنفيذ حيث يدخل الـ Opcode (8-bit) في سجل التعليمة (IR) والعنوان (12-bit) في الـ MAR، بينما تُحفظ التعليمة اليمين (Right Instruction) مؤقتاً في سجل الـ IBR."
      },
      {
        num: "03",
        title: "الخطوة 3: دورة التنفيذ (Execute Left) — فك الشفرة وتشغيل الـ ALU والـ AC/MQ",
        route: "IR (Opcode) ──► Control Circuits ──► ALU ◄──[Operands & Result]──► AC / MQ & MBR",
        payload: "🧮 وحدة التحكم تفهم الـ Opcode في الـ IR وتأمر الـ ALU بالحساب وحفظ الناتج في الـ AC/MQ",
        desc: "تقرأ دوائر التحكم (Control Circuits) الـ 8-bit Opcode الموجود في الـ IR وتفك شفرته، ثم تصدر إشارات تحكم للـ ALU لتسحب الرقم المطلوب عبر الـ MBR وتجري العملية الحسابية (جمع/طرح/ضرب/قسمة) وتخزن النتيجة في سجلات الـ AC و MQ."
      },
      {
        num: "04",
        title: "الخطوة 4: تنفيذ التعليمة اليمين من الـ IBR مباشرة (بدون الذهاب للذاكرة!)",
        route: "IBR (Right Instruction) ──► IR (8-bit Opcode) & MAR (12-bit Address) ──► Execute!",
        payload: "🚀 توفير مشوار للذاكرة! المعالج يسحب التعليمة اليمين الجاهزة من الـ IBR وينفذها فوراً",
        desc: "في النبضة التالية، لا يحتاج المعالج للذهاب للذاكرة لجلب تعليمة جديدة! بل يسحب التعليمة اليمين المخزنة جاهزة في الـ IBR وينقل الـ Opcode بتاعها إلى الـ IR وعنوانها إلى الـ MAR وينفذها مباشرة، مما يضاعف سرعة الجلب."
      }
    ],

    "sim-embedded-controller": [
      {
        num: "01",
        title: "الخطوة 1: التقاط الإشارات من الحساسات (Analog Data Capture — Sensors)",
        route: "Physical Environment (Heat / Wheel Speed) ──► Analog Data Capture (Sensors)",
        payload: "🌡️ الحساسات (Sensors) تقرأ إشارات من الطبيعة (حرارة الماتور أو سرعة دوران العجل)",
        desc: "تلتقط الحساسات الخارجية (Analog Data Capture) الإشارات التماثلية من الطبيعة مثل درجة حرارة المحرك أو ضغط الزيت أو سرعة دوران العجل في نظام فرامل الـ ABS."
      },
      {
        num: "02",
        title: "الخطوة 2: تحويل الإشارة لأرقام ودخولها للمعالج المدمج (Analog In ➔ Custom Logic ➔ CPU)",
        route: "Analog Data Capture ──[Analog In / ADC]──► Custom Logic/Timer ──► Microcontroller CPU",
        payload: "🔢 تتحول الإشارة لأرقام (Analog-to-Digital) وتدخل للمعالج عبر الـ Internal Bus",
        desc: "تمر الإشارة عبر مدخل [Analog In] ووحدة المنطق والمؤقت (Custom Logic/Timer) حيث تتحول من إشارة تماثلية إلى أرقام رقمية (ADC)، ثم تنتقل عبر الناقل الداخلي (Internal Bus) إلى المعالج المدمج (Processor / Microcontroller CPU)."
      },
      {
        num: "03",
        title: "الخطوة 3: مقارنة القراءة بالكود الثابت في الذاكرة (ROM / Flash & SRAM)",
        route: "Microcontroller CPU ◄──[Internal Bus]──► Memory (ROM/Flash for Code | SRAM for Scratchpad)",
        payload: "💾 المعالج يقارن القراءة بكود ثابت متخزن في الـ ROM ويستخدم الـ SRAM للحساب المؤقت",
        desc: "يقوم المعالج المدمج بقراءة البرنامج الثابت المخزن في ذاكرة الـ ROM/Flash (ويستخدم ذاكرة الـ SRAM كمسودة سريعة Scratchpad) ليقارن قراءة الحساسات بالحدود الآمنة المبرمجة مسبقاً."
      },
      {
        num: "04",
        title: "الخطوة 4: إرسال أمر التحكم اللحظي للمحركات والصمامات (Control Out ➔ Actuators)",
        route: "Microcontroller CPU ──► Custom Logic/Timer ──[Control Out]──► Actuators & Switches",
        payload: "⚡ استجابة لحظية (Real-Time): المعالج يبعت إشارة للـ Actuators فتضغط الفرامل في جزء من الثانية!",
        desc: "إذا اكتشف المعالج خطراً (مثل انزلاق العجل)، يرسل فوراً إشارة تحكم عبر مخرج [Control Out] إلى المشغلات الميكانيكية (Actuators & Switches مثل المواتير وصمامات الهيدروليك) لتضغط الفرامل في جزء من الثانية (Real-Time)!"
      }
    ],

    "sim-cloud-infra": [
      {
        num: "01",
        title: "الخطوة 1: طلب الخدمة عند الطلب من أجهزة العملاء (Smartphone, Laptop & IoT Clients)",
        route: "[Smartphone Client | Laptop Client | IoT Sensor Client] ──► Cloud Networking",
        payload: "📱 أجهزة العملاء تطلب موارد حوسبة أو تخزين عند الطلب (On-Demand Access)",
        desc: "تبدأ العملية من أجهزة المستخدمين والأنظمة المتصلة (هاتف ذكي Smartphone، لابتوب Laptop، أو حساس إنترنت الأشياء IoT Sensor) التي ترسل طلبات بيانات أو حجز سيرفرات عبر الشبكة."
      },
      {
        num: "02",
        title: "الخطوة 2: النقل عبر شبكات السحابة فائقة السرعة (Cloud Networking — Low Latency)",
        route: "Client Devices ◄──[High-Performance, Low-Latency Network]──► Shared Cloud Resource Pool",
        payload: "🌐 شبكات السحابة (Cloud Networking) تنقل البيانات بسرعة فائقة وبدون انقطاع أو تأخير",
        desc: "تمر جميع الطلبات عبر طبقة شبكات السحابة (Cloud Networking)، وهي بنية شبكية فائقة السرعة والاعتمادية (High-Performance, High-Reliability, Low-Latency) تضمن الربط اللحظي بين المشترك ومراكز البيانات السحابية."
      },
      {
        num: "03",
        title: "الخطوة 3: تخصيص الموارد من المجمع المشترك (Shared Cloud Resource Pool)",
        route: "Cloud Networking ──► [Virtual Servers (Xeon & ARM)] + [Massive Storage] + [Database Engines]",
        payload: "☁️ تخصيص فوري للسيرفرات الافتراضية والتخزين العملاق وقواعد البيانات بالدقيقة!",
        desc: "داخل مجمع الموارد السحابية المشترك (Shared Cloud Resource Pool)، يتم فوراً تخصيص (Rapidly Provisioned) السيرفرات الافتراضية (Virtual Servers بمعالجات Xeon و ARM) ومساحات التخزين الضخمة (Petabytes of Disks) ومحركات قواعد البيانات (Big Data Processing) على قدر الاستخدام."
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
     INTERACTIVE SVG HARDWARE SIMULATORS ENGINE (WITH STEP-BY-STEP CARDS)
     -------------------------------------------------------------------------- */
  function clearAllSimTimers() {
    Object.keys(state.simTimers).forEach((k) => {
      clearInterval(state.simTimers[k]);
      delete state.simTimers[k];
    });
  }

  function buildSimBreakdownUI(simCard, simId) {
    const ops = SIM_OPERATIONS[simId];
    if (!ops || ops.length === 0) return;

    // 1. Insert Live Route & Payload Banner right above the SVG stage if not present
    const svgStage = simCard.querySelector(".sim-svg-stage");
    if (svgStage && !simCard.querySelector(".sim-live-state-banner")) {
      const banner = document.createElement("div");
      banner.className = "sim-live-state-banner";
      banner.innerHTML = `
        <div class="sim-live-payload" data-sim-payload></div>
        <div class="sim-live-route" data-sim-route></div>
      `;
      svgStage.parentNode.insertBefore(banner, svgStage);
    }

    // 2. Replace old single-line ticker with complete Step-by-Step Operations Breakdown + Prev/Next Bar
    const oldTicker = simCard.querySelector(".sim-status-ticker");
    if (oldTicker) {
      oldTicker.remove();
    }

    if (!simCard.querySelector(".sim-steps-breakdown")) {
      const breakdown = document.createElement("div");
      breakdown.className = "sim-steps-breakdown";

      const cardsHtml = ops
        .map(
          (op, idx) => `
          <div class="sim-op-step-card ${idx === 0 ? "active" : ""}" data-op-card="${idx}">
            <div class="sim-op-num">${op.num}</div>
            <div class="sim-op-content">
              <div class="sim-op-top-row">
                <span class="sim-op-title">${op.title}</span>
                <span class="sim-op-route-badge">${op.route}</span>
              </div>
              <p class="sim-op-desc">${op.desc}</p>
            </div>
          </div>
        `
        )
        .join("");

      breakdown.innerHTML = `
        <div class="sim-steps-heading">
          <span>📋 شرح خطوات العملية بالتفصيل على المخطط (اضغط على أي خطوة لتشغيلها):</span>
          <span class="mono" style="font-size:0.75rem; color:var(--accent-amber);" data-sim-tag>STEP 1 / ${ops.length}</span>
        </div>
        ${cardsHtml}
        <div class="sim-nav-bar">
          <button type="button" class="sim-nav-btn" data-sim-prev>→ الخطوة السابقة</button>
          <span style="font-size:0.8rem; color:var(--text-muted);">تقدر تضغط على المكونات جوه الرسمة أو الكروت فوق</span>
          <button type="button" class="sim-nav-btn" data-sim-next>الخطوة التالية ←</button>
        </div>
      `;

      simCard.appendChild(breakdown);
    }
  }

  function setSimStep(simCard, stepIndex) {
    const simId = simCard.getAttribute("data-sim");
    const ops = SIM_OPERATIONS[simId] || [];
    const total = ops.length || 1;
    const safeIdx = ((stepIndex % total) + total) % total;
    const stepStr = String(safeIdx);

    // Top bar step buttons
    simCard.querySelectorAll("[data-sim-step]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-sim-step") === stepStr);
    });

    // Detailed step breakdown cards
    simCard.querySelectorAll("[data-op-card]").forEach((card) => {
      card.classList.toggle("active", card.getAttribute("data-op-card") === stepStr);
    });

    // SVG Hardware Nodes
    simCard.querySelectorAll("[data-node-step]").forEach((node) => {
      const steps = node.getAttribute("data-node-step").split(",");
      node.classList.toggle("active-node", steps.includes(stepStr));
    });

    // SVG Wire Callout Pills
    simCard.querySelectorAll("[data-pill-step]").forEach((pill) => {
      const steps = pill.getAttribute("data-pill-step").split(",");
      pill.classList.toggle("active-pill", steps.includes(stepStr));
    });

    // Animated Wires
    simCard.querySelectorAll("[data-wire-step]").forEach((wire) => {
      const steps = wire.getAttribute("data-wire-step").split(",");
      wire.classList.toggle("active-flow", steps.includes(stepStr));
    });

    // Moving Data Packet Dots
    simCard.querySelectorAll("[data-packet-step]").forEach((dot) => {
      const steps = dot.getAttribute("data-packet-step").split(",");
      dot.classList.toggle("moving", steps.includes(stepStr));
    });

    // Update Live Banner & Step Counter
    if (ops[safeIdx]) {
      const payloadEl = simCard.querySelector("[data-sim-payload]");
      const routeEl = simCard.querySelector("[data-sim-route]");
      const tagEl = simCard.querySelector("[data-sim-tag]");

      if (payloadEl) payloadEl.textContent = ops[safeIdx].payload;
      if (routeEl) routeEl.textContent = ops[safeIdx].route;
      if (tagEl) tagEl.textContent = `STEP ${safeIdx + 1} / ${ops.length}`;
    }

    simCard.setAttribute("data-current-step", stepStr);
  }

  function initSimulators() {
    clearAllSimTimers();

    document.querySelectorAll(".sim-card[data-sim]").forEach((simCard) => {
      const simId = simCard.getAttribute("data-sim");
      buildSimBreakdownUI(simCard, simId);

      const ops = SIM_OPERATIONS[simId] || [];
      const totalSteps = ops.length;
      if (totalSteps === 0) return;

      setSimStep(simCard, 0);

      // Top step buttons
      simCard.querySelectorAll("[data-sim-step]").forEach((btn) => {
        btn.addEventListener("click", () => {
          stopAutoplay(simCard, simId);
          const idx = parseInt(btn.getAttribute("data-sim-step"), 10);
          setSimStep(simCard, idx);
        });
      });

      // Detailed step cards click
      simCard.querySelectorAll("[data-op-card]").forEach((card) => {
        card.addEventListener("click", () => {
          stopAutoplay(simCard, simId);
          const idx = parseInt(card.getAttribute("data-op-card"), 10);
          setSimStep(simCard, idx);
        });
      });

      // Prev / Next step buttons
      const prevStepBtn = simCard.querySelector("[data-sim-prev]");
      const nextStepBtn = simCard.querySelector("[data-sim-next]");
      if (prevStepBtn) {
        prevStepBtn.addEventListener("click", () => {
          stopAutoplay(simCard, simId);
          const cur = parseInt(simCard.getAttribute("data-current-step") || "0", 10);
          setSimStep(simCard, cur - 1);
        });
      }
      if (nextStepBtn) {
        nextStepBtn.addEventListener("click", () => {
          stopAutoplay(simCard, simId);
          const cur = parseInt(simCard.getAttribute("data-current-step") || "0", 10);
          setSimStep(simCard, cur + 1);
        });
      }

      // Clicking SVG hardware boxes
      simCard.querySelectorAll("[data-click-step]").forEach((box) => {
        box.addEventListener("click", () => {
          stopAutoplay(simCard, simId);
          const idx = parseInt(box.getAttribute("data-click-step"), 10);
          setSimStep(simCard, idx);
        });
      });

      // Auto-play button
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
            }, 3200);
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
      autoBtn.textContent = "▶ تشغيل الخطوات بالتتابع";
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

    const startPart4Btn = document.getElementById("startPart4Btn");
    if (startPart4Btn) {
      startPart4Btn.addEventListener("click", () => {
        openReader("ch-1", "ch1-p4", true);
      });
    }

    const startPart5Btn = document.getElementById("startPart5Btn");
    if (startPart5Btn) {
      startPart5Btn.addEventListener("click", () => {
        openReader("ch-1", "ch1-p5", true);
      });
    }

    const startPart6Btn = document.getElementById("startPart6Btn");
    if (startPart6Btn) {
      startPart6Btn.addEventListener("click", () => {
        openReader("ch-1", "ch1-p6", true);
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
