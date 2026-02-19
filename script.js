// ===== Translations =====
const translations = {
    ko: {
        nav: { works: '포트폴리오', products: '제품', about: '회사소개', contact: '연락처' },
        hero: {
            subtitle: 'Lighting Design Studio',
            title1: '빛으로',
            title2: '공간을',
            title3: '그리다',
            desc: '공간과 감성에 어울리는 조명 디자인으로 삶의 질을 높입니다.',
            cta: '포트폴리오 보기'
        },
        works: { title: '포트폴리오', subtitle: '공간별 조명 디자인 프로젝트' },
        gallery: { 
            empty: "프로젝트가 없습니다. '프로젝트 추가' 버튼으로 새 프로젝트를 추가하세요.",
            noCategory: '이 카테고리에 프로젝트가 없습니다.'
        },
        products: {
            title: '제품',
            subtitle: '조명 제품 카탈로그',
            addBtn: '제품 추가',
            empty: "제품이 없습니다. '제품 추가' 버튼으로 새 제품을 등록하세요."
        },
        editProject: {
            title: '프로젝트 수정',
            btn: '수정',
            submit: '저장',
            passwordTitle: '프로젝트 수정',
            passwordMessage: '수정하려면 비밀번호를 입력하세요.',
            passwordLabel: '변경 비밀번호',
            passwordConfirm: '확인',
            wrongPassword: '비밀번호가 일치하지 않습니다.',
            success: '수정되었습니다.'
        },
        editProduct: {
            title: '제품 수정',
            btn: '수정',
            submit: '저장',
            passwordTitle: '제품 수정',
            passwordMessage: '수정하려면 비밀번호를 입력하세요.',
            passwordLabel: '변경 비밀번호',
            passwordConfirm: '확인',
            wrongPassword: '비밀번호가 일치하지 않습니다.',
            success: '수정되었습니다.'
        },
        addProduct: {
            title: '제품 추가',
            image: '제품 이미지',
            imageHint: '클릭하여 제품 이미지 업로드 (최대 10MB)',
            nameKo: '제품명 (한글)',
            nameEn: '제품명 (영어)',
            descKo: '설명 (한글)',
            descEn: '설명 (영어)',
            cancel: '취소',
            submit: '추가하기'
        },
        filter: {
            all: '전체',
            residential: '경관조명',
            commercial: '스포츠조명',
            public: '공공시설',
            exhibition: '전시회'
        },
        project: {
            viewDetail: '자세히 보기',
            gangnam: { title: '강남 아파트 인테리어', subtitle: '침실 & 거실 조명' },
            cafe: { title: '서울 카페 라운지', subtitle: '분위기 조명 설계' },
            museum: { title: '시립 미술관 로비', subtitle: '전시 조명 시스템' },
            hannam: { title: '한남동 단독주택', subtitle: '야간 정원 조명' },
            design2024: { title: '디자인 서울 2024', subtitle: '메인 전시 조명' },
            myungdong: { title: '명동 리테일 스토어', subtitle: '상품 전시 조명' }
        },
        about: {
            title: '회사소개',
            tagline: '빛으로 일상을 업그레이드하는, 탄탄테크(주)',
            subtitle: '단순히 밝히는 것을 넘어, 공간에 감성과 안심을 채웁니다.',
            intro: '탄탄테크 주식회사는 전문적인 조명 솔루션을 통해 도시의 밤을 아름답게 수놓고, 사람들의 일상을 더욱 안전하게 만드는 조명 전문 기업입니다.',
            coreTitle: '■ 핵심 비즈니스',
            landscapeLabel: 'LED 경관조명',
            landscapeDesc: '도심의 야경을 화려한 갤러리처럼 연출하여 공간의 가치를 높입니다.',
            securityLabel: 'LED 보안등',
            securityDesc: '어두운 골목길을 내 집 마당처럼 안심하고 다닐 수 있는 환경으로 바꿉니다.',
            sportsLabel: '스포츠조명',
            sportsDesc: '경기장과 운동 시설에 최적화된 조명으로 선수와 관중 모두가 쾌적하게 즐길 수 있는 환경을 만들어드립니다.',
            solarLabel: '태양광조명',
            solarDesc: '친환경 태양광 에너지를 활용한 조명으로 에너지 절감과 함께 지속 가능한 조명 환경을 제공합니다.',
            diffTitle: '■ 탄탄테크만의 차별점',
            diffText: "'원스톱 토털 서비스' - 기획 및 설계부터 생산, 설치 및 지원, 그리고 철저한 사후관리(A/S)까지 모든 과정을 '탄탄'하게 책임집니다. 고객이 믿고 맡길 수 있는 정직한 공정을 약속합니다.",
            valuesTitle: '■ 3가지 핵심 가치',
            techName: '기술(Technology)',
            techDesc: '끊임없는 연구로 혁신적인 조명 기술을 선보입니다.',
            designName: '디자인(Design)',
            designDesc: '공간과 조화롭게 어우러지는 최상의 미학을 추구합니다.',
            safetyName: '안전(Safety)',
            safetyDesc: '사람의 안전을 최우선으로 생각하는 빛을 만듭니다.',
            closing: '탄탄테크는 앞으로도 새로운 빛의 경험을 선사하며, 늘 여러분 곁에서 반짝반짝 함께하겠습니다.'
        },
        contact: {
            title: '프로젝트 문의',
            subtitle: '조명 디자인 프로젝트 협업을 원하시면 연락주세요.',
            name: '이름',
            email: '이메일',
            projectType: '프로젝트 유형',
            description: '프로젝트 설명',
            submit: '문의 보내기'
        },
        modal: { image: '프로젝트 이미지', defaultDesc: '프로젝트에 대한 상세한 설명이 여기에 표시됩니다.' },
        delete: {
            title: '프로젝트 삭제',
            titleProduct: '제품 삭제',
            message: '정말 이 프로젝트를 삭제하시겠습니까?',
            messageProduct: '정말 이 제품을 삭제하시겠습니까?',
            passwordLabel: '삭제 비밀번호',
            passwordPlaceholder: '비밀번호 입력',
            cancel: '취소',
            confirm: '삭제',
            wrongPassword: '비밀번호가 일치하지 않습니다.',
            success: '삭제되었습니다.',
            successProduct: '제품이 삭제되었습니다.'
        },
        addProject: {
            btn: '프로젝트 추가',
            title: '프로젝트 추가',
            image: '이미지',
            imageHint: '클릭하여 이미지 업로드 (최대 10MB)',
            titleKo: '제목 (한글)',
            titleEn: '제목 (영어)',
            category: '카테고리',
            subtitleKo: '부제목 (한글)',
            subtitleEn: '부제목 (영어)',
            descKo: '설명 (한글)',
            descEn: '설명 (영어)',
            cancel: '취소',
            submit: '추가하기'
        }
    },
    en: {
        nav: { works: 'Portfolio', products: 'Products', about: 'Company', contact: 'Contact' },
        hero: {
            subtitle: 'Lighting Design Studio',
            title1: 'Drawing',
            title2: 'Spaces',
            title3: 'with Light',
            desc: 'Enhancing quality of life through lighting design that harmonizes with space and emotion.',
            cta: 'View Portfolio'
        },
        works: { title: 'Portfolio', subtitle: 'Lighting design projects by space type' },
        gallery: { 
            empty: "No projects yet. Add a new project using the 'Add Project' button.",
            noCategory: 'No projects in this category.'
        },
        products: {
            title: 'Products',
            subtitle: 'Lighting product catalog',
            addBtn: 'Add Product',
            empty: "No products yet. Add a new product using the 'Add Product' button."
        },
        editProject: {
            title: 'Edit Project',
            btn: 'Edit',
            submit: 'Save',
            passwordTitle: 'Edit Project',
            passwordMessage: 'Enter password to edit.',
            passwordLabel: 'Password',
            passwordConfirm: 'Confirm',
            wrongPassword: 'Incorrect password.',
            success: 'Updated successfully.'
        },
        editProduct: {
            title: 'Edit Product',
            btn: 'Edit',
            submit: 'Save',
            passwordTitle: 'Edit Product',
            passwordMessage: 'Enter password to edit.',
            passwordLabel: 'Password',
            passwordConfirm: 'Confirm',
            wrongPassword: 'Incorrect password.',
            success: 'Updated successfully.'
        },
        addProduct: {
            title: 'Add Product',
            image: 'Product Image',
            imageHint: 'Click to upload product image (Max 10MB)',
            nameKo: 'Product Name (Korean)',
            nameEn: 'Product Name (English)',
            descKo: 'Description (Korean)',
            descEn: 'Description (English)',
            cancel: 'Cancel',
            submit: 'Add'
        },
        filter: {
            all: 'All',
            residential: 'Landscape Lighting',
            commercial: 'Sports Lighting',
            public: 'Public',
            exhibition: 'Exhibition'
        },
        project: {
            viewDetail: 'View Detail',
            gangnam: { title: 'Gangnam Apartment Interior', subtitle: 'Bedroom & Living Room' },
            cafe: { title: 'Seoul Cafe Lounge', subtitle: 'Ambient Lighting Design' },
            museum: { title: 'City Art Museum Lobby', subtitle: 'Exhibition Lighting System' },
            hannam: { title: 'Hannam Single House', subtitle: 'Night Garden Lighting' },
            design2024: { title: 'Design Seoul 2024', subtitle: 'Main Exhibition Lighting' },
            myungdong: { title: 'Myeongdong Retail Store', subtitle: 'Product Display Lighting' }
        },
        about: {
            title: 'Company',
            tagline: 'Upgrading daily life with light, TANTANTECH Co., Ltd.',
            subtitle: 'Beyond simply illuminating, we fill spaces with emotion and peace of mind.',
            intro: 'TANTANTECH is a professional lighting company that beautifies the urban nightscape and makes people\'s daily lives safer through expert lighting solutions.',
            coreTitle: '■ Core Business',
            landscapeLabel: 'LED Landscape Lighting',
            landscapeDesc: 'Transforming city nightscapes into galleries that elevate the value of space.',
            securityLabel: 'LED Security Lighting',
            securityDesc: 'Turning dark alleys into safe, reassuring environments like your own backyard.',
            sportsLabel: 'Sports Lighting',
            sportsDesc: 'Lighting optimized for stadiums and athletic facilities, creating comfortable environments for both athletes and spectators.',
            solarLabel: 'Solar Lighting',
            solarDesc: 'Eco-friendly lighting powered by solar energy, offering energy savings and a sustainable lighting environment.',
            diffTitle: '■ Our Differentiation',
            diffText: "'One-Stop Total Service' - From planning and design to production, installation and support, and thorough after-sales (A/S), we reliably handle every step. We promise an honest process you can trust.",
            valuesTitle: '■ Three Core Values',
            techName: 'Technology',
            techDesc: 'Presenting innovative lighting technology through relentless research.',
            designName: 'Design',
            designDesc: 'Pursuing the finest aesthetics that harmonize with space.',
            safetyName: 'Safety',
            safetyDesc: 'Creating light that puts human safety first.',
            closing: 'TANTANTECH will continue to deliver new experiences of light, shining alongside you always.'
        },
        contact: {
            title: 'Project Inquiry',
            subtitle: 'Contact us for lighting design project collaboration.',
            name: 'Name',
            email: 'Email',
            projectType: 'Project Type',
            description: 'Project Description',
            submit: 'Send Inquiry'
        },
        modal: { image: 'Project Image', defaultDesc: 'Detailed project description will be displayed here.' },
        delete: {
            title: 'Delete Project',
            titleProduct: 'Delete Product',
            message: 'Are you sure you want to delete this project?',
            messageProduct: 'Are you sure you want to delete this product?',
            passwordLabel: 'Delete Password',
            passwordPlaceholder: 'Enter password',
            cancel: 'Cancel',
            confirm: 'Delete',
            wrongPassword: 'Password does not match.',
            success: 'Project has been deleted.',
            successProduct: 'Product has been deleted.'
        },
        addProject: {
            btn: 'Add Project',
            title: 'Add Project',
            image: 'Image',
            imageHint: 'Click to upload image (Max 10MB)',
            titleKo: 'Title (Korean)',
            titleEn: 'Title (English)',
            category: 'Category',
            subtitleKo: 'Subtitle (Korean)',
            subtitleEn: 'Subtitle (English)',
            descKo: 'Description (Korean)',
            descEn: 'Description (English)',
            cancel: 'Cancel',
            submit: 'Add'
        }
    }
};

