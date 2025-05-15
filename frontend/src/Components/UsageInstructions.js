import React, { useState } from 'react';
import './usage_ins.css';

const translations = {
  tampons: [
    { en: 'Wash your hands before opening the tampon package.', hi: 'टैम्पोन पैकेज खोलने से पहले अपने हाथ धो लें।', pa: 'ਟੈਮਪੋਨ ਪੈਕੇਜ ਖੋਲ੍ਹਣ ਤੋਂ ਪਹਿਲਾਂ ਆਪਣੇ ਹੱਥ ਧੋਵੋ।' },
    { en: 'Sit or stand in a comfortable position.', hi: 'आरामदायक स्थिति में बैठें या खड़े हों।', pa: 'ਆਰਾਮਦਾਇਕ ਸਥਿਤੀ ਵਿੱਚ ਬੈਠੋ ਜਾਂ ਖੜ੍ਹੇ ਹੋਵੋ।' },
    { en: 'Insert the tampon into your vagina at a slight angle.', hi: 'टैम्पोन को हल्के कोण पर अपनी योनि में डालें।', pa: 'ਟੈਮਪੋਨ ਨੂੰ ਹੌਲੀ ਜਿਹਾ ਕੋਣ ਲਾ ਕੇ ਆਪਣੀ ਯੋਨੀ ਵਿੱਚ ਪਾ ਦਿਉ।' },
    { en: "Push the tampon applicator's plunger to release the tampon.", hi: 'टैम्पोन को छोड़ने के लिए टैम्पोन एप्लीकेटर के प्लंजर को धक्का दें।', pa: 'ਟੈਮਪੋਨ ਛੱਡਣ ਲਈ ਟੈਮਪੋਨ ਐਪਲੀਕੇਟਰ ਦੇ ਪਲੰਜਰ ਨੂੰ ਧੱਕੋ।' },
    { en: 'Dispose of the applicator and wash your hands.', hi: 'एप्लीकेटर का निपटान करें और अपने हाथ धोएं।', pa: 'ਐਪਲੀਕੇਟਰ ਨੂੰ ਫੈੰਕ ਦਿਉ ਅਤੇ ਆਪਣੇ ਹੱਥ ਧੋਵੋ।' },
  ],
  'menstrual-cups': [
    { en: 'Wash your hands and the menstrual cup with water and mild soap.', hi: 'अपने हाथों और मासिक धर्म कप को पानी और हल्के साबुन से धो लें।', pa: 'ਆਪਣੇ ਹੱਥਾਂ ਅਤੇ ਮਾਸਿਕ ਕੱਪ ਨੂੰ ਪਾਣੀ ਅਤੇ ਹੌਲੇ ਸਾਬਣ ਨਾਲ ਧੋਵੋ।' },
    { en: 'Fold the menstrual cup and insert it into your vagina.', hi: 'मासिक धर्म कप को मोड़ें और इसे अपनी योनि में डालें।', pa: 'ਮਾਸਿਕ ਕੱਪ ਨੂੰ ਮੋੜੋ ਅਤੇ ਇਸਨੂੰ ਆਪਣੀ ਯੋਨੀ ਵਿੱਚ ਪਾ ਦਿਉ।' },
    { en: 'Rotate the cup slightly to ensure it has opened fully.', hi: 'सुनिश्चित करने के लिए कप को हल्का घुमाएं कि यह पूरी तरह से खुल गया है।', pa: 'ਇਹ ਯਕੀਨੀ ਬਣਾਉਣ ਲਈ ਕੱਪ ਨੂੰ ਹੌਲੀ ਜਿਹਾ ਘੁੰਮਾਓ ਕਿ ਇਹ ਪੂਰੀ ਤਰ੍ਹਾਂ ਖੁਲ ਗਿਆ ਹੈ।' },
    { en: 'Wear the cup for up to 12 hours.', hi: 'कप को 12 घंटे तक पहनें।', pa: 'ਕੱਪ ਨੂੰ 12 ਘੰਟਿਆਂ ਤਕ ਪਹਿਨੋ।' },
    { en: 'To remove, pinch the base of the cup, pull it out gently, and empty it.', hi: 'हटाने के लिए, कप के आधार को पिंच करें, इसे धीरे से खींचें और खाली करें।', pa: 'ਹਟਾਉਣ ਲਈ, ਕੱਪ ਦੇ ਬੇਸ ਨੂੰ ਪਿੰਚ ਕਰੋ, ਇਸਨੂੰ ਹੌਲੇ ਹੌਲੇ ਖਿੱਚੋ ਅਤੇ ਖਾਲੀ ਕਰੋ।' },
    { en: 'Wash the cup and your hands before reinserting or storing it.', hi: 'कप को फिर से डालने या स्टोर करने से पहले कप और अपने हाथ धो लें।', pa: 'ਫੇਰ ਤੋੜਨ ਜਾਂ ਸੰਭਾਲਣ ਤੋਂ ਪਹਿਲਾਂ ਕੱਪ ਅਤੇ ਆਪਣੇ ਹੱਥ ਧੋਵੋ।' },
  ],
  pads: [
    { en: 'Remove the pad from its packaging and unfold it.', hi: 'पैड को उसकी पैकेजिंग से निकालें और इसे खोलें।', pa: 'ਪੈਡ ਨੂੰ ਇਸਦੀ ਪੈਕੇਜਿੰਗ ਤੋਂ ਕੱਢੋ ਅਤੇ ਖੋਲ੍ਹੋ।' },
    { en: 'Peel the backing off the pad to reveal the adhesive.', hi: 'चिपकने वाला दिखाने के लिए पैड के पिछले हिस्से को छीलें।', pa: 'ਚਿਪਕਣ ਵਾਲਾ ਦਿਖਾਉਣ ਲਈ ਪੈਡ ਦੇ ਪਿਛਲੇ ਹਿੱਸੇ ਨੂੰ ਛਿੱਲੋ।' },
    { en: 'Place the pad in your underwear and press firmly.', hi: 'पैड को अपनी अंडरवियर में रखें और मजबूती से दबाएं।', pa: 'ਪੈਡ ਨੂੰ ਆਪਣੀ ਅੰਡਰਵੇਅਰ ਵਿੱਚ ਰੱਖੋ ਅਤੇ ਸਖਤੀ ਨਾਲ ਦਬਾਓ।' },
    { en: 'Dispose of the used pad by wrapping it in toilet paper and throwing it in the trash.', hi: 'इस्तेमाल किए गए पैड को टॉयलेट पेपर में लपेटकर और कूड़ेदान में फेंक कर उसका निपटान करें।', pa: 'ਵਰਤੇ ਹੋਏ ਪੈਡ ਨੂੰ ਟਾਇਲਟ ਪੇਪਰ ਵਿੱਚ ਲਪੇਟ ਕੇ ਅਤੇ ਕੂੜੇਦਾਨ ਵਿੱਚ ਸੁੱਟ ਕੇ ਇਸਦਾ ਨਿਪਟਾਰਾ ਕਰੋ।' },
    { en: 'Wash your hands after disposing of the pad.', hi: 'पैड का निपटान करने के बाद अपने हाथ धो लें।', pa: 'ਪੈਡ ਦਾ ਨਿਪਟਾਰਾ ਕਰਨ ਤੋਂ ਬਾਅਦ ਆਪਣੇ ਹੱਥ ਧੋਵੋ।' },
  ],
};

