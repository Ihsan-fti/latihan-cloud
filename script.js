const form = document.getElementById("jadwalForm");
const notif = document.getElementById("notif");
const jadwalList = document.getElementById("jadwalList");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const matkul = document.getElementById("matkul").value;
    const hari = document.getElementById("hari").value;
    const jam = document.getElementById("jam").value;
    const ruang = document.getElementById("ruang").value;

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${matkul}</td>
        <td>${hari}</td>
        <td>${jam}</td>
        <td>${ruang}</td>
    `;

    jadwalList.appendChild(row);

    notif.textContent = "✅ Jadwal berhasil ditambahkan!";
    setTimeout(() => notif.textContent = "", 3000);

    form.reset();
});