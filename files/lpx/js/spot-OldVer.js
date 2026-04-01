let headers = $request.headers;
if(headers["spotify-app-version"]) { headers["spotify-app-version"] = "9.1.14.864"; }
if(headers["user-agent"]) { headers["user-agent"] = "Spotify/9.1.14.864 iOS/Version 26.4 (Build 23E246)"; } 
$done({headers});
