(()=>{
    const menuButton=document.getElementById("menuButton");
    const mobileMenu=document.getElementById("mobileMenu");
    if(menuButton&&mobileMenu){
        menuButton.addEventListener("click",()=>mobileMenu.classList.toggle("open"));
        mobileMenu.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>mobileMenu.classList.remove("open")));
    }
})();

(()=>{
    const siteName="Sanafur HU";
    const page=window.location.pathname.split("/").pop().toLowerCase()||"index.html";

    document.querySelectorAll(".brand-name").forEach(brand=>brand.textContent="SANAFUR HU");
document.querySelectorAll(".brand .logo-box").forEach(box=>{
    box.innerHTML='<span class="sanafur-mark" aria-hidden="true">S</span>';
    Object.assign(box.style,{display:"grid",placeItems:"center",background:"linear-gradient(135deg,#6d4aff,#42d5c7)"});
    Object.assign(box.firstElementChild.style,{fontFamily:"Manrope, sans-serif",fontSize:"27px",fontWeight:"900",color:"#fff",textShadow:"2px 2px 0 #17131f"});
});
    document.querySelectorAll('a[href="team.html"]').forEach(link=>link.textContent="من نحن");

    const footerCredit=document.querySelector("footer .footer > span");
    if(footerCredit){
        footerCredit.textContent="© 2026 Sanafur HU — تنفيذ Ai School بالتعاون مع Vortexa وبشراكة استراتيجية مع مبادرات الجامعة الهاشمية";
    }

    if(page==="team.html"){
        document.title="من نحن | Sanafur HU";
        const aboutButton=document.querySelector(".nav-btn");
        if(aboutButton){
            aboutButton.href="#partners";
            aboutButton.textContent="المبادرات الشريكة";
        }

        /*
         * المبادرات الطلابية الشريكة فقط
         * --------------------------------
         * أضف كل مبادرة كعنصر جديد داخل القائمة التالية.
         * اترك أي رابط فارغًا حتى لا يظهر زرّه.
         */
        const PARTNER_INITIATIVES=[
            /*
            {
                name:"اسم المبادرة",
                description:"وصف مختصر عن المبادرة وما تقدمه للطلاب.",
                logo:"assets/partners/initiative-logo.jpg",
                links:{
                    instagram:"ضع-رابط-إنستغرام-هنا",
                    facebook:"ضع-رابط-فيسبوك-هنا",
                    whatsapp:"ضع-رابط-واتساب-هنا",
                    website:"" // اتركه فارغًا إذا لم يوجد موقع
                }
            }
            */
        ];
        const partnerLinkLabels={instagram:"Instagram",facebook:"Facebook",whatsapp:"WhatsApp",website:"الموقع"};
        const partnerInitiativesHtml=PARTNER_INITIATIVES.length
            ? PARTNER_INITIATIVES.map((initiative)=>{
                const logo=initiative.logo
                    ? `<div class="partner-logo"><img src="${initiative.logo}" alt="شعار ${initiative.name}"></div>`
                    : '<div class="partner-logo partner-logo-placeholder" aria-hidden="true"><span>✦</span></div>';
                const links=Object.entries(partnerLinkLabels)
                    .filter(([key])=>initiative.links&&initiative.links[key])
                    .map(([key,label])=>`<a href="${initiative.links[key]}" target="_blank" rel="noreferrer">${label}</a>`)
                    .join("");
                return `<article class="partner-card">${logo}<span class="partner-type">مبادرة شريكة</span><h3>${initiative.name}</h3><p>${initiative.description}</p><div class="partner-links">${links||"<span>قنوات التواصل تُضاف قريبًا</span>"}</div></article>`;
            }).join("")
            : '<article class="partner-card partner-empty-card"><div class="partner-logo partner-logo-placeholder" aria-hidden="true"><span>✦</span></div><span class="partner-type">المبادرات الشريكة</span><h3>سيتم إضافة المبادرات الشريكة هنا</h3><p>هذه المساحة مخصصة حصريًا للمبادرات الطلابية الشريكة عند اعتمادها.</p></article>';
        const main=document.querySelector("main");
        if(main)main.className="about-page";
        if(main)main.innerHTML=`
<section class="page-hero about-hero"><div class="container"><a class="back-link" href="index.html">→ العودة للرئيسية</a><div class="section-header"><div class="eyebrow"><span class="dot"></span>من نحن</div><h2>تعليم يصنع مهارة.<br>ومهارة تفتح باب دخل.</h2><p>Sanafur HU تجربة طلابية نُفذت بواسطة Ai School، بالتعاون مع فريق Vortexa، وبشراكات استراتيجية تضع الطالب وفرصه في قلب كل خطوة.</p></div></div></section>
<section class="section about-ai" id="ai-school"><div class="container"><article class="about-feature ai-feature"><div class="about-brand-visual"><div class="brand-logo-frame ai-logo-frame"><img src="assets/aischool-logo.png" alt="شعار Ai School"></div><span class="about-badge">المنفّذ وصاحب الرؤية التعليمية</span></div><div class="about-feature-copy"><div class="eyebrow"><span class="dot"></span>Ai School</div><h1>من الصفر إلى مهارة مطلوبة… ومن المهارة إلى دخل حقيقي.</h1><p class="about-lead"><strong>Ai School أول منصة عربية دولية</strong> تعلّمك كيف تستفيد من الذكاء الاصطناعي لبناء مصدر دخل، حتى لو بدأت بدون خبرة تقنية.</p><p>لا نعطيك معلومات نظرية وتنتهي القصة؛ نأخذك في مسار عملي يبدأ بتعلّم المهارات التي يطلبها السوق، ثم تحويلها إلى خدمة أو منتج، وتسعيرها، وبناء عرض قوي لها، وتسويقها بالطريقة التي توصلك إلى أول عميل وفرصة حقيقية.</p><div class="value-points"><span>تعلم من الصفر</span><span>مهارات مطلوبة</span><span>مشاريع عملية</span><span>تسويق وبيع</span></div><div class="social-links ai-social-links" aria-label="روابط Ai School"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Ai School على إنستغرام"><b><i class="fa-brands fa-instagram" aria-hidden="true"></i></b><span>Instagram</span></a><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Ai School على فيسبوك"><b><i class="fa-brands fa-facebook-f" aria-hidden="true"></i></b><span>Facebook</span></a><a href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="Ai School على واتساب"><b><i class="fa-brands fa-whatsapp" aria-hidden="true"></i></b><span>WhatsApp</span></a><a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="Ai School على تيك توك"><b><i class="fa-brands fa-tiktok" aria-hidden="true"></i></b><span>TikTok</span></a><a href="index.html"><b><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></b><span>الموقع</span></a></div></div></article></div></section>
<section class="section" id="vortexa"><div class="container"><article class="about-feature vortexa-feature"><div class="about-brand-visual"><div class="brand-logo-frame vortexa-logo-frame"><img src="vortexa-logo.jpg" alt="شعار Vortexa"></div><span class="about-badge">الشريك التقني والطلابي</span></div><div class="about-feature-copy"><div class="eyebrow"><span class="dot"></span>بالتعاون مع Vortexa</div><h2>خبرة طلابية تعرف الجامعة من الداخل.</h2><p class="about-lead">Vortexa فريق تقني طلابي انطلق من الجامعة الهاشمية ليحوّل احتياجات الطلبة اليومية إلى أدوات رقمية واضحة، سريعة ومفيدة.</p><p>ساهم الفريق في تطوير التجربة، تنظيم المحتوى الجامعي، وربط الأدوات بالواقع الحقيقي للطالب؛ حتى تبقى Sanafur HU قريبة من أسئلة الطالب واحتياجاته منذ أول فصل.</p><div class="social-links vortexa-social-links" aria-label="روابط Vortexa"><a href="https://www.vortex-a.com" target="_blank" rel="noreferrer"><b><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></b><span>الموقع</span></a><a href="https://instagram.com/vorteam2025/" target="_blank" rel="noreferrer"><b><i class="fa-brands fa-instagram" aria-hidden="true"></i></b><span>Instagram</span></a><a href="https://facebook.com/profile.php?id=61583873862492" target="_blank" rel="noreferrer"><b><i class="fa-brands fa-facebook-f" aria-hidden="true"></i></b><span>Facebook</span></a><a href="https://chat.whatsapp.com/ERc9AM3qSQg6xhWxpwpAYt" target="_blank" rel="noreferrer"><b><i class="fa-brands fa-whatsapp" aria-hidden="true"></i></b><span>WhatsApp</span></a><a href="https://linkedin.com/in/vortexa-team-373121372/" target="_blank" rel="noreferrer"><b><i class="fa-brands fa-linkedin-in" aria-hidden="true"></i></b><span>LinkedIn</span></a></div></div></article></div></section>
<section class="section strategic-section" id="partners"><div class="container"><div class="section-header"><div class="eyebrow"><span class="dot"></span>المبادرات الشريكة</div><h2>مبادرات طلابية نتشارك معها الأثر.</h2><p>مساحة مخصصة للمبادرات الطلابية الشريكة وروابطها، حتى يصل الطالب إلى المجتمع والدعم الأقرب له.</p></div><div class="partner-grid">${partnerInitiativesHtml}</div></div></section>`;
        return;
    }

    document.title=document.title.replace(/Vortexa/gi,siteName);
    const main=document.querySelector("main");
    if(!main)return;
    const walker=document.createTreeWalker(main,NodeFilter.SHOW_TEXT);
    let node;
    while((node=walker.nextNode())){
        node.nodeValue=node.nodeValue.replace(/VORTEXA|Vortexa/g,siteName);
    }
})();
