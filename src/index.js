function htmlToElement(htmlString) {
    const template = document.createElement("template");

    template.innerHTML = `<h1 id="dialogMessage">${htmlString}</h1>`;

    return template.content.firstChild;
}

function exitDocument(node) {
    if (node && node.parentNode) {
        node.parentNode.removeChild(node);
    }
}

function toggleConfirm({ dialogElement }) {
    dialogElement.classList.toggle("d-none");

    dialogElement.classList.toggle("d-block");

    dialogElement.classList.toggle("show");

    const messageElement = document.getElementById("dialogMessage");

    if (messageElement) {
        messageElement.innerHTML = '';
        exitDocument(messageElement);
    }
}

function confirmAsync({ message }) {
    return new Promise((resolve, _) => {
        const dialogElement = document.getElementById("clayDefaultModal");

        toggleConfirm({ dialogElement });

        const messageElement = htmlToElement(message);

        document.getElementById("modalBody").appendChild(messageElement);

        const okButton = document.getElementById("okButton");

        const closeButtons = [document.getElementById("closeButton"), document.getElementById("timesButton")];

        const processCancel = () => {
            toggleConfirm({ dialogElement });

            resolve(false);
        }

        window.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                processCancel();
            }
        }, { once: true });

        closeButtons.forEach(closeButton => closeButton.addEventListener("click", processCancel, { once: true }));

        okButton.addEventListener("click", () => {
            toggleConfirm({ dialogElement });

            resolve(true);
        }, { once: true });
    })
}

window.confirmAsync = confirmAsync;

///////

function validateBodyHydration(result) {
    if (result) {
        console.log("Nice, you're a hydrated baby 👶");
    } else {
        console.log("Get some water and refreshhhh 🚰🚰🚰🚰🌊🌊🌊🌊 this page, dude");
    }
}

// confirmAsync({message: "Did you already had water today?"})
//         .then(validateBodyHydration);


document.getElementById("buttonTrigger").addEventListener("click", () => {
    confirmAsync({ message: "Did you already had water today?" })
        .then(validateBodyHydration);
});
