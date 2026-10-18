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
    ],
    "sim-ch3-software-exec": [
      {
        num: "01",
        title: "الخطوة 1: مسار الأوامر — دخول أكواد التعليمات إلى مفسر الأوامر (Instruction Codes ──► Control Unit)",
        route: "[Instruction Codes] (أكواد التعليمات) ──► INSTRUCTION INTERPRETER (Control Unit)",
        payload: "📥 مسار الأوامر (فوق): كود التعليمة يدخل لمفسر الأوامر (Control Unit) لفك الشفرة",
        desc: "بدلاً من تغيير الأسلاك يدوياً، تدخل أكواد التعليمات البرمجية (Instruction Codes) من الذاكرة إلى مفسر الأوامر (Instruction Interpreter / Control Unit) ليفهم العملية المطلوبة (جمع، طرح، مقارنة) دون لمس الهاردوير."
      },
      {
        num: "02",
        title: "الخطوة 2: إصدار إشارات التحكم الكهربائية (Control Signals ──► General-Purpose ALU)",
        route: "INSTRUCTION INTERPRETER (Control Unit) ──[Control Signals]──► GENERAL-PURPOSE ALU",
        payload: "⚡ وحدة التحكم تصدر إشارات تحكم كهربائية (Control Signals) لتوجيه الـ ALU",
        desc: "بعد أن يفك مفسر الأوامر (Control Unit) شفرة التعليمة، يطلق إشارات تحكم كهربائية (Control Signals) تنزل مباشرة إلى وحدة الحساب والمنطق العامة (General-Purpose ALU) لتأمرها بنوع العملية المطلوبة."
      },
      {
        num: "03",
        title: "الخطوة 3: مسار البيانات — دخول البيانات وحساب الناتج النهائي (Data In ──► ALU ──► Data Out)",
        route: "Data In (البيانات) ──► [GENERAL-PURPOSE ALU] ──► Data Out (الناتج النهائي)",
        payload: "🔢 مسار البيانات (تحت): البيانات تدخل للـ ALU وتتنفذ العملية ويخرج الناتج في Data Out",
        desc: "تدخل الأرقام والبيانات عبر مسار (Data In) إلى وحدة الحساب والمنطق (General-Purpose ALU)، وبناءً على إشارة التحكم المستلمة تنفذ الـ ALU العملية الحسابية أو المنطقية وتخرج النتيجة النهائية في (Data Out)."
      }
    ],
    "sim-ch3-toplevel-regs": [
      {
        num: "01",
        title: "الخطوة 1: سجلات العناوين ومسار خطوط العناوين (PC, MAR, I/O AR ──► Address Lines)",
        route: "[PC ──► MAR | I/O AR] ──► Address Lines (System Bus) ──► [Main Memory / I/O Module]",
        payload: "📍 مسار العناوين: PC يسلم عنوان الأمر القادم لـ MAR، أو I/O AR يحدد عنوان منفذ جهاز الـ I/O",
        desc: "يحمل عداد البرنامج (PC) عنوان التعليمة التالية ويسلمه إلى سجل عنوان الذاكرة (MAR) لفتح الخانة المطلوبة في الـ Main Memory عبر خطوط العناوين (Address Lines)، بينما يحدد سجل (I/O AR) رقم أو عنوان منفذ جهاز الإدخال/الإخراج المطلوب."
      },
      {
        num: "02",
        title: "الخطوة 2: سجلات الحوافظ ومسار خطوط البيانات (Main Memory / I/O ◄──[Data Lines]──► MBR, I/O BR ──► IR)",
        route: "[Main Memory / I/O Buffers] ◄──[Data Lines]──► [MBR / I/O BR] ──► IR (Instruction Reg)",
        payload: "📦 مسار البيانات: الداتا والأوامر تعبر Data Lines إلى صندوق البريد MBR أو I/O BR ثم كود الأمر يدخل IR",
        desc: "تنتقل البيانات وأكواد التعليمات عبر خطوط البيانات (Data Lines) إلى سجل حاجز الذاكرة (MBR — صندوق أمانات الداتا) أو سجل حاجز الـ I/O (I/O BR)، ومن الـ MBR ينتقل كود التعليمة الشغالة حالياً إلى سجل التعليمة (IR)."
      },
      {
        num: "03",
        title: "الخطوة 3: وحدة التحكم والتنفيذ الحسابي وتفاعل الأجهزة الخارجية (CU, ALU & External Peripherals)",
        route: "[IR ──► Control Unit / Timing] + [MBR ──► ALU] + [I/O Module ◄──► Keyboards, Disks, Displays]",
        payload: "⚙️ التنفيذ الكامل: وحدة التحكم تفك شفرة IR وتصدر Control Lines، والـ ALU تحسب، والـ I/O يكلم الأجهزة الخارجية",
        desc: "تفك وحدة التحكم (Control Unit / Timing) شفرة الأمر الموجود في الـ IR وتصدر إشارات التحكم عبر (Control Lines)، وتنفذ وحدة (ALU & Temp Execution) الحسابات، بينما تتولى وحدة الـ I/O Module (عبر Port Buffers و Status & Control Logic) التواصل مع الكيبورد والشاشات والأقراص."
      }
    ],
    "sim-ch3-basic-cycle": [
      {
        num: "01",
        title: "المرحلة 1: دورة الجلب (Fetch Cycle — جلب التعليمة من الذاكرة)",
        route: "START ──► FETCH CYCLE: [IR ◄── Memory[PC]] & [PC = PC + 1]",
        payload: "📥 مرحلة الجلب (Fetch): المعالج يقرأ التعليمة من العنوان المسجل في PC ويضعها في IR ويزود PC بواحد",
        desc: "يبص المعالج في عداد البرنامج (PC) ليعرف عنوان التعليمة المطلوبة، ثم يقرأ كود التعليمة من الذاكرة الرئيسية ويحفظه في سجل التعليمة (IR)، ويزود عداد البرنامج تلقائياً بواحد (PC = PC + 1) ليشير للتعليمة التالية."
      },
      {
        num: "02",
        title: "المرحلة 2: دورة التنفيذ (Execute Cycle — فك الشفرة وتنفيذ العملية)",
        route: "FETCH CYCLE ──► EXECUTE CYCLE: [Decode Opcode in IR ──► Processor-Mem / I/O / ALU / Control]",
        payload: "⚡ مرحلة التنفيذ (Execute): وحدة التحكم تفك شفرة الـ Opcode في IR وتنفذ إحدى فئات التنفيذ الأربعة",
        desc: "تحلل وحدة التحكم (Control Unit) كود العملية (Opcode) الموجود في الـ IR وتصدر إشارات التحكم لتنفيذ العملية ضمن الفئات الأربعة: (1) Processor-Memory، أو (2) Processor-I/O، أو (3) Data Processing في الـ ALU، أو (4) Control (Jump/Branch)."
      },
      {
        num: "03",
        title: "المرحلة 3: التكرار أو التوقف (Repeat Next Instruction or Halt)",
        route: "EXECUTE CYCLE ──► [HALT / REPEAT] ──► Return to FETCH CYCLE",
        payload: "🔄 استمرار الدورة: العودة فوراً لمرحلة الجلب (Fetch) للتعليمة التالية إلا عند وجود أمر HALT",
        desc: "بعد انتهاء تنفيذ التعليمة الحالية، تعود الدورة تلقائياً إلى مرحلة الجلب (Fetch Cycle) لجلب التعليمة التالية التي يشير إليها الـ PC، ولا يتوقف المعالج إلا إذا نفذ تعليمة توقف صريحة (HALT) أو تم إيقاف التشغيل."
      }
    ],
    "sim-ch3-state-diagram": [
      {
        num: "01",
        title: "المرحلة 1: حساب عنوان التعليمة وجلبها (iac ──► if)",
        route: "1. iac (Instruction Address Calc) ──► 2. if (Instruction Fetch into IR)",
        payload: "📥 حساب العنوان والجلب: حساب عنوان الأمر التالي (iac) ثم قراءته من الذاكرة إلى سجل IR (if)",
        desc: "تبدأ الدورة في حالة (iac) بتحديد وحساب عنوان التعليمة التالية في الذاكرة (عادةً عبر PC)، ثم تنتقل إلى حالة (if) حيث يقرأ المعالج كود التعليمة من الذاكرة ويضعه في سجل التعليمة (IR)."
      },
      {
        num: "02",
        title: "المرحلة 2: فك شفرة العملية وتحديد المعاملات (iod)",
        route: "2. if ──► 3. iod (Instruction Operation Decoding) ──► 4. oac",
        payload: "🔍 فك الشفرة (iod): وحدة التحكم تحلل الـ Opcode لتحديد نوع العملية والمعاملات المطلوبة",
        desc: "في حالة (iod — Instruction Operation Decoding)، تقوم وحدة التحكم بتحليل كود العملية (Opcode) الموجود في الـ IR لتعرف ما هي العملية المطلوبة وهل تحتاج إلى جلب معاملات (Operands) من الذاكرة أو الـ I/O."
      },
      {
        num: "03",
        title: "المرحلة 3: حساب عنوان المعامل وجلبه وتنفيذ العملية الحسابية (oac ──► of ──► do + Loop)",
        route: "4. oac (Operand Addr Calc) ──► 5. of (Operand Fetch) ──► 6. do (Data Operation) ↺ [Multiple Operands]",
        payload: "🧮 جلب المعاملات والتنفيذ: حساب عنوان المعامل (oac) ➔ سحبه (of) ➔ تنفيذ العملية في ALU (do) مع إمكانية التكرار",
        desc: "يحسب المعالج العنوان الفعلي للمعامل في (oac)، ثم يسحب قيمة المعامل من الذاكرة أو الـ I/O في (of) (ويمكن تكرار oac/of لو كانت التعليمة تحتاج أكثر من معامل)، ثم تنفذ الـ ALU العملية الحسابية أو المنطقية في حالة (do)."
      },
      {
        num: "04",
        title: "المرحلة 4: حساب عنوان التخزين وحفظ النتيجة والعودة لبداية الدورة (oac ──► os ──► iac)",
        route: "6. do ──► oac (Store Address) ──► 7. os (Operand Store) ──► Return to 1. iac",
        payload: "💾 حفظ النتيجة (os) وإتمام الدورة: كتابة الناتج في الذاكرة أو الـ I/O ثم العودة إلى (iac) للتعليمة التالية",
        desc: "إذا كانت التعليمة تتطلب تخزين ناتج، يحسب المعالج عنوان التخزين في (oac) ثم يكتب النتيجة في الذاكرة أو يرسلها لجهاز الـ I/O في حالة (os — Operand Store)، وأخيراً يعود السهم إلى (iac) لبدء دورة التعليمة التالية."
      }
    ],
    "sim-ch3-trace-exec": [
      {
        num: "01",
        title: "الخطوة 1 (Cycle 1 - Fetch): جلب التعليمة الأولى من العنوان 215",
        route: "Mem[215] = 3400H ──► IR = 3400H  |  PC = 215 + 1 = 216H  |  AC = 0000H",
        payload: "📥 Step 1 (Fetch 1): قراءة 3400 من العنوان 215 إلى IR، وزيادة PC فوراً ليصبح 216",
        desc: "البداية كانت PC = 215. يذهب المعالج للعنوان 215 فيقرأ الكود 3400 ويضعه في IR، ويزيد الـ PC بواحد فوراً في مرحلة الـ Fetch ليصبح PC = 216، بينما يظل AC = 0000."
      },
      {
        num: "02",
        title: "الخطوة 2 (Cycle 1 - Execute): تنفيذ أمر التحميل (3400 = Load AC from 400)",
        route: "Decode IR (3 = Load, Addr = 400) ──► AC ◄── Mem[400] = 0012H",
        payload: "⚡ Step 2 (Execute 1): الكود 3 يعني Load ➔ قراءة الرقم 0012 من العنوان 400 وتحميله في AC",
        desc: "يفك المعالج شفرة IR (3400): الرقم 3 على الشمال يعني (Load AC from Memory) والعنوان هو 400. يذهب للعنوان 400 فيجد القيمة 0012 فينسخها داخل مسجل التراكم ليصبح AC = 0012 (بينما PC = 216 ثابت)."
      },
      {
        num: "03",
        title: "الخطوة 3 (Cycle 2 - Fetch): جلب التعليمة الثانية من العنوان 216",
        route: "Mem[216] = 7401H ──► IR = 7401H  |  PC = 216 + 1 = 217H  |  AC = 0012H",
        payload: "📥 Step 3 (Fetch 2): قراءة 7401 من العنوان 216 إلى IR، وزيادة PC فوراً ليصبح 217",
        desc: "يقرأ المعالج التعليمة الثانية من العنوان المسجل في الـ PC (216) فيجد الكود 7401 ويضعه في سجل IR، ويزيد الـ PC بواحد فوراً ليصبح PC = 217، ويظل AC محتفظاً بقيمته 0012."
      },
      {
        num: "04",
        title: "الخطوة 4 (Cycle 2 - Execute): تنفيذ أمر الجمع بالهيكسا (7401 = Add Mem[401] to AC)",
        route: "Decode IR (7 = Add, Addr = 401) ──► AC = 0012H + 1008H = 101AH",
        payload: "🧮 Step 4 (Execute 2): جمع 0012H + 1008H بنظام الهيكسا (2 + 8 = 10 = A) ليصبح AC = 101AH",
        desc: "الرقم 7 يعني (Add to AC from Memory) والعنوان هو 401 (الذي يحتوي على 1008). تجمع الـ ALU القيمة 0012H + 1008H بنظام الست عشري: 2 + 8 = 10 بالعشري وتُكتب A بالهيكسا، فيصبح الناتج في AC = 101AH!"
      },
      {
        num: "05",
        title: "الخطوة 5 (Cycle 3 - Fetch): جلب التعليمة الثالثة من العنوان 217",
        route: "Mem[217] = 4401H ──► IR = 4401H  |  PC = 217 + 1 = 218H  |  AC = 101AH",
        payload: "📥 Step 5 (Fetch 3): قراءة 4401 من العنوان 217 إلى IR، وزيادة PC فوراً ليصبح 218",
        desc: "يقرأ المعالج التعليمة الثالثة من العنوان 217 فيجد الكود 4401 ويضعه في IR، ويزيد الـ PC بواحد فوراً ليصبح PC = 218، ويظل مسجل AC محتفظاً بالناتج 101A."
      },
      {
        num: "06",
        title: "الخطوة 6 (Cycle 3 - Execute): تنفيذ أمر التخزين في الذاكرة (4401 = Store AC to 401)",
        route: "Decode IR (4 = Store, Addr = 401) ──► Mem[401] ◄── AC = 101AH (Overwrites 1008H)",
        payload: "💾 Step 6 (Execute 3): نسخ قيمة AC (101A) وتخزينها في خانة الذاكرة 401 (ومحتوى AC لا يتصفر!)",
        desc: "الرقم 4 يعني (Store AC to Memory) والعنوان هو 401. ينسخ المعالج القيمة الموجودة في AC (101A) ويكتبها في خانة الذاكرة 401 فتمسح القيمة القديمة (1008) وتصبح Mem[401] = 101A، بينما يظل AC = 101A بدون تصفير!"
      }
    ]
  };

  /* ==========================================================================
     QUICK COMPONENT GLOSSARY FOR EACH OF THE OFFICIAL DIAGRAMS
     ========================================================================== */
  const SIM_COMPONENTS = {
    "sim-4-functions": [
      { code: "Control Mechanism", role: "وحدة التحكم: توجه كل الوحدات بإشارات كهربائية", color: "amber", step: 0 },
      { code: "Data Movement (I/O & Comms)", role: "نقل البيانات: إدخال وإخراج الداتا للعالم الخارجي", color: "emerald", step: 1 },
      { code: "Data Storage Facility", role: "تخزين البيانات: حفظ مؤقت (RAM) أو دائم (Hard Disk)", color: "emerald", step: 2 },
      { code: "Data Processing Facility", role: "معالجة البيانات: تنفيذ العمليات الحسابية والمنطقية", color: "cyan", step: 3 }
    ],
    "sim-top-structure": [
      { code: "CPU (Processor)", role: "المعالج: يتحكم في الحاسوب وينفذ معالجة البيانات", color: "cyan", step: 0 },
      { code: "Main Memory (RAM)", role: "الذاكرة الرئيسية: تحفظ البرامج والبيانات المشغلة حالياً", color: "emerald", step: 1 },
      { code: "System Bus", role: "ناقل النظام: مسارات الربط بين المعالج والذاكرة والـ I/O", color: "amber", step: 0 },
      { code: "I/O Module", role: "وحدة الإدخال/الإخراج: تربط الحاسوب بالأجهزة الخارجية", color: "amber", step: 2 }
    ],
    "sim-cpu-internal": [
      { code: "Registers", role: "السجلات: أسرع ذاكرة مؤقتة داخل المعالج لحفظ الأوامر والأرقام", color: "emerald", step: 0 },
      { code: "Control Unit (CU)", role: "وحدة التحكم: تفك شفرة التعليمة وتصدر أوامر التشغيل", color: "amber", step: 1 },
      { code: "ALU", role: "وحدة الحساب والمنطق: تنفذ الجمع والطرح والعمليات المنطقية", color: "cyan", step: 2 },
      { code: "Internal CPU Bus", role: "الناقل الداخلي: يربط الـ CU والـ ALU والـ Registers معاً", color: "cyan", step: 1 }
    ],
    "sim-multicore-cache": [
      { code: "Core 1 & Core 2", role: "الأنوية: وحدات معالجة مستقلة (CU+ALU+Registers) على شريحة واحدة", color: "cyan", step: 0 },
      { code: "L1 & L2 Cache", role: "كاش خاصة بكل نواة: فائقة السرعة (1ns) لتفادي بطء الرامات", color: "emerald", step: 1 },
      { code: "Shared L3 Cache", role: "كاش المستوى الثالث: ذاكرة سريعة مشتركة بين جميع الأنوية", color: "amber", step: 2 },
      { code: "Main Memory (DRAM)", role: "الرامات الخارجية: سعة كبيرة خارج الشريحة (50-100ns)", color: "emerald", step: 2 }
    ],
    "sim-ias-word": [
      { code: "Shared Memory (4096 × 40b)", role: "ذاكرة IAS: 4096 موقعاً، كل كلمة طولها 40 بت للبيانات والأوامر معاً", color: "cyan", step: 0 },
      { code: "Number Word (1 + 39 bit)", role: "كلمة البيانات: 1 بت للإشارة (Sign) + 39 بت لقيمة الرقم", color: "emerald", step: 1 },
      { code: "Instruction Word (2 × 20b)", role: "كلمة التعليمات: تشيل تعليمتين (Left & Right) كل واحدة 20 بت", color: "amber", step: 2 },
      { code: "Opcode (8b) + Address (12b)", role: "تركيب التعليمة: 8 بت لنوع العملية + 12 بت لعنوان الذاكرة (2^12=4096)", color: "amber", step: 2 }
    ],
    "sim-ias-dataflow": [
      { code: "PC & MAR (12-bit)", role: "PC يحمل عنوان التعليمة التالية ويرسله إلى MAR لفتح موقع الذاكرة", color: "amber", step: 0 },
      { code: "MBR (40-bit)", role: "صندوق بريد الذاكرة: يستقبل الكلمة الكاملة (40 بت) من الذاكرة", color: "cyan", step: 0 },
      { code: "IR (8-bit) & IBR (20-bit)", role: "IR يستقبل كود التعليمة الشمال للتنفيذ، و IBR يحفظ التعليمة اليمين مؤقتاً", color: "emerald", step: 1 },
      { code: "ALU & AC / MQ (40-bit)", role: "ALU تنفذ الحسابات بمساعدة سجلات المراكم AC و MQ", color: "cyan", step: 2 }
    ],
    "sim-embedded-controller": [
      { code: "Analog Data Capture", role: "الحساسات (Sensors): تقرأ الحرارة والضغط والسرعة من البيئة المحيطة", color: "emerald", step: 0 },
      { code: "Custom Logic / ADC", role: "تحويل الإشارة التماثلية إلى أرقام رقمية (ADC) وضبط التوقيت", color: "cyan", step: 1 },
      { code: "Microcontroller CPU & ROM/SRAM", role: "المعالج المدمج يقارن القراءات بالكود الثابت المخزن في الـ ROM", color: "amber", step: 2 },
      { code: "Actuators & Switches", role: "المشغلات الميكانيكية: تنفذ رد الفعل اللحظي (Real-Time) كالفرامل والمواتير", color: "amber", step: 3 }
    ],
    "sim-cloud-infra": [
      { code: "Client Devices", role: "أجهزة العملاء (موبايل ARM، لابتوب x86، حساس IoT) تطلب الخدمة عند الطلب", color: "cyan", step: 0 },
      { code: "Cloud Networking", role: "شبكات السحابة: ربط فائق السرعة والاعتمادية وبأقل زمن تأخير (Low Latency)", color: "amber", step: 1 },
      { code: "Shared Resource Pool", role: "مجمع الموارد المشترك: سيرفرات Xeon/ARM وتخزين عملاق وقواعد بيانات تُخصص فوراً", color: "emerald", step: 2 }
    ],
    "sim-ch3-software-exec": [
      { code: "Instruction Codes", role: "أكواد التعليمات: الأوامر البرمجية القادمة من الذاكرة", color: "amber", step: 0 },
      { code: "Instruction Interpreter (CU)", role: "مفسر الأوامر (وحدة التحكم): يفك الشفرة ويصدر إشارات تحكم كهربائية", color: "amber", step: 1 },
      { code: "General-Purpose ALU", role: "وحدة الحساب والمنطق العامة: تنفذ العمليات بناءً على إشارات التحكم", color: "cyan", step: 2 },
      { code: "Data In / Data Out", role: "مسار البيانات: دخول الأرقام للحساب وخروج الناتج النهائي", color: "emerald", step: 2 }
    ],
    "sim-ch3-toplevel-regs": [
      { code: "PC & IR", role: "PC يحمل عنوان الأمر القادم | IR يحمل كود الأمر الحالي قيد التنفيذ", color: "amber", step: 0 },
      { code: "MAR & MBR", role: "MAR يحمل عنوان خانة الرام (Address Bus) | MBR صندوق داتا الرام (Data Bus)", color: "cyan", step: 1 },
      { code: "I/O AR & I/O BR", role: "I/O AR يحدد عنوان منفذ الـ I/O (Address Bus) | I/O BR صندوق داتا الـ I/O", color: "emerald", step: 1 },
      { code: "System Bus, Memory & I/O", role: "ناقل النظام يربط المعالج بمصفوفة الذاكرة (Words 0..N-1) ووحدة الـ I/O", color: "amber", step: 2 }
    ],
    "sim-ch3-basic-cycle": [
      { code: "FETCH CYCLE", role: "مرحلة الجلب: قراءة التعليمة من Mem[PC] إلى IR وزيادة PC = PC + 1", color: "cyan", step: 0 },
      { code: "EXECUTE CYCLE", role: "مرحلة التنفيذ: فك شفرة الـ Opcode في IR وتنفيذ العملية المطلوبة", color: "amber", step: 1 },
      { code: "HALT / REPEAT", role: "التكرار التلقائي للتعليمة التالية أو التوقف عند أمر HALT", color: "emerald", step: 2 }
    ],
    "sim-ch3-state-diagram": [
      { code: "iac & if", role: "حساب عنوان التعليمة التالية (iac) وجلبها من الذاكرة إلى IR (if)", color: "cyan", step: 0 },
      { code: "iod (Decode)", role: "فك شفرة كود العملية (Opcode) وتحديد نوع العملية والمعاملات", color: "amber", step: 1 },
      { code: "oac, of & do (+Loop)", role: "حساب عنوان المعامل (oac) وجلبه (of) وتنفيذ العملية في ALU (do)", color: "amber", step: 2 },
      { code: "os (Operand Store)", role: "كتابة النتيجة النهائية في الذاكرة أو الـ I/O والعودة إلى iac", color: "emerald", step: 3 }
    ],
    "sim-ch3-trace-exec": [
      { code: "Cycle 1 (215: 3400)", role: "Fetch (PC=216, IR=3400) ➔ Execute Load 400 (AC=0012)", color: "cyan", step: 1 },
      { code: "Cycle 2 (216: 7401)", role: "Fetch (PC=217, IR=7401) ➔ Execute Add 401 (AC = 0012+1008 = 101A)", color: "amber", step: 3 },
      { code: "Cycle 3 (217: 4401)", role: "Fetch (PC=218, IR=4401) ➔ Execute Store 401 (Mem[401]=101A, AC=101A)", color: "emerald", step: 5 }
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

    // 1. Insert Live Active Step HUD Banner right above the SVG stage if not present
    const svgStage = simCard.querySelector(".sim-svg-stage");
    if (svgStage && !simCard.querySelector(".sim-live-state-banner")) {
      const banner = document.createElement("div");
      banner.className = "sim-live-state-banner";
      banner.innerHTML = `
        <div class="sim-live-top-row">
          <span class="sim-live-step-badge" data-sim-step-badge>STEP 01 / 0${ops.length}</span>
          <div class="sim-live-payload" data-sim-payload></div>
          <div class="sim-live-route" data-sim-route></div>
        </div>
        <div class="sim-live-desc" data-sim-desc></div>
      `;
      svgStage.parentNode.insertBefore(banner, svgStage);
    }

    // 2. Insert Quick Component Glossary Grid right after the SVG stage if not present
    const comps = SIM_COMPONENTS[simId] || [];
    if (svgStage && comps.length > 0 && !simCard.querySelector(".sim-components-guide")) {
      const guide = document.createElement("div");
      guide.className = "sim-components-guide";
      guide.innerHTML = `
        <div class="sim-components-title">
          <span>🧩 دليل مكونات المخطط (اضغط على أي مكون لمعرفة دوره في العملية):</span>
          <span class="mono" style="font-size:0.72rem; color:var(--text-muted);">INTERACTIVE COMPONENT LEGEND</span>
        </div>
        <div class="sim-components-grid">
          ${comps
            .map(
              (c) => `
            <div class="sim-comp-chip" data-comp-step="${c.step}" style="cursor:pointer;">
              <span class="sim-comp-dot ${c.color}"></span>
              <div class="sim-comp-info">
                <span class="sim-comp-code">${c.code}</span>
                <span class="sim-comp-role">${c.role}</span>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      `;
      svgStage.insertAdjacentElement("afterend", guide);
    }

    // 3. Replace old single-line ticker with complete Step-by-Step Operations Breakdown + Prev/Next Bar
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
      const badgeEl = simCard.querySelector("[data-sim-step-badge]");
      const payloadEl = simCard.querySelector("[data-sim-payload]");
      const routeEl = simCard.querySelector("[data-sim-route]");
      const descEl = simCard.querySelector("[data-sim-desc]");
      const tagEl = simCard.querySelector("[data-sim-tag]");

      if (badgeEl) badgeEl.textContent = `الخطوة ${safeIdx + 1} من ${ops.length}`;
      if (payloadEl) payloadEl.textContent = ops[safeIdx].payload;
      if (routeEl) routeEl.textContent = ops[safeIdx].route;
      if (descEl) descEl.textContent = ops[safeIdx].desc;
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

      // Component glossary chips click
      simCard.querySelectorAll("[data-comp-step]").forEach((chip) => {
        chip.addEventListener("click", () => {
          stopAutoplay(simCard, simId);
          const idx = parseInt(chip.getAttribute("data-comp-step"), 10);
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
     INTERACTIVE TRUE / FALSE DRILLS ENHANCER (PARTS 1 - 6)
     -------------------------------------------------------------------------- */
  function initInteractiveTFDrills() {
    const bodyEl = document.getElementById("canvasExplanationBody");
    if (!bodyEl) return;

    const tfCards = bodyEl.querySelectorAll(".tf-card");
    tfCards.forEach((card) => {
      if (card.getAttribute("data-tf-ready") === "1") return;
      card.setAttribute("data-tf-ready", "1");

      const answerRow = card.querySelector(".tf-answer-row");
      if (!answerRow) return;

      const isTrueCorrect = !!answerRow.querySelector(".tf-badge.true");
      answerRow.classList.add("tf-hidden");

      const controls = document.createElement("div");
      controls.className = "tf-interactive-controls";
      controls.innerHTML = `
        <button type="button" class="tf-choice-btn" data-tf-pick="true">✔ True (صح)</button>
        <button type="button" class="tf-choice-btn" data-tf-pick="false">✖ False (غلط)</button>
        <span class="tf-result-status"></span>
      `;

      card.insertBefore(controls, answerRow);

      const btns = controls.querySelectorAll(".tf-choice-btn");
      const statusEl = controls.querySelector(".tf-result-status");

      btns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const pickedTrue = btn.getAttribute("data-tf-pick") === "true";
          const isUserRight = pickedTrue === isTrueCorrect;

          btns.forEach((b) => {
            b.classList.remove("picked-correct", "picked-wrong");
            const bTrue = b.getAttribute("data-tf-pick") === "true";
            if (bTrue === isTrueCorrect) {
              b.classList.add("picked-correct");
            } else if (b === btn && !isUserRight) {
              b.classList.add("picked-wrong");
            }
          });

          statusEl.className = `tf-result-status ${isUserRight ? "ok" : "err"}`;
          statusEl.innerHTML = isUserRight
            ? "✅ إجابة صح! الله ينور — شوف الشرح بالعامية 👇"
            : "❌ إجابة غلط! ولا يهمك — اعرف السبب بالعامية 👇";

          answerRow.classList.remove("tf-hidden");
          answerRow.classList.add("tf-revealed");
        });
      });
    });
  }

  /* --------------------------------------------------------------------------
     INTERACTIVE QUIZ RENDERER
     -------------------------------------------------------------------------- */
  function renderQuizForPart(part) {
    const defaultQuizContainer = document.getElementById("partQuizContainer");
    const inlineExamMount = document.getElementById("examInteractiveQuizMount");

    if (defaultQuizContainer && inlineExamMount) {
      defaultQuizContainer.innerHTML = "";
    }

    const quizContainer = inlineExamMount || defaultQuizContainer;
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

    const pctScore = quizList.length > 0 ? Math.round((correctCount / quizList.length) * 100) : 0;

    const questionsHtml = quizList
      .map((q) => {
        const key = `${part.id}_${q.id}`;
        const userChoice = state.quizAnswers[key];
        const isAnswered = userChoice !== undefined;
        const isCorrect = isAnswered && userChoice === q.correctIndex;
        const correctOptText = q.options[q.correctIndex] || "";

        const sectionHeaderHtml = q.sectionTitle
          ? `
            <div class="quiz-section-divider">
              <span class="quiz-section-badge">INTERACTIVE SECTION // قسم تفاعلي</span>
              <h3 class="quiz-section-heading">${q.sectionTitle}</h3>
            </div>
          `
          : "";

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
          ${sectionHeaderHtml}
          <div class="quiz-q-card ${isAnswered ? (isCorrect ? "answered-ok" : "answered-err") : ""}" id="qcard_${q.id}">
            <p class="quiz-q-title">${q.question}</p>
            <div class="quiz-options-grid">
              ${optionsHtml}
            </div>
            <div class="quiz-feedback ${isAnswered ? "show" : ""} ${isCorrect ? "ok" : "err"}">
              ${
                isAnswered
                  ? `
                    <div class="quiz-feedback-top">
                      <span class="quiz-verdict-badge">
                        ${
                          isCorrect
                            ? "✅ إجابة صحيحة! الله ينور عليك"
                            : `❌ إجابة غير صحيحة — الإجابة الصح هي: <strong dir="ltr">${correctOptText}</strong>`
                        }
                      </span>
                      <button type="button" class="quiz-retry-single-btn" data-quiz-retry="${q.id}">
                        ↻ جرب السؤال تاني
                      </button>
                    </div>
                    <div class="quiz-balady-exp">
                      <span class="quiz-balady-tag">💡 الشرح بالعامية:</span>
                      <span>${q.explanation}</span>
                    </div>
                  `
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
            <span class="mono" style="font-size: 0.75rem; color: var(--accent-amber); font-weight: 700;">INTERACTIVE EXAM QUIZ // اختبر نفسك الآن (تصحيح فوري + شرح بالعامية)</span>
            <h2 style="font-family: var(--font-display-ar); font-size: 1.4rem; font-weight: 900;">
              🎯 كويز تفاعلي على ${part.title}
            </h2>
          </div>
          <div style="display: flex; align-items: center; gap: 0.65rem; flex-wrap: wrap;">
            <div class="quiz-score-pill">
              النتيجة: ${correctCount} / ${quizList.length} (${pctScore}%) • المجاب: ${answeredCount}
            </div>
            ${
              answeredCount > 0
                ? `<button type="button" class="tool-pill-btn" data-reset-quiz-all="1">↻ إعادة الكويز</button>`
                : ""
            }
          </div>
        </div>

        <div class="quiz-questions-list">
          ${questionsHtml}
        </div>

        <div class="quiz-footer-actions">
          <button type="button" class="tool-pill-btn" data-reset-quiz-all="1">
            ↻ إعادة الكويز بالكامل من البداية
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

    quizContainer.querySelectorAll("[data-quiz-retry]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const qId = btn.getAttribute("data-quiz-retry");
        delete state.quizAnswers[`${part.id}_${qId}`];
        renderQuizForPart(part);
      });
    });

    quizContainer.querySelectorAll("[data-reset-quiz-all]").forEach((btn) => {
      btn.addEventListener("click", () => {
        quizList.forEach((q) => {
          delete state.quizAnswers[`${part.id}_${q.id}`];
        });
        renderQuizForPart(part);
      });
    });
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
      initInteractiveTFDrills();
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

    const startExam1Btn = document.getElementById("startExam1Btn");
    if (startExam1Btn) {
      startExam1Btn.addEventListener("click", () => {
        openReader("ch-1", "ch1-exam", true);
      });
    }

    const startCh3P1Btn = document.getElementById("startCh3P1Btn");
    if (startCh3P1Btn) {
      startCh3P1Btn.addEventListener("click", () => {
        openReader("ch-3", "ch3-p1", true);
      });
    }

    const startCh3P2Btn = document.getElementById("startCh3P2Btn");
    if (startCh3P2Btn) {
      startCh3P2Btn.addEventListener("click", () => {
        openReader("ch-3", "ch3-p2", true);
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
