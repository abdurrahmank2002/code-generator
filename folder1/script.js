document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');
    const btnCopy = document.querySelector('#btnCopy');
    const allBorder = document.getElementById('all');
    const borderElement = document.getElementById('border');
    const all_value = document.getElementById('all_value');
    const border_value = document.getElementById('border_value');
    const border_styleElement = document.getElementById('border_style');
    console.log(border_styleElement);

    var all_radius = 10;
    var border_style = "solid";
    var border_size = 3;
    var coding = "Test";

    function allBordersUpdate() {
        all_radius = allBorder.value
        border_size = borderElement.value;

        all_value.innerText = all_radius + "px";
        border_value.innerText = border_size + "px";
        coding = `
          border-radius:${all_radius}px;
          border:${border_size}px ${border_style} orange;
        `;
        code.value = coding;
        container.style.cssText = coding;
    }




    allBorder.addEventListener("mousemove", allBordersUpdate);
    allBorder.addEventListener("change", allBordersUpdate);
    borderElement.addEventListener("mousemove", allBordersUpdate)
    borderElement.addEventListener("change", allBordersUpdate)




    btnCopy.addEventListener("click", () => {
        const txt = document.querySelector('textarea').select();
        document.execCommand('copy')
        alert('code coppied');


    })
    allBordersUpdate();
    border_styleElement.addEventListener('change', () => {
        border_style = this.value;
        allBordersUpdate();
    });
});