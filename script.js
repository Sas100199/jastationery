const loadingTexts = [
    "✏️ Sharpening pencils...",
    "🖊️ Filling ink in pens...",
    "📚 Organizing notebooks...",
    "📒 Stacking up registers...",
    "🖍️ Refilling markers...",
    "📄 Laminating ideas...",
    "📎 Stapling thoughts together...",
    "📘 Binding creativity...",
    "📖 Flipping through fresh pages...",
    "🖨️ Printing possibilities...",
    "📏 Measuring success in centimeters...",
    "🎨 Coloring your imagination...",
    "📦 Unpacking new supplies...",
    "📝 Drawing dreams on paper...",
    "🖍️ Highlighting your needs...",
    "🗂️ Filing your orders...",
    "🧽 Erasing the wait...",
    "🕳️ Punching through progress...",
    "📠 Scanning your satisfaction...",
    "🖋️ Writing the future with JA Stationery..."
];
const loader = document.querySelector('.loader');
const ltext = document.querySelector('#loadingtext');
const menu = document.querySelector('#menu')
const errmess = document.querySelector('.errormess')
const xmark = document.querySelector('#xmark')
const menunav = document.querySelector('.mobnav');
const tl = gsap.timeline()
document.addEventListener("DOMContentLoaded", () => {
    ltext.innerHTML = loadingTexts[Math.floor(Math.random() * loadingTexts.length)];


    // Optional: Change the loading text every 3 seconds
    setInterval(() => {
        loader.style.opacity = 0.1
        loader.style.transition = "all 0.5s ease"
        setInterval(() => {
            loader.style.display = "none"
        }, 100)
    }, 1000);
    // loading();x`

    menu.addEventListener("click", () => {
        menunav.style.display = "flex",
            gsap.from(menunav, {
                x: 100,
                duration: 0.2,
                opacity: 0,
            })
        gsap.from(".mobnav ul li", {
            y: -10,
            delay: 0.2,
            opacity: 0,
            stagger: 0.1,
        })
        gsap.from(".mobnav .ctn", {
            y: -10,
            delay: 0.2,
            opacity: 0,
            stagger: 0.1,
        })
    })
    xmark.addEventListener("click", () => {
        menunav.style.display = "none"
    })


    // Gsap Starting
    setTimeout(() => {
        tl.from(".c1rcontent h1", {
            opacity: 0,
            y: 100,
            ease: "power2.out",
            duration: 1,
        })
        tl.from(".c1rcontent h3", {
            opacity: 0,
            ease: "power2.out",
            y: 100,
            duration: 0.8,
        })
        tl.from(".ordernow button", {
            opacity: 0,
            y: 100,
            stagger: 0.2,

        })
    }, 1000)
    gsap.from(".cont2 h1", {
        opacity: 0,
        y: 100,
        duration: 0.8,


    })
    gsap.from(".cont2 p", {
        opacity: 0,
        y: 100,
        duration: 0.8,

    })

    gsap.from(".cont3 img", {
        opacity: 0,
        y: 100,
        duration: 0.8,

    })
    gsap.from(".abthero h1", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.out"
    });

    gsap.utils.toArray(".abtcont1 section").forEach((section, i) => {
        gsap.from(section, {
            y: 60,
            duration: 0.8,
            //   delay: i * 0.1,
            ease: "power2.out"
        });
    });
    gsap.utils.toArray(".sc1c").forEach((card, i) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 0.6,
            delay: 0, // slight stagger effect
            ease: "power2.out",
        });
    });
    // Gsap Ending 
    // Medicines Items

    const medicines = [
        { "id": 1, "category": "Anti-infective medicines", "name": "Ivermectin (Tablet)" },
        { "id": 2, "category": "Anti-infective medicines", "name": "Mupirocin (Ointment)" },
        { "id": 3, "category": "Anti-infective medicines", "name": "Amoxicillin (Capsule)" },
        { "id": 4, "category": "Anti-infective medicines", "name": "Azithromycin (Tablet)" },
        { "id": 5, "category": "Anti-infective medicines", "name": "Ceftriaxone (Injection)" },
        { "id": 6, "category": "Anti-infective medicines", "name": "Metronidazole (Tablet)" },
        { "id": 7, "category": "Anti-infective medicines", "name": "Albendazole (Tablet)" },
        { "id": 8, "category": "Anti-infective medicines", "name": "Doxycycline (Capsule)" },
        { "id": 9, "category": "Anti-infective medicines", "name": "Fluconazole (Tablet)" },
        { "id": 10, "category": "Anti-infective medicines", "name": "Ciprofloxacin (Tablet)" },
        { "id": 11, "category": "Endocrine medicines", "name": "Insulin Glargine (Injection)" },
        { "id": 12, "category": "Endocrine medicines", "name": "Teneligliptin (Tablet)" },
        { "id": 13, "category": "Endocrine medicines", "name": "Metformin (Tablet)" },
        { "id": 14, "category": "Endocrine medicines", "name": "Glibenclamide (Tablet)" },
        { "id": 15, "category": "Endocrine medicines", "name": "Levothyroxine (Tablet)" },
        { "id": 16, "category": "Cardiovascular medicines", "name": "Dabigatran (Capsule)" },
        { "id": 17, "category": "Cardiovascular medicines", "name": "Tenecteplase (Injection)" },
        { "id": 18, "category": "Cardiovascular medicines", "name": "Amlodipine (Tablet)" },
        { "id": 19, "category": "Cardiovascular medicines", "name": "Atenolol (Tablet)" },
        { "id": 20, "category": "Cardiovascular medicines", "name": "Enalapril (Tablet)" },
        { "id": 21, "category": "Respiratory medicines", "name": "Montelukast (Tablet)" },
        { "id": 22, "category": "Respiratory medicines", "name": "Salbutamol (Inhaler)" },
        { "id": 23, "category": "Respiratory medicines", "name": "Budesonide (Inhaler)" },
        { "id": 24, "category": "Ophthalmological preparations", "name": "Latanoprost (Eye Drops)" },
        { "id": 25, "category": "Rehydration solutions", "name": "Oral Rehydration Salts (ORS) (Powder)" },
        { "id": 26, "category": "Analgesics and antipyretics", "name": "Paracetamol (Tablet)" },
        { "id": 27, "category": "Analgesics and antipyretics", "name": "Paracetamol (Syrup)" },
        { "id": 28, "category": "Analgesics and antipyretics", "name": "Ibuprofen (Tablet)" },
        { "id": 29, "category": "Anaesthetics", "name": "Propofol (Injection)" },
        { "id": 30, "category": "Anaesthetics", "name": "Lidocaine (Injection)" },
        { "id": 31, "category": "Anti-infective medicines", "name": "Levofloxacin (Tablet)" },
        { "id": 32, "category": "Anti-infective medicines", "name": "Clindamycin (Capsule)" },
        { "id": 33, "category": "Anti-infective medicines", "name": "Acyclovir (Tablet)" },
        { "id": 34, "category": "Anti-infective medicines", "name": "Amphotericin B (Injection)" },
        { "id": 35, "category": "Anti-infective medicines", "name": "Chloroquine (Tablet)" },
        { "id": 36, "category": "Anti-infective medicines", "name": "Artesunate (Injection)" },
        { "id": 37, "category": "Anti-infective medicines", "name": "Isoniazid (Tablet)" },
        { "id": 38, "category": "Anti-infective medicines", "name": "Rifampicin (Capsule)" },
        { "id": 39, "category": "Anti-infective medicines", "name": "Ethambutol (Tablet)" },
        { "id": 40, "category": "Anti-infective medicines", "name": "Pyrazinamide (Tablet)" },
        { "id": 41, "category": "Endocrine medicines", "name": "Glimepiride (Tablet)" },
        { "id": 42, "category": "Endocrine medicines", "name": "Insulin Regular (Injection)" },
        { "id": 43, "category": "Endocrine medicines", "name": "Hydrocortisone (Tablet)" },
        { "id": 44, "category": "Endocrine medicines", "name": "Prednisolone (Tablet)" },
        { "id": 45, "category": "Cardiovascular medicines", "name": "Losartan (Tablet)" },
        { "id": 46, "category": "Cardiovascular medicines", "name": "Clopidogrel (Tablet)" },
        { "id": 47, "category": "Cardiovascular medicines", "name": "Aspirin (Tablet)" },
        { "id": 48, "category": "Cardiovascular medicines", "name": "Heparin (Injection)" },
        { "id": 49, "category": "Cardiovascular medicines", "name": "Warfarin (Tablet)" },
        { "id": 50, "category": "Respiratory medicines", "name": "Ipratropium (Inhaler)" },
        { "id": 51, "category": "Gastrointestinal medicines", "name": "Omeprazole (Capsule)" },
        { "id": 52, "category": "Gastrointestinal medicines", "name": "Pantoprazole (Tablet)" },
        { "id": 53, "category": "Gastrointestinal medicines", "name": "Metoclopramide (Tablet)" },
        { "id": 54, "category": "Gastrointestinal medicines", "name": "Ondansetron (Injection)" },
        { "id": 55, "category": "Gastrointestinal medicines", "name": "Loperamide (Tablet)" },
        { "id": 56, "category": "Anticonvulsants", "name": "Carbamazepine (Tablet)" },
        { "id": 57, "category": "Anticonvulsants", "name": "Phenytoin (Capsule)" },
        { "id": 58, "category": "Anticonvulsants", "name": "Valproic Acid (Tablet)" },
        { "id": 59, "category": "Anticonvulsants", "name": "Levetiracetam (Tablet)" },
        { "id": 60, "category": "Psychiatric medicines", "name": "Fluoxetine (Capsule)" },
        { "id": 61, "category": "Psychiatric medicines", "name": "Sertraline (Tablet)" },
        { "id": 62, "category": "Psychiatric medicines", "name": "Amitriptyline (Tablet)" },
        { "id": 63, "category": "Psychiatric medicines", "name": "Diazepam (Tablet)" },
        { "id": 64, "category": "Psychiatric medicines", "name": "Haloperidol (Injection)" },
        { "id": 65, "category": "Medicines used in substance dependence", "name": "Nicotine Replacement Therapy (Gum)" },
        { "id": 66, "category": "Ophthalmological preparations", "name": "Timolol (Eye Drops)" },
        { "id": 67, "category": "Ophthalmological preparations", "name": "Atropine (Eye Drops)" },
        { "id": 68, "category": "Dermatological medicines", "name": "Clotrimazole (Cream)" },
        { "id": 69, "category": "Dermatological medicines", "name": "Betamethasone (Cream)" },
        { "id": 70, "category": "Dermatological medicines", "name": "Hydrocortisone (Cream)" },
        { "id": 71, "category": "Anti-infective medicines", "name": "Cefixime (Tablet)" },
        { "id": 72, "category": "Anti-infective medicines", "name": "Erythromycin (Tablet)" },
        { "id": 73, "category": "Anti-infective medicines", "name": "Gentamicin (Injection)" },
        { "id": 74, "category": "Anti-infective medicines", "name": "Vancomycin (Injection)" },
        { "id": 75, "category": "Anti-infective medicines", "name": "Oseltamivir (Capsule)" },
        { "id": 76, "category": "Endocrine medicines", "name": "Sitagliptin (Tablet)" },
        { "id": 77, "category": "Endocrine medicines", "name": "Thyroxine (Tablet)" },
        { "id": 78, "category": "Cardiovascular medicines", "name": "Bisoprolol (Tablet)" },
        { "id": 79, "category": "Cardiovascular medicines", "name": "Ramipril (Tablet)" },
        { "id": 80, "category": "Cardiovascular medicines", "name": "Atorvastatin (Tablet)" },
        { "id": 81, "category": "Respiratory medicines", "name": "Theophylline (Tablet)" },
        { "id": 82, "category": "Gastrointestinal medicines", "name": "Domperidone (Tablet)" },
        { "id": 83, "category": "Gastrointestinal medicines", "name": "Lactulose (Syrup)" },
        { "id": 84, "category": "Anticonvulsants", "name": "Phenobarbitone (Tablet)" },
        { "id": 85, "category": "Psychiatric medicines", "name": "Olanzapine (Tablet)" },
        { "id": 86, "category": "Anti-infective medicines", "name": "Linezolid (Tablet)" },
        { "id": 87, "category": "Anti-infective medicines", "name": "Meropenem (Injection)" },
        { "id": 88, "category": "Anti-infective medicines", "name": "Piperacillin+Tazobactam (Injection)" },
        { "id": 89, "category": "Endocrine medicines", "name": "Dexamethasone (Injection)" },
        { "id": 90, "category": "Cardiovascular medicines", "name": "Metoprolol (Tablet)" },
        { "id": 91, "category": "Anaesthetics", "name": "Ketamine (Injection)" },
        { "id": 92, "category": "Analgesics and antipyretics", "name": "Diclofenac (Tablet)" },
        { "id": 93, "category": "Analgesics and antipyretics", "name": "Tramadol (Injection)" },
        { "id": 94, "category": "Dermatological medicines", "name": "Miconazole (Cream)" },
        { "id": 95, "category": "Ophthalmological preparations", "name": "Ciprofloxacin (Eye Drops)" },
        { "id": 96, "category": "Anti-infective medicines", "name": "Tinidazole (Tablet)" },
        { "id": 97, "category": "Anti-infective medicines", "name": "Sulfamethoxazole+Trimethoprim (Tablet)" },
        { "id": 98, "category": "Anti-infective medicines", "name": "Nitrofurantoin (Tablet)" },
        { "id": 99, "category": "Endocrine medicines", "name": "Pioglitazone (Tablet)" },
        { "id": 100, "category": "Cardiovascular medicines", "name": "Furosemide (Tablet)" },
        { "id": 101, "category": "Anti-infective medicines", "name": "Cefuroxime (Tablet)" },
        { "id": 102, "category": "Anti-infective medicines", "name": "Clotrimazole (Pessary)" },
        { "id": 103, "category": "Anti-infective medicines", "name": "Valganciclovir (Tablet)" },
        { "id": 104, "category": "Endocrine medicines", "name": "Voglibose (Tablet)" },
        { "id": 105, "category": "Cardiovascular medicines", "name": "Hydrochlorothiazide (Tablet)" },
        { "id": 106, "category": "Respiratory medicines", "name": "Levosalbutamol (Inhaler)" },
        { "id": 107, "category": "Gastrointestinal medicines", "name": "Esomeprazole (Capsule)" },
        { "id": 108, "category": "Anticonvulsants", "name": "Lamotrigine (Tablet)" },
        { "id": 109, "category": "Psychiatric medicines", "name": "Escitalopram (Tablet)" },
        { "id": 110, "category": "Dermatological medicines", "name": "Silver Sulfadiazine (Cream)" },
        { "id": 111, "category": "Anti-infective medicines", "name": "Amikacin (Injection)" },
        { "id": 112, "category": "Anti-infective medicines", "name": "Clarithromycin (Tablet)" },
        { "id": 113, "category": "Anti-infective medicines", "name": "Primaquine (Tablet)" },
        { "id": 114, "category": "Endocrine medicines", "name": "Fludrocortisone (Tablet)" },
        { "id": 115, "category": "Cardiovascular medicines", "name": "Spironolactone (Tablet)" },
        { "id": 116, "category": "Respiratory medicines", "name": "Formoterol (Inhaler)" },
        { "id": 117, "category": "Gastrointestinal medicines", "name": "Ranitidine (Tablet)" },
        { "id": 118, "category": "Anticonvulsants", "name": "Gabapentin (Capsule)" },
        { "id": 119, "category": "Psychiatric medicines", "name": "Risperidone (Tablet)" },
        { "id": 120, "category": "Ophthalmological preparations", "name": "Fluorometholone (Eye Drops)" },
        { "id": 121, "category": "Anti-infective medicines", "name": "Cefpodoxime (Tablet)" },
        { "id": 122, "category": "Anti-infective medicines", "name": "Mefloquine (Tablet)" },
        { "id": 123, "category": "Anti-infective medicines", "name": "Streptomycin (Injection)" },
        { "id": 124, "category": "Endocrine medicines", "name": "Methylprednisolone (Tablet)" },
        { "id": 125, "category": "Cardiovascular medicines", "name": "Digoxin (Tablet)" },
        { "id": 126, "category": "Respiratory medicines", "name": "Aminophylline (Tablet)" },
        { "id": 127, "category": "Gastrointestinal medicines", "name": "Dicyclomine (Tablet)" },
        { "id": 128, "category": "Anticonvulsants", "name": "Topiramate (Tablet)" },
        { "id": 129, "category": "Psychiatric medicines", "name": "Lorazepam (Tablet)" },
        { "id": 130, "category": "Dermatological medicines", "name": "Permethrin (Cream)" },
        { "id": 131, "category": "Anti-infective medicines", "name": "Cefazolin (Injection)" },
        { "id": 132, "category": "Anti-infective medicines", "name": "Nystatin (Tablet)" },
        { "id": 133, "category": "Anti-infective medicines", "name": "Zidovudine (Tablet)" },
        { "id": 134, "category": "Endocrine medicines", "name": "Budesonide (Capsule)" },
        { "id": 135, "category": "Cardiovascular medicines", "name": "Amiodarone (Tablet)" },
        { "id": 136, "category": "Respiratory medicines", "name": "Tiotropium (Inhaler)" },
        { "id": 137, "category": "Gastrointestinal medicines", "name": "Hyoscine (Injection)" },
        { "id": 138, "category": "Anticonvulsants", "name": "Oxcarbazepine (Tablet)" },
        { "id": 139, "category": "Psychiatric medicines", "name": "Quetiapine (Tablet)" },
        { "id": 140, "category": "Ophthalmological preparations", "name": "Pilocarpine (Eye Drops)" },
        { "id": 141, "category": "Anti-infective medicines", "name": "Efavirenz (Tablet)" },
        { "id": 142, "category": "Anti-infective medicines", "name": "Lamivudine (Tablet)" },
        { "id": 143, "category": "Anti-infective medicines", "name": "Nevirapine (Tablet)" },
        { "id": 144, "category": "Endocrine medicines", "name": "Betamethasone (Injection)" },
        { "id": 145, "category": "Cardiovascular medicines", "name": "Verapamil (Tablet)" },
        { "id": 146, "category": "Respiratory medicines", "name": "Beclomethasone (Inhaler)" },
        { "id": 147, "category": "Gastrointestinal medicines", "name": "Mesalazine (Tablet)" },
        { "id": 148, "category": "Anticonvulsants", "name": "Clonazepam (Tablet)" },
        { "id": 149, "category": "Psychiatric medicines", "name": "Mirtazapine (Tablet)" },
        { "id": 150, "category": "Dermatological medicines", "name": "Fusidic Acid (Cream)" },
        { "id": 151, "category": "Anti-infective medicines", "name": "Cloxacillin (Capsule)" },
        { "id": 152, "category": "Anti-infective medicines", "name": "Ritonavir (Tablet)" },
        { "id": 153, "category": "Anti-infective medicines", "name": "Lopinavir (Tablet)" },
        { "id": 154, "category": "Endocrine medicines", "name": "Desmopressin (Tablet)" },
        { "id": 155, "category": "Cardiovascular medicines", "name": "Isosorbide Dinitrate (Tablet)" },
        { "id": 156, "category": "Respiratory medicines", "name": "Salbutamol (Syrup)" },
        { "id": 157, "category": "Gastrointestinal medicines", "name": "Famotidine (Tablet)" },
        { "id": 158, "category": "Anticonvulsants", "name": "Pregabalin (Capsule)" },
        { "id": 159, "category": "Psychiatric medicines", "name": "Venlafaxine (Tablet)" },
        { "id": 160, "category": "Ophthalmological preparations", "name": "Tropicamide (Eye Drops)" },
        { "id": 161, "category": "Anti-infective medicines", "name": "Ganciclovir (Injection)" },
        { "id": 162, "category": "Anti-infective medicines", "name": "Pentamidine (Injection)" },
        { "id": 163, "category": "Anti-infective medicines", "name": "Diethylcarbamazine (Tablet)" },
        { "id": 164, "category": "Endocrine medicines", "name": "Tamoxifen (Tablet)" },
        { "id": 165, "category": "Cardiovascular medicines", "name": "Nifedipine (Capsule)" },
        { "id": 166, "category": "Respiratory medicines", "name": "Fluticasone (Inhaler)" },
        { "id": 167, "category": "Gastrointestinal medicines", "name": "Bismuth Subsalicylate (Tablet)" },
        { "id": 168, "category": "Anticonvulsants", "name": "Divalproex (Tablet)" },
        { "id": 169, "category": "Psychiatric medicines", "name": "Aripiprazole (Tablet)" },
        { "id": 170, "category": "Dermatological medicines", "name": "Terbinafine (Cream)" },
        { "id": 171, "category": "Anti-infective medicines", "name": "Ceftazidime (Injection)" },
        { "id": 172, "category": "Anti-infective medicines", "name": "Dapsone (Tablet)" },
        { "id": 173, "category": "Anti-infective medicines", "name": "Moxifloxacin (Tablet)" },
        { "id": 174, "category": "Endocrine medicines", "name": "Clomiphene (Tablet)" },
        { "id": 175, "category": "Cardiovascular medicines", "name": "Propranolol (Tablet)" },
        { "id": 176, "category": "Respiratory medicines", "name": "Cromolyn Sodium (Inhaler)" },
        { "id": 177, "category": "Gastrointestinal medicines", "name": "Sucralfate (Tablet)" },
        { "id": 178, "category": "Anticonvulsants", "name": "Zonisamide (Capsule)" },
        { "id": 179, "category": "Psychiatric medicines", "name": "Paroxetine (Tablet)" },
        { "id": 180, "category": "Ophthalmological preparations", "name": "Dorzolamide (Eye Drops)" },
        { "id": 181, "category": "Anti-infective medicines", "name": "Cefalexin (Capsule)" },
        { "id": 182, "category": "Anti-infective medicines", "name": "Atovaquone (Tablet)" },
        { "id": 183, "category": "Anti-infective medicines", "name": "Miltefosine (Capsule)" },
        { "id": 184, "category": "Endocrine medicines", "name": "Cabergoline (Tablet)" },
        { "id": 185, "category": "Cardiovascular medicines", "name": "Telmisartan (Tablet)" },
        { "id": 186, "category": "Respiratory medicines", "name": "Acetylcysteine (Solution)" },
        { "id": 187, "category": "Gastrointestinal medicines", "name": "Rifaximin (Tablet)" },
        { "id": 188, "category": "Anticonvulsants", "name": "Lacosamide (Tablet)" },
        { "id": 189, "category": "Psychiatric medicines", "name": "Citalopram (Tablet)" },
        { "id": 190, "category": "Dermatological medicines", "name": "Calamine (Lotion)" },
        { "id": 191, "category": "Anti-infective medicines", "name": "Imipenem+Cilastatin (Injection)" },
        { "id": 192, "category": "Anti-infective medicines", "name": "Flucloxacillin (Capsule)" },
        { "id": 193, "category": "Anti-infective medicines", "name": "Griseofulvin (Tablet)" },
        { "id": 194, "category": "Endocrine medicines", "name": "Letrozole (Tablet)" },
        { "id": 195, "category": "Cardiovascular medicines", "name": "Labetalol (Tablet)" },
        { "id": 196, "category": "Respiratory medicines", "name": "Mometasone (Inhaler)" },
        { "id": 197, "category": "Gastrointestinal medicines", "name": "Prochlorperazine (Tablet)" },
        { "id": 198, "category": "Anticonvulsants", "name": "Vigabatrin (Tablet)" },
        { "id": 199, "category": "Psychiatric medicines", "name": "Bupropion (Tablet)" },
        { "id": 200, "category": "Ophthalmological preparations", "name": "Brimonidine (Eye Drops)" },
        { "id": 201, "category": "Anti-infective medicines", "name": "Amoxicillin+Clavulanic Acid (Tablet)" },
        { "id": 202, "category": "Anti-infective medicines", "name": "Tetracycline (Capsule)" },
        { "id": 203, "category": "Anti-infective medicines", "name": "Ketoconazole (Tablet)" },
        { "id": 204, "category": "Endocrine medicines", "name": "Medroxyprogesterone (Tablet)" },
        { "id": 205, "category": "Cardiovascular medicines", "name": "Diltiazem (Tablet)" },
        { "id": 206, "category": "Respiratory medicines", "name": "Prednisolone (Syrup)" },
        { "id": 207, "category": "Gastrointestinal medicines", "name": "Orlistat (Capsule)" },
        { "id": 208, "category": "Anticonvulsants", "name": "Felbamate (Tablet)" },
        { "id": 209, "category": "Psychiatric medicines", "name": "Fluphenazine (Injection)" },
        { "id": 210, "category": "Dermatological medicines", "name": "Adapalene (Gel)" },
        { "id": 211, "category": "Anti-infective medicines", "name": "Benzathine Penicillin (Injection)" },
        { "id": 212, "category": "Anti-infective medicines", "name": "Procaine Penicillin (Injection)" },
        { "id": 213, "category": "Anti-infective medicines", "name": "Praziquantel (Tablet)" },
        { "id": 214, "category": "Endocrine medicines", "name": "Estradiol (Tablet)" },
        { "id": 215, "category": "Cardiovascular medicines", "name": "Methyldopa (Tablet)" },
        { "id": 216, "category": "Respiratory medicines", "name": "Terbutaline (Tablet)" },
        { "id": 217, "category": "Gastrointestinal medicines", "name": "Bisacodyl (Tablet)" },
        { "id": 218, "category": "Anticonvulsants", "name": "Tiagabine (Tablet)" },
        { "id": 219, "category": "Psychiatric medicines", "name": "Chlorpromazine (Tablet)" },
        { "id": 220, "category": "Ophthalmological preparations", "name": "Acyclovir (Eye Ointment)" },
        { "id": 221, "category": "Anti-infective medicines", "name": "Chloramphenicol (Capsule)" },
        { "id": 222, "category": "Anti-infective medicines", "name": "Norfloxacin (Tablet)" },
        { "id": 223, "category": "Anti-infective medicines", "name": "Isoniazid+Rifampicin (Tablet)" },
        { "id": 224, "category": "Endocrine medicines", "name": "Progesterone (Injection)" },
        { "id": 225, "category": "Cardiovascular medicines", "name": "Carvedilol (Tablet)" },
        { "id": 226, "category": "Respiratory medicines", "name": "Codeine (Syrup)" },
        { "id": 227, "category": "Gastrointestinal medicines", "name": "Sulfasalazine (Tablet)" },
        { "id": 228, "category": "Anticonvulsants", "name": "Ethosuximide (Capsule)" },
        { "id": 229, "category": "Psychiatric medicines", "name": "Trazodone (Tablet)" },
        { "id": 230, "category": "Dermatological medicines", "name": "Tretinoin (Cream)" },
        { "id": 231, "category": "Anti-infective medicines", "name": "Cefoperazone (Injection)" },
        { "id": 232, "category": "Anti-infective medicines", "name": "Doxycycline (Injection)" },
        { "id": 233, "category": "Anti-infective medicines", "name": "Aztreonam (Injection)" },
        { "id": 234, "category": "Endocrine medicines", "name": "Norethisterone (Tablet)" },
        { "id": 235, "category": "Cardiovascular medicines", "name": "Rosuvastatin (Tablet)" },
        { "id": 236, "category": "Respiratory medicines", "name": "Levocetirizine (Tablet)" },
        { "id": 237, "category": "Gastrointestinal medicines", "name": "Cimetidine (Tablet)" },
        { "id": 238, "category": "Anticonvulsants", "name": "Primidone (Tablet)" },
        { "id": 239, "category": "Psychiatric medicines", "name": "Lithium Carbonate (Tablet)" },
        { "id": 240, "category": "Ophthalmological preparations", "name": "Gentamicin (Eye Drops)" },
        { "id": 241, "category": "Anti-infective medicines", "name": "Amphotericin B (Liposomal Injection)" },
        { "id": 242, "category": "Anti-infective medicines", "name": "Tenofovir (Tablet)" },
        { "id": 243, "category": "Anti-infective medicines", "name": "Emtricitabine (Tablet)" },
        { "id": 244, "category": "Endocrine medicines", "name": "Anastrozole (Tablet)" },
        { "id": 245, "category": "Cardiovascular medicines", "name": "Nicorandil (Tablet)" },
        { "id": 246, "category": "Respiratory medicines", "name": "Dexamethasone (Inhaler)" },
        { "id": 247, "category": "Gastrointestinal medicines", "name": "Ranitidine (Syrup)" },
        { "id": 248, "category": "Anticonvulsants", "name": "Perampanel (Tablet)" },
        { "id": 249, "category": "Psychiatric medicines", "name": "Duloxetine (Capsule)" },
        { "id": 250, "category": "Dermatological medicines", "name": "Clobetasol (Cream)" },
        { "id": 251, "category": "Anti-infective medicines", "name": "Cefepime (Injection)" },
        { "id": 252, "category": "Anti-infective medicines", "name": "Fosfomycin (Powder)" },
        { "id": 253, "category": "Anti-infective medicines", "name": "Ivermectin (Cream)" },
        { "id": 254, "category": "Endocrine medicines", "name": "Bromocriptine (Tablet)" },
        { "id": 255, "category": "Cardiovascular medicines", "name": "Prazosin (Tablet)" },
        { "id": 256, "category": "Respiratory medicines", "name": "Fexofenadine (Tablet)" },
        { "id": 257, "category": "Gastrointestinal medicines", "name": "Mebeverine (Tablet)" },
        { "id": 258, "category": "Anticonvulsants", "name": "Brivaracetam (Tablet)" },
        { "id": 259, "category": "Psychiatric medicines", "name": "Clonidine (Tablet)" },
        { "id": 260, "category": "Ophthalmological preparations", "name": "Olopatadine (Eye Drops)" },
        { "id": 261, "category": "Anti-infective medicines", "name": "Colistin (Injection)" },
        { "id": 262, "category": "Anti-infective medicines", "name": "Voriconazole (Tablet)" },
        { "id": 263, "category": "Anti-infective medicines", "name": "Abacavir (Tablet)" },
        { "id": 264, "category": "Endocrine medicines", "name": "Exenatide (Injection)" },
        { "id": 265, "category": "Cardiovascular medicines", "name": "Olmesartan (Tablet)" },
        { "id": 266, "category": "Respiratory medicines", "name": "Chlorpheniramine (Tablet)" },
        { "id": 267, "category": "Gastrointestinal medicines", "name": "Ursodeoxycholic Acid (Tablet)" },
        { "id": 268, "category": "Anticonvulsants", "name": "Eslicarbazepine (Tablet)" },
        { "id": 269, "category": "Psychiatric medicines", "name": "Buspirone (Tablet)" },
        { "id": 270, "category": "Dermatological medicines", "name": "Povidone Iodine (Ointment)" },
        { "id": 271, "category": "Anti-infective medicines", "name": "Caspofungin (Injection)" },
        { "id": 272, "category": "Anti-infective medicines", "name": "Darunavir (Tablet)" },
        { "id": 273, "category": "Anti-infective medicines", "name": "Raltegravir (Tablet)" },
        { "id": 274, "category": "Endocrine medicines", "name": "Liraglutide (Injection)" },
        { "id": 275, "category": "Cardiovascular medicines", "name": "Ivabradine (Tablet)" },
        { "id": 276, "category": "Respiratory medicines", "name": "Roflumilast (Tablet)" },
        { "id": 277, "category": "Gastrointestinal medicines", "name": "Racecadotril (Capsule)" },
        { "id": 278, "category": "Anticonvulsants", "name": "Rufinamide (Tablet)" },
        { "id": 279, "category": "Psychiatric medicines", "name": "Lamotrigine (Tablet)" },
        { "id": 280, "category": "Ophthalmological preparations", "name": "Travoprost (Eye Drops)" },
        { "id": 281, "category": "Anti-infective medicines", "name": "Ertapenem (Injection)" },
        { "id": 282, "category": "Anti-infective medicines", "name": "Posaconazole (Suspension)" },
        { "id": 283, "category": "Anti-infective medicines", "name": "Didanosine (Tablet)" },
        { "id": 284, "category": "Endocrine medicines", "name": "Dapagliflozin (Tablet)" },
        { "id": 285, "category": "Cardiovascular medicines", "name": "Sacubitril+Valsartan (Tablet)" },
        { "id": 286, "category": "Respiratory medicines", "name": "Omalizumab (Injection)" },
        { "id": 287, "category": "Gastrointestinal medicines", "name": "Lansoprazole (Capsule)" },
        { "id": 288, "category": "Anticonvulsants", "name": "Stiripentol (Capsule)" },
        { "id": 289, "category": "Psychiatric medicines", "name": "Asenapine (Tablet)" },
        { "id": 290, "category": "Dermatological medicines", "name": "Tacrolimus (Ointment)" },
        { "id": 291, "category": "Anti-infective medicines", "name": "Telbivudine (Tablet)" },
        { "id": 292, "category": "Anti-infective medicines", "name": "Anidulafungin (Injection)" },
        { "id": 293, "category": "Anti-infective medicines", "name": "Entecavir (Tablet)" },
        { "id": 294, "category": "Endocrine medicines", "name": "Empagliflozin (Tablet)" },
        { "id": 295, "category": "Cardiovascular medicines", "name": "Edoxaban (Tablet)" },
        { "id": 296, "category": "Respiratory medicines", "name": "Vilanterol (Inhaler)" },
        { "id": 297, "category": "Gastrointestinal medicines", "name": "Rabeprazole (Tablet)" },
        { "id": 298, "category": "Anticonvulsants", "name": "Clobazam (Tablet)" },
        { "id": 299, "category": "Psychiatric medicines", "name": "Paliperidone (Tablet)" },
        { "id": 300, "category": "Ophthalmological preparations", "name": "Bimatoprost (Eye Drops)" }
    ]


    const medicinecontainer = document.querySelector('#nitems')
    for (let i = 0; i <= medicines.length - 1; i++) {
        const medicard = document.createElement("div")
        medicard.setAttribute = ("data-category", medicines[i].category)
        medicard.className = "medcard"
        medicard.innerHTML = `
    <h3>${i + 1}.${medicines[i].name} </h3>
    <p>${medicines[i].category}</p>
    `
        medicinecontainer.appendChild(medicard)
    }
    const nitem = document.querySelectorAll('.card')
    nitem.forEach(element => {
        gsap.from(element, {
            opacity: 0,
            duration: 0.2,
            y: 100,
        })
    });

    gsap.from("#cardContainer div", {
        opacity: 0,
        y: 10,
        stagger: 0.1
    })


    window.addEventListener("offline", () => {
        errmess.style.display = "flex";
        errmess.classList.remove("online");
        errmess.classList.add("offline");

        errmess.innerHTML = "You're Offline ❌";

        gsap.from(errmess, {
            y: 100,
            opacity: 0,
            duration: 0.3,
        });
    })
    window.addEventListener("online", () => {
        errmess.style.display = "flex";
        errmess.classList.remove("errormess"); // Assuming this is the offline style
        errmess.classList.add("online");

        errmess.innerHTML = "You're Back Again ✅";

        gsap.from(errmess, {
            y: 100,
            opacity: 0,
            duration: 0.3,
        });

        // Optional: Auto-hide after 3 seconds
        setTimeout(() => {
            errmess.style.display = "none";
            errmess.classList.remove("online");
        }, 3000);
    })

    // Searching Items
    // Medicines
    const parentcontainer = document.querySelector('.nitemscover')
    const medcards = document.querySelectorAll('.medcard')
    const medsearch = document.querySelector('#searchInput')
    const error = document.querySelector('.merror')
    document.addEventListener("keydown", () => {
        medsearch.focus();
    })
    medsearch.addEventListener("change", (inp) => {
        let inputvalue = inp.target.value.toLowerCase();
        medcards.forEach(mcard => {
            let medcardh3val = mcard.querySelector("h3").textContent.toLowerCase()

            if (medcardh3val.includes(inputvalue)) {
                mcard.style.display = "block"
            }
            else {
                // mcard.style.display = "none"
                mcard.style.transition = "all 0.2s ease";
                setTimeout(() => {
                    mcard.style.opacity = "0.5";
                    setTimeout(() => {

                        mcard.style.display = "none";
                    }, 500);

                }, 300);
            }
        })
    })

    // sitem.forEach(element => {
    //     gsap.from(element, {
    //         opacity: 0,
    //         duration: 0.2,
    //         y: 100,


    //     })
    // });



})
const products = [
    { id: 1, name: "A4 Size Notebooks", category: "Stationery", description: "High-quality notebooks for school and office.", image: "https://via.placeholder.com/250x150?text=A4+Notebooks", details: { size: "A4", types: ["Ruled", "Unruled", "Graph"] } },
    { id: 2, name: "Long Size Notebooks", category: "Stationery", description: "Durable notebooks for extended writing.", image: "https://via.placeholder.com/250x150?text=Long+Notebooks", details: { size: "Long" } },
    { id: 3, name: "King Size Notebooks", category: "Stationery", description: "Large notebooks for detailed notes.", image: "https://via.placeholder.com/250x150?text=King+Notebooks", details: { size: "King" } },
    { id: 4, name: "Short Notebooks", category: "Stationery", description: "Compact notebooks for quick notes.", image: "https://via.placeholder.com/250x150?text=Short+Notebooks", details: { size: "Short" } },
    { id: 5, name: "Drawing Books", category: "Stationery", description: "Sketchbooks for artists.", image: "https://via.placeholder.com/250x150?text=Drawing+Books", details: { types: ["Plain", "Spiral"] } },
    { id: 6, name: "Graph Books", category: "Stationery", description: "Graph paper notebooks for technical work.", image: "https://via.placeholder.com/250x150?text=Graph+Books", details: { type: "Graph" } },
    { id: 7, name: "School Diaries", category: "Stationery", description: "Diaries for student schedules.", image: "https://via.placeholder.com/250x150?text=School+Diaries", details: { size: "Standard" } },
    { id: 8, name: "Practical Records", category: "Stationery", description: "Records for lab experiments.", image: "https://via.placeholder.com/250x150?text=Practical+Records", details: { size: "A4" } },
    { id: 9, name: "Registers", category: "Stationery", description: "Registers for office use.", image: "https://via.placeholder.com/250x150?text=Registers", details: { size: "A4" } },
    { id: 10, name: "Exam Pads", category: "Stationery", description: "Pads for exams and notes.", image: "https://via.placeholder.com/250x150?text=Exam+Pads", details: { sizes: ["3mm", "4mm", "5mm"] } },
    { id: 11, name: "Scrap Books", category: "Stationery", description: "Books for creative projects.", image: "https://via.placeholder.com/250x150?text=Scrap+Books", details: { size: "A4" } },
    { id: 12, name: "Formative Assessment Records", category: "Stationery", description: "Records for student assessments.", image: "https://via.placeholder.com/250x150?text=Assessment+Records", details: { size: "A4" } },
    { id: 13, name: "State Text Books", category: "Stationery", description: "Textbooks for state curriculum.", image: "https://via.placeholder.com/250x150?text=State+Textbooks", details: { type: "Textbook" } },
    { id: 14, name: "Copy Writing Books", category: "Stationery", description: "Books for handwriting practice.", image: "https://via.placeholder.com/250x150?text=Copy+Writing", details: { size: "A4" } },
    { id: 15, name: "CBSE Text Books", category: "Stationery", description: "Textbooks for CBSE curriculum.", image: "https://via.placeholder.com/250x150?text=CBSE+Textbooks", details: { type: "Textbook" } },
    { id: 16, name: "Scribbling Pad", category: "Stationery", description: "Pads for quick notes.", image: "https://via.placeholder.com/250x150?text=Scribbling+Pad", details: { pages: ["10", "20", "30"] } },
    { id: 17, name: "Compass", category: "Stationery", description: "Tool for geometry.", image: "https://via.placeholder.com/250x150?text=Compass", details: {} },
    { id: 18, name: "Sticky Notes", category: "Stationery", description: "Notes for reminders.", image: "https://via.placeholder.com/250x150?text=Sticky+Notes", details: {} },
    { id: 19, name: "Indian Political Maps", category: "Stationery", description: "Maps for educational use.", image: "https://via.placeholder.com/250x150?text=Political+Maps", details: {} },
    { id: 20, name: "World Maps", category: "Stationery", description: "World maps for education.", image: "https://via.placeholder.com/250x150?text=World+Maps", details: {} },
    { id: 21, name: "Card Boards", category: "Stationery", description: "Boards for projects.", image: "https://via.placeholder.com/250x150?text=Card+Boards", details: {} },
    { id: 22, name: "Smily Badges", category: "Stationery", description: "Badges for events.", image: "https://via.placeholder.com/250x150?text=Smily+Badges", details: {} },
    { id: 23, name: "Flag Badges", category: "Stationery", description: "Badges with flag designs.", image: "https://via.placeholder.com/250x150?text=Flag+Badges", details: {} },
    { id: 24, name: "Paper Flags", category: "Stationery", description: "Flags for decorations.", image: "https://via.placeholder.com/250x150?text=Paper+Flags", details: {} },
    { id: 25, name: "Cotton Flags", category: "Stationery", description: "Durable cotton flags.", image: "https://via.placeholder.com/250x150?text=Cotton+Flags", details: {} },
    { id: 26, name: "Double Side Tape", category: "Stationery", description: "Tape for mounting.", image: "https://via.placeholder.com/250x150?text=Double+Side+Tape", details: {} },
    { id: 27, name: "Cello Tape", category: "Stationery", description: "Adhesive tape for packaging.", image: "https://via.placeholder.com/250x150?text=Cello+Tape", details: { sizes: ["1/2 inch", "1 inch", "2 inch", "3 inch"] } },
    { id: 28, name: "Paper Tape", category: "Stationery", description: "Paper-based adhesive tape.", image: "https://via.placeholder.com/250x150?text=Paper+Tape", details: { sizes: ["1/2 inch", "1 inch"] } },
    { id: 29, name: "Nano Tape", category: "Stationery", description: "Reusable adhesive tape.", image: "https://via.placeholder.com/250x150?text=Nano+Tape", details: { type: "Ivy Grip" } },
    { id: 30, name: "Sharpeners", category: "Stationery", description: "Pencil sharpeners.", image: "https://via.placeholder.com/250x150?text=Sharpeners", details: { brands: ["Apsara", "Doms", "Nataraj"] } },
    { id: 31, name: "Erasers", category: "Stationery", description: "High-quality erasers.", image: "https://via.placeholder.com/250x150?text=Erasers", details: { brands: ["Apsara", "Doms", "Nataraj"] } },
    { id: 32, name: "Pencils", category: "Stationery", description: "Smooth writing pencils.", image: "https://via.placeholder.com/250x150?text=Pencils", details: { brands: ["Apsara", "Doms", "Nataraj", "Faber-Castell"] } },
    { id: 33, name: "Dustless Chalk Pieces", category: "Stationery", description: "Chalk for blackboards.", image: "https://via.placeholder.com/250x150?text=Chalk+Pieces", details: { brands: ["Korus", "Doms"] } },
    { id: 34, name: "Slates", category: "Stationery", description: "Writing slates for students.", image: "https://via.placeholder.com/250x150?text=Slates", details: { sizes: ["Small", "Large"] } },
    { id: 35, name: "Slate Pencils", category: "Stationery", description: "Pencils for slates.", image: "https://via.placeholder.com/250x150?text=Slate+Pencils", details: { brands: ["Tiger", "CAT", "Pan Tham"] } },
    { id: 36, name: "Card Board Box Files", category: "Stationery", description: "Files for document storage.", image: "https://via.placeholder.com/250x150?text=Box+Files", details: { brands: ["SRS", "Sun", "RJS"], sizes: ["A4", "A5"] } },
    { id: 37, name: "Cobra File", category: "Stationery", description: "Durable file for documents.", image: "https://via.placeholder.com/250x150?text=Cobra+File", details: {} },
    { id: 38, name: "Portfolio Files", category: "Stationery", description: "Files for presentations.", image: "https://via.placeholder.com/250x150?text=Portfolio+Files", details: { capacities: ["40", "120"] } },
    { id: 39, name: "Button Files", category: "Stationery", description: "Files with button closure.", image: "https://via.placeholder.com/250x150?text=Button+Files", details: {} },
    { id: 40, name: "A4 Sheet Protectors", category: "Stationery", description: "Protectors for documents.", image: "https://via.placeholder.com/250x150?text=Sheet+Protectors", details: { sizes: ["A4", "Full Size"] } },
    { id: 41, name: "Transparent Film", category: "Stationery", description: "Film for lamination.", image: "https://via.placeholder.com/250x150?text=Transparent+Film", details: { thickness: "100 microns" } },
    { id: 42, name: "Aadhar Lamination", category: "Stationery", description: "Lamination for Aadhar cards.", image: "https://via.placeholder.com/250x150?text=Aadhar+Lamination", details: {} },
    { id: 43, name: "ID Card Lamination", category: "Stationery", description: "Lamination for ID cards.", image: "https://via.placeholder.com/250x150?text=ID+Card+Lamination", details: {} },
    { id: 44, name: "A4 Lamination", category: "Stationery", description: "Lamination for A4 sheets.", image: "https://via.placeholder.com/250x150?text=A4+Lamination", details: {} },
    { id: 45, name: "PVC ID Card", category: "Stationery", description: "Durable PVC ID cards.", image: "https://via.placeholder.com/250x150?text=PVC+ID+Card", details: {} },
    { id: 46, name: "Metal ID Card Holder", category: "Stationery", description: "Holders for ID cards.", image: "https://via.placeholder.com/250x150?text=ID+Card+Holder", details: {} },
    { id: 47, name: "ID Card Lanyard", category: "Stationery", description: "Lanyards for ID cards.", image: "https://via.placeholder.com/250x150?text=ID+Lanyard", details: { types: ["Plain", "Multi-Colour", "Nylon"] } },
    { id: 48, name: "School Uniforms", category: "Stationery", description: "Uniforms for students.", image: "https://via.placeholder.com/250x150?text=School+Uniforms", details: {} },
    { id: 49, name: "Socks", category: "Stationery", description: "School socks.", image: "https://via.placeholder.com/250x150?text=Socks", details: { sizes: ["2", "3", "4", "5", "6", "Long"] } },
    { id: 50, name: "School Bags", category: "Stationery", description: "Bags for students.", image: "https://via.placeholder.com/250x150?text=School+Bags", details: {} },
    { id: 51, name: "Convocation Gowns", category: "Stationery", description: "Gowns for ceremonies.", image: "https://via.placeholder.com/250x150?text=Convocation+Gowns", details: {} },
    { id: 52, name: "Brown Rolls", category: "Stationery", description: "Rolls for packaging.", image: "https://via.placeholder.com/250x150?text=Brown+Rolls", details: {} },
    { id: 53, name: "Transparent Book Rolls", category: "Stationery", description: "Rolls for book covering.", image: "https://via.placeholder.com/250x150?text=Book+Rolls", details: {} },
    { id: 54, name: "Transparent PVC Film", category: "Stationery", description: "Film for protection.", image: "https://via.placeholder.com/250x150?text=PVC+Film", details: {} },
    { id: 55, name: "Nylon Silky Rubber Band", category: "Stationery", description: "Durable rubber bands.", image: "https://via.placeholder.com/250x150?text=Rubber+Bands", details: { quantities: ["50g", "500g"], sizes: ["1.5", "3"] } },
    { id: 56, name: "Cloth Line Envelope", category: "Stationery", description: "Envelopes for documents.", image: "https://via.placeholder.com/250x150?text=Cloth+Envelope", details: {} },
    { id: 57, name: "Scissors", category: "Stationery", description: "Scissors for cutting.", image: "https://via.placeholder.com/250x150?text=Scissors", details: { sizes: ["Small", "Medium", "Large"] } },
    { id: 58, name: "Zigzag Scissors", category: "Stationery", description: "Scissors for decorative cuts.", image: "https://via.placeholder.com/250x150?text=Zigzag+Scissors", details: {} },
    { id: 59, name: "Gum", category: "Stationery", description: "Adhesive gum.", image: "https://via.placeholder.com/250x150?text=Gum", details: { size: "900ml" } },
    { id: 60, name: "Fevicol", category: "Stationery", description: "Strong adhesive.", image: "https://via.placeholder.com/250x150?text=Fevicol", details: {} },
    { id: 61, name: "Fevi Stick", category: "Stationery", description: "Glue stick.", image: "https://via.placeholder.com/250x150?text=Fevi+Stick", details: { sizes: ["8g", "22g"] } },
    { id: 62, name: "Fevikwik", category: "Stationery", description: "Instant adhesive.", image: "https://via.placeholder.com/250x150?text=Fevikwik", details: {} },
    { id: 63, name: "Book Labels", category: "Stationery", description: "Labels for books.", image: "https://via.placeholder.com/250x150?text=Book+Labels", details: {} },
    { id: 64, name: "Highlighter", category: "Stationery", description: "Highlighters for marking.", image: "https://via.placeholder.com/250x150?text=Highlighter", details: {} },
    { id: 65, name: "Whiteners", category: "Stationery", description: "Correction fluid.", image: "https://via.placeholder.com/250x150?text=Whiteners", details: { brands: ["Reynolds", "Faber-Castell"] } },
    { id: 66, name: "Pen Stand", category: "Stationery", description: "Stand for pens.", image: "https://via.placeholder.com/250x150?text=Pen+Stand", details: {} },
    { id: 67, name: "Wooden Pen Stand", category: "Stationery", description: "Wooden stand for pens.", image: "https://via.placeholder.com/250x150?text=Wooden+Pen+Stand", details: {} },
    { id: 68, name: "Scales", category: "Stationery", description: "Rulers for measurement.", image: "https://via.placeholder.com/250x150?text=Scales", details: { brands: ["Nataraj", "Classmate", "Doms"], sizes: ["Small", "Large"] } },
    { id: 69, name: "Stickers", category: "Stationery", description: "Decorative stickers.", image: "https://via.placeholder.com/250x150?text=Stickers", details: { types: ["Smily", "Star"] } },
    { id: 70, name: "Cutters", category: "Stationery", description: "Cutters for paper.", image: "https://via.placeholder.com/250x150?text=Cutters", details: { sizes: ["Medium", "Big"] } },
    { id: 71, name: "Pencil Box", category: "Stationery", description: "Box for pencils.", image: "https://via.placeholder.com/250x150?text=Pencil+Box", details: { types: ["Junior", "Senior", "Nano"] } },
    { id: 72, name: "Acrylic Boards A4", category: "Stationery", description: "Acrylic boards for displays.", image: "https://via.placeholder.com/250x150?text=Acrylic+Boards", details: { size: "A4" } },
    { id: 73, name: "Water Bottles", category: "Stationery", description: "Bottles for students.", image: "https://via.placeholder.com/250x150?text=Water+Bottles", details: {} },
    { id: 74, name: "Postal Covers", category: "Stationery", description: "Covers for mailing.", image: "https://via.placeholder.com/250x150?text=Postal+Covers", details: {} },
    { id: 75, name: "ZIP Lock Covers", category: "Stationery", description: "Covers for storage.", image: "https://via.placeholder.com/250x150?text=ZIP+Lock+Covers", details: {} },
    { id: 76, name: "Carry Bags with School Name", category: "Stationery", description: "Custom carry bags.", image: "https://via.placeholder.com/250x150?text=Carry+Bags", details: {} },
    { id: 77, name: "Exam Threads", category: "Stationery", description: "Threads for exams.", image: "https://via.placeholder.com/250x150?text=Exam+Threads", details: {} },
    { id: 78, name: "Both Side hurtful Tape", category: "Stationery", description: "Foam tape for mounting.", image: "https://via.placeholder.com/250x150?text=Foam+Tape", details: { size: "2m", widths: ["1 inch", "1.5 inch", "2 inch"] } },
    { id: 79, name: "Transparent Packing Tape", category: "Stationery", description: "Tape for packaging.", image: "https://via.placeholder.com/250x150?text=Packing+Tape", details: { size: "40m", widths: ["1 inch", "1.5 inch", "2 inch", "3 inch"] } },
    { id: 80, name: "Brown Packing Tape", category: "Stationery", description: "Brown tape for packaging.", image: "https://via.placeholder.com/250x150?text=Brown+Packing+Tape", details: { size: "40m", widths: ["1 inch", "1.5 inch", "2 inch", "3 inch"] } },
    { id: 81, name: "Packing Tape", category: "Stationery", description: "Colored packing tape.", image: "https://via.placeholder.com/250x150?text=Colored+Packing+Tape", details: { size: "30m", width: "1 inch", colors: ["Red", "Yellow", "Green", "Blue"] } },
    { id: 82, name: "3M Scotch Magic Tape", category: "Stationery", description: "Magic tape refill.", image: "https://via.placeholder.com/250x150?text=Scotch+Tape", details: { size: "32m", width: "1 inch" } },
    { id: 83, name: "3M Both Side Foam Tape", category: "Stationery", description: "3M foam tape.", image: "https://via.placeholder.com/250x150?text=3M+Foam+Tape", details: { size: "3m", width: "1.8cm" } },
    { id: 84, name: "JK Copier Paper", category: "Papers", description: "High-quality copier paper.", image: "https://via.placeholder.com/250x150?text=JK+Copier+Paper", details: { size: "A4", gsm: "75" } },
    { id: 85, name: "Bilt Copier Paper", category: "Papers", description: "Premium copier paper.", image: "https://via.placeholder.com/250x150?text=Bilt+Copier+Paper", details: { size: "A4", gsm: "70" } },
    { id: 86, name: "TNPL Copier Paper", category: "Papers", description: "Eco-friendly copier paper.", image: "https://via.placeholder.com/250x150?text=TNPL+Copier+Paper", details: { size: "A4", gsm: "80" } },
    { id: 87, name: "Century Copier Paper", category: "Papers", description: "Smooth copier paper.", image: "https://via.placeholder.com/250x150?text=Century+Copier+Paper", details: { size: "A4", gsm: "75" } },
    { id: 88, name: "A3 Copier Paper", category: "Papers", description: "Large format copier paper.", image: "https://via.placeholder.com/250x150?text=A3+Copier+Paper", details: { size: "A3", gsm: "75" } },
    { id: 89, name: "Legal Size Paper", category: "Papers", description: "Paper for legal documents.", image: "https://via.placeholder.com/250x150?text=Legal+Paper", details: { size: "Legal", gsm: "70" } },
    { id: 90, name: "Color Papers", category: "Papers", description: "Colored paper for projects.", image: "https://via.placeholder.com/250x150?text=Color+Papers", details: { size: "A4", colors: ["Red", "Blue", "Green", "Yellow"] } },
    { id: 91, name: "Fluorescent Papers", category: "Papers", description: "Bright fluorescent paper.", image: "https://via.placeholder.com/250x150?text=Fluorescent+Papers", details: { size: "A4" } },
    { id: 92, name: "Bond Papers", category: "Papers", description: "High-quality bond paper.", image: "https://via.placeholder.com/250x150?text=Bond+Papers", details: { size: "A4", gsm: "100" } },
    { id: 93, name: "Glossy Papers", category: "Papers", description: "Glossy paper for printing.", image: "https://via.placeholder.com/250x150?text=Glossy+Papers", details: { size: "A4" } },
    { id: 94, name: "Mat everything in orderte Papers", category: "Papers", description: "Matte finish paper.", image: "https://via.placeholder.com/250x150?text=Matte+Papers", details: { size: "A4" } },
    { id: 95, name: "Photo Papers", category: "Papers", description: "Paper for photo printing.", image: "https://via.placeholder.com/250x150?text=Photo+Papers", details: { size: "A4" } },
    { id: 96, name: "Sticker Papers", category: "Papers", description: "Adhesive sticker paper.", image: "https://via.placeholder.com/250x150?text=Sticker+Papers", details: { size: "A4" } },
    { id: 97, name: "Craft Papers", category: "Papers", description: "Paper for crafting.", image: "https://via.placeholder.com/250x150?text=Craft+Papers", details: { size: "A4" } },
    { id: 98, name: "Glitter Foam Sheets", category: "Art Supplies", description: "Shiny foam sheets for crafts.", image: "https://via.placeholder.com/250x150?text=Glitter+Foam+Sheets", details: { size: "A4" } },
    { id: 99, name: "Plain Foam Sheets", category: "Art Supplies", description: "Plain foam sheets for projects.", image: "https://via.placeholder.com/250x150?text=Plain+Foam+Sheets", details: { size: "A4" } },
    { id: 100, name: "Velvet Sheets", category: "Art Supplies", description: "Velvet sheets for art.", image: "https://via.placeholder.com/250x150?text=Velvet+Sheets", details: { size: "A4" } },
    { id: 101, name: "Chart Papers", category: "Art Supplies", description: "Large chart papers.", image: "https://via.placeholder.com/250x150?text=Chart+Papers", details: { size: "Standard" } },
    { id: 102, name: "Color Chart Papers", category: "Art Supplies", description: "Colored chart papers.", image: "https://via.placeholder.com/250x150?text=Color+Chart+Papers", details: { colors: ["Red", "Blue", "Green"] } },
    { id: 103, name: "Fluorescent Chart Papers", category: "Art Supplies", description: "Bright chart papers.", image: "https://via.placeholder.com/250x150?text=Fluorescent+Chart+Papers", details: { size: "Standard" } },
    { id: 104, name: "Drawing Sheets", category: "Art Supplies", description: "Sheets for drawing.", image: "https://via.placeholder.com/250x150?text=Drawing+Sheets", details: { size: "A4" } },
    { id: 105, name: "Oil Pastels", category: "Art Supplies", description: "Vibrant oil pastels.", image: "https://via.placeholder.com/250x150?text=Oil+Pastels", details: { brands: ["Camel", "Doms"] } },
    { id: 106, name: "Crayons", category: "Art Supplies", description: "Wax crayons for kids.", image: "https://via.placeholder.com/250x150?text=Crayons", details: { brands: ["Camel", "Doms"] } },
    { id: 107, name: "Poster Colors", category: "Art Supplies", description: "Bright poster paints.", image: "https://via.placeholder.com/250x150?text=Poster+Colors", details: { sizes: ["15ml", "30ml"] } },
    { id: 108, name: "Water Colors", category: "Art Supplies", description: "Water-based paints.", image: "https://via.placeholder.com/250x150?text=Water+Colors", details: { brands: ["Camel", "Faber-Castell"] } },
    { id: 109, name: "Acrylic Colors", category: "Art Supplies", description: "Acrylic paints for artists.", image: "https://via.placeholder.com/250x150?text=Acrylic+Colors", details: { sizes: ["20ml", "40ml"] } },
    { id: 110, name: "Fabric Colors", category: "Art Supplies", description: "Paints for fabric.", image: "https://via.placeholder.com/250x150?text=Fabric+Colors", details: { sizes: ["15ml"] } },
    { id: 111, name: "Glass Colors", category: "Art Supplies", description: "Paints for glass surfaces.", image: "https://via.placeholder.com/250x150?text=Glass+Colors", details: { sizes: ["15ml"] } },
    { id: 112, name: "Paint Brushes", category: "Art Supplies", description: "Brushes for painting.", image: "https://via.placeholder.com/250x150?text=Paint+Brushes", details: { sizes: ["Small", "Medium", "Large"] } },
    { id: 113, name: "Canvas Boards", category: "Art Supplies", description: "Boards for painting.", image: "https://via.placeholder.com/250x150?text=Canvas+Boards", details: { sizes: ["A4", "A3"] } },
    { id: 114, name: "Drawing Pencils", category: "Art Supplies", description: "Pencils for sketching.", image: "https://via.placeholder.com/250x150?text=Drawing+Pencils", details: { brands: ["Faber-Castell", "Doms"] } },
    { id: 115, name: "Charcoal Pencils", category: "Art Supplies", description: "Pencils for charcoal art.", image: "https://via.placeholder.com/250x150?text=Charcoal+Pencils", details: { brands: ["Faber-Castell"] } },
    { id: 116, name: "Sketch Pens", category: "Art Supplies", description: "Pens for sketching.", image: "https://via.placeholder.com/250x150?text=Sketch+Pens", details: { brands: ["Doms", "Luxor"] } },
    { id: 117, name: "Glitter Pens", category: "Art Supplies", description: "Shiny pens for decoration.", image: "https://via.placeholder.com/250x150?text=Glitter+Pens", details: { brands: ["Doms"] } },
    { id: 118, name: "Gel Pens", category: "Art Supplies", description: "Smooth gel pens.", image: "https://via.placeholder.com/250x150?text=Gel+Pens", details: { brands: ["Reynolds", "Doms"] } },
    { id: 119, name: "Markers", category: "Art Supplies", description: "Permanent markers.", image: "https://via.placeholder.com/250x150?text=Markers", details: { brands: ["Luxor", "Camlin"] } },
    { id: 120, name: "Whiteboard Markers", category: "Office Supplies", description: "Markers for whiteboards.", image: "https://via.placeholder.com/250x150?text=Whiteboard+Markers", details: { brands: ["Camlin", "Luxor"] } },
    { id: 121, name: "Permanent Markers", category: "Office Supplies", description: "Markers for permanent use.", image: "https://via.placeholder.com/250x150?text=Permanent+Markers", details: { brands: ["Luxor", "Camlin"] } },
    { id: 122, name: "Highlighters", category: "Office Supplies", description: "Highlighters for marking.", image: "https://via.placeholder.com/250x150?text=Highlighters", details: { brands: ["Faber-Castell", "Luxor"] } },
    { id: 123, name: "Correction Pens", category: "Office Supplies", description: "Pens for corrections.", image: "https://via.placeholder.com/250x150?text=Correction+Pens", details: { brands: ["Reynolds", "Faber-Castell"] } },
    { id: 124, name: "Staplers", category: "Office Supplies", description: "Staplers for binding papers.", image: "https://via.placeholder.com/250x150?text=Staplers", details: { brands: ["Kangaro", "Max"] } },
    { id: 125, name: "Stapler Pins", category: "Office Supplies", description: "Pins for staplers.", image: "https://via.placeholder.com/250x150?text=Stapler+Pins", details: { brands: ["Kangaro", "Max"], sizes: ["No. 10", "24/6"] } },
    { id: 126, name: "Punch Machines", category: "Office Supplies", description: "Machines for punching holes.", image: "https://via.placeholder.com/250x150?text=Punch+Machines", details: { brands: ["Kangaro"], types: ["Single", "Double"] } },
    { id: 127, name: "Paper Clips", category: "Office Supplies", description: "Clips for holding papers.", image: "https://via.placeholder.com/250x150?text=Paper+Clips", details: { sizes: ["Small", "Large"] } },
    { id: 128, name: "Binder Clips", category: "Office Supplies", description: "Clips for binding documents.", image: "https://via.placeholder.com/250x150?text=Binder+Clips", details: { sizes: ["15mm", "25mm", "32mm"] } },
    { id: 129, name: "Push Pins", category: "Office Supplies", description: "Pins for notice boards.", image: "https://via.placeholder.com/250x150?text=Push+Pins", details: {} },
    { id: 130, name: "Notice Boards", category: "Office Supplies", description: "Boards for notices.", image: "https://via.placeholder.com/250x150?text=Notice+Boards", details: { sizes: ["2x3ft", "3x4ft"] } },
    { id: 131, name: "Whiteboards", category: "Office Supplies", description: "Boards for writing.", image: "https://via.placeholder.com/250x150?text=Whiteboards", details: { sizes: ["2x3ft", "3x4ft"] } },
    { id: 132, name: "Magnetic Whiteboards", category: "Office Supplies", description: "Magnetic boards for writing.", image: "https://via.placeholder.com/250x150?text=Magnetic+Whiteboards", details: { sizes: ["2x3ft"] } },
    { id: 133, name: "Dusters", category: "Office Supplies", description: "Dusters for whiteboards.", image: "https://via.placeholder.com/250x150?text=Dusters", details: { types: ["Magnetic", "Non-Magnetic"] } },
    { id: 134, name: "Desk Organizers", category: "Office Supplies", description: "Organizers for desks.", image: "https://via.placeholder.com/250x150?text=Desk+Organizers", details: {} },
    { id: 135, name: "File Trays", category: "Office Supplies", description: "Trays for document storage.", image: "https://via.placeholder.com/250x150?text=File+Trays", details: {} },
    { id: 136, name: "Letter Openers", category: "Office Supplies", description: "Tools for opening envelopes.", image: "https://via.placeholder.com/250x150?text=Letter+Openers", details: {} },
    { id: 137, name: "Paper Weights", category: "Office Supplies", description: "Weights for holding papers.", image: "https://via.placeholder.com/250x150?text=Paper+Weights", details: {} },
    { id: 138, name: "Calculators", category: "Office Supplies", description: "Calculators for office use.", image: "https://via.placeholder.com/250x150?text=Calculators", details: { brands: ["Casio", "Orpat"] } },
    { id: 139, name: "Scissors", category: "Office Supplies", description: "Scissors for office use.", image: "https://via.placeholder.com/250x150?text=Office+Scissors", details: { sizes: ["Medium", "Large"] } },
    { id: 140, name: "Tape Dispensers", category: "Office Supplies", description: "Dispensers for tapes.", image: "https://via.placeholder.com/250x150?text=Tape+Dispensers", details: { brands: ["3M", "Kangaro"] } },
    { id: 141, name: "Office Chairs", category: "Office Supplies", description: "Ergonomic chairs for office.", image: "https://via.placeholder.com/250x150?text=Office+Chairs", details: { types: ["Standard", "Executive"] } },
    { id: 142, name: "Desk Calendars", category: "Office Supplies", description: "Calendars for desks.", image: "https://via.placeholder.com/250x150?text=Desk+Calendars", details: {} },
    { id: 143, name: "Wall Calendars", category: "Office Supplies", description: "Calendars for walls.", image: "https://via.placeholder.com/250x150?text=Wall+Calendars", details: {} },
    { id: 144, name: "Rubber Stamps", category: "Office Supplies", description: "Stamps for official use.", image: "https://via.placeholder.com/250x150?text=Rubber+Stamps", details: { types: ["Pre-Inked", "Self-Inking"] } },
    { id: 145, name: "Stamp Pads", category: "Office Supplies", description: "Pads for rubber stamps.", image: "https://via.placeholder.com/250x150?text=Stamp+Pads", details: { brands: ["Faber-Castell"] } },
    { id: 146, name: "Ink for Stamps", category: "Office Supplies", description: "Ink for stamp pads.", image: "https://via.placeholder.com/250x150?text=Stamp+Ink", details: { colors: ["Blue", "Black", "Red"] } },
    { id: 147, name: "Paper Shredders", category: "Office Supplies", description: "Machines for shredding paper.", image: "https://via.placeholder.com/250x150?text=Paper+Shredders", details: {} },
    { id: 148, name: "Laminators", category: "Office Supplies", description: "Machines for laminating documents.", image: "https://via.placeholder.com/250x150?text=Laminators", details: {} },
    { id: 149, name: "Binding Machines", category: "Office Supplies", description: "Machines for binding documents.", image: "https://via.placeholder.com/250x150?text=Binding+Machines", details: { types: ["Comb", "Spiral"] } },
    { id: 150, name: "Binding Covers", category: "Office Supplies", description: "Covers for binding.", image: "https://via.placeholder.com/250x150?text=Binding+Covers", details: { size: "A4" } },
    { id: 151, name: "Spiral Binding Rings", category: "Office Supplies", description: "Rings for spiral binding.", image: "https://via.placeholder.com/250x150?text=Spiral+Rings", details: { sizes: ["6mm", "10mm", "14mm"] } },
    { id: 152, name: "Floor Mats", category: "Housekeeping", description: "Mats for office floors.", image: "https://via.placeholder.com/250x150?text=Floor+Mats", details: { sizes: ["Small", "Large"] } },
    { id: 153, name: "Dustbins", category: "Housekeeping", description: "Bins for waste.", image: "https://via.placeholder.com/250x150?text=Dustbins", details: { sizes: ["10L", "20L"] } },
    { id: 154, name: "Brooms", category: "Housekeeping", description: "Brooms for cleaning.", image: "https://via.placeholder.com/250x150?text=Brooms", details: { types: ["Soft", "Hard"] } },
    { id: 155, name: "Mops", category: "Housekeeping", description: "Mops for floor cleaning.", image: "https://via.placeholder.com/250x150?text=Mops", details: { types: ["Wet", "Dry"] } },
    { id: 156, name: "Cleaning Cloths", category: "Housekeeping", description: "Cloths for cleaning surfaces.", image: "https://via.placeholder.com/250x150?text=Cleaning+Cloths", details: {} },
    { id: 157, name: "Dusters", category: "Housekeeping", description: "Dusters for dusting surfaces.", image: "https://via.placeholder.com/250x150?text=Housekeeping+Dusters", details: {} },
    { id: 158, name: "Floor Cleaning Liquid", category: "Housekeeping", description: "Liquid for floor cleaning.", image: "https://via.placeholder.com/250x150?text=Floor+Cleaner", details: { brands: ["Lizol", "Harpic"], sizes: ["500ml", "1L"] } },
    { id: 159, name: "Glass Cleaning Liquid", category: "Housekeeping", description: "Liquid for glass surfaces.", image: "https://via.placeholder.com/250x150?text=Glass+Cleaner", details: { brands: ["Colin"], sizes: ["500ml"] } },
    { id: 160, name: "Toilet Cleaning Liquid", category: "Housekeeping", description: "Liquid for toilet cleaning.", image: "https://via.placeholder.com/250x150?text=Toilet+Cleaner", details: { brands: ["Harpic"], sizes: ["500ml", "1L"] } },
    { id: 161, name: "Phenyl", category: "Housekeeping", description: "Disinfectant for cleaning.", image: "https://via.placeholder.com/250x150?text=Phenyl", details: { sizes: ["1L", "5L"] } },
    { id: 162, name: "Hand Wash", category: "Housekeeping", description: "Liquid hand wash.", image: "https://via.placeholder.com/250x150?text=Hand+Wash", details: { brands: ["Dettol", "Lifebuoy"], sizes: ["250ml", "500ml"] } },
    { id: 163, name: "Hand Sanitizer", category: "Housekeeping", description: "Sanitizer for hands.", image: "https://via.placeholder.com/250x150?text=Hand+Sanitizer", details: { brands: ["Dettol"], sizes: ["100ml", "500ml"] } },
    { id: 164, name: "Dishwashing Liquid", category: "Housekeeping", description: "Liquid for dishwashing.", image: "https://via.placeholder.com/250x150?text=Dishwashing+Liquid", details: { brands: ["Vim", "Pril"], sizes: ["500ml", "1L"] } },
    { id: 165, name: "Scrub Pads", category: "Housekeeping", description: "Pads for cleaning dishes.", image: "https://via.placeholder.com/250x150?text=Scrub+Pads", details: { brands: ["Scotch-Brite"] } },
    { id: 166, name: "Steel Scrubbers", category: "Housekeeping", description: "Scrubbers for tough stains.", image: "https://via.placeholder.com/250x150?text=Steel+Scrubbers", details: {} },
    { id: 167, name: "Garbage Bags", category: "Housekeeping", description: "Bags for waste disposal.", image: "https://via.placeholder.com/250x150?text=Garbage+Bags", details: { sizes: ["Small", "Medium", "Large"] } },
    { id: 168, name: "Air Fresheners", category: "Housekeeping", description: "Fresheners for rooms.", image: "https://via.placeholder.com/250x150?text=Air+Fresheners", details: { brands: ["Odonil", "Godrej"], types: ["Spray", "Gel"] } },
    { id: 169, name: "Toilet Paper Rolls", category: "Housekeeping", description: "Rolls for hygiene.", image: "https://via.placeholder.com/250x150?text=Toilet+Paper", details: {} },
    { id: 170, name: "Tissue Papers", category: "Housekeeping", description: "Papers for general use.", image: "https://via.placeholder.com/250x150?text=Tissue+Papers", details: { types: ["Box", "Roll"] } },
    { id: 171, name: "Paper Napkins", category: "Housekeeping", description: "Napkins for dining.", image: "https://via.placeholder.com/250x150?text=Paper+Napkins", details: {} },
    { id: 172, name: "Cleaning Gloves", category: "Housekeeping", description: "Gloves for cleaning.", image: "https://via.placeholder.com/250x150?text=Cleaning+Gloves", details: { sizes: ["Medium", "Large"] } },
    { id: 173, name: "Dustpans", category: "Housekeeping", description: "Pans for collecting dust.", image: "https://via.placeholder.com/250x150?text=Dustpans", details: {} },
    { id: 174, name: "Bucket", category: "Housekeeping", description: "Buckets for cleaning.", image: "https://via.placeholder.com/250x150?text=Bucket", details: { sizes: ["10L", "20L"] } },
    { id: 175, name: "Mug", category: "Housekeeping", description: "Mugs for cleaning.", image: "https://via.placeholder.com/250x150?text=Mug", details: { sizes: ["1L", "2L"] } },
    { id: 176, name: "Tea Powder", category: "Pantry", description: "Powder for tea.", image: "https://via.placeholder.com/250x150?text=Tea+Powder", details: { brands: ["Tata", "Red Label"], sizes: ["250g", "500g"] } },
    { id: 177, name: "Coffee Powder", category: "Pantry", description: "Powder for coffee.", image: "https://via.placeholder.com/250x150?text=Coffee+Powder", details: { brands: ["Nescafe", "Bru"], sizes: ["100g", "200g"] } },
    { id: 178, name: "Sugar", category: "Pantry", description: "Sugar for beverages.", image: "https://via.placeholder.com/250x150?text=Sugar", details: { sizes: ["1kg", "5kg"] } },
    { id: 179, name: "Milk Powder", category: "Pantry", description: "Powder for milk.", image: "https://via.placeholder.com/250x150?text=Milk+Powder", details: { brands: ["Amul", "Nestle"], sizes: ["500g", "1kg"] } },
    { id: 180, name: "Biscuits", category: "Pantry", description: "Biscuits for snacks.", image: "https://via.placeholder.com/250x150?text=Biscuits", details: { brands: ["Parle", "Britannia"], types: ["Glucose", "Cream"] } },
    { id: 181, name: "Cookies", category: "Pantry", description: "Cookies for snacks.", image: "https://via.placeholder.com/250x150?text=Cookies", details: { brands: ["Hide & Seek"], sizes: ["100g", "200g"] } },
    { id: 182, name: "Rusks", category: "Pantry", description: "Rusks for tea time.", image: "https://via.placeholder.com/250x150?text=Rusks", details: { brands: ["Britannia"], sizes: ["200g"] } },
    { id: 183, name: "Namkeen", category: "Pantry", description: "Savory snacks.", image: "https://via.placeholder.com/250x150?text=Namkeen", details: { brands: ["Haldiram"], sizes: ["200g", "400g"] } },
    { id: 184, name: "Dry Fruits", category: "Pantry", description: "Assorted dry fruits.", image: "https://via.placeholder.com/250x150?text=Dry+Fruits", details: { types: ["Almonds", "Cashews", "Raisins"], sizes: ["100g", "250g"] } },
    { id: 185, name: "Instant Noodles", category: "Pantry", description: "Quick-cook noodles.", image: "https://via.placeholder.com/250x150?text=Instant+Noodles", details: { brands: ["Maggi", "Yippee"], sizes: ["70g", "280g"] } },
    { id: 186, name: "Pasta", category: "Pantry", description: "Pasta for meals.", image: "https://via.placeholder.com/250x150?text=Pasta", details: { types: ["Macaroni", "Spaghetti"], sizes: ["200g", "500g"] } },
    { id: 187, name: "Oats", category: "Pantry", description: "Oats for breakfast.", image: "https://via.placeholder.com/250x150?text=Oats", details: { brands: ["Bagrry’s", "Quaker"], sizes: ["500g", "1kg"] } },
    { id: 188, name: "Cornflakes", category: "Pantry", description: "Cornflakes for breakfast.", image: "https://via.placeholder.com/250x150?text=Cornflakes", details: { brands: ["Kellogg’s"], sizes: ["250g", "500g"] } },
    { id: 189, name: "Drinking Chocolate", category: "Pantry", description: "Chocolate powder for drinks.", image: "https://via.placeholder.com/250x150?text=Drinking+Chocolate", details: { brands: ["Cadbury"], sizes: ["200g"] } },
    { id: 190, name: "Health Drinks", category: "Pantry", description: "Health drink powders.", image: "https://via.placeholder.com/250x150?text=Health+Drinks", details: { brands: ["Horlicks", "Boost"], sizes: ["500g", "1kg"] } },
    { id: 191, name: "Disposable Plates", category: "Pantry", description: "Plates for events.", image: "https://via.placeholder.com/250x150?text=Disposable+Plates", details: { sizes: ["Small", "Large"] } },
    { id: 192, name: "Disposable Cups", category: "Pantry", description: "Cups for beverages.", image: "https://via.placeholder.com/250x150?text=Disposable+Cups", details: { sizes: ["100ml", "200ml"] } },
    { id: 193, name: "Disposable Spoons", category: "Pantry", description: "Spoons for events.", image: "https://via.placeholder.com/250x150?text=Disposable+Spoons", details: {} },
    { id: 194, name: "Aluminium Foil", category: "Pantry", description: "Foil for food wrapping.", image: "https://via.placeholder.com/250x150?text=Aluminium+Foil", details: { sizes: ["10m", "20m"] } },
    { id: 195, name: "Cling Wrap", category: "Pantry", description: "Wrap for food storage.", image: "https://via.placeholder.com/250x150?text=Cling+Wrap", details: { sizes: ["10m", "20m"] } },
    { id: 196, name: "Gift Pens", category: "Return Gifts", description: "Pens for gifting.", image: "https://via.placeholder.com/250x150?text=Gift+Pens", details: { brands: ["Parker", "Reynolds"] } },
    { id: 197, name: "Keychains", category: "Return Gifts", description: "Keychains for gifts.", image: "https://via.placeholder.com/250x150?text=Keychains", details: { types: ["Metal", "Plastic"] } },
    { id: 198, name: "Photo Frames", category: "Return Gifts", description: "Frames for photos.", image: "https://via.placeholder.com/250x150?text=Photo+Frames", details: { sizes: ["4x6", "5x7"] } },
    { id: 199, name: "Mugs", category: "Return Gifts", description: "Mugs for gifting.", image: "https://via.placeholder.com/250x150?text=Gift+Mugs", details: { types: ["Ceramic", "Plastic"] } },
    { id: 200, name: "Diaries", category: "Return Gifts", description: "Diaries for gifting.", image: "https://via.placeholder.com/250x150?text=Diaries", details: { sizes: ["A5", "A6"] } },
    { id: 201, name: "Notebooks", category: "Return Gifts", description: "Notebooks for gifting.", image: "https://via.placeholder.com/250x150?text=Gift+Notebooks", details: { sizes: ["A5", "A6"] } },
    { id: 202, name: "Pencil Sets", category: "Return Gifts", description: "Sets of pencils.", image: "https://via.placeholder.com/250x150?text=Pencil+Sets", details: { brands: ["Apsara", "Nataraj"] } },
    { id: 203, name: "Crayon Sets", category: "Return Gifts", description: "Sets of crayons.", image: "https://via.placeholder.com/250x150?text=Crayon+Sets", details: { brands: ["Doms", "Camel"] } },
    { id: 204, name: "Color Pencil Sets", category: "Return Gifts", description: "Sets of color pencils.", image: "https://via.placeholder.com/250x150?text=Color+Pencil+Sets", details: { brands: ["Faber-Castell", "Doms"] } },
    { id: 205, name: "Water Bottles", category: "Return Gifts", description: "Bottles for gifting.", image: "https://via.placeholder.com/250x150?text=Gift+Water+Bottles", details: { sizes: ["500ml", "1L"] } },
    { id: 206, name: "Lunch Boxes", category: "Return Gifts", description: "Boxes for lunches.", image: "https://via.placeholder.com/250x150?text=Lunch+Boxes", details: { types: ["Single", "Double"] } },
    { id: 207, name: "Pouches", category: "Return Gifts", description: "Pouches for storage.", image: "https://via.placeholder.com/250x150?text=Pouches", details: { types: ["Cloth", "Plastic"] } },
    { id: 208, name: "Coin Banks", category: "Return Gifts", description: "Banks for coins.", image: "https://via.placeholder.com/250x150?text=Coin+Banks", details: { types: ["Plastic", "Metal"] } },
    { id: 209, name: "Decorative Candles", category: "Return Gifts", description: "Candles for decoration.", image: "https://via.placeholder.com/250x150?text=Decorative+Candles", details: {} },
    { id: 210, name: "Scented Candles", category: "Return Gifts", description: "Candles with scents.", image: "https://via.placeholder.com/250x150?text=Scented+Candles", details: {} },
    { id: 211, name: "Gift Bags", category: "Return Gifts", description: "Bags for gifting.", image: "https://via.placeholder.com/250x150?text=Gift+Bags", details: { sizes: ["Small", "Medium"] } },
    { id: 212, name: "Tote Bags", category: "Return Gifts", description: "Tote bags for gifting.", image: "https://via.placeholder.com/250x150?text=Tote+Bags", details: {} },
    { id: 213, name: "Wrist Bands", category: "Return Gifts", description: "Bands for wrists.", image: "https://via.placeholder.com/250x150?text=Wrist+Bands", details: { types: ["Silicone", "Cloth"] } },
    { id: 214, name: "Badges", category: "Return Gifts", description: "Badges for events.", image: "https://via.placeholder.com/250x150?text=Gift+Badges", details: {} },
    { id: 215, name: "Stickers", category: "Return Gifts", description: "Stickers for gifting.", image: "https://via.placeholder.com/250x150?text=Gift+Stickers", details: { types: ["Cartoon", "Glitter"] } },
    { id: 216, name: "Greeting Cards", category: "Return Gifts", description: "Cards for greetings.", image: "https://via.placeholder.com/250x150?text=Greeting+Cards", details: {} },
    { id: 217, name: "Bookmarks", category: "Return Gifts", description: "Bookmarks for books.", image: "https://via.placeholder.com/250x150?text=Bookmarks", details: { types: ["Paper", "Metal"] } },
    { id: 218, name: "Magnets", category: "Return Gifts", description: "Decorative magnets.", image: "https://via.placeholder.com/250x150?text=Magnets", details: {} },
    { id: 219, name: "Mini Notebooks", category: "Return Gifts", description: "Small notebooks for gifting.", image: "https://via.placeholder.com/250x150?text=Mini+Notebooks", details: { size: "A7" } },
    { id: 220, name: "Pen Holders", category: "Return Gifts", description: "Holders for pens.", image: "https://via.placeholder.com/250x150?text=Pen+Holders", details: {} },
    { id: 221, name: "USB Drives", category: "Others", description: "Drives for data storage.", image: "https://via.placeholder.com/250x150?text=USB+Drives", details: { capacities: ["8GB", "16GB", "32GB"] } },
    { id: 222, name: "Mouse Pads", category: "Others", description: "Pads for computer mice.", image: "https://via.placeholder.com/250x150?text=Mouse+Pads", details: {} },
    { id: 223, name: "Laptop Sleeves", category: "Others", description: "Sleeves for laptops.", image: "https://via.placeholder.com/250x150?text=Laptop+Sleeves", details: { sizes: ["13 inch", "15 inch"] } },
    { id: 224, name: "Phone Covers", category: "Others", description: "Covers for phones.", image: "https://via.placeholder.com/250x150?text=Phone+Covers", details: {} },
    { id: 225, name: "Screen Protectors", category: "Others", description: "Protectors for phone screens.", image: "https://via.placeholder.com/250x150?text=Screen+Protectors", details: {} },
    { id: 226, name: "Earphones", category: "Others", description: "Earphones for audio.", image: "https://via.placeholder.com/250x150?text=Earphones", details: { types: ["Wired", "Wireless"] } },
    { id: 227, name: "Power Banks", category: "Others", description: "Portable chargers.", image: "https://via.placeholder.com/250x150?text=Power+Banks", details: { capacities: ["5000mAh", "10000mAh"] } },
    { id: 228, name: "Chargers", category: "Others", description: "Chargers for devices.", image: "https://via.placeholder.com/250x150?text=Chargers", details: { types: ["USB", "Type-C"] } },
    { id: 229, name: "Cables", category: "Others", description: "Cables for devices.", image: "https://via.placeholder.com/250x150?text=Cables", details: { types: ["USB", "Type-C", "Lightning"] } },
    { id: 230, name: "Extension Cords", category: "Others", description: "Cords for power extension.", image: "https://via.placeholder.com/250x150?text=Extension+Cords", details: { lengths: ["3m", "5m"] } },
    { id: 231, name: "LED Bulbs", category: "Others", description: "Energy-saving bulbs.", image: "https://via.placeholder.com/250x150?text=LED+Bulbs", details: { watts: ["9W", "12W"] } },
    { id: 232, name: "Batteries", category: "Others", description: "Batteries for devices.", image: "https://via.placeholder.com/250x150?text=Batteries", details: { types: ["AA", "AAA"] } },
    { id: 233, name: "Torch Lights", category: "Others", description: "Portable lights.", image: "https://via.placeholder.com/250x150?text=Torch+Lights", details: { types: ["Rechargeable", "Battery"] } },
    { id: 234, name: "Emergency Lights", category: "Others", description: "Lights for emergencies.", image: "https://via.placeholder.com/250x150?text=Emergency+Lights", details: {} },
    { id: 235, name: "Wall Clocks", category: "Others", description: "Clocks for walls.", image: "https://via.placeholder.com/250x150?text=Wall+Clocks", details: {} },
    { id: 236, name: "Table Clocks", category: "Others", description: "Clocks for tables.", image: "https://via.placeholder.com/250x150?text=Table+Clocks", details: {} },
    { id: 237, name: "Wrist Watches", category: "Others", description: "Watches for timekeeping.", image: "https://via.placeholder.com/250x150?text=Wrist+Watches", details: {} },
    { id: 238, name: "Sunglasses", category: "Others", description: "Glasses for sun protection.", image: "https://via.placeholder.com/250x150?text=Sunglasses", details: {} },
    { id: 239, name: "Umbrellas", category: "Others", description: "Umbrellas for rain.", image: "https://via.placeholder.com/250x150?text=Umbrellas", details: { types: ["Foldable", "Standard"] } },
    { id: 240, name: "Raincoats", category: "Others", description: "Coats for rain protection.", image: "https://via.placeholder.com/250x150?text=Raincoats", details: { sizes: ["Medium", "Large"] } },
    { id: 241, name: "First Aid Kits", category: "Others", description: "Kits for emergencies.", image: "https://via.placeholder.com/250x150?text=First+Aid+Kits", details: {} },
    { id: 242, name: "Thermometers", category: "Others", description: "Devices for temperature.", image: "https://via.placeholder.com/250x150?text=Thermometers", details: { types: ["Digital", "Infrared"] } },
    { id: 243, name: "Blood Pressure Monitors", category: "Others", description: "Monitors for blood pressure.", image: "https://via.placeholder.com/250x150?text=BP+Monitors", details: {} },
    { id: 244, name: "Weighing Scales", category: "Others", description: "Scales for weight.", image: "https://via.placeholder.com/250x150?text=Weighing+Scales", details: { types: ["Digital", "Analog"] } },
    { id: 245, name: "Yoga Mats", category: "Others", description: "Mats for yoga.", image: "https://via.placeholder.com/250x150?text=Yoga+Mats", details: {} },
    { id: 246, name: "Exercise Bands", category: "Others", description: "Bands for exercise.", image: "https://via.placeholder.com/250x150?text=Exercise+Bands", details: {} },
    { id: 247, name: "Jump Ropes", category: "Others", description: "Ropes for fitness.", image: "https://via.placeholder.com/250x150?text=Jump+Ropes", details: {} },
    { id: 248, name: "Badminton Rackets", category: "Others", description: "Rackets for badminton.", image: "https://via.placeholder.com/250x150?text=Badminton+Rackets", details: { brands: ["Yonex"] } },
    { id: 249, name: "Shuttlecocks", category: "Others", description: "Shuttlecocks for badminton.", image: "https://via.placeholder.com/250x150?text=Shuttlecocks", details: { brands: ["Yonex"] } },
    { id: 250, name: "Cricket Bats", category: "Others", description: "Bats for cricket.", image: "https://via.placeholder.com/250x150?text=Cricket+Bats", details: { sizes: ["Junior", "Senior"] } },
    { id: 251, name: "Cricket Balls", category: "Others", description: "Balls for cricket.", image: "https://via.placeholder.com/250x150?text=Cricket+Balls", details: { types: ["Leather", "Tennis"] } },
    { id: 252, name: "Football", category: "Others", description: "Balls for football.", image: "https://via.placeholder.com/250x150?text=Football", details: { sizes: ["4", "5"] } },
    { id: 253, name: "Basketball", category: "Others", description: "Balls for basketball.", image: "https://via.placeholder.com/250x150?text=Basketball", details: { sizes: ["6", "7"] } },
    { id: 254, name: "Volleyball", category: "Others", description: "Balls for volleyball.", image: "https://via.placeholder.com/250x150?text=Volleyball", details: {} },
    { id: 255, name: "Table Tennis Rackets", category: "Others", description: "Rackets for table tennis.", image: "https://via.placeholder.com/250x150?text=Table+Tennis+Rackets", details: {} },
    { id: 256, name: "Table Tennis Balls", category: "Others", description: "Balls for table tennis.", image: "https://via.placeholder.com/250x150?text=Table+Tennis+Balls", details: {} },
    { id: 257, name: "Chess Boards", category: "Others", description: "Boards for chess.", image: "https://via.placeholder.com/250x150?text=Chess+Boards", details: { types: ["Wooden", "Plastic"] } },
    { id: 258, name: "Carrom Boards", category: "Others", description: "Boards for carrom.", image: "https://via.placeholder.com/250x150?text=Carrom+Boards", details: { sizes: ["Standard", "Large"] } },
    { id: 259, name: "Carrom Coins", category: "Others", description: "Coins for carrom.", image: "https://via.placeholder.com/250x150?text=Carrom+Coins", details: {} },
    { id: 260, name: "Ludo Boards", category: "Others", description: "Boards for ludo.", image: "https://via.placeholder.com/250x150?text=Ludo+Boards", details: {} },
    { id: 261, name: "Snakes and Ladders", category: "Others", description: "Boards for snakes and ladders.", image: "https://via.placeholder.com/250x150?text=Snakes+and+Ladders", details: {} },
    { id: 262, name: "Playing Cards", category: "Others", description: "Cards for games.", image: "https://via.placeholder.com/250x150?text=Playing+Cards", details: {} },
    { id: 263, name: "Puzzle Games", category: "Others", description: "Puzzles for entertainment.", image: "https://via.placeholder.com/250x150?text=Puzzle+Games", details: { types: ["Jigsaw", "Brain Teaser"] } },
    { id: 264, name: "Rubik’s Cube", category: "Others", description: "Cubes for puzzles.", image: "https://via.placeholder.com/250x150?text=Rubik’s+Cube", details: { sizes: ["3x3", "4x4"] } },
    { id: 265, name: "Board Games", category: "Others", description: "Various board games.", image: "https://via.placeholder.com/250x150?text=Board+Games", details: { types: ["Monopoly", "Scrabble"] } },
    { id: 266, name: "Toy Cars", category: "Others", description: "Cars for kids.", image: "https://via.placeholder.com/250x150?text=Toy+Cars", details: {} },
    { id: 267, name: "Dolls", category: "Others", description: "Dolls for kids.", image: "https://via.placeholder.com/250x150?text=Dolls", details: {} },
    { id: 268, name: "Action Figures", category: "Others", description: "Figures for play.", image: "https://via.placeholder.com/250x150?text=Action+Figures", details: {} },
    { id: 269, name: "Building Blocks", category: "Others", description: "Blocks for construction.", image: "https://via.placeholder.com/250x150?text=Building+Blocks", details: {} },
    { id: 270, name: "Soft Toys", category: "Others", description: "Plush toys for kids.", image: "https://via.placeholder.com/250x150?text=Soft+Toys", details: {} },
]
const container = document.getElementById("cardContainer");
for (let i = 0; i < products.length; i++) { // Changed loop condition
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h3> ${i + 1} . ${products[i].name}</h3>
    <p>${products[i].description}</p>
    `
    container.appendChild(card);
}
// Gsap for all cards
const sitem = document.querySelectorAll('.card')
sitem.forEach(element => {
    gsap.from(element, {
        opacity: 0,
        duration: 0.2,
        y: 100,

    })
});