// ===== DOM Elements =====
const navbar = document.querySelector('.navbar');
const themeToggle = document.querySelector('.theme-toggle');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('projectModal');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');
const modalTitle = document.querySelector('.modal-title');
const modalCategory = document.querySelector('.modal-category');
const modalDesc = document.querySelector('.modal-desc');
const modalImage = document.querySelector('.modal-image .placeholder-img');
const contactForm = document.querySelector('.contact-form');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

// ===== 프로젝트 데이터 =====
const projectData = {
    ko: {
        residential: [
            { title: '강남 아파트 인테리어', desc: '침실과 거실을 위한 따뜻한 분위기의 조명 설계. 간접조명과 매인 조명의 밸런스를 맞춰 일상에서 편안한 휴식 공간을 연출했습니다. 스마트 조명 시스템으로 시간대별 자동 조절이 가능합니다.' },
            { title: '한남동 단독주택', desc: '야간 정원을 위한 외부 조명 시스템. 수목 조명과 pathway 조명으로 안전하면서도 분위기 있는 야경을 완성했습니다. 태양광 LED를 활용한 친환경 설계입니다.' }
        ],
        commercial: [
            { title: '서울 카페 라운지', desc: '브런치부터 저녁까지 변화하는 분위기에 맞춘 다이내믹 조명 시스템. 펜던트 조명과 테이블 포커스 조명으로 감성적인 카페 분위기를 연출했습니다.' },
            { title: '명동 리테일 스토어', desc: '상품을 최적의 각도와 밝기로 비추는 전시 조명. CRI 95 이상의 고색재현 LED로 상품의 실제 색상을 정확히 표현하며, 고객의 시선을 자연스럽게 유도합니다.' }
        ],
        public: [
            { title: '시립 미술관 로비', desc: '전시 공간과 맞물리는 로비 조명 설계. 자연광과 인공광의 하모니를 고려하여, 시간대별로 변화하는 빛의 풍경을 구현했습니다. 에너지 효율을 높인 디머 시스템 적용.' }
        ],
        exhibition: [
            { title: '디자인 서울 2024', desc: '메인 전시관을 위한 대규모 조명 연출. 다양한 부스와 전시물에 맞춘 개별 조명 설정으로, 방문객이 각 전시를 최적의 상태로 감상할 수 있도록 설계했습니다.' }
        ]
    },
    en: {
        residential: [
            { title: 'Gangnam Apartment Interior', desc: 'Warm lighting design for bedroom and living room. We balanced indirect and main lighting to create a comfortable rest space. Smart lighting system enables automatic adjustment by time of day.' },
            { title: 'Hannam Single House', desc: 'External lighting system for night garden. Tree and pathway lighting complete a safe yet atmospheric nightscape. Eco-friendly design using solar LED.' }
        ],
        commercial: [
            { title: 'Seoul Cafe Lounge', desc: 'Dynamic lighting system for brunch to evening ambiance. Pendant and table focus lighting create a moody cafe atmosphere.' },
            { title: 'Myeongdong Retail Store', desc: 'Display lighting at optimal angles and brightness. CRI 95+ high color rendering LED accurately expresses product colors and naturally guides customer attention.' }
        ],
        public: [
            { title: 'City Art Museum Lobby', desc: 'Lobby lighting design integrated with exhibition space. Natural and artificial light harmony creates ever-changing lightscapes. Dimmer system for energy efficiency.' }
        ],
        exhibition: [
            { title: 'Design Seoul 2024', desc: 'Large-scale lighting for main exhibition hall. Individual lighting settings per booth and exhibit let visitors experience each display at its best.' }
        ]
    }
};

