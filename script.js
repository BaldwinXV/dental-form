// Translations
const translations = {
    en: {
        title: "🦷 Dental Patient Intake Form",
        subtitle: "Please fill out all information carefully",
        personalInfo: "Personal Information",
        firstName: "First Name *",
        lastName: "Last Name *",
        dateOfBirth: "Date of Birth *",
        gender: "Gender",
        select: "Select...",
        male: "Male",
        female: "Female",
        other: "Other",
        preferNotToSay: "Prefer not to say",
        fatherFirstName: "Father's First Name",
        phone: "Phone Number *",
        email: "Email",
        address: "Address",
        medicalHistory: "Medical History",
        allergies: "Allergies (medications, latex, etc.) *",
        allergiesPlaceholder: "Please list all allergies. If none, write 'None'",
        medications: "Current Medications",
        medicationsPlaceholder: "List all medications you're currently taking",
        conditionsQuestion: "Do you have any of the following conditions?",
        heartDisease: "Heart Disease",
        highBloodPressure: "High Blood Pressure",
        diabetes: "Diabetes",
        asthma: "Asthma",
        bleedingDisorder: "Bleeding Disorder",
        hepatitis: "Hepatitis",
        hivAids: "HIV/AIDS",
        arthritis: "Arthritis",
        epilepsy: "Epilepsy",
        kidneyDisease: "Kidney Disease",
        liverDisease: "Liver Disease",
        cancer: "Cancer",
        otherConditions: "Other Medical Conditions",
        pregnantQuestion: "Are you pregnant?",
        yes: "Yes",
        no: "No",
        na: "N/A",
        tobaccoQuestion: "Do you smoke or use tobacco?",
        dentalHistory: "Dental History",
        lastDentalVisit: "Last Dental Visit",
        dentalConcerns: "Current Dental Concerns or Pain",
        dentalConcernsPlaceholder: "Describe any pain, sensitivity, or concerns",
        dentalIssuesQuestion: "Have you experienced any of the following?",
        bleedingGums: "Bleeding Gums",
        toothPain: "Tooth Pain",
        jawPain: "Jaw Pain",
        sensitivity: "Sensitivity",
        badBreath: "Bad Breath",
        looseTeeth: "Loose Teeth",
        dentalAnxietyQuestion: "Do you have anxiety about dental procedures?",
        noAnxiety: "No anxiety",
        mild: "Mild",
        moderate: "Moderate",
        severe: "Severe",
        emergencyContact: "Emergency Contact",
        emergencyName: "Contact Name *",
        emergencyRelation: "Relationship *",
        emergencyPhone: "Emergency Phone *",
        consentSignature: "Consent and Signature",
        consentText1: "I certify that the above information is complete and accurate to the best of my knowledge. I understand that this information will be used to provide appropriate dental care and that I am responsible for informing the dental office of any changes to my medical status.",
        consentText2: "I authorize the dental staff to perform necessary dental procedures and understand that I will be informed of treatment plans before any major procedures.",
        patientSignature: "Patient Signature *",
        digitalSignature: "Digital Signature",
        printSignature: "Print for Manual Signature",
        clearSignature: "Clear Signature",
        printForm: "🖨️ Print Form",
        date: "Date *",
        submitForm: "Submit Patient Information",
        resetForm: "Reset Form",
        successTitle: "✓ Form Submitted Successfully!",
        successMessage: "Patient information has been saved.",
        viewPatients: "View All Patients",
        addNewPatient: "Add New Patient",
        patientRecords: "Patient Records",
        backToForm: "← Back to Form",
        downloadRecords: "Download All Records (JSON)",
        signatureRequired: "Please provide your signature before submitting.",
        resetConfirm: "Are you sure you want to reset the form? All data will be lost.",
        deleteConfirm: "Are you sure you want to delete this patient record? This action cannot be undone.",
        noRecords: "No patient records found.",
        deleteRecord: "Delete Record"
    },
    tr: {
        title: "🦷 Diş Hastası Kabul Formu",
        subtitle: "Lütfen tüm bilgileri dikkatlice doldurun",
        personalInfo: "Kişisel Bilgiler",
        firstName: "Ad *",
        lastName: "Soyad *",
        dateOfBirth: "Doğum Tarihi *",
        gender: "Cinsiyet",
        select: "Seçiniz...",
        male: "Erkek",
        female: "Kadın",
        other: "Diğer",
        preferNotToSay: "Belirtmek istemiyorum",
        fatherFirstName: "Baba Adı",
        phone: "Telefon Numarası *",
        email: "E-posta",
        address: "Adres",
        medicalHistory: "Tıbbi Geçmiş",
        allergies: "Alerjiler (ilaçlar, lateks, vb.) *",
        allergiesPlaceholder: "Lütfen tüm alerjileri listeleyin. Yoksa 'Yok' yazın",
        medications: "Mevcut İlaçlar",
        medicationsPlaceholder: "Şu anda kullandığınız tüm ilaçları listeleyin",
        conditionsQuestion: "Aşağıdaki durumlardan herhangi birine sahip misiniz?",
        heartDisease: "Kalp Hastalığı",
        highBloodPressure: "Yüksek Tansiyon",
        diabetes: "Diyabet",
        asthma: "Astım",
        bleedingDisorder: "Kanama Bozukluğu",
        hepatitis: "Hepatit",
        hivAids: "HIV/AIDS",
        arthritis: "Artrit",
        epilepsy: "Epilepsi",
        kidneyDisease: "Böbrek Hastalığı",
        liverDisease: "Karaciğer Hastalığı",
        cancer: "Kanser",
        otherConditions: "Diğer Tıbbi Durumlar",
        pregnantQuestion: "Hamile misiniz?",
        yes: "Evet",
        no: "Hayır",
        na: "Uygulanmaz",
        tobaccoQuestion: "Sigara veya tütün kullanıyor musunuz?",
        dentalHistory: "Diş Geçmişi",
        lastDentalVisit: "Son Diş Ziyareti",
        dentalConcerns: "Mevcut Diş Sorunları veya Ağrılar",
        dentalConcernsPlaceholder: "Herhangi bir ağrı, hassasiyet veya endişeyi açıklayın",
        dentalIssuesQuestion: "Aşağıdakilerden herhangi birini yaşadınız mı?",
        bleedingGums: "Kanayan Diş Etleri",
        toothPain: "Diş Ağrısı",
        jawPain: "Çene Ağrısı",
        sensitivity: "Hassasiyet",
        badBreath: "Kötü Nefes",
        looseTeeth: "Gevşek Dişler",
        dentalAnxietyQuestion: "Diş işlemleri konusunda endişeniz var mı?",
        noAnxiety: "Endişe yok",
        mild: "Hafif",
        moderate: "Orta",
        severe: "Şiddetli",
        emergencyContact: "Acil Durum İletişimi",
        emergencyName: "İletişim Adı *",
        emergencyRelation: "İlişki *",
        emergencyPhone: "Acil Telefon *",
        consentSignature: "Onay ve İmza",
        consentText1: "Yukarıdaki bilgilerin bildiğim kadarıyla eksiksiz ve doğru olduğunu onaylıyorum. Bu bilgilerin uygun diş bakımı sağlamak için kullanılacağını ve tıbbi durumumdaki değişiklikleri diş kliniğine bildirmekten sorumlu olduğumu anlıyorum.",
        consentText2: "Diş personelinin gerekli diş işlemlerini yapmasına izin veriyorum ve büyük işlemlerden önce tedavi planları hakkında bilgilendirileceğimi anlıyorum.",
        patientSignature: "Hasta İmzası *",
        digitalSignature: "Dijital İmza",
        printSignature: "Manuel İmza İçin Yazdır",
        clearSignature: "İmzayı Temizle",
        printForm: "🖨️ Formu Yazdır",
        date: "Tarih *",
        submitForm: "Hasta Bilgilerini Gönder",
        resetForm: "Formu Sıfırla",
        successTitle: "✓ Form Başarıyla Gönderildi!",
        successMessage: "Hasta bilgileri kaydedildi.",
        viewPatients: "Tüm Hastaları Görüntüle",
        addNewPatient: "Yeni Hasta Ekle",
        patientRecords: "Hasta Kayıtları",
        backToForm: "← Forma Dön",
        downloadRecords: "Tüm Kayıtları İndir (JSON)",
        signatureRequired: "Göndermeden önce lütfen imzanızı atın.",
        resetConfirm: "Formu sıfırlamak istediğinizden emin misiniz? Tüm veriler kaybolacak.",
        deleteConfirm: "Bu hasta kaydını silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.",
        noRecords: "Hasta kaydı bulunamadı.",
        deleteRecord: "Kaydı Sil"
    },
    al: {
        title: "🦷 Formulari i Pranimit të Pacientit Dentar",
        subtitle: "Ju lutemi plotësoni të gjitha informacionet me kujdes",
        personalInfo: "Informacioni Personal",
        firstName: "Emri *",
        lastName: "Mbiemri *",
        dateOfBirth: "Data e Lindjes *",
        gender: "Gjinia",
        select: "Zgjidhni...",
        male: "Mashkull",
        female: "Femër",
        other: "Tjetër",
        preferNotToSay: "Preferoj të mos them",
        fatherFirstName: "Emri i Babait",
        phone: "Numri i Telefonit *",
        email: "Email",
        address: "Adresa",
        medicalHistory: "Historia Mjekësore",
        allergies: "Alergji (ilaçe, lateks, etj.) *",
        allergiesPlaceholder: "Ju lutemi listoni të gjitha alergji. Nëse s'keni, shkruani 'Asnjë'",
        medications: "Ilaçet Aktuale",
        medicationsPlaceholder: "Listoni të gjitha ilaçet që po merrni aktualisht",
        conditionsQuestion: "A keni ndonjë nga kushtet e mëposhtme?",
        heartDisease: "Sëmundja e Zemrës",
        highBloodPressure: "Presioni i Lartë i Gjakut",
        diabetes: "Diabeti",
        asthma: "Astma",
        bleedingDisorder: "Çrregullimi i Gjakderdhjes",
        hepatitis: "Hepatiti",
        hivAids: "HIV/AIDS",
        arthritis: "Artriti",
        epilepsy: "Epilepsia",
        kidneyDisease: "Sëmundja e Veshkave",
        liverDisease: "Sëmundja e Mëlçisë",
        cancer: "Kanceri",
        otherConditions: "Kushte të Tjera Mjekësore",
        pregnantQuestion: "A jeni shtatzënë?",
        yes: "Po",
        no: "Jo",
        na: "Nuk Zbatohet",
        tobaccoQuestion: "A pini duhan ose përdorni tutun?",
        dentalHistory: "Historia Dentare",
        lastDentalVisit: "Vizita e Fundit Dentare",
        dentalConcerns: "Shqetësimet ose Dhimbjet Aktuale Dentare",
        dentalConcernsPlaceholder: "Përshkruani çdo dhimbje, ndjeshmëri ose shqetësim",
        dentalIssuesQuestion: "A keni përjetuar ndonjë nga sa vijon?",
        bleedingGums: "Mishrat e Gjakosur",
        toothPain: "Dhimbje Dhëmbi",
        jawPain: "Dhimbje Nofulle",
        sensitivity: "Ndjeshmëri",
        badBreath: "Erë e Keqe",
        looseTeeth: "Dhëmbë të Lirshëm",
        dentalAnxietyQuestion: "A keni ankth për procedurat dentare?",
        noAnxiety: "Pa ankth",
        mild: "E lehtë",
        moderate: "Mesatare",
        severe: "E rëndë",
        emergencyContact: "Kontakti i Emergjencës",
        emergencyName: "Emri i Kontaktit *",
        emergencyRelation: "Marrëdhënia *",
        emergencyPhone: "Telefoni i Emergjencës *",
        consentSignature: "Pëlqimi dhe Nënshkrimi",
        consentText1: "Unë certifikoj se informacioni i mësipërm është i plotë dhe i saktë sipas njohurive të mia. Unë kuptoj se ky informacion do të përdoret për të ofruar kujdes të përshtatshëm dentar dhe se unë jam përgjegjës për të njoftuar zyrën dentare të çdo ndryshimi në statusin tim mjekësor.",
        consentText2: "Unë autorizoj stafin dentar të kryejë procedura të nevojshme dentare dhe kuptoj se do të informohem për planet e trajtimit para çdo procedure të madhe.",
        patientSignature: "Nënshkrimi i Pacientit *",
        digitalSignature: "Nënshkrim Digjital",
        printSignature: "Printoni për Nënshkrim Manual",
        clearSignature: "Pastro Nënshkrimin",
        printForm: "🖨️ Printoni Formularin",
        date: "Data *",
        submitForm: "Dërgo Informacionin e Pacientit",
        resetForm: "Rivendos Formularin",
        successTitle: "✓ Formulari u Dërgua me Sukses!",
        successMessage: "Informacioni i pacientit është ruajtur.",
        viewPatients: "Shiko të Gjithë Pacientët",
        addNewPatient: "Shto Pacient të Ri",
        patientRecords: "Rekordet e Pacientëve",
        backToForm: "← Kthehu në Formular",
        downloadRecords: "Shkarko të Gjitha Rekordet (JSON)",
        signatureRequired: "Ju lutemi jepni nënshkrimin tuaj para se të dërgoni.",
        resetConfirm: "A jeni të sigurt që dëshironi të rivendosni formularin? Të gjitha të dhënat do të humbasin.",
        deleteConfirm: "A jeni të sigurt që dëshironi të fshini këtë rekord të pacientit? Ky veprim nuk mund të zhbëhet.",
        noRecords: "Nuk u gjetën rekorde pacientësh.",
        deleteRecord: "Fshi Rekordin"
    }
};

