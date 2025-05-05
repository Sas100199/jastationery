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
            scrollTrigger: {
                trigger: element,
                start: "bottom 90%", // Animation starts when the bottom of the element is 90% from the top of the viewport
                scroller: ".card-container",
                // scrub: 1,
    
            }
        })
    });
    // sitem.forEach(element => {
    //     gsap.from(element, {
    //         opacity: 0,
    //         duration: 0.2,
    //         y: 100,


    //     })
    // });



})