function euler(f, x0, y0, h, n) {
    let x = [x0];
    let y = [y0];

    for (let i = 0; i < n; i++) {
        const yNext = y[y.length - 1] + h * f(x[x.length - 1], y[y.length - 1]);
        x.push(x[x.length - 1] + h);
        y.push(yNext);
    }

    return { x, y };
}

function eulerImproved(f, x0, y0, h, n) {
    let x = [x0];
    let y = [y0];

    for (let i = 0; i < n; i++) {
        const yPred = y[y.length - 1] + h * f(x[x.length - 1], y[y.length - 1]);
        const yCorr =
            y[y.length - 1] +
            (h / 2) * (f(x[x.length - 1], y[y.length - 1]) + f(x[x.length - 1] + h, yPred));
        x.push(x[x.length - 1] + h);
        y.push(yCorr);
    }

    return { x, y };
}

function parseFunction(fnString) {
    return math.compile(fnString);
}

function renderResults({ x, y }, fnExact) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h3>Results</h3>";

    // Crear la tabla en un contenedor desplegable
    const details = document.createElement("details");
    details.innerHTML = `<summary>Tabla de datos</summary>`;
    const table = document.createElement("table");
    table.innerHTML = "<tr><th>x</th><th>y (Aproximado)</th>";

    // Agregar columna para y (Exacto) solo si se proporciona una solución exacta
    if (fnExact) {
        table.innerHTML += "<th>y (Exacto)</th>";
    }
    table.innerHTML += "</tr>";

    // Calcular yExact solo si fnExact existe
    const yExact = fnExact ? x.map((xi) => fnExact.evaluate({ x: xi })) : [];

    x.forEach((xi, i) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${xi.toFixed(4)}</td>
            <td>${y[i].toFixed(4)}</td>
        `;

        // Agregar datos de y (Exacto) solo si existe fnExact
        if (fnExact && yExact[i] !== undefined) {
            row.innerHTML += `<td>${yExact[i].toFixed(4)}</td>`;
        }

        table.appendChild(row);
    });

    details.appendChild(table);
    outputDiv.appendChild(details);

    // Crear el gráfico
    const canvas = document.createElement("canvas");
    canvas.id = "chart";
    outputDiv.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    // Datos para el gráfico
    const datasets = [
        {
            label: "Aproximación",
            data: y,
            borderColor: "blue",
            fill: false,
        },
    ];

    // Agregar datos de la solución exacta si existe
    if (fnExact) {
        datasets.push({
            label: "Exacto",
            data: yExact,
            borderColor: "red",
            fill: false,
        });
    }

    new Chart(ctx, {
        type: "line",
        data: {
            labels: x.map((xi) => xi.toFixed(4)),
            datasets: datasets,
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                },
            },
        },
    });
}

const equationInput = document.getElementById("equation");
const exactEquationInput = document.getElementById("exactEquation");
const x0Input = document.getElementById("x0");
const y0Input = document.getElementById("y0");
const hInput = document.getElementById("h");
const stepsInput = document.getElementById("steps");
const methodSelect = document.getElementById("method");
const solveButton = document.getElementById("solve");

solveButton.addEventListener("click", () => {
    const fnString = equationInput.value;
    const fnExactString = exactEquationInput.value;
    const x0 = parseFloat(x0Input.value);
    const y0 = parseFloat(y0Input.value);
    const h = parseFloat(hInput.value);
    const steps = parseInt(stepsInput.value, 10);
    const method = methodSelect.value;

    const f = parseFunction(fnString);
    const fnExact = parseFunction(fnExactString);

    let result;
    if (method === "euler") {
        result = euler((x, y) => f.evaluate({ x, y }), x0, y0, h, steps);
    } else if (method === "eulerImproved") {
        result = eulerImproved((x, y) => f.evaluate({ x, y }), x0, y0, h, steps);
    }

    renderResults(result, fnExact);
});