var rightconnection = false;
var datapoints1 = [];
jsPlumb.ready(function () {

    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);

            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }

            });
        },
        endpoint1 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 2, stroke: "rgba(0,0,255)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 15,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        endpoint2 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 2, stroke: "rgba(255,0,0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 15,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        endpoint3 = {
            anchor: [0.5, 0.5, 0, 0.5],
            connectorStyle: { strokeWidth: 2, stroke: "rgba(0,255,0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 15,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        endpoint4 = {
            anchor: [0.5, 0.5, 5.5, 4],
            connectorStyle: { strokeWidth: 2, stroke: "rgba(0,255,255)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 15,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        endpoint5 = {
            anchor: "AutoDefault",//[0.5, 0.5, -5, -6.5],
            connectorStyle: { strokeWidth: 2, stroke: "rgba(0,0,255)" },
            endpointsOnTop: true,
            isSource: false,
            maxConnections: 15,
            isTarget: false,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare1 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint1);
        },
        prepare2 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint2);
        },
        prepare3 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint3);
        },
        prepare4 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint4);
        },
        prepare5 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint5);
        },

        // this is overridden by the YUI demo.
        createDisc = function () {
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
    instance.batch(function () {
        var e1 = prepare1("ld1"),
            e2 = prepare2("ld2"),
            e3 = prepare3("ld3"),
            e4 = prepare1("ld4"),
            e5 = prepare3("ld5"),
            e6 = prepare2("ld6"),
            e7 = prepare3("ld7"),
            e8 = prepare3("ld8"),
            e9 = prepare3("ld9"),
            e10 = prepare3("ld10"),
            e11 = prepare2("ld11"),
            e12 = prepare3("ld12"),
            e13 = prepare2("ld13"),
            e14 = prepare4("ld14"),
            e15 = prepare2("ld15"),
            e16 = prepare3("ld16"),
            e17 = prepare4("ld17"),
            e18 = prepare3("ld18"),
            e19 = prepare2("ld19"),
            e20 = prepare3("ld20"),
            e21 = prepare4("ld21"),
            e22 = prepare3("ld22"),
            e23 = prepare2("ld23"),
            e24 = prepare3("ld24"),
            e25 = prepare4("ld25"),
            e26 = prepare3("ld26"),
            e27 = prepare2("ld27"),
            e28 = prepare3("ld28"),
            e29 = prepare4("ld29"),
            e30 = prepare3("ld30"),
            e31 = prepare2("ld31"),
            e32 = prepare3("ld32"),
            e33 = prepare4("ld33"),
            e34 = prepare3("ld34"),
            e35 = prepare2("ld35"),
            e36 = prepare3("ld36"),
            clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");

        var detachLinks = jsPlumb.getSelector(".littledot .detach");
        instance.on(detachLinks, "click", function (e) {
            instance.deleteConnectionsForElement(this.getAttribute("rel"));
            jsPlumbUtil.consume(e);
        });

        instance.on(document.getElementById("clear"), "click", function (e) {
            instance.detachEveryConnection();
            showConnectionInfo("");
            jsPlumbUtil.consume(e);
        });
    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);

    document.getElementById("check-button").addEventListener("click", function () {
        var correct_connections_1_3 = [
            {
                "source": "ld1",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld1"
            }
        ];

        var correct_connections_2_4 = [
            {
                "source": "ld2",
                "target": "ld4"
            },

            {
                "source": "ld4",
                "target": "ld2"
            }
        ];
        var correct_connections_4 = [
            {
                "source": "ld33",
                "target": "ld36"
            },
            {
                "source": "ld24",
                "target": "ld36"
            },

            {
                "source": "ld4",
                "target": "ld36"
            }
        ];
        var correct_connections_5_12 = [
            {
                "source": "ld12",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld12"
            }
        ];
        var correct_connections_6_7 = [
            {
                "source": "ld6",
                "target": "ld7"
            },

            {
                "source": "ld7",
                "target": "ld6"
            }
        ];
        var correct_connections_9 = [
            {
                "source": "ld9",
                "target": "ld34"
            },
            {
                "source": "ld27",
                "target": "ld34"
            },

            {
                "source": "ld14",
                "target": "ld34"
            }
        ];
        var correct_connections_10 = [
            {
                "source": "ld10",
                "target": "ld35"
            },
            {
                "source": "ld28",
                "target": "ld35"
            },

            {
                "source": "ld15",
                "target": "ld35"
            }
        ];
        var correct_connections_8_11 = [
            {
                "source": "ld11",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld11"
            }
        ];
        var correct_connections_11_17 = [
            {
                "source": "ld11",
                "target": "ld17"
            },

            {
                "source": "ld17",
                "target": "ld11"
            }
        ];
        var correct_connections_13_16 = [
            {
                "source": "ld13",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "ld13"
            }
        ];
        var correct_connections_16_21 = [
            {
                "source": "ld16",
                "target": "ld21"
            },

            {
                "source": "ld21",
                "target": "ld16"
            }
        ];
        var correct_connections_18 = [
            {
                "source": "ld18",
                "target": "ld19"
            },

            {
                "source": "ld18",
                "target": "ld26"
            }
        ];
        var correct_connections_22 = [
            {
                "source": "ld22",
                "target": "ld23"
            },

            {
                "source": "ld22",
                "target": "ld25"
            }
        ];
        var correct_connections_20_29 = [
            {
                "source": "ld20",
                "target": "ld29"
            },

            {
                "source": "ld29",
                "target": "ld20"
            }
        ];
        var correct_connections_29_30 = [
            {
                "source": "ld29",
                "target": "ld30"
            },

            {
                "source": "ld30",
                "target": "ld29"
            }
        ];
        var correct_connections_31_32 = [
            {
                "source": "ld31",
                "target": "ld32"
            },

            {
                "source": "ld32",
                "target": "ld31"
            }
        ];


        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld1"
            },
            {
                "source": "ld2",
                "target": "ld4"
            },

            {
                "source": "ld4",
                "target": "ld2"
            },
            {
                "source": "ld33",
                "target": "ld36"
            },
            {
                "source": "ld24",
                "target": "ld36"
            },

            {
                "source": "ld4",
                "target": "ld36"
            },
            {
                "source": "ld12",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld12"
            },
            {
                "source": "ld6",
                "target": "ld7"
            },

            {
                "source": "ld7",
                "target": "ld6"
            },
            {
                "source": "ld9",
                "target": "ld34"
            },
            {
                "source": "ld27",
                "target": "ld34"
            },

            {
                "source": "ld14",
                "target": "ld34"
            },
            {
                "source": "ld10",
                "target": "ld35"
            },
            {
                "source": "ld28",
                "target": "ld35"
            },

            {
                "source": "ld15",
                "target": "ld35"
            },
            {
                "source": "ld11",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld11"
            },
            {
                "source": "ld11",
                "target": "ld17"
            },

            {
                "source": "ld17",
                "target": "ld11"
            },
            {
                "source": "ld13",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "ld13"
            },
            {
                "source": "ld16",
                "target": "ld21"
            },

            {
                "source": "ld21",
                "target": "ld16"
            },
            {
                "source": "ld18",
                "target": "ld19"
            },

            {
                "source": "ld18",
                "target": "ld26"
            },
            {
                "source": "ld22",
                "target": "ld23"
            },

            {
                "source": "ld22",
                "target": "ld25"
            },
            {
                "source": "ld20",
                "target": "ld29"
            },

            {
                "source": "ld29",
                "target": "ld20"
            },
            {
                "source": "ld29",
                "target": "ld30"
            },

            {
                "source": "ld30",
                "target": "ld29"
            },
            {
                "source": "ld31",
                "target": "ld32"
            },

            {
                "source": "ld32",
                "target": "ld31"
            }
        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_1_3 = false;
        var is_connected_2_4 = false;
        var is_connected_4 = false;
        var is_connected_5_12 = false;
        var is_connected_6_7 = false;
        var is_connected_9 = false;
        var is_connected_10 = false;
        var is_connected_8_11 = false;
        var is_connected_11_17 = false;
        var is_connected_13_16 = false;
        var is_connected_16_21 = false;
        var is_connected_18 = false;
        var is_connected_22 = false;
        var is_connected_20_29 = false;
        var is_connected_29_30 = false;
        var is_connected_31_32 = false;
        var unallowed_connection_present = false;

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_1_3) {
                is_connected_1_3 = correct_connections_1_3.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_2_4) {
                is_connected_2_4 = correct_connections_2_4.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_4) {
                is_connected_4 = correct_connections_4.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_5_12) {
                is_connected_5_12 = correct_connections_5_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_6_7) {
                is_connected_6_7 = correct_connections_6_7.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_9) {
                is_connected_9 = correct_connections_9.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_10) {
                is_connected_10 = correct_connections_10.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_8_11) {
                is_connected_8_11 = correct_connections_8_11.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if (!is_connected_11_17) {
                is_connected_11_17 = correct_connections_11_17.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if (!is_connected_13_16) {
                is_connected_13_16 = correct_connections_13_16.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if (!is_connected_16_21) {
                is_connected_16_21 = correct_connections_16_21.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if (!is_connected_18) {
                is_connected_18 = correct_connections_18.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if (!is_connected_22) {
                is_connected_22 = correct_connections_22.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if (!is_connected_20_29) {
                is_connected_20_29 = correct_connections_20_29.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if (!is_connected_29_30) {
                is_connected_29_30 = correct_connections_29_30.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if (!is_connected_31_32) {
                is_connected_31_32 = correct_connections_31_32.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });

        if (is_connected_1_3 && is_connected_2_4 && is_connected_4 && is_connected_5_12 && is_connected_6_7 && is_connected_9 && is_connected_10 && is_connected_8_11 && is_connected_11_17 && is_connected_13_16 && is_connected_16_21 && is_connected_18 && is_connected_22 && is_connected_20_29 && is_connected_29_30 && is_connected_31_32 && !unallowed_connection_present) {
            alert("Alert ! Correct connection proceed to take reading.");
            document.getElementById("check-button").disabled = true;
            document.querySelector("#connection-table").innerHTML = "";
            rightconnection = true;
            disable_all();
            return;
        }
        else {
            alert("Alert ! Incorrect connection.");

            return;
        }
    });
});




function disable_all() {
    jsPlumb.ready(function () {

        var instance,

            initAnimation = function (elId) {
                var el = document.getElementById(elId);

                instance.on(el, 'click', function (e, ui) {
                    if (el.className.indexOf("jsPlumb_dragged") > -1) {
                        jsPlumb.removeClass(elId, "jsPlumb_dragged");
                        return;
                    }

                });
            },
            endpoint1 = {
                anchor: [0.5, 0.5, 0, -1],
                connectorStyle: { strokeWidth: 2, stroke: "rgba(0,0,255)" },
                endpointsOnTop: true,
                isSource: false,
                maxConnections: 15,
                isTarget: true,
                dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
            },
            endpoint2 = {
                anchor: [0.5, 0.5, 0, -1],
                connectorStyle: { strokeWidth: 2, stroke: "rgba(255,0,0)" },
                endpointsOnTop: true,
                isSource: false,
                maxConnections: 15,
                isTarget: true,
                dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
            },
            endpoint3 = {
                anchor: [0.5, 0.5, 0, -1],
                connectorStyle: { strokeWidth: 2, stroke: "rgba(0,255,0)" },
                endpointsOnTop: true,
                isSource: false,
                maxConnections: 15,
                isTarget: true,
                dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
            },
            endpoint4 = {
                anchor: [0.5, 0.5, 0, -1],
                connectorStyle: { strokeWidth: 2, stroke: "rgba(0,255,255)" },
                endpointsOnTop: true,
                isSource: false,
                maxConnections: 15,
                isTarget: true,
                dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
            },
            endpoint5 = {
                anchor: [0.5, 0.5, 0, -1],
                connectorStyle: { strokeWidth: 2, stroke: "rgba(0,255,0)" },
                endpointsOnTop: true,
                isSource: false,
                maxConnections: 15,
                isTarget: false,
                dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
            },
            prepare1 = function (elId) {
                initAnimation(elId);

                return instance.addEndpoint(elId, endpoint1);
            },
            prepare2 = function (elId) {
                initAnimation(elId);

                return instance.addEndpoint(elId, endpoint2);
            },
            prepare3 = function (elId) {
                initAnimation(elId);

                return instance.addEndpoint(elId, endpoint3);
            },
            prepare4 = function (elId) {
                initAnimation(elId);

                return instance.addEndpoint(elId, endpoint4);
            },
            prepare5 = function (elId) {
                initAnimation(elId);

                return instance.addEndpoint(elId, endpoint5);
            },

            // get a jsPlumb instance, setting some appropriate defaults and a Container.
            instance = jsPlumb.getInstance({
                DragOptions: { cursor: 'wait', zIndex: 20 },
                Endpoint: ["Image", { url: "/static/images/littledot.png" }],
                Connector: ["Bezier", { curviness: +90 }],
                Container: "canvas"
            });

        // suspend drawing and initialise.
        instance.batch(function () {
            var e1 = prepare1("ld1"),
                e2 = prepare2("ld2"),
                e3 = prepare3("ld3"),
                e4 = prepare1("ld4"),
                e5 = prepare3("ld5"),
                e6 = prepare2("ld6"),
                e7 = prepare3("ld7"),
                e8 = prepare2("ld8"),
                e9 = prepare3("ld9"),
                e10 = prepare2("ld10"),
                e11 = prepare2("ld11"),
                e12 = prepare3("ld12"),
                e13 = prepare2("ld13"),
                e14 = prepare4("ld14"),
                e15 = prepare2("ld15"),
                e16 = prepare3("ld16"),
                e17 = prepare4("ld17"),
                e18 = prepare3("ld18"),
                e19 = prepare2("ld19"),
                e20 = prepare3("ld20"),
                e21 = prepare4("ld21"),
                e22 = prepare3("ld22"),
                e23 = prepare2("ld23"),
                e24 = prepare3("ld24"),
                e25 = prepare4("ld25"),
                e26 = prepare3("ld26"),
                e27 = prepare2("ld27"),
                e28 = prepare3("ld28"),
                e29 = prepare4("ld29"),
                e30 = prepare3("ld30"),
                e31 = prepare2("ld31"),
                e32 = prepare3("ld32"),
                e33 = prepare4("ld33"),
                e34 = prepare3("ld34"),
                e35 = prepare2("ld35"),
                e36 = prepare3("ld36"),

                clearBtn = jsPlumb.getSelector("#anim-clear"),
                addBtn = jsPlumb.getSelector("#add");
        });
    });
}


var mcboffstate = true;

function mcbonoff() {
    if (rightconnection == true) {
        if (mcboffstate == true) {
            mcboffstate = false;
            document.getElementById('myimage').src = '/static/images/mcbon.png';
            document.getElementById('myimage1').src = '/static/images/push2.png';
            document.getElementById('myimage2').src = '/static/images/push2.png';
            document.getElementById('myimage3').src = '/static/images/push2.png';
            document.getElementById("range2").disabled = false;
            //document.getElementById("range1").disabled = false;
            //rangeChange1();
        }
        else {
            return;
        }
    }
    else {
        alert("𝐀𝐥𝐞𝐫𝐭 ! 𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐞 𝐭𝐡𝐞 𝐜𝐢𝐫𝐜𝐮𝐢𝐭 𝐨𝐫 𝐫𝐞𝐦𝐨𝐯𝐞 𝐰𝐫𝐨𝐧𝐠 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧𝐬");
    }
}
//change
//var rangeMeter1 = document.querySelector('#range1');
var rangeMeter2 = document.querySelector('#range2');

//var rangeShow1 = document.querySelector("#show1");
var rangeShow2 = document.querySelector("#show2");
//var rangeShow3 = document.querySelector("#show3");
var rangeShow4 = document.querySelector("#show4");

//var meterShow1 = document.getElementById("show01");
//var meterShow2 = document.getElementById("show02");
//var meterShow3 = document.getElementById("show03");
var meterShow4 = document.getElementById("show04");

//var rangeClock1 = document.querySelector('#meter1');
var rangeClock2 = document.querySelector('#meter2');
//var rangeClock3 = document.querySelector('#meter3');

var table1 = document.querySelector('#table1');
//var table2 = document.querySelector('#table2');

// var pot_resistance = [252,536,622,729,1000];
// var op_voltage = [0.287,-0.282,0.308,0.293,0.3];
var pot_resistance = [517,595,632,660,694];
var op_voltage = [6.47,7.44,7.90,-8.34,8.68];
// var field_current_prev = [0.08, 0.17, 0.24, 0.3];
// var speed_prev = [1104, 1245, 1367, 1490];

// var armature_voltage = 220;
// var armature_current = [1.21, 1.3, 1.5, 1.7, 1.9, 2.1, 2.3, 2.5];
// var field_current = 0.3;
// var speed = [1490, 1483, 1450, 1413, 1380, 1350, 1328, 1312];
// var s1 = [0, 2.5, 2.8, 3, 3.5, 3.8, 4, 4.1];
// var s2 = 0;

// rangeMeter1.addEventListener('input', rangeChange1);
// var counter_prev = 0;
// function rangeChange1() {
//     const val = +rangeMeter1.value;

//     meterShow1.value = val;

//     rangeShow1.value = field_current_prev[val];
//     rangeClock1.style.transform = 'rotate(' + (-62 + (+rangeShow1.value * 100)) + 'deg)';
//     rangeShow2.value = armature_voltage_prev[val];
//     rangeClock2.style.transform = 'rotate(' + (-62 + (+rangeShow2.value / 4)) + 'deg)';
//     rangeShow3.value = armature_current_prev[val];
//     rangeClock3.style.transform = 'rotate(' + (-62 + (+rangeShow3.value * 25)) + 'deg)';
//     rangeShow4.value = speed_prev[val];
//     document.getElementById('cirmover').style.animation = `rotation ${(1550 - +rangeShow4.value) / 400}s infinite linear`;

//     if (val == counter_prev) {
//         const y = table2.insertRow(++counter_prev);
//         const cell1 = y.insertCell(0);
//         cell1.setAttribute('style', 'text-align: center; height: 40px; font-size: 18px; font-weight: bold;');
//         cell1.innerHTML = speed_prev[val];
//     }

//     if (val == 3) {
//         document.getElementById("range1").disabled = true;
//         setTimeout(function () {
//             alert("𝐍𝐨𝐰 Apply load on the pulley by tightening the belt in steps till the motor armature current reaches near its rated value. In all positions take the necessary readings.");
//         }, 1000);
//         rangeMeter2.disabled = false;
//     }
// }

var counter = 0;
//document.getElementById("range2").disabled = false;
rangeMeter2.addEventListener('input', rangeChange2);
function rangeChange2() {
    //rangeMeter2.value=pot_resistance[counter];
    const val = rangeMeter2.value;//+
    var a;
    meterShow4.value = val;
    //meterShow4.innerHTML=rangeMeter2.value;

    //rangeShow1.value = field_current;
    //rangeClock1.style.transform = 'rotate(' + (-62 + (+rangeShow1.value * 100)) + 'deg)';
    //rangeShow2.value = armature_voltage;
    //rangeClock2.style.transform = 'rotate(' + (-62 + (+rangeShow2.value )) + 'deg)';
    //rangeShow3.value = armature_current[val];
    //rangeClock3.style.transform = 'rotate(' + (-62 + (+rangeShow3.value * 25)) + 'deg)';

    //meterShow2.value = s1[val];
    //meterShow3.value = s2;
    //var c=1;
    //rangeShow4.value = speed[val];
    if(val==517){
        a=op_voltage[0];
        rangeShow2.value=a;
        //rangeMeter2.disabled = true;
        addToTable.disabled = false;
    }
    else if(val==595){
        a=op_voltage[1];
        rangeShow2.value=a;
        //rangeMeter2.disabled = true;
        addToTable.disabled = false;
    }
    else if(val==632){
        a=op_voltage[2];
        rangeShow2.value=a;
        //rangeMeter2.disabled = true;
        addToTable.disabled = false;
    }
    else if(val==660){
        a=op_voltage[3];
        rangeShow2.value=a;
        //rangeMeter2.disabled = true;
        addToTable.disabled = false;
    }
    else if(val==694){
        a=op_voltage[4];
        rangeShow2.value=a;
        //rangeMeter2.disabled = true;
        addToTable.disabled = false;
    }
    else{
        rangeShow2.value=undefined;
         //rangeMeter2.disabled = true;
         addToTable.disabled = true;
    }
    //document.getElementById('cirmover').style.animation = `rotation ${(1550 - +rangeShow4.value) / 400}s infinite linear`;
    
     //if (val == pot_resistance[counter]) {
    //     rangeMeter2.disabled = true;
    //     addToTable.disabled = false;
            
     //}
    counter++;
    // if (c < 6) {
    //     rangeMeter2.disabled = false;
    // }
    // else {
    //     //graph.disabled = false;
    //     addToTable.disabled = true;
    // }
    // //addToTable.disabled = true;
    //c++;
    if(counter>1000)
    {
        rangeMeter2.disabled=true;
        //addToTable.disabled=true;
        meterShow4.disabled=true;
    }

}


// var trace1 = {
//     x: [],
//     y: [],
//     z: [],
//     type: 'scatter'
// };
var c=1;
//document.getElementById("addToTable").disabled=false;//modify
addToTable.addEventListener('click', () => {
   var y = table1.insertRow(c);
    const cell1 = y.insertCell(0);
    cell1.setAttribute('style', 'text-align: center; height: 40px; font-size: 18px; ');
    const cell2 = y.insertCell(1);
   cell2.setAttribute('style', 'text-align: center; height: 40px; font-size: 18px; ');
  const cell3 = y.insertCell(2);
     cell3.setAttribute('style', 'text-align: center; height: 40px; font-size: 18px; font-weight: bold;');
    // const cell4 = y.insertCell(3);
    // cell4.setAttribute('style', 'text-align: center; height: 40px; font-size: 18px; font-weight: bold;');
    // const cell5 = y.insertCell(4);
    // cell5.setAttribute('style', 'text-align: center; height: 40px; font-size: 18px; font-weight: bold;');
    // const cell6 = y.insertCell(5);
    // cell6.setAttribute('style', 'text-align: center; height: 40px; font-size: 18px; font-weight: bold;');
    // const cell7 = y.insertCell(6);
    // cell7.setAttribute('style', 'text-align: center; height: 40px; font-size: 18px; font-weight: bold;');

    cell1.innerHTML = c;
    cell2.innerHTML = pot_resistance[c-1];
    cell3.innerHTML = op_voltage[c-1];
    // cell4.innerHTML = rangeShow4.value;
    // cell5.innerHTML = meterShow2.value;
    // cell6.innerHTML = meterShow3.value;
    // cell7.innerHTML = "";

    // trace1.y.push(+rangeShow4.value);
    // trace1.x.push(+rangeShow3.value);
    
    if (c < 5) {
        rangeMeter2.disabled = false;
    }
    else {
    //     //graph.disabled = false;
        addToTable.disabled = true;
    }
    // //addToTable.disabled = true;
     c++;
});


// function drawgraph() {

//     if (counter < 8) {
//         alert("Alert ! Please take atleast 7 readings.");
//     }
//     else {
//         var data = [trace1];
//         var layout = {
//             xaxis: {
//                 title: {
//                     text: 'Torque',
//                     font:
//                     {
//                         family: 'Courier New, monoscope',
//                         size: 18,
//                         color: '#ff0000'
//                     }
//                 },
//             },
//             yaxis: {
//                 title: {
//                     text: 'Speed',
//                     font:
//                     {
//                         family: 'Courier New, monoscope',
//                         size: 18,
//                         color: '#ff0000'
//                     }
//                 },
//             }
//         };

//         Plotly.newPlot('myDiv1', data, layout, { showSendToCloud: true });
//         graph.disabled = true;
//     }
// }
