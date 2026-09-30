import { withAlpha, type Locale } from "@/lib/arms";

export { withAlpha };

/** Brand tokens only — no colors outside this set (see app/globals.css / lib/arms.ts). */
export const BRAND = {
  mint: "#01efac",
  teal: "#01cbae",
  blue: "#2082a6",
  purple: "#524096",
  deepPurple: "#5f2a84",
  dark: "#1a1a2e",
  bg: "#f9fafa",
  text: "#2d2d2d",
  textMid: "#5a5a5a",
  border: "#e5e7eb",
  /** Existing Academy-arm accent: mint is too light to read as text, so the app already
   *  pairs it with this darker ink (lib/arms.ts). Reused here for mint/teal tiles too. */
  mintInk: "#0d6b53",
} as const;

export interface Localized {
  en: string;
  ar: string;
}

export function t(v: Localized, locale: Locale): string {
  return locale === "ar" ? v.ar : v.en;
}

/** Matches the display-font convention used across app/(en) and app/ar pages. */
export function displayFont(locale: Locale): string {
  return locale === "ar" ? "var(--font-display-ar), sans-serif" : "Helony, Georgia, serif";
}

export type CategoryKey = "all" | "parents" | "pod" | "teachers" | "companies" | "medical";

export interface CategoryMeta {
  key: CategoryKey;
  label: Localized;
  desc?: Localized;
  ink: string;
  bg: string;
  icon: string;
}

const ICONS: Record<CategoryKey, string> = {
  all: "M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18z M12 9a3 3 0 1 0 0 6a3 3 0 1 0 0-6z",
  parents: "M12 20s-7-4.4-9.2-8.7A5.2 5.2 0 0 1 12 6.1a5.2 5.2 0 0 1 9.2 5.2C19 15.6 12 20 12 20z",
  pod: "M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17 6.6 19.9l1-6.1L3.2 9.5l6.1-.9z",
  teachers: "M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z M4 20.5V5.5",
  companies: "M3 8h18v11H3z M9 8V5h6v3 M3 13h18",
  medical: "M10 3h4v7h7v4h-7v7h-4v-7H3v-4h7z",
};

export const categories: CategoryMeta[] = [
  { key: "all", label: { en: "Everyone", ar: "الجميع" }, ink: BRAND.mintInk, bg: BRAND.mint, icon: ICONS.all },
  {
    key: "parents",
    label: { en: "Parents & Families", ar: "الآباء والأسر" },
    desc: { en: "Support your child and yourself, from diagnosis to independence.", ar: "ادعم طفلك ونفسك، من التشخيص وحتى الاستقلالية." },
    ink: BRAND.purple,
    bg: BRAND.purple,
    icon: ICONS.parents,
  },
  {
    key: "pod",
    label: { en: "People of Determination", ar: "أصحاب الهمم" },
    desc: { en: "Everyday skills for self-care and independence.", ar: "مهارات يومية للعناية الذاتية والاستقلالية." },
    ink: BRAND.mintInk,
    bg: BRAND.mint,
    icon: ICONS.pod,
  },
  {
    key: "teachers",
    label: { en: "Teachers", ar: "المعلمون" },
    desc: { en: "Classrooms where every student can learn and belong.", ar: "فصول دراسية يتعلم وينتمي فيها كل طالب." },
    ink: BRAND.blue,
    bg: BRAND.blue,
    icon: ICONS.teachers,
  },
  {
    key: "companies",
    label: { en: "Companies", ar: "الشركات" },
    desc: { en: "Hiring, communication and culture that welcome everyone.", ar: "توظيف وتواصل وثقافة عمل ترحب بالجميع." },
    ink: BRAND.mintInk,
    bg: BRAND.teal,
    icon: ICONS.companies,
  },
  {
    key: "medical",
    label: { en: "Medical Teams", ar: "الفرق الطبية" },
    desc: { en: "Supporting families with care from the very first conversation.", ar: "دعم الأسر برعاية تبدأ من أول محادثة." },
    ink: BRAND.deepPurple,
    bg: BRAND.deepPurple,
    icon: ICONS.medical,
  },
];

