function init(record) {
                var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};
                var ctx = $(".canvas").get(0).getContext("2d");

                var data = {
                    labels: ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5"],
                    datasets: [
                        {
                            fillColor : "rgba(151,187,205,0.5)",
                            strokeColor : "rgba(151,187,205,0.8)",
                            highlightFill : "rgba(151,187,205,0.75)",
                            highlightStroke : "rgba(151,187,205,1)",
                            data:record
                        }
                    ]
                }

                var myNewChart = new Chart(ctx).Bar(data, {
                    responsive : true
                });
            }
$(document).ready(function() {
    var socket = io();
$("#que_form").submit(function(event) {
    event.preventDefault();
    //console.log("Form clicked");
    var formdata = $("#que_form").serializeArray();
    console.log("got data"+formdata);
    var object=[];
    for(var i=0;i<5;i++)
    {
        object.push(formdata[i].value)
    }
    console.log(object);
    $(".canvas").html('');
    socket.emit('display_chart',object);

});

socket.on('display_chart',function(data){
        //console.log("almost done");
        init(data);
});
});