let currentLang = 'en';

// Language switching
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentLang = btn.dataset.lang;
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        updateLanguage();
    });
});

function updateLanguage() {
    const t = translations[currentLang];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.placeholder = t[key];
        }
    });
    
    // Update select options
    document.querySelectorAll('option[data-i18n]').forEach(option => {
        const key = option.getAttribute('data-i18n');
        if (t[key]) {
            option.textContent = t[key];
        }
    });

    // Update print signature line if in print mode
    if (isPrintMode) {
        drawPrintSignatureLine();
    }
}

// Signature Canvas Setup
const canvas = document.getElementById('signatureCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let hasSignature = false;
let isPrintMode = false;

// Set canvas size properly for high DPI displays
function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';
}

function drawPrintSignatureLine() {
    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw header text
    ctx.font = 'bold 14px Inter, Arial, sans-serif';
    ctx.fillStyle = '#999';
    ctx.textAlign = 'left';
    ctx.fillText(translations[currentLang].patientSignature, 30, 40);
    
    // Draw signature line
    ctx.strokeStyle = '#667eea';
    ctx.lineWidth = 2;
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(30, rect.height - 60);
    ctx.lineTo(rect.width - 30, rect.height - 60);
    ctx.stroke();
    
    // Draw date line
    ctx.font = '12px Inter, Arial, sans-serif';
    ctx.fillStyle = '#666';
    ctx.textAlign = 'right';
    const dateText = translations[currentLang].date.replace(' *', '');
    ctx.fillText(dateText + ': _______________', rect.width - 30, rect.height - 30);
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function getMousePos(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    if (e.touches) {
        return {
            x: (e.touches[0].clientX - rect.left) * scaleX / window.devicePixelRatio,
            y: (e.touches[0].clientY - rect.top) * scaleY / window.devicePixelRatio
        };
    }
    return {
        x: (e.clientX - rect.left) * scaleX / window.devicePixelRatio,
        y: (e.clientY - rect.top) * scaleY / window.devicePixelRatio
    };
}

function startDrawing(e) {
    if (isPrintMode) return;
    isDrawing = true;
    hasSignature = true;
    const pos = getMousePos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    e.preventDefault();
}

function draw(e) {
    if (!isDrawing || isPrintMode) return;
    const pos = getMousePos(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    e.preventDefault();
}

function stopDrawing() {
    isDrawing = false;
}

// Mouse events
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// Touch events for mobile
canvas.addEventListener('touchstart', startDrawing);
canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchend', stopDrawing);

// Clear signature
document.getElementById('clearSignature').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hasSignature = false;
});