export interface Trainer {
  id: string;
  name: string;
  initials: string;
  color: string;
  role: Localized;
  affiliation: Localized;
  bio: Localized[];
  qualifications: Localized[];
  languages: Localized;
  availableFor: Localized;
  email: string;
  tags: Localized[];
}

export const trainers: Record<string, Trainer> = {
  sally: {
    id: "sally-helweh",
    name: "Sally Helweh",
    initials: "SH",
    color: BRAND.teal,
    role: { en: "Certified Hypnotherapist · Parent Coach · Speaker", ar: "معالجة بالتنويم الإيحائي معتمدة · مدربة آباء · متحدثة" },
    affiliation: { en: "Co-Founder & COO, Antami", ar: "شريكة مؤسسة ورئيسة العمليات، أنتمي" },
    bio: [
      { en: "Sally Helweh is the Co-Founder and COO of Antami, and a mother of two boys with autism.", ar: "سالي حلوة هي الشريكة المؤسسة ورئيسة العمليات في أنتمي، وأم لولدين مصابين بالتوحد." },
      { en: "Her path into inclusion began in the classroom. After earning a diploma in teaching for special needs and learning difficulties, she worked for two years as an inclusion teacher in Lebanon. She then joined a UAE company specialising in advocacy and employer training for People of Determination, as Operations Manager and trainer.", ar: "بدأ طريقها في مجال الدمج من الفصل الدراسي. فبعد حصولها على دبلوم في تعليم ذوي الاحتياجات الخاصة وصعوبات التعلم، عملت لمدة عامين كمعلمة دمج في لبنان. ثم انضمت إلى شركة إماراتية متخصصة في المناصرة وتدريب أصحاب العمل لصالح أصحاب الهمم، كمديرة عمليات ومدربة." },
      { en: "Sally has trained more than 200 employees and leaders across the UAE, Saudi Arabia and Kuwait, at organisations including e&, Siemens Energy, ADIB, Standard Chartered and Aldar. She has also delivered self-advocacy programmes for People of Determination.", ar: "دربت سالي أكثر من 200 موظف وقائد في الإمارات والسعودية والكويت، في مؤسسات منها e&‎ وسيمنس إنرجي وبنك أبوظبي الإسلامي وستاندرد تشارترد وشركة الدار. كما قدمت برامج للمناصرة الذاتية لأصحاب الهمم." },
      { en: "She is a certified hypnotherapist and coach, and speaks and trains in English and Arabic.", ar: "هي معالجة ومدربة معتمدة بالتنويم الإيحائي، وتتحدث وتدرب باللغتين العربية والإنجليزية." },
    ],
    qualifications: [
      { en: "Certified in Applied Hypnotherapy (Marisa Peer)", ar: "شهادة معتمدة في التنويم الإيحائي التطبيقي (ماريسا بير)" },
      { en: "Life, Group and CBT Coaching (Transformation Academy)", ar: "تدريب حياتي وجماعي ومعرفي سلوكي (أكاديمية Transformation)" },
      { en: "Workshop Facilitator (Transformation Academy)", ar: "ميسّرة ورش عمل (أكاديمية Transformation)" },
      { en: "Teaching Diploma, Special Needs and Learning Difficulties", ar: "دبلوم تعليم، ذوو الاحتياجات الخاصة وصعوبات التعلم" },
    ],
    languages: { en: "English, Arabic", ar: "الإنجليزية، العربية" },
    availableFor: { en: "Talks and workshops for families, employers and communities.", ar: "محاضرات وورش عمل للأسر وأصحاب العمل والمجتمعات." },
    email: "Sally@antami.ae",
    tags: [
      { en: "Parent coaching", ar: "تدريب الآباء" },
      { en: "Hypnotherapy", ar: "التنويم الإيحائي" },
      { en: "Employer & leadership training", ar: "تدريب أصحاب العمل والقادة" },
    ],
  },
};

