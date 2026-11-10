// type=http-response, requires-body=true, binary-body-mode=true
if ($request.method !== "POST") $done({});
const b = $response.body;
if (!b || b.byteLength < 100 || b.byteLength > 800000) $done({});

const markers = ["accountAttributes", "player-license", "assignedValues",
                 "exp-planner", "ios-feature-login", "catalogue"];
const hits = markers.filter(m => indexOf(b, ascii(m)) >= 0);
if (!hits.length) $done({});

const ct = $response.headers["Content-Type"] || $response.headers["content-type"] || "";
console.log(`[UCS] ${$request.url} len=${b.byteLength} first=0x${b[0].toString(16)} ct=${ct} hits=${hits.join("|")}`);
$done({});

function ascii(s) { const a = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) a[i] = s.charCodeAt(i); return a; }
function indexOf(h, n) {
  outer: for (let i = 0; i + n.length <= h.length; i++) {
    for (let k = 0; k < n.length; k++) if (h[i + k] !== n[k]) continue outer;
    return i;
  }
  return -1;
}
