var rightconnection = false;
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
            e10 = prepare4("ld10"),
            e11 = prepare2("ld11"),
            e12 = prepare3("ld12"),
            e13 = prepare1("ld13"),
            e14 = prepare2("ld14"),
            e15 = prepare3("ld15"),
            e16 = prepare1("ld16"),
            e17 = prepare1("ld17"),
            e18 = prepare2("ld18"),
            e19 = prepare3("ld19"),
            e20 = prepare4("ld20"),
            e21 = prepare2("ld21"),
            e22 = prepare3("ld22"),
            e23 = prepare1("ld23"),
            e24 = prepare2("ld24"),
            e25 = prepare3("ld25"),
            e26 = prepare4("ld26"),
            e27 = prepare2("ld27"),
            e28 = prepare3("ld28"),
            e29 = prepare1("ld29"),
            e30 = prepare2("ld30"),
            e31 = prepare3("ld31"),
            e32 = prepare1("ld32"),
            e33 = prepare1("ld33"),
            e34 = prepare2("ld34"),
            e35 = prepare3("ld35"),
            e36 = prepare4("ld36"),
            e37 = prepare2("ld37"),
            e38 = prepare3("ld38"),
            e39 = prepare1("ld39"),
            e40 = prepare2("ld40"),
            e41 = prepare3("ld41"),
            e42 = prepare4("ld42"),
            e43 = prepare2("ld43"),
            e44 = prepare3("ld44"),
            e45 = prepare1("ld45"),
            
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

        var correct_connections_1 = [
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
                "target": "ld6"
            },

            {
                "source": "ld1",
                "target": "ld3"
            }
        ];
        var correct_connections_45 = [
            {
                "source": "ld2",
                "target": "ld45"
            },
            {
                "source": "ld40",
                "target": "ld45"
            },
            {
                "source": "ld42",
                "target": "ld45"
            },
            {
                "source": "ld44",
                "target": "ld45"
            },

            {
                "source": "ld38",
                "target": "ld45"
            }
        ];
        var correct_connections_7_11 = [
            {
                "source": "ld7",
                "target": "ld11"
            },
            

            {
                "source": "ld11",
                "target": "ld7"
            }
        ];
        var correct_connections_8_12 = [
            {
                "source": "ld8",
                "target": "ld12"
            },
            

            {
                "source": "ld12",
                "target": "ld8"
            }
        ];
        var correct_connections_9_13 = [
            {
                "source": "ld9",
                "target": "ld13"
            },
            

            {
                "source": "ld13",
                "target": "ld9"
            }
        ];
        var correct_connections_10_14 = [
            {
                "source": "ld10",
                "target": "ld14"
            },
            

            {
                "source": "ld14",
                "target": "ld10"
            }
        ];
        var correct_connections_11 = [
            {
                "source": "ld11",
                "target": "ld15"
            },
            

            {
                "source": "ld11",
                "target": "ld16"
            }
        ];
        var correct_connections_16_17 = [
            {
                "source": "ld16",
                "target": "ld17"
            },
            

            {
                "source": "ld17",
                "target": "ld16"
            }
        ];
        var correct_connections_12_18 = [
            {
                "source": "ld12",
                "target": "ld18"
            },
            

            {
                "source": "ld18",
                "target": "ld12"
            }
        ];
        var correct_connections_19_20 = [
            {
                "source": "ld19",
                "target": "ld20"
            },
            

            {
                "source": "ld20",
                "target": "ld19"
            }
        ];
        var correct_connections_13_21 = [
            {
                "source": "ld13",
                "target": "ld21"
            },
            

            {
                "source": "ld21",
                "target": "ld13"
            }
        ];
        var correct_connections_22_23 = [
            {
                "source": "ld22",
                "target": "ld23"
            },
            

            {
                "source": "ld23",
                "target": "ld22"
            }
        ];
        var correct_connections_14_24 = [
            {
                "source": "ld14",
                "target": "ld24"
            },
            

            {
                "source": "ld24",
                "target": "ld14"
            }
        ];
        var correct_connections_25_30 = [
            {
                "source": "ld25",
                "target": "ld30"
            },
            

            {
                "source": "ld30",
                "target": "ld25"
            }
        ];
        var correct_connections_26_32 = [
            {
                "source": "ld26",
                "target": "ld32"
            },
            

            {
                "source": "ld32",
                "target": "ld26"
            }
        ];
        var correct_connections_27_34 = [
            {
                "source": "ld27",
                "target": "ld34"
            },
            

            {
                "source": "ld34",
                "target": "ld27"
            }
        ];
        var correct_connections_28_36 = [
            {
                "source": "ld28",
                "target": "ld36"
            },
            

            {
                "source": "ld36",
                "target": "ld28"
            }
        ];
        var correct_connections_29_37 = [
            {
                "source": "ld29",
                "target": "ld37"
            },
            

            {
                "source": "ld37",
                "target": "ld29"
            }
        ];
        var correct_connections_31_39 = [
            {
                "source": "ld31",
                "target": "ld39"
            },
            

            {
                "source": "ld39",
                "target": "ld31"
            }
        ];
        var correct_connections_33_41 = [
            {
                "source": "ld33",
                "target": "ld41"
            },
            

            {
                "source": "ld41",
                "target": "ld33"
            }
        ];
        var correct_connections_35_43 = [
            {
                "source": "ld35",
                "target": "ld43"
            },
            

            {
                "source": "ld43",
                "target": "ld35"
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
                "target": "ld6"
            },

            {
                "source": "ld1",
                "target": "ld3"
            },
            {
                "source": "ld2",
                "target": "ld45"
            },
            {
                "source": "ld40",
                "target": "ld45"
            },
            {
                "source": "ld42",
                "target": "ld45"
            },
            {
                "source": "ld44",
                "target": "ld45"
            },

            {
                "source": "ld38",
                "target": "ld45"
            },
            {
                "source": "ld7",
                "target": "ld11"
            },
            

            {
                "source": "ld11",
                "target": "ld7"
            },
            {
                "source": "ld8",
                "target": "ld12"
            },
            

            {
                "source": "ld12",
                "target": "ld8"
            },
            {
                "source": "ld9",
                "target": "ld13"
            },
            

            {
                "source": "ld13",
                "target": "ld9"
            },
            {
                "source": "ld10",
                "target": "ld14"
            },
            

            {
                "source": "ld14",
                "target": "ld10"
            },
            {
                "source": "ld11",
                "target": "ld15"
            },
            

            {
                "source": "ld11",
                "target": "ld16"
            },
            {
                "source": "ld16",
                "target": "ld17"
            },
            

            {
                "source": "ld17",
                "target": "ld16"
            },
            {
                "source": "ld12",
                "target": "ld18"
            },
            

            {
                "source": "ld18",
                "target": "ld12"
            },
            {
                "source": "ld19",
                "target": "ld20"
            },
            

            {
                "source": "ld20",
                "target": "ld19"
            },
            {
                "source": "ld13",
                "target": "ld21"
            },
            

            {
                "source": "ld21",
                "target": "ld13"
            },
            {
                "source": "ld22",
                "target": "ld23"
            },
            

            {
                "source": "ld23",
                "target": "ld22"
            },
            {
                "source": "ld14",
                "target": "ld24"
            },
            

            {
                "source": "ld24",
                "target": "ld14"
            },
            {
                "source": "ld25",
                "target": "ld30"
            },
            

            {
                "source": "ld30",
                "target": "ld25"
            },
            {
                "source": "ld26",
                "target": "ld32"
            },
            

            {
                "source": "ld32",
                "target": "ld26"
            },
            {
                "source": "ld27",
                "target": "ld34"
            },
            

            {
                "source": "ld34",
                "target": "ld27"
            },
            {
                "source": "ld28",
                "target": "ld36"
            },
            

            {
                "source": "ld36",
                "target": "ld28"
            },
            {
                "source": "ld29",
                "target": "ld37"
            },
            

            {
                "source": "ld37",
                "target": "ld29"
            },
            {
                "source": "ld31",
                "target": "ld39"
            },
            

            {
                "source": "ld39",
                "target": "ld31"
            },
            {
                "source": "ld33",
                "target": "ld41"
            },
            

            {
                "source": "ld41",
                "target": "ld33"
            },
            {
                "source": "ld35",
                "target": "ld43"
            },
            

            {
                "source": "ld43",
                "target": "ld35"
            }


        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_1 = false;
        var is_connected_45 = false;
        var is_connected_7_11 = false;
        var is_connected_8_12 = false;
        var is_connected_9_13 = false;
        var is_connected_10_14 = false;
        var is_connected_11 = false;
        var is_connected_16_17 = false;
        var is_connected_12_18 = false;
        var is_connected_19_20 = false;
        var is_connected_13_21 = false;
        var is_connected_22_23 = false;
        var is_connected_14_24 = false;
        var is_connected_25_30 = false;
        var is_connected_26_32 = false;
        var is_connected_27_34 = false;
        var is_connected_28_36 = false;
        var is_connected_29_37 = false;
        var is_connected_31_39 = false;
        var is_connected_33_41 = false;
        var is_connected_35_43 = false;
        var unallowed_connection_present = false;

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_1) {
                is_connected_1 = correct_connections_1.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_45) {
                is_connected_45 = correct_connections_45.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_7_11) {
                is_connected_7_11 = correct_connections_7_11.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_8_12) {
                is_connected_8_12 = correct_connections_8_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_9_13) {
                is_connected_9_13 = correct_connections_9_13.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_10_14) {
                is_connected_10_14 = correct_connections_10_14.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_11) {
                is_connected_11 = correct_connections_11.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_16_17) {
                is_connected_16_17 = correct_connections_16_17.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_12_18) {
                is_connected_12_18 = correct_connections_12_18.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_19_20) {
                is_connected_19_20 = correct_connections_19_20.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_13_21) {
                is_connected_13_21 = correct_connections_13_21.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_22_23) {
                is_connected_22_23 = correct_connections_22_23.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_14_24) {
                is_connected_14_24 = correct_connections_14_24.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_25_30) {
                is_connected_25_30 = correct_connections_25_30.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_26_32) {
                is_connected_26_32 = correct_connections_26_32.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_27_34) {
                is_connected_27_34 = correct_connections_27_34.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_28_36) {
                is_connected_28_36 = correct_connections_28_36.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_29_37) {
                is_connected_29_37 = correct_connections_29_37.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_31_39) {
                is_connected_31_39 = correct_connections_31_39.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_33_41) {
                is_connected_33_41 = correct_connections_33_41.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_35_43) {
                is_connected_35_43 = correct_connections_35_43.find(function (conn) {
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
        if (is_connected_1 && !unallowed_connection_present) {
            alert("𝐀𝐥𝐞𝐫𝐭 ! 𝐂𝐨𝐫𝐫𝐞𝐜𝐭 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧 𝐩𝐫𝐨𝐜𝐞𝐞𝐝 𝐭𝐨 𝐭𝐚𝐤𝐞 𝐫𝐞𝐚𝐝𝐢𝐧𝐠.");
            document.getElementById("check-button").disabled = true;
            document.getElementById('add').disabled = false;
            rightconnection = true;
            disable_all();
            document.querySelector("#connection-table").innerHTML = "";
            document.querySelector("#wrapper").style.top = "10px";
        }
        else {
            alert("𝐀𝐥𝐞𝐫𝐭 ! 𝐈𝐧𝐜𝐨𝐫𝐫𝐞𝐜𝐭 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧.");

            return;
        }
    });
});
document.getElementById('battery').onclick=
function () {
    if(rightconnection==true){
    alert("𝐀𝐥𝐞𝐫𝐭 ! Battery Connected, 𝐩𝐫𝐨𝐜𝐞𝐞𝐝 𝐭𝐨 𝐭𝐚𝐤𝐞 𝐫𝐞𝐚𝐝𝐢𝐧𝐠.");
    }
}

