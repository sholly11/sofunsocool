// Sample data for the story map
const contents = [
    { id: "writing1", title: "Writing 1", description: "Description 1", type: "writing", pdf: "pdfs/writing1.pdf" },
    { id: "videos1", title: "Videos 1", description: "Description 2", type: "videos" },
    { id: "articles1", title: "Articles 1", description: "Description 3", type: "articles" },
    { id: "data1", title: "Data 1", description: "Description 4", type: "data" },
    { id: "images1", title: "Images 1", description: "Description 5", type: "images" },
    { id: "writing2", title: "Writing 2", description: "Description 6", type: "writing", pdf: "pdfs/writing2.pdf" },
    { id: "videos2", title: "Videos 2", description: "Description 7", type: "videos" },
    { id: "articles2", title: "Articles 2", description: "Description 8", type: "articles" },
    { id: "data2", title: "Data 2", description: "Description 9", type: "data" },
    { id: "images2", title: "Images 2", description: "Description 10", type: "images" }
];

// Add click event listeners to content squares and set their positions
contents.forEach(content => {
    const element = document.getElementById(content.id);
    element.addEventListener("click", () => {
        handleContentClick(content);
    });
    
    // Set the position of the content item
    const mapWidth = document.getElementById("map").offsetWidth;
    const mapHeight = document.getElementById("map").offsetHeight;
    const randomLeft = Math.random() * (mapWidth - 20); // Random left position within the map width
    const randomTop = Math.random() * (mapHeight - 20); // Random top position within the map height
    element.style.left = `${randomLeft}px`;
    element.style.top = `${randomTop}px`;
});

// Function to handle click on content
function handleContentClick(content) {
    if (content.type === "writing") {
        // Open the PDF file in a new tab
        window.open(content.pdf, "_blank");
    } else {
        alert(`Title: ${content.title}\nDescription: ${content.description}`);
        // You can replace the alert with any other action you want
    }
}