export interface Course {
  slug: string;
  category: CategoryKey;
  title: Localized;
  desc: Localized;
  trainer: "sally" | "tba";
  live: boolean;
}

const SALLY_CARD = trainers.sally;
const TBA: { name: Localized; role: Localized; initials: string; color: string } = {
  name: { en: "Trainer to be announced", ar: "مدرب/ة سيُعلن عنه/ا لاحقًا" },
  role: { en: "Antami Academy", ar: "أكاديمية أنتمي" },
  initials: "؟",
  color: BRAND.border,
};

export const courses: Course[] = [
  { slug: "module-1", category: "all", trainer: "sally", live: true,
    title: { en: "From Inclusion to Belonging: Three Everyday Shifts", ar: "من الدمج إلى الانتماء: ثلاثة تحولات يومية" },
    desc: { en: "Three simple shifts that help People of Determination feel they truly belong.", ar: "ثلاثة تحولات بسيطة تساعد أصحاب الهمم على الشعور بانتماء حقيقي." } },
  { slug: "newly-diagnosed", category: "parents", trainer: "sally", live: false,
    title: { en: "When Your Child Is Newly Diagnosed: First Steps", ar: "عندما يُشخَّص طفلك حديثًا: الخطوات الأولى" },
    desc: { en: "Coping, caring for yourself, and knowing where to turn in the early days.", ar: "التأقلم، والاعتناء بنفسك، ومعرفة أين تتجه في الأيام الأولى." } },
  { slug: "pod-entrepreneurship", category: "parents", trainer: "tba", live: false,
    title: { en: "Entrepreneurship to Empower POD Families", ar: "ريادة الأعمال لتمكين أسر أصحاب الهمم" },
    desc: { en: "Turn your experience and skills into a business that fits family life.", ar: "حوّلي خبرتك ومهاراتك إلى مشروع يتناسب مع حياة الأسرة." } },
  { slug: "rich-mindset", category: "parents", trainer: "tba", live: false,
    title: { en: "Building a Rich Mindset", ar: "بناء عقلية الوفرة" },
    desc: { en: "Habits and beliefs that help you plan, save and grow with confidence.", ar: "عادات ومعتقدات تساعدك على التخطيط والادخار والنمو بثقة." } },
  { slug: "self-care-routines", category: "pod", trainer: "tba", live: false,
    title: { en: "Self-Care Routines That Work for You", ar: "روتين عناية ذاتية يناسبك" },
    desc: { en: "Build calm, simple routines for rest, energy and wellbeing.", ar: "ابنِ روتينًا هادئًا وبسيطًا للراحة والطاقة والعافية." } },
  { slug: "personal-hygiene", category: "pod", trainer: "tba", live: false,
    title: { en: "Personal Hygiene, Step by Step", ar: "النظافة الشخصية، خطوة بخطوة" },
    desc: { en: "Clear, visual steps for daily hygiene at your own pace.", ar: "خطوات مرئية وواضحة للنظافة اليومية بالسرعة التي تناسبك." } },
  { slug: "everyday-independence", category: "pod", trainer: "tba", live: false,
    title: { en: "Everyday Independence Skills", ar: "مهارات الاستقلالية اليومية" },
    desc: { en: "Cooking, shopping, travelling and managing money, one skill at a time.", ar: "الطبخ والتسوق والسفر وإدارة المال، مهارة تلو الأخرى." } },
  { slug: "classroom-organising", category: "teachers", trainer: "tba", live: false,
    title: { en: "Organising Your Classroom for Autistic Students", ar: "تنظيم صفك الدراسي لطلاب التوحد" },
    desc: { en: "Layouts, routines and visual supports that reduce stress and help learning.", ar: "تنظيمات وروتين ووسائل بصرية تقلل التوتر وتدعم التعلم." } },
  { slug: "accessible-social", category: "companies", trainer: "sally", live: false,
    title: { en: "Making Your Social Media Posts Accessible", ar: "جعل منشوراتك على التواصل الاجتماعي متاحة للجميع" },
    desc: { en: "Alt text, captions, colour and layout so everyone can read your content.", ar: "نص بديل وترجمة وألوان وتنسيق حتى يتمكن الجميع من قراءة محتواك." } },
  { slug: "job-posts", category: "companies", trainer: "tba", live: false,
    title: { en: "Writing Job Posts That Attract People of Determination", ar: "كتابة إعلانات وظائف تجذب أصحاب الهمم" },
    desc: { en: "Wording, formats and adjustments that open the door to more talent.", ar: "صياغة وتنسيق وتعديلات تفتح الباب أمام مواهب أكثر." } },
  { slug: "culture-of-belonging", category: "companies", trainer: "tba", live: false,
    title: { en: "Building a Culture of Belonging at Work", ar: "بناء ثقافة انتماء في العمل" },
    desc: { en: "Everyday practices that help every employee feel they belong.", ar: "ممارسات يومية تساعد كل موظف على الشعور بالانتماء." } },
  { slug: "leading-teams", category: "companies", trainer: "tba", live: false,
    title: { en: "Leading Teams Where Everyone Belongs", ar: "قيادة فرق ينتمي فيها الجميع" },
    desc: { en: "Leadership qualities that bring out the best in diverse teams.", ar: "صفات قيادية تُظهر أفضل ما في الفرق المتنوعة." } },
  { slug: "expectant-mothers", category: "medical", trainer: "tba", live: false,
    title: { en: "Preparing Expectant Mothers for a Diagnosis", ar: "تهيئة الأمهات الحوامل لتلقي التشخيص" },
    desc: { en: "How to share news during pregnancy with honesty, care and hope.", ar: "كيفية مشاركة الخبر أثناء الحمل بصدق ورعاية وأمل." } },
  { slug: "delivering-diagnosis", category: "medical", trainer: "tba", live: false,
    title: { en: "Delivering a New Diagnosis: Dos and Don'ts", ar: "تقديم تشخيص جديد: ما يجب وما لا يجب فعله" },
    desc: { en: "Etiquette for doctors meeting a family with a newly diagnosed child.", ar: "آداب التعامل للأطباء عند لقاء أسرة طفل شُخِّص حديثًا." } },
];