// ===== Intersection Observer (for scroll animations) =====
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

// ===== Custom Projects (localStorage) =====
const CUSTOM_PROJECTS_KEY = 'tantantech_custom_projects';
// const PORTFOLIO_VERSION = '2'; // 포트폴리오 초기화 시 증가
// (function() {
//     const stored = localStorage.getItem('tantantech_version');
//     if (stored !== PORTFOLIO_VERSION) {
//         localStorage.setItem(CUSTOM_PROJECTS_KEY, '[]');
//         localStorage.setItem('tantantech_version', PORTFOLIO_VERSION);
//     }
// })();

function getCustomProjects() {
    try {
        const data = localStorage.getItem(CUSTOM_PROJECTS_KEY);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        return [];
    }
}

function saveCustomProjects(projects) {
    localStorage.setItem(CUSTOM_PROJECTS_KEY, JSON.stringify(projects));
}

function renderCustomProjects() {
    const gallery = document.querySelector('.gallery');
    const emptyMsg = gallery?.querySelector('.gallery-empty-msg');
    const customItems = gallery?.querySelectorAll('[data-custom-id]');
    customItems?.forEach(el => el.remove());

    const lang = document.documentElement.getAttribute('data-lang') || 'ko';
    const t = translations[lang];
    const customProjects = getCustomProjects();

    customProjects.forEach(project => {
        const title = lang === 'ko' ? project.titleKo : project.titleEn;
        const subtitle = lang === 'ko' ? project.subtitleKo : project.subtitleEn;
        const categoryLabel = t?.filter?.[project.category] || project.category;

        const article = document.createElement('article');
        article.className = `gallery-item ${project.category}`;
        article.dataset.category = project.category;
        article.dataset.customId = project.id;

        const safeTitle = escapeHtml(title || project.titleKo);
        const imgContent = project.imageData
            ? `<img src="${project.imageData}" alt="${safeTitle}" class="custom-project-img">`
            : `<div class="placeholder-img">${escapeHtml(categoryLabel)}</div>`;

        article.innerHTML = `
            <div class="item-image">
                ${imgContent}
                <div class="item-overlay">
                    <h3>${escapeHtml(title || project.titleKo)}</h3>
                    <p>${escapeHtml(subtitle || project.subtitleKo || '')}</p>
                    <div class="item-overlay-actions">
                        <button class="view-detail" type="button">${t?.project?.viewDetail || '자세히 보기'}</button>
                        <button class="edit-project-btn" type="button" data-i18n="editProject.btn">${t?.editProject?.btn || '수정'}</button>
                        <button class="delete-project-btn" type="button" data-i18n="delete.confirm">${t?.delete?.confirm || '삭제'}</button>
                    </div>
                </div>
            </div>
        `;

        gallery?.appendChild(article);
    });

    if (emptyMsg) {
        emptyMsg.style.display = customProjects.length > 0 ? 'none' : 'block';
    }

    // Observe new items for scroll animation
    gallery?.querySelectorAll('[data-custom-id]').forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            animationObserver.observe(item);
    });

    // 현재 선택된 필터 다시 적용
    const activeFilter = document.querySelector('.filter-btn.active')?.dataset?.filter || 'all';
    filterGallery(activeFilter);
}

function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== Navbar Scroll Effect =====
function handleScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);

// ===== Theme Toggle =====
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

themeToggle?.addEventListener('click', toggleTheme);
initTheme();

// ===== Language Toggle =====
function getNestedValue(obj, path) {
    return path.split('.').reduce((o, k) => o?.[k], obj);
}

function setLanguage(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'ko' ? 'ko' : 'en');
    document.title = lang === 'ko' ? 'TANTANTECH | 조명 디자인 포트폴리오' : 'TANTANTECH | Lighting Design Portfolio';
    localStorage.setItem('language', lang);

    const t = translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = getNestedValue(t, key);
        if (value) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const value = getNestedValue(t, key);
        if (value) el.placeholder = value;
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

function initLanguage() {
    const savedLang = localStorage.getItem('language') || 'ko';
    setLanguage(savedLang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
        renderCustomProjects();
        renderCustomProducts();
    });
});
initLanguage();
renderCustomProjects();
renderCustomProducts();

// ===== Custom Products (localStorage) =====
const CUSTOM_PRODUCTS_KEY = 'tantantech_custom_products';

function getCustomProducts() {
    try {
        const data = localStorage.getItem(CUSTOM_PRODUCTS_KEY);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        return [];
    }
}

function saveCustomProducts(products) {
    localStorage.setItem(CUSTOM_PRODUCTS_KEY, JSON.stringify(products));
}

