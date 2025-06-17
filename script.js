// 갤러리 이미지 목록
const galleryImages = [
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Arrogant_Threat.jpg', title: '오만한 위협' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Awakening_Contempt_In_Coffin.jpg', title: '관 속의 각성' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Bed_Boredom_Lying_Down.jpg', title: '권태로운 휴식' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Blood_Drunk_Self_Loathing.jpg', title: '피에 취한 자기혐오' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Blood_Thirst_Glowing_Eyes.jpg', title: '갈증의 빛나는 눈' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Bored_King_Leaning_Smirk.jpg', title: '지루한 왕의 조소' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Bored_Leaning_On_Hand.jpg', title: '무료한 시선' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Butterfly_Tattoo_Profile.jpg', title: '나비 문신' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Cold_Stare_Glowing_Tattoo_1.jpg', title: '차가운 응시 1' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Cold_Stare_Glowing_Tattoo_2.jpg', title: '차가운 응시 2' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Confused_2.jpg', title: '혼란 2' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Confused_Question_Mark.jpg', title: '의문의 순간' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Confused.jpg', title: '혼란' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Contemptuous_Profile_Smirk.jpg', title: '경멸의 조소' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Defiant_Anger_Clenched_Fist.jpg', title: '반항적 분노' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Elf_Ears_Portrait_Petals.jpg', title: '엘프 귀' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_First_Blood_Aftermath_Pained.jpg', title: '첫 피의 여파' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Icy_Stare_Closeup.jpg', title: '얼음같은 응시' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Injured_Animal_Glare.jpg', title: '상처입은 짐승의 눈빛' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_King_Under_Moonlight.jpg', title: '달빛 아래의 왕' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Library_Anguish_Reading.jpg', title: '도서관의 고뇌' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Mirror_Self_Loathing.jpg', title: '거울 속 자기혐오' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Peaceful_Sleep_Lying_Down.jpg', title: '평화로운 잠' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Rainy_Window_Melancholy_Profile.jpg', title: '비 오는 창가의 우울' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Rare_Smile.jpg', title: '희귀한 미소' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Reching_Out_Hand_In_Coffin.jpg', title: '관 속에서 뻗은 손' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Rising_Anger_Glare.jpg', title: '치솟는 분노' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Seal_Pain_Clutching_Neck_1.jpg', title: '봉인의 고통 1' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Seal_Pain_Clutching_Neck_2.jpg', title: '봉인의 고통 2' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Seal_Pain_Clutching_Neck_3.jpg', title: '봉인의 고통 3' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Seal_Pain_Clutching_Neck_4.jpg', title: '봉인의 고통 4' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Seal_Pain_Elf_Ears_Revealed.jpg', title: '드러난 엘프 귀' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Sitting_On_Throne_Cynical.jpg', title: '왕좌의 냉소' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Standing_With_Curiosity.jpg', title: '호기심 어린 자세' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Taste_Of_Power_Arrogant.jpg', title: '권력의 맛' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Threatening_Glare_Closeup_2.jpg', title: '위협적인 응시 2' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Threatening_Glare_Closeup.jpg', title: '위협적인 응시' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Warning_In_Darkness.jpg', title: '어둠 속의 경고' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Wet_Body_Back_View_Shower.jpg', title: '젖은 뒷모습' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Wet_Body_Profile_Shower.jpg', title: '젖은 옆모습' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_Wet_Body_Smirk_Back_View.jpg', title: '젖은 몸의 조소' },
    { src: '카엘러스 공용 에셋 편집본/Kaelus_With_Small_Animal_Curious.jpg', title: '작은 동물과 함께' }
];

// DOM 요소들
let loadingScreen;
let musicToggle;
let backgroundMusic;
let navToggle;
let navLinks;
let spoilerToggles;
let sceneBtns;
let sceneContents;
let galleryGrid;
let modal;
let modalImg;
let modalCaption;
let modalClose;

// DOM 로드 완료 시 실행
document.addEventListener('DOMContentLoaded', function() {
    // DOM 요소 초기화
    initializeDOMElements();
    
    // 로딩 스크린 처리
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
    
    // 이벤트 리스너 설정
    setupEventListeners();
    
    // 갤러리 이미지 로드
    loadGalleryImages();
    
    // 스크롤 애니메이션 설정
    setupScrollAnimations();
    
    // 부드러운 스크롤 링크 설정
    setupSmoothScrollLinks();
    
    // 스포일러 이미지 클릭 이벤트 설정
    setupSpoilerImages();
});