export function trainerCardFor(course: Course, locale: Locale) {
  if (course.trainer === "sally") {
    return { name: SALLY_CARD.name, role: t(SALLY_CARD.role, locale), initials: SALLY_CARD.initials, color: SALLY_CARD.color, id: SALLY_CARD.id };
  }
  return { name: t(TBA.name, locale), role: t(TBA.role, locale), initials: TBA.initials, color: TBA.color, id: undefined as string | undefined };
}

/** Module 1 lesson content (the only course with a real page). */
export const module1 = {
  breadcrumb: { en: "Module 1", ar: "الوحدة 1" },
  badges: [
    { en: "Free", ar: "مجانًا" },
    { en: "No sign-up needed", ar: "بلا تسجيل" },
    { en: "About 5 minutes", ar: "نحو 5 دقائق" },
    { en: "English · Arabic captions", ar: "إنجليزي · ترجمة عربية" },
  ] as Localized[],
  intro: { en: "A short course for families, colleagues and communities. Learn three simple shifts that help People of Determination feel they truly belong.", ar: "دورة قصيرة للأسر والزملاء والمجتمعات. تعلّم ثلاثة تحولات بسيطة تساعد أصحاب الهمم على الشعور بانتماء حقيقي." },
  videoLength: { en: "Course video · 5 min", ar: "فيديو الدورة · 5 دقائق" },
  lessons: [
    { title: { en: "Speak with the person, not about them", ar: "تحدث مع الشخص، لا عنه" }, desc: { en: "Address people directly and give them time to respond.", ar: "توجّه بالحديث للشخص مباشرة وامنحه وقتًا للرد." } },
    { title: { en: "Support, don't replace", ar: "ادعم، ولا تحلّ محله" }, desc: { en: "Ask before you help, and follow their lead.", ar: "اسأل قبل أن تساعد، واتبع رغبته." } },
    { title: { en: "Prepare the environment, not just the person", ar: "هيّئ البيئة، لا الشخص وحده" }, desc: { en: "Small changes to a space can make a big difference.", ar: "تغييرات صغيرة في المكان قد تُحدث فرقًا كبيرًا." } },
  ],
  statements: [
    { en: "I feel confident speaking directly to a Person of Determination.", ar: "أشعر بالثقة عند التحدث مباشرة مع صاحب همة." },
    { en: "I know how to offer help without taking over.", ar: "أعرف كيف أقدّم المساعدة دون أن أتولى الأمر بالكامل." },
    { en: "I can name small changes that make a space more welcoming.", ar: "أستطيع تحديد تغييرات صغيرة تجعل المكان أكثر ترحيبًا." },
  ] as Localized[],
  questions: [
    {
      id: "q1",
      prompt: { en: "What is the difference between inclusion and belonging?", ar: "ما الفرق بين الدمج والانتماء؟" },
      correct: "b",
      explain: { en: "Inclusion lets someone into the room. Belonging is whether they feel they were meant to be there.", ar: "الدمج يسمح للشخص بدخول المكان. أما الانتماء فهو شعوره بأنه ينتمي فعلًا إلى هذا المكان." },
      options: [
        { id: "a", text: { en: "They mean the same thing.", ar: "يعنيان الشيء نفسه." } },
        { id: "b", text: { en: "Inclusion opens the door; belonging is feeling you were meant to walk through it.", ar: "الدمج يفتح الباب؛ والانتماء هو الشعور بأنك مقصود بالدخول منه." } },
        { id: "c", text: { en: "Belonging only happens at school or work.", ar: "الانتماء يحدث فقط في المدرسة أو العمل." } },
      ],
    },
    {
      id: "q2",
      prompt: { en: "Before helping someone, what should you do first?", ar: "قبل مساعدة شخص ما، ماذا يجب أن تفعل أولًا؟" },
      correct: "b",
      explain: { en: "Asking respects their independence. Then follow their lead.", ar: "السؤال يحترم استقلاليته. ثم اتبع ما يريده." },
      options: [
        { id: "a", text: { en: "Help straight away, so they don't struggle.", ar: "ساعده فورًا حتى لا يواجه صعوبة." } },
        { id: "b", text: { en: "Ask “Would you like help?” and follow their lead.", ar: "اسأل «هل تودّ المساعدة؟» واتبع رغبته." } },
        { id: "c", text: { en: "Ask the person who is with them instead.", ar: "اسأل الشخص المرافق له بدلًا منه." } },
      ],
    },
    {
      id: "q3",
      prompt: { en: "Which is an example of preparing the environment?", ar: "أي مما يلي مثال على تهيئة البيئة؟" },
      correct: "c",
      explain: { en: "Changing the space, rather than asking the person to adapt, is where readiness begins.", ar: "تغيير المكان، بدلًا من مطالبة الشخص بالتكيّف، هو حيث تبدأ الجاهزية." },
      options: [
        { id: "a", text: { en: "Asking the person to adapt to how things are.", ar: "مطالبة الشخص بالتكيّف مع الوضع الحالي." } },
        { id: "b", text: { en: "Waiting until someone raises a problem.", ar: "الانتظار حتى يثير أحدهم مشكلة." } },
        { id: "c", text: { en: "Offering a quieter space, clearer instructions or more time.", ar: "توفير مكان أهدأ، أو تعليمات أوضح، أو وقت أطول." } },
      ],
    },
  ],
  actions: [
    { en: "I will speak directly to a Person of Determination, and give them time to respond.", ar: "سأتحدث مباشرة مع صاحب همة، وأمنحه وقتًا للرد." },
    { en: "Before helping someone, I will ask “Would you like help?” and follow their lead.", ar: "قبل مساعدة أحدهم، سأسأل «هل تودّ المساعدة؟» وأتبع رغبته." },
    { en: "I will make one small change to a space I'm part of: at home, at work, or in my community.", ar: "سأجري تغييرًا صغيرًا واحدًا في مكان أنتمي إليه: في المنزل، أو العمل، أو مجتمعي." },
  ] as Localized[],
  ratings: [
    { en: "Very useful", ar: "مفيدة جدًا" },
    { en: "Somewhat", ar: "إلى حد ما" },
    { en: "Not really", ar: "ليست حقًا" },
  ] as Localized[],
  roleOptions: [
    { en: "A family member", ar: "فرد من العائلة" },
    { en: "A person with a disability", ar: "شخص من أصحاب الهمم" },
    { en: "An employer or HR professional", ar: "صاحب عمل أو مسؤول موارد بشرية" },
    { en: "A caregiver or service provider", ar: "مقدم رعاية أو خدمة" },
    { en: "Other", ar: "أخرى" },
  ] as Localized[],
};

