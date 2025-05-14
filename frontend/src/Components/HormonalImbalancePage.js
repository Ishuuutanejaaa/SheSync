import React from "react";
import "./HormonalImbalancePage.css";

const HormonalImbalancePage = () => {
  return (
    <div>
      <header>Understanding Hormonal Imbalance: A Deeper Dive</header>
      <div className="container">
        <aside className="sidebar">
          <nav>
            <ul>
              <li>
                <a href="hormonal_imbalance.html" className="icon-hormonal-imbalance">
                  🔄 Hormonal Imbalance
                </a>
              </li>
              <li>
                <a href="#pcos-pcod" className="icon-pcos-pcod">
                  ⚕️ PCOS/PCOD
                </a>
              </li>
              <li>
                <a href="quiz.html" className="icon-diagnosis">
                  🔍 Early Diagnosis
                </a>
              </li>
              <li>
                <a href="#menstrual-cycle" className="icon-menstrual-cycle">
                  🩸 Menstrual Cycle
                </a>
              </li>
              <li>
                <a href="#video-explainer" className="icon-video">
                  🎥 Video Explainer
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <main>
          <section id="hormonal-imbalance">
            <h2>What is it?</h2>
            <p>
              <strong>Definition:</strong> Hormonal imbalance refers to disruptions in the production, regulation, or function of hormones in the body. Hormones are chemical messengers that control various bodily functions, including metabolism, growth, and reproduction.
            </p>
            <p>
              <strong>Common Symptoms:</strong> Symptoms of hormonal imbalance may include irregular menstrual cycles, weight changes, mood swings, fatigue, and changes in skin or hair health. These symptoms can vary depending on the specific hormones affected.
            </p>
            <div className="infographic">
              <img src="hormonal_imbalance.png" alt="Hormonal Imbalance Symptoms" id="hormonal-imbalance-img" />
            </div>
            <p>
              <strong>Causes:</strong> Hormonal imbalances can occur due to unhealthy lifestyle choices such as poor diet, lack of exercise, and chronic stress. These factors can disrupt hormone production and regulation in the body.
            </p>
            <p>
              <strong>Effects:</strong> Hormonal imbalances can manifest in various physical symptoms, including irregular menstrual cycles, acne breakouts, weight gain, and hair thinning or loss.
            </p>
          </section>
          <section id="pcos-pcod">
            <h2>What is PCOS/PCOD?</h2>
            <p>
              <strong>Definition:</strong> Polycystic ovary syndrome (pcos) is a common hormonal disorder that affects people with ovaries. it is characterized by irregular menstrual cycles, excess androgen levels, and polycystic ovaries.
            </p>
            <div className="infographic">
              <img src="pcod_pcos_symptoms.png" alt="PCOS and PCOD" id="pcos-pcod-img" />
            </div>
            <p>
              <strong>Causes:</strong> Polycystic Ovary Syndrome (PCOS) is primarily caused by hormonal imbalances, insulin resistance, and genetic factors. These factors contribute to irregular menstrual cycles and excess androgen production.
            </p>
            <p>
              <strong>Effects:</strong> Common symptoms of PCOS include irregular periods, excess facial and body hair (hirsutism), acne, and ovarian cysts. PCOS can also affect fertility and increase the risk of diabetes and cardiovascular disease.
            </p>
            <p>
              <strong>Treatment Options:</strong> Treatment for PCOS focuses on managing symptoms and reducing long-term health risks. Options include lifestyle changes (e.g., diet, exercise), medications (e.g., birth control pills, metformin), and fertility treatments.
            </p>
          </section>
          <section id="diagnosis">
            <h2>Importance of Early Diagnosis</h2>
            <p>
              <strong>Benefits of Early Detection:</strong> Early diagnosis of hormonal imbalances allows for timely intervention and treatment, reducing the risk of complications such as infertility, metabolic disorders, and mental health issues.
            </p>
            <p>
              <strong>Diagnostic Tests:</strong> Healthcare providers use various diagnostic tests to identify hormonal imbalances, including blood tests to measure hormone levels, imaging tests (e.g., ultrasound), and specialized assessments for specific conditions like PCOS.
            </p>
            <p>
              <strong>Seeking Medical Advice:</strong> Regular health check-ups and consultations with healthcare professionals are essential for monitoring hormonal health, addressing symptoms promptly, and optimizing overall well-being.
            </p>
          </section>
          <section id="menstrual-cycle">
            <h2>Menstrual Cycle Overview:</h2>
            <p>
              The menstrual cycle consists of four phases—menstrual, follicular, ovulation, and luteal—regulated by hormonal changes.
            </p>
            <div className="infographic">
              <img src="menstrual_phases.png" alt="Menstrual Cycle Phases" id="menstrual-cycle-img" />
            </div>
          </section>
          <section id="video-explainer">
            <h2>Understanding Hormonal Imbalances: PCOS/PCOD Explained</h2>
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Zrwzv3-SP7c"
                frameBorder="0"
                allowFullScreen
                title="PCOS/PCOD Video Explainer"
              ></iframe>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default HormonalImbalancePage;