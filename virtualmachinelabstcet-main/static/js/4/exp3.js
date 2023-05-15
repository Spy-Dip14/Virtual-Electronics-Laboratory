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
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 2, stroke: "rgba(0,255,0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 15,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        endpoint4 = {
            anchor: [0.5, 0.5, -5, -1],
            connectorStyle: { strokeWidth: 2, stroke: "rgba(0,0,255)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 15,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        endpoint5 = {
            anchor: [0.5, 0.5, -5, -1],//"AutoDefault",//[0.5, 0.5, -5, -6.5],
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
            e4 = prepare4("ld4"),
            e5 = prepare1("ld5"),
            e6 = prepare2("ld6"),
            e7 = prepare3("ld7"),
            e8 = prepare2("ld8"),
            e9 = prepare1("ld9"),
            e10 = prepare1("ld10"),
            e11 = prepare3("ld11"),
            e12 = prepare1("ld12"),
            e13 = prepare4("ld13"),
            e14 = prepare2("ld14"),
            e15 = prepare3("ld15"),
            e16 = prepare3("ld16"),
            e17 = prepare2("ld17"),
            e18 = prepare4("ld18"),
            e19 = prepare3("ld19"),
            e20 = prepare1("ld20"),
            e21 = prepare2("ld21"),
            e22 = prepare3("ld22"),
            e23 = prepare4("ld23"),
            e24 = prepare2("ld24"),
            e25 = prepare3("ld25"),
            e26 = prepare2("ld26"),
            e27 = prepare1("ld27"),
            e28 = prepare2("ld28"),
            e29 = prepare4("ld29"),
            e30 = prepare2("ld30"),
            e31 = prepare3("ld31"),
            e32 = prepare4("ld32"),
            e33 = prepare1("ld33"),
            e34 = prepare2("ld34"),
            e35 = prepare3("ld35"),
            e36 = prepare2("ld36"),
            e37 = prepare1("ld37"),
            e38 = prepare1("ld38"),
            e39 = prepare3("ld39"),
            e40 = prepare1("ld40"),
            e41 = prepare4("ld41"),
            e42 = prepare2("ld42"),
            e43 = prepare3("ld43"),
            e44 = prepare3("ld44"),
            e45 = prepare2("ld45"),
            e46 = prepare4("ld46"),
            e47 = prepare3("ld47"),
            e48 = prepare1("ld48"),
            e49 = prepare2("ld49"),
            e50 = prepare2("ld50"),
            e51 = prepare2("ld51"),
            e52 = prepare2("ld52"),
            e53 = prepare2("ld53"),
            e54 = prepare2("ld54"),
            e55 = prepare2("ld55"),
            e56 = prepare2("ld56"),
            e57 = prepare2("ld57"),
            e58 = prepare2("ld58"),
            e59 = prepare1("ld59"),
            e60 = prepare3("ld60"),
            e61 = prepare3("ld61"),
            e62 = prepare4("ld62"),
            e63 = prepare1("ld63"),
            e64 = prepare2("ld64"),
            e65 = prepare3("ld65"),
            e66 = prepare2("ld66"),
            e67 = prepare1("ld67"),
            e68 = prepare1("ld68"),
            e69 = prepare3("ld69"),
            e70 = prepare1("ld70"),
            e71 = prepare4("ld71"),
            e72 = prepare2("ld72"),
            e73 = prepare3("ld73"),
            e74 = prepare3("ld74"),
            e75 = prepare2("ld75"),
            e76 = prepare4("ld76"),
            e77 = prepare3("ld77"),
            e78 = prepare1("ld78"),
            e79 = prepare2("ld79"),
            e80 = prepare3("ld80"),
            e81 = prepare2("ld81"),
            e82 = prepare2("ld82"),
            e83 = prepare4("ld83"),
            e84 = prepare2("ld84"),
            e85 = prepare1("ld85"),
            e86 = prepare4("ld86"),
            e87 = prepare3("ld87"),
            e88 = prepare2("ld88"),
            e89 = prepare3("ld89"),
            e90 = prepare4("ld90"),
            e91 = prepare1("ld91"),
            e92 = prepare2("ld92"),
            e93 = prepare3("ld93"),
            e94 = prepare2("ld94"),
            e95 = prepare1("ld95"),
            e96 = prepare1("ld96"),
            e97 = prepare3("ld97"),
            e98 = prepare1("ld98"),
            e99 = prepare4("ld99"),
            e100 = prepare2("ld100"),
            e101 = prepare3("ld101"),
            e102 = prepare3("ld102"),
            e103 = prepare2("ld103"),
            e104 = prepare4("ld104"),
            e105 = prepare3("ld105"),
            e106 = prepare1("ld106"),
            e107 = prepare2("ld107"),
            e108 = prepare3("ld108"),
            e109 = prepare4("ld109"),
            e110 = prepare2("ld110"),
            e111 = prepare1("ld111"),
            e112 = prepare2("ld112"),
            e113 = prepare4("ld113"),
            e114 = prepare2("ld114"),
            e115 = prepare3("ld115"),
            e116 = prepare2("ld116"),
            e117 = prepare2("ld117"),
            e118 = prepare1("ld118"),
            e119 = prepare1("ld119"),
            e120 = prepare3("ld120"),
            e121 = prepare1("ld121"),
            e122 = prepare4("ld122"),
            e123 = prepare2("ld123"),
            e124 = prepare3("ld124"),
            e125 = prepare3("ld125"),
            e126 = prepare2("ld126"),
            e127 = prepare4("ld127"),
            e128 = prepare3("ld128"),
            e129 = prepare1("ld129"),
            e130 = prepare2("ld130"),
            e131 = prepare3("ld131"),
            e132 = prepare4("ld132"),
            e133 = prepare2("ld133"),
            e134 = prepare1("ld134"),
            e135 = prepare2("ld135"),
            e136 = prepare4("ld136"),
            e137 = prepare2("ld137"),
            e138 = prepare3("ld138"),
            e139 = prepare2("ld139"),
            e140 = prepare3("ld140"),
            e141 = prepare1("ld141"),
            e142 = prepare4("ld142"),
            e143 = prepare2("ld143"),
            e144 = prepare3("ld144"),
            e145 = prepare3("ld145"),
            e146 = prepare2("ld146"),
            e147 = prepare4("ld147"),
            e148 = prepare3("ld148"),
            e149 = prepare1("ld149"),
            e150 = prepare2("ld150"),
            e151 = prepare3("ld151"),
            e152 = prepare4("ld152"),
            e153 = prepare2("ld153"),
            e154 = prepare1("ld154"),
            e155 = prepare2("ld155"),
            e156 = prepare4("ld156"),
            e157 = prepare2("ld157"),
            e158 = prepare4("ld158"),
            e159 = prepare3("ld159"),
            e160 = prepare1("ld160"),
            clearBtn = jsPlumb.getSelector("anim-clear"),
            addBtn = jsPlumb.getSelector("add");

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
//to be modified
    document.getElementById("check-button").addEventListener("click", function () {

        var correct_connections_121_106 = [
            {
                "source": "ld121",
                "target": "ld106"
            },

            {
                "source": "ld106",
                "target": "ld121"
            }
        ];
        var correct_connections_160_135 = [
            {
                "source": "ld160",
                "target": "ld135"
            },

            {
                "source": "ld135",
                "target": "ld160"
            }
        ];
        var correct_connections_120_107 = [
            {
                "source": "ld120",
                "target": "ld107"
            },

            {
                "source": "ld107",
                "target": "ld120"
            }
        ];
        var correct_connections_119_108 = [
            {
                "source": "ld119",
                "target": "ld108"
            },

            {
                "source": "ld108",
                "target": "ld119"
            }
        ];
        var correct_connections_118_109 = [
            {
                "source": "ld118",
                "target": "ld109"
            },

            {
                "source": "ld109",
                "target": "ld118"
            }
        ];
        var correct_connections_157_110 = [
            {
                "source": "ld157",
                "target": "ld110"
            },

            {
                "source": "ld110",
                "target": "ld157"
            }
        ];
        var correct_connections_156_111 = [
            {
                "source": "ld156",
                "target": "ld111"
            },

            {
                "source": "ld111",
                "target": "ld156"
            }
        ];
        var correct_connections_14_126 = [
            {
                "source": "ld14",
                "target": "ld126"
            },

            {
                "source": "ld126",
                "target": "ld14"
            }
        ];
        var correct_connections_13_127 = [
            {
                "source": "ld13",
                "target": "ld127"
            },

            {
                "source": "ld127",
                "target": "ld13"
            }
        ];
        var correct_connections_93 = [
            {
                "source": "ld51",
                "target": "ld93"
            },

            {
                "source": "ld124",
                "target": "ld93"
            },
            {
                "source": "ld94",
                "target": "ld93"
            },
            {
                "source": "ld95",
                "target": "ld93"
            },
            {
                "source": "ld96",
                "target": "ld93"
            },
            {
                "source": "ld97",
                "target": "ld93"
            },
            {
                "source": "ld98",
                "target": "ld93"
            },
            {
                "source": "ld99",
                "target": "ld93"
            },
            {
                "source": "ld66",
                "target": "ld93"
            },
            {
                "source": "ld65",
                "target": "ld93"
            }
        ];
        var correct_connections_112_105 = [
            {
                "source": "ld112",
                "target": "ld105"
            },

            {
                "source": "ld105",
                "target": "ld112"
            }
        ];
        var correct_connections_113_104 = [
            {
                "source": "ld113",
                "target": "ld104"
            },

            {
                "source": "ld104",
                "target": "ld113"
            }
        ];
        var correct_connections_114_103 = [
            {
                "source": "ld114",
                "target": "ld103"
            },

            {
                "source": "ld103",
                "target": "ld114"
            }
        ];
        var correct_connections_115_102 = [
            {
                "source": "ld115",
                "target": "ld102"
            },

            {
                "source": "ld102",
                "target": "ld115"
            }
        ];
        var correct_connections_116_101 = [
            {
                "source": "ld116",
                "target": "ld101"
            },

            {
                "source": "ld101",
                "target": "ld116"
            }
        ];
        var correct_connections_117_100 = [
            {
                "source": "ld117",
                "target": "ld100"
            },

            {
                "source": "ld100",
                "target": "ld117"
            }
        ];
        var correct_connections_158 = [
            {
                "source": "ld158",
                "target": "ld41"
            },

            {
                "source": "ld158",
                "target": "ld61"
            },
            {
                "source": "ld158",
                "target": "ld67"
            },
            {
                "source": "ld158",
                "target": "ld143"
            }
        ];
        var correct_connections_35_84 = [
            {
                "source": "ld35",
                "target": "ld84"
            },

            {
                "source": "ld84",
                "target": "ld35"
            }
        ];
        var correct_connections_1 = [
            {
                "source": "ld1",
                "target": "ld2"
            },

            {
                "source": "ld1",
                "target": "ld3"
            }
        ];
        var correct_connections_4_152 = [
            {
                "source": "ld4",
                "target": "ld152"
            },

            {
                "source": "ld152",
                "target": "ld4"
            }
        ];
        var correct_connections_17_76 = [
            {
                "source": "ld17",
                "target": "ld76"
            },

            {
                "source": "ld76",
                "target": "ld17"
            }
        ];
        var correct_connections_16_77 = [
            {
                "source": "ld16",
                "target": "ld77"
            },

            {
                "source": "ld77",
                "target": "ld16"
            }
        ];
        var correct_connections_78_83 = [
            {
                "source": "ld78",
                "target": "ld83"
            },

            {
                "source": "ld83",
                "target": "ld78"
            }
        ];
        var correct_connections_15_82 = [
            {
                "source": "ld15",
                "target": "ld82"
            },

            {
                "source": "ld82",
                "target": "ld15"
            }
        ];
        var correct_connections_18_79 = [
            {
                "source": "ld18",
                "target": "ld79"
            },

            {
                "source": "ld79",
                "target": "ld18"
            }
        ];
        var correct_connections_19_80 = [
            {
                "source": "ld19",
                "target": "ld80"
            },

            {
                "source": "ld80",
                "target": "ld19"
            }
        ];
        var correct_connections_20_81 = [
            {
                "source": "ld20",
                "target": "ld81"
            },

            {
                "source": "ld81",
                "target": "ld20"
            }
        ];
        var correct_connections_31_62 = [
            {
                "source": "ld31",
                "target": "ld62"
            },

            {
                "source": "ld62",
                "target": "ld31"
            }
        ];
        var correct_connections_32_63 = [
            {
                "source": "ld32",
                "target": "ld63"
            },

            {
                "source": "ld63",
                "target": "ld32"
            }
        ];
        var correct_connections_35_64 = [
            {
                "source": "ld35",
                "target": "ld64"
            },

            {
                "source": "ld64",
                "target": "ld35"
            }
        ];
        var correct_connections_70_122 = [
            {
                "source": "ld70",
                "target": "ld122"
            },

            {
                "source": "ld122",
                "target": "ld70"
            }
        ];
        var correct_connections_69_153 = [
            {
                "source": "ld69",
                "target": "ld153"
            },

            {
                "source": "ld153",
                "target": "ld69"
            }
        ];
        var correct_connections_88_159 = [
            {
                "source": "ld88",
                "target": "ld159"
            },

            {
                "source": "ld159",
                "target": "ld88"
            }
        ];
        var correct_connections_159_123 = [
            {
                "source": "ld159",
                "target": "ld123"
            },

            {
                "source": "ld123",
                "target": "ld159"
            }
        ];
        var correct_connections_38_52 = [
            {
                "source": "ld38",
                "target": "ld52"
            },

            {
                "source": "ld52",
                "target": "ld38"
            }
        ];
        var correct_connections_160 = [
            {
                "source": "ld43",
                "target": "ld160"
            },

            {
                "source": "ld46",
                "target": "ld160"
            },
            {
                "source": "ld47",
                "target": "ld160"
            },
            {
                "source": "ld50",
                "target": "ld160"
            },
            {
                "source": "ld53",
                "target": "ld160"
            },
            {
                "source": "ld56",
                "target": "ld160"
            },
            {
                "source": "ld57",
                "target": "ld160"
            },
            {
                "source": "ld60",
                "target": "ld160"
            },
            {
                "source": "ld22",
                "target": "ld160"
            },
            {
                "source": "ld23",
                "target": "ld160"
            },
            {
                "source": "ld24",
                "target": "ld160"
            },
            {
                "source": "ld25",
                "target": "ld160"
            },
            {
                "source": "ld26",
                "target": "ld160"
            },
            {
                "source": "ld27",
                "target": "ld160"
            },
            {
                "source": "ld28",
                "target": "ld160"
            },
            {
                "source": "ld29",
                "target": "ld160"
            }
        ];
        var correct_connections_13 = [
            {
                "source": "ld13",
                "target": "ld151"
            },

            {
                "source": "ld13",
                "target": "ld44"
            }
        ];
        var correct_connections_14 = [
            {
                "source": "ld14",
                "target": "ld150"
            },

            {
                "source": "ld14",
                "target": "ld45"
            }
        ];
        var correct_connections_15 = [
            {
                "source": "ld15",
                "target": "ld149"
            },

            {
                "source": "ld15",
                "target": "ld48"
            }
        ];
        var correct_connections_16 = [
            {
                "source": "ld16",
                "target": "ld148"
            },

            {
                "source": "ld16",
                "target": "ld49"
            }
        ];
        var correct_connections_17 = [
            {
                "source": "ld17",
                "target": "ld147"
            },

            {
                "source": "ld17",
                "target": "ld54"
            }
        ];
        var correct_connections_18 = [
            {
                "source": "ld18",
                "target": "ld146"
            },

            {
                "source": "ld18",
                "target": "ld55"
            }
        ];
        var correct_connections_19 = [
            {
                "source": "ld19",
                "target": "ld145"
            },

            {
                "source": "ld19",
                "target": "ld58"
            }
        ];
        var correct_connections_20 = [
            {
                "source": "ld20",
                "target": "ld144"
            },

            {
                "source": "ld20",
                "target": "ld59"
            }
        ];
        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "ld121",
                "target": "ld106"
            },

            {
                "source": "ld106",
                "target": "ld121"
            },

            {
                "source": "ld160",
                "target": "ld135"
            },

            {
                "source": "ld135",
                "target": "ld160"
            },
            {
                "source": "ld120",
                "target": "ld107"
            },

            {
                "source": "ld107",
                "target": "ld120"
            },
            {
                "source": "ld119",
                "target": "ld108"
            },

            {
                "source": "ld108",
                "target": "ld119"
            },
            {
                "source": "ld118",
                "target": "ld109"
            },
            {
                "source": "ld109",
                "target": "ld118"
            },
            {
                "source": "ld157",
                "target": "ld110"
            },

            {
                "source": "ld110",
                "target": "ld157"
            },
            {
                "source": "ld156",
                "target": "ld111"
            },
            {
                "source": "ld111",
                "target": "ld156"
            },
            {
                "source": "ld14",
                "target": "ld126"
            },
            {
                "source": "ld126",
                "target": "ld14"
            },
            {
                "source": "ld13",
                "target": "ld127"
            },
            {
                "source": "ld127",
                "target": "ld13"
            },
            {
                "source": "ld51",
                "target": "ld93"
            },
            {
                "source": "ld124",
                "target": "ld93"
            },
            {
                "source": "ld94",
                "target": "ld93"
            },
            {
                "source": "ld95",
                "target": "ld93"
            },
            {
                "source": "ld96",
                "target": "ld93"
            },

            {
                "source": "ld97",
                "target": "ld93"
            },

            {
                "source": "ld98",
                "target": "ld93"
            },
            {
                "source": "ld99",
                "target": "ld93"
            },
            {
                "source": "ld66",
                "target": "ld93"
            },
            {
                "source": "ld65",
                "target": "ld93"
            },
            {
                "source": "ld112",
                "target": "ld105"
            },
            {
                "source": "ld105",
                "target": "ld112"
            },
            {
                "source": "ld113",
                "target": "ld104"
            },
            {
                "source": "ld104",
                "target": "ld113"
            },
            {
                "source": "ld114",
                "target": "ld103"
            },
            {
                "source": "ld103",
                "target": "ld114"
            },
            {
                "source": "ld115",
                "target": "ld102"
            },
            {
                "source": "ld102",
                "target": "ld115"
            },
            {
                "source": "ld116",
                "target": "ld101"
            },

            {
                "source": "ld101",
                "target": "ld116"
            },
            {
                "source": "ld117",
                "target": "ld100"
            },

            {
                "source": "ld100",
                "target": "ld117"
            },
            {
                "source": "ld158",
                "target": "ld41"
            },

            {
                "source": "ld158",
                "target": "ld61"
            },
            {
                "source": "ld158",
                "target": "ld67"
            },
            {
                "source": "ld158",
                "target": "ld143"
            },
            {
                "source": "ld35",
                "target": "ld84"
            },

            {
                "source": "ld84",
                "target": "ld35"
            },
            {
                "source": "ld1",
                "target": "ld2"
            },

            {
                "source": "ld1",
                "target": "ld3"
            },
            {
                "source": "ld4",
                "target": "ld152"
            },

            {
                "source": "ld152",
                "target": "ld4"
            },
            {
                "source": "ld17",
                "target": "ld76"
            },

            {
                "source": "ld76",
                "target": "ld17"
            },
            {
                "source": "ld16",
                "target": "ld77"
            },

            {
                "source": "ld77",
                "target": "ld16"
            },
            {
                "source": "ld78",
                "target": "ld83"
            },

            {
                "source": "ld83",
                "target": "ld78"
            },
            {
                "source": "ld15",
                "target": "ld82"
            },

            {
                "source": "ld82",
                "target": "ld15"
            },
            {
                "source": "ld18",
                "target": "ld79"
            },

            {
                "source": "ld79",
                "target": "ld18"
            },
            {
                "source": "ld19",
                "target": "ld80"
            },

            {
                "source": "ld80",
                "target": "ld19"
            },
            {
                "source": "ld20",
                "target": "ld81"
            },

            {
                "source": "ld81",
                "target": "ld20"
            },
            {
                "source": "ld31",
                "target": "ld62"
            },

            {
                "source": "ld62",
                "target": "ld31"
            },
            {
                "source": "ld32",
                "target": "ld63"
            },

            {
                "source": "ld63",
                "target": "ld32"
            },
            {
                "source": "ld35",
                "target": "ld64"
            },

            {
                "source": "ld64",
                "target": "ld35"
            },
            {
                "source": "ld70",
                "target": "ld122"
            },

            {
                "source": "ld122",
                "target": "ld70"
            },
            {
                "source": "ld69",
                "target": "ld153"
            },

            {
                "source": "ld153",
                "target": "ld69"
            },
            {
                "source": "ld88",
                "target": "ld159"
            },

            {
                "source": "ld159",
                "target": "ld88"
            },
            {
                "source": "ld159",
                "target": "ld123"
            },

            {
                "source": "ld123",
                "target": "ld159"
            },
            {
                "source": "ld38",
                "target": "ld52"
            },

            {
                "source": "ld52",
                "target": "ld38"
            },
            {
                "source": "ld43",
                "target": "ld160"
            },

            {
                "source": "ld46",
                "target": "ld160"
            },
            {
                "source": "ld47",
                "target": "ld160"
            },
            {
                "source": "ld50",
                "target": "ld160"
            },
            {
                "source": "ld53",
                "target": "ld160"
            },
            {
                "source": "ld56",
                "target": "ld160"
            },
            {
                "source": "ld57",
                "target": "ld160"
            },
            {
                "source": "ld60",
                "target": "ld160"
            },
            {
                "source": "ld22",
                "target": "ld160"
            },
            {
                "source": "ld23",
                "target": "ld160"
            },
            {
                "source": "ld24",
                "target": "ld160"
            },
            {
                "source": "ld25",
                "target": "ld160"
            },
            {
                "source": "ld26",
                "target": "ld160"
            },
            {
                "source": "ld27",
                "target": "ld160"
            },
            {
                "source": "ld28",
                "target": "ld160"
            },
            {
                "source": "ld29",
                "target": "ld160"
            },
            {
                "source": "ld13",
                "target": "ld151"
            },

            {
                "source": "ld13",
                "target": "ld44"
            },
            {
                "source": "ld14",
                "target": "ld150"
            },

            {
                "source": "ld14",
                "target": "ld45"
            },
            {
                "source": "ld15",
                "target": "ld149"
            },

            {
                "source": "ld15",
                "target": "ld48"
            },
            {
                "source": "ld16",
                "target": "ld148"
            },

            {
                "source": "ld16",
                "target": "ld49"
            },
            {
                "source": "ld17",
                "target": "ld147"
            },

            {
                "source": "ld17",
                "target": "ld54"
            },
            {
                "source": "ld18",
                "target": "ld146"
            },

            {
                "source": "ld18",
                "target": "ld55"
            },
            {
                "source": "ld19",
                "target": "ld145"
            },

            {
                "source": "ld19",
                "target": "ld58"
            },
            {
                "source": "ld20",
                "target": "ld144"
            },

            {
                "source": "ld20",
                "target": "ld59"
            }
        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_121_106 = false;
        var is_connected_160_135 = false;
        var is_connected_120_107 = false;
        var is_connected_119_108 = false;
        var is_connected_118_109 = false;
        var is_connected_157_110 = false;
        var is_connected_156_111 = false;
        var is_connected_14_126 = false;
        var is_connected_13_127 = false;
        var is_connected_93 = false;
        var is_connected_112_105 = false;
        var is_connected_113_104 = false;
        var is_connected_114_103 = false;
        var is_connected_115_102 = false;
        var is_connected_116_101 = false;
        var is_connected_117_100 = false;
        var is_connected_158 = false;
        var is_connected_35_84 = false;
        var is_connected_1 = false;
        var is_connected_4_152 = false;
        var is_connected_17_76 = false;
        var is_connected_16_77 = false;
        var is_connected_78_83 = false;
        var is_connected_15_82 = false;
        var is_connected_18_79 = false;
        var is_connected_19_80 = false;
        var is_connected_20_81 = false;
        var is_connected_31_62 = false;
        var is_connected_32_63 = false;
        var is_connected_35_64 = false;
        var is_connected_70_122 = false;
        var is_connected_69_153 = false;
        var is_connected_88_159 = false;
        var is_connected_159_123 = false;
        var is_connected_38_52 = false;
        var is_connected_160 = false;
        var is_connected_13 = false;
        var is_connected_14 = false;
        var is_connected_15 = false;
        var is_connected_16 = false;
        var is_connected_17 = false;
        var is_connected_18 = false;
        var is_connected_19 = false;
        var is_connected_20 = false;
        var unallowed_connection_present = false;

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_121_106) {
                is_connected_121_106 = correct_connections_121_106.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_160_135) {
                is_connected_160_135 = correct_connections_160_135.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_120_107) {
                is_connected_120_107 = correct_connections_120_107.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_119_108) {
                is_connected_119_108 = correct_connections_119_108.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_118_109) {
                is_connected_118_109 = correct_connections_118_109.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_157_110) {
                is_connected_157_110 = correct_connections_157_110.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_156_111) {
                is_connected_156_111 = correct_connections_156_111.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_14_126) {
                is_connected_14_126 = correct_connections_14_126.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_13_127) {
                is_connected_13_127 = correct_connections_13_127.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_93) {
                is_connected_93 = correct_connections_93.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_112_105) {
                is_connected_112_105 = correct_connections_112_105.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_113_104) {
                is_connected_113_104 = correct_connections_113_104.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_114_103) {
                is_connected_114_103 = correct_connections_114_103.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_115_102) {
                is_connected_115_102 = correct_connections_115_102.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_116_101) {
                is_connected_116_101 = correct_connections_116_101.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_117_100) {
                is_connected_117_100 = correct_connections_117_100.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_158) {
                is_connected_158 = correct_connections_158.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_35_84) {
                is_connected_35_84 = correct_connections_35_84.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_1) {
                is_connected_1 = correct_connections_1.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_4_152) {
                is_connected_4_152 = correct_connections_4_152.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_17_76) {
                is_connected_17_76 = correct_connections_17_76.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_16_77) {
                is_connected_16_77 = correct_connections_16_77.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_78_83) {
                is_connected_78_83 = correct_connections_78_83.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_15_82) {
                is_connected_15_82 = correct_connections_15_82.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_18_79) {
                is_connected_18_79 = correct_connections_18_79.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_19_80) {
                is_connected_19_80 = correct_connections_19_80.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_20_81) {
                is_connected_20_81 = correct_connections_20_81.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_31_62) {
                is_connected_31_62 = correct_connections_31_62.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_32_63) {
                is_connected_32_63 = correct_connections_32_63.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_35_64) {
                is_connected_35_64 = correct_connections_35_64.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_70_122) {
                is_connected_70_122 = correct_connections_70_122.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_69_153) {
                is_connected_69_153 = correct_connections_69_153.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_88_159) {
                is_connected_88_159 = correct_connections_88_159.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_159_123) {
                is_connected_159_123 = correct_connections_159_123.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_38_52) {
                is_connected_38_52 = correct_connections_38_52.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_160) {
                is_connected_160 = correct_connections_160.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_13) {
                is_connected_13 = correct_connections_13.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_14) {
                is_connected_14 = correct_connections_14.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_15) {
                is_connected_15 = correct_connections_15.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_16) {
                is_connected_16 = correct_connections_16.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_17) {
                is_connected_17 = correct_connections_17.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_18) {
                is_connected_18 = correct_connections_18.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_19) {
                is_connected_19 = correct_connections_19.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_20) {
                is_connected_20 = correct_connections_20.find(function (conn) {
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
        if (is_connected_121_106 && is_connected_160_135 && is_connected_120_107 && is_connected_119_108 && is_connected_118_109 && is_connected_157_110 && is_connected_156_111 && is_connected_14_126 && is_connected_13_127 && is_connected_93 && is_connected_112_105 && is_connected_113_104 && is_connected_114_103 && is_connected_115_102 && is_connected_116_101 && is_connected_117_100 && is_connected_158 && is_connected_35_84 && is_connected_1 && is_connected_4_152 && is_connected_17_76 && is_connected_16_77 && is_connected_78_83 && is_connected_15_82 && is_connected_18_79 && is_connected_19_80 && is_connected_20_81 && is_connected_31_62 && is_connected_32_63 && is_connected_35_64 && is_connected_70_122 && is_connected_69_153 && is_connected_88_159 && is_connected_159_123 && is_connected_38_52 && is_connected_160 && is_connected_13 && is_connected_14 && is_connected_15 && is_connected_16 && is_connected_17 && is_connected_18 && is_connected_19 && is_connected_20 && !unallowed_connection_present) {
            //if (is_connected_13_15 && !unallowed_connection_present) {
            alert("Alert ! Correct connection proceed to take reading.");
            document.getElementById("check-button").disabled = true;
            document.getElementById("connection-table").innerHTML = "";
            rightconnection = true;
            disable_all();
            setTimeout(function () {
                alert("Now turn on the power supply and wait for the reading to be taken by clicking 'add to table' button");
            }, 1000);
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
                Connector: ["Bezier", { curviness: +90 }],
                Container: "canvas"
            });

        // suspend drawing and initialise.
        instance.batch(function () {
            var e1 = prepare1("ld1"),
                e2 = prepare2("ld2"),
                e3 = prepare3("ld3"),
                e4 = prepare4("ld4"),
                e5 = prepare1("ld5"),
                e6 = prepare2("ld6"),
                e7 = prepare3("ld7"),
                e8 = prepare2("ld8"),
                e9 = prepare1("ld9"),
                e10 = prepare1("ld10"),
                e11 = prepare3("ld11"),
                e12 = prepare1("ld12"),
                e13 = prepare4("ld13"),
                e14 = prepare2("ld14"),
                e15 = prepare3("ld15"),
                e16 = prepare3("ld16"),
                e17 = prepare2("ld17"),
                e18 = prepare4("ld18"),
                e19 = prepare3("ld19"),
                e20 = prepare1("ld20"),
                e21 = prepare2("ld21"),
                e22 = prepare3("ld22"),
                e23 = prepare4("ld23"),
                e24 = prepare2("ld24"),
                e25 = prepare3("ld25"),
                e26 = prepare2("ld26"),
                e27 = prepare1("ld27"),
                e28 = prepare2("ld28"),
                e29 = prepare4("ld29"),
                e30 = prepare2("ld30"),
                e31 = prepare3("ld31"),
                e32 = prepare4("ld32"),
                e33 = prepare1("ld33"),
                e34 = prepare2("ld34"),
                e35 = prepare3("ld35"),
                e36 = prepare2("ld36"),
                e37 = prepare1("ld37"),
                e38 = prepare1("ld38"),
                e39 = prepare3("ld39"),
                e40 = prepare1("ld40"),
                e41 = prepare4("ld41"),
                e42 = prepare2("ld42"),
                e43 = prepare3("ld43"),
                e44 = prepare3("ld44"),
                e45 = prepare2("ld45"),
                e46 = prepare4("ld46"),
                e47 = prepare3("ld47"),
                e48 = prepare1("ld48"),
                e49 = prepare2("ld49"),
                e50 = prepare2("ld50"),
                e51 = prepare2("ld51"),
                e52 = prepare2("ld52"),
                e53 = prepare2("ld53"),
                e54 = prepare2("ld54"),
                e55 = prepare2("ld55"),
                e56 = prepare2("ld56"),
                e57 = prepare2("ld57"),
                e58 = prepare2("ld58"),
                e59 = prepare1("ld59"),
                e60 = prepare3("ld60"),
                e61 = prepare3("ld61"),
                e62 = prepare4("ld62"),
                e63 = prepare1("ld63"),
                e64 = prepare2("ld64"),
                e65 = prepare3("ld65"),
                e66 = prepare2("ld66"),
                e67 = prepare1("ld67"),
                e68 = prepare1("ld68"),
                e69 = prepare3("ld69"),
                e70 = prepare1("ld70"),
                e71 = prepare4("ld71"),
                e72 = prepare2("ld72"),
                e73 = prepare3("ld73"),
                e74 = prepare3("ld74"),
                e75 = prepare2("ld75"),
                e76 = prepare4("ld76"),
                e77 = prepare3("ld77"),
                e78 = prepare1("ld78"),
                e79 = prepare2("ld79"),
                e80 = prepare3("ld80"),
                e81 = prepare2("ld81"),
                e82 = prepare2("ld82"),
                e83 = prepare4("ld83"),
                e84 = prepare2("ld84"),
                e85 = prepare1("ld85"),
                e86 = prepare4("ld86"),
                e87 = prepare3("ld87"),
                e88 = prepare2("ld88"),
                e89 = prepare3("ld89"),
                e90 = prepare4("ld90"),
                e91 = prepare1("ld91"),
                e92 = prepare2("ld92"),
                e93 = prepare3("ld93"),
                e94 = prepare2("ld94"),
                e95 = prepare1("ld95"),
                e96 = prepare1("ld96"),
                e97 = prepare3("ld97"),
                e98 = prepare1("ld98"),
                e99 = prepare4("ld99"),
                e100 = prepare2("ld100"),
                e101 = prepare3("ld101"),
                e102 = prepare3("ld102"),
                e103 = prepare2("ld103"),
                e104 = prepare4("ld104"),
                e105 = prepare3("ld105"),
                e106 = prepare1("ld106"),
                e107 = prepare2("ld107"),
                e108 = prepare3("ld108"),
                e109 = prepare4("ld109"),
                e110 = prepare2("ld110"),
                e111 = prepare1("ld111"),
                e112 = prepare2("ld112"),
                e113 = prepare4("ld113"),
                e114 = prepare2("ld114"),
                e115 = prepare3("ld115"),
                e116 = prepare2("ld116"),
                e117 = prepare2("ld117"),
                e118 = prepare1("ld118"),
                e119 = prepare1("ld119"),
                e120 = prepare3("ld120"),
                e121 = prepare1("ld121"),
                e122 = prepare4("ld122"),
                e123 = prepare2("ld123"),
                e124 = prepare3("ld124"),
                e125 = prepare3("ld125"),
                e126 = prepare2("ld126"),
                e127 = prepare4("ld127"),
                e128 = prepare3("ld128"),
                e129 = prepare1("ld129"),
                e130 = prepare2("ld130"),
                e131 = prepare3("ld131"),
                e132 = prepare4("ld132"),
                e133 = prepare2("ld133"),
                e134 = prepare1("ld134"),
                e135 = prepare2("ld135"),
                e136 = prepare4("ld136"),
                e137 = prepare2("ld137"),
                e138 = prepare3("ld138"),
                e139 = prepare2("ld139"),
                e140 = prepare3("ld140"),
                e141 = prepare1("ld141"),
                e142 = prepare4("ld142"),
                e143 = prepare2("ld143"),
                e144 = prepare3("ld144"),
                e145 = prepare3("ld145"),
                e146 = prepare2("ld146"),
                e147 = prepare4("ld147"),
                e148 = prepare3("ld148"),
                e149 = prepare1("ld149"),
                e150 = prepare2("ld150"),
                e151 = prepare3("ld151"),
                e152 = prepare4("ld152"),
                e153 = prepare2("ld153"),
                e154 = prepare1("ld154"),
                e155 = prepare2("ld155"),
                e156 = prepare4("ld156"),
                e157 = prepare2("ld157"),
                e158 = prepare2("ld158"),
                e159 = prepare3("ld159"),
                e160 = prepare1("ld160"),
                clearBtn = jsPlumb.getSelector("anim-clear"),
                addBtn = jsPlumb.getSelector("add");
        });
    });
}
//m
var mcboffstate = true;
var ledoffstate = true;
// var rangeMeter1 = document.getElementById('range1');
// var rangeMeter2 = document.getElementById('range2');


