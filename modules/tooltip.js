// Funktioner för att visa och stänga tooltips som visar namn på planeterna.

function showTooltip(planet) {
  hideTooltip(planet);
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.textContent = planet.id.charAt(0).toUpperCase() + planet.id.slice(1);
  planet.appendChild(tooltip);
}

// Function to hide tooltip
function hideTooltip(planet) {
  const tooltips = planet.querySelectorAll('.tooltip');
  tooltips.forEach(tooltip => {
    tooltip.remove();
  });
}


export {showTooltip}
export {hideTooltip}