export interface CircleMember {
  name: string;
  role: Localized;
  initials: string;
  color: string;
  perms: Localized;
}

export const circleMembers: CircleMember[] = [
  { name: "Mum", role: { en: "Family member", ar: "فرد من العائلة" }, initials: "M", color: BRAND.mint, perms: { en: "Message · Progress · Notes", ar: "رسائل · التقدّم · ملاحظات" } },
  { name: "Dr. Khalid", role: { en: "Paediatrician", ar: "طبيب أطفال" }, initials: "DK", color: BRAND.blue, perms: { en: "Message · Notes", ar: "رسائل · ملاحظات" } },
  { name: "Ms. Noura", role: { en: "Speech therapist", ar: "أخصائية نطق" }, initials: "N", color: BRAND.purple, perms: { en: "Message · Progress · Notes", ar: "رسائل · التقدّم · ملاحظات" } },
  { name: "Fatima", role: { en: "Caregiver", ar: "مقدمة رعاية" }, initials: "F", color: BRAND.teal, perms: { en: "Message · Progress", ar: "رسائل · التقدّم" } },
  { name: "Mr. Omar", role: { en: "Teacher", ar: "معلم" }, initials: "O", color: BRAND.deepPurple, perms: { en: "Message", ar: "رسائل" } },
  { name: "Saeed", role: { en: "Brother", ar: "أخ" }, initials: "S", color: BRAND.mintInk, perms: { en: "Message · Progress", ar: "رسائل · التقدّم" } },
];