// var rangeShow1 = document.getElementById("show01");
// var rangeShow2 = document.getElementById("show02");

// var meterShow1 = document.getElementById("show1");
// var meterShow2 = document.getElementById("show2");
// var meterShow3 = document.getElementById("show3");
// var meterShow4 = document.getElementById("show4");
// var meterShow5 = document.getElementById("show5");

// var rangeClock1 = document.getElementById('meter1');
// var rangeClock2 = document.getElementById('meter2');
// var rangeClock3 = document.getElementById('meter3');
// var rangeClock4 = document.getElementById('meter4');
// var c=document.getElementById('code');
// c.disabled=false;
function viewCode(){
    var x = document.getElementById('alc');
    if(x.style.display=='none'){
        x.style.display='block';
        //c.disabled=true;
        document.getElementById("c").disabled = true;
    }
    else{
        //x.style.display='none';
        //c.disabled=true;
       return; 
    }
}
var table1 = document.getElementById('table1');
var table2 = document.getElementById('table2');


// const field_current_frf = 0.25;
// const armature_current_frf = [0.26, 0.26, 0.27, 0.27, 0.27, 0.28];
// const armature_voltage_frf = [80, 100, 120, 140, 160, 180];
// const voltage_across_rc = [148, 117, 98, 78, 56, 33];
// const speed_frf = [696, 880, 1060, 1230, 1425, 1615];

