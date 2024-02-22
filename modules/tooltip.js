
let tooltipTimeout;
function showTooltip(planet) {
  if (!planet.querySelector('.tooltip')) {
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.textContent = planet.id.charAt(0).toUpperCase() + planet.id.slice(1);
  planet.appendChild(tooltip);
  }
}

// Function to hide tooltip
function hideTooltip(planet) {
  const tooltip = planet.querySelector('.tooltip');
  if (tooltip) {
    tooltip.remove();
  }
}

export {showTooltip}
export {hideTooltip}