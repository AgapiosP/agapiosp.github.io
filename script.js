const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('nav-links');
menuToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
navLinks?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach((el) => observer.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('visible'));
}

const launcher = document.getElementById('assistant-launcher');
const panel = document.getElementById('assistant-panel');
const closeButton = document.getElementById('assistant-close');
const assistantForm = document.getElementById('assistant-form');
const assistantInput = document.getElementById('assistant-input');
const assistantMessages = document.getElementById('assistant-messages');
const quickPrompts = document.getElementById('quick-prompts');

function setAssistant(open) {
  panel.classList.toggle('open', open);
  panel.setAttribute('aria-hidden', String(!open));
  launcher.setAttribute('aria-expanded', String(open));
  if (open) setTimeout(() => assistantInput.focus(), 80);
}
launcher?.addEventListener('click', () => setAssistant(!panel.classList.contains('open')));
closeButton?.addEventListener('click', () => setAssistant(false));

const knowledge = [
  {
    terms: ['ai', 'agent', 'agents', 'llm', 'copilot', 'langchain', 'nlp', 'generative'],
    answer: 'Agapios has hands-on experience with Microsoft Copilot agents, multi-agent workflows, LangChain, NLP, RapidFuzz, sentiment analysis and topic extraction. At Tradu, he built an internal multi-agent solution that retrieved client information and entity-specific policy knowledge for customer-service support.'
  },
  {
    terms: ['data engineering', 'pipeline', 'airflow', 'etl', 'elt', 'dbt', 'spark', 'parquet', 'postgresql', 'oracle'],
    answer: 'His data-engineering stack includes Python, SQL, PostgreSQL, Oracle, Apache Airflow, dbt, Spark, Parquet, SCD2 and Docker. He engineered Oracle-to-PostgreSQL ETL pipelines that reduced processing runtime by 35% and built real-time WebSocket ingestion that reduced manual data collection by 80%.'
  },
  {
    terms: ['aml', 'financial crime', 'fraud', 'transaction', 'risk', 'fcc', 'identity'],
    answer: 'Agapios works deeply in financial crime analytics. He designed a full AML and transaction-monitoring system, developed anomaly-detection alerts, built synthetic-identity detection with NLP and RapidFuzz, and automated regulatory reporting across FCA, CySEC and ASIC requirements.'
  },
  {
    terms: ['result', 'impact', 'achievement', 'metric', 'metrics'],
    answer: 'Selected measurable outcomes include 40% faster suspicious-activity detection, 35% lower pipeline runtime, 80% less manual data collection for website/trading ingestion, and 100% on-time regulatory submissions.'
  },
  {
    terms: ['machine learning', 'ml', 'model', 'forecast', 'churn', 'arima', 'classification', 'clustering', 'anomaly'],
    answer: 'His ML work spans predictive modelling, anomaly detection, classification, clustering, feature engineering and ARIMA forecasting. At Tradu, he built churn and country-KPI forecasts as well as transaction-monitoring models and alerts.'
  },
  {
    terms: ['education', 'university', 'degree', 'msc', 'bsc', 'nottingham', 'essex'],
    answer: 'Agapios holds an MSc in Business Analytics from the University of Nottingham (2017–2018) and a BSc in Computer Science from the University of Essex (2014–2017). He is also Kx Fundamentals Certified.'
  },
  {
    terms: ['experience', 'career', 'work', 'role', 'tradu', 'fxcm', 'cdbbank', 'hellenic'],
    answer: 'Agapios is currently Assistant Vice President (FCC) & Senior Data Scientist – Engineer at Tradu (FXCM), where he has worked since November 2020. Earlier roles include IT Business Applications Officer at CDBbank and Technical Support Engineer at Hellenic Bank.'
  },
  {
    terms: ['skill', 'stack', 'technology', 'technologies', 'python', 'sql', 'cloud'],
    answer: 'Core technologies include Python, R, SQL, PL/SQL, Java, Pandas, Scikit-learn, TensorFlow/Keras, Airflow, dbt, Spark, PostgreSQL, Oracle, Snowflake, Databricks, Redshift, AWS, Azure, Tableau, Plotly and Dash.'
  },
  {
    terms: ['contact', 'email', 'phone', 'message', 'hire', 'recruiter'],
    answer: 'Use the contact form on this page to reach Agapios without exposing his personal email address or phone number. You can also visit his GitHub profile at github.com/AgapiosP.'
  }
];

function getAnswer(question) {
  const q = question.toLowerCase();
  let best = null;
  let score = 0;
  knowledge.forEach((item) => {
    const itemScore = item.terms.reduce((acc, term) => acc + (q.includes(term) ? Math.max(1, term.split(' ').length) : 0), 0);
    if (itemScore > score) { score = itemScore; best = item.answer; }
  });
  return best || 'I can help with Agapios\'s AI-agent work, machine learning, data engineering, AML / financial crime experience, education, technology stack and measurable results. Try asking about one of those areas.';
}

function appendMessage(text, type) {
  const wrapper = document.createElement('div');
  wrapper.className = `message ${type}`;
  const p = document.createElement('p');
  p.textContent = text;
  wrapper.appendChild(p);
  assistantMessages.appendChild(wrapper);
  assistantMessages.scrollTop = assistantMessages.scrollHeight;
}

function ask(question) {
  const trimmed = question.trim();
  if (!trimmed) return;
  appendMessage(trimmed, 'user');
  setTimeout(() => appendMessage(getAnswer(trimmed), 'bot'), 180);
}

assistantForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  ask(assistantInput.value);
  assistantInput.value = '';
});
quickPrompts?.querySelectorAll('button').forEach((button) => button.addEventListener('click', () => ask(button.textContent)));

const contactForm = document.getElementById('contact-form');
contactForm?.addEventListener('submit', (event) => {
  const submit = contactForm.querySelector('.form-submit');
  if (submit) { submit.disabled = true; submit.innerHTML = 'Sending…'; }

});
