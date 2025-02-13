$(document).ready(function() {
    var envelope = $('#envelope');
    var letter = $('.letter');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    // คลิกที่ซองจดหมายเพื่อเปิด
    envelope.click(function() {
        openEnvelope();
    });

    btn_open.click(function() {
        openEnvelope();
    });

    btn_reset.click(function() {
        closeEnvelope();
    });

    $("#open-letter").click(function () {
        $("#envelope").addClass("open"); // เปิดซองจดหมาย
        $(".letter-wrapper").fadeIn(500, function () {
            $(".fade-in-letter").addClass("active"); // fade-in จดหมายจาก Letter2
        });
    });

    $("#reset").click(function () {
        $("#envelope").removeClass("open"); // ปิดซองจดหมาย
        $(".fade-in-letter").removeClass("active"); // ซ่อนจดหมาย
        $(".letter-wrapper").fadeOut(500);
    });

    // คลิกที่จดหมายให้ขยายขึ้น
    letter.click(function(event) {
        event.stopPropagation(); // ป้องกันการเปิด-ปิดซ้อนกัน
        letter.toggleClass("zoomed");
    });

    function openEnvelope() {
        envelope.addClass("open").removeClass("close");
    }

    function closeEnvelope() {
        envelope.addClass("close").removeClass("open");
        letter.removeClass("zoomed"); // รีเซ็ตการขยาย
    }
});