// const armature_current_arf = 0.27;
// const armature_voltage_arf = 180;
// const field_current_arf = [0.25, 0.23, 0.22, 0.21, 0.2, 0.19];
// const speed_arf = [1615, 1635, 1670, 1710, 1740, 1760];
var IO_BSR = [1];
var m = [0];
var pa = [0];
var PA = [0];
var PCU = [1];
var mb = [0];
var PB = [1];
var PCL = [1];
var s = ["Data bus➡Port A(Write)","Port B➡Data bus(Read)","Port C➡Data bus(Read)"];
var a1 = [0,0,1];
var a0 = [0,1,0];
var rd = [1,0,0];
var wr = [0,1,1];
var cs = [0,0,0];


function mcbonoff() {
    if (rightconnection == true) {

        if (mcboffstate == true) {

            mcboffstate = false;
            document.getElementById('myimage').src = '/static/images/mcbon.png';
            document.getElementById('myimage1').src = '/static/images/push2.png';
            document.getElementById('myimage2').src = '/static/images/push2.png';
            document.getElementById('myimage3').src = '/static/images/push2.png';

            //range1.disabled = false;
            var c=document.getElementById('code');
            c.disabled=false;
            document.getElementById("add1").disabled = false;
            document.getElementById("add2").disabled = false;
            document.getElementById("check-button").disabled = true;
            //rangeChange1();
            viewCode();
        }
        else {
            return;
        }
    }
    else {
        alert("Alert ! Please complete the circuit or remove wrong connections");
    }
}

