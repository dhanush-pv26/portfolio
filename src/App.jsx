import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Github, MapPin, GraduationCap, Code, ChevronDown, Globe, Briefcase } from 'lucide-react';
import Profile from "./assets/profile-placeholder.svg"

const translations = {
  de: {
  nav: {
    about: 'Über mich',
    experience: 'Erfahrung',
    education: 'Bildung',
    projects: 'Projekte',
    contact: 'Kontakt'
  },

  hero: {
    greeting: 'Hallo, ich bin',
    title: 'Your Name',
    subtitle: 'QA Automation Engineer / SDET mit mehr als 3 Jahren Erfahrung in der Testautomatisierung für Web-, API- und Backend-Anwendungen. Schwerpunkt auf Java, Selenium, Playwright, REST Assured, CI/CD und der Qualitätssicherung von Finanz- und Enterprise-Plattformen.',
    cta: 'Kontaktieren Sie mich'
  },

  about: {
    title: 'Wer bin ich?',
    content: 'Hallo, ich bin Your Name, QA Automation Engineer und SDET.\n\nMein fachlicher Schwerpunkt liegt auf dem Aufbau wartbarer Automatisierungs-Frameworks mit Java, Selenium, Playwright und TypeScript, auf API- und Datenbankvalidierung sowie auf der Integration von Tests in CI/CD-Pipelines mit Jenkins und GitHub Actions.\n\nMir ist wichtig, nicht nur UI-Abläufe zu prüfen, sondern auch Konsistenz, Nebenläufigkeit, Berechtigungen und Fehlerszenarien über UI, API und Datenbank hinweg abzusichern, damit Releases zuverlässig und nachvollziehbar freigegeben werden können.',
    button: 'Mehr über mich'
  },

  experience: {
    title: 'Berufserfahrung',
    description: 'Mehr als 3 Jahre Erfahrung in QA-Automatisierung und Testengineering bei Jeeves Information Systems (Forterro), einem ERP-Softwareanbieter, mit Schwerpunkt auf Web-UI-, API-, Mobile- und Backend-Tests, CI/CD-Integration und Release-Qualität für Enterprise-Anwendungen.',
    download: 'Lebenslauf herunterladen',
    jobs: [
      {
        title: 'Associate QA Automation Engineer',
        company: 'Jeeves Information Systems (Forterro)',
        duration: '05/2022 - 01/2025',
        points: [
          'Entwickelte und pflegte Selenium-WebDriver-Automatisierung in Java mit TestNG, Maven, Page Object Model und Page Factory für ERP-Webmodule wie Auftragsverwaltung, Lagerbestand, Einkauf und Finanzen. Abgedeckt waren Regressions-, Smoke- und Sanity-Suiten; der manuelle Testaufwand sank um 25 %.',
          'Pflegte bestehende Testsuiten durch Aktualisierung von Locatoren, Behebung instabiler Tests und Anpassung der Skripte an UI-Änderungen über mehrere Releases und nutzte Apache POI für datengetriebene Tests mit Excel-Testdaten.',
          'Entwickelte API-Automatisierung mit REST Assured und Postman und testete SOAP-Webservices mit SoapUI. Dabei validierte ich Request/Response-Korrektheit, Integrationsqualität und Datenintegrität über ERP-Services und Drittanbieter-Integrationen hinweg.',
          'Führte Backend- und Datenbankvalidierungen mit SQL und PostgreSQL durch, einschließlich Batch-Verarbeitung, Datentransformationen sowie Abstimmungs- und Reporting-Prüfungen für Finanz- und Logistikdaten.',
          'Führte Funktions-, Integrations-, System-, End-to-End-, Regressions- und explorative Tests durch, wendete Grenzwertanalyse und Äquivalenzklassenbildung an und prüfte Anforderungen auf Testbarkeit und klare Akzeptanzkriterien.',
          'Erfasste und verfolgte Defects in Jira bis zur Behebung, verwaltete Testfälle in Xray und Zephyr, veröffentlichte Allure-Reports, unterstützte die Ausführung von Jenkins-Pipelines und nahm in einem agilen Team an Sprint Planning, Refinement und Retrospektiven teil.'
        ]
      },
      {
        title: 'QA Automation Engineer / SDET',
        company: 'Jeeves Information Systems (Forterro)',
        duration: '05/2022 - 01/2025',
        points: [
          'Entwarf, entwickelte und pflegte hybride Automatisierungs-Frameworks für Web-, API-, Mobile- und Backend-Anwendungen mit Java, Cucumber BDD (Gherkin), TestNG, JUnit, Playwright und TypeScript, inklusive wiederverwendbarer Komponenten, Fixtures, Test-Utilities und gemeinsamer Validierungsbibliotheken.',
          'Leitete die Migration der Selenium-basierten Suite zu Playwright und TypeScript und verantwortete Architektur, Konfiguration, Ausführungs-Setup und CI/CD-Integration. Ich ergänzte Cross-Browser-Abdeckung und hielt Legacy-Tests während der Umstellung lauffähig, um die Abdeckung zu erhalten.',
          'Integrierte UI-, API- und Regressionsautomatisierung in CI/CD-Pipelines mit Jenkins, GitHub Actions und GitLab Runner, ausgelöst durch Pull Requests, Merges und Zeitpläne, unter Einsatz von Docker und SonarQube-Codeanalyse, und verkürzte die Regressionsdauer um 30 %.',
          'Automatisierte Tests für Microservices und Integrationen, darunter Azure Functions (Cucumber und REST Assured), MuleSoft-Middleware, Zahlungs-APIs und Workflows über verteilte Services hinweg, in AWS-basierten Testumgebungen.',
          'Baute und pflegte Appium-Frameworks für iOS und Android mit BrowserStack und Page Object Model und deckte mobile Funktions-, Smoke-, Regressions- und Release-Tests neben Web- und API-Abdeckung ab.',
          'Führte Performance- und Lasttests mit JMeter, Gatling, Locust und k6 durch und analysierte die Ergebnisse, um das Verhalten von Anwendung und APIs unter Last im Rahmen der Release-Tests zu bewerten.',
          'Verantwortete Regressions-Freigaben und Release-Validierung als Quality Gate, definierte risikobasierte Teststrategien, Testpläne und Aufwandsschätzungen, verankerte QA in der Definition of Done und steigerte die Geschwindigkeit der Release-Validierung um 40 %.',
          'Betreute QA-Engineers im Mentoring, führte Code-Reviews durch und etablierte Automatisierungsstandards, leitete den Wechsel von SVN zu Git mit Branching- und Pull-Request-Workflows und führte KI-gestützte Tools (GitHub Copilot, Claude Code) für Testgenerierung, Refactoring und Fehler-Ursachenanalyse ein, ergänzt durch Playwright Trace Viewer, Allure und Slack-Reporting.'
        ]
      }
    ]
  },

  education: {
    title: 'Bildung',
    items: [
      {
        university: 'University Name',
        year: 'YYYY - YYYY',
        degree: 'Bachelor of Engineering in Computer Science'
      }
    ]
  },

  projects: {
    title: 'Ausgewählte Projekte',
    items: [
      {
        title: 'Banking & Digital Payments Quality Platform',
        description: 'Durchgängige Testautomatisierung für eine digitale Banking-Anwendung mit Kontoeröffnung, Überweisungen, Begünstigten, Zahlungen, Erstattungen und Transaktionsabstimmung. Eine Reconciliation-Engine im Framework gleicht API-Antworten nach jedem Test mit Datenbankeinträgen und erwarteten Kontoständen ab. Abgedeckt sind u. a. gleichzeitige Überweisungen ohne Überziehung, Idempotenz bei wiederholten Zahlungen, Rollbacks, Limitprüfungen und eventuelle Konsistenz.',
        stack: ['Java', 'Selenium WebDriver', 'REST Assured', 'Cucumber BDD', 'TestNG', 'SQL (JDBC)', 'Maven', 'Jenkins', 'Allure']
      },
      {
        title: 'Enterprise Identity & Access Management (IAM) Automation',
        description: 'API-lastige Automatisierung, die sicherstellt, dass nur berechtigte Nutzer auf geschützte Ressourcen zugreifen können – über Rollen, Mandanten und Sicherheitsrichtlinien hinweg. Tests werden aus einer Rollen-Endpunkt-Matrix generiert. Abgedeckt sind Token-Ablauf und Refresh, MFA, Kontosperrung, entzogene Zugriffe, Rechteausweitung, mandantenübergreifender Zugriff, Replay-Schutz und Audit-Logs.',
        stack: ['Java', 'REST Assured', 'Selenium', 'Cucumber BDD', 'TestNG', 'OAuth2 / JWT', 'SQL', 'Maven', 'Jenkins', 'Allure']
      },
      {
        title: 'Real-time FinTech Payment Platform',
        description: 'End-to-End-Teststrategie für eine vereinfachte Banking- und Zahlungsplattform mit Registrierung, MFA, mehreren Konten, Überweisungen, Zahlungsanfragen, Erstattungen und Benachrichtigungen. Der Fokus liegt auf schwierigen Fehlerszenarien wie parallelen Abbuchungen, doppelten Anfragen, Timeouts nach erfolgreicher Verarbeitung und wiederverwendeten Idempotenz-Schlüsseln, ergänzt durch Lasttests und Prüfung finanzieller Invarianten.',
        stack: ['Playwright', 'TypeScript', 'Postman', 'JSON Schema', 'k6', 'SQL', 'GitHub Actions', 'Trace Viewer']
      },
      {
        title: 'Enterprise SaaS Workflow & Document Management Platform',
        description: 'Testautomatisierung für eine Enterprise-Plattform mit Workspaces, Dokument-Uploads, Versionierung, Freigabe-Workflows und Aufgabenzuweisung. Im Mittelpunkt stehen Mandantenisolation (IDOR), RBAC, asynchrone Hintergrundjobs mit Wiederholungen, unterbrochene Datei-Uploads, parallele Freigaben sowie Cross-Browser-, Visual-Regression- und Accessibility-Prüfungen.',
        stack: ['Playwright', 'TypeScript', 'Postman', 'pytest', 'k6', 'SQL', 'Visual Regression', 'Accessibility', 'GitHub Actions']
      }
    ]
  },

  contact: {
    title: 'Kontakt',
    phone: 'Telefonnummer',
    email: 'E-Mail',
    location: 'Standort',
    locationValue: 'City, Country',
    button: 'Nachricht senden'
  }
},

  en: {
  nav: {
    about: 'About',
    experience: 'Experience',
    education: 'Education',
    projects: 'Projects',
    contact: 'Contact'
  },

  hero: {
    greeting: 'Hello, I am',
    title: 'Your Name',
    subtitle: 'QA Automation Engineer / SDET with 3+ years of experience automating web, API and backend applications. Focused on Java, Selenium, Playwright, REST Assured, CI/CD and quality engineering for financial and enterprise platforms.',
    cta: 'Contact Me'
  },

  about: {
    title: 'Who am I?',
    content: 'Hi, I’m Your Name, a QA Automation Engineer and SDET.\n\nMy professional focus is building maintainable automation frameworks with Java, Selenium, Playwright and TypeScript, validating APIs and databases, and integrating tests into CI/CD pipelines with Jenkins and GitHub Actions.\n\nI care about going beyond UI flows: verifying consistency, concurrency, authorization and failure scenarios across UI, API and database layers, so releases can be signed off with confidence and traceability.',
    button: 'More About Me'
  },

  experience: {
    title: 'Professional Experience',
    description: '3+ years of experience in QA automation and test engineering at Jeeves Information Systems (Forterro), an ERP software provider, with a focus on web UI, API, mobile and backend testing, CI/CD integration and release quality for enterprise applications.',
    download: 'Download Resume',
    jobs: [
      {
        title: 'Associate QA Automation Engineer',
        company: 'Jeeves Information Systems (Forterro)',
        duration: '05/2022 - 01/2025',
        points: [
          'Developed and maintained Selenium WebDriver automation in Java using TestNG, Maven, the Page Object Model and Page Factory for ERP web modules such as order management, inventory, purchasing and finance, covering regression, smoke and sanity suites and reducing manual testing effort by 25%.',
          'Maintained existing test suites by updating locators, fixing flaky tests and adapting scripts to UI changes across releases, and used Apache POI for data-driven testing with Excel test data.',
          'Built API automation with REST Assured and Postman and performed SOAP web-service testing with SoapUI, validating request/response accuracy, integration correctness and data integrity across ERP services and third-party integrations.',
          'Performed backend and database validation with SQL and PostgreSQL, including batch-processing workflows, data transformations, reconciliation and reporting checks for financial and logistics data.',
          'Executed functional, integration, system, end-to-end, regression and exploratory testing, applying boundary-value analysis and equivalence partitioning and reviewing requirements for testability and clear acceptance criteria.',
          'Logged and tracked defects through resolution in Jira, managed test cases in Xray and Zephyr, published Allure reports, supported Jenkins pipeline execution and took part in sprint planning, refinement and retrospectives in an Agile team.'
        ]
      },
      {
        title: 'QA Automation Engineer / SDET',
        company: 'Jeeves Information Systems (Forterro)',
        duration: '05/2022 - 01/2025',
        points: [
          'Designed, developed and maintained hybrid automation frameworks for web, API, mobile and backend applications using Java, Cucumber BDD (Gherkin), TestNG, JUnit, Playwright and TypeScript, with reusable components, fixtures, test utilities and shared validation libraries.',
          'Led the migration of the Selenium-based suite to Playwright and TypeScript, owning architecture, configuration, execution setup and CI/CD integration, adding cross-browser coverage and keeping legacy tests running during the transition to preserve coverage.',
          'Integrated UI, API and regression automation into CI/CD pipelines with Jenkins, GitHub Actions and GitLab Runner, triggered by pull requests, merges and schedules, using Docker and SonarQube static analysis, and cut regression execution time by 30%.',
          'Automated testing of microservices and integrations, including Azure Functions (Cucumber and REST Assured), MuleSoft middleware, payment APIs and workflows spanning distributed services, using AWS-based test environments.',
          'Built and maintained Appium frameworks for iOS and Android with BrowserStack and the Page Object Model, covering mobile functional, smoke, regression and release testing alongside web and API coverage.',
          'Conducted performance and load testing with JMeter, Gatling, Locust and k6, analysing results to assess application and API behaviour under load as part of release testing.',
          'Owned regression sign-off and release validation as a quality gate, defined risk-based test strategies, plans and estimates, embedded QA in the Definition of Done and improved release-validation speed by 40%.',
          'Mentored QA engineers, ran code reviews and set automation standards, led the move from SVN to Git with branching and pull-request workflows, and introduced AI-assisted tools (GitHub Copilot, Claude Code) for test generation, refactoring and failure root-cause analysis, with Playwright Trace Viewer, Allure and Slack reporting.'
        ]
      }
    ]
  },

  education: {
    title: 'Education',
    items: [
      {
        university: 'University Name',
        year: 'YYYY - YYYY',
        degree: 'Bachelor of Engineering in Computer Science'
      }
    ]
  },

  projects: {
    title: 'Selected Projects',
    items: [
      {
        title: 'Banking & Digital Payments Quality Platform',
        description: 'End-to-end automation for a digital banking application covering account creation, transfers, beneficiaries, payments, refunds and transaction reconciliation. A reconciliation engine inside the framework compares API responses against database records and expected account balances after every test. Scenarios include concurrent transfers without overdraft, idempotent retries, rollbacks, limit validation and eventual consistency.',
        stack: ['Java', 'Selenium WebDriver', 'REST Assured', 'Cucumber BDD', 'TestNG', 'SQL (JDBC)', 'Maven', 'Jenkins', 'Allure']
      },
      {
        title: 'Enterprise Identity & Access Management (IAM) Automation',
        description: 'API-heavy automation verifying that only authorized users can reach protected resources across roles, tenants and security policies. Tests are generated from a role-by-endpoint authorization matrix, covering token expiry and refresh, MFA, account lockout, revoked access, privilege escalation, cross-tenant access, replay protection and audit logging.',
        stack: ['Java', 'REST Assured', 'Selenium', 'Cucumber BDD', 'TestNG', 'OAuth2 / JWT', 'SQL', 'Maven', 'Jenkins', 'Allure']
      },
      {
        title: 'Real-time FinTech Payment Platform',
        description: 'End-to-end test strategy for a simplified banking and payment platform with registration, MFA, multiple accounts, money transfers, payment requests, refunds and notifications. It focuses on hard failure modes such as concurrent withdrawals, duplicate requests, timeouts after successful processing and reused idempotency keys, complemented by load testing and financial-invariant checks.',
        stack: ['Playwright', 'TypeScript', 'Postman', 'JSON Schema', 'k6', 'SQL', 'GitHub Actions', 'Trace Viewer']
      },
      {
        title: 'Enterprise SaaS Workflow & Document Management Platform',
        description: 'Test automation for an enterprise platform with workspaces, document uploads, version control, approval workflows and task assignment. It emphasises tenant isolation (IDOR), RBAC, asynchronous background jobs with retries, interrupted file uploads and simultaneous approvals, plus cross-browser, visual regression and accessibility checks.',
        stack: ['Playwright', 'TypeScript', 'Postman', 'pytest', 'k6', 'SQL', 'Visual Regression', 'Accessibility', 'GitHub Actions']
      }
    ]
  },

  contact: {
    title: 'Contact Me',
    phone: 'Phone Number',
    email: 'Email',
    location: 'Location',
    locationValue: 'City, Country',
    button: 'Send Message'
  }
}

};

