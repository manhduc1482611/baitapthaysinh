class Student {
    constructor(stt, msv, fullName) {
        this.stt = stt;
        this.msv = String(msv).trim();
        this.fullName = fullName.trim();
        this.khoaHoc = `Khóa ${this.msv.substring(0, 2)}`;
        this.tenKhoa = this.msv.charAt(2) === 'A' ? "HTTTQL" : "Khoa Cơ Bản";
        this.email = this.generateEmail();
    }
    generateEmail() {
        let parts = this.fullName.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase().split(' ');
        let ten = parts.pop();
        let initials = parts.map(p => p[0]).join('');
        return `${ten}${initials}.${this.msv.toLowerCase()}@hvnh.edu.vn`;
    }
}

document.getElementById('excelFile').addEventListener('change', e => {
    let file = e.target.files[0];
    if (!file) return;
    let reader = new FileReader();
    reader.onload = ev => {
        let data = new Uint8Array(ev.target.result);
        let workbook = XLSX.read(data, { type: 'array' });
        let rows = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], { header: 1 });
        let html = '';
        for (let i = 1; i < rows.length; i++) {
            if (rows[i][1] && rows[i][2]) {
                let s = new Student(rows[i][0], rows[i][1], rows[i][2]);
                html += `<tr><td>${s.stt}</td><td>${s.msv}</td><td>${s.fullName}</td><td>${s.khoaHoc}</td><td>${s.tenKhoa}</td><td><a href="mailto:${s.email}">${s.email}</a></td></tr>`;
            }
        }
        document.querySelector('#studentTable tbody').innerHTML = html;
    };
    reader.readAsArrayBuffer(file);
});