// DOM 요소 초기화
function initializeDOMElements() {
    loadingScreen = document.getElementById('loading-screen');
    musicToggle = document.getElementById('music-toggle');
    backgroundMusic = document.getElementById('background-music');
    navToggle = document.querySelector('.nav-toggle');
    navLinks = document.querySelector('.nav-links');
    spoilerToggles = document.querySelectorAll('.spoiler-toggle');
    sceneBtns = document.querySelectorAll('.scene-btn');
    sceneContents = document.querySelectorAll('.scene-content');
    galleryGrid = document.querySelector('.gallery-grid');
    modal = document.getElementById('image-modal');
    modalImg = document.getElementById('modal-image');
    modalCaption = document.querySelector('.modal-caption');
    modalClose = document.querySelector('.modal-close');
}

// 이벤트 리스너 설정
function setupEventListeners() {
    // 브금 토글
    musicToggle.addEventListener('click', toggleMusic);
    
    // 네비게이션 토글
    navToggle.addEventListener('click', toggleNavigation);
    
    // 스포일러 토글
    spoilerToggles.forEach(toggle => {
        toggle.addEventListener('click', toggleSpoiler);
    });
    
    // 씬 버튼
    sceneBtns.forEach(btn => {
        btn.addEventListener('click', switchScene);
    });
    
    // 모달 닫기
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // ESC 키로 모달 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

// 브금 토글
function toggleMusic() {
    if (backgroundMusic.paused) {
        // 모바일에서 자동재생이 차단될 수 있으므로 사용자 상호작용 후 재생
        backgroundMusic.play().then(() => {
            musicToggle.classList.add('playing');
        }).catch(error => {
            console.log('음악 재생 실패:', error);
        });
    } else {
        backgroundMusic.pause();
        musicToggle.classList.remove('playing');
    }
}

// 네비게이션 토글
function toggleNavigation() {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// 스포일러 토글
function toggleSpoiler(e) {
    const toggle = e.currentTarget;
    const content = toggle.nextElementSibling;
    
    toggle.classList.toggle('active');
    content.classList.toggle('show');
}

// 씬 전환
function switchScene(e) {
    const clickedBtn = e.currentTarget;
    const targetScene = clickedBtn.getAttribute('data-scene');
    
    // 모든 버튼과 콘텐츠 비활성화
    sceneBtns.forEach(btn => btn.classList.remove('active'));
    sceneContents.forEach(content => content.classList.remove('active'));
    
    // 클릭된 버튼과 해당 콘텐츠 활성화
    clickedBtn.classList.add('active');
    document.getElementById(targetScene).classList.add('active');
}

// 갤러리 이미지 로드
function loadGalleryImages() {
    galleryImages.forEach(image => {
        const galleryItem = createGalleryItem(image);
        galleryGrid.appendChild(galleryItem);
    });
}

// 갤러리 아이템 생성
function createGalleryItem(imageData) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    
    const img = document.createElement('img');
    img.src = imageData.src;
    img.alt = imageData.title;
    img.loading = 'lazy';
    
    const overlay = document.createElement('div');
    overlay.className = 'gallery-overlay';
    
    const title = document.createElement('h4');
    title.className = 'gallery-title';
    title.textContent = imageData.title;
    
    overlay.appendChild(title);
    item.appendChild(img);
    item.appendChild(overlay);
    
    // 클릭 이벤트
    item.addEventListener('click', () => openModal(imageData));
    
    return item;
}

// 모달 열기
function openModal(imageData) {
    modal.style.display = 'block';
    modalImg.src = imageData.src;
    modalImg.alt = imageData.title;
    modalCaption.textContent = imageData.title;
    document.body.style.overflow = 'hidden';
}

// 모달 닫기
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 스크롤 애니메이션 설정
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 애니메이션할 요소들
    const animatedElements = document.querySelectorAll('.profile-card, .dialogue-card, .gallery-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// 부드러운 스크롤 링크
function setupSmoothScrollLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // 모바일 메뉴 닫기
                if (navLinks.classList.contains('active')) {
                    navToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                }
                
                // 스크롤
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 스포일러 이미지 설정
function setupSpoilerImages() {
    const spoilerImages = document.querySelectorAll('.spoiler-images img');
    spoilerImages.forEach(img => {
        img.addEventListener('click', function() {
            openModal({
                src: this.src,
                title: this.alt
            });
        });
    });
}

// 네비게이션 스크롤 효과
let lastScroll = 0;
const nav = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !nav.classList.contains('scroll-down')) {
        // 스크롤 다운
        nav.classList.remove('scroll-up');
        nav.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && nav.classList.contains('scroll-down')) {
        // 스크롤 업
        nav.classList.remove('scroll-down');
        nav.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// 네비게이션 스크롤 스타일 추가
const style = document.createElement('style');
style.textContent = `
    .main-nav {
        transition: transform 0.3s ease;
    }
    .main-nav.scroll-down {
        transform: translateY(-100%);
    }
    .main-nav.scroll-up {
        transform: translateY(0);
    }
`;
document.head.appendChild(style); 