// rangeMeter1.addEventListener('input', rangeChange1);
// function rangeChange1() {
//     const val = +rangeMeter1.value;
//     rangeShow1.value = val;

//     meterShow1.value = voltage_across_rc[5 - val];
//     rangeClock1.style.transform = 'rotate(' + (-62 + (+meterShow1.value / 3)) + 'deg)';
//     meterShow2.value = field_current_frf;
//     rangeClock2.style.transform = 'rotate(' + (-62 + (+meterShow2.value * 100)) + 'deg)';
//     meterShow3.value = armature_voltage_frf[5 - val];
//     rangeClock3.style.transform = 'rotate(' + (-62 + (+meterShow3.value / 3)) + 'deg)';
//     meterShow4.value = armature_current_frf[5 - val];
//     rangeClock4.style.transform = 'rotate(' + (-82 + (+meterShow4.value * 100)) + 'deg)';

//     meterShow5.value = speed_frf[5 - val];
//     document.getElementById('cirmover').style.animation = `rotation ${(1800 - +meterShow5.value) / 500}s infinite linear`;
//     if (val == counter_frf) {
//         range1.disabled = true;
//         add1.disabled = false;
//     }
// }

// rangeMeter2.addEventListener('input', rangeChange2);
// function rangeChange2() {
//     const val = +rangeMeter2.value;
//     rangeShow2.value = val;