function renderCustomProducts() {
    const gallery = document.querySelector('.products-gallery');
    const emptyMsg = gallery?.querySelector('.products-empty-msg');
    const productItems = gallery?.querySelectorAll('[data-product-id]');
    productItems?.forEach(el => el.remove());

    const lang = document.documentElement.getAttribute('data-lang') || 'ko';
    const products = getCustomProducts();

    products.forEach(product => {
        const name = lang === 'ko' ? product.nameKo : product.nameEn;
        const desc = lang === 'ko' ? product.descKo : product.descEn;
        const article = document.createElement('article');
        article.className = 'product-item';
        article.dataset.productId = product.id;

        const imgContent = product.imageData
            ? `<img src="${product.imageData}" alt="${escapeHtml(name || product.nameKo)}" class="product-img">`
            : `<div class="placeholder-img">${escapeHtml(name || product.nameKo)}</div>`;

        const t = translations[lang];
        article.innerHTML = `
            <div class="product-card">
                <div class="product-image">${imgContent}</div>
                <div class="product-info">
                    <h3>${escapeHtml(name || product.nameKo)}</h3>
                    ${desc ? `<p>${escapeHtml(desc)}</p>` : ''}
                    <div class="product-actions">
                        <button class="edit-product-btn" type="button" data-i18n="editProduct.btn">${t?.editProduct?.btn || '수정'}</button>
                        <button class="delete-product-btn" type="button" data-i18n="delete.confirm">${t?.delete?.confirm || '삭제'}</button>
                    </div>
                </div>
            </div>
        `;
        gallery?.appendChild(article);
    });

    if (emptyMsg) {
        emptyMsg.style.display = products.length > 0 ? 'none' : 'block';
    }
}

// ===== Add Project Modal =====
const addProjectModal = document.getElementById('addProjectModal');
const addProjectBtn = document.getElementById('addProjectBtn');
const addProjectForm = document.getElementById('addProjectForm');
const projectImageInput = document.getElementById('projectImage');
const imageUploadArea = document.getElementById('imageUploadArea');
const uploadPlaceholder = document.getElementById('uploadPlaceholder');
const uploadPreview = document.getElementById('uploadPreview');

function openAddProjectModal() {
    addProjectForm?.reset();
    if (uploadPreview) {
        uploadPreview.src = '';
        uploadPreview.style.display = 'none';
    }
    if (uploadPlaceholder) uploadPlaceholder.style.display = 'flex';
    if (projectImageInput) projectImageInput.value = '';
    addProjectModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAddProjectModal() {
    addProjectModal?.classList.remove('active');
    document.body.style.overflow = '';
}

addProjectBtn?.addEventListener('click', openAddProjectModal);
document.querySelector('.add-modal-close')?.addEventListener('click', closeAddProjectModal);
addProjectModal?.querySelector('.modal-overlay')?.addEventListener('click', closeAddProjectModal);
document.getElementById('cancelAddProject')?.addEventListener('click', closeAddProjectModal);

// 이미지 압축 (localStorage 용량 제한 대응)
function compressImage(dataUrl, maxWidth = 1920, maxHeight = 1080, quality = 0.8) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            let { width, height } = img;
            if (!width || !height) {
                resolve(dataUrl);
                return;
            }
            if (width > maxWidth || height > maxHeight) {
                const ratio = Math.min(maxWidth / width, maxHeight / height);
                width = Math.max(1, Math.floor(width * ratio));
                height = Math.max(1, Math.floor(height * ratio));
            }
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            canvas.toBlob(
                (blob) => {
                    if (!blob) {
                        resolve(dataUrl);
                        return;
                    }
                    const reader = new FileReader();
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = () => resolve(dataUrl);
                    reader.readAsDataURL(blob);
                },
                'image/jpeg',
                quality
            );
        };
        img.onerror = () => reject(new Error('Failed to load image'));
        img.src = dataUrl;
    });
}

// 1MB 초과 시 자동 압축 (1920×1080, JPEG 80%, localStorage 용량 부족 방지)
async function compressImageWhenLarge(dataUrl) {
    if (!dataUrl || !dataUrl.startsWith('data:image')) return dataUrl;
    if (dataUrl.length <= 1024 * 1024) return dataUrl;
    try {
        return await compressImage(dataUrl, 1920, 1080, 0.8);
    } catch (err) {
        console.warn('Image compression failed', err);
        return dataUrl;
    }
}

imageUploadArea?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    projectImageInput?.click();
});

projectImageInput?.addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith('image/')) return;
    const MAX_SIZE = 10 * 1024 * 1024; // 10MB
    if (file.size > MAX_SIZE) {
        const lang = document.documentElement.getAttribute('data-lang') || 'ko';
        alert(lang === 'ko' ? '이미지 크기는 10MB 이하여야 합니다.' : 'Image size must be 10MB or less.');
        e.target.value = '';
        return;
    }
    const reader = new FileReader();
    reader.onload = async (ev) => {
        try {
            let dataUrl = ev.target?.result;
            if (!dataUrl) return;
            if (dataUrl.length > 1024 * 1024) {
                dataUrl = await compressImage(dataUrl);
            }
            if (uploadPreview) {
                uploadPreview.src = dataUrl;
                uploadPreview.style.display = 'block';
            }
            if (uploadPlaceholder) uploadPlaceholder.style.display = 'none';
        } catch (err) {
            console.error('프로젝트 이미지 로드 실패:', err);
            const lang = document.documentElement.getAttribute('data-lang') || 'ko';
            alert(lang === 'ko' ? '이미지 로드에 실패했습니다.' : 'Failed to load image.');
        }
    };
    reader.onerror = () => {
        const lang = document.documentElement.getAttribute('data-lang') || 'ko';
        alert(lang === 'ko' ? '이미지 읽기에 실패했습니다.' : 'Failed to read image.');
    };
    reader.readAsDataURL(file);
});

addProjectForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const titleKo = document.getElementById('projectTitleKo')?.value?.trim();
    const titleEn = document.getElementById('projectTitleEn')?.value?.trim();
    const category = document.getElementById('projectCategory')?.value;
    const subtitleKo = document.getElementById('projectSubtitleKo')?.value?.trim();
    const subtitleEn = document.getElementById('projectSubtitleEn')?.value?.trim();
    const descKo = document.getElementById('projectDescKo')?.value?.trim();
    const descEn = document.getElementById('projectDescEn')?.value?.trim();

    if (!titleKo) {
        const lang = document.documentElement.getAttribute('data-lang') || 'ko';
        alert(lang === 'ko' ? '제목 (한글)을 입력해주세요.' : 'Please enter Title (Korean).');
        return;
    }

    let imageData = null;
    if (uploadPreview?.src && uploadPreview.src.startsWith('data:')) {
        imageData = await compressImageWhenLarge(uploadPreview.src);
    }

    const project = {
        id: 'custom_' + Date.now(),
        titleKo,
        titleEn: titleEn || titleKo,
        subtitleKo: subtitleKo || '',
        subtitleEn: subtitleEn || subtitleKo || '',
        descKo: descKo || '',
        descEn: descEn || descKo || '',
        category: category || 'residential',
        imageData
    };

    try {
        const projects = getCustomProjects();
        projects.push(project);
        saveCustomProjects(projects);
        closeAddProjectModal();
        renderCustomProjects();
    } catch (err) {
        const lang = document.documentElement.getAttribute('data-lang') || 'ko';
        const msg = (err?.name === 'QuotaExceededError' || err?.code === 22)
            ? (lang === 'ko' ? '저장 공간이 부족합니다. 이미지 크기를 줄이거나 다른 이미지를 선택해 주세요.' : 'Storage full. Please use a smaller image or try another image.')
            : (lang === 'ko' ? '저장에 실패했습니다.' : 'Failed to save.');
        alert(msg);
    }
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && addProjectModal?.classList.contains('active')) {
        closeAddProjectModal();
    }
});

