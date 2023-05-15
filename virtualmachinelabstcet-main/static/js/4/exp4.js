var not_reversed = true;
var rightconnection = false;

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
        };

    var initAnimation = function (elId) {
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
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 2, stroke: "rgba(0,255,0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 15,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        endpoint4 = {
            anchor: [0.5, 0.5, -5, -6.5],
            connectorStyle: { strokeWidth: 2, stroke: "rgba(0,0,255)" },
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


        // get a jsPlumb instance, setting some appropriate defaults and a Container.
        instance = jsPlumb.getInstance({
            DragOptions: { cursor: 'wait', zIndex: 20 },
            Endpoint: ["Image", { url: "/static/images/littledot.png" }],
            Connector: ["Bezier", { curviness: -20 }],
            Container: "canvas"
        });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare1("ld1"),
            e2 = prepare2("ld2"),
            e3 = prepare3("ld3"),
            e4 = prepare4("ld4"),
            e5 = prepare2("ld5"),
            e6 = prepare3("ld6"),
            e7 = prepare1("ld7"),
            e8 = prepare2("ld8"),
            e9 = prepare3("ld9"),
            e10 = prepare1("ld10"),
            e11 = prepare2("ld11"),
            e12 = prepare3("ld12"),
            e13 = prepare1("ld13"),
            e14 = prepare2("ld14"),
            e15 = prepare3("ld15"),
            e16 = prepare4("ld16"),
            e17 = prepare2("ld17"),
            e18 = prepare3("ld18"),
            e19 = prepare1("ld19"),
            e20 = prepare2("ld20"),
            e21 = prepare3("ld21"),
            e22 = prepare1("ld22"),
            e23 = prepare2("ld23"),
            e24 = prepare3("ld24"),
            e25 = prepare1("ld25"),
            e26 = prepare2("ld26"),
            e27 = prepare3("ld27"),
            e28 = prepare4("ld28"),
            e29 = prepare2("ld29"),
            e30 = prepare3("ld30"),
            e31 = prepare1("ld31"),
            e32 = prepare2("ld32"),
            e33 = prepare3("ld33"),
            e34 = prepare1("ld34"),
            e35 = prepare2("ld35"),
            e36 = prepare3("ld36"),
            e37 = prepare1("ld37"),
            e38 = prepare2("ld38"),
            e39 = prepare3("ld39"),
            e40 = prepare4("ld40"),
            e41 = prepare2("ld41"),
            e42 = prepare3("ld42"),
            e43 = prepare1("ld43"),
            e44 = prepare2("ld44"),
            e45 = prepare3("ld45"),
            e46 = prepare1("ld46"),
            e47 = prepare2("ld47"),
            e48 = prepare3("ld48"),
            e49 = prepare1("ld49"),
            e50 = prepare2("ld50"),
            e51 = prepare3("ld51"),
            e52 = prepare4("ld52"),
            e53 = prepare2("ld53"),
            e54 = prepare3("ld54"),
            e55 = prepare1("ld55"),
            e56 = prepare2("ld56"),
            e57 = prepare3("ld57"),
            eQ3= prepare5("Q3"),
            eQ2= prepare5("Q2"),
            eQ1= prepare5("Q1"),
            eQ0= prepare5("Q0"),
            eq3= prepare5("q3"),
            eq2= prepare5("q2"),
            eq1= prepare5("q1"),
            eq0= prepare5("q0"),

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
    //event listener on check button
    document.getElementById("check-button").addEventListener("click", function () {

        var correct_connections_53_57 = [
            {
                "source": "ld53",
                "target": "ld57"
            },

            {
                "source": "ld57",
                "target": "ld53"
            }
        ];
        var correct_connections_54_53 = [
            {
                "source": "ld54",
                "target": "ld53"
            },

            {
                "source": "ld53",
                "target": "ld54"
            }
        ];
        var correct_connections_55_54 = [
            {
                "source": "ld55",
                "target": "ld54"
            },

            {
                "source": "ld54",
                "target": "ld55"
            }
        ];
        var correct_connections_56_55 = [
            {
                "source": "ld56",
                "target": "ld55"
            },

            {
                "source": "ld55",
                "target": "ld56"
            }
        ];
        var correct_connections_31_56 = [
            {
                "source": "ld31",
                "target": "ld56"
            },

            {
                "source": "ld56",
                "target": "ld31"
            }
        ];
        var correct_connections_48_52 = [
            {
                "source": "ld48",
                "target": "ld52"
            },

            {
                "source": "ld52",
                "target": "ld48"
            }
        ];
        var correct_connections_47_51 = [
            {
                "source": "ld47",
                "target": "ld51"
            },

            {
                "source": "ld51",
                "target": "ld47"
            }
        ];
        var correct_connections_46_50 = [
            {
                "source": "ld46",
                "target": "ld50"
            },

            {
                "source": "ld50",
                "target": "ld46"
            }
        ];
        var correct_connections_45_49 = [
            {
                "source": "ld45",
                "target": "ld49"
            },

            {
                "source": "ld49",
                "target": "ld45"
            }
        ];
        var correct_connections_13_41 = [
            {
                "source": "ld13",
                "target": "ld41"
            },

            {
                "source": "ld41",
                "target": "ld13"
            }
        ];
        var correct_connections_15_31 = [
            {
                "source": "ld15",
                "target": "ld31"
            },

            {
                "source": "ld31",
                "target": "ld15"
            }
        ];
        var correct_connections_40_18_6_35 = [
            {
                "source": "ld40",
                "target": "ld18"
            },

            {
                "source": "ld40",
                "target": "ld35"
            },

            {
                "source": "ld40",
                "target": "ld6"
            },

            {
                "source": "ld18",
                "target": "ld40"
            },

            {
                "source": "ld6",
                "target": "ld40"
            },

            {
                "source": "ld35",
                "target": "ld40"
            }
        ];
        var correct_connections_37_14_11 = [
            {
                "source": "ld37",
                "target": "ld14"
            },

            {
                "source": "ld37",
                "target": "ld11"
            },

            {
                "source": "ld14",
                "target": "ld37"
            },

            {
                "source": "ld11",
                "target": "ld37"
            }
        ];
        var correct_connections_29_38_43 = [
            {
                "source": "ld29",
                "target": "ld38"
            },

            {
                "source": "ld38",
                "target": "ld29"
            },

            {
                "source": "ld29",
                "target": "ld43"
            },

            {
                "source": "ld43",
                "target": "ld29"
            }
        ];
        var correct_connections_17_36_42 = [
            {
                "source": "ld17",
                "target": "ld36"
            },

            {
                "source": "ld36",
                "target": "ld17"
            },

            {
                "source": "ld17",
                "target": "ld42"
            },

            {
                "source": "ld42",
                "target": "ld17"
            }
        ];
        var correct_connections_33_39_27_30_44 = [
            {
                "source": "ld33",
                "target": "ld39"
            },

            {
                "source": "ld33",
                "target": "ld27"
            },

            {
                "source": "ld33",
                "target": "ld30"
            },

            {
                "source": "ld33",
                "target": "ld44"
            }
        ];
        var correct_connections_2_3_8_19_24 = [
            {
                "source": "ld2",
                "target": "ld3"
            },

            {
                "source": "ld2",
                "target": "ld8"
            },

            {
                "source": "ld2",
                "target": "ld19"
            },

            {
                "source": "ld2",
                "target": "ld24"
            }
        ];
        var correct_connections_1 = [
            {
                "source": "ld1",
                "target": "ld4"
            },

            {
                "source": "ld1",
                "target": "ld5"
            },

            {
                "source": "ld1",
                "target": "ld7"
            },

            {
                "source": "ld1",
                "target": "ld9"
            },

            {
                "source": "ld1",
                "target": "ld10"
            },

            {
                "source": "ld1",
                "target": "ld20"
            },

            {
                "source": "ld1",
                "target": "ld21"
            },

            {
                "source": "ld1",
                "target": "ld22"
            },

            {
                "source": "ld1",
                "target": "ld23"
            },

            {
                "source": "ld1",
                "target": "ld25"
            },

            {
                "source": "ld1",
                "target": "ld26"
            },

            {
                "source": "ld1",
                "target": "ld34"
            }
        ];
        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld5"
            },

            {
                "source": "ld1",
                "target": "ld4"
            },
            {
                "source": "ld1",
                "target": "ld7"
            },

            {
                "source": "ld1",
                "target": "ld9"
            },
            {
                "source": "ld1",
                "target": "ld10"
            },

            {
                "source": "ld1",
                "target": "ld20"
            },
            {
                "source": "ld1",
                "target": "ld21"
            },

            {
                "source": "ld1",
                "target": "ld22"
            },
            {
                "source": "ld1",
                "target": "ld23"
            },

            {
                "source": "ld1",
                "target": "ld25"
            },
            {
                "source": "ld1",
                "target": "ld26"
            },

            {
                "source": "ld1",
                "target": "ld34"
            },

            {
                "source": "ld2",
                "target": "ld3"
            },

            {
                "source": "ld2",
                "target": "ld8"
            },

            {
                "source": "ld2",
                "target": "ld19"
            },

            {
                "source": "ld2",
                "target": "ld24"
            },

            {
                "source": "ld13",
                "target": "ld41"
            },

            {
                "source": "ld41",
                "target": "ld13"
            },

            {
                "source": "ld15",
                "target": "ld31"
            },

            {
                "source": "ld31",
                "target": "ld15"
            },

            {
                "source": "ld17",
                "target": "ld36"
            },

            {
                "source": "ld36",
                "target": "ld17"
            },

            {
                "source": "ld17",
                "target": "ld42"
            },

            {
                "source": "ld42",
                "target": "ld17"
            },

            {
                "source": "ld29",
                "target": "ld38"
            },

            {
                "source": "ld38",
                "target": "ld29"
            },

            {
                "source": "ld29",
                "target": "ld43"
            },

            {
                "source": "ld43",
                "target": "ld29"
            },

            {
                "source": "ld33",
                "target": "ld39"
            },

            {
                "source": "ld33",
                "target": "ld27"
            },

            {
                "source": "ld33",
                "target": "ld30"
            },

            {
                "source": "ld33",
                "target": "ld44"
            },

            {
                "source": "ld37",
                "target": "ld14"
            },

            {
                "source": "ld14",
                "target": "ld37"
            },

            {
                "source": "ld37",
                "target": "ld11"
            },

            {
                "source": "ld11",
                "target": "ld37"
            },

            {
                "source": "ld40",
                "target": "ld18"
            },

            {
                "source": "ld18",
                "target": "ld40"
            },

            {
                "source": "ld40",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld40"
            },

            {
                "source": "ld40",
                "target": "ld35"
            },

            {
                "source": "ld35",
                "target": "ld40"
            },

            {
                "source": "ld45",
                "target": "ld49"
            },

            {
                "source": "ld49",
                "target": "ld45"
            },

            {
                "source": "ld46",
                "target": "ld50"
            },

            {
                "source": "ld50",
                "target": "ld46"
            },

            {
                "source": "ld47",
                "target": "ld51"
            },

            {
                "source": "ld51",
                "target": "ld47"
            },

            {
                "source": "ld48",
                "target": "ld52"
            },

            {
                "source": "ld52",
                "target": "ld48"
            },

            {
                "source": "ld31",
                "target": "ld56"
            },

            {
                "source": "ld56",
                "target": "ld31"
            },

            {
                "source": "ld56",
                "target": "ld55"
            },

            {
                "source": "ld55",
                "target": "ld56"
            },

            {
                "source": "ld55",
                "target": "ld54"
            },

            {
                "source": "ld54",
                "target": "ld55"
            },

            {
                "source": "ld54",
                "target": "ld53"
            },

            {
                "source": "ld53",
                "target": "ld54"
            },

            {
                "source": "ld53",
                "target": "ld57"
            },

            {
                "source": "ld57",
                "target": "ld53"
            }
        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_53_57 = false;
        var is_connected_54_53 = false;
        var is_connected_55_54 = false;
        var is_connected_56_55 = false;
        var is_connected_31_56 = false;
        var is_connected_48_52 = false;
        var is_connected_47_51 = false;
        var is_connected_46_50 = false;
        var is_connected_45_49 = false;
        var is_connected_13_41 = false;
        var is_connected_15_31 = false;
        var is_connected_40_18_6_35 = false;
        var is_connected_37_14_11 = false;
        var is_connected_29_38_43 = false;
        var is_connected_17_36_42 = false;
        var is_connected_33_39_27_30_44 = false;
        var is_connected_2_3_8_19_24 = false;
        var is_connected_1 = false;

        var unallowed_connection_present = false;

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_53_57) {
                is_connected_53_57 = correct_connections_53_57.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_54_53) {
                is_connected_54_53 = correct_connections_54_53.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_55_54) {
                is_connected_55_54 = correct_connections_55_54.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_56_55) {
                is_connected_56_55 = correct_connections_56_55.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_31_56) {
                is_connected_31_56 = correct_connections_31_56.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_48_52) {
                is_connected_48_52 = correct_connections_48_52.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_47_51) {
                is_connected_47_51 = correct_connections_47_51.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_46_50) {
                is_connected_46_50 = correct_connections_46_50.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_45_49) {
                is_connected_45_49 = correct_connections_45_49.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_13_41) {
                is_connected_13_41 = correct_connections_13_41.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_15_31) {
                is_connected_15_31 = correct_connections_15_31.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_40_18_6_35) {
                is_connected_40_18_6_35 = correct_connections_40_18_6_35.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_37_14_11) {
                is_connected_37_14_11 = correct_connections_37_14_11.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_29_38_43) {
                is_connected_29_38_43 = correct_connections_29_38_43.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_17_36_42) {
                is_connected_17_36_42 = correct_connections_17_36_42.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_33_39_27_30_44) {
                is_connected_33_39_27_30_44 = correct_connections_33_39_27_30_44.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_2_3_8_19_24) {
                is_connected_2_3_8_19_24 = correct_connections_2_3_8_19_24.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_1) {
                is_connected_1 = correct_connections_1.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });

        //short cut can be used for debugging
        if (not_reversed && is_connected_53_57 && is_connected_54_53 && is_connected_55_54 && is_connected_56_55 && is_connected_31_56 && is_connected_48_52 && is_connected_47_51 && is_connected_46_50 && is_connected_45_49 && is_connected_13_41 && is_connected_15_31 && is_connected_40_18_6_35 && is_connected_37_14_11 && is_connected_29_38_43 && is_connected_17_36_42 && is_connected_33_39_27_30_44 && is_connected_2_3_8_19_24 && is_connected_1 && !unallowed_connection_present) {
            alert("𝐀𝐥𝐞𝐫𝐭 ! 𝐂𝐨𝐫𝐫𝐞𝐜𝐭 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧 𝐩𝐫𝐨𝐜𝐞𝐞𝐝 𝐭𝐨 𝐭𝐚𝐤𝐞 𝐫𝐞𝐚𝐝𝐢𝐧𝐠.");
            document.getElementById("check-button").disabled = true;
            rightconnection = true;
            disable_all_nr();
            document.querySelector("#connection-table").innerHTML = ``;
            document.querySelector("#wrapper").style.top = "10px";
            document.getElementById('wrapper').scrollIntoView();
        }
        //else if (!not_reversed && is_connected_1_5 && is_connected_2_6 && is_connected_3_7 && is_connected_4_8 && is_connected_9_11 && is_connected_10_12 && !is_connected_11_13 && is_connected_11_14 && !is_connected_14_15 && is_connected_13_15 && is_connected_16_19 && is_connected_20_12 && is_connected_19_17 && is_connected_20_18 && !unallowed_connection_present) {
            //alert("𝐀𝐥𝐞𝐫𝐭 ! 𝐂𝐨𝐫𝐫𝐞𝐜𝐭 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧 𝐩𝐫𝐨𝐜𝐞𝐞𝐝 𝐭𝐨 𝐭𝐚𝐤𝐞 𝐫𝐞𝐚𝐝𝐢𝐧𝐠.");
            //document.getElementById("check-button").disabled = true;
            //rightconnection = true;
            //disable_all_r();
            //document.querySelector("#connection-table").innerHTML = ``;
            //document.querySelector("#wrapper").style.top = "10px";
            //document.getElementById('wrapper').scrollIntoView();
        //}
        else {
            alert("𝐀𝐥𝐞𝐫𝐭 ! 𝐈𝐧𝐜𝐨𝐫𝐫𝐞𝐜𝐭 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧.");

            return;
        }
    });
});

