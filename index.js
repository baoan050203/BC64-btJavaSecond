// function manageAdmission() {
//     var e = document.getElementById("inputScore1").value
//       , n = Number(document.getElementById("selLocation").value)
//       , t = Number(document.getElementById("selUser").value)
//       , u = Number(document.getElementById("inputScore2").value)
//       , c = Number(document.getElementById("inputScore3").value)
//       , l = Number(document.getElementById("inputScore4").value)
//       , m = !0;
//     if (m &= checkScore(u) && checkScore(c) && checkScore(l)) {
//         var o = u + c + l + (n + t);
//         document.getElementById("txtResult").innerHTML = o >= e ? "Bạn đã đậu. Tổng điểm: " + o : "Bạn đã rớt. Tổng điểm: " + o
//     } else
//         document.getElementById("txtResult").innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0"
// }

document.getElementById('btn1').onclick = function(){
    var diemChuan = document.getElementById('diemChuan').value*1;
   var selectElementKV =  document.querySelector('#selLocationKV').value*1;
   var selectElementDT = document.querySelector('#selLocationDT').value*1;
    var diem1 = document.getElementById('diemMon1').value*1;
    var diem2 = document.getElementById('diemMon2').value*1;
    var diem3 = document.getElementById('diemMon3').value*1;

    var dapAn= " "
    if(diem1>0 && diem2>0&&diem3>0){
        var diemTong= diem1+diem2+diem3
    }

    diemTong += (selectElementDT+selectElementKV)
    
    if (diemTong>=diemChuan){
         dapAn = "bạn đã đậu"
         document.getElementById('ketQua').innerHTML= dapAn+" diểm của bạn là" +diemTong;

    }
    else{
         dapAn = "bạn đã rớt"
         document.getElementById('ketQua').innerHTML= dapAn+" diểm của bạn là" +diemTong;

    }

    if (diem1==0 || diem2==0 || diem3==0){
        dapAn = "bạn đã rớt do có một môn 0 điểm"
        document.getElementById('ketQua').innerHTML= dapAn;

    }
}

document.getElementById('btn2').onclick= function(){
    var tenKhach = document.getElementById('tenKhachHang').value;
    var soDien = document.getElementById('soKW').value*1;
    console.log(tenKhach)
    var tienDien = 0;
    if(soDien <= 50 ){
        tienDien = soDien * 500
        document.getElementById('ketQua1').innerHTML= "khách hàng" + tenKhach+" số tiền điện là "+tienDien.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    }

    if (soDien>50 && soDien<=100){
        tienDien =  25000 + 650*(soDien-50)
        document.getElementById('ketQua1').innerHTML= "khách hàng" + tenKhach+" số tiền điện là "+tienDien.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    }

    if(soDien>100&& soDien<=200){
        tienDien = 25000 + 32500 +(soDien-100)*850;
        document.getElementById('ketQua1').innerHTML= "khách hàng" + tenKhach+" số tiền điện là "+tienDien.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    }
    
    if(soDien>200&& soDien <= 350){
        tienDien = 25000 +32500 +(soDien -200)*1100+85000
        document.getElementById('ketQua1').innerHTML= "khách hàng" + tenKhach+" số tiền điện là "+tienDien.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    }
    if(soDien>350){
        tienDien= 25000 +32500 +85000+ 165000+(soDien-350)*1300
        document.getElementById('ketQua1').innerHTML= "khách hàng" + tenKhach+" số tiền điện là "+tienDien.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    }
}

