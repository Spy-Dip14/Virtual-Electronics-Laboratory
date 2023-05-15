var rightconnection = false;
jsPlumb.ready(function() {

  var instance,
    discs = [],

    addDisc = function(evt) {
      var info = createDisc();
      var e = prepare(info.id);
      instance.draggable(info.id);
      discs.push(info.id);
      evt.stopPropagation();
      evt.preventDefault();
    },

    reset = function(e) {
      for (var i = 0; i < discs.length; i++) {
        var d = document.getElementById(discs[i]);
        if (d) d.parentNode.removeChild(d);
      }
      discs = [];
      e.stopPropagation();
      e.preventDefault();
    },

    initAnimation = function(elId) {
      var el = document.getElementById(elId);

      instance.on(el, 'click', function(e, ui) {
        if (el.className.indexOf("jsPlumb_dragged") > -1) {
          jsPlumb.removeClass(elId, "jsPlumb_dragged");
          return;
        }

      });
    },
    endpoint1 = {
      anchor: [0.5, 0.5, 0, -1],
      connectorStyle: { strokeWidth: 4, stroke: "rgba(0,0,255)" },
      endpointsOnTop: true,
      isSource: true,
      maxConnections: 10,
      isTarget: true,
      dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
    },
    endpoint2 = {
      anchor: [0.5, 0.5, 0, -1],
      connectorStyle: { strokeWidth: 4, stroke: "rgba(255,0,0)" },
      endpointsOnTop: true,
      isSource: true,
      maxConnections: 10,
      isTarget: true,
      dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
    },
    endpoint3 = {
      anchor: [0.5, 0.5, 0, -1],
      connectorStyle: { strokeWidth: 4, stroke: "rgba(0,255,0)" },
      endpointsOnTop: true,
      isSource: true,
      maxConnections: 10,
      isTarget: true,
      dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
    },
    prepare1 = function(elId) {
      initAnimation(elId);

      return instance.addEndpoint(elId, endpoint1);
    },
    prepare2 = function(elId) {
      initAnimation(elId);

      return instance.addEndpoint(elId, endpoint2);
    },
    prepare3 = function(elId) {
      initAnimation(elId);

      return instance.addEndpoint(elId, endpoint3);
    },


    // this is overridden by the YUI demo.
    createDisc = function() {
      var d = document.createElement("div");
      d.className = "bigdot";
      document.getElementById("animation-demo").appendChild(d);
      var id = '' + ((new Date().getTime()));
      d.setAttribute("id", id);
      var w = screen.width - 162, h = screen.height - 200;
      var x = (5 * w) + Math.floor(Math.random() * (10 * w));
      var y = (5 * h) + Math.floor(Math.random() * (10 * h));
      d.style.top = y + 'px';
      d.style.left = x + 'px';
      return { d: d, id: id };
    };

  // get a jsPlumb instance, setting some appropriate defaults and a Container.
  instance = jsPlumb.getInstance({
    DragOptions: { cursor: 'wait', zIndex: 20 },
    Endpoint: ["Image", { url: "/static/images/littledot.png" }],
    Connector: ["Bezier", { curviness: +90 }],
    Container: "canvas"
  });

  // suspend drawing and initialise.
  instance.batch(function() {
    var e1 = prepare1("ld1"),
      e2 = prepare2("ld2"),
      e3 = prepare3("ld3"),
      e4 = prepare1("ld4"),
      e5 = prepare2("ld5"),
      e6 = prepare3("ld6"),
      e7 = prepare3("ld7"),
      e8 = prepare2("ld8"),
      e9 = prepare1("ld9"),
      e10 = prepare1("ld10"),
      e11 = prepare3("ld11"),
      e12 = prepare1("ld12"),
      clearBtn = jsPlumb.getSelector("#anim-clear"),
      addBtn = jsPlumb.getSelector("#add");

    var detachLinks = jsPlumb.getSelector(".littledot .detach");
    instance.on(detachLinks, "click", function(e) {
      instance.deleteConnectionsForElement(this.getAttribute("rel"));
      jsPlumbUtil.consume(e);
    });

    instance.on(document.getElementById("clear"), "click", function(e) {
      instance.detachEveryConnection();
      showConnectionInfo("");
      jsPlumbUtil.consume(e);
    });
  });

  jsPlumb.fire("jsPlumbDemoLoaded", instance);

  document.getElementById("check-button").addEventListener("click", function() {

    var correct_connections_1_2 = [
      {
        "source": "ld1",
        "target": "ld2"
      },
      {
        "source": "ld2",
        "target": "ld1"
      },
      {
        "source": "ld3",
        "target": "ld5"
      },
      {
        "source": "ld5",
        "target": "ld3"
      },
      {
        "source": "ld4",
        "target": "ld6"
      },
      {
        "source": "ld6",
        "target": "ld4"
      }
    ];

    //a connection outside this will invalidate the circuit
    var allowed_connections = [
      {
        "source": "ld1",
        "target": "ld2"
      },
      {
        "source": "ld2",
        "target": "ld1"
      },
      {
        "source": "ld3",
        "target": "ld5"
      },
      {
        "source": "ld5",
        "target": "ld3"
      },
      {
        "source": "ld4",
        "target": "ld6"
      },
      {
        "source": "ld6",
        "target": "ld4"
      }
    ];

    var actual_connections = instance.getAllConnections();


    var is_connected_1_2 = false;
    var unallowed_connection_present = false;

    actual_connections.forEach(function(connection) {
      var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
      };

      if (!is_connected_1_2) {
        is_connected_1_2 = correct_connections_1_2.find(function(conn) {
          return conn.source === this_connection.source && conn.target === this_connection.target;
        });
      }

      if (!unallowed_connection_present) {
        unallowed_connection_present = !(allowed_connections.find(function(conn) {
          return conn.source === this_connection.source && conn.target === this_connection.target;
        }));
      }
    });

    //short cut can be used for debugging
    if (is_connected_1_2 && !unallowed_connection_present) {
      alert("Alert ! Correct connection proceed to take reading.");
      document.getElementById("check-button").disabled = true;
      document.getElementById("connection-table").innerHTML = "";
      rightconnection = true;
      disable_all();
    }
    else {
      alert("Alert ! Incorrect connection.");

      return;
    }
  });
});