function disable_all() {
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
                Connector: ["Bezier", { curviness: 90 }],
                Container: "canvas"
            });

        // suspend drawing and initialise.
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
                e11 = prepare2("ld11"),
                e12 = prepare3("ld12"),
                e13 = prepare1("ld13"),
                e14 = prepare2("ld14"),
                e15 = prepare3("ld15"),
                e16 = prepare1("ld16"),
                e17 = prepare1("ld17"),
                e18 = prepare2("ld18"),
                e19 = prepare3("ld19"),
                e20 = prepare4("ld20"),
                e21 = prepare2("ld21"),
                e22 = prepare3("ld22"),
                e23 = prepare1("ld23"),
                e24 = prepare2("ld24"),
                e25 = prepare3("ld25"),
                e26 = prepare4("ld26"),
                e27 = prepare2("ld27"),
                e28 = prepare3("ld28"),
                e29 = prepare1("ld29"),
                e30 = prepare2("ld30"),
                e31 = prepare3("ld31"),
                e32 = prepare1("ld32"),
                e33 = prepare1("ld33"),
                e34 = prepare2("ld34"),
                e35 = prepare3("ld35"),
                e36 = prepare4("ld36"),
                e37 = prepare2("ld37"),
                e38 = prepare3("ld38"),
                e39 = prepare1("ld39"),
                e40 = prepare2("ld40"),
                e41 = prepare3("ld41"),
                e42 = prepare4("ld42"),
                e43 = prepare2("ld43"),
                e44 = prepare3("ld44"),
                e45 = prepare1("ld45"),
                clearBtn = jsPlumb.getSelector("#anim-clear"),
                addBtn = jsPlumb.getSelector("#add");
        });
    });
}


// var rangeMeter1 = document.querySelector('#range1');
// var rangeMeter2 = document.querySelector('#range2');

// var meterShow1 = document.querySelector("#show01");
// var meterShow2 = document.querySelector("#show02");
// var meterShow3 = document.querySelector("#show03");



// var rangeShow1 = document.querySelector("#show1");
// var rangeShow2 = document.querySelector("#show2");


// var rangeClock1 = document.querySelector('#meter1');
// var rangeClock2 = document.querySelector('#meter2');

var table1 = document.getElementById('table1');
//var table2 = document.querySelector('#table2');