//     meterShow2.value = field_current_arf[val];
//     rangeClock2.style.transform = 'rotate(' + (-62 + (+meterShow2.value * 100)) + 'deg)';
//     meterShow3.value = armature_voltage_arf;
//     rangeClock3.style.transform = 'rotate(' + (-62 + (+meterShow3.value / 3)) + 'deg)';
//     meterShow4.value = armature_current_arf;
//     rangeClock4.style.transform = 'rotate(' + (-82 + (+meterShow4.value * 100)) + 'deg)';


//     meterShow5.value = speed_arf[val];
//     document.getElementById('cirmover').style.animation = `rotation ${(1800 - +meterShow5.value) / 500}s infinite linear`;
//     if (val == counter_arf) {
//         range2.disabled = true;
//         add2.disabled = false;
//     }
// }

// var counter_frf = 5;
// var counter_arf = 1;
var count = 0;
var count1 = 0;
var c = 1;
var d = 1;
//document.getElementById("add1").disabled = false;
function addToTable1() {
    const row = table1.insertRow(c++);
    const cell1 = row.insertCell(0);
    cell1.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const cell2 = row.insertCell(1);
    cell2.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const cell3 = row.insertCell(2);
    cell3.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const cell4 = row.insertCell(3);
    cell4.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const cell5 = row.insertCell(4);
    cell5.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const cell6 = row.insertCell(5);
    cell6.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const cell7 = row.insertCell(6);
    cell7.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const cell8 = row.insertCell(7);
    cell8.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');


    cell1.innerHTML = IO_BSR[count];
    cell2.innerHTML = m[count];
    cell3.innerHTML = pa[count];
    cell4.innerHTML = PA[count];
    cell5.innerHTML = PCU[count];
    cell6.innerHTML = mb[count];
    cell7.innerHTML = PB[count];
    cell8.innerHTML = PCL[count];


    while(count1<3){
    const row1 = document.getElementById("table1.1").insertRow(d++);
    const cella = row1.insertCell(0);
    cell1.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const cellb = row1.insertCell(1);
    cell2.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const cellc = row1.insertCell(2);
    cell3.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const celld = row1.insertCell(3);
    cell4.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const celle = row1.insertCell(4);
    cell5.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const cellf = row1.insertCell(5);
    cell6.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');


    cella.innerHTML = s[count1];
    cellb.innerHTML = a1[count1];
    cellc.innerHTML = a0[count1];
    celld.innerHTML = rd[count1];
    celle.innerHTML = wr[count1];
    cellf.innerHTML = cs[count1];

    count1++;}


    

    // trace1.x.push(cell4.innerHTML);
    // trace1.y.push(cell7.innerHTML);

    //range1.disabled = false;
    document.getElementById("add1").disabled = true;
    //counter_frf--;
    // if (counter_frf == -1) {
    //     range1.disabled = true;
    //     setTimeout(function () {
    //         alert("Now keeping the armature rheostat to its zero resistance position, vary the field rheostat.");
    //     }, 1000);
    //     range2.disabled = false;
    // }
}