function disable_all() {
  jsPlumb.ready(function() {

    var instance,

      initAnimation = function(elId) {
        var el = document.getElementById(elId);

        instance.on(el, 'click', function(e, ui) {
          if (el.className.indexOf("jsPlumb_dragged") > -1) {
            jsPlumb.removeClass(elId, "jsPlumb_dragged");
            return;
          }

        });
      },
      endpoint1 = {
        anchor: [0.5, 0.5, 0, -1],
        connectorStyle: { strokeWidth: 4, stroke: "rgba(0,0,255)" },
        endpointsOnTop: true,
        isSource: false,
        maxConnections: 10,
        isTarget: true,
        dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
      },
      endpoint2 = {
        anchor: [0.5, 0.5, 0, -1],
        connectorStyle: { strokeWidth: 4, stroke: "rgba(255,0,0)" },
        endpointsOnTop: true,
        isSource: false,
        maxConnections: 10,
        isTarget: true,
        dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
      },
      endpoint3 = {
        anchor: [0.5, 0.5, 0, -1],
        connectorStyle: { strokeWidth: 4, stroke: "rgba(0,255,0)" },
        endpointsOnTop: true,
        isSource: false,
        maxConnections: 10,
        isTarget: true,
        dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
      },
      prepare1 = function(elId) {
        initAnimation(elId);

        return instance.addEndpoint(elId, endpoint1);
      },
      prepare2 = function(elId) {
        initAnimation(elId);

        return instance.addEndpoint(elId, endpoint2);
      },
      prepare3 = function(elId) {
        initAnimation(elId);

        return instance.addEndpoint(elId, endpoint3);
      },

      // get a jsPlumb instance, setting some appropriate defaults and a Container.
      instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: ["Image", { url: "/static/images/littledot.png" }],
        Connector: ["Bezier", { curviness: +90 }],
        Container: "canvas"
      });

    // suspend drawing and initialise.
    instance.batch(function() {
      var e1 = prepare1("ld1"),
        e2 = prepare2("ld2"),
        e3 = prepare3("ld3"),
        e4 = prepare1("ld4"),
        e5 = prepare2("ld5"),
        e6 = prepare3("ld6"),
        e7 = prepare3("ld7"),
        e8 = prepare2("ld8"),
        e9 = prepare1("ld9"),
        e10 = prepare1("ld10"),
        e11 = prepare3("ld11"),
        e12 = prepare1("ld12"),
        clearBtn = jsPlumb.getSelector("#anim-clear"),
        addBtn = jsPlumb.getSelector("#add");
    });
  });
}


//var mcboffstate = true;