// Signature mode switching
document.getElementById('digitalSignatureBtn').addEventListener('click', () => {
    isPrintMode = false;
    hasSignature = false;
    canvas.classList.remove('print-mode');
    document.getElementById('digitalSignatureBtn').classList.add('active');
    document.getElementById('printSignatureBtn').classList.remove('active');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

document.getElementById('printSignatureBtn').addEventListener('click', () => {
    isPrintMode = true;
    hasSignature = true; // Allow form submission
    canvas.classList.add('print-mode');
    document.getElementById('printSignatureBtn').classList.add('active');
    document.getElementById('digitalSignatureBtn').classList.remove('active');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw elegant placeholder for print mode
    drawPrintSignatureLine();
});

function drawPrintSignatureLine() {
    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw header text
    ctx.font = 'bold 14px Inter, Arial, sans-serif';
    ctx.fillStyle = '#999';
    ctx.textAlign = 'left';
    ctx.fillText(translations[currentLang].patientSignature, 30, 40);
    
    // Draw signature line
    ctx.strokeStyle = '#667eea';
    ctx.lineWidth = 2;
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(30, rect.height - 60);
    ctx.lineTo(rect.width - 30, rect.height - 60);
    ctx.stroke();
    
    // Draw date line
    ctx.font = '12px Inter, Arial, sans-serif';
    ctx.fillStyle = '#666';
    ctx.textAlign = 'right';
    const dateText = translations[currentLang].date.replace(' *', '');
    ctx.fillText(dateText + ': _______________', rect.width - 30, rect.height - 30);
}

// Print form button
document.getElementById('printForm').addEventListener('click', () => {
    window.print();
});

// Set today's date as default for signature date
document.getElementById('signatureDate').valueAsDate = new Date();

// Form submission
document.getElementById('patientForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (!hasSignature) {
        alert(translations[currentLang].signatureRequired);
        return;
    }
    
    // Collect form data
    const formData = new FormData(e.target);
    const patientData = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        language: currentLang,
        personalInfo: {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            dateOfBirth: formData.get('dateOfBirth'),
            gender: formData.get('gender'),
            fatherFirstName: formData.get('fatherFirstName'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            address: formData.get('address')
        },
        medicalHistory: {
            allergies: formData.get('allergies'),
            medications: formData.get('medications'),
            conditions: formData.getAll('conditions'),
            otherConditions: formData.get('otherConditions'),
            pregnant: formData.get('pregnant'),
            tobacco: formData.get('tobacco')
        },
        dentalHistory: {
            lastDentalVisit: formData.get('lastDentalVisit'),
            dentalConcerns: formData.get('dentalConcerns'),
            dentalIssues: formData.getAll('dentalIssues'),
            dentalAnxiety: formData.get('dentalAnxiety')
        },
        emergencyContact: {
            name: formData.get('emergencyName'),
            relation: formData.get('emergencyRelation'),
            phone: formData.get('emergencyPhone')
        },
        consent: {
            signatureDate: formData.get('signatureDate'),
            signature: isPrintMode ? 'PRINT_MODE_SIGNATURE' : canvas.toDataURL(),
            isPrintMode: isPrintMode
        }
    };
    
    // Save to localStorage
    savePatientData(patientData);
    
    // Show success message
    document.getElementById('patientForm').style.display = 'none';
    document.getElementById('successMessage').classList.remove('hidden');
});