export default function Portfolio() {
  const [language, setLanguage] = useState('de');
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollY } = useScroll();
  const t = translations[language];

  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.98)']
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'de' ? 'en' : 'de');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Fixed Header */}
      <motion.header
        style={{ opacity: headerOpacity, backgroundColor: headerBackground }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-gray-200"
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-gray-900"
            >
              YN
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(t.nav).map(([key, value], index) => (
                <motion.button
                  key={key}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => scrollToSection(key === 'about' ? 'about' : key)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 ${
                    activeSection === key ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {value}
                </motion.button>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-all duration-300"
            >
              <Globe size={16} />
              {language === 'de' ? 'EN' : 'DE'}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.p
                variants={itemVariants}
                className="text-blue-600 font-medium mb-4"
              >
                {t.hero.greeting}
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
              >
                {t.hero.title}
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                {t.hero.subtitle}
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex gap-4"
              >
                <a
                  href="mailto:your.email@example.com"
                  className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                >
                  {t.hero.cta}
                </a>
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border-2 border-gray-300 text-gray-900 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  GitHub
                </a>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex gap-4 mt-8"
              >
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 hover:bg-blue-100 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} className="text-gray-700" />
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="p-3 bg-gray-100 hover:bg-blue-100 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Mail size={20} className="text-gray-700" />
                </a>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-full max-w-md mx-auto"
              >
             <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white flex items-center justify-center">
  <div className="w-full h-full p-4 flex items-center justify-center">
    <div className="w-full h-full rounded-2xl overflow-hidden">
      <img 
        src={Profile} 
        alt="Profilbild" 
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl blur-3xl opacity-30"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown size={32} className="text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">{t.about.title}</h2>
            <motion.p
              variants={fadeInUpVariants}
              className="text-lg text-gray-600 leading-relaxed mb-8"
            >
              {t.about.content}
            </motion.p>
            <motion.a
              variants={fadeInUpVariants}
              href="#experience"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              {t.about.button}
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            >
              {t.experience.title}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-12 leading-relaxed"
            >
              {t.experience.description}
            </motion.p>

            <div className="space-y-8">
              {t.experience.jobs.map((job, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <Briefcase size={24} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                      <p className="text-blue-600 font-medium mb-2">{job.company}</p>
                      <p className="text-sm text-gray-500">{job.duration}</p>
                      {job.points && (
                        <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-700 leading-relaxed">
                          {job.points.map((point, pointIndex) => (
                            <li key={pointIndex}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex gap-4"
            >
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                {t.experience.download}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-12 text-gray-900"
            >
              {t.education.title}
            </motion.h2>

            <div className="space-y-8">
              {t.education.items.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-100 rounded-xl">
                      <GraduationCap size={24} className="text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                      <p className="text-purple-600 font-medium mb-2">{edu.university}</p>
                      <p className="text-sm text-gray-500">{edu.year}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-12 text-gray-900"
            >
              {t.projects.title}
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {t.projects.items.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <Code size={24} className="text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <span
                        key={technology}
                        className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold mb-8 text-gray-900"
              >
                {t.contact.title}
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Mail size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{t.contact.email}</p>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      your.email@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <MapPin size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{t.contact.location}</p>
                    <p className="text-lg font-medium text-gray-900">{t.contact.locationValue}</p>
                  </div>
                </div>
              </motion.div>

              <motion.a
                variants={itemVariants}
                href="mailto:your.email@example.com"
                className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                <Mail size={20} />
                {t.contact.button}
              </motion.a>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-full max-w-md mx-auto"
              >
               <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white flex items-center justify-center">
  <div className="w-full h-full p-4 flex items-center justify-center">
    <div className="w-full h-full rounded-2xl overflow-hidden">
      <img 
        src={Profile} 
        alt="Profilbild" 
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl blur-3xl opacity-30"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-gray-900 mb-2">Your Name</p>
              <p className="text-gray-600">
                {language === 'de' 
                  ? 'QA Automation Engineer & SDET' 
                  : 'QA Automation Engineer & SDET'}
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white hover:bg-blue-50 rounded-full transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Github size={20} className="text-gray-700" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-3 bg-white hover:bg-blue-50 rounded-full transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Mail size={20} className="text-gray-700" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm"
          >
            <p>© 2026 Your Name. {language === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}