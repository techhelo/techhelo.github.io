const seoData = {
  "index.html": {
    title: "EduConverters | All Student Conversion Tools",
    description: "A collection of smart, useful tools for students including CGPA converters, resume analyzers, QR generators, and more.",
    keywords: "student tools, CGPA converter, percentage, resume analyzer, QR code, flashcard, fake news detector"
  },
  "cgpa_to_percentage.html": {
    title: "CGPA to Percentage Converter | EduConverters",
    description: "Easily convert your CGPA to a percentage using academic standards.",
    keywords: "CGPA, percentage, student, GPA calculator, EduConverters"
  },
  "sgpa_to_cgpa.html": {
    title: "SGPA to CGPA Calculator | EduConverters",
    description: "Convert semester SGPA values into cumulative CGPA for academic tracking.",
    keywords: "SGPA, CGPA, calculator, grade point average"
  },
  "attendance_calculator.html": {
    title: "Attendance Percentage Calculator | EduConverters",
    description: "Calculate your attendance percentage or required classes to maintain it.",
    keywords: "attendance, student attendance calculator, minimum attendance"
  },
  "marks_to_percentage.html": {
    title: "Marks to Percentage Converter | EduConverters",
    description: "Convert your total marks and obtained marks into percentage.",
    keywords: "marks, percentage, exam calculator"
  },
  "qr-code.html": {
    title: "QR Code Generator | EduConverters",
    description: "Create custom QR codes for links, text, or content for free.",
    keywords: "QR code, generator, link to QR, QR code maker"
  },
  "password-generator.html": {
    title: "Secure Password Generator | EduConverters",
    description: "Generate random secure passwords with just one click.",
    keywords: "password, password generator, strong password"
  },
  "resume-analyzer.html": {
    title: "AI Resume Analyzer | EduConverters",
    description: "Upload your resume and get instant analysis, tips, and improvement suggestions.",
    keywords: "resume analyzer, AI resume, resume tips, job search"
  },
  "random-topic-picker.html": {
    title: "Random Topic or Team Picker | EduConverters",
    description: "Pick a topic or assign a random group member with one click.",
    keywords: "random topic, random picker, idea generator"
  },
  "fake-news-detector.html": {
    title: "Offline Fake News Detector | EduConverters",
    description: "Detect possibly fake or misleading content using AI models — no internet needed.",
    keywords: "fake news, news detector, misinformation checker, AI detector"
  },
  "flashcard-generator.html": {
    title: "AI Flashcard Generator | EduConverters",
    description: "Convert notes or topics into study flashcards automatically.",
    keywords: "flashcards, generator, study, revision tool, education"
  },
  "cover-letter-generator.html": {
    title: "Advanced Cover Letter Generator | EduConverters",
    description: "Generate personalized cover letters with tone control and formatting.",
    keywords: "cover letter, generator, job application, letter builder"
  }
};

const filename = window.location.pathname.split("/").pop() || "index.html";
const data = seoData[filename];

if (data) {
  document.title = data.title;

  const head = document.getElementsByTagName("head")[0];

  const metaDesc = document.createElement("meta");
  metaDesc.name = "description";
  metaDesc.content = data.description;
  head.appendChild(metaDesc);

  const metaKeywords = document.createElement("meta");
  metaKeywords.name = "keywords";
  metaKeywords.content = data.keywords;
  head.appendChild(metaKeywords);
}