// Save patient data to localStorage
function savePatientData(data) {
    let patients = JSON.parse(localStorage.getItem('dentalPatients') || '[]');
    patients.push(data);
    localStorage.setItem('dentalPatients', JSON.stringify(patients));
}

// View all patients
document.getElementById('viewPatients').addEventListener('click', () => {
    document.getElementById('successMessage').classList.add('hidden');
    showPatientsView();
});

// New patient button
document.getElementById('newPatient').addEventListener('click', () => {
    document.getElementById('successMessage').classList.add('hidden');
    document.getElementById('patientForm').style.display = 'block';
    document.getElementById('patientForm').reset();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hasSignature = false;
    isPrintMode = false;
    canvas.classList.remove('print-mode');
    document.getElementById('digitalSignatureBtn').classList.add('active');
    document.getElementById('printSignatureBtn').classList.remove('active');
    document.getElementById('signatureDate').valueAsDate = new Date();
});

// Reset form
document.getElementById('resetForm').addEventListener('click', () => {
    if (confirm(translations[currentLang].resetConfirm)) {
        document.getElementById('patientForm').reset();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        hasSignature = false;
        isPrintMode = false;
        canvas.classList.remove('print-mode');
        document.getElementById('digitalSignatureBtn').classList.add('active');
        document.getElementById('printSignatureBtn').classList.remove('active');
        document.getElementById('signatureDate').valueAsDate = new Date();
    }
});

