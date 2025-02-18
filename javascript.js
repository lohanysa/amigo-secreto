document.getElementById("startButton").addEventListener("click", function() {
  const namesInput = document.getElementById("names").value;
  const names = namesInput.split(',').map(name => name.trim());

  if (names.length < 2) {
    alert("Por favor, ingresa al menos dos nombres.");
    return;
  }

  const shuffledNames = shuffleArray(names);
  const assignments = getAssignments(shuffledNames);

  displayResults(assignments);
});

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
  }
  return arr;
}

function getAssignments(names) {
  const assignments = [];
  for (let i = 0; i < names.length; i++) {
    assignments.push({
      name: names[i],
      secretFriend: names[(i + 1) % names.length]
    });
  }
  return assignments;
}

function displayResults(assignments) {
  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = '';
  
  assignments.forEach(assignment => {
    const p = document.createElement("p");
    p.textContent = `${assignment.name} tiene como amigo secreto a ${assignment.secretFriend}`;
    resultContainer.appendChild(p);
  });
}
