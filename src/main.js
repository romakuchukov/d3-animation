const data = [];

let i = 100;
while (i--) data.push(i);

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);


const svg = d3.select('body').append('svg').attr('height', '100%').attr('width', '100%')

const rects = svg.selectAll('.rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('width', 2)
  .attr('height', 2)
  .attr('x', d => d)
  .attr('y', 250)
  .attr('fill', 'steelblue');

//svg.append('rect')

console.log();
//rand(1, 10)*1000
const repeat = () => {
  rects
    .transition()
    .duration(() => rand(1, 10)*1000)
    .attr('fill', 'red')
    .transition()
    .duration(500)
    .attr('fill', 'steelblue')
    .on('end', repeat);
};

repeat();
