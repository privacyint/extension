function displayBanner() {
    document.body.innerHTML = '\
<div style="margin: 0; padding: 0; position: relative; top: 0; left: 0; display: block; z-index: 1000">\
    <div style="margin: 0; padding: 10px; border-bottom: 1px solid #000000; font-weight: normal; text-align: left">\
        <p>blab</p>\
    </div>\
</div>\
    ' + document.body.innerHTML;
}

$(document).ready(function() {
    displayBanner();
});