// ===== Edit Project Modal =====
const editProjectModal = document.getElementById('editProjectModal');
const editProjectForm = document.getElementById('editProjectForm');
const editProjectImageInput = document.getElementById('editProjectImageInput');
const editProjectImageUploadArea = document.getElementById('editProjectImageUploadArea');
const editProjectUploadPlaceholder = document.getElementById('editProjectUploadPlaceholder');
const editProjectUploadPreview = document.getElementById('editProjectUploadPreview');

function openEditProjectModal(projectId) {
    const project = getCustomProjects().find(p => p.id === projectId);
    if (!project) return;

    document.getElementById('editProjectId').value = projectId;
    document.getElementById('editProjectTitleKo').value = project.titleKo || '';
    document.getElementById('editProjectTitleEn').value = project.titleEn || '';
    document.getElementById('editProjectCategory').value = project.category || 'residential';
    document.getElementById('editProjectSubtitleKo').value = project.subtitleKo || '';
    document.getElementById('editProjectSubtitleEn').value = project.subtitleEn || '';
    document.getElementById('editProjectDescKo').value = project.descKo || '';
    document.getElementById('editProjectDescEn').value = project.descEn || '';

    if (project.imageData) {
        editProjectUploadPreview.src = project.imageData;
        editProjectUploadPreview.style.display = 'block';
        editProjectUploadPlaceholder.style.display = 'none';
    } else {
        editProjectUploadPreview.src = '';
        editProjectUploadPreview.style.display = 'none';
        editProjectUploadPlaceholder.style.display = 'flex';
    }
    editProjectImageInput.value = '';

    editProjectModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeEditProjectModal() {
    editProjectModal?.classList.remove('active');
    document.body.style.overflow = '';
}

document.querySelector('.edit-project-modal-close')?.addEventListener('click', closeEditProjectModal);
editProjectModal?.querySelector('.modal-overlay')?.addEventListener('click', closeEditProjectModal);
document.getElementById('cancelEditProject')?.addEventListener('click', closeEditProjectModal);

editProjectImageUploadArea?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    editProjectImageInput?.click();
});

editProjectImageInput?.addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith('image/')) return;
    const MAX_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
        const lang = document.documentElement.getAttribute('data-lang') || 'ko';
        alert(lang === 'ko' ? '이미지 크기는 10MB 이하여야 합니다.' : 'Image size must be 10MB or less.');
        e.target.value = '';
        return;
    }
    const reader = new FileReader();
    reader.onload = async (ev) => {
        try {
            let dataUrl = ev.target?.result;
            if (!dataUrl) return;
            dataUrl = await compressImageWhenLarge(dataUrl);
            if (editProjectUploadPreview) {
                editProjectUploadPreview.src = dataUrl;
                editProjectUploadPreview.style.display = 'block';
            }
            if (editProjectUploadPlaceholder) editProjectUploadPlaceholder.style.display = 'none';
        } catch (err) {
            console.error('프로젝트 이미지 로드 실패:', err);
            const lang = document.documentElement.getAttribute('data-lang') || 'ko';
            alert(lang === 'ko' ? '이미지 로드에 실패했습니다.' : 'Failed to load image.');
        }
    };
    reader.onerror = () => {
        const lang = document.documentElement.getAttribute('data-lang') || 'ko';
        alert(lang === 'ko' ? '이미지 읽기에 실패했습니다.' : 'Failed to read image.');
    };
    reader.readAsDataURL(file);
});

editProjectForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const lang = document.documentElement.getAttribute('data-lang') || 'ko';
    const t = translations[lang]?.editProject || {};

    const projectId = document.getElementById('editProjectId')?.value;
    const titleKo = document.getElementById('editProjectTitleKo')?.value?.trim();
    const titleEn = document.getElementById('editProjectTitleEn')?.value?.trim();
    const category = document.getElementById('editProjectCategory')?.value;
    const subtitleKo = document.getElementById('editProjectSubtitleKo')?.value?.trim();
    const subtitleEn = document.getElementById('editProjectSubtitleEn')?.value?.trim();
    const descKo = document.getElementById('editProjectDescKo')?.value?.trim();
    const descEn = document.getElementById('editProjectDescEn')?.value?.trim();

    if (!titleKo) {
        alert(lang === 'ko' ? '제목 (한글)을 입력해주세요.' : 'Please enter Title (Korean).');
        return;
    }

    const projects = getCustomProjects();
    const idx = projects.findIndex(p => p.id === projectId);
    if (idx === -1) return;

    let imageData = projects[idx].imageData;
    if (editProjectUploadPreview?.src && editProjectUploadPreview.src.startsWith('data:')) {
        imageData = await compressImageWhenLarge(editProjectUploadPreview.src);
    }

    projects[idx] = {
        ...projects[idx],
        titleKo,
        titleEn: titleEn || titleKo,
        category: category || 'residential',
        subtitleKo: subtitleKo || '',
        subtitleEn: subtitleEn || subtitleKo || '',
        descKo: descKo || '',
        descEn: descEn || descKo || '',
        imageData
    };

    try {
        saveCustomProjects(projects);
        closeEditProjectModal();
        renderCustomProjects();
        alert(t.success || '수정되었습니다.');
    } catch (err) {
        const msg = (err?.name === 'QuotaExceededError' || err?.code === 22)
            ? (lang === 'ko' ? '저장 공간이 부족합니다. 이미지 크기를 줄이거나 다른 이미지를 선택해 주세요.' : 'Storage full. Please use a smaller image or try another image.')
            : (lang === 'ko' ? '저장에 실패했습니다.' : 'Failed to save.');
        alert(msg);
        console.error('프로젝트 수정 실패:', err);
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && editProjectModal?.classList.contains('active')) {
        closeEditProjectModal();
    }
});

// ===== Add Product Modal =====
const addProductModal = document.getElementById('addProductModal');
const addProductBtn = document.getElementById('addProductBtn');
const addProductForm = document.getElementById('addProductForm');
const productImageInput = document.getElementById('productImageInput');
const productImageUploadArea = document.getElementById('productImageUploadArea');
const productUploadPlaceholder = document.getElementById('productUploadPlaceholder');
const productUploadPreview = document.getElementById('productUploadPreview');

function openAddProductModal() {
    addProductForm?.reset();
    if (productUploadPreview) {
        productUploadPreview.src = '';
        productUploadPreview.style.display = 'none';
    }
    if (productUploadPlaceholder) productUploadPlaceholder.style.display = 'flex';
    if (productImageInput) productImageInput.value = '';
    addProductModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAddProductModal() {
    addProductModal?.classList.remove('active');
    document.body.style.overflow = '';
}

addProductBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    openAddProductModal();
});
document.querySelector('.product-modal-close')?.addEventListener('click', closeAddProductModal);
addProductModal?.querySelector('.modal-overlay')?.addEventListener('click', closeAddProductModal);
document.getElementById('cancelAddProduct')?.addEventListener('click', closeAddProductModal);

