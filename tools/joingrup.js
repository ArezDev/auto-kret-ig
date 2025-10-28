const me = require("CurrentUserInitialData").USER_ID;
const jsonVariables = new URLSearchParams({
    variables : `{"feedType":"DISCUSSION","groupID":"1591894091361088","input":{"action_source":"GROUP_MALL","attribution_id_v2":"CometGroupDiscussionRoot.react,comet.group,unexpected,1754914627336,155611,2361831622,,;GroupsCometDiscoverRoot.react,comet.groups.discover,unexpected,1754914619168,654801,,,;GroupsCometCrossGroupFeedRoot.react,comet.groups.feed,tap_tabbar,1754914617220,169823,2361831622,,","group_id":"1591894091361088","group_share_tracking_params":{"app_id":"2220391788200892","exp_id":"null","is_from_share":false},"actor_id":"${me}","client_mutation_id":"2"},"inviteShortLinkKey":null,"isChainingRecommendationUnit":false,"scale":1,"source":"GROUP_MALL","renderLocation":"group_mall","__relay_internal__pv__GroupsCometGroupChatLazyLoadLastMessageSnippetrelayprovider":false}`,
    doc_id: '24578144681845834',
    fb_api_analytics_tags: '["qpl_active_flow_ids=431626709"]',
    ...require('getAsyncParams')('POST')
});