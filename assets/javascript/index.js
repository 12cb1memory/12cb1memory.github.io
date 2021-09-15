function checkName() {
    var nameList = [
        "NGUYỄN VÂN ANH",
        "NGUYỄN GIA BẢO",
        "NGUYỄN TUẤN EM",
        "TRỊNH VĂN HÀO",
        "LÊ PHÁT HUY",
        "ĐINH TẤN HUY",
        "TRẦN BẢO KIM",
        "PHẠM VĂN LÊN",
        "NGUYỄN LÝ THÙY LINH",
        "PHẠM BẢO LỘC",
        "CHUNG THỊ KIỀU MY",
        "BÙI THỊ ÁNH NGỌC",
        "NGUYỄN THỊ BẢO NGỌC",
        "LÊ THỊ HỒNG NGỌC",
        "TRƯƠNG THỊ YẾN NHI",
        "NGUYỄN VĂN NHIÊN",
        "VÕ THỊ HUỲNH NHƯ",
        "VÕ THỊ THẢO NHƯ",
        "LÊ THỊ HỒNG PHẤN",
        "NGUYỄN THANH PHONG",
        "DƯƠNG THỊ MỸ PHƯƠNG",
        "VĂN CÔNG QUỐC",
        "HUỲNH CHÂU HIẾU THẢO",
        "NGUYỄN THỊ BẢO THOA",
        "TRẦN THỊ KIM THOA",
        "LÊ THỊ MINH THÙY",
        "PHẠM TRẦN HOÀI THY",
        "VÕ MINH TIỀN",
        "NGUYỄN TRUNG TÍN",
        "TRẦN TRUNG TÍN",
        "NGUYỄN HỮU TÍNH",
        "TRẦN PHAN BẢO TOÀN",
        "NGUYỄN NHAN BẢO TRÂM",
        "NGUYỄN THỊ NGỌC TRÂN",
        "HỒ PHƯỢNG TƯỜNG",
        "NGUYỄN THỊ HỒNG TỰU",
        "TRƯƠNG QUANG TỶ",
        "KHƯƠNG HOÀNG VINH",
        "LÂM CHÍ VĨNH",
        "NGUYỄN THỊ MỸ XUYÊN",
        "PHẠM THỊ TRÚC LY",
        "VÕ NGUYỄN TƯỜNG VY"
    ]
    var nameOfMember = document.getElementById('name').value;
    nameOfMember = nameOfMember.toUpperCase();
    nameOfMember = nameOfMember.trim();
    console.log(nameOfMember);
    if (nameList.includes(nameOfMember) === true) {
        window.location = '/picture.html';
    }
    else {
        document.getElementById('false').style.display = "block";
    }
}