/*function mcbonoff() {
  if (rightconnection == true) {

    if (mcboffstate == true) {

      mcboffstate = false;
      document.getElementById('myimage').src = '/static/images/mcbon.png';
      document.getElementById('myimage1').src = '/static/images/push2.png';
      document.getElementById('myimage2').src = '/static/images/push2.png';
      document.getElementById('myimage3').src = '/static/images/push2.png';

      rangeChange();
    }

    else {
      return;
    }
  }
  else {
    alert("Alert ! Please complete the circuit or remove wrong connections");
  }
}*/

var rangeMeter = document.getElementById('range');
var rangeShow3 = document.getElementById("show03");
var table = document.getElementById('table2');
table.disabled = true;


var load = [0, 25, 50, 75, 100];
var Vmax = [5, 2.8, 1.25, 2, 2.5];
var Vmin = [-1.5, 0, 1.25, 0.5, 0];
var P = [-3.33, 0, 1, 4, 0];

var counter = 0;
document.getElementById('range').disabled = false;
rangeMeter.addEventListener('input', rangeChange);
function rangeChange() {
  const val = rangeMeter.value;
  rangeShow3.value = val;
  var a;
  var b;
  var c;
  if (val == 0) {
    a = Vmax[0];
    b = Vmin[0];
    c = P[0];
    //rangeMeter.disabled = true;
    table.disabled = false;
  }
  else if (val == 25) {
    a = Vmax[1];
    b = Vmin[1];
    c = P[1];
    //rangeMeter.disabled = true;
    table.disabled = false;
  }
  else if (val == 50) {
    a = Vmax[2];
    b = Vmin[2];
    c = P[2];
    //rangeMeter.disabled = true;
    table.disabled = false;
  }
  else if (val == 75) {
    a = Vmax[3];
    b = Vmin[3];
    c = P[3];
    //rangeMeter.disabled = true;
    table.disabled = false;
  }
  else if (val == 100) {
    a = Vmax[4];
    b = Vmin[4];
    c = P[4];
    //rangeMeter2.disabled = true;
    table.disabled = false;
  }
  else {
    rangeShow.value = undefined;

    rangeMeter.disabled = true;
    table.disabled = true;
  }
  counter++;
  if (counter > 2500000) {
    rangeMeter.disabled = true;
    //add.disabled = true;
    meterShow.disabled = true;
  }
}

var c = 0;
table.addEventListener('click', () => {
  var row = table1.insertRow(c + 1);
  const cell1 = row.insertCell(0);
  cell1.setAttribute('style', 'text-align: center; height: 40px; font-size: 18px; font-weight: bold;');
  const cell2 = row.insertCell(1);
  cell2.setAttribute('style', 'text-align: center; height: 40px; font-size: 18px; font-weight: bold;');
  const cell3 = row.insertCell(2);
  cell3.setAttribute('style', 'text-align: center; height: 40px; font-size: 18px; font-weight: bold;');
  const cell4 = row.insertCell(3);
  cell4.setAttribute('style', 'text-align: center; height: 40px; font-size: 18px; font-weight: bold;');
  const cell5 = row.insertCell(4);
  cell5.setAttribute('style', 'text-align: center; height: 40px; font-size: 18px; font-weight: bold;');
  //const cell6 = row.insertCell(5);
  //cell6.setAttribute('style', 'text-align: center; height: 40px; font-size: 18px; font-weight: bold;');


  cell1.innerHTML = c + 1;
  cell2.innerHTML = load[c];
  cell3.innerHTML = Vmax[c];
  cell4.innerHTML = Vmin[c];
  cell5.innerHTML = P[c];
  if (c < 4) {
    rangeMeter.disabled = false;

  }
  else {
    table.disabled = true;
  }
  //trace1.x.push(cell3.innerHTML);
  //trace1.y.push(cell4.innerHTML);
  c++;

});

//var trace1 = {
// x: [],
//  y: [],
//  z: [],
//  type: 'scatter'
//};

function drawgraph() {
  var data = [trace1];
  var layout = {
    xaxis: {
      title: {
        text: 'Current(A)',
        font:
        {
          family: 'Courier New, monoscope',
          size: 18,
          color: '#ff0000'
        }
      },
    },
    yaxis: {
      title: {
        text: 'Speed(rpm)',
        font:
        {
          family: 'Courier New, monoscope',
          size: 18,
          color: '#ff0000'
        }
      },
    }
  };
  Plotly.newPlot('myDiv', data, layout, { showSendToCloud: true });
  document.getElementById("graph").disabled = true;
}