productImageUploadArea?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    productImageInput?.click();
});

productImageInput?.addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith('image/')) return;
    const MAX_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
        const lang = document.documentElement.getAttribute('data-lang') || 'ko';
        alert(lang === 'ko' ? '이미지 크기는 10MB 이하여야 합니다.' : 'Image size must be 10MB or less.');
        e.target.value = '';
        return;
    }
    const reader = new FileReader();
    reader.onload = async (ev) => {
        try {
            let dataUrl = ev.target?.result;
            if (!dataUrl) return;
            dataUrl = await compressImageWhenLarge(dataUrl);
            if (productUploadPreview) {
                productUploadPreview.src = dataUrl;
                productUploadPreview.style.display = 'block';
            }
            if (productUploadPlaceholder) productUploadPlaceholder.style.display = 'none';
        } catch (err) {
            console.error('제품 이미지 로드 실패:', err);
            const lang = document.documentElement.getAttribute('data-lang') || 'ko';
            alert(lang === 'ko' ? '이미지 로드에 실패했습니다.' : 'Failed to load image.');
        }
    };
    reader.onerror = () => {
        const lang = document.documentElement.getAttribute('data-lang') || 'ko';
        alert(lang === 'ko' ? '이미지 읽기에 실패했습니다.' : 'Failed to read image.');
    };
    reader.readAsDataURL(file);
});

addProductForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nameKo = document.getElementById('productNameKo')?.value?.trim();
    const nameEn = document.getElementById('productNameEn')?.value?.trim();
    const descKo = document.getElementById('productDescKo')?.value?.trim();
    const descEn = document.getElementById('productDescEn')?.value?.trim();

    if (!nameKo) {
        const lang = document.documentElement.getAttribute('data-lang') || 'ko';
        alert(lang === 'ko' ? '제품명 (한글)을 입력해주세요.' : 'Please enter Product Name (Korean).');
        return;
    }

    let imageData = null;
    if (productUploadPreview?.src && productUploadPreview.src.startsWith('data:')) {
        imageData = await compressImageWhenLarge(productUploadPreview.src);
    }

    const product = {
        id: 'product_' + Date.now(),
        nameKo,
        nameEn: nameEn || nameKo,
        descKo: descKo || '',
        descEn: descEn || descKo || '',
        imageData
    };

    try {
        const products = getCustomProducts();
        products.push(product);
        saveCustomProducts(products);
        closeAddProductModal();
        renderCustomProducts();
        const lang = document.documentElement.getAttribute('data-lang') || 'ko';
        alert(lang === 'ko' ? '제품이 추가되었습니다.' : 'Product added successfully.');
    } catch (err) {
        const lang = document.documentElement.getAttribute('data-lang') || 'ko';
        const msg = (err?.name === 'QuotaExceededError' || err?.code === 22)
            ? (lang === 'ko' ? '저장 공간이 부족합니다. 이미지 크기를 줄이거나 다른 이미지를 선택해 주세요.' : 'Storage full. Please use a smaller image or try another image.')
            : (lang === 'ko' ? '저장에 실패했습니다.' : 'Failed to save.');
        alert(msg);
        console.error('제품 추가 실패:', err);
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && addProductModal?.classList.contains('active')) {
        closeAddProductModal();
    }
});

// ===== Edit Product Modal =====
const editProductModal = document.getElementById('editProductModal');
const editProductForm = document.getElementById('editProductForm');
const editProductImageInput = document.getElementById('editProductImageInput');
const editProductImageUploadArea = document.getElementById('editProductImageUploadArea');
const editProductUploadPlaceholder = document.getElementById('editProductUploadPlaceholder');
const editProductUploadPreview = document.getElementById('editProductUploadPreview');

function openEditProductModal(productId) {
    const product = getCustomProducts().find(p => p.id === productId);
    if (!product) return;

    document.getElementById('editProductId').value = productId;
    document.getElementById('editProductNameKo').value = product.nameKo || '';
    document.getElementById('editProductNameEn').value = product.nameEn || '';
    document.getElementById('editProductDescKo').value = product.descKo || '';
    document.getElementById('editProductDescEn').value = product.descEn || '';

    if (product.imageData) {
        editProductUploadPreview.src = product.imageData;
        editProductUploadPreview.style.display = 'block';
        editProductUploadPlaceholder.style.display = 'none';
    } else {
        editProductUploadPreview.src = '';
        editProductUploadPreview.style.display = 'none';
        editProductUploadPlaceholder.style.display = 'flex';
    }
    editProductImageInput.value = '';

    editProductModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeEditProductModal() {
    editProductModal?.classList.remove('active');
    document.body.style.overflow = '';
}

document.querySelector('.edit-product-modal-close')?.addEventListener('click', closeEditProductModal);
editProductModal?.querySelector('.modal-overlay')?.addEventListener('click', closeEditProductModal);
document.getElementById('cancelEditProduct')?.addEventListener('click', closeEditProductModal);

editProductImageUploadArea?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    editProductImageInput?.click();
});

editProductImageInput?.addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith('image/')) return;
    const MAX_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
        const lang = document.documentElement.getAttribute('data-lang') || 'ko';
        alert(lang === 'ko' ? '이미지 크기는 10MB 이하여야 합니다.' : 'Image size must be 10MB or less.');
        e.target.value = '';
        return;
    }
    const reader = new FileReader();
    reader.onload = async (ev) => {
        try {
            let dataUrl = ev.target?.result;
            if (!dataUrl) return;
            dataUrl = await compressImageWhenLarge(dataUrl);
            if (editProductUploadPreview) {
                editProductUploadPreview.src = dataUrl;
                editProductUploadPreview.style.display = 'block';
            }
            if (editProductUploadPlaceholder) editProductUploadPlaceholder.style.display = 'none';
        } catch (err) {
            console.error('제품 이미지 로드 실패:', err);
            const lang = document.documentElement.getAttribute('data-lang') || 'ko';
            alert(lang === 'ko' ? '이미지 로드에 실패했습니다.' : 'Failed to load image.');
        }
    };
    reader.onerror = () => {
        const lang = document.documentElement.getAttribute('data-lang') || 'ko';
        alert(lang === 'ko' ? '이미지 읽기에 실패했습니다.' : 'Failed to read image.');
    };
    reader.readAsDataURL(file);
});

editProductForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const lang = document.documentElement.getAttribute('data-lang') || 'ko';
    const t = translations[lang]?.editProduct || {};

    const productId = document.getElementById('editProductId')?.value;
    const nameKo = document.getElementById('editProductNameKo')?.value?.trim();
    const nameEn = document.getElementById('editProductNameEn')?.value?.trim();
    const descKo = document.getElementById('editProductDescKo')?.value?.trim();
    const descEn = document.getElementById('editProductDescEn')?.value?.trim();

    if (!nameKo) {
        alert(lang === 'ko' ? '제품명 (한글)을 입력해주세요.' : 'Please enter Product Name (Korean).');
        return;
    }

    const products = getCustomProducts();
    const idx = products.findIndex(p => p.id === productId);
    if (idx === -1) return;

    let imageData = products[idx].imageData;
    if (editProductUploadPreview?.src && editProductUploadPreview.src.startsWith('data:')) {
        imageData = await compressImageWhenLarge(editProductUploadPreview.src);
    }

    products[idx] = {
        ...products[idx],
        nameKo,
        nameEn: nameEn || nameKo,
        descKo: descKo || '',
        descEn: descEn || descKo || '',
        imageData
    };

    try {
        saveCustomProducts(products);
        closeEditProductModal();
        renderCustomProducts();
        alert(t.success || '수정되었습니다.');
    } catch (err) {
        const msg = (err?.name === 'QuotaExceededError' || err?.code === 22)
            ? (lang === 'ko' ? '저장 공간이 부족합니다. 이미지 크기를 줄이거나 다른 이미지를 선택해 주세요.' : 'Storage full. Please use a smaller image or try another image.')
            : (lang === 'ko' ? '저장에 실패했습니다.' : 'Failed to save.');
        alert(msg);
        console.error('제품 수정 실패:', err);
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && editProductModal?.classList.contains('active')) {
        closeEditProductModal();
    }
});

// ===== Gallery Filter =====
function filterGallery(filter) {
    const items = document.querySelectorAll('.gallery-item');
    let visibleCount = 0;

    items.forEach(item => {
        const category = item.dataset.category;
        const isMatch = filter === 'all' || category === filter;
        if (isMatch) {
            item.classList.remove('hidden');
            visibleCount++;
        } else {
            item.classList.add('hidden');
        }
    });

    // 필터 결과가 없을 때 안내 메시지
    const emptyMsg = document.querySelector('.gallery-empty-msg');
    if (emptyMsg) {
        const hasProjects = items.length > 0;
        const filterHasResults = visibleCount > 0;
        if (!hasProjects) {
            emptyMsg.style.display = 'block';
            const lang = document.documentElement.getAttribute('data-lang') || 'ko';
            emptyMsg.textContent = translations[lang]?.gallery?.empty || (lang === 'ko' ? "프로젝트가 없습니다. '프로젝트 추가' 버튼으로 새 프로젝트를 추가하세요." : "No projects yet. Add a new project using the 'Add Project' button.");
        } else if (!filterHasResults) {
            emptyMsg.style.display = 'block';
            const lang = document.documentElement.getAttribute('data-lang') || 'ko';
            emptyMsg.textContent = translations[lang]?.gallery?.noCategory || (lang === 'ko' ? '이 카테고리에 프로젝트가 없습니다.' : 'No projects in this category.');
        } else {
            emptyMsg.style.display = 'none';
        }
    }
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterGallery(btn.dataset.filter);
    });
});

// ===== Modal =====
function openModal(title, category, desc, imageUrl = null) {
    const lang = document.documentElement.getAttribute('data-lang') || 'ko';
    const categoryNames = {
        residential: { ko: '경관조명', en: 'Landscape Lighting' },
        commercial: { ko: '스포츠조명', en: 'Sports Lighting' },
        public: { ko: '공공시설', en: 'Public' },
        exhibition: { ko: '전시회', en: 'Exhibition' }
    };
    modalTitle.textContent = title;
    modalCategory.textContent = categoryNames[category]?.[lang] || category;
    modalDesc.textContent = desc;
    
    const modalImageContainer = document.querySelector('.modal-image');
    const placeholderEl = modalImageContainer?.querySelector('.placeholder-img');
    const existingImg = modalImageContainer?.querySelector('img.preview-img');
    if (imageUrl) {
        if (placeholderEl) placeholderEl.style.display = 'none';
        if (existingImg) existingImg.remove();
        const img = document.createElement('img');
        img.className = 'preview-img';
        img.src = imageUrl;
        img.alt = title;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        modalImageContainer?.appendChild(img);
    } else {
        if (existingImg) existingImg.remove();
        if (placeholderEl) {
            placeholderEl.style.display = 'flex';
            placeholderEl.textContent = lang === 'ko' ? '프로젝트 이미지' : 'Project Image';
        }
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Delete password constant
const DELETE_PASSWORD = '8253';

// Delete confirmation modal (프로젝트/제품 공용)
const deleteConfirmModal = document.getElementById('deleteConfirmModal');
const deletePasswordInput = document.getElementById('deletePasswordInput');
const deleteErrorMsg = document.getElementById('deleteErrorMsg');
const deleteModalTitle = document.getElementById('deleteModalTitle');
const deleteModalMessage = document.getElementById('deleteModalMessage');
let deleteTarget = null; // { type: 'project'|'product', id: string }

function openDeleteModal(id, type = 'project') {
    deleteTarget = { type, id };
    const lang = document.documentElement.getAttribute('data-lang') || 'ko';
    const t = translations[lang]?.delete || {};
    const et = translations[lang]?.editProduct || {};
    const ept = translations[lang]?.editProject || {};
    const confirmBtn = document.getElementById('confirmDelete');
    const passwordLabel = document.getElementById('deleteModalPasswordLabel');

    if (type === 'editProject') {
        deleteModalTitle.textContent = ept.passwordTitle || '프로젝트 수정';
        deleteModalMessage.textContent = ept.passwordMessage || '수정하려면 비밀번호를 입력하세요.';
        if (confirmBtn) confirmBtn.textContent = ept.passwordConfirm || '확인';
        if (passwordLabel) passwordLabel.textContent = ept.passwordLabel || '변경 비밀번호';
    } else if (type === 'editProduct') {
        deleteModalTitle.textContent = et.passwordTitle || '제품 수정';
        deleteModalMessage.textContent = et.passwordMessage || '수정하려면 비밀번호를 입력하세요.';
        if (confirmBtn) confirmBtn.textContent = et.passwordConfirm || '확인';
        if (passwordLabel) passwordLabel.textContent = et.passwordLabel || '변경 비밀번호';
    } else if (type === 'product') {
        deleteModalTitle.textContent = t.titleProduct || '제품 삭제';
        deleteModalMessage.textContent = t.messageProduct || '정말 이 제품을 삭제하시겠습니까?';
        if (confirmBtn) confirmBtn.textContent = t.confirm || '삭제';
        if (passwordLabel) passwordLabel.textContent = t.passwordLabel || '삭제 비밀번호';
    } else {
        deleteModalTitle.textContent = t.title || '프로젝트 삭제';
        deleteModalMessage.textContent = t.message || '정말 이 프로젝트를 삭제하시겠습니까?';
        if (confirmBtn) confirmBtn.textContent = t.confirm || '삭제';
        if (passwordLabel) passwordLabel.textContent = t.passwordLabel || '삭제 비밀번호';
    }
    deletePasswordInput.value = '';
    deleteErrorMsg.textContent = '';
    deleteConfirmModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => deletePasswordInput?.focus(), 100);
}

function closeDeleteModal() {
    deleteTarget = null;
    deletePasswordInput.value = '';
    deleteErrorMsg.textContent = '';
    deleteConfirmModal?.classList.remove('active');
    document.body.style.overflow = '';
}

function confirmDelete() {
    const lang = document.documentElement.getAttribute('data-lang') || 'ko';
    const t = translations[lang]?.delete || {};
    const input = deletePasswordInput?.value?.trim();

    if (input !== DELETE_PASSWORD) {
        deleteErrorMsg.textContent = t.wrongPassword || '비밀번호가 일치하지 않습니다.';
        return;
    }

    if (!deleteTarget) return;

    if (deleteTarget.type === 'editProject') {
        const projectId = deleteTarget.id;
        closeDeleteModal();
        openEditProjectModal(projectId);
        return;
    }
    if (deleteTarget.type === 'editProduct') {
        const productId = deleteTarget.id;
        closeDeleteModal();
        openEditProductModal(productId);
        return;
    }
    if (deleteTarget.type === 'product') {
        const products = getCustomProducts().filter(p => p.id !== deleteTarget.id);
        saveCustomProducts(products);
        renderCustomProducts();
        alert(t.successProduct || t.success || '삭제되었습니다.');
    } else {
        const projects = getCustomProjects().filter(p => p.id !== deleteTarget.id);
        saveCustomProjects(projects);
        renderCustomProjects();
        alert(t.success || '삭제되었습니다.');
    }
    closeDeleteModal();
}

document.getElementById('confirmDelete')?.addEventListener('click', confirmDelete);
document.getElementById('cancelDelete')?.addEventListener('click', closeDeleteModal);
document.querySelector('.delete-modal-close')?.addEventListener('click', closeDeleteModal);
deleteConfirmModal?.querySelector('.modal-overlay')?.addEventListener('click', closeDeleteModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && deleteConfirmModal?.classList.contains('active')) {
        closeDeleteModal();
    }
    if (e.key === 'Enter' && deleteConfirmModal?.classList.contains('active')) {
        e.preventDefault();
        confirmDelete();
    }
});

