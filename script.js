// ნაბიჯებს შორის გადასვლა
function nextStep(step) {
    document.querySelectorAll('.hero-section').forEach(s => s.classList.remove('active'));
    document.getElementById('step' + step).classList.add('active');

    if (step === 3) initCanvas();
    if (step === 5) confetti({ particleCount: 200, spread: 90 });
}

// კოლექციონირება
let items = [];
function collect(emoji) {
    if (!items.includes(emoji)) {
        items.push(emoji);
        document.getElementById('inventory').innerText += " " + emoji;
        if (items.length >= 2) document.getElementById('btn2').classList.remove('hidden');
    }
}

// ხატვის ფუნქცია
function initCanvas() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let drawing = false;

    const start = (e) => { drawing = true; draw(e); };
    const end = () => { drawing = false; ctx.beginPath(); };
    const draw = (e) => {
        if (!drawing) return;
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX || e.touches[0].clientX) - rect.left;
        const y = (e.clientY || e.touches[0].clientY) - rect.top;
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#ff4d94';
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    };

    canvas.onmousedown = start; canvas.onmouseup = end; canvas.onmousemove = draw;
    canvas.ontouchstart = start; canvas.ontouchend = end; canvas.ontouchmove = draw;
}

function clearCanvas() {
    const canvas = document.getElementById('canvas');
    canvas.getContext('2d').clearRect(0, 0, 300, 250);
}

// სახალისო ფრაზები
const jokes = [
    "იცოდი, რომ გაღიმება 17 კუნთს ავარჯიშებს?😄",
    "შენი იმუნიტეტი ახლა ისე მუშაობს, როგორც პატარა ნინძების არმია! 💪🥷",
    "სერიოზული კვლევის მიხედვით, ამ საიტის ნახვა 40%-ით აჩქარებს მორჩენას! (წყარო: მე) 😉",
    "ექიმმა თქვა: პაციენტს სჭირდება ბევრი დასვენება და ერთი გემრიელი ნაყინი მალე! 🍦"
];

function getFun() {
    document.getElementById('joke-text').innerText = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById('final-trigger').style.display = 'inline-block';
}