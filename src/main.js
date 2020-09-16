const svg = d3.select('body').append('svg').attr('width', 960).attr('height', 500);
const timeCircle = svg.append('circle').attr('r', 20).attr('cy', 250).attr('cx', 40).attr('fill', 'steelblue');

const repeat = () => {
  timeCircle
    .transition()
    .duration(5000)
    .attr('fill', 'red')
    .transition()
    .duration(5000)
    .attr('fill', 'steelblue')
    .on('end', repeat);
};

repeat();