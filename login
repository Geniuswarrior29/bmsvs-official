<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Member Login & ID Portal | BMSVS</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2 family=Merriweather:wght@400;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-database-compat.js"></script>
    
    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .serif-font { font-family: 'Merriweather', serif; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.4s ease-in-out; }
        @media print {
            body * { visibility: hidden; }
            #printableIdCard, #printableIdCard * { visibility: visible; }
            #printableIdCard { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%) scale(1.2); box-shadow: none !important; border: none !important; }
            #nonPrintableBlock, footer, header { display: none !important; }
        }
    </style>
</head>
<body class="bg-gradient-to-br from-[#5c061d]/5 via-slate-50 to-[#fffdf9] text-slate-800 min-h-screen flex flex-col">

    <header class="bg-white border-b border-slate-100 shadow-sm sticky top-0 z-50 py-3">
        <div class="container mx-auto px-4 lg:px-8 flex justify-between items-center">
            <a href="index.html" class="flex items-center gap-3">
                <img src="https://i.ibb.co/S7tdtXBX/Whats-App-Image-2026-06-12-at-08-58-30.jpg" alt="NGO Logo" class="w-11 h-12 object-contain">
                <div class="leading-tight">
                    <span class="block text-sm font-bold text-[#5c061d] serif-font">बृजलाल मेमोरियल</span>
                    <span class="block text-[10px] text-slate-500 font-medium">सामाजिक विकास संस्थान</span>
                </div>
            </a>
            <a href="index.html" class="text-xs font-bold text-slate-600 hover:text-[#5c061d] transition"><i class="fa-solid fa-arrow-left mr-1"></i> Back to Home</a>
        </div>
    </header>

    <main class="container mx-auto px-4 flex-grow flex items-center justify-center py-12">
        
        <div id="loginCardBlock" class="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xl space-y-6 animate-fadeIn">
            <div class="text-center space-y-2">
                <div class="w-12 h-12 bg-rose-50 text-[#5c061d] rounded-full flex items-center justify-center text-xl mx-auto shadow-sm">
                    <i class="fa-solid fa-user-check"></i>
                </div>
                <h2 class="text-xl font-bold text-slate-900 serif-font">सदस्य डेस्क लॉगिन</h2>
                <p class="text-xs text-slate-500">अपना डिजिटल आईडी कार्ड डाउनलोड करने के लिए लॉगिन विवरण भरें।</p>
            </div>

            <form onsubmit="handleMemberLogin(event)" class="space-y-4">
                <div>
                    <label class="block text-[11px] font-bold text-slate-600 mb-1">Membership ID (Token Key)</label>
                    <input type="text" id="memberLoginId" required placeholder="Paste full dynamic key id here..." class="w-full px-3 py-2.5 border rounded-xl text-xs bg-slate-50/50 focus:outline-none focus:border-[#5c061d]">
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-600 mb-1">Registered Mobile Number</label>
                    <input type="tel" id="memberLoginPhone" required placeholder="930XXXXXXXX" class="w-full px-3 py-2.5 border rounded-xl text-xs bg-slate-50/50 focus:outline-none focus:border-[#5c061d]">
                </div>
                <button type="submit" id="btnLoginSubmit" class="w-full bg-[#5c061d] hover:bg-[#4a0416] text-white font-bold py-3 rounded-xl transition text-xs uppercase tracking-wider shadow-md">लॉगिन (Login)</button>
            </form>
        </div>

        <div id="portalDashboardBlock" class="hidden w-full max-w-md space-y-6 animate-fadeIn">
            
            <div id="printableIdCard" class="w-full max-w-[340px] mx-auto bg-white rounded-3xl border border-slate-300 shadow-2xl overflow-hidden relative flex flex-col justify-between min-h-[500px] border-t-[6px] border-t-[#5c061d]">
                
                <div class="bg-gradient-to-r from-[#5c061d] to-[#400210] p-4 text-white text-center flex items-center justify-center gap-3 relative z-10 shadow-sm">
                    <img src="https://i.ibb.co/S7tdtXBX/Whats-App-Image-2026-06-12-at-08-58-30.jpg" class="w-10 h-10 object-contain bg-white rounded-full p-0.5 border border-amber-400">
                    <div class="leading-tight text-left">
                        <h3 class="text-xs font-bold serif-font tracking-tight text-amber-300">बृजलाल मेमोरियल</h3>
                        <p class="text-[9px] text-amber-100/90 font-medium tracking-wide">सामाजिक विकास संस्थान, रायबरेली</p>
                    </div>
                </div>

                <div class="p-5 text-center space-y-4 relative z-10 flex-grow flex flex-col justify-center bg-white">
                    <div class="w-24 h-32 mx-auto rounded-xl border-2 border-[#5c061d] overflow-hidden bg-slate-50 shadow-md">
                        <img id="idCardPhotoSlot" class="w-full h-full object-cover">
                    </div>
                    
                    <div class="space-y-1">
                        <h2 id="idCardNameSlot" class="text-lg font-bold text-slate-900 serif-font tracking-wide"></h2>
                        <span class="inline-block bg-amber-400 text-slate-950 text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm">MEMBER</span>
                    </div>

                    <div class="bg-slate-50 border border-slate-200 rounded-xl p-3 text-left text-[11px] space-y-2 max-w-[290px] mx-auto font-medium">
                        <div class="flex flex-col gap-0.5 border-b border-slate-200 pb-1.5">
                            <span class="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Membership ID:</span>
                            <span id="idCardKeySlot" class="text-[#5c061d] font-mono font-bold break-all select-all text-xs"></span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Mobile:</span>
                            <span id="idCardPhoneSlot" class="text-slate-700 font-mono"></span>
                        </div>
                    </div>
                </div>

                <div class="bg-slate-900 text-slate-300 px-4 py-3 text-[9px] leading-relaxed border-t border-slate-800 relative z-10 font-medium text-left">
                    <p class="flex items-start gap-1"><i class="fa-solid fa-map-location-dot text-amber-400 mt-0.5"></i> <span><strong>Office:</strong> Camp Office Tripula, Raebareli</span></p>
                    <p class="flex items-center gap-1 mt-0.5"><i class="fa-solid fa-phone text-amber-400"></i> <span><strong>Contact:</strong> +91 91962 67689</span></p>
                </div>
            </div>

            <div id="nonPrintableBlock" class="w-full max-w-[340px] mx-auto flex flex-col gap-2">
                <button onclick="window.print()" class="w-full bg-[#5c061d] hover:bg-[#4a0416] text-white text-xs font-bold py-3 rounded-xl transition tracking-wide shadow-md flex items-center justify-center gap-2">
                    <i class="fa-solid fa-print"></i> PRINT / SAVE ID CARD PDF
                </button>
                <button onclick="window.location.reload()" class="w-full bg-slate-200 text-slate-700 text-xs font-bold py-2.5 rounded-xl transition">
                    <i class="fa-solid fa-right-from-bracket mr-1"></i> LOGOUT
                </button>
            </div>
        </div>
    </main>

    <footer class="bg-[#0f172a] text-slate-500 py-4 text-center text-xs mt-auto">© 2026 Brajlal Memorial Institute.</footer>

    <script>
        const firebaseConfig = {
            apiKey: "AIzaSyA6MFWKZVDSu1i4QXM5ZNcnd2myuLs1Pyo",
            authDomain: "bmsvs-hosting.firebaseapp.com",
            projectId: "bmsvs-hosting",
            storageBucket: "bmsvs-hosting.firebasestorage.app",
            messagingSenderId: "527539594907",
            appId: "1:527539594907:web:2b67ba480ae460d7a6483e",
            measurementId: "G-D1LEG857WT",
            databaseURL: "https://bmsvs-hosting-default-rtdb.firebaseio.com"
        };

        firebase.initializeApp(firebaseConfig);
        const db = firebase.database();

        async function handleMemberLogin(e) {
            e.preventDefault();
            const id = document.getElementById('memberLoginId').value.trim();
            const phone = document.getElementById('memberLoginPhone').value.trim();
            const loginBtn = document.getElementById('btnLoginSubmit');
            
            loginBtn.innerText = "Authorizing Access...";
            loginBtn.disabled = true;

            try {
                const snapshot = await db.ref(`applications/${id}`).once('value');
                const memberData = snapshot.val();

                if (memberData && memberData.phone.toString().trim() === phone) {
                    const status = (memberData.status || "PENDING").toUpperCase().trim();
                    
                    if (status === "APPROVED") {
                        document.getElementById('idCardNameSlot').innerText = memberData.name;
                        document.getElementById('idCardKeySlot').innerText = id; // Displays full key safely without dots
                        document.getElementById('idCardPhoneSlot').innerText = memberData.phone;
                        document.getElementById('idCardPhotoSlot').src = memberData.photo;
                        
                        document.getElementById('loginCardBlock').classList.add('hidden');
                        document.getElementById('portalDashboardBlock').classList.remove('hidden');
                    } else if (status === "PENDING") {
                        alert("⚠️ आपका आवेदन अभी लंबित (PENDING) है। अप्रूव होने के बाद ही लॉगिन संभव है।");
                    } else {
                        alert("❌ आपका आवेदन रिजेक्ट (REJECTED) कर दिया गया है।");
                    }
                } else {
                    alert("❌ विवरण मेल नहीं खाता! कृपया सही ID और नंबर दर्ज करें।");
                }
            } catch (err) {
                alert("Database server handshake timed out.");
            } finally {
                loginBtn.innerText = "लॉगिन (Login)";
                loginBtn.disabled = false;
            }
        }
    </script>
</body>
</html>
