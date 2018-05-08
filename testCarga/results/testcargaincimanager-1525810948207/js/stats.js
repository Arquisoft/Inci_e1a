var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50",
        "ok": "49",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "454",
        "ok": "454",
        "ko": "473"
    },
    "maxResponseTime": {
        "total": "1613",
        "ok": "1613",
        "ko": "473"
    },
    "meanResponseTime": {
        "total": "599",
        "ok": "602",
        "ko": "473"
    },
    "standardDeviation": {
        "total": "208",
        "ok": "210",
        "ko": "0"
    },
    "percentiles1": {
        "total": "555",
        "ok": "556",
        "ko": "473"
    },
    "percentiles2": {
        "total": "614",
        "ok": "615",
        "ko": "473"
    },
    "percentiles3": {
        "total": "706",
        "ok": "707",
        "ko": "473"
    },
    "percentiles4": {
        "total": "1566",
        "ok": "1567",
        "ko": "473"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 47,
        "percentage": 94
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2,
        "percentage": 4
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 2
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.847",
        "ok": "0.831",
        "ko": "0.017"
    }
},
contents: {
"req_request-0-684d2": {
        type: "REQUEST",
        name: "request_0",
path: "request_0",
pathFormatted: "req_request-0-684d2",
stats: {
    "name": "request_0",
    "numberOfRequests": {
        "total": "50",
        "ok": "49",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "454",
        "ok": "454",
        "ko": "473"
    },
    "maxResponseTime": {
        "total": "1613",
        "ok": "1613",
        "ko": "473"
    },
    "meanResponseTime": {
        "total": "599",
        "ok": "602",
        "ko": "473"
    },
    "standardDeviation": {
        "total": "208",
        "ok": "210",
        "ko": "0"
    },
    "percentiles1": {
        "total": "555",
        "ok": "556",
        "ko": "473"
    },
    "percentiles2": {
        "total": "614",
        "ok": "615",
        "ko": "473"
    },
    "percentiles3": {
        "total": "706",
        "ok": "707",
        "ko": "473"
    },
    "percentiles4": {
        "total": "1566",
        "ok": "1567",
        "ko": "473"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 47,
        "percentage": 94
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2,
        "percentage": 4
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 2
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.847",
        "ok": "0.831",
        "ko": "0.017"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