var b3 = [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
var b2 = [0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1];
var b1 = [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1];
var b0 = [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1];
var g3 = [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
var g2 = [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0];
var g1 = [0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0];
var g0 = [0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0];
// document.getElementById('add').disabled = false;
var count = 0;

// const int_speed = [0, 200, 400, 600, 800, 1000];
// const inc_field_curr = [0, 0.4, 0.8, 1.2, 1.6, 2, 2.4, 2.8, 3.2, 3.6, 4];
// const dec_field_curr = [0, 0.4, 0.8, 1.2, 1.6, 2, 2.4, 2.8, 3.2, 3.6, 4];


// const inc_ind_emf = [10, 26, 40, 54, 66, 78, 88, 95, 102, 109, 112];
// const dec_ind_emf = [15, 31, 50, 65, 78, 85, 90, 98, 104, 110, 112];

let mcboffstate = true;

function mcbonoff() {
    if (rightconnection == true) {

        if (mcboffstate == true) {

            mcboffstate = false;
            // document.getElementById('myimage').src = '/static/images/switchon (1).png';
            // document.getElementById('myimage1').src = '/static/images/push2.png';
            // document.getElementById('a1').src = '/static/images/on.png';
            // document.getElementById('a2').src = '/static/images/on.png';
            // document.getElementById('myimage').onclick=
            // function(){
            //     document.getElementById('myimage').src = '/static/images/switchoff (1).png';
            //     document.getElementById('myimage1').src = '/static/images/push1.png';
            //     document.getElementById('a1').src = '/static/images/off.png';
            //     document.getElementById('a2').src = '/static/images/off.png';
            //}
            //document.getElementById('myimage2').src = '/static/images/push2.png';
            //document.getElementById('myimage3').src = '/static/images/push2.png';

            // document.getElementById("line1").style.backgroundColor = "green";
            // document.getElementById("line2").style.backgroundColor = "green";
            // document.getElementById("line3").style.backgroundColor = "green";
            // document.getElementById("line4").style.backgroundColor = "green";
            //rotaronoff();
        }
        else {
            return;
        }
    }
    else {
        alert("𝐀𝐥𝐞𝐫𝐭 ! 𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐞 𝐭𝐡𝐞 𝐜𝐢𝐫𝐜𝐮𝐢𝐭 𝐨𝐫 𝐫𝐞𝐦𝐨𝐯𝐞 𝐰𝐫𝐨𝐧𝐠 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧𝐬");
    }
}
function mcbonoff1() {
    if (rightconnection == true) {

        if (mcboffstate == true) {

            mcboffstate = false;
            
        }
        else {
            return;
        }
    }
    else {
        alert("𝐀𝐥𝐞𝐫𝐭 ! 𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐞 𝐭𝐡𝐞 𝐜𝐢𝐫𝐜𝐮𝐢𝐭 𝐨𝐫 𝐫𝐞𝐦𝐨𝐯𝐞 𝐰𝐫𝐨𝐧𝐠 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧𝐬");
    }
}
function mcbonoff2() {
    if (rightconnection == true) {

        if (mcboffstate == true) {

            mcboffstate = false;
            
        }
        else {
            return;
        }
    }
    else {
        alert("𝐀𝐥𝐞𝐫𝐭 ! 𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐞 𝐭𝐡𝐞 𝐜𝐢𝐫𝐜𝐮𝐢𝐭 𝐨𝐫 𝐫𝐞𝐦𝐨𝐯𝐞 𝐰𝐫𝐨𝐧𝐠 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧𝐬");
    }
}
function mcbonoff3() {
    if (rightconnection == true) {

        if (mcboffstate == true) {

            mcboffstate = false;
            
        }
        else {
            return;
        }
    }
    else {
        alert("𝐀𝐥𝐞𝐫𝐭 ! 𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐞 𝐭𝐡𝐞 𝐜𝐢𝐫𝐜𝐮𝐢𝐭 𝐨𝐫 𝐫𝐞𝐦𝐨𝐯𝐞 𝐰𝐫𝐨𝐧𝐠 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧𝐬");
    }
}


// var rotoroffstate = true;
// function rotaronoff() {
//     if (mcboffstate == false) {
//         if (rotoroffstate == true) {
//             rangeMeter1.disabled = false;
//             rangeMeter1.value = 1;
//             rangeMeter2.value = 0;
//             rangeShow1.value = rangeMeter1.value;
//             rangeShow2.value = rangeMeter2.value;

//             meterShow1.value = int_speed[rangeMeter1.value];
//             document.getElementById('cirmover').style.animation = `rotation ${(1500 - meterShow1.value) / 200}s infinite linear`;

//         }
//         else {
//             return;
//         }
//     }
//     else {
//         return;
//     }
// }

//var sliderValue = 0;
// var addButton = document.querySelector("#add");
// function disableToggler() {
//     if (increasing) {
//         if (Number(rangeMeter2.value) > Number(sliderValue)) {
//             if (addButton.disabled == true) {
//                 rangeMeter2.disabled = true;
//                 addButton.disabled = false;
//             }
//             else {
//                 rangeMeter2.disabled = false;
//                 addButton.disabled = true;
//             }
//             sliderValue = rangeMeter2.value;
//         }
//     }
//     else {

//         if (Number(rangeMeter2.value) < Number(sliderValue)) {
//             if (addButton.disabled == true) {
//                 rangeMeter2.disabled = true;
//                 addButton.disabled = false;
//             }
//             else {
//                 rangeMeter2.disabled = false;
//                 addButton.disabled = true;
//             }
//             sliderValue = rangeMeter2.value;
//         }
//     }
// }


// function rangeChange1() {
//     const val = rangeMeter1.value;
//     rangeShow1.value = val;
//     meterShow1.value = int_speed[val];
//     document.getElementById('cirmover').style.animation = `rotation ${(1500 - meterShow1.value) / 400}s infinite linear`;

//     if (val === "5") {
//         document.querySelector("#range1").disabled = true;
//         rangeMeter2.disabled = false;
//         setTimeout(function () {
//             alert("𝐍𝐨𝐰 start changing DC generator field");
//         }, 1000);
//         rangeChange3();
//         meterShow3.value = inc_ind_emf[0];
//         rangeClock2.style.transform = 'rotate(' + (-62 + (((meterShow3.value / 20) * 1000) / 50)) + 'deg)';
//     }
// }
//rangeMeter1.addEventListener('input', rangeChange1);


// var tenthFirstCall = true; // having issue on slider 2 value 10
// var increasing = true;
// function rangeChange2() {
//     const val = rangeMeter2.value;
//     rangeShow2.value = val;

//     if (increasing) {
//         meterShow2.value = inc_field_curr[val];
//         rangeClock1.style.transform = 'rotate(' + (-62 + (meterShow3.value / 10)) + 'deg)';
//         meterShow3.value = inc_ind_emf[val];
//         rangeClock2.style.transform = 'rotate(' + (-62 + (((meterShow3.value / 20) * 1000) / 50)) + 'deg)';
//         disableToggler();
//         if (val == 10) {
//             rangeChange3();
//             tenthFirstCall = false;
//             setTimeout(function () {
//                 alert("𝐍𝐨𝐰 start decreasing DC Generator field value");
//             }, 1000);
//             increasing = false;
//             clickCounter = 0;
//             sliderValue++;
//             rangeChange3();

//         }
//     }
//     else {
//         meterShow2.value = dec_field_curr[val];
//         rangeClock1.style.transform = 'rotate(' + (-62 + (((meterShow3.value / 20) * 100) / 50)) + 'deg)';
//         meterShow3.value = dec_ind_emf[val];
//         rangeClock2.style.transform = 'rotate(' + (-62 + (((meterShow3.value / 20) * 1000) / 50)) + 'deg)';
//         disableToggler();
//         if (val == 0) {
//             rangeChange3();
//             document.querySelector("#range2").disabled = true;
//             document.querySelector('#graph').disabled = false;
//             document.querySelector('#add').disabled = true;
//             setTimeout(function () {
//                 alert("𝐍𝐨𝐰 click on 'Graph' button");
//             }, 1000);
//         }
//     }
// }
// rangeMeter2.addEventListener('input', rangeChange2);

// const trace1 = {
//     x: [],
//     y: [],
//     type: 'scatter'
// };

// const trace2 = {
//     x: [],
//     y: [],
//     type: 'scatter'
// };


var clickCounter = 0;
var button = document.getElementById('add');
button.onclick=
function () {
    //const val = rangeMeter2.value;
    clickCounter+=1;
    if (clickCounter==1) {
        const y = table1.insertRow(clickCounter);
        const cell1 = y.insertCell(0);
        cell1.setAttribute('style', 'text-align: center;');
        const cell2 = y.insertCell(1);
        cell2.setAttribute('style', 'text-align: center;');
        const cell3 = y.insertCell(2);
        cell3.setAttribute('style', 'text-align: center;');
        const cell4 = y.insertCell(3);
        cell4.setAttribute('style', 'text-align: center;');
        const cell5 = y.insertCell(4);
        cell5.setAttribute('style', 'text-align: center;');
        const cell6 = y.insertCell(5);
        cell6.setAttribute('style', 'text-align: center;');
        const cell7 = y.insertCell(6);
        cell7.setAttribute('style', 'text-align: center;');
        const cell8 = y.insertCell(7);
        cell8.setAttribute('style', 'text-align: center;');
        const cell9 = y.insertCell(8);
        cell9.setAttribute('style', 'text-align: center;');
        const cell10 = y.insertCell(9);
        cell10.setAttribute('style', 'text-align: center;');

        cell1.innerHTML = clickCounter;
        cell2.innerHTML = clickCounter-1;
        cell3.innerHTML = b3[count];
        cell4.innerHTML = b2[count];
        cell5.innerHTML = b1[count];
        cell6.innerHTML = b0[count];
        cell7.innerHTML = g3[count];
        cell8.innerHTML = g2[count];
        cell9.innerHTML = g1[count];
        cell10.innerHTML = g0[count];
        // trace1.x.push(inc_field_curr[val]);
        // trace1.y.push(inc_ind_emf[val]);
        // sliderValue--;
    }
    // else {
    //     clickCounter++;
    //     const y = table2.insertRow(clickCounter);
    //     const cell1 = y.insertCell(0);
    //     cell1.setAttribute('style', 'text-align: center; border-left: 0;');
    //     const cell2 = y.insertCell(1);
    //     cell2.setAttribute('style', 'text-align: center;');


    //     cell1.innerHTML = dec_field_curr[val];
    //     cell2.innerHTML = dec_ind_emf[val];
    //     trace2.x.push(dec_field_curr[val]);
    //     trace2.y.push(dec_ind_emf[val]);
    //     sliderValue++;
    // }
    if (clickCounter==2) {
        document.getElementById('myimage01').src = '/static/images/switchon (1).png';
        document.getElementById('myimage4').src = '/static/images/push2.png';
        document.getElementById('a4').src = '/static/images/on.png';
        const y = table1.insertRow(clickCounter);
        const cell1 = y.insertCell(0);
        cell1.setAttribute('style', 'text-align: center;');
        const cell2 = y.insertCell(1);
        cell2.setAttribute('style', 'text-align: center;');
        const cell3 = y.insertCell(2);
        cell3.setAttribute('style', 'text-align: center;');
        const cell4 = y.insertCell(3);
        cell4.setAttribute('style', 'text-align: center;');
        const cell5 = y.insertCell(4);
        cell5.setAttribute('style', 'text-align: center;');
        const cell6 = y.insertCell(5);
        cell6.setAttribute('style', 'text-align: center;');
        const cell7 = y.insertCell(6);
        cell7.setAttribute('style', 'text-align: center;');
        const cell8 = y.insertCell(7);
        cell8.setAttribute('style', 'text-align: center;');
        const cell9 = y.insertCell(8);
        cell9.setAttribute('style', 'text-align: center;');
        const cell10 = y.insertCell(9);
        cell10.setAttribute('style', 'text-align: center;');

        cell1.innerHTML = clickCounter;
        cell2.innerHTML = clickCounter-1;
        cell3.innerHTML = b3[count];
        cell4.innerHTML = b2[count];
        cell5.innerHTML = b1[count];
        cell6.innerHTML = b0[count];
        cell7.innerHTML = g3[count];
        cell8.innerHTML = g2[count];
        cell9.innerHTML = g1[count];
        cell10.innerHTML = g0[count];
        // trace1.x.push(inc_field_curr[val]);
        // trace1.y.push(inc_ind_emf[val]);
        // sliderValue--;
    }
    if (clickCounter==3) {
        document.getElementById('myimage01').src = '/static/images/switchoff (1).png';
        document.getElementById('myimage02').src = '/static/images/switchon (1).png';
        document.getElementById('myimage4').src = '/static/images/push1.png';
        document.getElementById('myimage3').src = '/static/images/push2.png';
        document.getElementById('a4').src = '/static/images/on.png';
        document.getElementById('a3').src = '/static/images/on.png';
        const y = table1.insertRow(clickCounter);
        const cell1 = y.insertCell(0);
        cell1.setAttribute('style', 'text-align: center;');
        const cell2 = y.insertCell(1);
        cell2.setAttribute('style', 'text-align: center;');
        const cell3 = y.insertCell(2);
        cell3.setAttribute('style', 'text-align: center;');
        const cell4 = y.insertCell(3);
        cell4.setAttribute('style', 'text-align: center;');
        const cell5 = y.insertCell(4);
        cell5.setAttribute('style', 'text-align: center;');
        const cell6 = y.insertCell(5);
        cell6.setAttribute('style', 'text-align: center;');
        const cell7 = y.insertCell(6);
        cell7.setAttribute('style', 'text-align: center;');
        const cell8 = y.insertCell(7);
        cell8.setAttribute('style', 'text-align: center;');
        const cell9 = y.insertCell(8);
        cell9.setAttribute('style', 'text-align: center;');
        const cell10 = y.insertCell(9);
        cell10.setAttribute('style', 'text-align: center;');

        cell1.innerHTML = clickCounter;
        cell2.innerHTML = clickCounter-1;
        cell3.innerHTML = b3[count];
        cell4.innerHTML = b2[count];
        cell5.innerHTML = b1[count];
        cell6.innerHTML = b0[count];
        cell7.innerHTML = g3[count];
        cell8.innerHTML = g2[count];
        cell9.innerHTML = g1[count];
        cell10.innerHTML = g0[count];
        // trace1.x.push(inc_field_curr[val]);
        // trace1.y.push(inc_ind_emf[val]);
        // sliderValue--;
    }
    if (clickCounter==4) {
        document.getElementById('myimage01').src = '/static/images/switchon (1).png';
        document.getElementById('myimage02').src = '/static/images/switchon (1).png';
        document.getElementById('myimage4').src = '/static/images/push2.png';
        document.getElementById('myimage3').src = '/static/images/push2.png';
        document.getElementById('a4').src = '/static/images/off.png';
        document.getElementById('a3').src = '/static/images/on.png';
        const y = table1.insertRow(clickCounter);
        const cell1 = y.insertCell(0);
        cell1.setAttribute('style', 'text-align: center;');
        const cell2 = y.insertCell(1);
        cell2.setAttribute('style', 'text-align: center;');
        const cell3 = y.insertCell(2);
        cell3.setAttribute('style', 'text-align: center;');
        const cell4 = y.insertCell(3);
        cell4.setAttribute('style', 'text-align: center;');
        const cell5 = y.insertCell(4);
        cell5.setAttribute('style', 'text-align: center;');
        const cell6 = y.insertCell(5);
        cell6.setAttribute('style', 'text-align: center;');
        const cell7 = y.insertCell(6);
        cell7.setAttribute('style', 'text-align: center;');
        const cell8 = y.insertCell(7);
        cell8.setAttribute('style', 'text-align: center;');
        const cell9 = y.insertCell(8);
        cell9.setAttribute('style', 'text-align: center;');
        const cell10 = y.insertCell(9);
        cell10.setAttribute('style', 'text-align: center;');

        cell1.innerHTML = clickCounter;
        cell2.innerHTML = clickCounter-1;
        cell3.innerHTML = b3[count];
        cell4.innerHTML = b2[count];
        cell5.innerHTML = b1[count];
        cell6.innerHTML = b0[count];
        cell7.innerHTML = g3[count];
        cell8.innerHTML = g2[count];
        cell9.innerHTML = g1[count];
        cell10.innerHTML = g0[count];
        // trace1.x.push(inc_field_curr[val]);
        // trace1.y.push(inc_ind_emf[val]);
        // sliderValue--;
    }
    if (clickCounter==5) {
        document.getElementById('myimage01').src = '/static/images/switchoff (1).png';
        document.getElementById('myimage02').src = '/static/images/switchoff (1).png';
        document.getElementById('myimage03').src = '/static/images/switchon (1).png';
        document.getElementById('myimage4').src = '/static/images/push1.png';
        document.getElementById('myimage3').src = '/static/images/push1.png';
        document.getElementById('myimage2').src = '/static/images/push2.png';
        document.getElementById('a4').src = '/static/images/off.png';
        document.getElementById('a3').src = '/static/images/on.png';
        document.getElementById('a2').src = '/static/images/on.png';
        const y = table1.insertRow(clickCounter);
        const cell1 = y.insertCell(0);
        cell1.setAttribute('style', 'text-align: center;');
        const cell2 = y.insertCell(1);
        cell2.setAttribute('style', 'text-align: center;');
        const cell3 = y.insertCell(2);
        cell3.setAttribute('style', 'text-align: center;');
        const cell4 = y.insertCell(3);
        cell4.setAttribute('style', 'text-align: center;');
        const cell5 = y.insertCell(4);
        cell5.setAttribute('style', 'text-align: center;');
        const cell6 = y.insertCell(5);
        cell6.setAttribute('style', 'text-align: center;');
        const cell7 = y.insertCell(6);
        cell7.setAttribute('style', 'text-align: center;');
        const cell8 = y.insertCell(7);
        cell8.setAttribute('style', 'text-align: center;');
        const cell9 = y.insertCell(8);
        cell9.setAttribute('style', 'text-align: center;');
        const cell10 = y.insertCell(9);
        cell10.setAttribute('style', 'text-align: center;');

        cell1.innerHTML = clickCounter;
        cell2.innerHTML = clickCounter-1;
        cell3.innerHTML = b3[count];
        cell4.innerHTML = b2[count];
        cell5.innerHTML = b1[count];
        cell6.innerHTML = b0[count];
        cell7.innerHTML = g3[count];
        cell8.innerHTML = g2[count];
        cell9.innerHTML = g1[count];
        cell10.innerHTML = g0[count];
        // trace1.x.push(inc_field_curr[val]);
        // trace1.y.push(inc_ind_emf[val]);
        // sliderValue--;
    }
    if (clickCounter==6) {
        document.getElementById('myimage01').src = '/static/images/switchon (1).png';
        document.getElementById('myimage02').src = '/static/images/switchoff (1).png';
        document.getElementById('myimage03').src = '/static/images/switchon (1).png';
        document.getElementById('myimage4').src = '/static/images/push2.png';
        document.getElementById('myimage3').src = '/static/images/push1.png';
        document.getElementById('myimage2').src = '/static/images/push2.png';
        document.getElementById('a4').src = '/static/images/on.png';
        document.getElementById('a3').src = '/static/images/on.png';
        document.getElementById('a2').src = '/static/images/on.png';
        const y = table1.insertRow(clickCounter);
        const cell1 = y.insertCell(0);
        cell1.setAttribute('style', 'text-align: center;');
        const cell2 = y.insertCell(1);
        cell2.setAttribute('style', 'text-align: center;');
        const cell3 = y.insertCell(2);
        cell3.setAttribute('style', 'text-align: center;');
        const cell4 = y.insertCell(3);
        cell4.setAttribute('style', 'text-align: center;');
        const cell5 = y.insertCell(4);
        cell5.setAttribute('style', 'text-align: center;');
        const cell6 = y.insertCell(5);
        cell6.setAttribute('style', 'text-align: center;');
        const cell7 = y.insertCell(6);
        cell7.setAttribute('style', 'text-align: center;');
        const cell8 = y.insertCell(7);
        cell8.setAttribute('style', 'text-align: center;');
        const cell9 = y.insertCell(8);
        cell9.setAttribute('style', 'text-align: center;');
        const cell10 = y.insertCell(9);
        cell10.setAttribute('style', 'text-align: center;');

        cell1.innerHTML = clickCounter;
        cell2.innerHTML = clickCounter-1;
        cell3.innerHTML = b3[count];
        cell4.innerHTML = b2[count];
        cell5.innerHTML = b1[count];
        cell6.innerHTML = b0[count];
        cell7.innerHTML = g3[count];
        cell8.innerHTML = g2[count];
        cell9.innerHTML = g1[count];
        cell10.innerHTML = g0[count];
        // trace1.x.push(inc_field_curr[val]);
        // trace1.y.push(inc_ind_emf[val]);
        // sliderValue--;
    }
    if (clickCounter==7) {
        document.getElementById('myimage01').src = '/static/images/switchoff (1).png';
        document.getElementById('myimage02').src = '/static/images/switchon (1).png';
        document.getElementById('myimage03').src = '/static/images/switchon (1).png';
        document.getElementById('myimage4').src = '/static/images/push1.png';
        document.getElementById('myimage3').src = '/static/images/push2.png';
        document.getElementById('myimage2').src = '/static/images/push2.png';
        document.getElementById('a4').src = '/static/images/on.png';
        document.getElementById('a3').src = '/static/images/off.png';
        document.getElementById('a2').src = '/static/images/on.png';
        const y = table1.insertRow(clickCounter);
        const cell1 = y.insertCell(0);
        cell1.setAttribute('style', 'text-align: center;');
        const cell2 = y.insertCell(1);
        cell2.setAttribute('style', 'text-align: center;');
        const cell3 = y.insertCell(2);
        cell3.setAttribute('style', 'text-align: center;');
        const cell4 = y.insertCell(3);
        cell4.setAttribute('style', 'text-align: center;');
        const cell5 = y.insertCell(4);
        cell5.setAttribute('style', 'text-align: center;');
        const cell6 = y.insertCell(5);
        cell6.setAttribute('style', 'text-align: center;');
        const cell7 = y.insertCell(6);
        cell7.setAttribute('style', 'text-align: center;');
        const cell8 = y.insertCell(7);
        cell8.setAttribute('style', 'text-align: center;');
        const cell9 = y.insertCell(8);
        cell9.setAttribute('style', 'text-align: center;');
        const cell10 = y.insertCell(9);
        cell10.setAttribute('style', 'text-align: center;');

        cell1.innerHTML = clickCounter;
        cell2.innerHTML = clickCounter-1;
        cell3.innerHTML = b3[count];
        cell4.innerHTML = b2[count];
        cell5.innerHTML = b1[count];
        cell6.innerHTML = b0[count];
        cell7.innerHTML = g3[count];
        cell8.innerHTML = g2[count];
        cell9.innerHTML = g1[count];
        cell10.innerHTML = g0[count];
        // trace1.x.push(inc_field_curr[val]);
        // trace1.y.push(inc_ind_emf[val]);
        // sliderValue--;
    }
    if (clickCounter==8) {
        document.getElementById('myimage01').src = '/static/images/switchon (1).png';
        document.getElementById('myimage02').src = '/static/images/switchon (1).png';
        document.getElementById('myimage03').src = '/static/images/switchon (1).png';
        document.getElementById('myimage4').src = '/static/images/push2.png';
        document.getElementById('myimage3').src = '/static/images/push2.png';
        document.getElementById('myimage2').src = '/static/images/push2.png';
        document.getElementById('a4').src = '/static/images/off.png';
        document.getElementById('a3').src = '/static/images/off.png';
        document.getElementById('a2').src = '/static/images/on.png';
        const y = table1.insertRow(clickCounter);
        const cell1 = y.insertCell(0);
        cell1.setAttribute('style', 'text-align: center;');
        const cell2 = y.insertCell(1);
        cell2.setAttribute('style', 'text-align: center;');
        const cell3 = y.insertCell(2);
        cell3.setAttribute('style', 'text-align: center;');
        const cell4 = y.insertCell(3);
        cell4.setAttribute('style', 'text-align: center;');
        const cell5 = y.insertCell(4);
        cell5.setAttribute('style', 'text-align: center;');
        const cell6 = y.insertCell(5);
        cell6.setAttribute('style', 'text-align: center;');
        const cell7 = y.insertCell(6);
        cell7.setAttribute('style', 'text-align: center;');
        const cell8 = y.insertCell(7);
        cell8.setAttribute('style', 'text-align: center;');
        const cell9 = y.insertCell(8);
        cell9.setAttribute('style', 'text-align: center;');
        const cell10 = y.insertCell(9);
        cell10.setAttribute('style', 'text-align: center;');

        cell1.innerHTML = clickCounter;
        cell2.innerHTML = clickCounter-1;
        cell3.innerHTML = b3[count];
        cell4.innerHTML = b2[count];
        cell5.innerHTML = b1[count];
        cell6.innerHTML = b0[count];
        cell7.innerHTML = g3[count];
        cell8.innerHTML = g2[count];
        cell9.innerHTML = g1[count];
        cell10.innerHTML = g0[count];
        // trace1.x.push(inc_field_curr[val]);
        // trace1.y.push(inc_ind_emf[val]);
        // sliderValue--;
    }
    if (clickCounter==9) {
        document.getElementById('myimage01').src = '/static/images/switchoff (1).png';
        document.getElementById('myimage02').src = '/static/images/switchoff (1).png';
        document.getElementById('myimage03').src = '/static/images/switchoff (1).png';
        document.getElementById('myimage').src = '/static/images/switchon (1).png';
        document.getElementById('myimage4').src = '/static/images/push1.png';
        document.getElementById('myimage3').src = '/static/images/push1.png';
        document.getElementById('myimage2').src = '/static/images/push1.png';
        document.getElementById('myimage1').src = '/static/images/push2.png';
        document.getElementById('a4').src = '/static/images/off.png';
        document.getElementById('a3').src = '/static/images/off.png';
        document.getElementById('a2').src = '/static/images/on.png';
        document.getElementById('a1').src = '/static/images/on.png';
        const y = table1.insertRow(clickCounter);
        const cell1 = y.insertCell(0);
        cell1.setAttribute('style', 'text-align: center;');
        const cell2 = y.insertCell(1);
        cell2.setAttribute('style', 'text-align: center;');
        const cell3 = y.insertCell(2);
        cell3.setAttribute('style', 'text-align: center;');
        const cell4 = y.insertCell(3);
        cell4.setAttribute('style', 'text-align: center;');
        const cell5 = y.insertCell(4);
        cell5.setAttribute('style', 'text-align: center;');
        const cell6 = y.insertCell(5);
        cell6.setAttribute('style', 'text-align: center;');
        const cell7 = y.insertCell(6);
        cell7.setAttribute('style', 'text-align: center;');
        const cell8 = y.insertCell(7);
        cell8.setAttribute('style', 'text-align: center;');
        const cell9 = y.insertCell(8);
        cell9.setAttribute('style', 'text-align: center;');
        const cell10 = y.insertCell(9);
        cell10.setAttribute('style', 'text-align: center;');

        cell1.innerHTML = clickCounter;
        cell2.innerHTML = clickCounter-1;
        cell3.innerHTML = b3[count];
        cell4.innerHTML = b2[count];
        cell5.innerHTML = b1[count];
        cell6.innerHTML = b0[count];
        cell7.innerHTML = g3[count];
        cell8.innerHTML = g2[count];
        cell9.innerHTML = g1[count];
        cell10.innerHTML = g0[count];
        // trace1.x.push(inc_field_curr[val]);
        // trace1.y.push(inc_ind_emf[val]);
        // sliderValue--;
    }
    if (clickCounter==10) {
        document.getElementById('myimage01').src = '/static/images/switchon (1).png';
        document.getElementById('myimage02').src = '/static/images/switchoff (1).png';
        document.getElementById('myimage03').src = '/static/images/switchoff (1).png';
        document.getElementById('myimage').src = '/static/images/switchon (1).png';
        document.getElementById('myimage4').src = '/static/images/push2.png';
        document.getElementById('myimage3').src = '/static/images/push1.png';
        document.getElementById('myimage2').src = '/static/images/push1.png';
        document.getElementById('myimage1').src = '/static/images/push2.png';
        document.getElementById('a4').src = '/static/images/on.png';
        document.getElementById('a3').src = '/static/images/off.png';
        document.getElementById('a2').src = '/static/images/on.png';
        document.getElementById('a1').src = '/static/images/on.png';
        const y = table1.insertRow(clickCounter);
        const cell1 = y.insertCell(0);
        cell1.setAttribute('style', 'text-align: center;');
        const cell2 = y.insertCell(1);
        cell2.setAttribute('style', 'text-align: center;');
        const cell3 = y.insertCell(2);
        cell3.setAttribute('style', 'text-align: center;');
        const cell4 = y.insertCell(3);
        cell4.setAttribute('style', 'text-align: center;');
        const cell5 = y.insertCell(4);
        cell5.setAttribute('style', 'text-align: center;');
        const cell6 = y.insertCell(5);
        cell6.setAttribute('style', 'text-align: center;');
        const cell7 = y.insertCell(6);
        cell7.setAttribute('style', 'text-align: center;');
        const cell8 = y.insertCell(7);
        cell8.setAttribute('style', 'text-align: center;');
        const cell9 = y.insertCell(8);
        cell9.setAttribute('style', 'text-align: center;');
        const cell10 = y.insertCell(9);
        cell10.setAttribute('style', 'text-align: center;');

        cell1.innerHTML = clickCounter;
        cell2.innerHTML = clickCounter-1;
        cell3.innerHTML = b3[count];
        cell4.innerHTML = b2[count];
        cell5.innerHTML = b1[count];
        cell6.innerHTML = b0[count];
        cell7.innerHTML = g3[count];
        cell8.innerHTML = g2[count];
        cell9.innerHTML = g1[count];
        cell10.innerHTML = g0[count];
        // trace1.x.push(inc_field_curr[val]);
        // trace1.y.push(inc_ind_emf[val]);
        // sliderValue--;
    }
    if (clickCounter==11) {
        document.getElementById('myimage01').src = '/static/images/switchoff (1).png';
        document.getElementById('myimage02').src = '/static/images/switchon (1).png';
        document.getElementById('myimage03').src = '/static/images/switchoff (1).png';
        document.getElementById('myimage').src = '/static/images/switchon (1).png';
        document.getElementById('myimage4').src = '/static/images/push1.png';
        document.getElementById('myimage3').src = '/static/images/push2.png';
        document.getElementById('myimage2').src = '/static/images/push1.png';
        document.getElementById('myimage1').src = '/static/images/push2.png';
        document.getElementById('a4').src = '/static/images/on.png';
        document.getElementById('a3').src = '/static/images/on.png';
        document.getElementById('a2').src = '/static/images/on.png';
        document.getElementById('a1').src = '/static/images/on.png';
        const y = table1.insertRow(clickCounter);
        const cell1 = y.insertCell(0);
        cell1.setAttribute('style', 'text-align: center;');
        const cell2 = y.insertCell(1);
        cell2.setAttribute('style', 'text-align: center;');
        const cell3 = y.insertCell(2);
        cell3.setAttribute('style', 'text-align: center;');
        const cell4 = y.insertCell(3);
        cell4.setAttribute('style', 'text-align: center;');
        const cell5 = y.insertCell(4);
        cell5.setAttribute('style', 'text-align: center;');
        const cell6 = y.insertCell(5);
        cell6.setAttribute('style', 'text-align: center;');
        const cell7 = y.insertCell(6);
        cell7.setAttribute('style', 'text-align: center;');
        const cell8 = y.insertCell(7);
        cell8.setAttribute('style', 'text-align: center;');
        const cell9 = y.insertCell(8);
        cell9.setAttribute('style', 'text-align: center;');
        const cell10 = y.insertCell(9);
        cell10.setAttribute('style', 'text-align: center;');

        cell1.innerHTML = clickCounter;
        cell2.innerHTML = clickCounter-1;
        cell3.innerHTML = b3[count];
        cell4.innerHTML = b2[count];
        cell5.innerHTML = b1[count];
        cell6.innerHTML = b0[count];
        cell7.innerHTML = g3[count];
        cell8.innerHTML = g2[count];
        cell9.innerHTML = g1[count];
        cell10.innerHTML = g0[count];
        // trace1.x.push(inc_field_curr[val]);
        // trace1.y.push(inc_ind_emf[val]);
        // sliderValue--;
    }
    if (clickCounter==12) {
        document.getElementById('myimage01').src = '/static/images/switchon (1).png';
        document.getElementById('myimage02').src = '/static/images/switchon (1).png';
        document.getElementById('myimage03').src = '/static/images/switchoff (1).png';
        document.getElementById('myimage').src = '/static/images/switchon (1).png';
        document.getElementById('myimage4').src = '/static/images/push2.png';
        document.getElementById('myimage3').src = '/static/images/push2.png';
        document.getElementById('myimage2').src = '/static/images/push1.png';
        document.getElementById('myimage1').src = '/static/images/push2.png';
        document.getElementById('a4').src = '/static/images/off.png';
        document.getElementById('a3').src = '/static/images/on.png';
        document.getElementById('a2').src = '/static/images/on.png';
        document.getElementById('a1').src = '/static/images/on.png';
        const y = table1.insertRow(clickCounter);
        const cell1 = y.insertCell(0);
        cell1.setAttribute('style', 'text-align: center;');
        const cell2 = y.insertCell(1);
        cell2.setAttribute('style', 'text-align: center;');
        const cell3 = y.insertCell(2);
        cell3.setAttribute('style', 'text-align: center;');
        const cell4 = y.insertCell(3);
        cell4.setAttribute('style', 'text-align: center;');
        const cell5 = y.insertCell(4);
        cell5.setAttribute('style', 'text-align: center;');
        const cell6 = y.insertCell(5);
        cell6.setAttribute('style', 'text-align: center;');
        const cell7 = y.insertCell(6);
        cell7.setAttribute('style', 'text-align: center;');
        const cell8 = y.insertCell(7);
        cell8.setAttribute('style', 'text-align: center;');
        const cell9 = y.insertCell(8);
        cell9.setAttribute('style', 'text-align: center;');
        const cell10 = y.insertCell(9);
        cell10.setAttribute('style', 'text-align: center;');

        cell1.innerHTML = clickCounter;
        cell2.innerHTML = clickCounter-1;
        cell3.innerHTML = b3[count];
        cell4.innerHTML = b2[count];
        cell5.innerHTML = b1[count];
        cell6.innerHTML = b0[count];
        cell7.innerHTML = g3[count];
        cell8.innerHTML = g2[count];
        cell9.innerHTML = g1[count];
        cell10.innerHTML = g0[count];
        // trace1.x.push(inc_field_curr[val]);
        // trace1.y.push(inc_ind_emf[val]);
        // sliderValue--;
    }
    if (clickCounter==13) {
        document.getElementById('myimage01').src = '/static/images/switchoff (1).png';
        document.getElementById('myimage02').src = '/static/images/switchoff (1).png';
        document.getElementById('myimage03').src = '/static/images/switchon (1).png';
        document.getElementById('myimage').src = '/static/images/switchon (1).png';
        document.getElementById('myimage4').src = '/static/images/push1.png';
        document.getElementById('myimage3').src = '/static/images/push1.png';
        document.getElementById('myimage2').src = '/static/images/push2.png';
        document.getElementById('myimage1').src = '/static/images/push2.png';
        document.getElementById('a4').src = '/static/images/off.png';
        document.getElementById('a3').src = '/static/images/on.png';
        document.getElementById('a2').src = '/static/images/off.png';
        document.getElementById('a1').src = '/static/images/on.png';
        const y = table1.insertRow(clickCounter);
        const cell1 = y.insertCell(0);
        cell1.setAttribute('style', 'text-align: center;');
        const cell2 = y.insertCell(1);
        cell2.setAttribute('style', 'text-align: center;');
        const cell3 = y.insertCell(2);
        cell3.setAttribute('style', 'text-align: center;');
        const cell4 = y.insertCell(3);
        cell4.setAttribute('style', 'text-align: center;');
        const cell5 = y.insertCell(4);
        cell5.setAttribute('style', 'text-align: center;');
        const cell6 = y.insertCell(5);
        cell6.setAttribute('style', 'text-align: center;');
        const cell7 = y.insertCell(6);
        cell7.setAttribute('style', 'text-align: center;');
        const cell8 = y.insertCell(7);
        cell8.setAttribute('style', 'text-align: center;');
        const cell9 = y.insertCell(8);
        cell9.setAttribute('style', 'text-align: center;');
        const cell10 = y.insertCell(9);
        cell10.setAttribute('style', 'text-align: center;');

        cell1.innerHTML = clickCounter;
        cell2.innerHTML = clickCounter-1;
        cell3.innerHTML = b3[count];
        cell4.innerHTML = b2[count];
        cell5.innerHTML = b1[count];
        cell6.innerHTML = b0[count];
        cell7.innerHTML = g3[count];
        cell8.innerHTML = g2[count];
        cell9.innerHTML = g1[count];
        cell10.innerHTML = g0[count];
        // trace1.x.push(inc_field_curr[val]);
        // trace1.y.push(inc_ind_emf[val]);
        // sliderValue--;
    }
    if (clickCounter==14) {
        document.getElementById('myimage01').src = '/static/images/switchon (1).png';
        document.getElementById('myimage02').src = '/static/images/switchoff (1).png';
        document.getElementById('myimage03').src = '/static/images/switchon (1).png';
        document.getElementById('myimage').src = '/static/images/switchon (1).png';
        document.getElementById('myimage4').src = '/static/images/push2.png';
        document.getElementById('myimage3').src = '/static/images/push1.png';
        document.getElementById('myimage2').src = '/static/images/push2.png';
        document.getElementById('myimage1').src = '/static/images/push2.png';
        document.getElementById('a4').src = '/static/images/on.png';
        document.getElementById('a3').src = '/static/images/on.png';
        document.getElementById('a2').src = '/static/images/off.png';
        document.getElementById('a1').src = '/static/images/on.png';
        const y = table1.insertRow(clickCounter);
        const cell1 = y.insertCell(0);
        cell1.setAttribute('style', 'text-align: center;');
        const cell2 = y.insertCell(1);
        cell2.setAttribute('style', 'text-align: center;');
        const cell3 = y.insertCell(2);
        cell3.setAttribute('style', 'text-align: center;');
        const cell4 = y.insertCell(3);
        cell4.setAttribute('style', 'text-align: center;');
        const cell5 = y.insertCell(4);
        cell5.setAttribute('style', 'text-align: center;');
        const cell6 = y.insertCell(5);
        cell6.setAttribute('style', 'text-align: center;');
        const cell7 = y.insertCell(6);
        cell7.setAttribute('style', 'text-align: center;');
        const cell8 = y.insertCell(7);
        cell8.setAttribute('style', 'text-align: center;');
        const cell9 = y.insertCell(8);
        cell9.setAttribute('style', 'text-align: center;');
        const cell10 = y.insertCell(9);
        cell10.setAttribute('style', 'text-align: center;');

        cell1.innerHTML = clickCounter;
        cell2.innerHTML = clickCounter-1;
        cell3.innerHTML = b3[count];
        cell4.innerHTML = b2[count];
        cell5.innerHTML = b1[count];
        cell6.innerHTML = b0[count];
        cell7.innerHTML = g3[count];
        cell8.innerHTML = g2[count];
        cell9.innerHTML = g1[count];
        cell10.innerHTML = g0[count];
        // trace1.x.push(inc_field_curr[val]);
        // trace1.y.push(inc_ind_emf[val]);
        // sliderValue--;
    }
    if (clickCounter==15) {
        document.getElementById('myimage01').src = '/static/images/switchoff (1).png';
        document.getElementById('myimage02').src = '/static/images/switchon (1).png';
        document.getElementById('myimage03').src = '/static/images/switchon (1).png';
        document.getElementById('myimage').src = '/static/images/switchon (1).png';
        document.getElementById('myimage4').src = '/static/images/push1.png';
        document.getElementById('myimage3').src = '/static/images/push2.png';
        document.getElementById('myimage2').src = '/static/images/push2.png';
        document.getElementById('myimage1').src = '/static/images/push2.png';
        document.getElementById('a4').src = '/static/images/on.png';
        document.getElementById('a3').src = '/static/images/off.png';
        document.getElementById('a2').src = '/static/images/off.png';
        document.getElementById('a1').src = '/static/images/on.png';
        const y = table1.insertRow(clickCounter);
        const cell1 = y.insertCell(0);
        cell1.setAttribute('style', 'text-align: center;');
        const cell2 = y.insertCell(1);
        cell2.setAttribute('style', 'text-align: center;');
        const cell3 = y.insertCell(2);
        cell3.setAttribute('style', 'text-align: center;');
        const cell4 = y.insertCell(3);
        cell4.setAttribute('style', 'text-align: center;');
        const cell5 = y.insertCell(4);
        cell5.setAttribute('style', 'text-align: center;');
        const cell6 = y.insertCell(5);
        cell6.setAttribute('style', 'text-align: center;');
        const cell7 = y.insertCell(6);
        cell7.setAttribute('style', 'text-align: center;');
        const cell8 = y.insertCell(7);
        cell8.setAttribute('style', 'text-align: center;');
        const cell9 = y.insertCell(8);
        cell9.setAttribute('style', 'text-align: center;');
        const cell10 = y.insertCell(9);
        cell10.setAttribute('style', 'text-align: center;');

        cell1.innerHTML = clickCounter;
        cell2.innerHTML = clickCounter-1;
        cell3.innerHTML = b3[count];
        cell4.innerHTML = b2[count];
        cell5.innerHTML = b1[count];
        cell6.innerHTML = b0[count];
        cell7.innerHTML = g3[count];
        cell8.innerHTML = g2[count];
        cell9.innerHTML = g1[count];
        cell10.innerHTML = g0[count];
        // trace1.x.push(inc_field_curr[val]);
        // trace1.y.push(inc_ind_emf[val]);
        // sliderValue--;
    }
    if (clickCounter==16) {
        document.getElementById('myimage01').src = '/static/images/switchon (1).png';
        document.getElementById('myimage02').src = '/static/images/switchon (1).png';
        document.getElementById('myimage03').src = '/static/images/switchon (1).png';
        document.getElementById('myimage').src = '/static/images/switchon (1).png';
        document.getElementById('myimage4').src = '/static/images/push2.png';
        document.getElementById('myimage3').src = '/static/images/push2.png';
        document.getElementById('myimage2').src = '/static/images/push2.png';
        document.getElementById('myimage1').src = '/static/images/push2.png';
        document.getElementById('a4').src = '/static/images/off.png';
        document.getElementById('a3').src = '/static/images/off.png';
        document.getElementById('a2').src = '/static/images/off.png';
        document.getElementById('a1').src = '/static/images/on.png';
        const y = table1.insertRow(clickCounter);
        const cell1 = y.insertCell(0);
        cell1.setAttribute('style', 'text-align: center;');
        const cell2 = y.insertCell(1);
        cell2.setAttribute('style', 'text-align: center;');
        const cell3 = y.insertCell(2);
        cell3.setAttribute('style', 'text-align: center;');
        const cell4 = y.insertCell(3);
        cell4.setAttribute('style', 'text-align: center;');
        const cell5 = y.insertCell(4);
        cell5.setAttribute('style', 'text-align: center;');
        const cell6 = y.insertCell(5);
        cell6.setAttribute('style', 'text-align: center;');
        const cell7 = y.insertCell(6);
        cell7.setAttribute('style', 'text-align: center;');
        const cell8 = y.insertCell(7);
        cell8.setAttribute('style', 'text-align: center;');
        const cell9 = y.insertCell(8);
        cell9.setAttribute('style', 'text-align: center;');
        const cell10 = y.insertCell(9);
        cell10.setAttribute('style', 'text-align: center;');

        cell1.innerHTML = clickCounter;
        cell2.innerHTML = clickCounter-1;
        cell3.innerHTML = b3[count];
        cell4.innerHTML = b2[count];
        cell5.innerHTML = b1[count];
        cell6.innerHTML = b0[count];
        cell7.innerHTML = g3[count];
        cell8.innerHTML = g2[count];
        cell9.innerHTML = g1[count];
        cell10.innerHTML = g0[count];
        // trace1.x.push(inc_field_curr[val]);
        // trace1.y.push(inc_ind_emf[val]);
        // sliderValue--;
    }

    // if (val != 0 && !(val == 10 && tenthFirstCall)) {
    //     disableToggler();
    // }
    if(clickCounter>16)
                {
                    //cntr=0;
                    //button.innerHTML = "Add to Table: "+cntr;
                    document.getElementById('myimage01').src = '/static/images/switchoff (1).png';
                    document.getElementById('myimage02').src = '/static/images/switchoff (1).png';
                    document.getElementById('myimage03').src = '/static/images/switchoff (1).png';
                    document.getElementById('myimage').src = '/static/images/switchoff (1).png';
                    document.getElementById('myimage4').src = '/static/images/push1.png';
                    document.getElementById('myimage3').src = '/static/images/push1.png';
                    document.getElementById('myimage2').src = '/static/images/push1.png';
                    document.getElementById('myimage1').src = '/static/images/push1.png';
                    document.getElementById('a4').src = '/static/images/off.png';
                    document.getElementById('a3').src = '/static/images/off.png';
                    document.getElementById('a2').src = '/static/images/off.png';
                    document.getElementById('a1').src = '/static/images/off.png';
                    document.getElementById("add").disabled=true;
                }
    count++;
}

// function drawgraph() {
//     const data1 = [trace1];
//     const data2 = [trace2];

//     const layout1 = {
//         xaxis: {
//             title: {
//                 text: 'Field Current(A)',
//                 font:
//                 {
//                     family: 'Courier New, monoscope',
//                     size: 18,
//                     color: '#0000ff'
//                 }
//             },
//         },
//         yaxis: {
//             title: {
//                 text: 'Induced Emf(V)',
//                 font:
//                 {
//                     family: 'Courier New, monoscope',
//                     size: 18,
//                     color: '#0000ff'
//                 }
//             },
//         }
//     };

//     const layout2 = {
//         xaxis: {
//             title: {
//                 text: 'Field Current(A)',
//                 font:
//                 {
//                     family: 'Courier New, monoscope',
//                     size: 18,
//                     color: '#ff0000'
//                 }
//             },
//         },
//         yaxis: {
//             title: {
//                 text: 'Induced Emf(V)',
//                 font:
//                 {
//                     family: 'Courier New, monoscope',
//                     size: 18,
//                     color: '#ff0000'
//                 }
//             },
//         }
//     };

//     Plotly.newPlot('myDiv1', data1, layout1, { showSendToCloud: true });
//     Plotly.newPlot('myDiv2', data2, layout2, { showSendToCloud: true });

//     document.getElementById("graph").disabled = true;
// }