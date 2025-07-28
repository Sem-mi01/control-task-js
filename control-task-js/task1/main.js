
    const input = document.getElementById('name');
    const textarea = document.getElementById('value');
    let pairs = [];

    function addPair() {
    const value = input.value;
    if (!value.includes("=")) {
        alert("Format must be name=value");
        return;
    }
    const parts = value.split("=");
    if (parts.length !== 2) {
        alert("Only one '=' is allowed.");
        return;
    }
    const name = parts[0].replace(/^\s+|\s+$/g, "");
    const val = parts[1].replace(/^\s+|\s+$/g, "");

    if (!/^[a-zA-Z0-9]+$/.test(name) || !/^[a-zA-Z0-9]+$/.test(val)) {
        alert("Only alphanumeric characters are allowed");
        return;
    }
    pairs.push({ name, value: val });
    input.value = "";
    // textarea.value = pairs.map(p =>`
    // ${p.name}=${p.value}`).join("\n");
    renderPairs();

}
function renderPairs() {
    const container = document.getElementById("pairList");
    container.innerHTML = "";
    textarea.value = "";

    pairs.forEach((pair, index) => {
        const div = document.createElement("div");
        div.className = "pair-item";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.dataset.index = index;

        const text = document.createElement("span");
        text.textContent = `${pair.name}=${pair.value}`;

        div.appendChild(checkbox);
        div.appendChild(text);
        container.appendChild(div);
        textarea.value += `${pair.name}=${pair.value}\n`;
    });
}

function sortPairs(type) {
    pairs.sort((a, b) => a[type].localeCompare(b[type]));
    renderPairs();
}

function deletePair() {
    const checkboxes = document.querySelectorAll(".pair-item input[type='checkbox']");
    pairs = pairs.filter((_, index) => !checkboxes[index].checked);
    renderPairs();
}