const UsageInstructions = () => {
  const [language, setLanguage] = useState('en');
  const [section, setSection] = useState('tampons');
  const [checkedSteps, setCheckedSteps] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleCheckboxChange = (index) => {
    const updated = { ...checkedSteps };
    const key = `${section}-${index}`;
    updated[key] = !updated[key];
    setCheckedSteps(updated);

    const steps = translations[section];
    const totalChecked = steps.filter((_, i) => updated[`${section}-${i}`]).length;
    if (totalChecked === steps.length) {
      setShowModal(true);
    }
  };

  const getProgress = () => {
    const steps = translations[section];
    const totalChecked = steps.filter((_, i) => checkedSteps[`${section}-${i}`]).length;
    return (totalChecked / steps.length) * 100;
  };

  return (
    <div>
      <div className="language-selector">
        <label htmlFor="language">Language:</label>
        <select id="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="pa">Punjabi</option>
        </select>
      </div>

      <nav>
        <ul>
          {['tampons', 'menstrual-cups', 'pads'].map((type) => (
            <li key={type}>
              <button onClick={() => setSection(type)}>
                {type.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        <h2>{`How to Use ${section.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}`}</h2>

        {/* Display product image */}
        {section === 'tampons' && (
          <img src="tampon-removebg-preview-removebg-preview.png" alt="Tampon" className="product-image" />
        )}
        {section === 'menstrual-cups' && (
          <img src="menstrualcups2020-2048px-7504-Photoroom.png" alt="Menstrual Cup" className="product-image" />
        )}
        {section === 'pads' && (
          <img src="tampon-removebg-preview (1).png" alt="Pad" className="product-image" />
        )}

        <ol>
          {translations[section].map((step, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={checkedSteps[`${section}-${index}`] || false}
                onChange={() => handleCheckboxChange(index)}
              />
              <label>{step[language]}</label>
            </li>
          ))}
        </ol>

        <div className="progress">
          <div className="progress-bar" style={{ width: `${getProgress()}%` }}></div>
        </div>
      </main>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2>Congratulations!</h2>
            <p>You have completed all the steps in this section.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsageInstructions;

