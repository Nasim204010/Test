 document.getElementById("complaint-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // جلب القيم من الحقول
    const name = document.getElementById("name").value;
    const complaint = document.getElementById("complaint").value;

    // التحقق من المدخلات
    if (name.trim() === "" || complaint.trim() === "") {
        alert("يرجى ملء جميع الحقول");
        return;
    }

    // إضافة الشكوى إلى القائمة
    const complaintsList = document.getElementById("complaints-list");
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${name}</strong>: ${complaint}`;
    complaintsList.appendChild(listItem);

    // عرض رسالة تأكيد
    alert("تم إرسال الشكوى بنجاح!");

    // إعادة تعيين الحقول
    document.getElementById("complaint-form").reset();
});