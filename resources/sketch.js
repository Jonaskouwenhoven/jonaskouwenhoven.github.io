console.log("Script is loading...");

let brushStrokes = [];

// function setup() {
//     console.log("Setting up canvas...");
//     let canvas = createCanvas(windowWidth, windowHeight);
//     canvas.position(0, 0);
//     // Changed z-index to a positive value to make sure it's visible
//     canvas.style('z-index', '1');
//     colorMode(HSB, 360, 100, 100, 1);
//     background(220, 10, 95);
// }

function draw() {
    for (let brush of brushStrokes) {
        brush.update();
        brush.display();
    }
}

function mouseMoved() {
    if (mouseY < windowHeight) {
        let brush = new BrushStroke(mouseX, mouseY);
        brushStrokes.push(brush);
    }
}

class BrushStroke {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D().mult(random(2, 5));
        this.size = random(20, 50);
        this.color = color(random(360), 80, 80, 0.1);
        this.lifespan = 255;
    }

    update() {
        this.pos.add(this.vel);
        this.lifespan -= 2;
    }

    display() {
        noStroke();
        fill(this.color);
        ellipse(this.pos.x, this.pos.y, this.size);
    }
}

// Project Timeline
const projects = [
    {
        title: "CBS Knowledge Graph QA System",
        description: "Developed a system to query statistical data using LLMs, Information Retrieval, and Knowledge Graphs."
    },
    {
        title: "Art Authentication Analysis",
        description: "Investigated art authentication using computer vision techniques on Leonardo Da Vinci's notebooks."
    },
    {
        title: "Content-Based Image Retrieval Demo",
        description: "Created a demo for searching a fine art database using textual descriptions and various retrieval techniques."
    },
    {
        title: "OVO Energy Forecast",
        description: "Developed the AI pipeline for data-driven installation, transforming UK stories into visual display at Euston Station."
    },
    {
        title: "Master's Thesis: Constrained LLM-based Query Generation",
        description: "Research on Question Answering for Official Statistics, accepted for ECAI conference 2024."
    },
    {
        title: "Bachelor's Thesis: Feature Extraction from Da Vinci's Handwriting",
        description: "Explored feature extraction as a tool for art authentication, focusing on Leonardo Da Vinci's work."
    }
];

function addProjects() {
    console.log("Adding projects...");
    const container = document.querySelector('.projects-container');
    projects.forEach((project, index) => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        container.appendChild(projectElement);
    });
}

window.addEventListener('load', () => {
    console.log("Window loaded. Adding projects...");
    addProjects();
});
