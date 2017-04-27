var width = 500,
    height = 500,
    radius = Math.min(width, height) / 2;

var arc = d3.svg.arc()
    // .attr('id', function(d) {return 'arc' + d.data.is;})
    .innerRadius(0)
    .outerRadius(function (d) {
        return radius * (d.data.score / 100.0);
    })
    .cornerRadius(0)
    .padAngle(0)

var outlineArc = d3.svg.arc()
    .innerRadius(0)
    .outerRadius(radius)
    .padAngle(0);

var pie = d3.layout.pie()
    .padAngle(0)
    .sort(null)
    .value(function (d) {
        return d.width;
    });

var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([0, 0])
    .html(function (d) {
        return d.data.label + ": <span style='color:orangered'>" + d.data.score + "</span>";
    });


var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

svg.call(tip);

/* Create Shadow filter */

var defs = svg.append("defs");

var filter = defs.append("filter")
    .attr("id", "drop-shadow")
    .attr("height", "130%")

filter.append("feGaussianBlur")
    .attr("in", "SourceAlpha")
    .attr("stdDeviation", "2")
    .attr("result", "blur");

filter.append("feOffset")
    .attr("in", "blur")
    .attr("dx", 3)
    .attr("dy", 3)
    .attr("result", "offsetBlur");

filter.append("feFlood")
    .attr("flood-color", "#3D4574")
    .attr("flood-opacity", 0.5)
    .attr("result", "offsetColor");

filter.append("feComposite")
    .attr('operator', 'in')
    .attr('in', 'offsetColor')
    .attr("in2", "offsetBlur")
    .attr("result", "offsetBlur");

var feMerge = filter.append("feMerge");

feMerge.append("feMergeNode")
    .attr("in", "offsetBlur")
feMerge.append("feMergeNode")
    .attr("in", "SourceGraphic");

/*  */

function buildChart() {
    let colorProvider = new ColorProvider();
    d3.json("http://59004f81df801b00113c4d0a.mockapi.io/chart", function (error, data) {
        data.forEach(function (d) {
            let col = colorProvider.next();

            d.id = d.id;
            d.order = d.order;
            d.color = col.color;
            d.weight = 1;
            d.score = d.score;
            d.width = d.weight;
            d.label = d.label;
        });

        svg.selectAll(".solidArc").remove();
        var path = svg.selectAll(".solidArc").data(pie(data));

        path
            .enter()
            .append("path")
            .attr("fill", function (d) {
                return d.data.color;
            })
            .attr("class", "solidArc")
            .attr("stroke", "#6e6e6e")
            .attr("stroke-width", 0.5)
            .attr('fill-opacity', 1)
            .style("filter", "url(#drop-shadow)")
            .attr("d", arc)
            .on('mouseout', tip.hide, function (d) {
                d3.select(this)
                    .transition()
                    .duration(300)
                    .style('stroke-width', d.w);
            })
            .on('mouseover', tip.show, function (d) {
                d3.select(this)
                    .transition()
                    .duration(300)
                    .style('stroke-width', 2);
            })

        path.exit().remove()

        svg.selectAll(".outlineArc").remove();
        var outerPath = svg.selectAll(".outlineArc").data(pie(data));
        outerPath
            .enter()
            .append("path")
            .attr("fill", "none")
            .attr("stroke", "white")
            .attr("stroke-width", 2)
            .attr("class", "outlineArc")
            .attr("d", outlineArc);

    });
    clearTimeout(timeout);
    timeout = setTimeout(buildChart, 10000);
}
var timeout;

buildChart();