export interface CircleMessage {
  from: string;
  fromRole?: Localized;
  text: Localized;
  self?: boolean;
}

export const circleMessages: CircleMessage[] = [
  { from: "Ms. Noura", fromRole: { en: "Speech therapist", ar: "أخصائية نطق" }, text: { en: "Great session today! Try the picture cards at dinner this week.", ar: "جلسة رائعة اليوم! جرّبوا بطاقات الصور على العشاء هذا الأسبوع." } },
  { from: "Mum", text: { en: "Thank you! We'll practise tonight.", ar: "شكرًا لك! سنتدرب الليلة." } },
  { from: "Dr. Khalid", fromRole: { en: "Paediatrician", ar: "طبيب أطفال" }, text: { en: "Reminder: check-up on Thursday at 10am.", ar: "تذكير: الفحص يوم الخميس الساعة 10 صباحًا." } },
  { from: "You", text: { en: "I finished my self-care course today.", ar: "أنهيت دورتي في العناية الذاتية اليوم." }, self: true },
];

export const roleChoices: Localized[] = [
  { en: "Family member", ar: "فرد من العائلة" },
  { en: "Caregiver", ar: "مقدم رعاية" },
  { en: "Doctor", ar: "طبيب" },
  { en: "Therapist", ar: "معالج" },
  { en: "Teacher", ar: "معلم" },
  { en: "Friend", ar: "صديق" },
  { en: "Other", ar: "أخرى" },
];
