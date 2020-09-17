const data = [];

let i = 10;
while (i--) data.push(i);

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);


const svg = d3.select('body').append('svg').attr('height', '100%').attr('width', '100%');

const rects = svg.selectAll('.rect')
  // .data(data)
  // .enter()
  // .append('rect')
  // .attr('width', 5)
  // .attr('height', 5)
  // .attr('x', d => d*5)
  // .attr('y', 250)
  // .attr('fill', 'steelblue');


for (const i of data) {
  rects.data(data)
    .enter()
    .append('rect')
    .attr('width', 5)
    .attr('height', 5)
    .attr('x', i*5)
    .attr('y', d => d*5)
    .attr('fill', 'steelblue')
    .transition()
    .duration(() => rand(1, 10)*1000)
    .attr('fill', 'red')
    .transition()
    .duration(5000)
    .attr('fill', 'steelblue')
    .on('end', repeat);
}


const repeat = () => {

  rects.on('end', repeat);
};

repeat();