var cntr = 0;
var x = 0;
var pa5 = [0,0,0,0,0,1];
var pa4 = [0,0,0,0,1,0];
var pa3 = [0,0,0,1,0,0];
var pa2 = [0,0,1,0,0,0];
var pa1 = [0,1,0,0,0,0];
var pa0 = [1,0,0,0,0,0];
var led = [1,2,3,4,5,6];
var ledoffstate = true;
//document.getElementById("add2").disabled = false;
var button = document.getElementById("add2");
button.onclick=
function () {
    ledoffstate = false;
    cntr+=1;
    button.innerHTML = "Add to Table: "+cntr;
    //while(cntr<=6){
        //cntr++;
    if(cntr==1){
    document.getElementById('a1').src = '/static/images/on.png';
    document.getElementById('a2').src = '/static/images/off.png';
    document.getElementById('a3').src = '/static/images/off.png';
    document.getElementById('a4').src = '/static/images/off.png';
    document.getElementById('a5').src = '/static/images/off.png';
    document.getElementById('a6').src = '/static/images/off.png';
    const row = table2.insertRow(cntr);
    const cell1 = row.insertCell(0);
    cell1.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const cell2 = row.insertCell(1);
    cell2.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const cell3 = row.insertCell(2);
    cell3.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const cell4 = row.insertCell(3);
    cell4.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const cell5 = row.insertCell(4);
    cell5.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const cell6 = row.insertCell(5);
    cell6.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const cell7 = row.insertCell(6);
    cell7.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const cell8 = row.insertCell(7);
    cell8.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');



    cell1.innerHTML = cntr;
    cell2.innerHTML = pa5[x];
    cell3.innerHTML = pa4[x];
    cell4.innerHTML = pa3[x];
    cell5.innerHTML = pa2[x];
    cell6.innerHTML = pa1[x];
    cell7.innerHTML = pa0[x];
    cell8.innerHTML = led[x];}

    if(cntr==2){
        document.getElementById('a1').src = '/static/images/off.png';
        document.getElementById('a2').src = '/static/images/on.png';
        document.getElementById('a3').src = '/static/images/off.png';
        document.getElementById('a4').src = '/static/images/off.png';
        document.getElementById('a5').src = '/static/images/off.png';
        document.getElementById('a6').src = '/static/images/off.png';
        const row = table2.insertRow(cntr);
        const cell1 = row.insertCell(0);
        cell1.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
        const cell2 = row.insertCell(1);
        cell2.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
        const cell3 = row.insertCell(2);
        cell3.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
        const cell4 = row.insertCell(3);
        cell4.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
        const cell5 = row.insertCell(4);
        cell5.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
        const cell6 = row.insertCell(5);
        cell6.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
        const cell7 = row.insertCell(6);
        cell7.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
        const cell8 = row.insertCell(7);
        cell8.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    
    
    
        cell1.innerHTML = cntr;
        cell2.innerHTML = pa5[x];
        cell3.innerHTML = pa4[x];
        cell4.innerHTML = pa3[x];
        cell5.innerHTML = pa2[x];
        cell6.innerHTML = pa1[x];
        cell7.innerHTML = pa0[x];
        cell8.innerHTML = led[x];}
        if(cntr==3){
            document.getElementById('a1').src = '/static/images/off.png';
            document.getElementById('a2').src = '/static/images/off.png';
            document.getElementById('a3').src = '/static/images/on.png';
            document.getElementById('a4').src = '/static/images/off.png';
            document.getElementById('a5').src = '/static/images/off.png';
            document.getElementById('a6').src = '/static/images/off.png';
            const row = table2.insertRow(cntr);
            const cell1 = row.insertCell(0);
            cell1.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
            const cell2 = row.insertCell(1);
            cell2.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
            const cell3 = row.insertCell(2);
            cell3.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
            const cell4 = row.insertCell(3);
            cell4.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
            const cell5 = row.insertCell(4);
            cell5.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
            const cell6 = row.insertCell(5);
            cell6.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
            const cell7 = row.insertCell(6);
            cell7.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
            const cell8 = row.insertCell(7);
            cell8.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
        
        
        
            cell1.innerHTML = cntr;
            cell2.innerHTML = pa5[x];
            cell3.innerHTML = pa4[x];
            cell4.innerHTML = pa3[x];
            cell5.innerHTML = pa2[x];
            cell6.innerHTML = pa1[x];
            cell7.innerHTML = pa0[x];
            cell8.innerHTML = led[x];}
            if(cntr==4){
                document.getElementById('a1').src = '/static/images/off.png';
                document.getElementById('a2').src = '/static/images/off.png';
                document.getElementById('a3').src = '/static/images/off.png';
                document.getElementById('a4').src = '/static/images/on.png';
                document.getElementById('a5').src = '/static/images/off.png';
                document.getElementById('a6').src = '/static/images/off.png';
                const row = table2.insertRow(cntr);
                const cell1 = row.insertCell(0);
                cell1.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
                const cell2 = row.insertCell(1);
                cell2.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
                const cell3 = row.insertCell(2);
                cell3.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
                const cell4 = row.insertCell(3);
                cell4.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
                const cell5 = row.insertCell(4);
                cell5.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
                const cell6 = row.insertCell(5);
                cell6.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
                const cell7 = row.insertCell(6);
                cell7.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
                const cell8 = row.insertCell(7);
                cell8.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
            
            
            
                cell1.innerHTML = cntr;
                cell2.innerHTML = pa5[x];
                cell3.innerHTML = pa4[x];
                cell4.innerHTML = pa3[x];
                cell5.innerHTML = pa2[x];
                cell6.innerHTML = pa1[x];
                cell7.innerHTML = pa0[x];
                cell8.innerHTML = led[x];}

                if(cntr==5){
                    document.getElementById('a1').src = '/static/images/off.png';
                    document.getElementById('a2').src = '/static/images/off.png';
                    document.getElementById('a3').src = '/static/images/off.png';
                    document.getElementById('a4').src = '/static/images/off.png';
                    document.getElementById('a5').src = '/static/images/on.png';
                    document.getElementById('a6').src = '/static/images/off.png';
                    const row = table2.insertRow(cntr);
                    const cell1 = row.insertCell(0);
                    cell1.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
                    const cell2 = row.insertCell(1);
                    cell2.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
                    const cell3 = row.insertCell(2);
                    cell3.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
                    const cell4 = row.insertCell(3);
                    cell4.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
                    const cell5 = row.insertCell(4);
                    cell5.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
                    const cell6 = row.insertCell(5);
                    cell6.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
                    const cell7 = row.insertCell(6);
                    cell7.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
                    const cell8 = row.insertCell(7);
                    cell8.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
                
                
                
                    cell1.innerHTML = cntr;
                    cell2.innerHTML = pa5[x];
                    cell3.innerHTML = pa4[x];
                    cell4.innerHTML = pa3[x];
                    cell5.innerHTML = pa2[x];
                    cell6.innerHTML = pa1[x];
                    cell7.innerHTML = pa0[x];
                    cell8.innerHTML = led[x];}

                    if(cntr==6){
                        document.getElementById('a1').src = '/static/images/off.png';
                        document.getElementById('a2').src = '/static/images/off.png';
                        document.getElementById('a3').src = '/static/images/off.png';
                        document.getElementById('a4').src = '/static/images/off.png';
                        document.getElementById('a5').src = '/static/images/off.png';
                        document.getElementById('a6').src = '/static/images/on.png';
                        const row = table2.insertRow(cntr);
                        const cell1 = row.insertCell(0);
                        cell1.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
                        const cell2 = row.insertCell(1);
                        cell2.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
                        const cell3 = row.insertCell(2);
                        cell3.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
                        const cell4 = row.insertCell(3);
                        cell4.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
                        const cell5 = row.insertCell(4);
                        cell5.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
                        const cell6 = row.insertCell(5);
                        cell6.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
                        const cell7 = row.insertCell(6);
                        cell7.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
                        const cell8 = row.insertCell(7);
                        cell8.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
                    
                    
                    
                        cell1.innerHTML = cntr;
                        cell2.innerHTML = pa5[x];
                        cell3.innerHTML = pa4[x];
                        cell4.innerHTML = pa3[x];
                        cell5.innerHTML = pa2[x];
                        cell6.innerHTML = pa1[x];
                        cell7.innerHTML = pa0[x];
                        cell8.innerHTML = led[x];}

                if(cntr>6)
                {
                    cntr=0;
                    button.innerHTML = "Add to Table: "+cntr;
                    document.getElementById("add2").disabled=true;
                }
                // else{
                //     if(cntr>6 && cntr!=0){
                //     document.getElementById('a1').src = '/static/images/off.png';
                //     document.getElementById('a2').src = '/static/images/off.png';
                //     document.getElementById('a3').src = '/static/images/off.png';
                //     document.getElementById('a4').src = '/static/images/off.png';
                //     document.getElementById('a5').src = '/static/images/off.png';
                //     document.getElementById('a6').src = '/static/images/off.png';
                //     alert("Only 6 Possible Combinations are allowed!");}
                // }
                x++;
                
    }
    // trace2.x.push(cell4.innerHTML);
    // trace2.y.push(cell5.innerHTML);

    // range2.disabled = false;
    // add2.disabled = true;
    // counter_arf++;
    // if (counter_arf == 6) {
    //     range2.disabled = true;
    //     document.getElementById("graph").disabled = false;
    // }
//}

// var trace1 = {
//     x: [],
//     y: [],
//     z: [],
//     type: 'scatter'
// };

// var trace2 = {
//     x: [],
//     y: [],
//     z: [],
//     type: 'scatter'
// }
// function drawgraph() {
//     var data = [trace1];
//     var layout = {
//         xaxis: {
//             title: {
//                 text: 'Load Current',
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
//                 text: 'Terminal Voltage',
//                 font:
//                 {
//                     family: 'Courier New, monoscope',
//                     size: 18,
//                     color: '#ff0000'
//                 }
//             },
//         }
//     };
//     Plotly.newPlot('myDiv1', data, layout, { showSendToCloud: true });

//     var data2 = [trace2];
//     var layout2 = {
//         xaxis: {
//             title: {
//                 text: 'Load Current',
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
//                 text: 'Terminal Current',
//                 font:
//                 {
//                     family: 'Courier New, monoscope',
//                     size: 18,
//                     color: '#0000ff'
//                 }
//             },
//         }
//     };
//     Plotly.newPlot('myDiv2', data2, layout2, { showSendToCloud: true });
//     document.getElementById("graph").disabled = true;
// }