function disable_all_nr() {
    jsPlumb.ready(function () {

        var initAnimation = function (elId) {
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
//m
            endpoint4 = {
                anchor: [0.5, 0.5, 0, -1],
                connectorStyle: { strokeWidth: 2, stroke: "rgba(0,255,0)" },
                endpointsOnTop: true,
                isSource: false,
                maxConnections: 15,
                isTarget: true,
                dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
            },
//m
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
//m
            prepare4 = function (elId) {
                initAnimation(elId);

                return instance.addEndpoint(elId, endpoint4);
            },
//m
            prepare5 = function (elId) {
                initAnimation(elId);

                return instance.addEndpoint(elId, endpoint5);
            },

            // get a jsPlumb instance, setting some appropriate defaults and a Container.
            instance = jsPlumb.getInstance({
                DragOptions: { cursor: 'wait', zIndex: 20 },
                Endpoint: ["Image", { url: "/static/images/littledot.png" }],
                Connector: ["Bezier", { curviness: 90 }],
                Container: "canvas"
            });

        // suspend drawing and initialise.//m
        instance.batch(function () {
            var e1 = prepare1("ld1"),
                e2 = prepare2("ld2"),
                e3 = prepare3("ld3"),
                e4 = prepare1("ld4"),
                e5 = prepare2("ld5"),
                e6 = prepare3("ld6"),
                e7 = prepare1("ld7"),
                e8 = prepare2("ld8"),
                e9 = prepare3("ld9"),
                e10 = prepare1("ld10"),
                e11 = prepare2("ld11"),//m
                e12 = prepare3("ld12"),
                e13 = prepare1("ld13"),//m
                e14 = prepare2("ld14"),
                e15 = prepare3("ld15"),
                e16 = prepare1("ld16"),
                e17 = prepare2("ld17"),
                e18 = prepare3("ld18"),
                e19 = prepare1("ld19"),
                e20 = prepare2("ld20"),
                e21 = prepare3("ld21"),
                e22 = prepare1("ld22"),
                e23 = prepare2("ld23"),
                e24 = prepare3("ld24"),
                e25 = prepare1("ld25"),
                e26 = prepare2("ld26"),
                e27 = prepare3("ld27"),
                e28 = prepare4("ld28"),
                e29 = prepare2("ld29"),
                e30 = prepare3("ld30"),
                e31 = prepare1("ld31"),
                e32 = prepare2("ld32"),
                e33 = prepare3("ld33"),
                e34 = prepare1("ld34"),
                e35 = prepare2("ld35"),
                e36 = prepare3("ld36"),
                e37 = prepare1("ld37"),
                e38 = prepare2("ld38"),
                e39 = prepare3("ld39"),
                e40 = prepare4("ld40"),
                e41 = prepare2("ld41"),
                e42 = prepare3("ld42"),
                e43 = prepare1("ld43"),
                e44 = prepare2("ld44"),
                e45 = prepare3("ld45"),
                e46 = prepare1("ld46"),
                e47 = prepare2("ld47"),
                e48 = prepare3("ld48"),
                e49 = prepare1("ld49"),
                e50 = prepare2("ld50"),
                e51 = prepare3("ld51"),
                e52 = prepare4("ld52"),
                e53 = prepare2("ld53"),
                e54 = prepare3("ld54"),
                e55 = prepare1("ld55"),
                e56 = prepare2("ld56"),
                e57 = prepare3("ld57"),
                eQ3= prepare5("Q3"),
                eQ2= prepare5("Q2"),
                eQ1= prepare5("Q1"),
                eQ0= prepare5("Q0"),
                eq3= prepare5("q3"),
                eq2= prepare5("q2"),
                eq1= prepare5("q1"),
                eq0= prepare5("q0"),//from 21
                clearBtn = jsPlumb.getSelector("#anim-clear"),
                addBtn = jsPlumb.getSelector("#add");
        });
    });
}


// function disable_all_r() {
//     jsPlumb.ready(function () {

//         var initAnimation = function (elId) {
//             var el = document.getElementById(elId);

//             instance.on(el, 'click', function (e, ui) {
//                 if (el.className.indexOf("jsPlumb_dragged") > -1) {
//                     jsPlumb.removeClass(elId, "jsPlumb_dragged");
//                     return;
//                 }

//             });
//         },
//             endpoint1 = {
//                 anchor: [0.5, 0.5, 0, -1],
//                 connectorStyle: { strokeWidth: 4, stroke: "rgba(0,0,255)" },
//                 endpointsOnTop: true,
//                 isSource: false,
//                 maxConnections: 10,
//                 isTarget: true,
//                 dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
//             },
//             endpoint2 = {
//                 anchor: [0.5, 0.5, 0, -1],
//                 connectorStyle: { strokeWidth: 4, stroke: "rgba(255,0,0)" },
//                 endpointsOnTop: true,
//                 isSource: false,
//                 maxConnections: 10,
//                 isTarget: true,
//                 dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
//             },
//             endpoint3 = {
//                 anchor: [0.5, 0.5, 0, -1],
//                 connectorStyle: { strokeWidth: 4, stroke: "rgba(0,255,0)" },
//                 endpointsOnTop: true,
//                 isSource: false,
//                 maxConnections: 10,
//                 isTarget: true,
//                 dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
//             },
//             prepare1 = function (elId) {
//                 initAnimation(elId);

//                 return instance.addEndpoint(elId, endpoint1);
//             },
//             prepare2 = function (elId) {
//                 initAnimation(elId);

//                 return instance.addEndpoint(elId, endpoint2);
//             },
//             prepare3 = function (elId) {
//                 initAnimation(elId);

//                 return instance.addEndpoint(elId, endpoint3);
//             },

//             // get a jsPlumb instance, setting some appropriate defaults and a Container.
//             instance = jsPlumb.getInstance({
//                 DragOptions: { cursor: 'wait', zIndex: 20 },
//                 Endpoint: ["Image", { url: "/static/images/littledot.png" }],
//                 Connector: ["Bezier", { curviness: 90 }],
//                 Container: "canvas"
//             });

//         // suspend drawing and initialise.
//         instance.batch(function () {
//             var e1 = prepare1("ld1"),
//                 e2 = prepare2("ld2"),
//                 e3 = prepare3("ld3"),
//                 e4 = prepare1("ld4"),
//                 e5 = prepare2("ld5"),
//                 e6 = prepare3("ld6"),
//                 e7 = prepare1("ld7"),
//                 e8 = prepare2("ld8"),
//                 e9 = prepare3("ld9"),
//                 e10 = prepare1("ld10"),
//                 e11 = prepare2("ld11"),
//                 e12 = prepare3("ld12"),
//                 e13 = prepare1("ld13"),
//                 e14 = prepare2("ld14"),
//                 e15 = prepare3("ld15"),
//                 e16 = prepare1("ld16"),
//                 e17 = prepare2("ld17"),
//                 e18 = prepare3("ld18"),
//                 e19 = prepare1("ld19"),
//                 e20 = prepare2("ld20"),
//                 clearBtn = jsPlumb.getSelector("#anim-clear"),
//                 addBtn = jsPlumb.getSelector("#add");
//         });
//     });
// }


var datapoints1 = [];
var mcboffstate = true;
var ledoffstate = true;

var clock_vals = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
//var nr_terminal_voltage_vals = [100, 119, 149, 170, 185];
//var r_terminal_voltage_vals = [99, 120, 148, 165, 178];

var nr_Q3 = [-1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
var nr_Q2 = [-1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1];
var nr_Q1 = [-1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1];
var nr_Q0 = [-1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1];

//var r_lc = [0.0, 0.0, 0.66, 1.32, 2.15];
//var r_tv = [0.0, 178, 172, 166, 160];

var init_idx = 0;

function mcbonoff() {
    if (rightconnection == true) {
        if (mcboffstate == true && ledoffstate==true) {
            mcboffstate = false;
            //ledoffstate = false;
            document.getElementById('myimage').src = '/static/images/mcbon.png';
            document.getElementById('myimage1').src = '/static/images/push2.png';
            document.getElementById('myimage2').src = '/static/images/push2.png';
            document.getElementById('myimage3').src = '/static/images/push2.png';
            

            document.getElementById("line1").style.backgroundColor = "green";
            document.getElementById("line2").style.backgroundColor = "green";
            document.getElementById("line3").style.backgroundColor = "green";
            document.getElementById("line4").style.backgroundColor = "green";
            document.getElementById("line5").style.backgroundColor = "green";
            document.getElementById("line6").style.backgroundColor = "green";

            // document.getElementById("range1").disabled = false;
            // rangeMeter1.value = 1;
            // rangeShow1.value = 1;

            //rangeShow01.value = `${clock_vals[init_idx]} `;
            //document.getElementById('cirmover').style.animation = `rotation ${(1500 - speed_vals[init_idx]) / 200}s infinite linear`;

            //rangeShow03.value = not_reversed ? nr_terminal_voltage_vals[init_idx] : r_terminal_voltage_vals[init_idx];
            //rangeClock2.style.transform = 'rotate(' + (-62 + rangeShow03.value / 3.5) + 'deg)';

            //init_idx = 0;
            document.getElementById("graph").disabled = true;
            document.getElementById("addToTable").disabled = true;
            //init_idx++;
            document.getElementById("check-button").disabled = true;
        }
    //     else if (mcboffstate == false && not_reversed == true) {
    //         rightconnection = false;
    //         mcboffstate = true;
    //         not_reversed = false;
    //         document.getElementById('myimage').src = '/static/images/mcboff.png';
    //         document.getElementById('myimage1').src = '/static/images/push1.png';
    //         document.getElementById('myimage2').src = '/static/images/push1.png';
    //         document.getElementById('myimage3').src = '/static/images/push1.png';

    //         document.getElementById("line1").style.backgroundColor = "red";
    //         document.getElementById("line2").style.backgroundColor = "red";
    //         document.getElementById("line3").style.backgroundColor = "red";
    //         document.getElementById("line4").style.backgroundColor = "red";

    //         document.getElementById('cirmover').style.animation = `rotation 0s infinite linear`;

    //         rangeMeter1.value = 0;
    //         rangeMeter2.value = 0;

    //         init_idx = 0;

    //         rangeShow1.value = 0;
    //         rangeShow2.value = 0;

    //         rangeShow01.value = 0;
    //         rangeShow02.value = 0;
    //         rangeShow03.value = 0;

    //         rangeClock1.style.transform = 'rotate(' + (-62) + 'deg)';
    //         rangeClock2.style.transform = 'rotate(' + (-62) + 'deg)';

    //         document.getElementById("graph").disabled = true;
    //         document.getElementById("addToTable").disabled = true;

    //         document.getElementById("check-button").disabled = false;

    //         document.getElementById("range1").disabled = true;
    //         document.getElementById("range2").disabled = true;

    //         setTimeout(function () {
    //             alert("Click on number '13(SE1)' and '14(SE2)' to remove these connections.\nThen make new connection by REVERSING THE SERIES FIELD TERMINALS as instructed");
    //         }, 1000);
    //     }
        else {
            return;
        }
    }
    else {
        alert("Alert ! Please complete the circuit or remove wrong connections");
    }
}

var counter = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
var neg_clk = [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0];

//var rangeMeter1 = document.querySelector('#range1');
//var rangeMeter2 = document.querySelector('#range2');

//var rangeShow1 = document.querySelector("#show1");
//var rangeShow2 = document.querySelector("#show2");

//var rangeShow01 = document.querySelector("#show01");
//var rangeShow02 = document.querySelector("#show02");
//var rangeShow03 = document.querySelector("#show03");


//var rangeClock1 = document.querySelector('#meter1');
//var rangeClock2 = document.querySelector('#meter2');

var table1 = document.getElementById("table1");
//var table2 = document.getElementById("table2");

var clickcounter_nr = 1;//1
//var clickcounter_r = 1;

var button=document.getElementById("c"),
count=0;
button.onclick=function(){
    //count=0;
    //init_idx = 0;
    ledoffstate = false;
    document.getElementById("graph").disabled = false;
    document.getElementById("addToTable").disabled = false;
            //init_idx++;
    document.getElementById("check-button").disabled = true;
    
    button.innerHTML=count;
    count=count+1;
    if(mcboffstate==false){
    if(clock_vals[init_idx]==0){
            var y = table1.insertRow(clickcounter_nr++);
            var cell1 = y.insertCell(0);
            cell1.setAttribute('style', 'text-align: center;');
            var cell2 = y.insertCell(1);
            cell2.setAttribute('style', 'text-align: center;');
            var cell3 = y.insertCell(2);
            cell3.setAttribute('style', 'text-align: center;');
            var cell4 = y.insertCell(3);
            cell4.setAttribute('style', 'text-align: center;');
            var cell5 = y.insertCell(4);
            cell4.setAttribute('style', 'text-align: center;');
            var cell6 = y.insertCell(5);
            cell4.setAttribute('style', 'text-align: center;');
            cell1.innerHTML = counter[init_idx];
            cell2.innerHTML = clock_vals[init_idx];
            cell3.innerHTML = nr_Q3[init_idx];
            cell4.innerHTML = nr_Q2[init_idx];
            cell5.innerHTML = nr_Q1[init_idx];
            cell6.innerHTML = nr_Q0[init_idx];
    }
    else if(clock_vals[init_idx]==1){
        document.getElementById('a1').src = '/static/images/off.png';
        document.getElementById('a2').src = '/static/images/off.png';
        document.getElementById('a3').src = '/static/images/off.png';
        document.getElementById('a4').src = '/static/images/off.png';
        var y = table1.insertRow(clickcounter_nr++);
            var cell1 = y.insertCell(0);
            cell1.setAttribute('style', 'text-align: center;');
            var cell2 = y.insertCell(1);
            cell2.setAttribute('style', 'text-align: center;');
            var cell3 = y.insertCell(2);
            cell3.setAttribute('style', 'text-align: center;');
            var cell4 = y.insertCell(3);
            cell4.setAttribute('style', 'text-align: center;');
            var cell5 = y.insertCell(4);
            cell4.setAttribute('style', 'text-align: center;');
            var cell6 = y.insertCell(5);
            cell4.setAttribute('style', 'text-align: center;');
        cell1.innerHTML = counter[init_idx];
        cell2.innerHTML = clock_vals[init_idx];
        cell3.innerHTML = nr_Q3[init_idx];
        cell4.innerHTML = nr_Q2[init_idx];
        cell5.innerHTML = nr_Q1[init_idx];
        cell6.innerHTML = nr_Q0[init_idx];
    }
    
    else if(clock_vals[init_idx]==2){
        document.getElementById('a1').src = '/static/images/off.png';
        document.getElementById('a2').src = '/static/images/off.png';
        document.getElementById('a3').src = '/static/images/off.png';
        document.getElementById('a4').src = '/static/images/on.png';
        var y = table1.insertRow(clickcounter_nr++);
            var cell1 = y.insertCell(0);
            cell1.setAttribute('style', 'text-align: center;');
            var cell2 = y.insertCell(1);
            cell2.setAttribute('style', 'text-align: center;');
            var cell3 = y.insertCell(2);
            cell3.setAttribute('style', 'text-align: center;');
            var cell4 = y.insertCell(3);
            cell4.setAttribute('style', 'text-align: center;');
            var cell5 = y.insertCell(4);
            cell4.setAttribute('style', 'text-align: center;');
            var cell6 = y.insertCell(5);
            cell4.setAttribute('style', 'text-align: center;');
        cell1.innerHTML = counter[init_idx];
        cell2.innerHTML = clock_vals[init_idx];
        cell3.innerHTML = nr_Q3[init_idx];
        cell4.innerHTML = nr_Q2[init_idx];
        cell5.innerHTML = nr_Q1[init_idx];
        cell6.innerHTML = nr_Q0[init_idx];
    }

    else if(clock_vals[init_idx]==3){
        document.getElementById('a1').src = '/static/images/off.png';
        document.getElementById('a2').src = '/static/images/off.png';
        document.getElementById('a3').src = '/static/images/on.png';
        document.getElementById('a4').src = '/static/images/off.png';
        var y = table1.insertRow(clickcounter_nr++);
            var cell1 = y.insertCell(0);
            cell1.setAttribute('style', 'text-align: center;');
            var cell2 = y.insertCell(1);
            cell2.setAttribute('style', 'text-align: center;');
            var cell3 = y.insertCell(2);
            cell3.setAttribute('style', 'text-align: center;');
            var cell4 = y.insertCell(3);
            cell4.setAttribute('style', 'text-align: center;');
            var cell5 = y.insertCell(4);
            cell4.setAttribute('style', 'text-align: center;');
            var cell6 = y.insertCell(5);
            cell4.setAttribute('style', 'text-align: center;');
        cell1.innerHTML = counter[init_idx];
            cell2.innerHTML = clock_vals[init_idx];
            cell3.innerHTML = nr_Q3[init_idx];
            cell4.innerHTML = nr_Q2[init_idx];
            cell5.innerHTML = nr_Q1[init_idx];
            cell6.innerHTML = nr_Q0[init_idx];
    }
    else if(clock_vals[init_idx]==4){
        document.getElementById('a1').src = '/static/images/off.png';
        document.getElementById('a2').src = '/static/images/off.png';
        document.getElementById('a3').src = '/static/images/on.png';
        document.getElementById('a4').src = '/static/images/on.png';
        var y = table1.insertRow(clickcounter_nr++);
            var cell1 = y.insertCell(0);
            cell1.setAttribute('style', 'text-align: center;');
            var cell2 = y.insertCell(1);
            cell2.setAttribute('style', 'text-align: center;');
            var cell3 = y.insertCell(2);
            cell3.setAttribute('style', 'text-align: center;');
            var cell4 = y.insertCell(3);
            cell4.setAttribute('style', 'text-align: center;');
            var cell5 = y.insertCell(4);
            cell4.setAttribute('style', 'text-align: center;');
            var cell6 = y.insertCell(5);
            cell4.setAttribute('style', 'text-align: center;');
        cell1.innerHTML = counter[init_idx];
            cell2.innerHTML = clock_vals[init_idx];
            cell3.innerHTML = nr_Q3[init_idx];
            cell4.innerHTML = nr_Q2[init_idx];
            cell5.innerHTML = nr_Q1[init_idx];
            cell6.innerHTML = nr_Q0[init_idx];
    }

    else if(clock_vals[init_idx]==5){
        document.getElementById('a1').src = '/static/images/off.png';
        document.getElementById('a2').src = '/static/images/on.png';
        document.getElementById('a3').src = '/static/images/off.png';
        document.getElementById('a4').src = '/static/images/off.png';
        var y = table1.insertRow(clickcounter_nr++);
            var cell1 = y.insertCell(0);
            cell1.setAttribute('style', 'text-align: center;');
            var cell2 = y.insertCell(1);
            cell2.setAttribute('style', 'text-align: center;');
            var cell3 = y.insertCell(2);
            cell3.setAttribute('style', 'text-align: center;');
            var cell4 = y.insertCell(3);
            cell4.setAttribute('style', 'text-align: center;');
            var cell5 = y.insertCell(4);
            cell4.setAttribute('style', 'text-align: center;');
            var cell6 = y.insertCell(5);
            cell4.setAttribute('style', 'text-align: center;');
        cell1.innerHTML = counter[init_idx];
            cell2.innerHTML = clock_vals[init_idx];
            cell3.innerHTML = nr_Q3[init_idx];
            cell4.innerHTML = nr_Q2[init_idx];
            cell5.innerHTML = nr_Q1[init_idx];
            cell6.innerHTML = nr_Q0[init_idx];
    }
    else if(clock_vals[init_idx]==6){
        document.getElementById('a1').src = '/static/images/off.png';
        document.getElementById('a2').src = '/static/images/on.png';
        document.getElementById('a3').src = '/static/images/off.png';
        document.getElementById('a4').src = '/static/images/on.png';
        var y = table1.insertRow(clickcounter_nr++);
            var cell1 = y.insertCell(0);
            cell1.setAttribute('style', 'text-align: center;');
            var cell2 = y.insertCell(1);
            cell2.setAttribute('style', 'text-align: center;');
            var cell3 = y.insertCell(2);
            cell3.setAttribute('style', 'text-align: center;');
            var cell4 = y.insertCell(3);
            cell4.setAttribute('style', 'text-align: center;');
            var cell5 = y.insertCell(4);
            cell4.setAttribute('style', 'text-align: center;');
            var cell6 = y.insertCell(5);
            cell4.setAttribute('style', 'text-align: center;');
        cell1.innerHTML = counter[init_idx];
            cell2.innerHTML = clock_vals[init_idx];
            cell3.innerHTML = nr_Q3[init_idx];
            cell4.innerHTML = nr_Q2[init_idx];
            cell5.innerHTML = nr_Q1[init_idx];
            cell6.innerHTML = nr_Q0[init_idx];
    }
    else if(clock_vals[init_idx]==7){
        document.getElementById('a1').src = '/static/images/off.png';
        document.getElementById('a2').src = '/static/images/on.png';
        document.getElementById('a3').src = '/static/images/on.png';
        document.getElementById('a4').src = '/static/images/off.png';
        var y = table1.insertRow(clickcounter_nr++);
            var cell1 = y.insertCell(0);
            cell1.setAttribute('style', 'text-align: center;');
            var cell2 = y.insertCell(1);
            cell2.setAttribute('style', 'text-align: center;');
            var cell3 = y.insertCell(2);
            cell3.setAttribute('style', 'text-align: center;');
            var cell4 = y.insertCell(3);
            cell4.setAttribute('style', 'text-align: center;');
            var cell5 = y.insertCell(4);
            cell4.setAttribute('style', 'text-align: center;');
            var cell6 = y.insertCell(5);
            cell4.setAttribute('style', 'text-align: center;');
        cell1.innerHTML = counter[init_idx];
            cell2.innerHTML = clock_vals[init_idx];
            cell3.innerHTML = nr_Q3[init_idx];
            cell4.innerHTML = nr_Q2[init_idx];
            cell5.innerHTML = nr_Q1[init_idx];
            cell6.innerHTML = nr_Q0[init_idx];
    }
    else if(clock_vals[init_idx]==8){
        document.getElementById('a1').src = '/static/images/off.png';
        document.getElementById('a2').src = '/static/images/on.png';
        document.getElementById('a3').src = '/static/images/on.png';
        document.getElementById('a4').src = '/static/images/on.png';
        var y = table1.insertRow(clickcounter_nr++);
            var cell1 = y.insertCell(0);
            cell1.setAttribute('style', 'text-align: center;');
            var cell2 = y.insertCell(1);
            cell2.setAttribute('style', 'text-align: center;');
            var cell3 = y.insertCell(2);
            cell3.setAttribute('style', 'text-align: center;');
            var cell4 = y.insertCell(3);
            cell4.setAttribute('style', 'text-align: center;');
            var cell5 = y.insertCell(4);
            cell4.setAttribute('style', 'text-align: center;');
            var cell6 = y.insertCell(5);
            cell4.setAttribute('style', 'text-align: center;');
        cell1.innerHTML = counter[init_idx];
            cell2.innerHTML = clock_vals[init_idx];
            cell3.innerHTML = nr_Q3[init_idx];
            cell4.innerHTML = nr_Q2[init_idx];
            cell5.innerHTML = nr_Q1[init_idx];
            cell6.innerHTML = nr_Q0[init_idx];
    }
    else if(clock_vals[init_idx]==9){
        document.getElementById('a1').src = '/static/images/on.png';
        document.getElementById('a2').src = '/static/images/off.png';
        document.getElementById('a3').src = '/static/images/off.png';
        document.getElementById('a4').src = '/static/images/off.png';
        var y = table1.insertRow(clickcounter_nr++);
            var cell1 = y.insertCell(0);
            cell1.setAttribute('style', 'text-align: center;');
            var cell2 = y.insertCell(1);
            cell2.setAttribute('style', 'text-align: center;');
            var cell3 = y.insertCell(2);
            cell3.setAttribute('style', 'text-align: center;');
            var cell4 = y.insertCell(3);
            cell4.setAttribute('style', 'text-align: center;');
            var cell5 = y.insertCell(4);
            cell4.setAttribute('style', 'text-align: center;');
            var cell6 = y.insertCell(5);
            cell4.setAttribute('style', 'text-align: center;');
        cell1.innerHTML = counter[init_idx];
            cell2.innerHTML = clock_vals[init_idx];
            cell3.innerHTML = nr_Q3[init_idx];
            cell4.innerHTML = nr_Q2[init_idx];
            cell5.innerHTML = nr_Q1[init_idx];
            cell6.innerHTML = nr_Q0[init_idx];
    }
    else if(clock_vals[init_idx]==10){
        document.getElementById('a1').src = '/static/images/on.png';
        document.getElementById('a2').src = '/static/images/off.png';
        document.getElementById('a3').src = '/static/images/off.png';
        document.getElementById('a4').src = '/static/images/on.png';
        var y = table1.insertRow(clickcounter_nr++);
            var cell1 = y.insertCell(0);
            cell1.setAttribute('style', 'text-align: center;');
            var cell2 = y.insertCell(1);
            cell2.setAttribute('style', 'text-align: center;');
            var cell3 = y.insertCell(2);
            cell3.setAttribute('style', 'text-align: center;');
            var cell4 = y.insertCell(3);
            cell4.setAttribute('style', 'text-align: center;');
            var cell5 = y.insertCell(4);
            cell4.setAttribute('style', 'text-align: center;');
            var cell6 = y.insertCell(5);
            cell4.setAttribute('style', 'text-align: center;');
        cell1.innerHTML = counter[init_idx];
            cell2.innerHTML = clock_vals[init_idx];
            cell3.innerHTML = nr_Q3[init_idx];
            cell4.innerHTML = nr_Q2[init_idx];
            cell5.innerHTML = nr_Q1[init_idx];
            cell6.innerHTML = nr_Q0[init_idx];
    }
    else if(clock_vals[init_idx]==11){
        document.getElementById('a1').src = '/static/images/on.png';
        document.getElementById('a2').src = '/static/images/off.png';
        document.getElementById('a3').src = '/static/images/on.png';
        document.getElementById('a4').src = '/static/images/off.png';
        var y = table1.insertRow(clickcounter_nr++);
            var cell1 = y.insertCell(0);
            cell1.setAttribute('style', 'text-align: center;');
            var cell2 = y.insertCell(1);
            cell2.setAttribute('style', 'text-align: center;');
            var cell3 = y.insertCell(2);
            cell3.setAttribute('style', 'text-align: center;');
            var cell4 = y.insertCell(3);
            cell4.setAttribute('style', 'text-align: center;');
            var cell5 = y.insertCell(4);
            cell4.setAttribute('style', 'text-align: center;');
            var cell6 = y.insertCell(5);
            cell4.setAttribute('style', 'text-align: center;');
        cell1.innerHTML = counter[init_idx];
            cell2.innerHTML = clock_vals[init_idx];
            cell3.innerHTML = nr_Q3[init_idx];
            cell4.innerHTML = nr_Q2[init_idx];
            cell5.innerHTML = nr_Q1[init_idx];
            cell6.innerHTML = nr_Q0[init_idx];
    }
    else if(clock_vals[init_idx]==12){
        document.getElementById('a1').src = '/static/images/on.png';
        document.getElementById('a2').src = '/static/images/off.png';
        document.getElementById('a3').src = '/static/images/on.png';
        document.getElementById('a4').src = '/static/images/on.png';
        var y = table1.insertRow(clickcounter_nr++);
            var cell1 = y.insertCell(0);
            cell1.setAttribute('style', 'text-align: center;');
            var cell2 = y.insertCell(1);
            cell2.setAttribute('style', 'text-align: center;');
            var cell3 = y.insertCell(2);
            cell3.setAttribute('style', 'text-align: center;');
            var cell4 = y.insertCell(3);
            cell4.setAttribute('style', 'text-align: center;');
            var cell5 = y.insertCell(4);
            cell4.setAttribute('style', 'text-align: center;');
            var cell6 = y.insertCell(5);
            cell4.setAttribute('style', 'text-align: center;');
        cell1.innerHTML = counter[init_idx];
            cell2.innerHTML = clock_vals[init_idx];
            cell3.innerHTML = nr_Q3[init_idx];
            cell4.innerHTML = nr_Q2[init_idx];
            cell5.innerHTML = nr_Q1[init_idx];
            cell6.innerHTML = nr_Q0[init_idx];
    }
    else if(clock_vals[init_idx]==13){
        document.getElementById('a1').src = '/static/images/on.png';
        document.getElementById('a2').src = '/static/images/on.png';
        document.getElementById('a3').src = '/static/images/off.png';
        document.getElementById('a4').src = '/static/images/off.png';
        var y = table1.insertRow(clickcounter_nr++);
            var cell1 = y.insertCell(0);
            cell1.setAttribute('style', 'text-align: center;');
            var cell2 = y.insertCell(1);
            cell2.setAttribute('style', 'text-align: center;');
            var cell3 = y.insertCell(2);
            cell3.setAttribute('style', 'text-align: center;');
            var cell4 = y.insertCell(3);
            cell4.setAttribute('style', 'text-align: center;');
            var cell5 = y.insertCell(4);
            cell4.setAttribute('style', 'text-align: center;');
            var cell6 = y.insertCell(5);
            cell4.setAttribute('style', 'text-align: center;');
        cell1.innerHTML = counter[init_idx];
            cell2.innerHTML = clock_vals[init_idx];
            cell3.innerHTML = nr_Q3[init_idx];
            cell4.innerHTML = nr_Q2[init_idx];
            cell5.innerHTML = nr_Q1[init_idx];
            cell6.innerHTML = nr_Q0[init_idx];
    }
    else if(clock_vals[init_idx]==14){
        document.getElementById('a1').src = '/static/images/on.png';
        document.getElementById('a2').src = '/static/images/on.png';
        document.getElementById('a3').src = '/static/images/off.png';
        document.getElementById('a4').src = '/static/images/on.png';
        var y = table1.insertRow(clickcounter_nr++);
            var cell1 = y.insertCell(0);
            cell1.setAttribute('style', 'text-align: center;');
            var cell2 = y.insertCell(1);
            cell2.setAttribute('style', 'text-align: center;');
            var cell3 = y.insertCell(2);
            cell3.setAttribute('style', 'text-align: center;');
            var cell4 = y.insertCell(3);
            cell4.setAttribute('style', 'text-align: center;');
            var cell5 = y.insertCell(4);
            cell4.setAttribute('style', 'text-align: center;');
            var cell6 = y.insertCell(5);
            cell4.setAttribute('style', 'text-align: center;');
        cell1.innerHTML = counter[init_idx];
            cell2.innerHTML = clock_vals[init_idx];
            cell3.innerHTML = nr_Q3[init_idx];
            cell4.innerHTML = nr_Q2[init_idx];
            cell5.innerHTML = nr_Q1[init_idx];
            cell6.innerHTML = nr_Q0[init_idx];
    }
    else if(clock_vals[init_idx]==15){
        document.getElementById('a1').src = '/static/images/on.png';
        document.getElementById('a2').src = '/static/images/on.png';
        document.getElementById('a3').src = '/static/images/on.png';
        document.getElementById('a4').src = '/static/images/off.png';
        var y = table1.insertRow(clickcounter_nr++);
            var cell1 = y.insertCell(0);
            cell1.setAttribute('style', 'text-align: center;');
            var cell2 = y.insertCell(1);
            cell2.setAttribute('style', 'text-align: center;');
            var cell3 = y.insertCell(2);
            cell3.setAttribute('style', 'text-align: center;');
            var cell4 = y.insertCell(3);
            cell4.setAttribute('style', 'text-align: center;');
            var cell5 = y.insertCell(4);
            cell4.setAttribute('style', 'text-align: center;');
            var cell6 = y.insertCell(5);
            cell4.setAttribute('style', 'text-align: center;');
        cell1.innerHTML = counter[init_idx];
            cell2.innerHTML = clock_vals[init_idx];
            cell3.innerHTML = nr_Q3[init_idx];
            cell4.innerHTML = nr_Q2[init_idx];
            cell5.innerHTML = nr_Q1[init_idx];
            cell6.innerHTML = nr_Q0[init_idx];
    }
    else if(clock_vals[init_idx]==16){
        document.getElementById('a1').src = '/static/images/on.png';
        document.getElementById('a2').src = '/static/images/on.png';
        document.getElementById('a3').src = '/static/images/on.png';
        document.getElementById('a4').src = '/static/images/on.png';
        var y = table1.insertRow(clickcounter_nr++);
            var cell1 = y.insertCell(0);
            cell1.setAttribute('style', 'text-align: center;');
            var cell2 = y.insertCell(1);
            cell2.setAttribute('style', 'text-align: center;');
            var cell3 = y.insertCell(2);
            cell3.setAttribute('style', 'text-align: center;');
            var cell4 = y.insertCell(3);
            cell4.setAttribute('style', 'text-align: center;');
            var cell5 = y.insertCell(4);
            cell4.setAttribute('style', 'text-align: center;');
            var cell6 = y.insertCell(5);
            cell4.setAttribute('style', 'text-align: center;');
        cell1.innerHTML = counter[init_idx];
            cell2.innerHTML = clock_vals[init_idx];
            cell3.innerHTML = nr_Q3[init_idx];
            cell4.innerHTML = nr_Q2[init_idx];
            cell5.innerHTML = nr_Q1[init_idx];
            cell6.innerHTML = nr_Q0[init_idx];
    }
    else{
        alert("Try Again!");
    }
}
    init_idx++;
    if(init_idx==16){
        document.getElementById("graph").disabled = false;
        //document.getElementById("addToTable").disabled = true;
    }
    if(count==16){
        document.getElementById("addToTable").disabled = true;
    }
    if(count>16){
        count=0;
    }
    if (clickcounter_nr <18) {
        trace1.y.push(neg_clk.innerHTML);
        trace1.x.push(cell2.innerHTML);

        trace2.y.push(cell3.innerHTML);
        trace2.x.push(cell2.innerHTML);

        trace3.y.push(cell4.innerHTML);
        trace3.x.push(cell2.innerHTML);
        
        trace4.y.push(cell5.innerHTML);
        trace4.x.push(cell2.innerHTML);

        trace5.y.push(cell6.innerHTML);
        trace5.x.push(cell2.innerHTML);
    }
}
//rangeMeter1.addEventListener('input', rangeChange);
// function ledonoff() {
//     init_idx = 0;
//     ledoffstate = false;
//     document.getElementById("graph").disabled = true;
//     document.getElementById("addToTable").disabled = false;
//             //init_idx++;
//     document.getElementById("check-button").disabled = true;

//     if(clock_vals[init_idx]==2){
//         //document.getElementById('a1').src = '/static/images/on.png';
//         //document.getElementById('a2').src = '/static/images/on.png';
//         //document.getElementById('a3').src = '/static/images/on.png';
//         document.getElementById('a4').src = '/static/images/on.png';
//     }

//     else if(clock_vals[init_idx]==3){
//         //document.getElementById('a1').src = '/static/images/on.png';
//         //document.getElementById('a2').src = '/static/images/on.png';
//         document.getElementById('a3').src = '/static/images/on.png';
//         //document.getElementById('a4').src = '/static/images/on.png';
//     }
//     else if(clock_vals[init_idx]==4){
//         //document.getElementById('a1').src = '/static/images/on.png';
//         //document.getElementById('a2').src = '/static/images/on.png';
//         document.getElementById('a3').src = '/static/images/on.png';
//         document.getElementById('a4').src = '/static/images/on.png';
//     }

//     else if(clock_vals[init_idx]==5){
//         //document.getElementById('a1').src = '/static/images/on.png';
//         document.getElementById('a2').src = '/static/images/on.png';
//         //document.getElementById('a3').src = '/static/images/on.png';
//         //document.getElementById('a4').src = '/static/images/on.png';
//     }
//     else if(clock_vals[init_idx]==6){
//         //document.getElementById('a1').src = '/static/images/on.png';
//         document.getElementById('a2').src = '/static/images/on.png';
//         //document.getElementById('a3').src = '/static/images/on.png';
//         document.getElementById('a4').src = '/static/images/on.png';
//     }
//     else if(clock_vals[init_idx]==7){
//         //document.getElementById('a1').src = '/static/images/on.png';
//         document.getElementById('a2').src = '/static/images/on.png';
//         document.getElementById('a3').src = '/static/images/on.png';
//         //document.getElementById('a4').src = '/static/images/on.png';
//     }
//     else if(clock_vals[init_idx]==8){
//         //document.getElementById('a1').src = '/static/images/on.png';
//         document.getElementById('a2').src = '/static/images/on.png';
//         document.getElementById('a3').src = '/static/images/on.png';
//         document.getElementById('a4').src = '/static/images/on.png';
//     }
//     else if(clock_vals[init_idx]==9){
//         document.getElementById('a1').src = '/static/images/on.png';
//         //document.getElementById('a2').src = '/static/images/on.png';
//         //document.getElementById('a3').src = '/static/images/on.png';
//         //document.getElementById('a4').src = '/static/images/on.png';
//     }
//     else if(clock_vals[init_idx]==10){
//         document.getElementById('a1').src = '/static/images/on.png';
//         //document.getElementById('a2').src = '/static/images/on.png';
//         //document.getElementById('a3').src = '/static/images/on.png';
//         document.getElementById('a4').src = '/static/images/on.png';
//     }
//     else if(clock_vals[init_idx]==11){
//         document.getElementById('a1').src = '/static/images/on.png';
//         //document.getElementById('a2').src = '/static/images/on.png';
//         document.getElementById('a3').src = '/static/images/on.png';
//         //document.getElementById('a4').src = '/static/images/on.png';
//     }
//     else if(clock_vals[init_idx]==12){
//         document.getElementById('a1').src = '/static/images/on.png';
//         //document.getElementById('a2').src = '/static/images/on.png';
//         document.getElementById('a3').src = '/static/images/on.png';
//         document.getElementById('a4').src = '/static/images/on.png';
//     }
//     else if(clock_vals[init_idx]==13){
//         document.getElementById('a1').src = '/static/images/on.png';
//         document.getElementById('a2').src = '/static/images/on.png';
//         //document.getElementById('a3').src = '/static/images/on.png';
//         //document.getElementById('a4').src = '/static/images/on.png';
//     }
//     else if(clock_vals[init_idx]==14){
//         document.getElementById('a1').src = '/static/images/on.png';
//         document.getElementById('a2').src = '/static/images/on.png';
//         //document.getElementById('a3').src = '/static/images/on.png';
//         document.getElementById('a4').src = '/static/images/on.png';
//     }
//     else if(clock_vals[init_idx]==15){
//         document.getElementById('a1').src = '/static/images/on.png';
//         document.getElementById('a2').src = '/static/images/on.png';
//         document.getElementById('a3').src = '/static/images/on.png';
//         //document.getElementById('a4').src = '/static/images/on.png';
//     }
//     else if(clock_vals[init_idx]==16){
//         document.getElementById('a1').src = '/static/images/on.png';
//         document.getElementById('a2').src = '/static/images/on.png';
//         document.getElementById('a3').src = '/static/images/on.png';
//         document.getElementById('a4').src = '/static/images/on.png';
//     }
//     else{
//         document.getElementById('a1').src = '/static/images/off.png';
//         document.getElementById('a2').src = '/static/images/off.png';
//         document.getElementById('a3').src = '/static/images/off.png';
//         document.getElementById('a4').src = '/static/images/off.png';
//     }

    // rangeShow1.value = rangeMeter1.value;
    // rangeShow01.value = speed_vals[init_idx];

    // rangeShow03.value = not_reversed ? nr_terminal_voltage_vals[init_idx] : r_terminal_voltage_vals[init_idx];
    // rangeClock2.style.transform = 'rotate(' + (-62 + rangeShow03.value / 3.5) + 'deg)';

    // rangeShow01.value = `${speed_vals[init_idx]} RPM`;
    // document.getElementById('cirmover').style.animation = `rotation ${(1500 - speed_vals[init_idx]) / 200}s infinite linear`;

    // if (init_idx == 4) {
    //     document.getElementById("range1").disabled = true;
    //     setTimeout(function () {
    //         alert("Required speed achived! Start increasing the load current till 100% rated load is achived by increasing the load value!");
    //     }, 500);
    //     document.getElementById("range2").disabled = false;
    //     rangeMeter2.value = 1;
    //     rangeShow2.value = 1;

    //     if (not_reversed) {
    //         rangeShow02.value = nr_lc[rangeMeter2.value];
    //         rangeClock1.style.transform = 'rotate(' + (-62 + rangeShow02.value * 20) + 'deg)';

    //         rangeShow03.value = nr_tv[rangeMeter2.value];
    //         rangeClock2.style.transform = 'rotate(' + (-62 + rangeShow03.value / 3.5) + 'deg)';

            // var y = table1.insertRow(clickcounter_nr++);
            // var cell1 = y.insertCell(0);
            // cell1.setAttribute('style', 'text-align: center;');
            // var cell2 = y.insertCell(1);
            // cell2.setAttribute('style', 'text-align: center;');
            // var cell3 = y.insertCell(2);
            // cell3.setAttribute('style', 'text-align: center;');
            // var cell4 = y.insertCell(3);
            // cell4.setAttribute('style', 'text-align: center;');
            // var cell5 = y.insertCell(4);
            // cell4.setAttribute('style', 'text-align: center;');
            // var cell6 = y.insertCell(5);
            // cell4.setAttribute('style', 'text-align: center;');

            // cell1.innerHTML = count++;
            // cell2.innerHTML = clock_vals[init_idx];
            // cell3.innerHTML = nr_Q3[init_idx];
            // cell4.innerHTML = nr_Q2[init_idx];
            // cell5.innerHTML = nr_Q1[init_idx];
            // cell6.innerHTML = nr_Q0[init_idx];
    //    }
    //     else {
    //         rangeShow02.value = r_lc[rangeMeter2.value];
    //         rangeClock1.style.transform = 'rotate(' + (-62 + rangeShow02.value * 20) + 'deg)';

    //         rangeShow03.value = r_tv[rangeMeter2.value];
    //         rangeClock2.style.transform = 'rotate(' + (-62 + rangeShow03.value / 3.5) + 'deg)';

    //         var y = table2.insertRow(clickcounter_r++);
    //         var cell1 = y.insertCell(0);
    //         cell1.setAttribute('style', 'text-align: center;');
    //         var cell2 = y.insertCell(1);
    //         cell2.setAttribute('style', 'text-align: center;');
    //         var cell3 = y.insertCell(2);
    //         cell3.setAttribute('style', 'text-align: center;');
    //         var cell4 = y.insertCell(3);
    //         cell4.setAttribute('style', 'text-align: center;');

    //         cell1.innerHTML = count++;
    //         cell2.innerHTML = 1300;
    //         cell3.innerHTML = rangeShow02.value;
    //         cell4.innerHTML = rangeShow03.value;
    //     }
    // }
    // init_idx++;
    // if(init_idx>16){
    //     document.getElementById("graph").disabled = false;
    //     document.getElementById("addToTable").disabled = true;
    // }
//}

// rangeMeter2.addEventListener('input', rangeChange2);
// function rangeChange2() {
//     rangeShow2.value = rangeMeter2.value;

//     if (not_reversed) {
//         rangeShow02.value = nr_lc[rangeMeter2.value];
//         rangeClock1.style.transform = 'rotate(' + (-62 + rangeShow02.value * 20) + 'deg)';

//         rangeShow03.value = nr_tv[rangeMeter2.value];
//         rangeClock2.style.transform = 'rotate(' + (-62 + rangeShow03.value / 3.5) + 'deg)';

//         if (rangeMeter2.value == clickcounter_nr) {
//             document.getElementById("range2").disabled = true;
//             document.getElementById("addToTable").disabled = false;
//         }
//     }
//     else {
//         rangeShow02.value = r_lc[rangeMeter2.value];
//         rangeClock1.style.transform = 'rotate(' + (-62 + rangeShow02.value * 20) + 'deg)';

//         rangeShow03.value = r_tv[rangeMeter2.value];
//         rangeClock2.style.transform = 'rotate(' + (-62 + rangeShow03.value / 3.5) + 'deg)';

//         if (rangeMeter2.value == clickcounter_r) {
//             document.getElementById("range2").disabled = true;
//             document.getElementById("addToTable").disabled = false;
//         }
//     }
// }


addToTable.addEventListener('click', () => {
    // if (rangeMeter2.value < 4) {
    //     document.getElementById("range2").disabled = false;
    // }
    document.getElementById("addToTable").disabled = false;
    if (not_reversed) {
        if (clickcounter_nr < 18) {
            var y = table1.insertRow(clickcounter_nr++);
            var cell1 = y.insertCell(0);
            cell1.setAttribute('style', 'text-align: center;');
            var cell2 = y.insertCell(1);
            cell2.setAttribute('style', 'text-align: center;');
            var cell3 = y.insertCell(2);
            cell3.setAttribute('style', 'text-align: center;');
            var cell4 = y.insertCell(3);
            cell4.setAttribute('style', 'text-align: center;');
            var cell5 = y.insertCell(4);
            cell4.setAttribute('style', 'text-align: center;');
            var cell6 = y.insertCell(5);
            cell4.setAttribute('style', 'text-align: center;');

            cell1.innerHTML = counter[init_idx];
            cell2.innerHTML = clock_vals[init_idx];
            cell3.innerHTML = nr_Q3[init_idx];
            cell4.innerHTML = nr_Q2[init_idx];
            cell5.innerHTML = nr_Q1[init_idx];
            cell6.innerHTML = nr_Q0[init_idx];
        }
        else {
            alert("Maximum 16 readings are allowed.");

        }
        if (clickcounter_nr <18) {
            trace1.y.push(neg_clk.innerHTML);
            trace1.x.push(cell2.innerHTML);

            trace2.y.push(cell3.innerHTML);
            trace2.x.push(cell2.innerHTML);

            trace3.y.push(cell4.innerHTML);
            trace3.x.push(cell2.innerHTML);
            
            trace4.y.push(cell5.innerHTML);
            trace4.x.push(cell2.innerHTML);

            trace5.y.push(cell6.innerHTML);
            trace5.x.push(cell2.innerHTML);
        }
    //     if (rangeMeter2.value == 4) {
    //         setTimeout(function () {
    //             alert("Now turn off the MCB");
    //         }, 500);
    //         document.querySelector("#connection-table").innerHTML = `<B>Step 1: </B>Make the proper connection by clicking the node as instructed below. If the wire is
    //         misplaced, click the node number to deattach the nodes' wire. <br>
    //         <table>
    //         <tr>
    //         <b>series field terminals reversed</b>
    //     </tr>
    //     <tr>
    //         <td><B>From</B></td>
    //         <td>1</td>
    //         <td>2</td>
    //         <td>3</td>
    //         <td>4</td>
    //         <td>9</td>
    //         <td>10</td>
    //         <td><b>11</b></td>
    //         <td><b>13</b></td>
    //         <td>16</td>
    //         <td>20</td>
    //         <td>19</td>
    //         <td>20</td>
    //     </tr>
    //     <tr>
    //         <td><B>To</B></td>
    //         <td>5</td>
    //         <td>6</td>
    //         <td>7</td>
    //         <td>8</td>
    //         <td>11</td>
    //         <td>12</td>
    //         <td><b>14</b></td>
    //         <td><b>15</b></td>
    //         <td>19</td>
    //         <td>12</td>
    //         <td>17</td>
    //         <td>18</td>
    //     </tr>
    //         </table>`;
    //     }
    //     document.getElementById('wrapper').scrollIntoView();
    // }
    // else {
    //     if (clickcounter_r <= 4) {
    //         var y = table2.insertRow(clickcounter_r++);
    //         var cell1 = y.insertCell(0);
    //         cell1.setAttribute('style', 'text-align: center;');
    //         var cell2 = y.insertCell(1);
    //         cell2.setAttribute('style', 'text-align: center;');
    //         var cell3 = y.insertCell(2);
    //         cell3.setAttribute('style', 'text-align: center;');
    //         var cell4 = y.insertCell(3);
    //         cell4.setAttribute('style', 'text-align: center;');

    //         cell1.innerHTML = count++;
    //         cell2.innerHTML = 1300;
    //         cell3.innerHTML = rangeShow02.value;
    //         cell4.innerHTML = rangeShow03.value;
    //     }
    //     else {
    //         alert("Only 4 readings are allowed.");
    //     }
    //     if (rangeMeter2.value == 4) {
    //         document.getElementById("graph").disabled = false;
    //         setTimeout(function () {
    //             alert("Now click on 'Graph' button to obtain the 'Load Current' VS 'Terminal Voltage' graph");
    //         }, 500);
    //     }
    //     if (clickcounter_r != 1) {
    //         trace2.y.push(cell4.innerHTML);
    //         trace2.x.push(cell3.innerHTML);
    //     }
       }

});

var trace1 = {
    x: [0,0.5,1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,13.5,14,14.5,15,15.5,16],
    y: [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    //z: [],
    mode: 'lines+markers',
    line: {shape: 'hv'},
    type: 'scatter',
    color: 'blue'
};

var trace2 = {
    x: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
    y: [-1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],
    //z: [],
    mode: 'lines+markers',
    line: {shape: 'hv'},
    type: 'scatter',
    color: 'blue'
};

var trace3 = {
    x: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
    y: [-1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1],
    //z: [],
    mode: 'lines+markers',
    line: {shape: 'hv'},
    type: 'scatter',
    color: 'green'
};

var trace4 = {
    x: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
    y: [-1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1],
    //z: [],
    mode: 'lines+markers',
    line: {shape: 'hv'},
    type: 'scatter',
    color: 'red'
};

var trace5 = {
    x: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
    y: [-1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
    //z: [],
    mode: 'lines+markers',
    line: {shape: 'hv'},
    type: 'scatter',
    color: 'yellow'
};
function drawgraph() {
    if (clickcounter_nr < 16) {
        alert("Alert ! Please take 16 readings for each experiment.");
    }
    else {
        document.getElementById("graph").disabled = false;
        var data = [trace1];
        var layout = {
            xaxis: {
                title: {
                    //text: 'Load Current',
                    font:
                    {
                        family: 'Courier New, monoscope',
                        size: 16,
                        color: '#ff0000'
                    }
                },
            },
            yaxis: {
                title: {
                    text: 'CLK',
                    font:
                    {
                        family: 'Courier New, monoscope',
                        size: 16,
                        color: '#ff0000'
                    }
                },
            }
        };
        Plotly.newPlot('myDiv1', data, layout, { showSendToCloud: true });

        var data2 = [trace2];
        var layout2 = {
            xaxis: {
                title: {
                    //text: 'Load Current',
                    font:
                    {
                        family: 'Courier New, monoscope',
                        size: 16,
                        color: '#ff0000'
                    }
                },
            },
            yaxis: {
                title: {
                    text: 'Q3',
                    font:
                    {
                        family: 'Courier New, monoscope',
                        size: 16,
                        color: '#ff0000'
                    }
                },
            }
        };
        Plotly.newPlot('myDiv2', data2, layout2, { showSendToCloud: true });

        var data3 = [trace3];
        var layout3 = {
            xaxis: {
                title: {
                    //text: 'Load Current',
                    font:
                    {
                        family: 'Courier New, monoscope',
                        size: 16,
                        color: '#ff0000'
                    }
                },
            },
            yaxis: {
                title: {
                    text: 'Q2',
                    font:
                    {
                        family: 'Courier New, monoscope',
                        size: 16,
                        color: '#ff0000'
                    }
                },
            }
        };
        Plotly.newPlot('myDiv3', data3, layout3, { showSendToCloud: true });

        var data4 = [trace4];
        var layout4 = {
            xaxis: {
                title: {
                    //text: 'Load Current',
                    font:
                    {
                        family: 'Courier New, monoscope',
                        size: 16,
                        color: '#ff0000'
                    }
                },
            },
            yaxis: {
                title: {
                    text: 'Q1',
                    font:
                    {
                        family: 'Courier New, monoscope',
                        size: 16,
                        color: '#ff0000'
                    }
                },
            }
        };
        Plotly.newPlot('myDiv4', data4, layout4, { showSendToCloud: true });

        var data5 = [trace5];
        var layout5 = {
            xaxis: {
                title: {
                    //text: 'Load Current',
                    font:
                    {
                        family: 'Courier New, monoscope',
                        size: 16,
                        color: '#ff0000'
                    }
                },
            },
            yaxis: {
                title: {
                    text: 'Q0',
                    font:
                    {
                        family: 'Courier New, monoscope',
                        size: 16,
                        color: '#ff0000'
                    }
                },
            }
        };
        Plotly.newPlot('myDiv5', data5, layout5, { showSendToCloud: true });
    }
    document.getElementById("graph").disabled = true;
    document.getElementById("addToTable").disabled = true;
}