let headers = $request.headers;
if(headers["spotify-app-version"]) { headers["spotify-app-version"] = "9.1.12.224"; }
if(headers["user-agent"]) { headers["user-agent"] = "Spotify/9.1.12.224 iOS/Version 26.4 (Build 23E246)"; } 
[
    "spotify-dsa-mode-enabled",
    "spotify-apply-lenses",
    "x-accept-list-items",
    "priority"
].forEach(key => {
    delete headers[key];
});
$done({headers});
