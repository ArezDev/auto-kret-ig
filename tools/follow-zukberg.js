const me = require("CurrentUserInitialData").USER_ID;
const payloads = new URLSearchParams({
    qpl_active_flow_ids : "521482763",
    fb_api_caller_class : "RelayModern",
    fb_api_req_friendly_name : "CometUserFollowMutation",
    variables : JSON.stringify({
    "input": {
        "attribution_id_v2": "ProfileCometTimelineListViewRoot.react,comet.profile.timeline.list,unexpected,1752686114809,643048,250100865708545,,;SearchCometGlobalSearchDefaultTabRoot.react,comet.search_results.default_tab,tap_search_bar,1752686113267,319821,391724414624676,,",
        "is_tracking_encrypted": false,
        "subscribe_location": "PROFILE",
        "subscribee_id": "4",
        "tracking": null,
        "actor_id": me,
        "client_mutation_id": "5"
        },
        "scale": 1
    }),
    server_timestamps : "true",
    doc_id : "24182169001407321",
    fb_api_analytics_tags : ["qpl_active_flow_ids=521482763"],
    ...require('getAsyncParams')('POST')
});

fetch("/api/graphql/", {
  "headers": {
    "content-type": "application/x-www-form-urlencoded"
  },
  "body": payloads,
  "method": "POST"
}).then(async (response) => {
    if (typeof response === "object" && response.ok) {
        const data = await response.json();
        if (data?.errors) {
            console.error("Error:", data.errors);
        } else {
            console.log("Followed successfully:", data.data.actor_subscribe.subscribee.subscribe_status);
        }
    } else {
        console.error("Network error or invalid response:", response);
    }
}).catch((error) => {
    console.error("Fetch error:", error);
});