document.getElementById('btn3').onclick = function (){
    var nguoiNop = document.getElementById('tenKhachHang1').value;
    var thuNhapNam = document.getElementById('thuNhapNam').value*1;
    var soNguoiPhuThuoc = document.getElementById('soNguoiPhuThuoc').value*1;
    // console.log(nguoiNop + thuNhapNam +soNguoiPhuThuoc);
    var thuNhapChiuThue = ""
    var thue = ""
    if(thuNhapNam<= 60000000){
        thuNhapChiuThue = thuNhapNam - 4000000 - soNguoiPhuThuoc*1600000
        thue = thuNhapChiuThue * 0.05;
        document.getElementById('ketQua2').innerHTML= "Họ Tên: " + nguoiNop + thue
    }if(thuNhapNam> 60000000&&thuNhapNam<=120000000){
        thuNhapChiuThue = thuNhapNam - 4000000 - soNguoiPhuThuoc*1600000
        thue = thuNhapChiuThue * 0.1;
        document.getElementById('ketQua2').innerHTML= "Họ Tên: " + nguoiNop + " thế thu nhập = " + thue.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    }
    if(thuNhapNam> 120000000&&thuNhapNam<=210000000){
        thuNhapChiuThue = thuNhapNam - 4000000 - soNguoiPhuThuoc*1600000
        thue = thuNhapChiuThue * 0.15;
        document.getElementById('ketQua2').innerHTML= "Họ Tên: " + nguoiNop + " thế thu nhập = " + thue.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    }
    if(thuNhapNam> 210000000&&thuNhapNam<=384000000){
        thuNhapChiuThue = thuNhapNam - 4000000 - soNguoiPhuThuoc*1600000
        thue = thuNhapChiuThue * 0.2;
        document.getElementById('ketQua2').innerHTML= "Họ Tên: " + nguoiNop + " thế thu nhập = " + thue.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    }
    if(thuNhapNam> 384000000&&thuNhapNam<=624000000){
        thuNhapChiuThue = thuNhapNam - 4000000 - soNguoiPhuThuoc*1600000
        thue = thuNhapChiuThue * 0.25;
        document.getElementById('ketQua2').innerHTML= "Họ Tên: " + nguoiNop + " thế thu nhập = " + thue.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    }
    if(thuNhapNam> 624000000&&thuNhapNam<=960000000){
        thuNhapChiuThue = thuNhapNam - 4000000 - soNguoiPhuThuoc*1600000
        thue = thuNhapChiuThue * 0.30;
        document.getElementById('ketQua2').innerHTML= "Họ Tên: " + nguoiNop + " thế thu nhập = " + thue.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    }
    if(thuNhapNam> 960000000){
        thuNhapChiuThue = thuNhapNam - 4000000 - soNguoiPhuThuoc*1600000
        thue = thuNhapChiuThue * 0.35;
        document.getElementById('ketQua2').innerHTML= "Họ Tên: " + nguoiNop + " thế thu nhập = " + thue.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    }

}

document.getElementById('btn4').onclick = function(){
    var loaiKhach = document.querySelector('#loaiKhachid').value*1;
    var maKhachHang = document.getElementById("maKhachHang").value;
    var soKenhCaoCap = document.getElementById('sokenhCaoCap').value*1;
    var kenhDoanhNghiep = document.getElementById('soKetNoi').value*1
    console.log(maKhachHang+soKenhCaoCap+kenhDoanhNghiep)
    var tongPhaiTra= ""
    if(loaiKhach==2){
        tongPhaiTra = 4.5 +20.5+ soKenhCaoCap*7.5
        document.getElementById('ketQua3').innerHTML= "mã Khách: " + maKhachHang + " tổng phải thu " + tongPhaiTra.toLocaleString('us', {style : 'currency', currency : 'USD'});
    }
    else if (loaiKhach==1){
        if(kenhDoanhNghiep<=10){
            tongPhaiTra = 15 + 75 + 50 *soKenhCaoCap
            document.getElementById('ketQua3').innerHTML= "mã Khách: " + maKhachHang + " tổng phải thu " + tongPhaiTra.toLocaleString('us', {style : 'currency', currency : 'USD'});
        }
        if(kenhDoanhNghiep>10){
            tongPhaiTra = 15 +75 + 50*soKenhCaoCap + (kenhDoanhNghiep-10)*5
            document.getElementById('ketQua3').innerHTML= "mã Khách: " + maKhachHang + " tổng phải thu " + tongPhaiTra.toLocaleString('us', {style : 'currency', currency : 'USD'});
        }
    }
}