// Show patients view
function showPatientsView() {
    document.getElementById('patientsView').classList.remove('hidden');
    displayPatients();
}

// Back to form button
document.getElementById('backToForm').addEventListener('click', () => {
    document.getElementById('patientsView').classList.add('hidden');
    document.getElementById('patientForm').style.display = 'block';
    document.getElementById('patientForm').reset();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hasSignature = false;
    isPrintMode = false;
    canvas.classList.remove('print-mode');
    document.getElementById('digitalSignatureBtn').classList.add('active');
    document.getElementById('printSignatureBtn').classList.remove('active');
    document.getElementById('signatureDate').valueAsDate = new Date();
});

// Display all patients
function displayPatients() {
    const patients = JSON.parse(localStorage.getItem('dentalPatients') || '[]');
    const container = document.getElementById('patientsList');
    const t = translations[currentLang];
    
    if (patients.length === 0) {
        container.innerHTML = `<p style="text-align: center; color: #999; padding: 40px;">${t.noRecords}</p>`;
        return;
    }
    
    container.innerHTML = patients.map((patient, index) => `
        <div class="patient-card">
            <h3>Patient #${patients.length - index}: ${patient.personalInfo.firstName} ${patient.personalInfo.lastName}</h3>
            <div class="patient-info">
                <p><strong>${t.dateOfBirth}:</strong> ${patient.personalInfo.dateOfBirth}</p>
                <p><strong>${t.phone}:</strong> ${patient.personalInfo.phone}</p>
                <p><strong>${t.email}:</strong> ${patient.personalInfo.email || 'N/A'}</p>
                <p><strong>${t.fatherFirstName}:</strong> ${patient.personalInfo.fatherFirstName || 'N/A'}</p>
                <p><strong>${t.gender}:</strong> ${patient.personalInfo.gender || 'N/A'}</p>
                <p><strong>${t.address}:</strong> ${patient.personalInfo.address || 'N/A'}</p>
            </div>
            
            <h4 style="margin-top: 20px; color: #667eea;">${t.medicalHistory}</h4>
            <div class="patient-info">
                <p><strong>${t.allergies}:</strong> ${patient.medicalHistory.allergies}</p>
                <p><strong>${t.medications}:</strong> ${patient.medicalHistory.medications || 'None'}</p>
                <p><strong>${t.conditionsQuestion}:</strong> ${patient.medicalHistory.conditions.length > 0 ? patient.medicalHistory.conditions.join(', ') : 'None'}</p>
                <p><strong>${t.otherConditions}:</strong> ${patient.medicalHistory.otherConditions || 'None'}</p>
                <p><strong>${t.pregnantQuestion}:</strong> ${patient.medicalHistory.pregnant || 'N/A'}</p>
                <p><strong>${t.tobaccoQuestion}:</strong> ${patient.medicalHistory.tobacco || 'N/A'}</p>
            </div>
            
            <h4 style="margin-top: 20px; color: #667eea;">${t.dentalHistory}</h4>
            <div class="patient-info">
                <p><strong>${t.lastDentalVisit}:</strong> ${patient.dentalHistory.lastDentalVisit || 'N/A'}</p>
                <p><strong>${t.dentalConcerns}:</strong> ${patient.dentalHistory.dentalConcerns || 'None'}</p>
                <p><strong>${t.dentalIssuesQuestion}:</strong> ${patient.dentalHistory.dentalIssues.length > 0 ? patient.dentalHistory.dentalIssues.join(', ') : 'None'}</p>
                <p><strong>${t.dentalAnxietyQuestion}:</strong> ${patient.dentalHistory.dentalAnxiety || 'N/A'}</p>
            </div>
            
            <h4 style="margin-top: 20px; color: #667eea;">${t.emergencyContact}</h4>
            <div class="patient-info">
                <p><strong>${t.emergencyName}:</strong> ${patient.emergencyContact.name}</p>
                <p><strong>${t.emergencyRelation}:</strong> ${patient.emergencyContact.relation}</p>
                <p><strong>${t.emergencyPhone}:</strong> ${patient.emergencyContact.phone}</p>
            </div>
            
            <h4 style="margin-top: 20px; color: #667eea;">${t.patientSignature}</h4>
            <p><strong>${t.date}:</strong> ${patient.consent.signatureDate}</p>
            ${patient.consent.isPrintMode ? 
                '<p style="color: #999; font-style: italic;">Print mode - Manual signature required</p>' :
                `<div class="signature-display"><img src="${patient.consent.signature}" alt="Patient Signature"></div>`
            }
            
            <p style="margin-top: 15px; color: #999; font-size: 0.9em;">
                <strong>Submitted:</strong> ${new Date(patient.timestamp).toLocaleString()}
            </p>
            
            <div class="patient-actions">
                <button class="btn-delete" onclick="deletePatient(${patient.id})">${t.deleteRecord}</button>
            </div>
        </div>
    `).reverse().join('');
}

// Delete patient
function deletePatient(id) {
    const t = translations[currentLang];
    if (confirm(t.deleteConfirm)) {
        let patients = JSON.parse(localStorage.getItem('dentalPatients') || '[]');
        patients = patients.filter(p => p.id !== id);
        localStorage.setItem('dentalPatients', JSON.stringify(patients));
        displayPatients();
    }
}

// Download all data
document.getElementById('downloadData').addEventListener('click', () => {
    const patients = JSON.parse(localStorage.getItem('dentalPatients') || '[]');
    const t = translations[currentLang];
    
    if (patients.length === 0) {
        alert(t.noRecords);
        return;
    }
    
    const dataStr = JSON.stringify(patients, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dental-patients-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

// Initialize language on page load
updateLanguage();

// Handle pregnancy question visibility based on gender
const genderSelect = document.getElementById('gender');
const pregnancyQuestion = document.getElementById('pregnancyQuestion');

genderSelect.addEventListener('change', function() {
    if (this.value === 'female') {
        pregnancyQuestion.style.display = 'block';
    } else {
        pregnancyQuestion.style.display = 'none';
        // Clear pregnancy selection when hidden
        document.querySelectorAll('input[name="pregnant"]').forEach(input => {
            input.checked = false;
        });
    }
});
