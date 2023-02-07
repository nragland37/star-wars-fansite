function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName("force");
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });
}