// Event delegation for project delete/edit button
document.querySelector('.gallery')?.addEventListener('click', (e) => {
    const deleteBtn = e.target.closest('.delete-project-btn');
    if (deleteBtn) {
        e.stopPropagation();
        const item = deleteBtn.closest('.gallery-item');
        const customId = item?.dataset.customId;
        if (customId) openDeleteModal(customId, 'project');
        return;
    }
    const editBtn = e.target.closest('.edit-project-btn');
    if (editBtn) {
        e.stopPropagation();
        const item = editBtn.closest('.gallery-item');
        const customId = item?.dataset.customId;
        if (customId) openDeleteModal(customId, 'editProject');
        return;
    }
});

// ===== Product Image Viewer (원본 이미지 보기) =====
const productImageViewerModal = document.getElementById('productImageViewerModal');
const productImageViewerImg = document.getElementById('productImageViewerImg');

function openProductImageViewer(src, alt = '') {
    if (!productImageViewerImg) return;
    productImageViewerImg.src = src;
    productImageViewerImg.alt = alt;
    productImageViewerModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductImageViewer() {
    productImageViewerModal?.classList.remove('active');
    document.body.style.overflow = '';
    if (productImageViewerImg) productImageViewerImg.src = '';
}

document.querySelector('.product-image-viewer-close')?.addEventListener('click', closeProductImageViewer);
document.querySelector('.product-image-viewer-overlay')?.addEventListener('click', closeProductImageViewer);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && productImageViewerModal?.classList.contains('active')) {
        closeProductImageViewer();
    }
});

// Event delegation for product delete/edit buttons & image click
document.querySelector('.products-gallery')?.addEventListener('click', (e) => {
    const deleteBtn = e.target.closest('.delete-product-btn');
    if (deleteBtn) {
        e.stopPropagation();
        const item = deleteBtn.closest('[data-product-id]');
        const productId = item?.dataset.productId;
        if (productId) openDeleteModal(productId, 'product');
        return;
    }
    const editBtn = e.target.closest('.edit-product-btn');
    if (editBtn) {
        e.stopPropagation();
        const item = editBtn.closest('[data-product-id]');
        const productId = item?.dataset.productId;
        if (productId) openDeleteModal(productId, 'editProduct');
        return;
    }
    const productImg = e.target.closest('.product-image img, .product-image .product-img');
    if (productImg && productImg.src) {
        e.stopPropagation();
        openProductImageViewer(productImg.src, productImg.alt || '');
        return;
    }
});

// Event delegation for view-detail (includes dynamically added items)
document.querySelector('.gallery')?.addEventListener('click', (e) => {
    const btn = e.target.closest('.view-detail');
    if (!btn) return;
    
    const item = btn.closest('.gallery-item');
    const titleEl = item.querySelector('.item-overlay h3');
    const lang = document.documentElement.getAttribute('data-lang') || 'ko';
    const customId = item.dataset.customId;
    
    let title, desc, imageUrl = null;
    
    const category = item.dataset.category;
    
    if (customId) {
        const custom = getCustomProjects().find(p => p.id === customId);
        if (custom) {
            title = lang === 'ko' ? custom.titleKo : custom.titleEn;
            desc = lang === 'ko' ? custom.descKo : custom.descEn;
            imageUrl = custom.imageData || null;
        }
    } else {
        title = titleEl?.textContent || '프로젝트';
        const data = projectData[lang]?.[category];
        desc = lang === 'ko' 
            ? '조명 설계 컨셉, 사용된 조명 기구, 특별히 고려한 사항 등을 자세히 설명합니다.'
            : 'Detailed project description including lighting design concept, fixtures used, and special considerations.';
        if (data) {
            const project = data.find(p => p.title === title);
            if (project) desc = project.desc;
        }
    }
    
    openModal(title || '프로젝트', category, desc || '', imageUrl);
});

modalClose?.addEventListener('click', closeModal);
modalOverlay?.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
        closeModal();
    }
});

// ===== Contact Form =====
contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nameInput = contactForm?.querySelector('.form-row input[type="text"]');
    const emailInput = contactForm?.querySelector('.form-row input[type="email"]');
    const name = nameInput?.value || '';
    const email = emailInput?.value || '';
    const lang = document.documentElement.getAttribute('data-lang') || 'ko';
    
    const msg = lang === 'ko'
        ? `감사합니다, ${name}님!\n문의가 접수되었습니다. 빠른 시일 내에 ${email}로 연락드리겠습니다.`
        : `Thank you, ${name}!\nYour inquiry has been received. We will contact you at ${email} soon.`;
    alert(msg);
    contactForm.reset();
});

// ===== Mobile Menu =====
mobileMenuBtn?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// 메뉴 링크 클릭 시 모바일 메뉴 닫기
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks?.classList.remove('active');
        mobileMenuBtn?.classList.remove('active');
    });
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// ===== Initial scroll animations =====
document.querySelectorAll('.gallery-item:not(.hidden)').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    animationObserver.observe(item);
});

// ===== Add fadeIn keyframes for filter animation =====
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);
