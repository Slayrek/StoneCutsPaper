    const select = prompt("Що виберете? Бумага, Ножиці, Камінь")
        const items = ['бумага', 'ножиці', 'камінь']

        if (!select) {
            location.reload()
        } else {
            document.write(`<p>Ви: ${select}</p>`)
        }

        let selectComputer = items[Math.floor(Math.random()*items.length)];

        document.write(`<p>Комп'ютор: ${selectComputer}</p>`);

        const compare = (choice1,choice2) => {
            if (choice1 === choice2) {
                return "Нічия!";
            }
            if (choice1 === "камінь") {
                if (choice2 === "ножиці") {
                    return "Ви виграли!";
                } else {
                    return "Ви програли!";
                }
            }
            if (choice1 === "бумага") {
                if (choice2 === "камінь") {
                    return "Ви выиграли!";
                } else {
                    return "Ви програли!";
                }
            }
            if (choice1 === "ножиці") {
                if (choice2 === "камінь") {
                    return "Ви програли!";
                } else {
                    return "Ви виграли";
                }
            }

            return 'Почніть гру знаново!'
        };

        const result = compare(select.toLowerCase(),selectComputer.toLowerCase());

        document.write(`<br><hr><br> ${result}`);
