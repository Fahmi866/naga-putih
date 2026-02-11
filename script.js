const dataMember = {
  danil: {
    name: "Danil Kurniawan",
    img: "images/danil_baru.png",
    desc: "Danil adalah pribadi yang disiplin, asal teluk lanus, hobi menyinal dan bertanggung jawab, julukannya budak comel."
  },
  zul: {
    name: "Muhammad Zulfahmi",
    img: "images/zulfahmi.png",
    desc: "Zulfahmi memiliki pemikiran analitis, tenang dalam tekanan, serta komunikatif."
  },
  adit: {
    name: "Aditya Firmansyah",
    img: "images/adit.png",
    desc: "Adit ialah sosok pribadi yang tangguh, seorang player, yang memiliki insting menyerang yang tangguh."
  },
  ari: {
    name: "Ari Tonang",
    img: "images/ari.png",
    desc: "Ari dikenal kreatif, adaptif, dan penuh ide segar dalam setiap tantangan dalam melakukan penangkapan."
  },
  radhi: {
    name: "Radhi Rabbani",
    img: "images/radhi.png",
    desc: "Radhi adalah pribadi yang rajin, dan sang penakluk billiard riau."
  },
  dandri: {
    name: "Dandri",
    img: "images/dandri.png",
    desc: "Dandri memiliki semangat juang tinggi dan konsistensi yang kuat di lane xp laner."
  },
  zhafran: {
    name: "Zhafran",
    img: "images/zhafran.png",
    desc: "Zhafran adalah sosok visioner asal perawang, percaya diri, dan berani mengambil keputusan besar."
  }
};

function showDesc(key) {
  const detail = document.getElementById("memberDetail");
  const img = document.getElementById("memberImg");
  const name = document.getElementById("memberName");
  const desc = document.getElementById("memberDesc");

  if (dataMember[key]) {
    img.src = dataMember[key].img;
    name.textContent = dataMember[key].name;
    desc.textContent = dataMember[key].desc;
    // Pastikan ini pakai 'hidden' sesuai class di HTML kamu
    detail.classList.remove("hidden");
  }
}

function closeDetail() {
  const detail = document.getElementById("memberDetail");
  detail.classList.add("hidden");
}